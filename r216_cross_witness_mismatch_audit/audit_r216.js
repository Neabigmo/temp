"use strict";

// R216 is a finite arithmetic audit of the obstruction family described in README.
// It deliberately does not claim a genuine full-exact counterexample.

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
  // E_gamma[X^n * x exp(-k x^2)] is zero for n even and otherwise the
  // Gaussian even moment with the extra exp(-k x^2) factor.
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

function hermiteCoefficient(L, D, c, epsilon) {
  // All lower odd moments vanish and all even perturbation moments vanish.
  return epsilon * perturbMoment(L, D, c) / Math.sqrt(factorial(D));
}

function lambda(D) {
  return 3 * Math.pow(Math.sqrt(2 / 3) / 2, D)
    * binom(D, (D - 3) / 2);
}

function choleskyMinDiagonal(matrix) {
  const n = matrix.length;
  const lower = Array.from({ length: n }, () => Array(n).fill(0));
  let minDiag = Infinity;
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j <= i; j += 1) {
      let value = matrix[i][j];
      for (let k = 0; k < j; k += 1) value -= lower[i][k] * lower[j][k];
      if (i === j) {
        assert(value > 0, `Gaussian Hankel lost positivity at ${i}: ${value}`);
        lower[i][j] = Math.sqrt(value);
        minDiag = Math.min(minDiag, lower[i][j]);
      } else {
        lower[i][j] = value / lower[j][j];
      }
    }
  }
  return minDiag;
}

function inverseFormalMoments(r, rawMoments, maxDegree) {
  const moments = [];
  for (let k = 0; k <= maxDegree; k += 1) {
    let formalMoment = 0;
    for (let j = 0; 2 * j <= k; j += 1) {
      const n = k - 2 * j;
      // i^(-k) * i^(k-2j) = (-1)^j, so the formal inverse moment is real.
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
  const matchedResiduals = [];
  for (let ell = 0; ell < L; ell += 1) {
    matchedResiduals.push(perturbMoment(L, 2 * ell + 1, c));
  }
  for (const residual of matchedResiduals) assert(Math.abs(residual) < 1e-10,
    `Vandermonde residual too large for L=${L}: ${residual}`);

  const firstUnmatched = perturbMoment(L, D, c);
  assert(Math.abs(firstUnmatched) > 1e-8,
    `first unmatched moment vanished for L=${L}`);

  let uniformBound = 0;
  for (let idx = 0; idx < c.length; idx += 1) {
    uniformBound += Math.abs(c[idx]) / Math.sqrt(2 * (idx + 1) * Math.E);
  }
  const epsilon = 0.25 / uniformBound;
  assert(epsilon * uniformBound <= 0.2500001, `positivity margin failed for L=${L}`);

  const aD = hermiteCoefficient(L, D, c, epsilon);
  const betaD = lambda(D) * aD;
  assert(Math.abs(betaD) > 1e-10, `beta_D vanished for L=${L}`);
  const t = Math.pow((betaD * betaD) / 2, 1 / D);
  assert(t > 0 && t < 1, `invalid t=${t} for L=${L}`);
  const budget = Math.pow(t, -D) * betaD * betaD;
  assert(Math.abs(budget - 2) < 1e-8, `angular budget mismatch: ${budget}`);

  const rawMoments = [];
  for (let n = 0; n <= 2 * L; n += 1) {
    rawMoments.push(gaussianMoment(n) + epsilon * perturbMoment(L, n, c));
    assert(Math.abs(rawMoments[n] - gaussianMoment(n)) < 1e-8,
      `moment matching failed at n=${n}: ${rawMoments[n]}`);
  }

  const r = Math.pow(t, -0.5);
  const inverseMoments = inverseFormalMoments(r, rawMoments, 2 * L);
  const gaussianHankel = Array.from({ length: L + 1 }, (_, i) =>
    Array.from({ length: L + 1 }, (_, j) => gaussianMoment(i + j)));
  const maxHankelDiff = Math.max(...gaussianHankel.flatMap((row, i) =>
    row.map((value, j) => Math.abs(inverseMoments[i + j] - value))));
  assert(maxHankelDiff < 1e-6, `inverse Hankel mismatch: ${maxHankelDiff}`);
  const minCholesky = choleskyMinDiagonal(gaussianHankel);

  return {
    L, D, maxMatchedResidual: Math.max(...matchedResiduals.map(Math.abs)),
    firstUnmatched, epsilon, betaD, t, r, budget, maxHankelDiff, minCholesky,
  };
}

const reports = [runCase(2), runCase(4)];
for (const report of reports) console.log(JSON.stringify(report));
console.log("R216_CROSS_WITNESS_MISMATCH_AUDIT_PASSED");
