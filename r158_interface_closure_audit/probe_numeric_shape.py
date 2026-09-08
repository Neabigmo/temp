"""Finite spectral probe for the d=5 universal one-variable equation.

This is deliberately an exploratory calculation, not a proof.  It uses the
same formal equation as R158-A and a periodic angular average.  The recursion
is only used to test the shape of the first 200 coefficients of A_5; no claim
about a radius of convergence or a genuine law is made here.
"""

from __future__ import annotations

import argparse
import math

import numpy as np


EXPECTED_FIRST_SIX = np.array(
    [
        -0.2976190476190476,
        0.0805203192490344,
        -0.0234296835545938,
        0.00724929930664061,
        -0.00232738459714993,
        0.000763969274987774,
    ]
)


def coefficient_probe(d: int, order: int, angular_samples: int) -> np.ndarray:
    """Return coefficients through ``s**order`` by periodic angular averaging."""

    theta = np.linspace(0.0, 2.0 * math.pi, angular_samples, endpoint=False)
    shifts = 2.0 * math.pi * np.arange(3)[:, None] / 3.0
    r = math.sqrt(2.0 / 3.0) * np.cos(theta[None, :] + shifts)
    q = r ** (2 * d)
    p = np.sum(r**d, axis=0)

    # f[j, n] is the n-th coefficient of A_d(s q_j).  Keeping the three
    # factors separate makes the coefficient pivot transparent.
    factors = np.zeros((3, order + 1, angular_samples), dtype=np.float64)
    factors[:, 0, :] = 1.0
    pair = np.zeros((order + 1, angular_samples), dtype=np.float64)
    product = np.zeros((order + 1, angular_samples), dtype=np.float64)
    pair[0] = 1.0
    product[0] = 1.0

    # c[m] is p(theta)**(2m)/(2m)!; calculate it recursively to avoid
    # factorial overflow and to keep the operation identical across runs.
    cosh_coeff = np.zeros((order + 1, angular_samples), dtype=np.float64)
    cosh_coeff[0] = 1.0
    for m in range(1, order + 1):
        cosh_coeff[m] = (
            cosh_coeff[m - 1]
            * p
            * p
            / ((2 * m) * (2 * m - 1))
        )

    q_power = np.ones((3, angular_samples), dtype=np.float64)
    coefficients = np.zeros(order + 1, dtype=np.float64)
    coefficients[0] = 1.0

    for n in range(1, order + 1):
        q_power *= q

        # Before inserting a_n, the n-th product coefficient contains only
        # a_1,...,a_(n-1).  The reversed slice performs the convolution in
        # the coefficient index while preserving the angular vectorization.
        pair[n] = np.sum(factors[0, : n + 1] * factors[1, n :: -1], axis=0)
        product[n] = np.sum(pair[: n + 1] * factors[2, n :: -1], axis=0)

        source = product[n].copy()
        for m in range(1, n + 1):
            source += cosh_coeff[m] * product[n - m]

        pivot = float(np.mean(np.sum(q_power, axis=0)))
        a_n = -float(np.mean(source)) / pivot
        coefficients[n] = a_n

        factors[:, n, :] = a_n * q_power
        pair[n] = np.sum(factors[0, : n + 1] * factors[1, n :: -1], axis=0)
        product[n] = np.sum(pair[: n + 1] * factors[2, n :: -1], axis=0)

    return coefficients


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--d", type=int, default=5)
    parser.add_argument("--order", type=int, default=200)
    parser.add_argument("--angular-samples", type=int, default=4096)
    args = parser.parse_args()

    coefficients = coefficient_probe(args.d, args.order, args.angular_samples)
    if args.d == 5 and args.order >= 6:
        error = float(np.max(np.abs(coefficients[1:7] - EXPECTED_FIRST_SIX)))
        assert error < 2e-13, error
        print("R158_NUMERIC_SHAPE_EXACT_LOW_ORDER_MATCH_PASSED")
        print(f"R158_NUMERIC_SHAPE_LOW_ORDER_MAX_ERROR={error:.3e}")

    signs = np.sign(coefficients[1:])
    expected_signs = np.array([(-1.0) ** n for n in range(1, args.order + 1)])
    alternating = bool(np.all(signs == expected_signs))
    print(f"R158_NUMERIC_SHAPE_ALTERNATING_TO_{args.order}={alternating}")

    checkpoints = [n for n in (6, 20, 60, 80, 100, 120, 150, 180, 200) if n <= args.order]
    ratios = {n: float(abs(coefficients[n - 1] / coefficients[n])) for n in checkpoints}
    print("R158_NUMERIC_SHAPE_RATIO_PROFILE=" + repr(ratios))
    print(
        "R158_NUMERIC_SHAPE_SCOPE_EXPLICIT: finite spectral angular probe only; "
        "no radius, singularity, or genuine-law theorem"
    )


if __name__ == "__main__":
    main()
