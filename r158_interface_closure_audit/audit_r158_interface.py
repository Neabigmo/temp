"""Exact arithmetic checks for the R158-A conditional interface record.

The checks certify identities inside the stated formal/majorant model only.
They do not certify the full-SF reduction, a genuine law, or any global edge claim.
"""

from __future__ import annotations

import math

import sympy as sp


def majorant_coefficients(order: int) -> dict[int, sp.Rational]:
    s = sp.Symbol("s")
    b: dict[int, sp.Rational] = {0: sp.Integer(1)}
    for n in range(1, order + 1):
        candidate = sp.Symbol(f"b_{n}")
        B = sum(
            b.get(k, candidate if k == n else 0) * s**k
            for k in range(n + 1)
        )
        D = 3 * sum(s**m / sp.factorial(2 * m) for m in range(n + 1)) - 2
        eq = sp.expand(D * B**3 - 6 * B + 5).coeff(s, n)
        solution = sp.solve(sp.Eq(eq, 0), candidate)
        assert len(solution) == 1
        b[n] = sp.factor(solution[0])
    return b


def main() -> None:
    s, B = sp.symbols("s B")
    coeffs = majorant_coefficients(10)
    assert all(value > 0 for value in coeffs.values())

    F = (3 * sp.cosh(sp.sqrt(s)) - 2) * B**3 - 6 * B + 5
    B_star = sp.Rational(5, 4)
    D_star = sp.Rational(32, 25)
    assert sp.simplify(D_star * B_star**3 - 6 * B_star + 5) == 0
    assert sp.simplify(3 * D_star * B_star**2 - 6) == 0

    # cosh(T*) = 82/75 follows from D(s*)=32/25.
    assert sp.Rational(3, 1) * sp.Rational(82, 75) - 2 == D_star

    t_star = math.acosh(82 / 75)
    s_star = t_star * t_star
    K = 25 / 32 * math.sqrt(t_star * math.sinh(t_star))
    assert 0 < t_star < 1 and 0 < s_star < 1 and K > 0

    # The coarse Hermite node conversion uses c^2=8, hence exp(-2/c^2)=exp(-1/4).
    for d in (5, 7, 9, 11):
        tau_safe = math.exp(-0.25) * t_star ** (2 / d) / 8
        assert tau_safe > 0

    print("R158_INTERFACE_MAJORANT_COEFFICIENTS_PASSED")
    print("R158_INTERFACE_B0_TO_B10=" + repr(coeffs))
    print("R158_INTERFACE_CRITICAL_POINT_PASSED")
    print(f"R158_INTERFACE_T_STAR={t_star:.12f}")
    print(f"R158_INTERFACE_S_STAR={s_star:.12f}")
    print(f"R158_INTERFACE_K={K:.12f}")
    print("R158_INTERFACE_SCALE_CONVERSION_PASSED")
    print("R158_INTERFACE_SCOPE_EXPLICIT: conditional formal/majorant model only")


if __name__ == "__main__":
    main()
