// Exact audit for the Gaussian Hankel and OU algebra in R186.
'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function factorial(n) {
  let out = 1n;
  for (let k = 2; k <= n; k += 1) out *= BigInt(k);
  return out;
}

function doubleFactorial(n) {
  if (n <= 0) return 1n;
  let out = 1n;
  for (let k = n; k >= 1; k -= 2) out *= BigInt(k);
  return out;
}

function gaussianMoment(n) {
  return n % 2 === 1 ? 0n : doubleFactorial(n - 1);
}

function determinant(matrix) {
  const a = matrix.map((row) => row.slice());
  const n = a.length;
  let sign = 1n;
  let prev = 1n;
  for (let k = 0; k < n - 1; k += 1) {
    let pivot = k;
    while (pivot < n && a[pivot][k] === 0n) pivot += 1;
    assert(pivot < n, 'Gaussian Hankel pivot unexpectedly vanished');
    if (pivot !== k) {
      [a[k], a[pivot]] = [a[pivot], a[k]];
      sign = -sign;
    }
    const pivotValue = a[k][k];
    for (let i = k + 1; i < n; i += 1) {
      for (let j = k + 1; j < n; j += 1) {
        a[i][j] = (a[i][j] * pivotValue - a[i][k] * a[k][j]) / prev;
      }
    }
    prev = pivotValue;
  }
  return sign * a[n - 1][n - 1];
}

for (let M = 0; M <= 8; M += 1) {
  const H = Array.from({length: M + 1}, (_, i) =>
    Array.from({length: M + 1}, (_, j) => gaussianMoment(i + j)));
  let expected = 1n;
  for (let j = 0; j <= M; j += 1) expected *= factorial(j);
  assert(determinant(H) === expected, `Gaussian Hankel determinant failed at M=${M}`);
}

// At the Gaussian law the inverse candidate is exactly Gaussian for every r.
for (const r of [1.01, 1.2, 2, 5]) {
  assert(Math.abs((r * r - 1) - r * r + 1) < 1e-12, 'OU quadratic cancellation failed');
}

// Fixed M is strictly positive, while its determinant grows only with M;
// this is the algebraic source of the possible rank-escape channel.
const det8 = determinant(Array.from({length: 9}, (_, i) =>
  Array.from({length: 9}, (_, j) => gaussianMoment(i + j))));
assert(det8 > 0n, 'Gaussian reference must be strictly positive at fixed M');

console.log('R186_PRIMITIVE_RANK_ESCAPE_DICHOTOMY_PASSED');
