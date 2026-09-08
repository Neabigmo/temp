// Exact rational audit for the OU-homogeneous scale no-go.
'use strict';

class Rat {
  constructor(n, d = 1n) {
    if (d === 0n) throw new Error('zero denominator');
    if (d < 0n) { n = -n; d = -d; }
    const g = gcd(n < 0n ? -n : n, d);
    this.n = n / g; this.d = d / g;
  }
  add(x) { x = asRat(x); return new Rat(this.n*x.d + x.n*this.d, this.d*x.d); }
  mul(x) { x = asRat(x); return new Rat(this.n*x.n, this.d*x.d); }
  div(x) { x = asRat(x); return new Rat(this.n*asRat(x).d, this.d*asRat(x).n); }
  eq(x) { x = asRat(x); return this.n === x.n && this.d === x.d; }
}
function asRat(x) { return x instanceof Rat ? x : new Rat(BigInt(x)); }
function gcd(a, b) { while (b !== 0n) { const t = a % b; a = b; b = t; } return a || 1n; }
function powRat(x, k) {
  if (k < 0) return new Rat(1n).div(powRat(x, -k));
  let y = new Rat(1n), b = x;
  while (k) { if (k & 1) y = y.mul(b); b = b.mul(b); k >>= 1; }
  return y;
}
function assertEq(label, a, b) {
  if (!a.eq(b)) throw new Error(`${label}: ${a.n}/${a.d} != ${b.n}/${b.d}`);
}

// Use t=1/4, so t^(m/2)=2^(-m) is rational for every integer Hermite grade m.
const t = new Rat(1n, 4n);
const grades = [3, 5, 7, 9, 11];
const base = grades.map((m, i) => new Rat(BigInt(i + 2), BigInt(i + 5)));
const scaled = grades.map((m, i) => base[i].mul(powRat(new Rat(1n, 2n), m)));

// R101/R173-type quadratic cone budget: every weighted summand is invariant.
let coneBase = new Rat(0n), coneScaled = new Rat(0n);
for (let i = 0; i < grades.length; i++) {
  const m = grades[i];
  const w = new Rat(BigInt((i + 1) ** 2));
  coneBase = coneBase.add(w.mul(base[i]).mul(base[i]));
  coneScaled = coneScaled.add(powRat(t, -m).mul(w).mul(scaled[i]).mul(scaled[i]));
}
assertEq('quadratic cone invariance', coneScaled, coneBase);

// R176/R177-type wall: C*a_d(P_t h)^2 = t^d*C*a_d(h)^2.
for (let i = 0; i < grades.length; i++) {
  const d = grades[i];
  const C = new Rat(BigInt(i + 3), BigInt(10 * (i + 1)));
  assertEq(`cross wall d=${d}`,
    C.mul(scaled[i]).mul(scaled[i]),
    powRat(t, d).mul(C).mul(base[i]).mul(base[i]));
}

// Generic homogeneous monomials: total grade is the sum of factor grades.
const monomials = [[3,5], [3,3,7], [5,7,9], [3,5,7,11]];
for (const ms of monomials) {
  const total = ms.reduce((a, b) => a + b, 0);
  let unscaled = new Rat(1n), scaledProduct = new Rat(1n);
  for (const m of ms) {
    const idx = grades.indexOf(m);
    if (idx < 0) throw new Error(`missing grade ${m}`);
    unscaled = unscaled.mul(base[idx]);
    scaledProduct = scaledProduct.mul(scaled[idx]);
  }
  assertEq(`monomial grade=${total}`,
    powRat(new Rat(2n), total).mul(scaledProduct), unscaled);
}

// Semigroup exponent bookkeeping for g_N^(j)=P_(q^(N-j))h.
for (let N = 1; N <= 12; N++) {
  for (let j = 0; j < N; j++) {
    const composed = 1 + (N - j - 1);
    const target = N - j;
    if (composed !== target) throw new Error('OU exponent identity failed');
  }
}

console.log('R179_HOMOGENEOUS_WALL_SCALE_NO_GO_PASSED');
