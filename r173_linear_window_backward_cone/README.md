# R173 — 首个 odd sector 的 linear-window positive backward cone

日期：2026-09-09

## 结论

令 `mu` 是 genuine centered/variance-one full-exact law，令
`a_m(mu)=E_mu[psi_m]`，并令 `d>=3` 为首个非零 odd Hermite coefficient 的阶数：

`a_3=a_5=...=a_(d-2)=0`, `a_d != 0`.

沿用 full same-factor identity 的偶阶递推，低于 `2d` 的相关 even modes 消失：

`a_4=a_6=...=a_(2d-2)=0`.

对 `r=1` angular charge map，所有 odd 阶

`d <= m < 3d`

都没有 nonlinear mixing，精确地有

`beta_(m,1)(mu)=Lambda_m a_m(mu)`,

`Lambda_m=3*(sqrt(2/3)/2)^m*binom(m,(m-3)/2)>0`.

因此，如果 `g=P_t h` 且 `g,h` 都是 genuine full-exact，R101 的正性预算给出

`sum_(m odd, d<=m<3d) Lambda_m^2 t^(-m) a_m(g)^2 <= 1`.      (R173)

特别地，首个 odd 模式满足严格 backward wall

`|a_d(g)| < t^(d/2)/Lambda_d`,

或等价地

`t > |Lambda_d a_d(g)|^(2/d)`.

这比只写一个 degree-`d` 系数界更强：它控制首个 odd sector 到 cubic
threshold `3d` 之前的整个 finite window，并且所有项都来自 genuine positive
angular cone，而不是 formal Fock positivity。

## 证明要点

R101 的 cubic map 是三项乘积 `a_(k1)a_(k2)a_(k3)`，其中
`k1+k2+k3=m`。非零的正指标只有三类：零、odd 指标至少 `d`、以及在 full-SF
偶阶递推下至少 `2d` 的 even 指标。

若一个非线性项含一个 odd 指标和一个非零 even 指标，其总阶至少为 `3d`；若含
两个 odd 指标，则总阶为偶数（不可能进入 `r=1` 的 odd `m` sector），若含三个
odd 指标，则总阶至少为 `3d`。所以 `d<=m<3d` 时唯一可能项是一个 `a_m`
与两个 `a_0=1`，其角向系数正是 `Lambda_m`。

若 `g=P_t h`，R101 的 OU intertwining 给出

`beta_(m,1)(g)=t^(m/2) beta_(m,1)(h)`,

而 genuine positivity 给出 `sum_m |beta_(m,1)(h)|^2<=1`。丢掉窗口外的
非负项即得 (R173)。严格号来自正的绝对连续 preimage；一般概率 preimage
给非严格号。

## 与原始 `P_3K` 的关系

R102 的最强可用工作定义是 analytic log-MGF charge：

`P_3K_MGF(mu;z)=sum_(m>=3 odd) Lambda_m*kappa_m z^m/m!`.

并且 R102 审计给出

`[z^m]P_3K_MGF=beta_(m,1)/sqrt(m!)`.

所以在 R102 工作定义下，R173 等价地产生 coefficient-window 约束

`sum_(m odd, d<=m<3d) m! t^(-m) |[z^m]P_3K_MGF(g;z)|^2 <= 1`.

特别是

`|[z^d]P_3K_MGF(g;z)| < t^(d/2)/sqrt(d!)`.

这不是把 log-MGF charge 识别成空间 `ell_3^sp`；空间对象仍须单独处理。
历史工作日志把 R102 定义记为“从早期 R4 恢复”，但早期 R4 原文并未随仓库保存，
故 provenance 的来源核验仍为 `OPEN`，而 R102 是当前唯一可计算的原始-charge
工作定义。

## 对 fixed-q tower 的含义与边界

若 depth-`N` 顶底关系为 `g^(0)=P_(q^N)g^(N)`，则

`sum_(m odd, d<=m<3d) Lambda_m^2 q^(-Nm) a_m(g^(0))^2 <= 1`.

因此固定 `d` 的任意深塔要求其整个首 odd window 以相应 OU 次方衰减。这个结论
仍不能排除 `d=d_N` 随深度逃向无穷，也不能排除所有 odd window 系数同时塌缩；
所以它没有关闭 varying-bottom rigidity，也没有处理 symmetric even sector。

## 证据等级

- `PROVED UNDER GENUINE FULL-EXACT + FULL-SF HYPOTHESES`：linear-window 的
  combinatorial no-mixing、R173 cone budget 和 strict one-mode wall。
- `PROVED / LOCALLY AUDITED`：R101 的 genuine angular cone、OU intertwining 及
  R102 工作定义下的 coefficient conversion。
- `CONDITIONAL`：从 bare scalar `RK=1` 进入 genuine full-exact/full-SF 类。
- `OPEN`：R102 工作定义与早期 R4 原文的完全 provenance、空间 `P_3K_sp` 桥、
  moving `d_N` 的 uniform closure、非 Gaussian exact law 的排除以及原始 rigidity。

本轮只增加一个 positive backward-cone theorem，不新增 hash、baseline、contract
或发布门禁。
