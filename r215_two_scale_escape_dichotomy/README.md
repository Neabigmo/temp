# R215：genuine full-exact varying-bottom 塔的两尺度逃逸二分

日期：2026-09-09  
基线：R214，提交 `c26d0af`

## 0. 结论先行

考虑 genuine positive centered variance-one full-exact towers

`g_N^(0)=P_(q^N)g_N^(N)`, `q in (0,1)`, `q^N -> 0`，

并假设每个底层 `g_N^(0)` 非对称。令 `d_N>=3` 为底层的首个非零 odd
Hermite 阶。R173 与 R176--R178 联立后，任何这样的序列经过子列都只有两种
可观察形态：

1. **bounded-degree collapse：** `d_N=d` 固定，而首 angular charge
   `beta_(d,1)(g_N^(0))` 至少按 `q^(Nd/2)` 衰减；
2. **moving-degree escape：** `d_N -> infinity`，并且首 odd Hermite amplitude
   满足 R178 型显式高阶上界
   `|a_(d_N)(g_N^(0))|^2
    <= O(d_N^(3/4)(sqrt(3)q^N)^(d_N))`。

这不是原始 rigidity，因为两种情形都允许“每层非零但趋于零”。但它把
genuine full-exact varying-bottom 的剩余自由度从笼统的“可能逃逸”压缩为
charge-amplitude collapse 与 degree escape 的精确二分，并可与 R186 的
inverse-Hankel rank escape 对照。

## 1. 首 odd window 的严格预算

若 `d_N` 是首个非零 odd Hermite 阶，则 R173 的 genuine positive angular cone
给出

`sum_(m odd, d_N<=m<3d_N)
 Lambda_m^2 (q^N)^(-m) a_m(g_N^(0))^2 <= 1`,

其中

`Lambda_m=3(sqrt(2/3)/2)^m binom(m,(m-3)/2)>0`。

保留首项即得

`|a_(d_N)(g_N^(0))|^2
 <= (q^N)^(d_N)/Lambda_(d_N)^2`,

并且因为 `beta_(d_N,1)=Lambda_(d_N)a_(d_N)`，

`0<|beta_(d_N,1)(g_N^(0))|^2 <= (q^N)^(d_N)`.

这一步只使用 genuine exact cone 与首 odd minimality，不使用 formal radial jet。

## 2. 两种逃逸情形

### A. 首 odd 阶有界

若一条子列满足 `d_N=d` 固定，则

`0<|beta_(d,1)(g_N^(0))| <= q^(Nd/2) -> 0`.

所以 bounded-degree 分支不可能携带一个 uniform positive first-charge gap；
它只能是固定阶的 charge-amplitude collapse。R101 的 `tau_ang` 也随之失去
uniform lower bound，除非额外证明 top-side normalized charge 不会同步塌缩。

### B. 首 odd 阶逃向无穷

若 `d_N->infinity`，R176--R178 的 all-odd cross-wall 给出（对 `d_N>=5`）

`C_(d_N)a_(d_N)(g_N^(0))^2 <= (q^N)^(d_N)`,

且 R178 的显式 Stirling 估计给出

`a_(d_N)(g_N^(0))^2
 <= O(d_N^(3/4)(sqrt(3)q^N)^(d_N))`。

因此 moving-degree 分支不是任意逃逸；其首 odd amplitude 至少受到
`N*d_N` 的双重指数尺度压缩。R186 同时表明，在 primitive laws 趋向 Gaussian
且满足 square-exponential envelope 时，inverse-Hankel failure order
`M_r->infinity`。当前尚未证明 `d_N->infinity` 与 `M_r->infinity` 不相容，
但这把剩余问题明确成一个“双逃逸兼容性”问题。

## 3. 与原始 `P_3K` 的边界

若 `P_3K` 指 R102 analytic log-MGF charge，并且 full-SF minimality 把首个
非零 charge 阶与 `d_N` 对齐，则 R215 给出首 charge 的同一二分。若 `P_3K`
指空间 `log g` charge，则仍必须经过 R172 的 provenance bridge，不能直接
套用本结论。

R215 不证明以下错误命题：

- 非零 charge 必须有统一正下界；
- moving degree 必然违反 positivity；
- `RK=1` 自动属于 genuine full-exact 类；
- R102、R101 与 spatial `P_3K` 已经是同一个 observable。

## 4. 证据分级与发表性

### `PROVED UNDER GENUINE FULL-EXACT + FULL-SF / LOCAL-AUDITED`

首 odd window 预算、首 charge bound、bounded-degree collapse，以及
moving-degree 的 R178 显式衰减代入。

### `SYNTHESIS / CONDITIONAL`

把 R215 与 R186 的 primitive rank escape 组成双逃逸框架；把 R102 charge
转回原始 spatial `P_3K` 或 bare `RK=1`。

### `OPEN`

能否排除 charge-amplitude collapse；能否证明 moving-degree 与 primitive-rank
escape 不相容；是否存在 asymmetric genuine exact 单律；以及最终 positive
backward-tower rigidity。整体独立、完整、可审稿的发表性判断仍为**无**。

## 5. 唯一下一步

只攻“双逃逸兼容性”：在 R101 angular cone、R176 cross-wall 和 R186
inverse-Hankel failure 同时成立的条件下，寻找一个统一的 positive budget，
把 `d_N`、`M_r` 与首 charge 联系起来；若只能得到三个分别衰减的上界，就明确
记录为 obstruction，不再堆新的 radial rows。
