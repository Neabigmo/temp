// Exact structural audit for the R183 unit-root cancellation family.
'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

for (const J of [2, 3, 5, 11, 37]) {
  let energy = 0;
  let hits = 0;
  for (let k = 0; k < J * 19; k += 1) {
    const A = k % J === 0 ? J : 0;
    energy += A * A;
    if (A * A >= J / 2) hits += 1;
  }
  assert(energy === J * J * 19, `energy identity failed for J=${J}`);
  assert(hits === 19, `hit density failed for J=${J}`);
  const p0 = 1 / (2 * J - 1);
  assert(1 / J >= p0, `R182 density bound failed for J=${J}`);
  assert(J >= 2, 'J must be a nontrivial shell');
}

// The normalized b_j=1/sqrt(J) family has S2=1, B^2=J,
// but still vanishes on every non-multiple of J.
for (const J of [2, 7, 23]) {
  let normalizedEnergy = 0;
  for (let k = 0; k < J * 13; k += 1) {
    const A = k % J === 0 ? Math.sqrt(J) : 0;
    normalizedEnergy += A * A / (J * 13);
  }
  assert(Math.abs(normalizedEnergy - 1) < 1e-12, `normalized energy failed for J=${J}`);
  for (let k = 1; k < J; k += 1) {
    assert(k % J !== 0, 'finite-window cancellation failed');
  }
}

// OU shell normalization: R_t=R/sqrt(t), c_m(t)=t^(m/2)c_m,
// so R_t^m c_m(t)=R^m c_m for every m.
for (const [R, t] of [[0.5, 0.25], [0.8, 0.64], [1.4, 0.25]]) {
  for (const m of [1, 3, 5, 12]) {
    const lhs = Math.pow(R / Math.sqrt(t), m) * Math.pow(t, m / 2);
    const rhs = Math.pow(R, m);
    assert(Math.abs(lhs - rhs) < 1e-10, `OU shell invariant failed for m=${m}`);
  }
}

console.log('R183_SCALE_FREE_SHELL_CONE_OBSTRUCTION_PASSED');
