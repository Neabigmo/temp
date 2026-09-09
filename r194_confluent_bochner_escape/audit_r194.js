'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function moment(order) {
  if (order % 2 === 1) return 0;
  let value = 1;
  for (let k = 1; k < order; k += 2) value *= k;
  return value;
}

function hankel(n) {
  return Array.from({ length: n + 1 }, (_, a) =>
    Array.from({ length: n + 1 }, (_, b) => moment(a + b)));
}

function quadratic(matrix, vector) {
  let value = 0;
  for (let a = 0; a < vector.length; a += 1) {
    for (let b = 0; b < vector.length; b += 1) value += vector[a] * matrix[a][b] * vector[b];
  }
  return value;
}

for (let n = 0; n <= 7; n += 1) {
  const H = hankel(n);
  for (let trial = 0; trial < 20; trial += 1) {
    const vector = Array.from({ length: n + 1 }, (_, k) => Math.sin((trial + 1) * (k + 1)));
    assert(quadratic(H, vector) > 0, `Gaussian Hankel test failed at n=${n}`);
  }
}

assert(moment(0) === 1 && moment(2) === 1 && moment(4) === 3, 'Gaussian moments mismatch');
console.log('R194_CONFLUENT_BOCHNER_ESCAPE_PASSED');

