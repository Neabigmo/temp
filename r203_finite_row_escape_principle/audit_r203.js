'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function multiplyTerms(a, b) {
  const out = new Map();
  for (const [ka, va] of a) {
    const ea = ka.split(',').map(Number);
    for (const [kb, vb] of b) {
      const eb = kb.split(',').map(Number);
      const e = ea.map((x, i) => x + eb[i]);
      const key = e.join(',');
      out.set(key, (out.get(key) || 0) + va * vb);
    }
  }
  return out;
}

function powerTerms(poly, n) {
  let out = new Map([['0,0,0', 1]]);
  for (let i = 0; i < n; i += 1) out = multiplyTerms(out, poly);
  return out;
}

function expectation(poly, moments) {
  let value = 0;
  for (const [key, coefficient] of poly) {
    const e = key.split(',').map(Number);
    value += coefficient * moments[e[0]] * moments[e[1]] * moments[e[2]];
  }
  return value;
}

const q = new Map();
for (let i = 0; i < 3; i += 1) {
  const e = [0, 0, 0]; e[i] = 2; q.set(e.join(','), 2 / 3);
}
for (let i = 0; i < 3; i += 1) {
  for (let j = i + 1; j < 3; j += 1) {
    const e = [0, 0, 0]; e[i] = e[j] = 1; q.set(e.join(','), -2 / 3);
  }
}

function gaussianEvenMoment(n) {
  let value = 1;
  for (let k = 1; k < n; k += 2) value *= k;
  return value;
}

for (let s = 2; s <= 6; s += 1) {
  const h = 1e-5;
  const moments0 = Array(2 * s + 1).fill(0);
  for (let n = 0; n <= 2 * s; n += 1) {
    moments0[n] = n % 2 === 0 ? gaussianEvenMoment(n) : 0;
  }
  const moments1 = moments0.slice();
  moments1[2 * s] += h;
  const delta = expectation(powerTerms(q, s), moments1)
    - expectation(powerTerms(q, s), moments0);
  const expected = 3 * (2 / 3) ** s * h;
  assert(Math.abs(delta - expected) < 1e-8,
    `highest-even coefficient mismatch at row ${s}`);
}

const coefficients = [4 / 3, 8 / 9, 16 / 27, 32 / 81, 64 / 243];
for (let i = 0; i < coefficients.length; i += 1) {
  const s = i + 2;
  assert(Math.abs(coefficients[i] - 3 * (2 / 3) ** s) < 1e-12,
    `triangular diagonal mismatch at row ${s}`);
}

console.log('R203_FINITE_ROW_ESCAPE_PRINCIPLE_PASSED');
