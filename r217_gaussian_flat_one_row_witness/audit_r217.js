"use strict";

// R217 audits the exact one-row benchmark inside the relaxed Gaussian-flat jet.
// It does not assert a genuine full-exact law.

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};
const factorial = (n) => {
  let out = 1;
  for (let k = 2; k <= n; k += 1) out *= k;
  return out;
};
const doubleFactorial = (n) => {
  if (n === -1 || n === 0) return 1;
  let out = 1;
  for (let k = n; k >= 1; k -= 2) out *= k;
  return out;
};
const binom = (n, k) => factorial(n) / (factorial(k) * factorial(n - k));
const gaussianMoment = (n) => (n % 2 === 0 ? doubleFactorial(n - 1) : 0);

function coefficients(L) {
  const y = Array.from({ length: L + 1 }, (_, idx) => 1 / (1 + 2 * (idx + 1)));
  return y.map((yk, k) => {
    let denominator = 1;
    for (let j = 0; j < y.length; j += 1) {
      if (j !== k) denominator *= yk - y[j];
    }
    return Math.pow(yk, -1.5) / denominator;
  });
}

function perturbMoment(L, n, c) {
  if (n % 2 === 0) return 0;
  const ell = (n - 1) / 2;
  let total = 0;
  for (let idx = 0; idx < c.length; idx += 1) {
    const k = idx + 1;
    total += c[idx] * doubleFactorial(2 * ell + 1)
      * Math.pow(1 + 2 * k, -(ell + 1.5));
  }
  return total;
}

function inverseFormalMoments(r, rawMoments, maxDegree) {
  const moments = [];
  for (let k = 0; k <= maxDegree; k += 1) {
    let formalMoment = 0;
    for (let j = 0; 2 * j <= k; j += 1) {
      const n = k - 2 * j;
      formalMoment += Math.pow(-1, j) * Math.pow((r * r - 1) / 2, j)
        / factorial(j) * Math.pow(r, n) * rawMoments[n] / factorial(n);
    }
    moments.push(factorial(k) * formalMoment);
  }
  return moments;
}

function runCase(L) {
  const D = 2 * L + 1;
  const c = coefficients(L);
  for (let ell = 0; ell < L; ell += 1) {
    assert(Math.abs(perturbMoment(L, 2 * ell + 1, c)) < 1e-8,
      `matched odd moment failed at ell=${ell}`);
  }
  const firstUnmatched = perturbMoment(L, D, c);
  assert(Math.abs(firstUnmatched) > 1e-8, `first odd moment vanished for L=${L}`);

  let uniformBound = 0;
  for (let idx = 0; idx < c.length; idx += 1) {
    uniformBound += Math.abs(c[idx]) / Math.sqrt(2 * (idx + 1) * Math.E);
  }
  const epsilon = 0.25 / uniformBound;
  const aD = epsilon * firstUnmatched / Math.sqrt(factorial(D));
  const Lambda = 3 * Math.pow(6, -D / 2) * binom(D, L - 1);
  const betaD = Lambda * aD;
  assert(Math.abs(betaD) > 1e-12, `beta_D vanished for L=${L}`);

  const rho = 2;
  const t = Math.pow((betaD * betaD) / rho, 1 / D);
  const r = Math.pow(t, -0.5);
  assert(t > 0 && t < 1, `invalid inverse scale t=${t}`);

  const rawMoments = [];
  for (let n = 0; n <= D + 1; n += 1) {
    rawMoments.push(gaussianMoment(n) + epsilon * perturbMoment(L, n, c));
  }
  const inverseMoments = inverseFormalMoments(r, rawMoments, D + 1);
  for (let n = 0; n <= 2 * L; n += 1) {
    assert(Math.abs(inverseMoments[n] - gaussianMoment(n)) < 1e-5,
      `H_L moment mismatch at n=${n}`);
  }

  const delta = inverseMoments[D] - gaussianMoment(D);
  const rhoH = Lambda * Lambda * factorial(L) * factorial(L + 1) / factorial(D);
  const normalizedOffDiagonal = Math.abs(delta)
    / Math.sqrt(factorial(L) * factorial(L + 1));
  assert(Math.abs(normalizedOffDiagonal * normalizedOffDiagonal
    - rho / rhoH) < 1e-5, `one-row coefficient identity failed for L=${L}`);
  assert(rhoH < 1 && normalizedOffDiagonal > 1,
    `H_(L+1) negativity threshold failed for L=${L}`);

  return { L, D, rho, rhoH, normalizedOffDiagonal, t, r };
}

for (const report of [runCase(2), runCase(4)]) console.log(JSON.stringify(report));
console.log("R217_GAUSSIAN_FLAT_ONE_ROW_WITNESS_PASSED");
