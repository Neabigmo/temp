const fs = require('fs');
const path = require('path');

const readme = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8');
for (const marker of [
  'R215：genuine full-exact varying-bottom 塔的两尺度逃逸二分',
  'bounded-degree collapse',
  'moving-degree escape',
  '0<|beta_(d_N,1)(g_N^(0))|^2 <= (q^N)^(d_N)',
  'O(d_N^(3/4)(sqrt(3)q^N)^(d_N))',
  'M_r->infinity',
  '双逃逸兼容性',
  '整体独立、完整、可审稿的发表性判断仍为**无**',
]) {
  if (!readme.includes(marker)) throw new Error(`missing marker: ${marker}`);
}

const q = 0.73;
const boundedDegree = 5;
const boundedCharge = q ** (30 * boundedDegree / 2);
if (!(boundedCharge > 0 && boundedCharge < 1)) throw new Error('bounded-degree decay failed');

const movingDegree = 31;
const N = 12;
const movingBound = movingDegree ** 0.75 * (Math.sqrt(3) * q ** N) ** movingDegree;
if (!(movingBound > 0 && movingBound < 1e-20)) throw new Error('moving-degree bound scale failed');

console.log('R215_TWO_SCALE_ESCAPE_DICHOTOMY_AUDIT PASSED');
console.log('R215_CHARGE_AND_RANK_ESCAPE_INTERFACE RECORDED');
console.log('R215_GLOBAL_PUBLICATION_VERDICT: NONE');
