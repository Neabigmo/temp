# R208：有限 Bochner/Gram 条件的反射奇偶 no-go

日期：2026-09-09  
基线：R207，提交 `0e512ff`

## 1. 反射不变性

对任意有限频率点集 `t_1,...,t_m`，单变量 law 的 Bochner Gram 为

`G_mu=(phi(t_a-t_b))_(a,b)`。

反射 law `check(mu)` 的特征函数为
`phi_check(t)=conj(phi(t))`，故

`G_check(mu)=conj(G_mu)`.

由于 `G_mu` 是 Hermitian，所有 principal minors、特征值和 PSD 条件都满足

`det G_check(mu)[I,I]=det G_mu[I,I]`,
`lambda_min(G_check(mu))=lambda_min(G_mu)`.

因此任何有限 Bochner/Gram 证书都对反射完全不变，不能区分 odd charge 的方向。

## 2. 奇 cumulant 扰动只能以偶次进入有限 Gram 证书

设 analytic cumulant family 在 Gaussian 点附近以首个 odd cumulant `epsilon` 参数化，
例如

`log phi_epsilon(t)=-t^2/2+epsilon (it)^d/d!+O(epsilon^2)`,
`d` odd。

反射对应 `epsilon -> -epsilon`（偶 cumulants保持、奇 cumulants变号）。由上节，
任一实值有限 Gram 主子式 `D_I(epsilon)` 满足

`D_I(epsilon)=D_I(-epsilon)`.

所以其 Taylor 展开没有奇次 `epsilon` 项；有限 Gram 的首个 odd-sensitive
信息至多是 `epsilon^2` 的幅度约束，而不是方向性符号约束。R108 的浅层四点
Schur 项正体现为 `m_3^2` 型 wall，而非 `m_3` 的符号。

## 3. 与反射 Laguerre 判据的关系

R207 需要的条件是 tilt 参数 `a` 下的
`ell_1(a)ell_1(-a)>=0`。它不是单纯的 law-reflection invariant Gram 条件：
它比较同一个 law 在两个 opposite common tilts 下的 conditional residual
regression。有限 Gram 反射奇偶性不能把这种 `a↦-a` 的 tilted information 从
原点的 Bochner PSD 自动制造出来。

更具体地，R193 已说明固定频率尺度、固定有限 Gram 阶数和非退化点配置在 Gaussian
附近有统一正谱隙；R196/R197 又说明 same-factor finite rows 可以把非零 cubic
信号补偿并推迟到更高阶。故“Gram 证书反射不变”与“有限检测阶逃逸”合在一起
给出以下严格边界：

> 有限 Gram 可以给 reflection-even 的大小约束（如 `kappa_3^2` wall），但
> 不能单独给出 R207 所需的 tilted reflection sign；若其负证书存在，检测阶、
> 频率尺度、点配置或负裕量必须沿 R193/R196 的通道逃逸。

这不是 genuine full-SF counterexample，也不是说所有 infinite Gram 信息都无效；
它只排除“固定有限 Gram 直接闭合 R207 符号”的证明策略。

## 4. 证据等级与下一步

证据等级为 `PROVED` 的反射 Gram 共轭不变性，加上 `PROVED UNDER LOCAL ANALYTIC
PERTURBATION` 的奇偶 Taylor 结论，结合 R193/R196 的已审计有限检测阶逃逸。
原始 Positive Backward-Tower Exact Zero-Set Rigidity 仍 `OPEN`，整体完整发表性仍
为“无”。

下一条唯一任务：研究无限频率/连续 tilt 的 Gram 或 bispectrum 能否产生真正的
`a↦-a` 反射符号；若不能，给出 all-scale sign information 也无法由有限 PSD
逼近得到的精确 compactness 缺口。

