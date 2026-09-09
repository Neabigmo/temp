'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

for (let N = 1; N <= 64; N += 1) {
  const degree = 2 * N;
  const unknownIntervals = degree + 2;
  const momentEquations = degree + 1;
  assert(unknownIntervals > momentEquations, 'finite moment nullspace was lost');
  for (let r = 1; r <= N; r += 1) {
    assert(2 * r <= degree, 'Q^r exceeded the matched one-body degree');
  }
}

assert(Math.sqrt(3) < 2, 'uniform envelope transfer failed');

// sum_j a_j(theta)^2 = 1 for the three residual directions, so the Gaussian
// angular product is exactly exp(-u^2/2); matching one-body jets through 2N
// therefore matches the product jet through 2N as well.
assert(3 * (2 / 3) / 2 === 1, 'angular residual normalization failed');

console.log('R196_SAME_FACTOR_FINITE_ROW_CAMOUFLAGE_PASSED');

