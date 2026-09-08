# R158-A — R157 条件性接口定理审计

日期：2026-09-09

## 目的

本目录把 R157 的候选链条写成一个可以逐项检查的条件性定理。它不声称已经
解决 `Positive Backward-Tower Exact Zero-Set Rigidity`，也不把形式 completion
解释成 genuine 非负概率密度；作用是把下一步真正需要补的接口固定下来。

## 条件性接口定理

固定 odd `d>=5`。设

`r_j(theta)=sqrt(2/3) cos(theta+2*pi*(j-1)/3)`,

`u_j=r_j^d`, `q_j=u_j^2`, `p_d=sum_j u_j`，并令角括号表示 theta 平均。
假设目标 sparse completion 在形式层面已经满足

`< cosh(sqrt(s) p_d) product_j A_d(s q_j) > = 1`,

其中 `A_d(s)=1+sum_(n>=1) a_(d,n) s^n`，且这些系数与目标 Hermite section
采用同一归一化。定义

`h_(d,n)=<q_1^n>=binom(2dn,dn)/6^(dn)`。

那么，在下列局部输入成立时：

1. `|p_d| <= max_j |u_j|`；
2. 广义 Hölder 给出总次数 `2n` 的混合矩不超过 `h_(d,n)`；
3. `|a_(d,n)|` 的递推由上式的绝对值系数逐阶支配；

可以定义唯一正系数 majorant `B(s)=1+sum b_n s^n`，满足

`D(s) B(s)^3 - 6 B(s) + 5 = 0`,

`D(s)=3 cosh(sqrt(s))-2`, `B(0)=1`，并有

`|a_(d,n)| <= b_n`  (n>=1).

### 证明接口

新系数在 `s^n` 的直接项为 `3 h_(d,n) a_(d,n)`。当 `m=0` 时，去掉三个
linear tuple 后，混合乘积只需 `h_(d,n)` 控制；当 `m>=1` 时，

`|p_d|^(2m) <= sum_i |u_i|^(2m)`

使控制量为 `3 h_(d,n)`。因此绝对值递推可写成

`6 b_n = [s^n] (3 cosh(sqrt(s))-2) B(s)^3`,  n>=1,

这正等价于上面的代数方程。这里的 `6` 不能被误写成 `3`：它来自左侧直接
pivot 的 `3 b_n` 与右侧 `m=0` 中被移除的三个 `b_n`。

## majorant 内部的无条件结论

对于这个正 majorant 本身，判别条件 `F=F_B=0`，其中

`F(s,B)=D(s)B^3-6B+5`,

强制

`B_*=5/4`, `D(s_*)=32/25`。

令

`T_*=arcosh(82/75)=0.428757663860...`, `s_*=T_*^2`，

则正实分支的最近有限奇点是 `s_*`。在该点

`B(s)=5/4-K sqrt(1-s/s_*)+O(1-s/s_*)`,

`K=(25/32) sqrt(T_* sinh(T_*))`，

并且

`b_n ~ K/(2 sqrt(pi)) s_*^(-n) n^(-3/2)`。

这些是 majorant 的结论；对真实 `A_d` 只能使用系数上界，不能推出匹配的下界
或相同奇点。

## 从 majorant 到可用的局部正性

由 `|A_d(s)-1|<=B(|s|)-1`，在 `|s|<s_*` 内有

`|A_d(s)-1|<1/4`，

故 `A_d` 在该圆盘绝对收敛且无零点；于是

`E_d(t)=exp(t) A_d(t^2)`

在 `|t|<T_*` 内解析且无零点，并对实 `t` 满足

`E_d(t)>=3 exp(-|t|)/4>0`。

对任意 `T<r<T_*`，普通部分和 `E_(d,N)` 的尾项受正 majorant 控制，因而在
`|t|<=T` 上一致趋于 `E_d`；这给出“固定紧子区间内，充分大的普通部分和为正”。
它不等同于 `n~M` 的 turning 区域结论。

若 Hermite 完成项的归一化另可严格推出

`|t| <= A^d exp(d tau/A^2)`,

则只要

`A^d exp(d tau/A^2)<T_*`,

即可得到相应的 completed-formal 局部正性。结合真实 Gauss 节点的粗界
`|x_(j,M)|<2 sqrt(2M+1)`，统一选择最保守的 `c^2=8` 给出候选安全常数

`tau_safe(d)=exp(-1/4) T_*^(2/d)/8`。

这一行的前提仍是 Hermite 归一化与 completed-formal 对象的接口已闭合；它不能
直接推出 genuine law、全 tau 符号、literal edge escape，或原始 rigidity。

## 证据等级与出版边界

- `PROVED UNDER STATED FORMAL REDUCTION`：三角递推的逐阶唯一性，以及在上述
  一变量方程前提下的 majorant 代数推导。
- `LOCAL-AUDITED`：临界点、平方根常数、前若干正系数和尺度换算。
- `CONDITIONAL / WEB-DRAFT`：把 majorant 连接到目标 completed Hermite density
  和首失效阶下界的完整定理链。
- `OPEN`：full-SF reduction 对原始对象的全阶适用性、formal-to-spatial/genuine-law
  桥、全 tau 的符号、active negative mass、edge escape、`RK=1` 到 all-row，以及
  空间 `P_3 K` 桥。

因此当前整体发表性结论仍为：

**无（目前没有足够独立、完整、可审稿的发表性结果）**。

R158-A 的价值在于把“最接近可发表的模块”从一组网页推导整理为一个明确的
条件性接口定理，并逐行标出必须由网页端补上的假设，而不是声称已经完成主命题。
