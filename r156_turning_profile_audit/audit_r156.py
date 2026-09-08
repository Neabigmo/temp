"""Finite/formal R156 experiment for one sparse full-SF branch.

This deliberately stays below the genuine-law level.  It solves the angular
full-SF even recursion to a finite grade, constructs the corresponding finite
formal cumulant/moment jet, and checks the Gauss-node sign implication.  Any
observed sign profile is exploratory and is not promoted to an asymptotic
turning theorem.
"""

from __future__ import annotations

from collections import defaultdict
import math

import numpy as np
import sympy as sp


u, z = sp.symbols("u z")
rho = sp.sqrt(sp.Rational(2, 3))
omega = -sp.Rational(1, 2) + sp.sqrt(3) * sp.I / 2
omega_bar = -sp.Rational(1, 2) - sp.sqrt(3) * sp.I / 2


def direction(j: int) -> sp.Expr:
    return sp.expand(rho * (omega**j * u + omega_bar**j / u) / 2)


def p(m: int) -> sp.Expr:
    return sp.expand(sum(direction(j) ** m for j in range(3)))


def average(expr: sp.Expr) -> sp.Expr:
    return sp.simplify(sp.expand(expr).coeff(u, 0))


def truncate(expr: sp.Expr, order: int) -> sp.Expr:
    expanded = sp.expand(expr)
    return sp.expand(
        sum(expanded.coeff(z, degree) * z**degree for degree in range(order + 1))
    )


