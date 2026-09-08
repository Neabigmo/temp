/* Exact finite audit for the R175 mod-3 binomial gap reduction. */

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

function gap(d) {
  const row = binomialRow(d);
  const residue = selectedResidue(d);
  let s0 = 0n;
  let s3 = 0n;
  for (let j = residue; j <= d; j += 3) {
    s0 += row[j] * row[j];
    if (j + 3 <= d) s3 += row[j] * row[j + 3];
  }
  return (
    BigInt((d + 1) * (d + 2) * (d + 3)) * s3
    - BigInt(d * (d - 1) * (d - 2)) * s0
  );
}

for (let d = 3; d <= 501; d += 2) {
  const delta = gap(d);
  if (delta <= 0n) {
    throw new Error(`non-positive Delta at d=${d}: ${delta}`);
  }
}

console.log("R175_MOD3_BINOMIAL_GAP_POSITIVE_THROUGH_501");

