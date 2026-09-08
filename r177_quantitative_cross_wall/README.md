# R177 — quantitative all-odd backward wall from the R176 sign proof

日期：2026-09-09

## 定量推论

沿用 R176 的 genuine full-exact + full-SF 假设。令 `d=2s+1>=5`，并记

`P_d=sqrt((2d)!)/(2*d!)`,

`Z_d=omega^(d-1) [x^(d-1)]((1+x)(1+omega*x))^d >0`。

R176 的中心递推不只证明正性，还给出

`Delta_d >= (2/3)d(d+1)^2 Z_d`.

由 `C_d=P_d*9*6^(-d)*Delta_d/((d+1)(d+2)(d+3))`，得到显式下界

`C_d >= C_d^lower`,

`C_d^lower = P_d * 6*d*(d+1)/((d+2)(d+3)) * 6^(-d) * Z_d`,

且仿射中心展开中 `k=s` 的单项给出

`Z_d >= 2^(-d-1)*binom(d,s)*3^(s+1)`.

所以完全不依赖浮点数的可代入下界是

`C_d >= P_d * 6*d*(d+1)/((d+2)(d+3))
       * 2^(-2d-1)*3^(-s)*binom(d,s)`.

这条下界随 `d` 衰减，并不声称 uniform positive constant；它的意义是把 R174
的 all-`d` wall 的系数尺度显式化。

## 对 backward tower 的直接形式

若 `g=P_t h` 且两者 genuine full-exact/full-SF，`d` 是 `g` 的首个非零 odd
Hermite 阶，则 R176 wall 和本轮下界给出

`C_d*a_d(g)^2 <= t^d`,

并且可以用 `C_d^lower` 替换 `C_d` 得到一个完全显式的高阶约束。若
`g_N^(0)=P_(q^N)h_N` 是 genuine full-exact tower 的底层，则在首个 odd 阶为
`d_N>=5` 时

`C_(d_N)*a_(d_N)(g_N^(0))^2 <= q^(N*d_N)`.

这使剩余问题更清楚：固定 `d` 的 backward wall 已有强衰减；仍未排除的是
`d_N -> infinity`，或首 odd 系数自身同步变小。该推论不把 finite coefficient
decay 误写成 uniform Gaussian rigidity。

## 证据等级

- `PROVED UNDER GENUINE FULL-EXACT + FULL-SF`：`C_d` 的显式下界及 tower wall
  的代入形式，均为 R176 的直接代数推论。
- `EXACT-AUDITED`：`audit_r177.js` 用整数算术核验 `d=5,7,...,501` 的下界
  关系，且重新核验 `d=3` 的独立基例。
- `OPEN`：从 bare `RK=1` 得到该 genuine 类、消除 `d_N` escape、原始 `P_3K`
  identification、以及非 Gaussian exact law 的排除。

R177 是 R174/R176 的定量加强，不是原始主命题的完整解；总体发表性判断仍为“无”。

