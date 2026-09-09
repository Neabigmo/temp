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

function determinant(matrix) {
  const n = matrix.length;
  const permutation = [];
  const used = new Set();
  let out = 0;
  function visit() {
    if (permutation.length === n) {
      let inversions = 0;
      for (let i = 0; i < n; i += 1) {
        for (let j = i + 1; j < n; j += 1) {
          if (permutation[i] > permutation[j]) inversions += 1;
        }
      }
      let term = 1;
      for (let i = 0; i < n; i += 1) term *= matrix[i][permutation[i]];
      out += (inversions % 2 ? -1 : 1) * term;
      return;
    }
    for (let j = 0; j < n; j += 1) {
      if (used.has(j)) continue;
      used.add(j); permutation.push(j); visit(); permutation.pop(); used.delete(j);
    }
  }
  visit();
  return out;
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

function moments(c, a, d, e) {
  const u = c * c;
  return [1, 0, 1, c, 3, 10 * c, 15 + 7 * u,
    a + 105 * c, 105 + 196 * u,
    d + 1260 * c + 36 * a + 28 * c ** 3,
    e + 945 + 4410 * u + 120 * c * a];
}

for (const [c, a, d, e] of [[0.1, 0.7, -2.2, 3.1], [-0.2, -1.4, 5.3, -4.2]]) {
  const row5 = expectation(powerTerms(q, 5), moments(c, a, d, e)) - 3840;
  assert(Math.abs(row5 - (32 / 81) * (e + 60 * c * a)) < 1e-7,
    'F5 compensation identity mismatch');
}

for (const c of [0.01, 0.05, 0.1]) {
  const u = c * c;
  const d3 = 12 - 30 * u - 6 * u * u;
  const b = -5760 * c + 21600 * c ** 3 - 4968 * c ** 5 - 252 * c ** 7;
  const constant = 34560 - 604800 * u + 705888 * u ** 2
    - 2685096 * u ** 3 - 259497 * u ** 4 + 2646 * u ** 5;
  const d = b / (2 * d3);
  const ms = moments(c, 0, d, 0);
  const h3 = Array.from({ length: 4 }, (_, i) =>
    Array.from({ length: 4 }, (_, j) => ms[i + j]));
  const h4 = Array.from({ length: 5 }, (_, i) =>
    Array.from({ length: 5 }, (_, j) => ms[i + j]));
  const h5 = Array.from({ length: 6 }, (_, i) =>
    Array.from({ length: 6 }, (_, j) => ms[i + j]));
  assert(d3 > 0 && determinant(h3) > 0, 'H3 is not positive definite');
  assert(determinant(h4) > 0, 'H4 is not positive definite');
  const h5Expected = constant + b * b / (4 * d3);
  assert(Math.abs(determinant(h5) - h5Expected) < 1e-5 && determinant(h5) > 0,
    'H5 optimized Schur defect mismatch');
}

console.log('R201_FIFTH_ROW_HANKEL_ESCAPE_PASSED');
