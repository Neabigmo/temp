# R197 — finite-row nonzero-cubic realization by an analytic implicit-function argument

日期：2026-09-09

## 定理

对每个固定 `M>=2`，存在 `epsilon_M>0`，使任意
`|c|<epsilon_M` 都有一个 genuine positive `C^infinity` density `p_(M,c)`，
满足

`E X=0,  E X^2=1,  kappa_3(X)=c`,

`E_(p_(M,c)^3) Q^r=2^r r!`,  `1<=r<=M`,

其中 `Q=sum_j(X_j-X_bar)^2`、`X_1,X_2,X_3` iid `p_(M,c)`。还可以要求
`p_(M,c)` 严格对数凹，且 `p_(M,0)=gamma`。

所以每一个固定 finite-row hierarchy 都允许非零 cubic skew；这给出

`Gamma_M>0`  对所有有限 `M`，

并且该结论在 genuine positive same-factor 类内成立。它不是 all-row exact
counterexample，也不能推出原始 Positive Backward-Tower Exact Zero-Set
Rigidity 失败。

## 1. 为什么只需调节偶 cumulants

固定均值零、方差一后，`R_1=E Q-2=0` 自动成立。把

`F_s=E Q^s-2^s s!`,  `2<=s<=M`

看作 cumulants `kappa_3,kappa_4,...,kappa_(2M)` 的局部解析函数。`Q^s`
是总次数 `2s` 的多项式，所以 `F_s` 不依赖于任何 cumulant `kappa_(2r)`
且 `r>s`。而 `kappa_(2s)` 在 `F_s` 中的导数只来自三个纯项

`((2/3)X_i^2)^s`,

因为

`Q=(2/3)sum_i X_i^2-(2/3)sum_(i<j)X_iX_j`.

保持低阶 cumulants 不变时，`partial E X_i^(2s)/partial kappa_(2s)=1`，
故 Gaussian 点的精确对角导数为

`partial F_s / partial kappa_(2s)
 =3(2/3)^s !=0.`

因此 Jacobian

`D_(kappa_4,...,kappa_(2M))(F_2,...,F_M)|_gamma`

是下三角矩阵，对角线为

`3(2/3)^2, 3(2/3)^3, ..., 3(2/3)^M`,

从而可逆。

在 Gaussian 反射下，`F_s` 对所有 odd cumulants 同时变号、对 even cumulants
不变。先用 IFT 让偶 cumulants 成为全部 odd cumulants 的解析偶函数，再固定
`kappa_3=c` 并令 `kappa_5=...=kappa_(2M-1)=0`，则隐函数解满足

`kappa_(2s)(c)=kappa_(2s)(-c)=O(c^2)`.

于是 odd cubic 方向的二阶 radial 补偿由偶 cumulants吸收，而不是由虚假的
“radial 一阶 sign”产生。

## 2. 将 cumulant 坐标实现为 genuine 正密度

取有限个有界 `C^infinity`、紧支撑函数 `psi_3,...,psi_(2M)`，使它们在
Gaussian 下对 Hermite 坐标 `H_3,...,H_(2M)` 的协方差矩阵可逆；这种选择
由这些有限个多项式在 `L^2(gamma)` 中线性无关以及 `C_c^infinity` 在
`L^2(gamma)` 中稠密得到。考虑

`p_theta(x)=Z(theta)^(-1) gamma(x)
 exp(sum_(k=3)^(2M) theta_k psi_k(x))`.

在 `theta=0` 附近，这是真正的正密度，所有矩和 cumulants 解析依赖于
`theta`。必要时作唯一的 affine standardization，使均值恰为零、方差恰为一；
由于选择的 tangent 已与 `H_1,H_2` 解耦，cumulant 坐标 Jacobian 仍可逆。

因此 `theta -> (kappa_3,...,kappa_(2M))` 在 Gaussian 点是局部微分同胚。
先在 cumulant 坐标中用上节的 implicit-function theorem 解

`F_2=...=F_M=0`, `kappa_3=c`,

再拉回 `theta`，便得到所述 `p_(M,c)`。函数 `psi_k''` 有界，故取参数足够
小可保证

`(log p_(M,c))''=-1+sum_k theta_k psi_k'' <0`,

从而严格对数凹性也保留。

## 3. 与 R195/R196 和原始主线的关系

R195/R196 用 moment camouflage 说明有限 rows 看不见某些非 Gaussian 扰动；
R197 更进一步保持 `kappa_3=c!=0`，所以直接触及 cubic radius。它与 R121
此前的 finite-row exponential-family obstruction 一致，但本轮把所有固定
`R_2,...,R_M` 的可逆 Jacobian 与精确对角常数写清楚。

该定理严格排除任何“某个固定 finite row 直接推出 cubic=0”的方案；但它不
控制 `r>M` 的 exact rows，不能给出 full-exact law。结合 R125 的 compactness
逻辑，原始 cubic exclusion 若成立，必须表现为 `M->infinity` 的统一退化，
而不是固定层证书。

证据等级：

* `PROVED / ANALYTICALLY PROVED`：有限-row cumulant Jacobian 的三角结构、
  对角元 `3(2/3)^s`、隐函数定理的 finite-row 结论；
* `Genuine positive`：指数族、标准化和严格对数凹性的实现；
* `NOT FULL-EXACT`：高阶 rows 未控制；
* `OPEN`：`Gamma_M->0`、all-row product rigidity、primitive closure、原始
  `P_3K` bridge；
* `发表性判断`：R197 是可独立引用的 finite-row cubic-radius lemma，但不能
  单独构成原始问题的完整发表结果，整体仍为“无”。

## 下一最小任务

只研究隐函数补偿的渐近量：计算 `kappa_(2s)(c)=alpha_s c^2+O(c^4)` 的首项，
并判断 `alpha_s` 随 `s` 的增长是否能与 R150 odd replenishment 或 R125
`Gamma_M` 的极限压缩发生定量冲突；若不能，给出明确的 moving-`M` escape 解释。
