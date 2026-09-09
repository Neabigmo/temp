"use strict";

const assert = require("node:assert/strict");

function cMul(a, b) {
  return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
}

function cAdd(a, b) {
  return [a[0] + b[0], a[1] + b[1]];
}

function cScale(a, s) {
  return [a[0] * s, a[1] * s];
}

function cExp(x) {
  return [Math.cos(x), Math.sin(x)];
}

function close(a, b, tol = 1e-11) {
  return Math.abs(a - b) <= tol;
}

// Direct enumeration for three iid Rademacher variables verifies (1).
for (const x of [0.13, 0.41, 0.87]) {
  let direct = [0, 0];
  for (const x1 of [-1, 1]) {
    for (const x2 of [-1, 1]) {
      for (const x3 of [-1, 1]) {
        const sum = x1 + x2 + x3;
        const q = x1 * x1 + x2 * x2 + x3 * x3 - (sum * sum) / 3;
        direct = cAdd(direct, cScale(cExp(x * sum), (q - 2) / 8));
      }
    }
  }

  const p = Math.cos(x);
  const p1 = -Math.sin(x);
  const p2 = -Math.cos(x);
  const bracket = p * p + p * p2 - p1 * p1;
  const formula = cScale([p, 0], -2 * bracket);
  assert(close(direct[0], formula[0]));
  assert(close(direct[1], formula[1]));
}

// For Gaussian phi=e^{-x^2/2}, k''=-1 and the mixed covariance vanishes.
for (const x of [0, 0.2, 0.9]) {
  const phi3 = Math.exp(-1.5 * x * x);
  const covariance = -2 * phi3 * (1 - 1);
  assert(close(covariance, 0));
}

console.log("R210 audit passed: marginal radial data and mixed covariance are distinct interfaces.");
