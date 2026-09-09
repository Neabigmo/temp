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

const zero = [0];
const one = [1];
const c = [0, 1];
const moments = [one, zero, one, c, [3], [0, 10], [15, 0, 7]];
const H2 = Array.from({ length: 3 }, (_, i) =>
  Array.from({ length: 3 }, (_, j) => moments[i + j]));
const H3 = Array.from({ length: 4 }, (_, i) =>
  Array.from({ length: 4 }, (_, j) => moments[i + j]));

assert(JSON.stringify(determinant(H2)) === JSON.stringify([2, 0, -1]),
  'det H2 mismatch');
assert(JSON.stringify(determinant(H3)) === JSON.stringify([12, 0, -30, 0, -6]),
  'det H3 mismatch');

const cStarSquared = (Math.sqrt(33) - 5) / 2;
assert(cStarSquared > 0 && cStarSquared < 1, 'threshold interval mismatch');
const detAtOne = 12 - 30 - 6;
assert(detAtOne < 0, 'finite PSD obstruction not visible at c=1');
const detAtSmall = 12 - 30 * 0.01 - 6 * 0.0001;
assert(detAtSmall > 0, 'small branch should not be excluded by det H3');

console.log('R199_HANKEL_COMPENSATION_OBSTRUCTION_PASSED');
