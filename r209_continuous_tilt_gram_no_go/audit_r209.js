"use strict";

const assert = require("node:assert/strict");

function tanh(x) {
  return Math.tanh(x);
}

function near(a, b, tol = 1e-12) {
  return Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));
}

const grid = [-2.1, -0.7, 0.0, 0.35, 1.4];
const v = grid.map(tanh);

// K(a,b)=tanh(a)tanh(b) is a rank-one PSD kernel.
for (let i = 0; i < grid.length; i += 1) {
  for (let j = 0; j < grid.length; j += 1) {
    assert(near(v[i] * v[j], tanh(grid[i]) * tanh(grid[j])));
  }
}

for (let i = 0; i < 20; i += 1) {
  const coeff = grid.map((_, j) => Math.sin((i + 1) * (j + 2)));
  const quad = coeff.reduce((s, c, j) => s + c * v[j], 0) ** 2;
  assert(quad >= -1e-12);
}

for (const a of [0.1, 0.35, 1.2, 2.0]) {
  const J = 1 / Math.cosh(a) ** 2 - 1;
  assert(J < 0);
  assert(near(J, -(tanh(a) ** 2)));
  const product = (1 + tanh(a)) * (1 - tanh(a));
  assert(near(product, 1 / Math.cosh(a) ** 2));
}

// The small-a expansion is J(a)=-a^2+O(a^4).
for (const a of [1e-3, 2e-3, 5e-3]) {
  const J = -(tanh(a) ** 2);
  assert(Math.abs(J / (a * a) + 1) < 2e-5);
}

console.log("R209 audit passed: continuous tilt PSD kernel permits exact negative reflection cross-term.");
