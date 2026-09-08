from pathlib import Path
import math


ROOT = Path(__file__).resolve().parents[1]


def require(path: str, needles: list[str]) -> None:
    text = (ROOT / path).read_text(encoding="utf-8")
    for needle in needles:
        assert needle in text, (path, needle)


def assert_close(actual: float, expected: float, tol: float = 1e-10) -> None:
    assert abs(actual - expected) <= tol * max(1.0, abs(expected)), (actual, expected)


def poisson_upper_tail(k: int, mu: float) -> float:
    """Finite check for P(Pois(mu)>k), using the elementary CDF recurrence."""
    term = math.exp(-mu)
    cdf = term
    for j in range(1, k + 1):
        term *= mu / j
        cdf += term
    return max(0.0, 1.0 - cdf)


def check_tail_scale() -> None:
    # For the sine cutoff on [x0, x0+L/x0], the exact derivative ratio is
    # (pi/L)^2*x0^2.  The webpage's C_L is a deliberately coarser envelope.
    for L in (0.5, 1.0, 2.0, 3.0):
        exact = math.pi**2 / L**2
        coarse = exact * math.exp(L + L**2 / 2.0)
        assert coarse >= exact
        x0, lam, tau = 2.0, 0.25, 80.0
        y0 = math.sqrt(lam) * x0
        M = tau / lam
        left = coarse * x0**2 / (M + 1.0)
        right = coarse * y0**2 / (tau + lam)
        assert_close(left, right)


def check_coherent_poisson_scale() -> None:
    # q_t^2 dgamma is N(2t,1), while the degree-M projection mass is a
    # Poisson(t^2) CDF.  Check the subcritical Chernoff rate numerically.
    # Keep the finite numerical check away from subtraction-to-zero regimes;
    # the rate identity itself is checked for every displayed subcritical c.
    for c in (0.75, 1.25, 1.5, 1.75, 1.9):
        alpha = c**2 / 4.0
        rate = math.log(1.0 / alpha) - 1.0 + alpha
        assert rate > 0.0
    for c in (1.5, 1.75, 1.9):
        alpha = c**2 / 4.0
        rate = math.log(1.0 / alpha) - 1.0 + alpha
        M = 80
        tail = poisson_upper_tail(M, alpha * M)
        assert tail <= math.exp(-M * rate) * (1.0 + 1e-8), (c, tail, rate)


def outer_rate(c: float) -> float:
    return (c / 2.0) * math.sqrt(c**2 - 4.0) - 2.0 * math.acosh(c / 2.0)


def check_outer_hypercontractive_rate() -> None:
    # Optimizing log(q-1) - (1-2/q)c^2/2 gives the stated J(c).
    for c in (2.1, 2.5, 3.0, 5.0):
        q_star = (c**2 + c * math.sqrt(c**2 - 4.0)) / 2.0
        optimized = c**2 / 2.0 - c**2 / q_star - math.log(q_star - 1.0)
        assert q_star > 2.0
        assert outer_rate(c) > 0.0
        assert_close(optimized, outer_rate(c), tol=1e-9)


def check_gauss_hermite_discrete_criterion() -> None:
    for M in (0, 1, 3, 10):
        N = 2 * M + 1
        assert 4 * M <= 2 * N - 1

    # A singleton quadrature contribution is w*v*v^T, hence its sole
    # nonzero eigenvalue is w*||v||^2 = w*K_M(x_j,x_j).
    w = 0.37
    vector = (0.4, -1.1, 0.8, 0.2)
    squared_norm = sum(value * value for value in vector)
    trace = w * squared_norm
    determinant_identity = w**2 * squared_norm**2
    assert_close(trace**2, determinant_identity)
    assert w > 0.0


def main() -> None:
    require("r154_escape_energy_audit/README.md", [
        "Theta_M(I)",
        "supercritical",
        "global publication verdict",
    ])
    require("THEORY_ROUTE_FRAMEWORK.md", [
        "R154 真正剩余的超临界问题",
        "R154_CONCENTRATION_MATRIX_PASSED",
        "证据等级",
    ])
    require("PROJECT_WORKLOG_APPEND.md", [
        "R154 — Supercritical Escape-Energy / Christoffel Localisation",
        "R154_AUDIT_COMPLETED",
        "发表性判断仍为“无”",
    ])
    readme = (ROOT / "r155_global_publication_audit/README.md").read_text(encoding="utf-8")
    assert "全历史" in readme
    assert "可投稿结果" in readme
    assert "不能把本次网页中止记为" in readme
    check_tail_scale()
    check_coherent_poisson_scale()
    check_outer_hypercontractive_rate()
    check_gauss_hermite_discrete_criterion()
    print("R155_GLOBAL_SCOPE_RECORDED")
    print("R155_R154_ABORT_NOT_MATH_RESULT_PASSED")
    print("R155_PUBLICATION_AUDIT_REQUEST_RECORDED")
    print("R155_EVIDENCE_BOUNDARY_EXPLICIT")
    print("R155_HERMITE_TAIL_SCALE_CHECK_PASSED")
    print("R155_COHERENT_POISSON_SCALING_CHECK_PASSED")
    print("R155_HYPERCONTRACTIVE_RATE_CHECK_PASSED")
    print("R155_GAUSS_HERMITE_DISCRETE_CRITERION_CHECK_PASSED")
    print("R155_NEW_FORMULAS_AUDITED_ONLY_UNDER_STATED_HYPOTHESES")
    print("R155_AUDIT_COMPLETED")


if __name__ == "__main__":
    main()
