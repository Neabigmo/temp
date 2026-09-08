/* Exact audit for the quantitative lower bound in R177. */

function binomialRow(n) {
  const row = Array(n + 1).fill(0n);
  row[0] = 1n;
  for (let j = 1; j <= n; j += 1) {
    row[j] = (row[j - 1] * BigInt(n - j + 1)) / BigInt(j);
  }
  return row;
}

function selectedResidue(d) {
  return ((-d % 3) + 3) % 3;
}

function selectedGap(d) {
  const row = binomialRow(d);
  const residue = selectedResidue(d);
  let s0 = 0n;
  let s3 = 0n;
  for (let j = residue; j <= d; j += 3) {
    s0 += row[j] * row[j];
    if (j + 3 <= d) s3 += row[j] * row[j + 3];
  }
  const D = BigInt((d + 1) * (d + 2) * (d + 3));
  const n = BigInt(d * (d - 1) * (d - 2));
  return D * s3 - n * s0;
}

function V4(d) {
  const s = (d - 1) / 2;
  const row = binomialRow(d);
  let out = 0n;
  for (let k = s; k <= d; k += 1) {
    out += (2n ** BigInt(d - 1))
      * row[k]
      * (3n ** BigInt(d - k))
      * binomialRow(2 * k)[d - 1];
  }
  return out;
}

if (selectedGap(3) !== 108n) {
  throw new Error("R177 d=3 base gap mismatch");
}

for (let d = 5; d <= 501; d += 2) {
  const delta = selectedGap(d);
  const v4 = V4(d);
  // 3*Delta*4^d >= 2*d*(d+1)^2*V4.
  const lhs = 3n * delta * (4n ** BigInt(d));
  const rhs = 2n * BigInt(d) * BigInt((d + 1) ** 2) * v4;
  if (delta <= 0n || v4 <= 0n || lhs < rhs) {
    throw new Error(`R177 lower-bound audit failed at d=${d}`);
  }
}

console.log("R177_QUANTITATIVE_CROSS_WALL_PASSED");

