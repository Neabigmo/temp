# R218：首个 odd packet 的 genuine degree-matched cross-witness

日期：2026-09-09  
基线：R217，提交 `361528c`

## 0. 新结果

R217 的 relaxed Gaussian-flat benchmark 可以在“首个 odd 阶”这一 genuine
full-SF 子类中提升为定理。设 `mu` 是 centered、variance-one、analytic 的
genuine full-exact law，满足 same-factor/full-SF identity；设

`D=2s+1>=3`

是首个非零 odd Hermite 阶，且 `beta_(D,1)=Lambda_D a_D`。固定 inverse scale
`r>1`、`t=r^(-2)`，令

`rho=t^(-D)|beta_(D,1)|^2`。

则：

* R133 的首 odd packet 递推强制 `kappa_4,...,kappa_(2D-2)=0`；因此 raw
  moments 到 `D+1` 阶除第 `D` 阶 odd moment外都与 Gaussian 相同；
* R186 的 inverse-OU formal moments `m_k^(r)` 在 `k<D` 及 `k=D+1` 与
  Gaussian 相同，而第 `D` 阶差异为

  `delta_D=r^D*sqrt(D!)*a_D
          =r^D*sqrt(D!)*beta_(D,1)/Lambda_D`；
* 在 normalized Hermite 基底 `psi_k=He_k/sqrt(k!)` 中，`H_(s+1)^(r)` 的
  `(s,s+1)` 主块为

  `[[1, delta_D/sqrt(s!(s+1)!)],
   [delta_D/sqrt(s!(s+1)!), 1]]`；
* 因而当

  `rho>rho_H(D):=Lambda_D^2*s!(s+1)!/D!`

  时，`H_(s+1)^(r)` 非半正定。又因

  `Lambda_D=3*6^(-D/2)*binom(D,s-1)`，

  `rho_H(D)=9*6^(-D)*binom(D,s-1)^2/binom(D,s)
           <=9*3^(-D)<1`，

  所以特别有真正的 genuine implication

  `t^(-D)|beta_(D,1)|^2>1  =>  H_((D+1)/2)^(r) not PSD`.

这是一个带 degree dependence 的、但 rank 仅为 `(D+1)/2` 的 genuine
degree-matched cross-witness；审计对 `D=3,5,9,17` 通过。

## 1. 它推进了什么

网页端 R217 提出的完整目标允许有限 partial budget 中同时出现多个 odd
degrees。R218 先严格解决其中最小但非平凡的首 odd 分支：只要 partial budget
在首 odd 阶已经超过 1，就有明确 Hankel 负证书。这不是 R216/R217 的普通
scalar moment camouflage，因为这里使用了 genuine same-factor/full-SF 对偶
约束 `kappa_(2j)=0`（`2<=j<D`）。

它还把合理的 rank 尺度从猜测变成了一个已证子情形：`M=(D+1)/2` 足够，且
`H_(M-1)` 仍可完全看不见首 odd charge。因而“线性 rank budget”并非任意
拍脑袋，而是首 odd packet 的自然临界层。

## 2. 仍未解决的边界

R218 尚未处理 `sum_(m<=D) t^(-m)|beta_(m,1)|^2>1` 由多个 odd degrees
共同贡献、而首项自身不超过 1 的情形；不同 angular degrees 的 cancellation
与 inverse-Hankel 的 higher-row coupling 仍 OPEN。它也没有完成
`RK=1=>full-exact`、spatial `P_3K` provenance、asymmetric single-law
exclusion 或最终 tower rigidity。

证明的是 `H_(s+1)` 的明确负主子式，而不是未经条件数估计的原始 monomial
矩阵特征值下界 `lambda_min<=-epsilon`；因此网页端目标中的 uniform negative
margin 仍需另证。

证据等级：`PROVED UNDER GENUINE ANALYTIC FULL-SF + FIRST-ODD HYPOTHESES`
并经 `LOCAL-AUDITED`；对 bare `RK=1` 仍为 conditional。整体原始命题仍
`OPEN`，独立、完整、可审稿的整体成果仍为**无**。

## 3. 审计

运行：

`node r218_first_odd_genuine_cross_witness/audit_r218.js`

预期 marker：`R218_FIRST_ODD_GENUINE_CROSS_WITNESS_PASSED`
