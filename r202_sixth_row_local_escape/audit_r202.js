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

function choleskyPositive(matrix) {
  const n = matrix.length;
  const L = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j <= i; j += 1) {
      let value = matrix[i][j];
      for (let k = 0; k < j; k += 1) value -= L[i][k] * L[j][k];
      if (i === j) {
        if (!(value > 1e-8)) return false;
        L[i][j] = Math.sqrt(value);
      } else {
        L[i][j] = value / L[j][j];
      }
    }
  }
  return true;
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

function moments(c, d, f, g) {
  const u = c * c;
  return [1, 0, 1, c, 3, 10 * c, 15 + 7 * u, 105 * c, 105 + 196 * u,
    d + 1260 * c + 28 * c ** 3, 945 + 4410 * u,
    f + 17325 * c + 1540 * c ** 3 + 55 * d,
    g + 10395 + 97020 * u - 8162 * c ** 4 + 220 * c * d];
}

for (const [c, d, f, g] of [[0.1, 0.7, -2.2, 3.1], [-0.2, 5.3, 1.4, -4.2]]) {
  const row6 = expectation(powerTerms(q, 6), moments(c, d, f, g)) - 46080;
  assert(Math.abs(row6 - (64 / 243) * (g + 120 * c * d - 3213 * c ** 4)) < 1e-6,
    'F6 compensation identity mismatch');
}

for (const c of [0, 0.001, 0.005, 0.01]) {
  const u = c * c;
  const d3 = 12 - 30 * u - 6 * u * u;
  const b = -5760 * c + 21600 * c ** 3 - 4968 * c ** 5 - 252 * c ** 7;
  const d = b / (2 * d3);
  const g = 3213 * c ** 4 - 120 * c * d;
  const ms = moments(c, d, 0, g);
  const H6 = Array.from({ length: 7 }, (_, i) =>
    Array.from({ length: 7 }, (_, j) => ms[i + j]));
  assert(choleskyPositive(H6), `H6 is not positive definite at c=${c}`);
}

console.log('R202_SIXTH_ROW_LOCAL_ESCAPE_PASSED');
