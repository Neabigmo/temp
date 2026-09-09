# R209：连续 tilt Gram 仍不能产生反射符号

日期：2026-09-09  
基线：R208，提交 `37c6c23`

## 0. 结论先行

R208 排除了固定有限 Bochner Gram 直接产生 R207 反射符号的路线。本轮把
Gram 参数扩大到整个实 tilt 轴，得到更强的正性 no-go：

> 连续参数上的完整 PSD covariance kernel、正的 normalized tilt density、
> `Q~Exp(1)` 的边缘律以及 conditional Cauchy，都不能推出
> `J(a)=sum_m ell_m(a)ell_m(-a)>=0`。

因此 R207 所需的符号必须使用 genuine iid same-factor functional equation
的额外结构；“把有限 Gram 做到无限/连续”本身不是缺失桥梁。

本构造是严格的 relaxed `(C,Q)` witness，不是三个 iid scalar variables 的
full-SF 反例，也不触及原始 `RK=1` 或空间 `P_3K` charge。

## 1. 连续 tilt covariance kernel

令 `Q~Exp(1)`，取 `q_0=log 2`，并定义

`C(Q)=+1` 当 `Q<=q_0`，`C(Q)=-1` 当 `Q>q_0`。

于是 `C` 中心化、方差为一，并且 `Q` 仍有精确的 `Exp(1)` 边缘律。其
MGF 为

`M_C(a)=E exp(aC)=cosh(a)`.

对每一个实 `a` 定义 normalized conditional tilt

`r_a(Q)=E[exp(aC)|Q]/M_C(a)=exp(aC(Q))/cosh(a)`.

利用 `C^2=1`，有精确公式

`r_a(Q)=1+C(Q)tanh(a)>0`,

并且 `E r_a=1`。这是全实轴、解析且正的 tilt family，而不是只在原点的
形式展开。

令

`K(a,b)=E[(r_a-1)(r_b-1)]`。

因为 `r_a-1=C tanh(a)`，得到

`K(a,b)=tanh(a)tanh(b)`.                                    (1)

所以对任意 `m` 和任意实点 `a_1,...,a_m`，

`(K(a_i,a_j))_(i,j)=v v^T`,  `v_i=tanh(a_i)`,

是 rank-one PSD 矩阵。换句话说，这不是有限点近似，而是一个在整个
`R×R` 上的 PSD kernel。

但是其反射交叉项为

`K(a,-a)=-tanh^2(a)<0`  (`a!=0`).                          (2)

这正是 R147/R207 中

`J(a)=E[(r_a(Q)-1)(r_{-a}(Q)-1)]`

的符号。故“连续 tilt Gram PSD”与“反射交叉项非负”逻辑上独立。

## 2. 它同时饱和现有的 conditional-Cauchy 下界

逐点有

`r_a(Q)r_{-a}(Q)=1/cosh^2(a)`.

而 `M_C(a)M_C(-a)=cosh^2(a)`，所以

`r_a r_{-a}=1/(M_C(a)M_C(-a))`.

这正好饱和 R147 的 conditional Cauchy 下界。积分后

`J(a)=1/cosh^2(a)-1=-tanh^2(a)`.

因此 R207 中已有的下界不是估计松弛造成的假象；在一个全尺度、严格正、
解析的 tilt family 上，它允许并且精确实现 wrong sign。

在原点还可直接看到

`J(a)=-a^2+O(a^4)`,

与一般式
`J(a)=-a^2 E[E(C|Q)^2]+O(a^4)` 完全一致，因为此处
`E(C|Q)=C`。

## 3. 证据等级与不能升级之处

### `PROVED`

1. `Q` 的边缘律是精确 `Exp(1)`；
2. `r_a` 在所有实 tilt 上严格为正、归一化且解析；
3. `K(a,b)` 在整个连续参数空间上 PSD；
4. `K(a,-a)<0`，并精确饱和 conditional-Cauchy 下界。

### `RELAXED OBSTRUCTION`

该 witness 没有来自三个 iid 同分布 scalar variables 的正交坐标关系

`C=(X_1+X_2+X_3)/sqrt(3)`,
`Q=sum_j(X_j-Xbar)^2`,

也没有满足 one-body characteristic factorization

`Psi(s;u,v)=prod_j phi(s/sqrt(3)+a_j(u,v))`。

所以它不是 genuine iid full-SF law，更不是原始命题的 counterexample。它只
证明：任何仅使用 `Q` 边缘、tilt 正性、连续 covariance/Gram PSD 和
conditional Cauchy 的证明，均无法得到 R207 的反射正号。

## 4. 接回全局路线

R145--R149 已经提供 shifted Bessel、tilted Laguerre、reflection spectrum
和 nonlinear reflection decomposition。R209 进一步说明：即使把其中的
reflection spectrum 视为整个连续 tilt 轴上的 PSD kernel，仍只能得到
diagonal/平方型正性，不能得到 `a` 与 `-a` 的 off-diagonal 正号。

因此真正剩余的接口不是“有限 Gram 是否足够”，而是：

`genuine iid full-SF factorization`
`        =>?  a-specific constraint beyond PSD`
`        =>?  J(a)>=0 or ell_1(a)ell_1(-a)>=0`.

如果该 implication 仍无法闭合，应把它记录为 same-factor nonlinear
reflection-sign bridge 的正式 `OPEN` 缺口。R209 与 R193/R196 的检测阶逃逸
不同：R193/R196 讨论有限观测阶的 uniform margin；R209 讨论即使观测参数
连续且 PSD 完整，off-diagonal reflection sign 仍未被正性逻辑强制。

## 5. 全局发表性判断

原始 Positive Backward-Tower Exact Zero-Set Rigidity 仍为 `OPEN`。截至本轮，
仍应诚实判断：

`无（目前没有足够独立、完整、可审稿的发表性结果）`。

最接近可抽取的结果是 R197--R203 的 finite-row non-annihilation theorem，
加上 R145--R149/R207/R209 对 continuum reflection route 的精确边界；后者
仍是 conditional/relaxed obstruction，不能单独组成原始 rigidity 论文。

## 6. 唯一下一步

只研究一个接口：在 genuine iid full-SF factorization 下，寻找不等价于一般
PSD covariance 的 same-factor nonlinear identity；若找不到，给出明确的
“same-factor identity 也只产生 reflection-even quantities”的证明，并把
`RK=1=>full-SF`、charge provenance、primitive closure、mixed-tail 和 tower
rigidity 保持为独立缺口。

