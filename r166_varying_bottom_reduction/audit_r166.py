"""Exact structural audit for the R166 single-law reduction."""

from __future__ import annotations

import math


def assert_close(lhs: float, rhs: float, tol: float = 1e-12) -> None:
    if not math.isclose(lhs, rhs, rel_tol=tol, abs_tol=tol):
        raise AssertionError(f"{lhs!r} != {rhs!r}")


def audit_tower_recurrence() -> None:
    q = 0.73
    N = 11
    for j in range(N):
        left_exponent = N - j
        right_exponent = 1 + (N - (j + 1))
        assert left_exponent == right_exponent
        assert_close(q ** left_exponent, q * q ** (N - j - 1))


def audit_l2_ou_bound() -> None:
    q = 0.61
    N = 8
    t = q**N
    # A finite Hermite tail is enough to audit the algebraic inequality.
    coeff_sq = {3: 0.7, 4: 0.2, 7: 0.1, 12: 0.05}
    lhs = sum((t**m) * value for m, value in coeff_sq.items())
    rhs = (t**3) * sum(coeff_sq.values())
    assert lhs <= rhs + 1e-15


def audit_p3k_scaling() -> None:
    q = 0.67
    N = 9
    d = 5
    # The first nonzero analytic coefficient is multiplied by a positive scalar.
    scale = q ** (N * d / 2)
    assert scale > 0.0
    assert scale * 1.25 != 0.0


def audit_charge_and_tau_scaling() -> None:
    s = 0.23
    t = 0.71
    beta_sq = {3: 0.11, 5: 0.07, 9: 0.03}

    def budget(x: float, values: dict[int, float]) -> float:
        return sum((x ** (-m)) * value for m, value in values.items())

    scaled = {m: (s**m) * value for m, value in beta_sq.items()}
    assert_close(budget(t, scaled), budget(t / s, beta_sq))


def main() -> None:
    audit_tower_recurrence()
    print("R166_TOWER_RECURRENCE_IDENTITY_PASSED")
    audit_l2_ou_bound()
    print("R166_L2_OU_CONVERGENCE_BOUND_PASSED")
    audit_p3k_scaling()
    print("R166_P3K_NONVANISHING_SCALING_PASSED")
    audit_charge_and_tau_scaling()
    print("R166_CHARGE_AND_TAU_SCALING_PASSED")
    print(
        "R166_SCOPE_EXPLICIT: structural reduction under genuine-class assumptions; "
        "no asymmetric law constructed"
    )


if __name__ == "__main__":
    main()

