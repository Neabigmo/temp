# R187 — Sector-wise bounds do not imply global inverse-tail tightness

日期：2026-09-09

## 结论先行

R17 的每个固定 common-chaos sector `ell` 都有 inverse-OU 加权界，但把这些
sector 分别控制并不能推出跨 `(ell,n)` 的 uniform tail tightness。抽象谱族
可以把全部允许的质量逐轮搬到 `n=N`，同时保持每个固定 sector 的界不变。
这不是 genuine full-exact 反例；它精确指出还缺少 same-factor identity 对
不同 sector 的联合约束。

固定 `r>1`，令 `A_1=1`，对每个 `N>=1` 定义

`C_(ell,n)^(N)=r^(-(2N+1))`  if `(ell,n)=(1,N)`,
`C_(ell,n)^(N)=0` otherwise.

则对每个固定 `ell`

`sum_n r^(4n+2ell) |C_(ell,n)^(N)|^2 <= 1`,

且 `ell=0` sector 完全为零，故不触犯 `T~Exp(1)` 给出的
`C_(0,n)=E[L_n(T)]=0`（`n>=1`）。但是对任意固定 `M`，只要 `N>M`，

`sum_(2n+ell>M) r^(4n+2ell)|C_(ell,n)^(N)|^2=1`。

所以 sector-wise Parseval 界不能推出

`lim_(M->infinity) sup_N sum_(2n+ell>M) ... =0`。

## 1. 这族满足了什么、没有满足什么

它满足 R17 已有的形式输入：每个 `ell` 的 weighted `ell^2` 预算有限，且
每一轮只有一个高阶 mixed coefficient；固定 sector 看不到质量迁移。它没有
被声称为某个联合概率密度的 coefficients，更没有验证 full same-factor
identity、Bochner positivity 或 exact `Q` law。特别地，不能把它当作原始问题
的 counterexample。

若尝试用 `ell=0`，会与 `T~Exp(1)` 的正交性冲突；改用 `ell=1` 正是为保留
所有已知 marginal constraints。由此可见，真正缺失的不是再加强单个 sector
的 Parseval 常数，而是控制 `U|T` 的 mixed conditional structure。

## 2. 对 primitive closure 的条件性含义

若能在 genuine exact class 中证明对某个固定 `r>1` 及所有相关 primitive
序列 `pi_N` 有

`lim_(M->infinity) sup_N sum_(2n+ell>M)
 r^(4n+2ell)|C_(ell,n)(pi_N)|^2=0`,

并且有限 chaos coordinates 在 weak limit 下连续，则 finite-coordinate
收敛加 uniform tail 即给出完整 inverse-OU weighted `L^2` 收敛。结合 R16
的 primitive/inverse-Hankel 等价，便可阻止 `M_r(pi_N)->infinity`，使 primitive
stratum 在该 `r` 下闭合。

R187 的抽象族说明这个条件不能从“每个 `ell` 单独有一个 `A_ell`”推出；
必须证明跨 sector 的 conditional-moment/Hankel 正性、same-factor product
结构或一个真正的 total-degree budget。

## 3. 当前全局判断

- `PROVED UNDER R17 HYPOTHESES`：OU–Laguerre 对角化和 sector-wise weighted
  Parseval；抽象移动谱族证明 sector-wise 到 global tail 的逻辑不蕴含。
- `OPEN`：genuine same-factor identity 是否产生 total-degree inverse-tail
  tightness；primitive closedness；bare `RK=1` 识别；原始 `P_3K` 与各 sector
  的识别。

R187 是 global spectral-tail obstruction/conditional interface，不是原始
 rigidity theorem，也不是 genuine counterexample。整体发表性仍为“无”。

审计命令：

`node r187_spectral_tail_migration_obstruction/audit_r187.js`

预期 marker：`R187_SPECTRAL_TAIL_MIGRATION_OBSTRUCTION_PASSED`
