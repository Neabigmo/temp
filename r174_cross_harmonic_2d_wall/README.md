# R174 — `2d` 阶 cross-harmonic backward wall

日期：2026-09-09

## 目标

R173 给出了首个 odd sector `d<=m<3d` 的 `r=1` cone window。本轮把同一个
genuine positive angular cone 与 full-SF identity 在第一个 nonlinear threshold
`2d` 处接起来，得到一个包含 `a_(2d)` 和 `a_d^2` 的精确横向约束。

## 1. `r=2` 的精确首项

令

`r_j(theta)=6^(-1/2)(exp(i(theta+2*pi*j/3))+exp(-i(theta+2*pi*j/3)))`,
`p_n(theta)=sum_j r_j(theta)^n`，并记 `c_(n,r)` 为 `p_n` 的 `exp(3*i*r*theta)`
系数：

`c_(n,r)=3*6^(-n/2)*binom(n,(n-3r)/2)`,

当 `(n-3r)/2` 不是 `0,...,n` 中的整数时约定为零。

设 genuine centered/variance-one full-exact law 的首个非零 odd Hermite 阶为 `d`，
且 full-SF 已消去 `a_4,...,a_(2d-2)`。在总阶 `2d`、angular charge `r=2`
中，支持分析只允许两类 monomial：线性项 `(2d,0,0)`，以及三项排列的
`(d,d,0)`。因此

`beta_(2d,2)=L_d a_(2d)+Q_d a_d^2`,                 (R174-A)

其中

`L_d=c_(2d,2)`,

`Q_d=sqrt((2d)!)/d! * D_d`,
`D_d=(H_d-L_d)/2`,
`H_d=sum_(r odd)c_(d,r)c_(d,2-r)`。

这里所有和都是有限和。`D_d` 来自
`sum_(i<j)r_i^d r_j^d=(p_d^2-p_(2d))/2`，所以 (R174-A) 是 Hermite addition
formula 的精确系数，不是形式替代。

若 `g=P_t h` 且两者都是真实 genuine full-exact law，则 R101 的 `r=2` cone、
OU intertwining 和 `|chi_2|<=1` 给出

`|L_d a_(2d)(g)+Q_d a_d(g)^2| <= t^d`.        (R174-B)

这已经是一个不依赖低阶 skewness 的高阶 positive backward wall。

## 2. full-SF 在 `2d` 阶的闭合

令

`A_d=c_(2d,0)`,
`B_d=sum_(r odd)c_(d,r)c_(d,-r)`。

full-SF 的 `z^(2d)` 系数比较给出

`kappa_(2d)/(2d)! * A_d + kappa_d^2/(2(d!)^2) * B_d=0`.

由于 `a_d=kappa_d/sqrt(d!)`，而
`a_(2d)=kappa_(2d)/sqrt((2d)!)+sqrt((2d)!)*kappa_d^2/(2(d!)^2)`，可化为

`a_(2d)=sqrt((2d)!)/(2*d!)*(1-B_d/A_d)*a_d^2`.       (R174-C)

把 (R174-C) 代回 (R174-A)，定义

`C_d=sqrt((2d)!)/(2*d!)*(H_d-L_d*B_d/A_d)`，

得到单变量 wall

`|C_d| a_d(g)^2 <= t^d`.                         (R174-D)

只要另外证明 `C_d != 0`，这就给出
`|a_d(g)| <= t^(d/2)/sqrt(|C_d|)`。本轮不把所有 `d` 的 `C_d>0` 当作已证；
精确有限和和 `d=3,5,7` 的正性已核验。

前几个常数为

`C_3=3*sqrt(5)/80`,
`C_5=25*sqrt(7)/448`,
`C_7=245*sqrt(858)/41472`.

## 3. 证据边界与意义

- `PROVED UNDER GENUINE FULL-EXACT + FULL-SF`：支持分类、(R174-A)、(R174-B)
  以及 full-SF 推出的 (R174-C)/(R174-D)（在 `C_d` 的精确定义下）。
- `LOCALLY EXACT-AUDITED`：`d=3,5,7` 的全部系数、`C_d>0` 及旧 R99–R102
  回归公式。
- `OPEN`：所有 odd `d` 的 `C_d>0` 是否存在统一证明；这条 wall 能否和
  `P_3K_MGF` 的首个系数形成 uniform contradiction；`d_N` 随深度逃逸；
  bare `RK=1=>full-exact`；以及非 Gaussian genuine exact law 的排除。

R174 的价值不是声称已关闭原始 rigidity，而是把 R173 的 `r=1` 线性窗口与
`r=2` 的第一 nonlinear cross-harmonic 接口接起来。它提供了一个可继续 sharpen
的、直接由 positive backward cone 检验的 high-Hermite relation。
