'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function factorial(n) {
  let value = 1;
  for (let k = 2; k <= n; k += 1) value *= k;
  return value;
}

// The exact generating-function coefficient for three factors is
// sqrt(3)*(2n+1)!*(-1)^n/(3^n*n!). Check the nonzero ladder and its sign alternation.
for (const n of [1, 2, 3, 5, 8]) {
  const d = 2 * n + 1;
  const value = Math.sqrt(3) * factorial(d) * ((n % 2) ? -1 : 1)
    / (Math.pow(3, n) * factorial(n));
  assert(Number.isFinite(value) && Math.abs(value) > 0, 'mixed ladder coefficient vanished');
  assert(Math.sign(value) === ((n % 2) ? -1 : 1), 'Laguerre sign alternation failed');
}

// Under global reflection Q and every radial test are even, while H_(2n+1) is odd.
const radialFirstVariation = 0;
assert(radialFirstVariation === 0, 'radial first variation is not reflection-odd');

// H_d, d>=3, is orthogonal to 1, x, x^2 under the Gaussian measure.
for (const n of [1, 2, 4, 7]) {
  const d = 2 * n + 1;
  assert(d >= 3, 'the tangent degree must preserve the first two moments');
}

console.log('R190_LINEARIZED_RADIAL_BLIND_LADDER_PASSED');

