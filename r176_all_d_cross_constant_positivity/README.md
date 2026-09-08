# R176 — all odd `d` positivity of the R174 cross-harmonic constant

日期：2026-09-09

## Theorem

在 R174 的 `genuine full-exact + full-SF` 假设下，R174 定义的

`C_d=sqrt((2d)!)/(2*d!)*(H_d-L_d B_d/A_d)`

对每个 odd `d>=3` 都严格为正。因此 R174 的 cross-harmonic wall 可升级为

`C_d a_d(g)^2 <= t^d`.

这仍是条件性 genuine 结果：它不自动把 scalar `RK=1` 变成 full-exact/full-SF，
也不识别原始 `P_3K`、不排除 `d_N` 逃逸，不解决最终 rigidity。

## 记号和根滤波

令 `omega=exp(2*pi*i/3)`，`d=2s+1`，并写

`Q(x)=(1+x)(1+omega*x)=1+(1+omega)x+omega*x^2`。

令 `q_m=[x^m]Q(x)^d`。直接展开给出

`q_d=sum_j binom(d,j)^2 omega^j`,

`q_(d-3)=sum_j binom(d,j)binom(d,j+3)omega^j`.

对 R175 的选定 residue class `J_d={j:j=-d (mod 3)}`，记

`A=binom(2d,d)`, `T=binom(2d,d-3)`,
`X=omega^d q_d`, `Y=omega^d q_(d-3)`。

由 root-of-unity filter、二项式对称性和 Vandermonde identity：

`S_0=(A+2X)/3`, `S_3=(T+2Y)/3`, `T/A=n/D`,

其中 `n=d(d-1)(d-2)`、`D=(d+1)(d+2)(d+3)`。所以

`Delta_d=D S_3-n S_0=(2/3)(D Y-n X)`.                 (R176-1)

## 中心系数符号

作仿射代换 `x=omega(1+y)/2`。利用 `1+omega=-omega^2` 和 `omega^3=1`，

`Q(x)=(y^2+3)/4`.

于是

`Q(x)^d=4^(-d) sum_(k=0)^d binom(d,k)3^(d-k)y^(2k)`.

对 `m=d=2s+1`，`[x^m]y^(2k)` 的符号在所有非零项中都为负；对
`m=d-1=2s`，符号在所有非零项中都为正。因此存在严格正数 `U_d,V_d` 使得

`X=omega^d q_d=-U_d<0`,

`Z=omega^(d-1)q_(d-1)=V_d>0`.                         (R176-2)

更具体地，乘以 `4^d` 后可取

`4^d U_d=2^d sum_(k=s+1)^d binom(d,k)3^(d-k)binom(2k,d)`,

`4^d V_d=2^(d-1) sum_(k=s)^d binom(d,k)3^(d-k)binom(2k,d-1)`,

两式均为严格正的整数。

## 消去 `q_(d-3)`

系数递推 `Q q'=d Q' q` 在中心附近给出

`q_(d-3)=d*((d+1)omega^2 q_(d-1)+2q_d)/((d+2)(d+3))`.

故

`omega^d(D q_(d-3)-n q_d)
 =d*((d+1)^2 Z+d(5-d)X)`.                         (R176-3)

当 `d>=5` 时，第一项严格为正，且 `d(5-d)X>=0`；所以右端严格为正。
结合 (R176-1)，得到 `Delta_d>0`，进而 `C_d>0`。当 `d=3` 时，直接有
`X=-7`、`Z=6`，右端为 `3*(16*6-6*7)=162>0`，同样得到 `Delta_3=108>0`。

## 证据边界

- `PROVED UNDER GENUINE FULL-EXACT + FULL-SF`：上述 root-filter reduction、
  affine coefficient sign lemma、中心递推和所有 odd `d` 的 `C_d>0`。
- `EXACT-AUDITED`：`audit_r176.js` 用整数算术核验 R176-1 至 R176-3 的等式，
  并检查 odd `3<=d<=501`。
- 仍 `OPEN`：如何从题设 bare `RK=1` 得到 full-exact/all-row/full-SF；原始
  `P_3K` 的对象身份；`d_N` escape；非 Gaussian genuine exact law 的存在或排除。

因此 R176 是一个真正的全阶 conditional proposition，但还不是原始
Positive Backward-Tower Exact Zero-Set Rigidity 的独立完整发表结果。

