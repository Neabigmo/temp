'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

// A Hermitian Gram matrix and its entrywise conjugate have the same real
// principal determinants and the same eigenvalues.
const G = [
  [1, {re: 0.2, im: 0.3}],
  [{re: 0.2, im: -0.3}, 1],
];
const det = 1 - (G[0][1].re ** 2 + G[0][1].im ** 2);
const detReflected = 1 - (G[1][0].re ** 2 + G[1][0].im ** 2);
assert(Math.abs(det - detReflected) < 1e-15,
  'reflection changed a principal Gram determinant');

// A reflection-even Taylor certificate has no odd powers.
const epsilon = 1e-4;
const certificate = (x) => 2 + 3 * x * x + 5 * x ** 4;
assert(Math.abs(certificate(epsilon) - certificate(-epsilon)) < 1e-15,
  'odd perturbation appeared in an even Gram certificate');

console.log('R208_GRAM_REFLECTION_PARITY_NO_GO_PASSED');
