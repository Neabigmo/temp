'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function add(a, b) {
  const n = Math.max(a.length, b.length);
  const out = Array(n).fill(0);
  for (let i = 0; i < n; i += 1) out[i] = (a[i] || 0) + (b[i] || 0);
  return out;
}

function negate(a) {
  return a.map((x) => -x);
}

function multiply(a, b) {
  const out = Array(a.length + b.length - 1).fill(0);
  for (let i = 0; i < a.length; i += 1) {
    for (let j = 0; j < b.length; j += 1) out[i + j] += a[i] * b[j];
  }
  return out;
}

function determinant(matrix) {
  const n = matrix.length;
  const permutation = [];
  const used = new Set();
  let out = [0];
  function visit() {
    if (permutation.length === n) {
      let inversions = 0;
      for (let i = 0; i < n; i += 1) {
        for (let j = i + 1; j < n; j += 1) {
          if (permutation[i] > permutation[j]) inversions += 1;
        }
      }
      let term = [1];
      for (let i = 0; i < n; i += 1) term = multiply(term, matrix[i][permutation[i]]);
      out = add(out, inversions % 2 ? negate(term) : term);
      return;
    }
    for (let j = 0; j < n; j += 1) {
      if (used.has(j)) continue;
      used.add(j); permutation.push(j); visit(); permutation.pop(); used.delete(j);
    }
  }
  visit();
  while (out.length > 1 && out[out.length - 1] === 0) out.pop();
  return out;
}

// Numeric product expansion for Q^4. It verifies the exact-row coefficient
// without relying on the closed form used later in the symbolic determinant.
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

for (const [c, a, b] of [[0.1, -1.3, 4], [0.3, 2.1, -5], [0.6, -3.2, 7]]) {
  const moments = [1, 0, 1, c, 3, 10 * c, 15 + 7 * c * c,
    a + 105 * c, b + 105 + 196 * c * c];
  const row4 = expectation(powerTerms(q, 4), moments) - 384;
  assert(Math.abs(row4 - (16 / 27) * b) < 1e-8,
    'F4 coefficient mismatch');
}

// Three-variable polynomial in (c, a, b), keyed by c-degree,a-degree,b-degree.
function P(terms) { return new Map(terms.map(([key, value]) => [key, value])); }
function pAdd(a, b) {
  const out = new Map(a);
  for (const [key, value] of b) out.set(key, (out.get(key) || 0) + value);
  for (const [key, value] of out) if (value === 0) out.delete(key);
  return out;
}
function pNeg(a) { return new Map([...a].map(([key, value]) => [key, -value])); }
function pMul(a, b) {
  const out = new Map();
  for (const [ka, va] of a) for (const [kb, vb] of b) {
    const ea = ka.split(',').map(Number), eb = kb.split(',').map(Number);
    const key = ea.map((x, i) => x + eb[i]).join(',');
    out.set(key, (out.get(key) || 0) + va * vb);
  }
  return out;
}
function mon(c, a, b, coefficient = 1) { return P([[`${c},${a},${b}`, coefficient]]); }
function detPoly(matrix) {
  const n = matrix.length, permutation = [], used = new Set();
  let out = new Map();
  function visit() {
    if (permutation.length === n) {
      let inversions = 0;
      for (let i = 0; i < n; i += 1) for (let j = i + 1; j < n; j += 1) {
        if (permutation[i] > permutation[j]) inversions += 1;
      }
      let term = mon(0, 0, 0);
      for (let i = 0; i < n; i += 1) term = pMul(term, matrix[i][permutation[i]]);
      out = pAdd(out, inversions % 2 ? pNeg(term) : term);
      return;
    }
    for (let j = 0; j < n; j += 1) if (!used.has(j)) {
      used.add(j); permutation.push(j); visit(); permutation.pop(); used.delete(j);
    }
  }
  visit();
  return out;
}

const z = P([]), one = mon(0, 0, 0), c = mon(1, 0, 0);
const a = mon(0, 1, 0), b = mon(0, 0, 1);
const m = [one, z, one, c, mon(0, 0, 0, 3), mon(1, 0, 0, 10),
  pAdd(mon(0, 0, 0, 15), mon(2, 0, 0, 7)),
  pAdd(a, mon(1, 0, 0, 105)),
  pAdd(pAdd(b, mon(0, 0, 0, 105)), mon(2, 0, 0, 196))];
const H3 = Array.from({ length: 4 }, (_, i) =>
  Array.from({ length: 4 }, (_, j) => m[i + j]));
const H4 = Array.from({ length: 5 }, (_, i) =>
  Array.from({ length: 5 }, (_, j) => m[i + j]));
assert(JSON.stringify(detPoly(H3).get('0,0,0')) === '12', 'H3 constant mismatch');
const expectedH3 = new Map([['0,0,0', 12], ['2,0,0', -30], ['4,0,0', -6]]);
assert(JSON.stringify([...detPoly(H3).entries()].sort()) === JSON.stringify([...expectedH3.entries()].sort()),
  'H3 determinant mismatch');
const expectedH4 = new Map([
  ['0,0,0', 288], ['0,0,1', 12], ['0,2,0', -2], ['1,1,0', -144],
  ['2,0,0', -2160], ['2,0,1', -30], ['2,2,0', 1], ['3,1,0', 108],
  ['4,0,0', -486], ['4,0,1', -6], ['6,0,0', -630]
]);
const actualH4 = detPoly(H4);
assert(JSON.stringify([...actualH4.entries()].sort()) === JSON.stringify([...expectedH4.entries()].sort()),
  'H4 determinant mismatch');

for (const cValue of [0.1, 0.3, 0.5]) {
  const u = cValue * cValue;
  const aOpt = -18 * cValue * (4 - 3 * u) / (2 - u);
  const d = (u - 2) * aOpt * aOpt - 36 * cValue * (4 - 3 * u) * aOpt
    + 288 - 2160 * u - 486 * u * u - 630 * u * u * u;
  const expected = (2 - 5 * u - u * u) * (-630 * u * u + 1008 * u + 288) / (2 - u);
  assert(Math.abs(d - expected) < 1e-8 && d > 0, 'H4 optimized defect mismatch');
}

console.log('R200_HANKEL_FOURTH_ROW_ESCAPE_PASSED');
