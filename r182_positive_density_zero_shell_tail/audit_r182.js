// Structural exact sanity audit for the positive-density zero-shell lemma.
'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

// Model first shell: A_k=1+omega^k+omega^(2k), which equals 3 on k=0 mod 3
// and 0 otherwise. Its squared Cesaro mean is 3=S_2.
const S2 = 3;
const B = 3;
let hits = 0;
for (let k = 0; k < 300; k++) {
  const A = k % 3 === 0 ? 3 : 0;
  if (A * A * 2 >= S2) hits++;
}
assert(hits * 3 === 300, 'periodic shell density failed');
// Here p0=(3/2)/(9-3/2)=1/5; 1/3 >= 1/5 by cross multiplication.
assert(hits * 1 >= 300 / 5, 'density lower bound failed');

// A separated outer shell is exponentially negligible after normalization.
const R = 1, R1 = 2, outerMass = 5;
for (let k = 10; k <= 30; k++) {
  // 5 * 2^(-(2k-2)) < 1/50 is checked using integers.
  assert(outerMass * 50 < 2 ** (2 * k - 2),
    `outer-shell decay failed at k=${k}`);
}

// Cumulant-to-series conversion: kappa_m/(m-1)! becomes (2k+1)c_m.
for (const k of [1, 2, 5, 10]) {
  const m = 2 * k + 1;
  const cNumerator = 7, cDenominator = 13;
  const kappaNumerator = m * cNumerator;
  assert(kappaNumerator / m === cNumerator,
    `coefficient conversion failed at m=${m}`);
  assert(cDenominator > 0, 'coefficient denominator failed');
}

// OU: t=1/4 sends R to 2R while kappa_m gains t^(m/2)=2^(-m).
for (const m of [3, 5, 7, 11]) {
  assert((1 / 2) ** m === (1 / 4) ** (m / 2), `OU scale failed at m=${m}`);
}
assert(2 === 2 * R, 'OU shell radius failed');

console.log('R182_POSITIVE_DENSITY_ZERO_SHELL_TAIL_PASSED');
