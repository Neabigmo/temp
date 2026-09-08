"""Finite formal audit for the R157 universal sparse-shape reduction.

This version keeps the angular variable as a small exact Laurent-polynomial
dictionary instead of asking SymPy to expand a large rational expression. It
therefore checks only a finite formal truncation; it does *not* establish
convergence, positivity, or a genuine probability law.
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Dict

import sympy as sp


Coeff = sp.Expr


@dataclass(frozen=True)
class Laurent:
    terms: Dict[int, Coeff]

    @staticmethod
    def zero() -> "Laurent":
        return Laurent({})

    @staticmethod
    def one() -> "Laurent":
        return Laurent({0: sp.Integer(1)})

    def __add__(self, other: "Laurent") -> "Laurent":
        out = dict(self.terms)
        for exponent, value in other.terms.items():
            out[exponent] = sp.expand(out.get(exponent, 0) + value)
            if out[exponent] == 0:
                del out[exponent]
        return Laurent(out)

    def scale(self, value: Coeff) -> "Laurent":
        return Laurent({e: sp.expand(value * c) for e, c in self.terms.items()})

    def __mul__(self, other: "Laurent") -> "Laurent":
        out: Dict[int, Coeff] = {}
        for e1, c1 in self.terms.items():
            for e2, c2 in other.terms.items():
                exponent = e1 + e2
                out[exponent] = sp.expand(out.get(exponent, 0) + c1 * c2)
        return Laurent({e: c for e, c in out.items() if c != 0})

    def power(self, exponent: int) -> "Laurent":
        result = Laurent.one()
        for _ in range(exponent):
            result = result * self
        return result

    def constant(self) -> Coeff:
        return sp.simplify(self.terms.get(0, 0))


SQRT6_OVER_6 = sp.sqrt(6) / 6
SQRT2_OVER_4 = sp.sqrt(2) / 4
I = sp.I


def direction(j: int) -> Laurent:
    """rho*(omega^j*u + conjugate(omega)^j*u^-1)/2 for D3."""
    phase = j % 3
    if phase == 0:
        positive, negative = SQRT6_OVER_6, SQRT6_OVER_6
    elif phase == 1:
        positive = -sp.sqrt(6) / 12 + I * SQRT2_OVER_4
        negative = -sp.sqrt(6) / 12 - I * SQRT2_OVER_4
    else:
        positive = -sp.sqrt(6) / 12 - I * SQRT2_OVER_4
        negative = -sp.sqrt(6) / 12 + I * SQRT2_OVER_4
    return Laurent({1: positive, -1: negative})


def pivot(d: int, n: int) -> sp.Expr:
    """Complementary contraction defect 1 - <sum_j r_j^(2dn)> at s^n."""
    return sp.factor(
        1 - 3 * sp.binomial(2 * d * n, d * n) / sp.Integer(6) ** (d * n)
    )


def solve_even_factor(d: int, order: int) -> dict[int, sp.Expr]:
    """Solve the first ``order`` coefficients of A_d(s) formally."""
    directions = [direction(j) for j in range(3)]
    radii = [value.power(2 * d) for value in directions]
    pd = sum((value.power(d) for value in directions), Laurent.zero())
    cosh = [pd.power(2 * k).scale(sp.Rational(1, sp.factorial(2 * k)))
            for k in range(order + 1)]
    coefficients: dict[int, sp.Expr] = {0: sp.Integer(1)}

    for n in range(1, order + 1):
        candidate = sp.symbols(f"a_{n}")
        product = [Laurent.one()] + [Laurent.zero() for _ in range(n)]
        for radius in radii:
            updated = [Laurent.zero() for _ in range(n + 1)]
            for degree in range(n + 1):
                ak = coefficients.get(degree, candidate if degree == n else 0)
                updated[degree] = radius.power(degree).scale(ak)
            product = [
                sum((product[degree - k] * updated[k]
                     for k in range(degree + 1)), Laurent.zero())
                for degree in range(n + 1)
            ]

        equation = sum(
            (cosh[k] * product[n - k] for k in range(n + 1)), Laurent.zero()
        ).constant()
        solution = sp.solve(sp.Eq(equation, 0), candidate)
        assert len(solution) == 1, (d, n, equation, solution)
        coefficients[n] = sp.factor(solution[0])

        # In the displayed equation, the direct coefficient of a_n is
        # mu_{d,n}=<sum_j R_j^n>; ``pivot`` is its complementary defect.
        actual_pivot = sp.simplify(sp.diff(equation, candidate))
        assert sp.simplify(actual_pivot + pivot(d, n) - 1) == 0

    return coefficients


def universal_shape_coefficients(even_factor: dict[int, sp.Expr], order: int) -> list[sp.Expr]:
    """Return beta_n in exp(t) A(t^2) through degree ``order``."""
    return [
        sp.factor(
            sum(
                even_factor[k] / sp.factorial(n - 2 * k)
                for k in range(n // 2 + 1)
                if k in even_factor
            )
        )
        for n in range(order + 1)
    ]


def check_pivots() -> None:
    for d in (5, 7, 9, 11):
        for n in range(1, 9):
            value = pivot(d, n)
            assert value > 0
            assert value < 1
    print("R157_D3_CONTRACTION_PIVOTS_PASSED", flush=True)


def check_formal_shape() -> None:
    d = 5
    order = 3
    even_factor = solve_even_factor(d, order)
    beta = universal_shape_coefficients(even_factor, 2 * order)

    assert even_factor[0] == 1
    assert all(sp.denom(value) != 0 for value in even_factor.values())
    print("R157_ONE_VARIABLE_RECURSION_PASSED", flush=True)
    print("R157_EVEN_LOG_SHAPE_PASSED", flush=True)
    print("R157_D5_A_COEFFICIENTS=" + repr(even_factor), flush=True)
    print("R157_D5_BETA_COEFFICIENTS=" + repr(beta), flush=True)

    directions = [direction(j) for j in range(3)]
    radii = [value.power(2 * d) for value in directions]
    pd = sum((value.power(d) for value in directions), Laurent.zero())
    cosh = [pd.power(2 * k).scale(sp.Rational(1, sp.factorial(2 * k)))
            for k in range(order + 1)]
    product = [Laurent.one()] + [Laurent.zero() for _ in range(order)]
    for radius in radii:
        updated = [
            radius.power(degree).scale(even_factor[degree])
            for degree in range(order + 1)
        ]
        product = [
            sum((product[degree - k] * updated[k]
                 for k in range(degree + 1)), Laurent.zero())
            for degree in range(order + 1)
        ]
    residual = [
        sum((cosh[k] * product[n - k] for k in range(n + 1)), Laurent.zero()).constant()
        for n in range(order + 1)
    ]
    assert residual[0] == 1
    assert all(sp.simplify(residual[n]) == 0 for n in range(1, order + 1))
    print("R157_FINITE_FORMAL_RESIDUAL_PASSED", flush=True)
    print("R157_SCOPE_EXPLICIT: finite formal coefficients only; convergence, positivity, and genuine law remain open", flush=True)
    print("R157_AUDIT_COMPLETED", flush=True)


if __name__ == "__main__":
    check_pivots()
    check_formal_shape()
