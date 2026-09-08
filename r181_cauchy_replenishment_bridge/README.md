# R181 — Cauchy control of the odd tail versus Hankel replenishment

日期：2026-09-09

## 结论先行

本轮把 R138 的非配对零点半径与 R150 的 robust high-odd replenishment 接成一条
精确但仍条件性的桥。令

`C_o(z)=(C(z)-C(-z))/2=sum_(n odd>=3) c_n z^n`

为 normalized Bargmann/MGF logarithm 的 odd part。在 Hadamard zero-divisor
假设下，成对零点在 `C_o` 中抵消；若 `R_Delta` 是最小非配对零点半径，则
`C_o` 在 `|z|<R_Delta` 内解析。对任意 `1<=rho<R_Delta`，令

`M_o(rho)=max_(|z|=rho)|C_o(z)|`。

Cauchy 估计给出

`|c_n|<=M_o(rho)rho^(-n)`  （n odd）。

R150 对首 odd 阶 `d`、幅度 `a=|c_d|` 的 robust replenishment 则要求某个
`d<n<2M_d(a)` 的 odd 阶满足 `|c_n|>eta_d(a)`。两者合并为

`eta_d(a) < M_o(rho) max_(d<n<2M_d(a), n odd) rho^(-n)`.

特别当 `rho>=1` 时，因最小候选阶为 `d+2`，有

`eta_d(a) <= M_o(rho)rho^(-(d+2))`.       (R181-C)

这是第一个把“高 odd replenishment”与“非配对零点解析尺度”写在同一不等式中的
接口。它尚未成为矛盾，因为 `M_o(rho)`、`M_d(a)`、`eta_d(a)` 还没有在
`d->infinity, a->0` 下得到共同 uniform 控制。

## 1. 证明链

在 `|z|<R_Delta` 内，Hadamard factorization 的 paired reciprocal powers 在
`C(z)-C(-z)` 中逐项相消，剩余 non-paired divisor 产生 `C_o`。固定
`rho<R_Delta` 后，Cauchy coefficient estimate 给出

`|c_n| <= M_o(rho)/rho^n`.

另一方面，R150 的 fixed-degree robust Hankel theorem 是一个 genuine necessary
condition：若 `|c_d|=a`，则 finite full-SF Hankel positivity 迫使某个 odd
`n in (d,2M_d(a))` 有 `|c_n|>eta_d(a)`。对这个 n 代入 Cauchy bound，再取候选
窗口中的最大值，即得 (R181-C)。这里没有把 formal sparse branch 当作 genuine
law，也没有把有限窗口结论升级为 moving-degree uniform theorem。

## 2. OU 缩放审计：为何它仍不能关闭塔

若 `g_t=P_t h`，则

`C_(o,t)(z)=C_o(sqrt(t)z)`,

所以

`R_Delta(g_t)=R_Delta(h)/sqrt(t)`,
`M_(o,t)(rho)=M_o(sqrt(t)rho)`.

在 tower bottom 取 `t=q^N`，并把 Cauchy 圆半径同步取为
`rho_t=rho/sqrt(t)`，则 (R181-C) 恢复为同一个底层约束；它不会随 `N` 产生
新的 gap。这与 R179 的一般 OU-homogeneous no-go 完全一致。

因此若要从 (R181-C) 得到 contradiction，必须证明某种不随 hypothetical law
和 `d,a` 恶化的比较，例如：

`M_o(rho) = o(eta_d(a) rho^(d+2))`

在相关联合极限成立，或直接给出 `eta_d(a)` 的统一下界和 `C_o` 的统一上界。
现有 R132 尾界只给出每个 law 的解析/增长控制，尚未给出这两个量之间的
uniform comparison。

## 3. 全局研究含义

R181 将剩余 single-law exclusion 的一个最小定量目标具体化：

`non-paired-zero radius + positive full-SF Hankel replenishment`
`=>?` `uniform odd-tail contradiction`.

若该桥不能闭合，仍可把 (R181-C) 作为论文中的 conditional proposition；它准确
解释 R138 的零点尾和 R150 的 Hankel 尾为什么目前都只能分别给出 obstruction。
它不涉及空间 `ell_3`、R101 angular charge 或原始 `P_3K` 的 identification，
这些对象继续保持分离。

## 4. 证据等级

- `PROVED UNDER HADAMARD + R150 HYPOTHESES`：Cauchy–replenishment 不等式、
  paired-zero cancellation 的解析推论及 OU 缩放。
- `EXACT-AUDITED`：`audit_r181.js` 用有理数验证系数 Cauchy 界的缩放和窗口
  指数关系。
- `OPEN`：`M_o` 与 `eta_d` 的联合 uniform 比较、moving-degree exclusion、
  genuine asymmetric law 的排除、bare `RK=1` 接口和原始 `P_3K` 溯源。

网页端 R181 发送调用未形成理论正文；本机不把该状态当作数学回执。整体原始
命题的独立完整发表性判断仍为：**无**。

审计命令：

`node r181_cauchy_replenishment_bridge/audit_r181.js`

预期 marker：`R181_CAUCHY_REPLENISHMENT_BRIDGE_PASSED`
