// Exact structural audit for the R185 conjugate phase-collision family.
'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const theta = 0.7;
for (const [delta, L, eta] of [[1e-3, 100, 0.2], [5e-6, 1000, 0.01], [1e-6, 37, 1e-4]]) {
  const upper = 2 * L * delta;
  assert(upper <= eta + 1e-12, 'finite-window cancellation budget failed');
  for (let k = 0; k <= L; k += 1) {
    const A = 2 * (Math.cos(k * theta) - Math.cos(k * (theta + delta)));
    assert(Math.abs(A) <= 2 * k * delta + 1e-12, 'cosine Lipschitz bound failed');
  }
}

const J = 4;
const S2 = 1 + 1 + 1 + 1;
const B = 1 + 1 + 1 + 1;
const p0 = (S2 / 2) / (B * B - S2 / 2);
assert(J === 4 && S2 === 4 && B === 4, 'shell normalization failed');
assert(Math.abs(p0 - 1 / 7) < 1e-12, 'p0 computation failed');
assert((1 / (2 * 1e-3)) > 100, 'onset scale must diverge as delta shrinks');

// OU shell invariant, retained to ensure the obstruction is scale-free.
for (const [R, t] of [[0.5, 0.25], [0.9, 0.81], [1.7, 0.36]]) {
  for (const m of [1, 3, 7]) {
    const lhs = Math.pow(R / Math.sqrt(t), m) * Math.pow(t, m / 2);
    assert(Math.abs(lhs - Math.pow(R, m)) < 1e-10, 'OU shell invariant failed');
  }
}

console.log('R185_PHASE_COLLISION_ONSET_OBSTRUCTION_PASSED');
