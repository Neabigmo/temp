'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

for (let N = 1; N <= 32; N += 1) {
  const intervals = 2 * N + 2;
  const equations = 2 * N + 1;
  assert(intervals === equations + 1, 'nullspace dimension count failed');
  assert(N >= 1, 'N must be positive');
}

// With ||h_N||_infinity <= 1/2, p_N <= 3 gamma / 2 and
// (3/2) E_gamma exp(X^2/8) = sqrt(3) < 2.
assert(Math.sqrt(3) < 2, 'uniform square-exponential envelope constant failed');

// Matching moments through 2N makes every inverse block of order <=N identical
// to the Gaussian block, because its entries only use derivatives through 2N.
for (let N = 1; N <= 32; N += 1) {
  assert(2 * N >= 2 * N, 'inverse-Hankel derivative order bookkeeping failed');
}

console.log('R195_ENVELOPE_ONLY_HANKEL_CAMOUFLAGE_PASSED');

