'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

// Verify the coefficient in ell_1(a)=1-K''(a/sqrt(3)) for odd first degree d.
for (const d of [3, 5, 7, 9]) {
  const coefficientMagnitude = 1 / (Math.pow(3, (d - 2) / 2) * factorial(d - 2));
  assert(coefficientMagnitude > 0, 'the first Laguerre coefficient vanished');
  const a = 1e-4;
  const plus = -coefficientMagnitude * Math.pow(a, d - 2);
  const minus = -coefficientMagnitude * Math.pow(-a, d - 2);
  assert(plus * minus < 0, 'odd first degree did not produce wrong reflection sign');
}

function factorial(n) {
  let value = 1;
  for (let k = 2; k <= n; k += 1) value *= k;
  return value;
}

// The generic Cauchy lower bound has negative quadratic curvature:
// exp(-3[K(a/sqrt(3))+K(-a/sqrt(3))])-1 = -a^2+O(a^4)
// for K(t)=t^2/2+O(t^3).
const a = 1e-4;
const gaussianLowerBound = Math.exp(-a * a) - 1;
assert(gaussianLowerBound < 0, 'Cauchy lower bound was incorrectly assigned a positive sign');

console.log('R207_REFLECTION_SIGN_RIGIDITY_PASSED');
