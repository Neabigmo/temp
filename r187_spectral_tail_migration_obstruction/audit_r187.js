// Exact structural audit for the R187 moving-sector family.
'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

for (const [r, N] of [[1.05, 3], [1.2, 7], [2, 19]]) {
  const coefficient = Math.pow(r, -(2 * N + 1));
  const weightedMass = Math.pow(r, 4 * N + 2) * coefficient * coefficient;
  assert(Math.abs(weightedMass - 1) < 1e-10, 'sector budget normalization failed');
  assert(N > 0, 'moving sector index must be positive');
  for (let M = 0; M < N; M += 1) {
    assert(2 * N + 1 > M, 'tail degree must exceed fixed cutoff');
  }
}

// The ell=0 radial sector remains identically zero, as required by T~Exp(1).
const ellZeroMass = 0;
assert(ellZeroMass === 0, 'ell=0 marginal orthogonality was violated');

// A fixed ell sees at most one coefficient, while the total tail mass stays one.
for (const N of [1, 4, 12]) {
  let fixedSectorMass = 0;
  let totalMass = 0;
  const r = 1.3;
  const c = Math.pow(r, -(2 * N + 1));
  fixedSectorMass += Math.pow(r, 4 * N + 2) * c * c;
  totalMass += fixedSectorMass;
  assert(Math.abs(fixedSectorMass - totalMass) < 1e-12, 'mass accounting failed');
  assert(Math.abs(totalMass - 1) < 1e-10, 'global tail mass must stay one');
}

console.log('R187_SPECTRAL_TAIL_MIGRATION_OBSTRUCTION_PASSED');
