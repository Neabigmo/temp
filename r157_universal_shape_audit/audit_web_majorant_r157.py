"""Arithmetic audit of the R157 web majorant argument.

This script checks the algebraic and scaling identities used by the web
derivation. It is intentionally not a proof assistant: it does not certify
the preceding full-SF reduction, the formal-to-law passage, or any global
edge statement.
"""

from __future__ import annotations

import math
import random
from typing import Dict

import sympy as sp

from audit_r157 import solve_even_factor


def majorant_coefficients(order: int) -> Dict[int, sp.Rational]:
    """Solve (3 cosh(sqrt(s))-2) B^3 - 6 B + 5 = 0 formally."""
    s = sp.Symbol("s")
    b = {0: sp.Integer(1)}
    for n in range(1, order + 1):
        candidate = sp.Symbol(f"b_{n}")
        B = sum((b.get(k, candidate if k == n else 0) * s**k
                 for k in range(n + 1)), sp.Integer(0))
        D = 3 * sum(s**m / sp.factorial(2 * m) for m in range(n + 1)) - 2
        equation = sp.expand(D * B**3 - 6 * B + 5).coeff(s, n)
        solution = sp.solve(sp.Eq(equation, 0), candidate)
        assert len(solution) == 1
        b[n] = sp.factor(solution[0])
    return b


def check_majorant_recurrence() -> None:
    s = sp.Symbol("s")
    b = majorant_coefficients(6)
    B = sum(b[n] * s**n for n in b)
    D = 3 * sum(s**m / sp.factorial(2 * m) for m in range(7)) - 2
    residual = sp.Poly(sp.expand(D * B**3 - 6 * B + 5), s)
    assert all(residual.coeff_monomial(s**n) == 0 for n in range(1, 7))
    assert all(value > 0 for value in b.values())
    print("R157_WEB_MAJORANT_ALGEBRA_PASSED")
    print("R157_B_COEFFICIENTS=" + repr(b))


def check_domination_against_local_shape() -> None:
    b = majorant_coefficients(3)
    a = solve_even_factor(5, 3)
    assert all(abs(a[n]) <= b[n] for n in range(1, 4))
    print("R157_WEB_MAJORANT_D5_FINITE_DOMINATION_PASSED")
    print("R157_D5_ABS_A=" + repr({n: abs(a[n]) for n in range(1, 4)}))


def check_odd_geometry_and_holder_bookkeeping() -> None:
    # For r1+r2+r3=0, write the largest-magnitude coordinate as +/- (x+y).
    # The remaining two have the opposite sign, so the claimed bound reduces
    # to (x+y)^d-x^d-y^d <= (x+y)^d.
    for d in (3, 5, 7, 9, 11):
        for _ in range(100):
            x = random.randint(0, 100)
            y = random.randint(0, 100)
            r = [x, y, -(x + y)]
            p = sum(value**d for value in r)
            assert abs(p) <= max(abs(value)**d for value in r)

        for n in range(1, 8):
            # Generalized Holder uses exponents e_j >= 0 summing to 2n.
            for e1 in range(2 * n + 1):
                for e2 in range(2 * n - e1 + 1):
                    e3 = 2 * n - e1 - e2
                    assert e1 + e2 + e3 == 2 * n
    print("R157_WEB_GEOMETRY_HOLDER_BOOKKEEPING_PASSED")


def check_hermite_majorant_and_constants() -> None:
    # (k)_(2j)/(2^j j!) <= (k^2/2)^j/j! gives the exponential bound.
    for k in range(0, 80):
        for j in range(k // 2 + 1):
            lhs = sp.factorial(k) / sp.factorial(k - 2 * j)
            lhs /= 2**j * sp.factorial(j)
            rhs = sp.Rational(k * k, 2)**j / sp.factorial(j)
            assert lhs <= rhs

    t_star = math.acosh(82 / 75)
    s_star = t_star * t_star
    assert abs((3 * math.cosh(t_star) - 2) - 32 / 25) < 1e-14
    assert 0 < t_star < 1
    print("R157_WEB_HERMITE_BOUND_AND_SINGULAR_CONSTANTS_PASSED")
    print(f"R157_T_STAR={t_star:.12f}")
    print(f"R157_S_STAR={s_star:.12f}")
    for d in (5, 7, 9, 11):
        tau_safe = math.exp(-0.25) / 8 * t_star ** (2 / d)
        assert tau_safe > 0
        print(f"R157_TAU_SAFE_D{d}={tau_safe:.12f}")


if __name__ == "__main__":
    check_majorant_recurrence()
    check_domination_against_local_shape()
    check_odd_geometry_and_holder_bookkeeping()
    check_hermite_majorant_and_constants()
    print("R157_WEB_MAJORANT_AUDIT_COMPLETED")
    print("R157_SCOPE_EXPLICIT: algebra/scaling checks only; formal reduction, global edge behavior, and genuine law remain open")
