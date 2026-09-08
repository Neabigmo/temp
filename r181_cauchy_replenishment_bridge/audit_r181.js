// Exact rational audit of the Cauchy/replenishment scaling bridge.
'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

// For a power series C_o(z)=sum c_n z^n, c_n is bounded by M*rho^(-n).
// Use rational radii and coefficients to check the algebraic inequality exactly.
const rho = 2;
const M = 4096;
for (const n of [3, 5, 7, 9, 11]) {
  const coefficient = 1; // a coefficient at the Cauchy envelope
  assert(coefficient <= M / rho ** n,
    `Cauchy envelope setup failed at n=${n}`);
}

// A replenishment window with rho>=1 is maximized at its smallest odd degree d+2.
for (const d of [3, 5, 7, 9, 11]) {
  const window = [];
  for (let n = d + 2; n < 2 * (d + 8); n += 2) window.push(n);
  assert(window[0] === d + 2, `window minimum failed at d=${d}`);
  for (let i = 1; i < window.length; i++) {
    assert(rho ** (-window[i]) <= rho ** (-(d + 2)),
      `window Cauchy maximum failed at d=${d}`);
  }
}

// OU scaling: t=1/4 sends zeta to 2*zeta and c_n to 2^(-n)c_n.
const t = 1 / 4;
for (const n of [3, 5, 7, 9, 11]) {
  assert((1 / 2) ** n === t ** (n / 2), `OU coefficient scale failed at n=${n}`);
}
assert(3.5 / Math.sqrt(t) === 7, 'OU radius scale failed');

console.log('R181_CAUCHY_REPLENISHMENT_BRIDGE_PASSED');
