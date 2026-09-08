# R180 — any asymmetric exact law must enter the infinite odd-tail escape class

日期：2026-09-09

## 结论先行

把 R137、R138 与 R150 的已成立模块放在同一量词下，可得到一个清晰的
single-law reduction。假设 `mu` 是 genuine、centered、variance-one、full-exact/
full-SF 的 law，具有 `exp(eta X^2)` 尾界和局部解析的 cumulant/MGF。若它是
asymmetric（存在 odd cumulant 不为零），则它不可能是 finite-odd-support 或
有限零点/全配对零点的温和分支；它必须同时满足：

1. odd cumulants 有无穷多个非零项；
2. MGF 存在有限半径的非配对零点，odd cumulant 尾满足 factorial-exponential
   limsup；
3. 固定首 odd 阶及其幅度后，高阶 odd cumulants 不能在一个由 Hankel 正性
   决定的有限窗口内全部过小（R150 robust replenishment）。

这不是排除定理，但把剩余的 genuine single-law 问题压缩成一个很窄的逃逸类：
若主命题失败，非高斯 law 必须以无限非对称零点尾和同步的高阶 odd replenishment
存在。OU 平滑只会把该逃逸尾整体推向更高尺度，正是 varying-bottom 接近 Gaussian
而不产生齐次 wall 矛盾的机制。

## 1. finite odd support 被排除

令

`K(t)=log E exp(tX)=t^2/2+C(t)`,

并写 `K_o(t)=(K(t)-K(-t))/2`。在 full-SF 的偶阶递推下，若 odd cumulants
只有有限个非零项，则 `K_o` 是 odd polynomial。exact residual law 给出的
square-exponential tail 与 Jensen/convexity 预算给出

`|K_o(t)| <= K_e(t) <= A+B t^2`.

一个次数至少三的非零 odd polynomial 不可能满足这个二次增长界；故
`K_o=0`，与 asymmetric 假设矛盾。该步骤采用 R137/R138 的 genuine
all-row、Carleman 和尾界假设，不是对 formal finite jet 的无条件升级。

## 2. 非配对零点必须存在

设 `M(z)=E exp(zX)`。在 `E exp(eta X^2)<infinity` 下，`M` 是有限阶 entire
函数。Hadamard factorization 在 odd 阶给出

`kappa_m=-(m-1)! sum_nu zeta_nu^(-m)`,  `m>=3`.

把每个零点与其相反点的重数相减，定义

`R_Delta=min{|zeta|: mult(zeta) != mult(-zeta)}`.

若没有非配对零点，则 odd cumulants 全部消失；中心化后的低阶 polynomial 因子
不能重新产生 odd 阶，law 对称。故 asymmetric law 必有 `R_Delta<infinity`，并且

`limsup_(m odd) (|kappa_m|/(m-1)!)^(1/m)=1/R_Delta > 0`.

最小非配对半径上的有限 reciprocal-power sum 是非零 finite exponential sum，
其 Cesaro mean square 严格为正；因此这里的 limsup 不是数值猜测，而是零点
因子分解的精确后果。

## 3. 高 odd replenishment 的有限窗口

设首个非零 odd normalized coefficient 为 `c_d=a`。R137 的固定 sparse branch
feasibility-radius collapse 给出：对每个 `0<a<R_d`，存在有限
`M_d(a)` 及 `eta_d(a)>0`，使 genuine full-SF law 若 `|c_d|=a`，则必有某个

`d<n<2M_d(a)`, `n` odd,

满足

`|c_n|>eta_d(a)`.

因此，假想 law 不能把首 odd packet 后面的所有 odd cumulants 同时压到任意小；
但该窗口和阈值目前没有在 `d->infinity, a->0` 的联合极限中得到统一估计。
这正是 moving-degree escape 的剩余形式，而不是“有限阶递推已经失败”。

## 4. OU 轨道如何实现 escape

对 `g_t=P_t h`，

`kappa_m(g_t)=t^(m/2)kappa_m(h)`,

且 MGF 零点按

`zeta -> zeta/sqrt(t)`

移动。所以 `t->0` 时，`g_t->1`，非配对零点被推向无穷远，odd tail 的每个
固定系数同步变小；但对每个 `t>0`，非零 cumulant/charge 并未恒等消失。正因
如此，R173/R176/R177 等 OU-homogeneous walls 只能给尺度同步的底层约束，不能
单独切断这一 escape 类（R179）。

## 5. 当前真正的单律缺口

R180 把“排除任意 genuine asymmetric exact law”压缩成以下二选一：

* 证明 full-SF 的非配对零点尾与高 odd replenishment 在正密度/全阶 Hankel
  cone 下不可能同时存在；或
* 构造一个满足 full-SF、正性、all-row 和尾界的 law，作为 genuine obstruction。

仅有齐次 backward wall、有限 Bochner/Jacobi 截面、或 moving-bottom 的 Gaussian
极限都不足以完成二者之一。下一优先接口是“非配对零点尾 → 正密度尾部符号/全阶
Hankel 矛盾”的定量桥，而非再提高 wall 阶数。

## 6. 证据等级与发表性

- `PROVED UNDER STATED GENUINE HYPOTHESES`：finite odd support 排除、非配对
  零点 limsup、OU 零点/累积量缩放，以及 R150 的固定-degree replenishment
  结论。
- `SYNTHESIS / CONDITIONAL`：把三条结果合并为上述逃逸二分；其适用范围仍受
  full-SF、尾界和 formal-to-genuine 接口限制。
- `OPEN`：排除无限 odd/non-paired-zero escape、bare `RK=1=>all-row`、原始
  `P_3K` identification，以及最终 Positive Backward-Tower Rigidity。

整体是否已有独立、完整、可审稿的原始命题结果：**无**。但 R180 给出了一个
可写入论文的结构性 reduction，明确了剩余反例若存在必须长什么样。

审计命令：

`node r180_infinite_odd_tail_escape_dichotomy/audit_r180.js`

预期 marker：`R180_INFINITE_ODD_TAIL_ESCAPE_DICHOTOMY_PASSED`
