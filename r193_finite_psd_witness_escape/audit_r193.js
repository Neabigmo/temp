'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function gaussianGram(points) {
  return points.map((x) => points.map((y) => Math.exp(-0.5 * (x - y) ** 2)));
}

function hermitianMinEigen(matrix) {
  const a = matrix.map((row) => row.slice());
  const n = a.length;
  for (let sweep = 0; sweep < 80 * n * n; sweep += 1) {
    let p = 0; let q = 1; let best = 0;
    for (let i = 0; i < n; i += 1) {
      for (let j = i + 1; j < n; j += 1) {
        const value = Math.abs(a[i][j]);
        if (value > best) { best = value; p = i; q = j; }
      }
    }
    if (best < 1e-14) break;
    const app = a[p][p]; const aqq = a[q][q]; const apq = a[p][q];
    const tau = (aqq - app) / (2 * apq);
    const t = Math.sign(tau || 1) / (Math.abs(tau) + Math.sqrt(1 + tau * tau));
    const c = 1 / Math.sqrt(1 + t * t); const s = t * c;
    a[p][p] = c * c * app - 2 * s * c * apq + s * s * aqq;
    a[q][q] = s * s * app + 2 * s * c * apq + c * c * aqq;
    a[p][q] = 0; a[q][p] = 0;
    for (let k = 0; k < n; k += 1) {
      if (k === p || k === q) continue;
      const akp = a[k][p]; const akq = a[k][q];
      a[k][p] = c * akp - s * akq;
      a[p][k] = a[k][p];
      a[k][q] = s * akp + c * akq;
      a[q][k] = a[k][q];
    }
  }
  return Math.min(...a.map((row, i) => row[i]));
}

function firstJetRealBlock(points, epsilon, d) {
  const m = points.length;
  const real = points.map((x) => points.map((y) => {
    const s = x - y;
    return Math.exp(-0.5 * s * s) * Math.cos(epsilon * s ** d);
  }));
  const imag = points.map((x) => points.map((y) => {
    const s = x - y;
    return Math.exp(-0.5 * s * s) * Math.sin(epsilon * s ** d);
  }));
  const block = Array.from({ length: 2 * m }, () => Array(2 * m).fill(0));
  for (let a = 0; a < m; a += 1) {
    for (let b = 0; b < m; b += 1) {
      block[a][b] = real[a][b];
      block[a][m + b] = -imag[a][b];
      block[m + a][b] = imag[a][b];
      block[m + a][m + b] = real[a][b];
    }
  }
  return block;
}

const points = [-1.25, -0.2, 0.65, 1.4];
const base = gaussianGram(points);
const lambda = hermitianMinEigen(base);
assert(lambda > 1e-4, 'Gaussian Gram matrix was not numerically strictly positive');

const d = 3;
const U = 1.4;
const m = points.length;
const epsilon = 0.005 * lambda / (m * (2 * U) ** d);
const perturbed = firstJetRealBlock(points, epsilon, d);
const perturbGap = hermitianMinEigen(perturbed);
assert(perturbGap > lambda / 3, 'small finite jet perturbation lost the Gaussian gap');

const entryBound = epsilon * (2 * U) ** d;
assert(m * entryBound < lambda / 100, 'explicit Weyl-scale bound was not small');

console.log('R193_FINITE_PSD_WITNESS_ESCAPE_PASSED');
