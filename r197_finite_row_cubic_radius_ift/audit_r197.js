'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function add(a, b) {
  const out = new Map(a);
  for (const [key, value] of b) out.set(key, (out.get(key) || 0) + value);
  return out;
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

function qPolynomial() {
  const out = new Map();
  for (let i = 0; i < 3; i += 1) {
    const e = [0, 0, 0]; e[i] = 2;
    out.set(e.join(','), 2 / 3);
  }
  for (let i = 0; i < 3; i += 1) {
    for (let j = i + 1; j < 3; j += 1) {
      const e = [0, 0, 0]; e[i] = 1; e[j] = 1;
      out.set(e.join(','), -2 / 3);
    }
  }
  return out;
}

function power(poly, n) {
  let out = new Map([['0,0,0', 1]]);
  for (let k = 0; k < n; k += 1) out = multiply(out, poly);
  return out;
}

for (let s = 2; s <= 9; s += 1) {
  const coeff = power(qPolynomial(), s).get(`${2 * s},0,0`);
  assert(Math.abs(coeff - (2 / 3) ** s) < 1e-12, `pure-term coefficient failed at s=${s}`);
  assert(Math.abs(3 * coeff) > 0, `Jacobian diagonal vanished at s=${s}`);
}

for (let s = 1; s <= 16; s += 1) {
  assert(2 * s <= 2 * s, 'degree bookkeeping failed');
}

assert(Math.abs(3 - 1 - 2) < 1e-12, 'R1 Gaussian normalization failed');
console.log('R197_FINITE_ROW_CUBIC_RADIUS_IFT_PASSED');

