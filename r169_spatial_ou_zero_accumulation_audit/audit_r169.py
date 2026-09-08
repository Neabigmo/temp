"""R169 analytic zero-accumulation audit; no probability law is constructed."""

import math


def main():
    # A formal local analytic germ F(r)=c*r^k+R(r), |R(r)| <= C*r^(k+1).
    c = 2.5
    k = 5
    C = 3.0
    r_star = min(0.1, abs(c) / (2.0 * C))
    assert r_star > 0
    leading = abs(c) * r_star**k
    remainder_bound = C * r_star ** (k + 1)
    assert remainder_bound <= leading / 2.0 * (1.0 + 1e-14)
    print("R169_ANALYTIC_LEADING_TERM_ZERO_EXCLUSION_PASSED")

    for q in (0.2, 0.6, 0.9, 0.995):
        n0 = max(0, math.ceil(2.0 * math.log(r_star) / math.log(q)))
        assert q ** (n0 / 2.0) <= r_star * (1.0 + 1e-12)
        assert q ** ((n0 + 1) / 2.0) < q ** (n0 / 2.0)
        print(f"R169_FIXED_Q_ZERO_ACCUMULATION_PASSED q={q} N0={n0}")

    # R168 is the k=3 spatial log-density instance with t=r^2.
    q = 0.7
    N = 31
    assert abs((q**N) ** 1.5 - q ** (1.5 * N)) < 1e-15
    assert 8.0 * q ** (1.5 * N) < 1.0
    print("R169_R168_K3_SPECIALIZATION_AND_TOWER_L2_PASSED")
    print("R169_SCOPE_EXPLICIT: non-flatness remains an open hypothesis")


if __name__ == "__main__":
    main()
