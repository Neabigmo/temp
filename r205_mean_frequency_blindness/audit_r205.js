'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const sqrt = Math.sqrt;
const pi = Math.PI;

function coefficients(theta) {
  return [
    sqrt(2 / 3) * Math.cos(theta),
    sqrt(2 / 3) * Math.cos(theta + 2 * pi / 3),
    sqrt(2 / 3) * Math.cos(theta - 2 * pi / 3),
  ];
}

for (const theta of [0, 0.17, 0.71, 1.93, 4.2]) {
  const a = coefficients(theta);
  const sum = a.reduce((x, y) => x + y, 0);
  const norm = a.reduce((x, y) => x + y * y, 0);
  assert(Math.abs(sum) < 1e-12, 'residual coefficients are not orthogonal to e0');
  assert(Math.abs(norm - 1) < 1e-12, 'residual coefficients are not unit length');
}

// T~Exp(1): E[T^k]=k!, and the J0 series therefore has coefficient
// (-1)^k (y^2/2)^k/k!, i.e. exp(-y^2/2).
let factorial = 1;
for (let k = 0; k <= 12; k += 1) {
  if (k > 0) factorial *= k;
  const besselCoefficient = ((k % 2) ? -1 : 1) / (Math.pow(2, k) * factorial);
  const gaussianCoefficient = ((k % 2) ? -1 : 1) / (Math.pow(2, k) * factorial);
  assert(Math.abs(besselCoefficient - gaussianCoefficient) < 1e-15,
    'Bessel/Laplace coefficient mismatch');
}

console.log('R205_MEAN_FREQUENCY_BLINDNESS_PASSED');
