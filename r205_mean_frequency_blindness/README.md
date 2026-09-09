# R205：径向 same-factor 恒等式的均值频率盲区

日期：2026-09-09  
基线：R204，提交 `41ffdad`

## 结论

在 three-iid product law 中，R188 使用的 exact same-factor 恒等式只控制
公共均值频率 `s=0` 的联合特征函数。它等价于 residual radius
`T=Q/2` 的边缘分布为 `Exp(1)`，不能单独控制
`m_ell(t)=E[psi_ell(U)|T=t]`（`ell>=1`），因而不能单独推出 `(MT_r)`。

这不是 arbitrary-copula 反例，而是对 exact identity 信息内容的严格 no-go：若要
控制 mixed sectors，必须增加 `s`-dependent product identity，或利用尚未闭合的
same-factor positivity coupling。

## 1. 精确坐标公式

令

`e_0=(1,1,1)/sqrt(3)`, `U=e_0 dot X`, `R=(I-e_0 e_0^T)X`,
`Q=|R|^2`, `T=Q/2`。

取 residual plane 上的单位向量

`a_1(theta)=sqrt(2/3) cos(theta)`,
`a_2(theta)=sqrt(2/3) cos(theta+2pi/3)`,
`a_3(theta)=sqrt(2/3) cos(theta-2pi/3)`。

则 `sum_j a_j=0`、`sum_j a_j^2=1`，并且
`v(theta)=(a_1,a_2,a_3)` 是 residual plane 的单位向量。若 `phi` 是单变量
law 的特征函数，定义带公共均值频率的 product transform

`A(s,y)=(1/(2pi)) int_0^(2pi) prod_j phi(s/sqrt(3)+a_j(theta)y) dtheta`。

由 `v(theta) dot X=v(theta) dot R` 和 Bessel 的角平均公式，严格有

`A(s,y)=E[ exp(i s U) J_0(y |R|) ]
       =E[ exp(i s U) J_0(y sqrt(2T)) ].`                                      (1)

R188/R106 使用的 same-factor exact identity 是

`A(0,y)=E[J_0(y sqrt(2T))]=exp(-y^2/2).`                                  (2)

## 2. (2) 只等价于径向边缘

若 `T~Exp(1)`，Laplace--Bessel 展开给出

`E[J_0(y sqrt(2T))]
 =sum_{k>=0} (-1)^k (y^2/4)^k E[(2T)^k]/(k!)^2
 =sum_{k>=0} (-y^2/2)^k/k!
 =exp(-y^2/2),`

因为 `E[T^k]=k!`。反向地，非负变量的零阶 Hankel/Bessel transform 是单射，
所以 (2) 对所有 `y` 恰好恢复 `T~Exp(1)`。因此 (2) 没有额外的 `U|T` 信息。

## 3. 为什么 mixed coefficients 不受该恒等式控制

对 `s` 求导，(1) 给出

`partial_s^ell A(s,y)|_(s=0)
 =i^ell E[U^ell J_0(y sqrt(2T))].`                                  (3)

在具有所需指数矩时，用 Hermite 生成函数可等价写成

`E[psi_ell(U) J_0(y sqrt(2T))]`,

再对 `T` 做 Laguerre 投影才得到 `C_(ell,n)`。但 (2) 只给出 `A(0,y)`，对 (3)
的所有 `ell>=1` 导数没有方程。因此径向 exactness 只固定 `ell=0` sector；
R188 的

`(MT_r)  lim_(M->infinity) sup_j
 sum_(2n+ell>M) r^(4n+2ell)|C_(ell,n)(mu_j)|^2=0`

不能从该径向 identity 单独推出。

## 4. 最小信息论级 obstruction

在仅考察 (2) 的信息层面，取任意有界 `b_N` 满足
`int_0^infty b_N(t)e^(-t)dt=0`，并令

`dP_epsilon(u,t)=gamma(u)e^(-t)
 [1+epsilon psi_ell(u)b_N(t)]du dt`,

其中 `|epsilon|` 足够小以保持正性。其 `T` 边缘仍为 `Exp(1)`，所以 (2) 完全
不变；但选择 `b_N` 与前 `N-1` 个 Laguerre 模态正交且对 `L_N` 非零，可使
`C_(ell,n)=0`（`n<N`）而 `C_(ell,N)!=0`。这再次说明 `(MT_r)` 是真正的
mixed-sector tail 假设，而非径向边缘的形式推论。

该构造不是 three-iid same-factor genuine law，故不是原始问题的反例；它只证明
需要在 (1) 中利用 `s`-dependence 或额外 positivity coupling，不能把 (2) 直接
当作 mixed-sector control。

## 5. 全局位置与下一步

R205 将 R188 的缺口从“缺少一个估计”精确升级为“已知 identity 位于 `s=0`
切片，无法读取均值--半径耦合”。它与 R190 的一阶 radial blind ladder、R186
inverse-Hankel rank escape 不同：R205 是信息投影层面的 exact no-go，R190 是
线性化变分层，R186 是正性检测阶的全局闭性层。

下一条最小任务是研究是否能从 same-factor positivity/四点 bispectrum Gram
得到一个真正的 `s`-dependent bound；若不能，则应把“公共均值频率方向的缺失”
作为原始 rigidity 的明确 OPEN bridge，而不再增加 radial rows。

证据等级：`PROVED`（坐标、Bessel/Laplace 恒等式和信息投影）+
`ABSTRACT OBSTRUCTION`（最后的 mixed-sector 迁移构造）；不是 genuine all-row
counterexample。整体发表性仍为“无”。

