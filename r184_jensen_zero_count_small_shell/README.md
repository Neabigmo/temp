# R184 — Jensen zero count and the small-shell regime

日期：2026-09-09

## 结论先行

R112 的 genuine full-exact uniform envelope 可以补上 R183 暴露的一个缺口，
但只在首个非配对零点壳半径不大的区间内补上：若
`R_Delta<=1`，则首壳的代表数 `J` 至多为 `9`，从而

`B^2/S_2<=J<=9`,  `p_0>=1/17`.

若零点重数差 `delta_j` 是整数且壳非空，则 `S_2=sum|delta_j|^2>=1`，所以
R182 的正下密度 odd-cumulant 下界的归一化幅度至少为 `1/sqrt(2)`（在
严格外壳间隙之后的渐近阶次上）。这是真正的 uniform small-shell
improvement，但它仍不控制 R150 的 `eta_d(a)`、首壳外壳隙的统一起点，
也不能覆盖 `R_Delta>1`。

## 1. 从 R112 envelope 到 Jensen 计数

R112 在 genuine full-exact angular realization 下给出

`E exp(X^2/8)<=2`.

对 normalized Bargmann MGF

`B_mu(z)=E exp(zX-z^2/2)`, `z=x+iy`,

Young 不等式 `xX<=X^2/8+2x^2` 给出

`|B_mu(x+iy)|
 <= exp(-(x^2-y^2)/2) E exp(xX)
 <= 2 exp(3x^2/2+y^2/2)
 <= 2 exp(3|z|^2/2)`.

又 `B_mu(0)=1`。若 `n_mu(r)` 是 `|z|<=r` 内零点的总重数，Jensen 在
外半径 `R>r` 给出

`n_mu(r) log(R/r) <= log M_mu(R)`,

其中 `M_mu(R)=max_|z|=R |B_mu(z)|`。取 `r=1,R=2`，得到

`n_mu(1) <= (log 2+6)/log 2 < 10`,

因而整数重数满足 `n_mu(1)<=9`。

## 2. 首壳参数的统一控制

若 `R_Delta<=1`，可以直接在 `r=R_Delta,R=2R_Delta` 使用同一估计；也可以
沿合法 forward OU 轨道取 `t=R_Delta^2<=1`，把壳半径变为
`R_Delta/sqrt(t)=1`。R112 的 genuine class 对该层仍适用，且

`c_m(P_t h)=t^(m/2)c_m(h)`,
`R_Delta(P_t h)=R_Delta(h)/sqrt(t)`.

设 `m(zeta)` 是 `B_mu` 的零点重数，并按 `zeta` 与 `-zeta` 配对。对首壳的
非配对代表，`delta_j=m(zeta_j)-m(-zeta_j)`。每个非零 `delta_j` 至少需要
一个实际零点，故 `J<=n_mu(1)<=9`；并且 Cauchy--Schwarz 给出

`B^2=(sum_j|delta_j|)^2<=J sum_j|delta_j|^2=J S_2`.

于是

`B^2/S_2<=9`,
`p_0=(S_2/2)/(B^2-S_2/2)>=1/17`.

若 `delta_j` 为整数且首壳确实非配对，则 `S_2>=1`。R182 的下界于是可在
正下密度至少 `1/17` 的阶次子序列上写成归一化形式；首壳主项幅度至少为
`1/sqrt(2)`，扣除外壳误差后显示的最终常数为 `1/(2sqrt(2))`

`|kappa_(2k+1)|/(2k)! >= (1/(2sqrt(2))) R_Delta^(-(2k+1))`,

取足够大的 `k` 使第一壳外误差小于半个首壳幅度。这里的“足够大”仍可能
依赖具体 law，不能误写成 uniform onset。

## 3. 大壳区间的最强尺度依赖结论

若 `R_Delta>1`，不能取 `t=R_Delta^2`，因为这会超出 forward OU 的 `t<=1`。
直接取 Jensen 的 `r=R_Delta,R=2R_Delta`，R112 envelope 给出

`n_mu(R_Delta)<=1+(6/log 2)R_Delta^2`.

故

`J<=1+(6/log 2)R_Delta^2`,
`B^2/S_2<=1+(6/log 2)R_Delta^2`,

以及尺度依赖的密度下界

`p_0>=1/(1+(12/log 2)R_Delta^2)`.

当 `R_Delta` 趋于无穷时这个下界退化到零；R112 的 uniform envelope 本身
不能阻止大壳首层拥有越来越多的零点模态。因此当前唯一的 analytic escape
已缩小为 `R_Delta>1` 的大壳区间，或小壳区间内的 uniform shell-gap/onset
问题。

## 4. 不能过度解读：仍未得到 Hankel 矛盾

R184 控制了 R183 中的 `B^2/S_2`，但 R182 只给出正下密度的 cumulant 尾，
而 R150 要求的是由首 odd degree `d` 和幅度 `a` 决定的有限窗口内某个
Hermite/Bargmann odd coefficient 超过 `eta_d(a)`。目前没有已证的映射把
`1/17` 的壳密度、`S_2>=1` 和这些阶次窗口对齐；特别是窗口起点、首 odd
阶 `d` 以及首壳外误差起点都可能随 law 改变。

所以可写出的最强命题是：

> 在 R112 的 genuine full-exact envelope、Hadamard square-exponential 零点
> 表示、首壳 `R_Delta<=1` 且非配对重数差为整数的条件下，首壳模态数至多
> `9`，R182 的 odd-cumulant 下界拥有统一正下密度至少 `1/17` 和统一首壳
> 幅度常数；这仍不蕴含原始 exact-zero rigidity。

证据等级为 `CONDITIONAL PROPOSITION`，不是原始命题的 theorem。

## 5. 证据与下一步

- `PROVED UNDER R112 + HADAMARD HYPOTHESES`：复 MGF 包络、Jensen 计数、
  小壳 `J<=9`、`B^2/S_2<=9` 和大壳尺度依赖上界。
- `EXACT-AUDITED`：常数、OU 幂次不变量和整数重数的离散不等式。
- `OPEN`：R112 从原始 bare `RK=1` 的识别、`R_Delta>1` 的排除、uniform
  shell-gap/onset、shell-to-Hankel 映射、原始 `P_3K` 溯源。

下一轮唯一最小任务应是：在 `R_Delta<=1` 的 uniform small-shell regime 中，
尝试把 `p_0>=1/17` 与 R150 的有限 replenishment window 对齐；若仍不能，
构造具有 `J<=9` 但任意长初始 cancellation 的精确单位圆模型，确定剩余缺口
是否只是 onset/degree alignment。

审计命令：

`node r184_jensen_zero_count_small_shell/audit_r184.js`

预期 marker：`R184_JENSEN_ZERO_COUNT_SMALL_SHELL_PASSED`
