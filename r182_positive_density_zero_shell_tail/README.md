# R182 — positive-density lower bound from the first non-paired zero shell

日期：2026-09-09

## 结论先行

在 genuine square-exponential law 的 Hadamard 条件下，R139 的第一非配对零点壳
结论可以从“存在无穷子序列”加强为“存在正下密度子序列”。设 `R=R_Delta`，
第一壳代表为 `zeta_1,...,zeta_J`，重数差为 `delta_j`，并令

`S_2=sum_j |delta_j|^2`, `B=sum_j |delta_j|`。

对 odd 阶 `m=2k+1`，去掉公共尺度 `R^(-m)` 后第一壳是有限指数和

`A_k=sum_j b_j lambda_j^k`,  `|b_j|=|delta_j|`,  `lambda_j distinct`,
`|lambda_j|=1`.

Cesàro 正交性给出

`lim_(K->infinity) K^(-1) sum_(k<K)|A_k|^2=S_2`.

由于 `|A_k|<=B`，至少有下密度

`p_0=(S_2/2)/(B^2-S_2/2)>0`

的 `k` 满足 `|A_k|>=sqrt(S_2/2)`。第一壳外的零点有严格半径间隙；其贡献相对
`R^(-m)` 指数衰减。因此存在 `K_0`，使正下密度子序列满足

`|kappa_(2k+1)|/(2k)! >= (sqrt(S_2/2)/2) R^(-(2k+1))`.

等价地，ordinary cumulant series coefficient
`c_(2k+1)=kappa_(2k+1)/(2k+1)!` 满足

`|c_(2k+1)| >= (sqrt(S_2/2)/2) R^(-(2k+1))/(2k+1)`.

这比 R138/R139 的 limsup 结论更强：高 odd tail 不能只靠一个极稀疏子序列
承担；但它仍不是正密度 law 的矛盾，因为 `R` 与第一壳常数可以随假想 law
变化，且 R150 的 `eta_d(a)` 窗口没有联合 uniform 下界。

## 1. 证明

按 `zeta -> -zeta` 合并零点重数。odd cumulant 的 genus-two 公式为

`kappa_m/(m-1)! = -sum_j delta_j zeta_j^(-m)`.

第一壳 `|zeta_j|=R` 的贡献可写为 `R^(-m)A_k`，其中不同代表给出不同的
`lambda_j=exp(-2 i arg(zeta_j))`；重合代表已经在同一 `delta_j` 中合并。
有限单位圆指数和的 Cesàro 平均平方等于系数平方和 `S_2`。令
`E={k:|A_k|^2>=S_2/2}`。由 `|A_k|^2<=B^2`，

`S_2 <= density(E) B^2 + (1-density(E))S_2/2`,

故 `density(E)>=p_0`。由于零点除子在有限圆盘内有限，第一壳外存在
`R_1>R`；genus-two 可和性使外壳归一化误差趋于零。取 `K_0` 后外壳不超过
`sqrt(S_2/2)/2`，在 `E` 上三角不等式即得显示下界。

## 2. 与 R181/R150 的精确关系

R181 的 Cauchy estimate 给的是在任意 odd-analytic 圆盘内的上界；R182 给的是
由第一非配对壳产生的 subsequential lower bound。二者若要推出矛盾，至少还需要
下列一种 uniform 输入：

`R`、`S_2` 和 `B` 在 hypothetical exact class 中的共同控制，且该控制能与
`eta_d(a)`、`M_d(a)` 比较；或一个直接把 first-shell mass 传到正性/Hankel
能量的 coercive inequality。

现有 R139 的 real-axis angular `H^1` 只是 upper energy；同一 `Q_r` 内不同
degrees 的 cancellation 仍允许在有限实点把能量压到零。故 R182 关闭的是
“tail 只在极稀疏阶次出现”的逃逸设想，不关闭完整的 infinite-tail escape。

## 3. OU 轨道解释

对 `g_t=P_t h`，零点壳变为 `R/sqrt(t)`，odd cumulants 乘 `t^(m/2)`，所以
R182 的指数尺度和第一壳常数在归一化后保持不变；底部趋近 Gaussian 只是把整个
壳推远，而不是消灭它。这再次解释了 R179 的齐次 wall no-go。

## 4. 证据等级与发表性

- `PROVED UNDER HADAMARD SQUARE-EXPONENTIAL HYPOTHESES`：第一非配对壳的正
  下密度 odd-cumulant lower bound。
- `EXACT-AUDITED`：`audit_r182.js` 核验单位圆指数和的周期模型、密度估计、
  外壳几何衰减和 OU 尺度换元。
- `OPEN`：第一壳参数的 uniform 控制、shell-to-positive-energy coercivity、
  genuine asymmetric law 的排除、bare `RK=1` 接口和原始 `P_3K` 溯源。

网页端 R182 未形成理论正文；本机不把网页状态当数学回执。整体原始命题仍无
独立完整发表结果，但 R182 是可写入论文的零点尾定量 lemma 候选。

审计命令：

`node r182_positive_density_zero_shell_tail/audit_r182.js`

预期 marker：`R182_POSITIVE_DENSITY_ZERO_SHELL_TAIL_PASSED`
