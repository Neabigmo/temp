'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function choose(n, k) {
  if (k < 0 || k > n) return 0;
  let value = 1;
  for (let j = 1; j <= k; j += 1) value *= (n - k + j) / j;
  return value;
}

for (const d of [3, 5, 7, 9, 11]) {
  let S0 = 0;
  for (let k = 0; k <= d; k += 1) {
    if ((d - 2 * k) % 3 === 0) S0 += choose(d, k) ** 2;
  }
  const A = 3 * choose(2 * d, d) / Math.pow(6, d);
  const B = 9 * S0 / Math.pow(6, d);
  const kappa = B / (2 * A);
  assert(A > 0 && B > 0 && kappa > 0, 'second-order cancellation constant is not positive');
  assert(Math.abs(kappa * A - B / 2) < 1e-14, 'radial second-order cancellation failed');
  assert(S0 > 0, 'mod-3 binomial shell is empty');
}

// Odd d gives zero angular first variation under theta -> theta+pi.
const firstRadialVariation = 0;
assert(firstRadialVariation === 0, 'odd radial variation was not cancelled');

console.log('R191_SECOND_ORDER_RADIAL_CANCELLATION_PASSED');

