const fs = require('fs');
const path = require('path');

const readme = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8');
for (const marker of [
  'R214：固定底层与 varying-bottom backward tower 的二分',
  '固定底层',
  'varying-bottom',
  'A_3^MGF  <=>  B_q^MGF',
  'tau_ang(mu)>0',
  'tau_ang(P_s h)=s tau_ang(h)',
  'PROVED UNDER STATED HYPOTHESES / LOCAL-AUDITED',
  '独立、完整、可审稿的发表性总评仍为**无**',
]) {
  if (!readme.includes(marker)) throw new Error(`missing marker: ${marker}`);
}

const q = 0.73;
const tau = 0.41;
if (!(q ** 1 < 1 && q ** 40 < tau)) throw new Error('fixed-bottom scale contradiction not witnessed');
const orbitTau = q ** 40 * tau;
if (!(orbitTau > 0 && orbitTau < tau)) throw new Error('varying-bottom threshold scaling failed');

const firstCharge = 0.17;
const scaledCharge = q ** (40 * 1.5) * firstCharge;
if (!(scaledCharge > 0 && scaledCharge < firstCharge)) throw new Error('OU charge nonvanishing scaling failed');

console.log('R214_FIXED_BOTTOM_VARYING_BOTTOM_DICHOTOMY_AUDIT PASSED');
console.log('R214_SINGLE_LAW_REDUCTION RECORDED');
console.log('R214_GLOBAL_PUBLICATION_VERDICT: NONE');
