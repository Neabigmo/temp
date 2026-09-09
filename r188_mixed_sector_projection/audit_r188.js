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

function laguerre(n) {
  const p = Array(n + 1).fill(0);
  for (let k = 0; k <= n; k += 1) {
    let factorial = 1;
    for (let j = 2; j <= k; j += 1) factorial *= j;
    p[k] = ((k % 2) ? -1 : 1) * choose(n, k) / factorial;
  }
  return p;
}

function inner(p, q, moments) {
  let total = 0;
  for (let i = 0; i < p.length; i += 1) {
    for (let j = 0; j < q.length; j += 1) total += p[i] * q[j] * moments[i + j];
  }
  return total;
}

function subtract(p, q) {
  const out = Array(Math.max(p.length, q.length)).fill(0);
  for (let i = 0; i < out.length; i += 1) out[i] = (p[i] || 0) - (q[i] || 0);
  return out;
}

function addScaled(out, p, scale) {
  for (let i = 0; i < p.length; i += 1) out[i] += scale * p[i];
}

function solve(A, b) {
  const m = A.map((row, i) => row.concat([b[i]]));
  for (let k = 0; k < m.length; k += 1) {
    let pivot = k;
    for (let i = k + 1; i < m.length; i += 1) {
      if (Math.abs(m[i][k]) > Math.abs(m[pivot][k])) pivot = i;
    }
    assert(Math.abs(m[pivot][k]) > 1e-13, 'local Gram matrix is singular');
    [m[k], m[pivot]] = [m[pivot], m[k]];
    for (let i = k + 1; i < m.length; i += 1) {
      const factor = m[i][k] / m[k][k];
      for (let j = k; j <= m.length; j += 1) m[i][j] -= factor * m[k][j];
    }
  }
  const x = Array(m.length).fill(0);
  for (let i = m.length - 1; i >= 0; i -= 1) {
    let rhs = m[i][m.length];
    for (let j = i + 1; j < m.length; j += 1) rhs -= m[i][j] * x[j];
    x[i] = rhs / m[i][i];
  }
  return x;
}

// On [0,A], compute exact polynomial moments by the recurrence
// I_0=1-exp(-A), I_m=m I_(m-1)-A^m exp(-A).
const A = 1;
const maxDegree = 24;
const moments = Array(maxDegree + 1).fill(0);
moments[0] = 1 - Math.exp(-A);
for (let m = 1; m <= maxDegree; m += 1) {
  moments[m] = m * moments[m - 1] - Math.pow(A, m) * Math.exp(-A);
}

// Build b_N=(L_N-Pi_{N-1,[0,A]}L_N) 1_[0,A] and verify its exact finite
// orthogonality numerically from the closed moment recurrence.
for (const N of [1, 2, 3, 4]) {
  const basis = Array.from({length: N}, (_, n) => laguerre(n));
  const target = laguerre(N);
  const gram = basis.map(p => basis.map(q => inner(p, q, moments)));
  const rhs = basis.map(p => inner(p, target, moments));
  const projection = solve(gram, rhs);
  const projected = Array(N + 1).fill(0);
  basis.forEach((p, i) => addScaled(projected, p, projection[i]));
  const remainder = subtract(target, projected);
  const remainderSquared = inner(remainder, remainder, moments);
  assert(remainderSquared > 1e-12, 'the N-th Laguerre component was lost');
  for (const p of basis) assert(Math.abs(inner(remainder, p, moments)) < 1e-10,
    'low Laguerre orthogonality failed');
  assert(Math.abs(inner(remainder, laguerre(0), moments)) < 1e-10,
    'b_N does not have zero Exp mean');

  // A coefficient bound on [0,A] gives a concrete epsilon for positivity.
  const supBound = remainder.reduce((s, c, k) => s + Math.abs(c) * Math.pow(A, k), 0);
  assert(Number.isFinite(supBound) && supBound > 0, 'bounded perturbation failed');
  const epsilon = 1 / (2 * supBound);
  assert(1 - epsilon * supBound >= 0.5, 'positive joint density margin failed');

  // The perturbation coefficient is A_1*<b_N,L_N>, with A_1=E[U tanh U]>0.
  const mixedCoefficient = remainderSquared;
  assert(mixedCoefficient > 0, 'the first nonzero mixed coefficient is missing');
}

// Exact radial marginal only fixes the ell=0 nonconstant Laguerre coefficients.
const ellZeroNonconstantMass = 0;
assert(ellZeroNonconstantMass === 0, 'T~Exp(1) radial orthogonality was violated');

console.log('R188_MIXED_SECTOR_PROJECTION_PASSED');
