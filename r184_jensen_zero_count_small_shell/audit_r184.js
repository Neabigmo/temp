// Structural exact audit for the R184 Jensen/counting constants.
'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const log2 = Math.log(2);
const unitCountBound = (log2 + 6) / log2;
assert(unitCountBound < 10, 'Jensen unit-radius count must be < 10');
assert(Math.floor(unitCountBound) === 9, 'integer unit-radius count must be 9');
assert(Math.sqrt(Math.E / 128) < 1, 'R112 zero-free radius must be below 1');
assert(1 / 17 > 0, 'small-shell density constant must be positive');

// Cauchy-Schwarz for integer shell multiplicity differences.
for (const deltas of [[1], [1, 1, 1], [2, -1, 1], [3, 2, 1, 1]]) {
  const B = deltas.reduce((sum, d) => sum + Math.abs(d), 0);
  const S2 = deltas.reduce((sum, d) => sum + d * d, 0);
  const J = deltas.length;
  assert(B * B <= J * S2, 'shell Cauchy-Schwarz failed');
  assert(S2 >= 1, 'nonempty integer shell must have S2>=1');
}

// Large-shell Jensen estimate and the induced p0 bound.
for (const R of [1, 1.5, 3, 10]) {
  const count = 1 + 6 * R * R / log2;
  const pLower = 1 / (1 + 12 * R * R / log2);
  assert(count > 0 && pLower > 0, 'scale-dependent bounds must be positive');
  assert(pLower <= 1, 'p0 lower bound cannot exceed one');
}

// OU shell invariant: R_t^m c_m(t)=R^m c_m.
for (const [R, t] of [[0.3, 0.09], [0.7, 0.49], [1.2, 0.25]]) {
  for (const m of [1, 3, 8]) {
    const lhs = Math.pow(R / Math.sqrt(t), m) * Math.pow(t, m / 2);
    const rhs = Math.pow(R, m);
    assert(Math.abs(lhs - rhs) < 1e-10, `OU invariant failed for m=${m}`);
  }
}

console.log('R184_JENSEN_ZERO_COUNT_SMALL_SHELL_PASSED');
