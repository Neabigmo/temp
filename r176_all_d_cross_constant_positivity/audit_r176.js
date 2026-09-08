/* Exact integer audit for the R176 all-odd-d positivity identity. */

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

// Arithmetic in Z[omega], with omega^2=-1-omega.
function pairAdd(a, b) {
  return [a[0] + b[0], a[1] + b[1]];
}

function pairScale(k, a) {
  return [k * a[0], k * a[1]];
}

function pairMul(a, b) {
  return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0] - a[1] * b[1]];
}

function omegaPower(e) {
  switch (((e % 3) + 3) % 3) {
    case 0: return [1n, 0n];
    case 1: return [0n, 1n];
    default: return [-1n, -1n];
  }
}

function qCoefficient(d, m, row) {
  let out = [0n, 0n];
  for (let j = 0; j <= d; j += 1) {
    const k = m - j;
    if (k < 0 || k > d) continue;
    out = pairAdd(out, pairScale(row[j] * row[k], omegaPower(j)));
  }
  return out;
}

function pairEqual(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

function selectedSums(d) {
  const row = binomialRow(d);
  const residue = selectedResidue(d);
  let s0 = 0n;
  let s3 = 0n;
  for (let j = residue; j <= d; j += 3) {
    s0 += row[j] * row[j];
    if (j + 3 <= d) s3 += row[j] * row[j + 3];
  }
  return { s0, s3 };
}

function positiveUAndV(d) {
  const s = (d - 1) / 2;
  let u4 = 0n;
  let v4 = 0n;
  for (let k = s + 1; k <= d; k += 1) {
    u4 += BigInt(2) ** BigInt(d)
      * binomialRow(d)[k]
      * (BigInt(3) ** BigInt(d - k))
      * binomialRow(2 * k)[d];
  }
  for (let k = s; k <= d; k += 1) {
    v4 += BigInt(2) ** BigInt(d - 1)
      * binomialRow(d)[k]
      * (BigInt(3) ** BigInt(d - k))
      * binomialRow(2 * k)[d - 1];
  }
  return { u4, v4 };
}

for (let d = 3; d <= 501; d += 2) {
  const row = binomialRow(d);
  const { s0, s3 } = selectedSums(d);
  const D = BigInt((d + 1) * (d + 2) * (d + 3));
  const n = BigInt(d * (d - 1) * (d - 2));
  const delta = D * s3 - n * s0;
  const { u4, v4 } = positiveUAndV(d);
  if (delta <= 0n || u4 <= 0n || v4 <= 0n) {
    throw new Error(`R176 positivity failed at d=${d}`);
  }

  const qd = qCoefficient(d, d, row);
  const qd1 = qCoefficient(d, d - 1, row);
  const qd3 = qCoefficient(d, d - 3, row);
  const X = pairMul(omegaPower(d), qd);
  const Z = pairMul(omegaPower(d - 1), qd1);
  const Y = pairMul(omegaPower(d), qd3);
  if (X[1] !== 0n || Z[1] !== 0n || Y[1] !== 0n || X[0] >= 0n || Z[0] <= 0n) {
    throw new Error(`R176 root-filter sign phase failed at d=${d}`);
  }

  const recurrenceLeft = pairScale(BigInt((d + 2) * (d + 3)), qd3);
  const recurrenceRight = pairScale(
    BigInt(d),
    pairAdd(pairScale(BigInt(d + 1), pairMul(omegaPower(2), qd1)), pairScale(2n, qd)),
  );
  if (!pairEqual(recurrenceLeft, recurrenceRight)) {
    throw new Error(`R176 center recurrence failed at d=${d}`);
  }

  const W = pairAdd(pairScale(D, Y), pairScale(-n, X));
  const recurrenceW = pairScale(
    BigInt(d),
    pairAdd(pairScale(BigInt((d + 1) ** 2), Z), pairScale(BigInt(d * (5 - d)), X)),
  );
  if (!pairEqual(W, recurrenceW)) {
    throw new Error(`R176 W identity failed at d=${d}`);
  }

  // 3*Delta*4^d = 2*d*((d+1)^2*V4 + d*(d-5)*U4).
  const lhs = 3n * delta * (4n ** BigInt(d));
  const rhs = 2n * BigInt(d)
    * (BigInt((d + 1) ** 2) * v4 + BigInt(d * (d - 5)) * u4);
  if (lhs !== rhs) {
    throw new Error(`R176 identity failed at d=${d}`);
  }
}

console.log("R176_ALL_ODD_CROSS_CONSTANT_POSITIVITY_PASSED");
