'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function multiply(a, b) {
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

function power(poly, n) {
  let out = new Map([['0,0,0', 1]]);
  for (let k = 0; k < n; k += 1) out = multiply(out, poly);
  return out;
}

const q = new Map();
for (let i = 0; i < 3; i += 1) {
  const e = [0, 0, 0]; e[i] = 2; q.set(e.join(','), 2 / 3);
}
for (let i = 0; i < 3; i += 1) {
  for (let j = i + 1; j < 3; j += 1) {
    const e = [0, 0, 0]; e[i] = e[j] = 1;
    q.set(e.join(','), -2 / 3);
  }
}

function moments(c, kappa4, kappa5, kappa6) {
  return [1, 0, 1, c, 3 + kappa4, 10 * c + kappa5,
    15 + 10 * c * c + 15 * kappa4 + kappa6];
}

function expectation(poly, ms) {
  let value = 0;
  for (const [key, coeff] of poly) {
    const e = key.split(',').map(Number);
    value += coeff * ms[e[0]] * ms[e[1]] * ms[e[2]];
  }
  return value;
}

const q2 = power(q, 2);
const q3 = power(q, 3);
for (const c of [0, 0.2, 1.1]) {
  const m = moments(c, 0, 0, 0);
  const f2 = expectation(q2, m) - 8;
  const f3 = expectation(q3, m) - 48;
  assert(Math.abs(f2) < 1e-10, 'F2 compensation slice failed');
  assert(Math.abs(f3 - (8 / 3) * c * c) < 1e-9, 'F3 cubic term failed');
  const m6 = moments(c, 0, 0, -3 * c * c);
  assert(Math.abs(expectation(q3, m6) - 48) < 1e-9, 'kappa6 compensation failed');
}

const A3 = 3 * 20 / 216;
const B3 = 18 / 216;
assert(Math.abs(A3 - 5 / 18) < 1e-12 && Math.abs(B3 - 1 / 12) < 1e-12,
  'R191 constants mismatch');
assert(Math.abs((B3 / (2 * A3)) - 3 / 20) < 1e-12, 'b2 compensation mismatch');
console.log('R198_CUBIC_COMPENSATION_NORMAL_FORM_PASSED');

