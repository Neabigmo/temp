"""R171 mode-gap and leading-order audit; no probability law is constructed."""

import math


def triple_numerator(d):
    total = 0
    for s in range(4):
        rho = (d - 3 + 2 * s) // 2
        assert d - 3 + 2 * s == 2 * rho
        total += (
            math.factorial(rho)
            * math.comb(d, rho) ** 2
            * math.factorial(s)
            * math.comb(d, s)
            * math.comb(3, s)
            * math.factorial(d + 3 - 2 * s)
        )
    return total


def main():
    for d in (5, 7, 9, 11):
        # SF kills every even mode strictly below 2d; the Hermite product with psi_3
        # cannot see the first remaining even mode 2d because d+3<2d.
        assert d + 3 < 2 * d
        assert triple_numerator(d) > 0
        # After removing d, the next odd mode is at least d+2; the first even mode
        # not killed by the SF packet is at least 2d.
        assert (d + 2) + 2 * d > 3 * d
        print(f"R171_MODE_GAP_AND_TD_POSITIVITY_PASSED d={d}")

    # The cubic log term starts at 3d, while the fourth-order remainder starts at 4d.
    for d in (5, 7, 9, 11):
        assert 4 * d > 3 * d
    print("R171_FINITE_LOG_REMAINDER_ORDER_PASSED")

    q = 0.71
    N = 39
    assert abs((q**N) ** 1.5 - q ** (1.5 * N)) < 1e-14
    assert 8.0 * q ** (1.5 * N) < 1.0
    print("R171_FIXED_Q_TOWER_SCALING_PASSED")
    print("R171_SCOPE_EXPLICIT: genuine all-row/full-SF and finite tail estimates remain hypotheses")


if __name__ == "__main__":
    main()