def exp_truncated(expr: sp.Expr, order: int) -> sp.Expr:
    if sp.expand(expr) == 0:
        return sp.Integer(1)
    visible_degrees = [
        degree for degree in range(1, order + 1)
        if sp.expand(expr).coeff(z, degree) != 0
    ]
    if not visible_degrees:
        return sp.Integer(1)
    min_degree = min(visible_degrees)
    return truncate(
        sum(expr**j / sp.factorial(j) for j in range(order // min_degree + 1)), order
    )


def solve_sparse_completion(d: int, amplitude: sp.Rational, max_degree: int) -> dict[int, sp.Expr]:
    even_symbols = {
        degree: sp.symbols(f"kappa_{degree}", real=True)
        for degree in range(4, max_degree + 1, 2)
    }
    cumulants: dict[int, sp.Expr] = {
        degree: sp.Integer(0) for degree in range(3, max_degree + 1)
    }
    cumulants[d] = amplitude
    cumulants.update(even_symbols)
    solved: dict[int, sp.Expr] = {}

    for degree in range(4, max_degree + 1, 2):
        current = dict(cumulants)
        current.update(solved)
        log_weight = sum(
            current[m] * z**m * p(m) / sp.factorial(m)
            for m in range(3, max_degree + 1)
        )
        equation = sp.expand(average(exp_truncated(log_weight, degree))).coeff(z, degree)
        solution = [sp.Integer(0)] if equation == 0 else sp.solve(equation, even_symbols[degree])
        assert len(solution) == 1, (d, degree, equation, solution)
        solved[degree] = sp.factor(solution[0])
    return {**cumulants, **solved}


def hermite_values(x: float, degree: int) -> list[float]:
    values = [1.0]
    if degree == 0:
        return values
    values.append(float(x))
    for n in range(2, degree + 1):
        values.append(float(x) * values[-1] - (n - 1) * values[-2])
    return values


def hermite_coefficients(degree: int) -> list[list[float]]:
    coeffs: list[list[float]] = [[1.0]]
    if degree == 0:
        return coeffs
    coeffs.append([0.0, 1.0])
    for n in range(2, degree + 1):
        current = [0.0] * (n + 1)
        for power, value in enumerate(coeffs[-1]):
            current[power + 1] += value
        for power, value in enumerate(coeffs[-2]):
            current[power] -= (n - 1) * value
        coeffs.append(current)
    return coeffs


def formal_moments(cumulants: dict[int, sp.Expr], order: int) -> tuple[list[float], list[float]]:
    excess = sum(
        cumulants[m] * z**m / sp.factorial(m) for m in sorted(cumulants) if m >= 3
    )
    excess_series = exp_truncated(excess, order)
    gaussian_series = exp_truncated(z**2 / 2, order)
    mgf = truncate(gaussian_series * excess_series, order)
    moments = [float(sp.N(mgf.coeff(z, n) * sp.factorial(n), 18)) for n in range(order + 1)]
    density_coefficients = [float(sp.N(excess_series.coeff(z, n), 18)) for n in range(order + 1)]
    return moments, density_coefficients


def gram_from_moments(moments: list[float], M: int) -> np.ndarray:
    hermites = hermite_coefficients(M)
    matrix = np.zeros((M + 1, M + 1), dtype=float)
    for i in range(M + 1):
        for j in range(M + 1):
            value = 0.0
            for r, left in enumerate(hermites[i]):
                for s, right in enumerate(hermites[j]):
                    value += left * right * moments[r + s]
            matrix[i, j] = value / math.sqrt(math.factorial(i) * math.factorial(j))
    return matrix


def density_value(coefficients: list[float], x: float, M: int) -> float:
    values = hermite_values(x, 2 * M)
    return sum(coefficients[n] * values[n] for n in range(2 * M + 1))


def central_trinomial(n: int) -> int:
    return sum(
        math.factorial(n) // (math.factorial(j) ** 2 * math.factorial(n - 2 * j))
        for j in range(n // 2 + 1)
    )


def hermite_values_array(x: np.ndarray, degree: int) -> np.ndarray:
    values = np.empty((degree + 1, len(x)), dtype=float)
    values[0] = 1.0
    if degree == 0:
        return values
    values[1] = x
    for n in range(2, degree + 1):
        values[n] = x * values[n - 1] - (n - 1) * values[n - 2]
    return values


def quadratic_model_audit(d: int = 5, amplitude: float = 1e-2) -> tuple[int, float, float, int]:
    b_d = central_trinomial(d) / math.comb(2 * d, d)
    tau_star = (2 * b_d) ** (-2.0 / d)
    lam = abs(amplitude) ** (2.0 / d)
    M = max(1, math.floor(tau_star / lam))
    nodes, weights = np.polynomial.hermite_e.hermegauss(2 * M + 1)
    weights = weights / math.sqrt(2 * math.pi)
    values = hermite_values_array(nodes, 2 * d)
    node_values = 1.0 + amplitude * values[d] + b_d * amplitude**2 * values[2 * d]
    basis = values[: M + 1] / np.sqrt(
        np.array([math.factorial(n) for n in range(M + 1)], dtype=float)[:, None]
    )
    gram = (basis * (weights * node_values)[None, :]) @ basis.T
    min_eigenvalue = float(np.linalg.eigvalsh(gram)[0])
    negative_nodes = int(np.sum(node_values < -1e-8))
    return M, float(np.min(node_values)), min_eigenvalue, negative_nodes


def gauss_node_report(coefficients: list[float], M: int) -> tuple[np.ndarray, np.ndarray]:
    nodes, weights = np.polynomial.hermite_e.hermegauss(2 * M + 1)
    weights = weights / math.sqrt(2 * math.pi)
    values = np.array([density_value(coefficients, float(x), M) for x in nodes])
    return nodes, values


def check_branch(
    d: int = 5,
    amplitude: sp.Rational = sp.Rational(1, 50),
    max_degree: int = 24,
) -> None:
    cumulants = solve_sparse_completion(d, amplitude, max_degree)
    moments, coefficients = formal_moments(cumulants, max_degree)
    cap = 1.0 / math.sqrt(math.factorial(d) * math.comb(d, (d - 1) // 2))
    assert float(abs(amplitude)) < cap

    first_failure = None
    reports: list[tuple[int, float, float, int]] = []
    negative_node_while_gram_psd: list[int] = []
    for M in range(1, max_degree // 2 + 1):
        gram = gram_from_moments(moments, M)
        eigenvalues = np.linalg.eigvalsh(gram)
        nodes, node_values = gauss_node_report(coefficients, M)
        gh_gram = np.zeros_like(gram)
        for x, value, weight in zip(nodes, node_values, np.polynomial.hermite_e.hermegauss(2 * M + 1)[1] / math.sqrt(2 * math.pi)):
            vector = np.array(hermite_values(float(x), M)) / np.sqrt(
                np.array([math.factorial(n) for n in range(M + 1)], dtype=float)
            )
            gh_gram += weight * value * np.outer(vector, vector)
        assert np.max(np.abs(gram - gh_gram)) < 2e-7 * max(1.0, np.max(np.abs(gram)))
        negative_nodes = int(np.sum(node_values < -1e-9))
        reports.append((M, float(eigenvalues[0]), float(np.min(node_values)), negative_nodes))
        if negative_nodes and eigenvalues[0] > 1e-8:
            negative_node_while_gram_psd.append(M)
        if first_failure is None and eigenvalues[0] < -1e-8:
            first_failure = M

    assert negative_node_while_gram_psd, reports
    quadratic_M, quadratic_min_node, quadratic_min_eigenvalue, quadratic_negative_nodes = quadratic_model_audit()
    assert quadratic_negative_nodes > 0
    assert quadratic_min_eigenvalue < -1e-6
    print("R156_SPARSE_FORMAL_COMPLETION_FINITE_GRADE_PASSED")
    print("R156_GAUSS_HERMITE_EXACT_REPLAY_PASSED")
    print("R156_NEGATIVE_NODE_WITH_GRAM_PSD_PASSED")
    print("R156_QUADRATIC_MODEL_BULK_AUDIT_PASSED")
    print(f"R156_FIXED_D5_AMPLITUDE={float(amplitude):.8g}")
    if first_failure is None:
        print("R156_FIRST_FAILURE_M=NONE_WITHIN_AUDITED_GRADE")
    else:
        first_nodes, first_values = gauss_node_report(coefficients, first_failure)
        print(f"R156_FIRST_FAILURE_M={first_failure}")
        print(
            "R156_FIRST_FAILURE_NODE_PROFILE="
            + repr(
                [
                    (round(float(x), 8), round(float(v), 8), round(abs(float(x)) / math.sqrt(first_failure), 8))
                    for x, v in zip(first_nodes, first_values)
                    if v < -1e-9
                ]
            )
        )
    print(f"R156_NEGATIVE_NODE_PSD_M={negative_node_while_gram_psd}")
    print("R156_FINITE_NODE_PROFILE=" + repr(reports))
    print(
        "R156_QUADRATIC_MODEL_PROFILE="
        + repr(
            {
                "M": quadratic_M,
                "min_node": quadratic_min_node,
                "min_eigenvalue": quadratic_min_eigenvalue,
                "negative_nodes": quadratic_negative_nodes,
            }
        )
    )
    print("R156_SCOPE_EXPLICIT: finite formal branch only; no asymptotic A/B theorem or genuine law")
    print("R156_AUDIT_COMPLETED")


if __name__ == "__main__":
    check_branch()
