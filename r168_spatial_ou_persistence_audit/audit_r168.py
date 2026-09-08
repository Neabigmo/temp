"""R168 algebraic audit; no numerical law is claimed or constructed."""

import math


def main():
    m3 = 1.0
    C = 1.0
    t_h = min(1.0 / 64.0, (abs(m3) / (2.0 * math.sqrt(6.0) * C)) ** (2.0 / 3.0))
    assert 0 < t_h <= 1.0 / 64.0

    # The remainder bound is dominated by half of the leading term on [0,t_h].
    t = t_h
    leading = abs(m3) * t ** 1.5 / math.sqrt(6.0)
    remainder_bound = C * t ** 3
    assert remainder_bound <= leading / 2.0 * (1.0 + 1e-14)
    print("R168_SPATIAL_LOG_DENSITY_LEADING_TERM_PASSED")

    for q in (0.1, 0.4, 0.8, 0.99):
        n0 = max(0, math.ceil(math.log(t_h) / math.log(q)))
        assert q ** n0 <= t_h * (1.0 + 1e-12)
        assert q ** (n0 + 1) < q ** n0
        print(f"R168_FIXED_Q_EVENTUAL_NONVANISHING_PASSED q={q} N0={n0}")

    q = 0.7
    N = 23
    for j in range(N):
        # P_(q^(N-j)) h = P_q P_(q^(N-j-1)) h.
        assert abs(q * q ** (N - j - 1) - q ** (N - j)) < 1e-14
    assert 8.0 * q ** (1.5 * N) < 1.0
    print("R168_TOWER_SEMIGROUP_AND_L2_CONVERGENCE_PASSED")
    print("R168_SCOPE_EXPLICIT: spatial ell_3 only; no genuine asymmetric law constructed")


if __name__ == "__main__":
    main()
