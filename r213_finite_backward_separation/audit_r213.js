const fs = require('fs');
const path = require('path');

const readme = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8');
for (const marker of [
  'R213：正性与有限 OU backward divisibility 不推出对称或 mixed zero',
  'g^(j)=P_q g^(j+1)',
  '2/(15 sqrt(3)) != 0',
  'kappa_3(g^(j))=q^(3(N-j))',
  'Cov(Q,exp(isC))',
  'FINITE-ONLY / OBSTRUCTION',
  'OPEN',
]) {
  if (!readme.includes(marker)) throw new Error(`missing marker: ${marker}`);
}

const c = (5 / 3) ** 1.5;
const meanConstraint = 3 ** (-1.5) - c * 5 ** (-1.5);
const thirdMoment = 3 * 3 ** (-2.5) - c * 3 * 5 ** (-2.5);
if (Math.abs(meanConstraint) > 1e-12) throw new Error(`mean constraint failed: ${meanConstraint}`);
const expected = 2 / (15 * Math.sqrt(3));
if (Math.abs(thirdMoment - expected) > 1e-12) {
  throw new Error(`third moment failed: ${thirdMoment} vs ${expected}`);
}

const q = 0.73;
const N = 17;
const kappaBottom = q ** (3 * N) * expected;
if (!(kappaBottom > 0 && kappaBottom < expected)) throw new Error('OU cubic attenuation failed');

console.log('R213_GAUSSIAN_MOMENT_AUDIT PASSED');
console.log('R213_FINITE_OU_SEPARATION RECORDED');
console.log('R213_ORIGINAL_FULL_SF_COUNTEREXAMPLE: NO');
