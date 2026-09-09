# R207：反射首 Laguerre 符号的 Gaussian rigidity 判据

日期：2026-09-09  
基线：R206，提交 `6b788df`

## 1. 判据

设 `X` 是中心化、方差一的 iid scalar law，具有原点邻域 MGF；令
`C=(X_1+X_2+X_3)/sqrt(3)`、`Q` 为 residual sample variance，并在
`Q~chi^2_2` 的 full-SF 假设下定义

`ell_1(a)=1-E_a[Q]/2`,
`E_a[F]=E[e^(aC)F]/E[e^(aC)]`。

由于 iid exponential tilt 仍为同一 scalar law 的 tilt，精确有

`E_a[Q]=2 K''(a/sqrt(3))`,
`ell_1(a)=1-K''(a/sqrt(3))`.                                  (1)

若 `d>=3` 是 `K` 的第一个非 Gaussian cumulant 阶，且 full-SF first-row
递推已知 `d` 为奇数，则

`ell_1(a)= -kappa_d a^(d-2)
  /(3^((d-2)/2)(d-2)!) + O(a^(d-1))`.                    (2)

因为 `d-2` 为奇数，(2) 给出

`ell_1(a)ell_1(-a)<0`

对所有充分小的 `a!=0`。因此得到严格的条件性 rigidity criterion：

> 在上述 analytic full-SF 类中，若存在 `a_0>0` 使
> `ell_1(a)ell_1(-a)>=0` 对 `0<|a|<a_0` 成立，则 `K(t)=t^2/2`，从而
> `X~N(0,1)`。

更强地，任一局部单边式 `K''(t)<=1` 或 `K''(t)>=1` 也直接关闭 Gaussian。

## 2. 为什么现有正性工具不能自动给出该判据

令

`J(a)=sum_(m>=1) ell_m(a)ell_m(-a)`。

若 `G(Q)=E[C|Q]`，则 Laguerre completeness 给出

`J(a)=E[(r_a(Q)-1)(r_(-a)(Q)-1)]`
`     =-a^2 E[G(Q)^2]+O(a^4)`,

其中 `r_a(Q)=E[e^(aC)|Q]/E[e^(aC)]`。所以非 Gaussian common-mode regression
本身会使 `J` 在原点出现负二阶 dip；`J>=0` 不是一般正性的后果，而是一个
已经足以推出 Gaussian 的额外 rigidity statement。

条件 Cauchy 只给

`J(a)>=exp(-3[K(a/sqrt(3))+K(-a/sqrt(3))])-1`,

右侧在 `a=0` 的二阶项为 `-a^2`，允许负号，因而不能替代所需的反射正性。
R145 的 shifted Bessel–Schur 上界、R146 的 positive-source/complete
monotonicity、R149 的 reflection quadratic source 也都没有改变这个符号方向。

## 3. 证据边界与全局位置

R207 是 `PROVED UNDER ANALYTIC FULL-SF + ODD-FIRST-CUMULANT` 的精确判据，
不是对 bare `RK=1` 的证明。它把 R145–R149 的正向路线进一步压缩为一个唯一的
反向符号问题：能否由 genuine iid full-SF 得到 `ell_1(a)ell_1(-a)>=0` 或
等价的 `E[C|Q]=0`。R146/R147 已给出的 exchangeable 或 finite-boundary
wrong-sign witness 只说明一般正性不能提供该符号；它们不属于 genuine iid
full-SF 反例。

因此：原始 backward-tower rigidity 仍 `OPEN`；当前完整独立可审稿发表性仍为
“无”。R207 是可写入论文的 conditional rigidity certificate，需与
`RK=1=>full-SF` 及 genuine full-SF-to-regression 桥分开。

下一条最小任务：直接审查 full-SF product factorization 是否能推出上述局部
reflection sign；若不能，给出一个比普通 Cauchy 更强但仍 wrong-sign 的最小
positive inequality，作为该路线的最终边界。

