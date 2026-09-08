"""Exact finite-sector audit for the R174 cross-harmonic wall."""

from __future__ import annotations

import sympy as sp


def c(n: int, r: int) -> sp.Expr:
    k_num = n - 3 * r
    if k_num % 2 or k_num < 0 or k_num > 2 * n:
        return sp.Integer(0)
    k = k_num // 2
    return sp.simplify(3 * sp.Integer(6) ** (-sp.Rational(n, 2)) * sp.binomial(n, k))


def support_ok(d: int) -> None:
    """At total 2d, only (2d,0,0) and (d,d,0) can survive."""
    allowed = lambda k: k == 0 or (k >= d and k % 2 == 1) or (k >= 2 * d and k % 2 == 0)
    for k1 in range(2 * d + 1):
        for k2 in range(2 * d - k1 + 1):
            k3 = 2 * d - k1 - k2
            ks = (k1, k2, k3)
            if not all(allowed(k) for k in ks):
                continue
            positive = sorted(k for k in ks if k > 0)
            assert positive in ([2 * d], [d, d]), (d, ks)


def constants(d: int) -> tuple[sp.Expr, sp.Expr, sp.Expr, sp.Expr, sp.Expr]:
    A = c(2 * d, 0)
    B = sp.simplify(sum(c(d, r) * c(d, -r) for r in range(-d, d + 1, 2)))
    H = sp.simplify(sum(c(d, r) * c(d, 2 - r) for r in range(-d, d + 1, 2)))
    L = c(2 * d, 2)
    D = sp.simplify((H - L) / 2)
    a2d_over_ad2 = sp.simplify(
        sp.sqrt(sp.factorial(2 * d)) / (2 * sp.factorial(d)) * (1 - B / A)
    )
    C = sp.simplify(L * a2d_over_ad2 + sp.sqrt(sp.factorial(2 * d)) / sp.factorial(d) * D)
    return A, B, H, L, C


expected = {
    3: 3 * sp.sqrt(5) / 80,
    5: 25 * sp.sqrt(7) / 448,
    7: 245 * sp.sqrt(858) / 41472,
}

for d, value in expected.items():
    support_ok(d)
    A, B, H, L, C = constants(d)
    assert A.is_positive is True
    assert B.is_positive is True
    assert H.is_positive is True
    assert L.is_positive is True
    assert sp.simplify(C - value) == 0
    assert C.is_positive is True

for d in range(3, 42, 2):
    support_ok(d)
    A, B, H, L, C = constants(d)
    assert A.is_positive is True and L.is_positive is True

print("R174_2D_CROSS_HARMONIC_SUPPORT_PASSED")
print("R174_FULL_SF_2D_COEFFICIENT_CLOSURE_PASSED")
print("R174_D3_D5_D7_POSITIVE_CONSTANTS_PASSED")
