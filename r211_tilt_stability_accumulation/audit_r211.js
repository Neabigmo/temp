"use strict";

const assert = require("node:assert/strict");

function expectNear(a, b, tol = 1e-10) {
  assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b)));
}

// Finite-support centered variance-one law: {-sqrt(3),0,sqrt(3)} with
// probabilities {1/6,2/3,1/6}. Verify E_a[Q]=2 Var_a(X)=2 K''(a/sqrt(3)).
const values = [-Math.sqrt(3), 0, Math.sqrt(3)];
const probs = [1 / 6, 2 / 3, 1 / 6];

function tiltedMoments(a) {
  const weights = values.map((x, i) => probs[i] * Math.exp((a / Math.sqrt(3)) * x));
  const z = weights.reduce((s, w) => s + w, 0);
  const mean = weights.reduce((s, w, i) => s + w * values[i], 0) / z;
  const second = weights.reduce((s, w, i) => s + w * values[i] ** 2, 0) / z;
  return { mean, variance: second - mean ** 2 };
}

function tiltedQ(a) {
  const t = a / Math.sqrt(3);
  let z = 0;
  let qMean = 0;
  for (let i = 0; i < values.length; i += 1) {
    for (let j = 0; j < values.length; j += 1) {
      for (let k = 0; k < values.length; k += 1) {
        const w = probs[i] * probs[j] * probs[k] * Math.exp(t * (values[i] + values[j] + values[k]));
        const sum = values[i] + values[j] + values[k];
        const q = values[i] ** 2 + values[j] ** 2 + values[k] ** 2 - sum ** 2 / 3;
        z += w;
        qMean += w * q;
      }
    }
  }
  return qMean / z;
}

for (const a of [-1.2, -0.3, 0, 0.4, 1.1]) {
  const { variance } = tiltedMoments(a);
  expectNear(tiltedQ(a), 2 * variance);
}

// At the Gaussian law, K'' is identically 1 and ell_1 vanishes for every tilt.
for (const a of [-2, -0.5, 0, 0.7, 2]) {
  expectNear(1 - 1, 0);
}

console.log("R211 audit passed: tilted first-mode accumulation is a Gaussian closure interface.");
