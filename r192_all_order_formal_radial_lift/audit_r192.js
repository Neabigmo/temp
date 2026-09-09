'use strict';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function factorial(n) {
  let out = 1;
  for (let k = 2; k <= n; k += 1) out *= k;
  return out;
}

function choose(n, k) {
  if (k < 0 || k > n) return 0;
  let out = 1;
  for (let j = 1; j <= k; j += 1) out *= (n - k + j) / j;
  return out;
}

function addMap(a, key, value) {
  a.set(key, (a.get(key) || 0) + value);
}

function mulMap(a, b) {
  const out = new Map();
  for (const [ka, va] of a) for (const [kb, vb] of b) addMap(out, ka + kb, va * vb);
  return out;
}

function powMap(a, n) {
  let out = new Map([[0, 1]]);
  for (let k = 0; k < n; k += 1) out = mulMap(out, a);
  return out;
}

// Fourier coefficients of S_k(theta)=sum_j a_j(theta)^k.
function SMap(k) {
  const out = new Map();
  const scale = 3 * Math.pow(2 / 3, k / 2) / Math.pow(2, k);
  for (let ell = 0; ell <= k; ell += 1) {
    const freq = k - 2 * ell;
    if (freq % 3 === 0) addMap(out, freq, scale * choose(k, ell));
  }
  return out;
}

function averageProduct(rs, d) {
  let out = new Map([[0, 1]]);
  for (let k = 1; k < rs.length; k += 1) out = mulMap(out, powMap(SMap(k * d), rs[k]));
  return out.get(0) || 0;
}

function enumerateCompositions(m, d, callback, k = 1, remaining = m, rs = [0]) {
  if (k === m + 1) {
    if (remaining === 0) callback(rs.slice());
    return;
  }
  const max = Math.floor(remaining / k);
  for (let r = 0; r <= max; r += 1) {
    rs[k] = r;
    enumerateCompositions(m, d, callback, k + 1, remaining - k * r, rs);
  }
}

function complexPowI(exponent) {
  const phase = ((exponent % 4) + 4) % 4;
  return [[1, 0], [0, 1], [-1, 0], [0, -1]][phase];
}

function complexMul(a, b) {
  return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
}

function term(rs, b, d) {
  let value = [1, 0];
  for (let k = 1; k < rs.length; k += 1) {
    const r = rs[k];
    if (!r) continue;
    let base = complexMul(b[k], complexPowI(k * d));
    for (let j = 0; j < r; j += 1) value = complexMul(value, base);
    value = [value[0] / factorial(r), value[1] / factorial(r)];
  }
  const average = averageProduct(rs, d);
  return [value[0] * average, value[1] * average];
}

for (const d of [3, 5]) {
  const b = Array(9).fill([0, 0]);
  b[1] = [1, 0];
  for (let m = 1; m <= 8; m += 1) {
    let known = [0, 0];
    enumerateCompositions(m, d, rs => {
      if (rs[m] === 1) return; // this is the unique new b_m term
      const value = term(rs, b, d);
      known = [known[0] + value[0], known[1] + value[1]];
    });
    const Ak = averageProduct([0, ...Array(m - 1).fill(0), 1], d);
    const pivot = complexPowI(m * d);
    if (m % 2 === 1) {
      assert(Math.hypot(known[0], known[1]) < 1e-9,
        'odd formal radial coefficient was not killed by parity');
      if (m > 1) b[m] = [0, 0];
    } else {
      assert(Ak > 1e-12, 'even radial pivot is not positive');
      const denom = [pivot[0] * Ak, pivot[1] * Ak];
      const denomNorm = denom[0] * denom[0] + denom[1] * denom[1];
      b[m] = [-(known[0] * denom[0] + known[1] * denom[1]) / denomNorm,
        -(-known[0] * denom[1] + known[1] * denom[0]) / denomNorm];
      const check = term([0, ...Array(m - 1).fill(0), 1], b, d);
      assert(Math.hypot(known[0] + check[0], known[1] + check[1]) < 1e-8,
        'even recursive cancellation failed');
    }
  }
}

console.log('R192_ALL_ORDER_FORMAL_RADIAL_LIFT_PASSED');

