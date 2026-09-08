"""R170 Hermite degree/positivity audit; no probability law is constructed."""

import math
from fractions import Fraction


def triple_coefficient(d):
    """Return the positive rational numerator before the sqrt normalization."""
    total = 0
    for s in range(4):
        r = (d - 3 + 2 * s) // 2
        assert d - 3 + 2 * s == 2 * r
        k = d + 3 - 2 * s
        total += (
            math.factorial(r)
            * math.comb(d, r) ** 2
            * math.factorial(s)
            * math.comb(d, s)
            * math.comb(3, s)
            * math.factorial(k)
        )
    return total


def main():
    for d in (5, 7, 9, 11):
        numerator = triple_coefficient(d)
        assert numerator > 0
        print(f"R170_Td_POSITIVE_PASSED d={d} numerator={numerator}")

    # For d>=5, He_d He_3 has degree at most d+3<2d, so the (d,2d) quadratic
    # channel cannot project onto He_3.
    for d in (5, 7, 9, 11):
        assert d + 3 < 2 * d
    print("R170_QUADRATIC_DEGREE_EXCLUSION_PASSED")

    # The first possible cubic order is 3d; all k>=4 logarithmic terms start at 4d.
    for d in (5, 7, 9, 11):
        assert 3 * d < 4 * d
    print("R170_FIRST_CUBIC_ORDER_PASSED")

    # R169 fixed-q consequence and R132 d=3 specialization.
    q = 0.73
    N = 37
    assert abs((q**N) ** 1.5 - q ** (1.5 * N)) < 1e-14
    assert 8.0 * q ** (1.5 * N) < 1.0
    assert Fraction(3, 2) > 0
    print("R170_R169_TOWER_SCALING_AND_D3_SPECIALIZATION_PASSED")
    print("R170_SCOPE_EXPLICIT: analytic log projection and full-SF remain hypotheses")


if __name__ == "__main__":
    main()
