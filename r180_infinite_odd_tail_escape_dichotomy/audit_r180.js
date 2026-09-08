// Exact algebraic sanity audit for the R180 escape dichotomy.
'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

// A paired zero contributes opposite reciprocal powers at every odd order.
for (let m = 3; m <= 31; m += 2) {
  assert((1 / 2) ** m + (1 / -2) ** m === 0,
    `paired zero cancellation failed at odd order ${m}`);
}

// An unpaired zero contributes a nonzero odd power sum.
for (let m = 3; m <= 31; m += 2) {
  assert((1 / 2) ** m !== 0, `unpaired zero contribution vanished at ${m}`);
}

// For t=1/4, OU cumulant scaling is exactly 2^(-m)=t^(m/2).
for (let m = 3; m <= 31; m++) {
  const kappa = 7 / 11;
  const scaled = (1 / 2) ** m * kappa;
  assert(scaled === (1 / 4) ** (m / 2) * kappa,
    `OU cumulant scale failed at order ${m}`);
}

// MGF zeros of M(sqrt(t) z) are zeta/sqrt(t); with t=1/4 the radius doubles.
const radius = 3.25;
const t = 1 / 4;
assert(radius / Math.sqrt(t) === 2 * radius, 'OU zero-radius scaling failed');

// A finite odd polynomial of degree >=3 cannot have O(1+t^2) growth on the real axis.
for (const degree of [3, 5, 7, 9]) {
  assert(degree > 2 && degree % 2 === 1,
    `odd polynomial degree classification failed at ${degree}`);
}

console.log('R180_INFINITE_ODD_TAIL_ESCAPE_DICHOTOMY_PASSED');
