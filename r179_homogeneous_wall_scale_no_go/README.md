# R179 — OU-homogeneous backward walls cannot close the varying-bottom problem

日期：2026-09-09

## 结论先行

本轮把 R166 的尺度观察提升为一个可复用的 no-go lemma。设 `E` 是 genuine
full-exact 类，闭于前向 OU 半群 `P_t`，并设 Hermite/角向系数具有标准 OU 权重。
若某个 `h in E` 非高斯且 charge 不恒等为零，则

`g_N^(j)=P_(q^(N-j))h`, `0<=j<=N`,

自动给出任意深的 varying-bottom 塔。所有仅由 OU 齐次系数预算构成的 backward
wall，在这条塔上都恰好约化为 `N` 无关的底层约束；因此它们不能仅凭
`g_N^(0)->1` 排除该塔。

这不是原始命题的反例，也不是说正性无用；它精确说明：下一步必须处理单个
genuine exact law 的排除，或使用不被 OU 同次缩放消掉的非齐次/尾部信息。

## 1. 齐次缩放 lemma

令 `a_m(f)=<f,psi_m>`，令 `beta_(m,r)` 为 R101 角向 Herglotz 系数。对
`0<t<=1`，OU intertwining 给出

`a_m(P_t h)=t^(m/2)a_m(h)`,

`beta_(m,r)(P_t mu)=t^(m/2)beta_(m,r)(mu)`.

若 `Gamma_alpha` 是由这些系数组成的齐次多项式，且每个 monomial 的总
Hermite grade 为 `M_alpha`，则

`Gamma_alpha(P_t h)=t^(M_alpha/2)Gamma_alpha(h)`.

因此任何形如

`sum_alpha t^(-M_alpha)|Gamma_alpha(g)|^2 <= 1`

的 backward cone，在 `g=P_t h` 上严格变成

`sum_alpha |Gamma_alpha(h)|^2 <= 1`.

这里没有使用渐近或浮点近似；这是 OU 本征关系的逐项代入。

## 2. 对现有 wall 的直接后果

### R173 linear window

`sum_m Lambda_m^2 t^(-m)a_m(P_t h)^2 <= 1`

恒等于

`sum_m Lambda_m^2 a_m(h)^2 <= 1`.

### R176/R177 all-odd cross wall

R176 的全阶正性与 R177 的定量 wall 为

`C_d a_d(g)^2 <= t^d`.

取 `g=P_t h` 后左右两边都带同一个 `t^d`，于是只剩

`C_d a_d(h)^2 <= 1`.

即使 `C_d>0` 对所有 odd `d` 成立，`t->0` 只会让 bottom 系数和 wall 的右端
同步衰减，并不产生矛盾。R178 的
`C_d^(-1)=O(d^(3/4)3^(d/2))` 只会进一步量化 moving-degree 系数必须多小，
仍不是非退化下界。

### R102 log-MGF charge

若 `p_m(h)` 是 `P_3K_MGF(h;z)` 的 `z^m` 系数，则

`p_m(P_t h)=t^(m/2)p_m(h)`.

所以 `P_3K_MGF(P_t h;z)` 对每个 `t>0` 仍是非零解析 germ，但它的每个固定
系数随 `t` 衰减；“趋于零”与“恒等为零”不能互换。

## 3. 塔级 no-go theorem

**命题（在 genuine full-exact、前向 OU 闭包及相应 charge 协变假设下）。**

若存在 `h in E` 使目标 charge 不恒等为零，则对每个固定 `q in (0,1)`，上式
`g_N^(j)=P_(q^(N-j))h` 满足

`g_N^(j)=P_q g_N^(j+1)`,

并且 `g_N^(0)->1`；同时所有 OU-homogeneous backward walls 在这族塔上都只给
`N` 无关的约束。

**证明。** 半群律给出 tower identity。Hermite Parseval（`a_1=a_2=0`）给出

`||P_(q^N)h-1||_2^2
 = sum_(m>=3) q^(Nm)|a_m(h)|^2
 <= q^(3N)||h-1||_2^2`,

故 bottom 趋近 Gaussian。若 charge 是 R102 对象，则其非零解析系数只被
`q^(Nm/2)` 乘上，有限 `N` 时不会全部消失；空间 charge 的对应 persistence
则保留 R168/R171 的额外假设。最后把上一节的齐次缩放逐项代入任意 wall，
即得 `N` 无关约束。证毕。

## 4. 研究决策

这条命题排除了一个看似自然但逻辑上无效的终点：继续提高 R173/R176 的阶数、
改善 `C_d` 的渐近，不能单独关闭原始 varying-bottom rigidity。当前最小有效
接口应改为下列三者之一：

1. 从 bare `RK=1` 推出 genuine full-exact/all-row；
2. 在 genuine exact 单律层面证明 full-SF formal branch 无法成为正的 genuine
   density（tail/sign 或 formal-to-genuine bridge）；
3. 先完成原始 `P_3K` 与 R102/spatial charge 的对象溯源，再证明单律 charge
   exclusion。

优先级上，R179 支持回到“单个 asymmetric genuine exact law 的排除”，而不是
再寻找未经归一化的 uniform primitive-charge lower bound。

## 5. 证据等级

- `PROVED UNDER STATED GENUINE HYPOTHESES`：齐次缩放 lemma、R173/R176/R177
  在 OU 轨道上的精确约化、以及 varying-bottom 塔的 no-go。
- `EXACT-AUDITED`：`audit_r179.js` 用有理数核验各类缩放恒等式与塔的指数
  bookkeeping。
- `OPEN`：genuine asymmetric exact law 的存在/排除、bare `RK=1` 接口、原始
  `P_3K` identification，以及由非齐次尾部信息完成最终 rigidity。

R179 是一条真实的研究方向筛选定理，但不声称解决原始命题；整体独立完整发表性
判断仍为：**无**。

审计命令：

`node r179_homogeneous_wall_scale_no_go/audit_r179.js`

预期 marker：`R179_HOMOGENEOUS_WALL_SCALE_NO_GO_PASSED`
