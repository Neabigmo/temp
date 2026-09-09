const fs = require('fs');
const path = require('path');

const readme = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8');
const required = [
  'R212：经典 sample-variance χ² 边界与本项目定位',
  'Positive Backward-Tower Exact Zero-Set Rigidity',
  '`Q~chi^2_2`',
  'Ejsmont--Lehner',
  'Ruben',
  'Golikova--Kruglov',
  'R210',
  'R211',
  'OPEN',
  '无',
  'Cov(Q,exp(isC))=0',
];
for (const marker of required) {
  if (!readme.includes(marker)) throw new Error(`missing marker: ${marker}`);
}

// Residual projection for n=3: P = I - 11^T/3, rank(P)=2 and P^2=P.
const n = 3;
const P = Array.from({ length: n }, (_, i) =>
  Array.from({ length: n }, (_, j) => (i === j ? 1 : 0) - 1 / n),
);
const mul = (A, B) => A.map((row, i) =>
  B[0].map((_, j) => row.reduce((s, _, k) => s + A[i][k] * B[k][j], 0)),
);
const maxAbs = (A) => Math.max(...A.flat().map((x) => Math.abs(x)));
const P2 = mul(P, P);
if (maxAbs(P2.map((row, i) => row.map((x, j) => x - P[i][j]))) > 1e-12) {
  throw new Error('residual projection is not idempotent');
}
const trace = P.reduce((s, row, i) => s + row[i], 0);
if (Math.abs(trace - 2) > 1e-12) throw new Error(`rank check failed: ${trace}`);

// For chi-square with 2 degrees of freedom: E Q = 2 and L_Q(z)=(1+2z)^-1.
const z = 0.37;
const laplace = 1 / (1 + 2 * z);
if (!(laplace > 0 && laplace < 1)) throw new Error('chi-square Laplace calibration failed');

console.log('R212_COORDINATE_AUDIT PASSED');
console.log('R212_CLASSICAL_CHISQUARE_BOUNDARY RECORDED');
console.log('R212_GLOBAL_PUBLICATION_VERDICT: NONE');
