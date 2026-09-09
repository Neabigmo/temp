"use strict";

// R218 audits the exact first-odd genuine full-SF cross-witness algebra.
// The genuine hypotheses are mathematical assumptions; this script checks
// their finite coefficient consequences and the sharp block threshold.

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};
const factorial = (n) => {
  let out = 1;
  for (let k = 2; k <= n; k += 1) out *= k;
  return out;
};
const binom = (n, k) => factorial(n) / (factorial(k) * factorial(n - k));

function runCase(s) {
  const D = 2 * s + 1;
  const Lambda = 3 * Math.pow(6, -D / 2) * binom(D, s - 1);
  const rhoH = Lambda * Lambda * factorial(s) * factorial(s + 1) / factorial(D);
  const rhoHClosed = 9 * Math.pow(6, -D)
    * binom(D, s - 1) * binom(D, s - 1) / binom(D, s);
  assert(Math.abs(rhoH - rhoHClosed) < 1e-12,
    `threshold identity failed at s=${s}`);
  assert(rhoH < 9 * Math.pow(3, -D) + 1e-12,
    `threshold bound failed at s=${s}`);

  // The first-odd full-SF packet leaves only the D-th odd moment different
  // from Gaussian through degree D+1. Take rho=2 to test the negative block.
  const rho = 2;
  const normalizedOffDiagonalSquared = rho / rhoH;
  const blockDeterminant = 1 - normalizedOffDiagonalSquared;
  assert(blockDeterminant < 0, `negative block failed at s=${s}`);

  // The prior H_s block uses moments only through 2s=D-1, hence is Gaussian.
  const priorHankelDegree = 2 * s;
  assert(priorHankelDegree === D - 1, `prior degree mismatch at s=${s}`);
  assert(D + 1 <= 2 * D - 2, `full-SF even packet window failed at s=${s}`);

  return { s, D, Lambda, rhoH, rho, normalizedOffDiagonalSquared, blockDeterminant };
}

for (const report of [1, 2, 4, 8].map(runCase)) console.log(JSON.stringify(report));
console.log("R218_FIRST_ODD_GENUINE_CROSS_WITNESS_PASSED");
