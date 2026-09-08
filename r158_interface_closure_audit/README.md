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

### 量词补全：一个可独立引用的 formal majorant lemma

上面的“递推由绝对值系数逐阶支配”可以改写成如下明确版本。设对每个
`n>=1` 有 `q_i>=0`、`h_n=<q_1^n> > 0`，并满足

`< product_i q_i^(ell_i) > <= h_n` whenever `ell_i>=0` and `sum_i ell_i=n`,

以及 `|p_d|^(2m) <= sum_i q_i^m`。后一个几何不等式对本问题的 odd `d` 来自
`|p_d|<=max_i|u_i|`；前一个不等式由广义 Hölder 直接给出，因为所有 `q_i`
具有同一边缘矩 `h_n`。若形式级 universal equation 对所有阶成立，则其 `s^n`
系数可唯一解出：直接项是 `3h_n a_(d,n)`，而且 `3h_n>0`。

具体地，记 `P(s)=product_i A_d(s q_i)`，并把 `m=0` 的 `s^n` 系数中三个
linear terms `a_(d,n)q_i^n` 删除，余项记为 `R_(0,n)`。逐项取绝对值并用
上述两条矩不等式，归纳假设 `|a_(d,k)|<=b_k (k<n)` 给出

`|R_(0,n)| <= h_n [s^n](B^3-1-3(B-1))`,

以及所有 `m>=1` 的 cosh 项之和不超过

`3h_n [s^n]((cosh(sqrt(s))-1)B^3)`。

因此

`|a_(d,n)| <= (1/3)[s^n](B^3-1-3(B-1))
              +[s^n]((cosh(sqrt(s))-1)B^3)`.

令右端取等号定义 `b_n`，并归纳即可得到 `|a_(d,n)|<=b_n`；移项后恰好是
`6b_n=[s^n]((3cosh(sqrt(s))-2)B^3)`，即
`(3cosh(sqrt(s))-2)B^3-6B+5=0`。这补全了 pivot 的正性、量词和归纳的
依赖关系；它是一个可以在论文中作为“formal/interface lemma”单独陈述的结果。
其结论仍严格限于已假设的 universal equation 与归一化，不能替代从原始对象到
该方程的 full-SF 证明，也不能替代 formal-to-genuine-law 桥。

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

## 有限形式高阶探针（非定理）

为判断 majorant 是否可能极度松弛，本机用同一个 exact `D_3` Laurent recursion
把 `d=5` 的 `A_5` 延长到 `s^6`。数值值为

`a_1=-0.2976190476190476`,
`a_2=0.0805203192490344`,
`a_3=-0.0234296835545938`,
`a_4=0.00724929930664061`,
`a_5=-0.00232738459714993`,
`a_6=0.000763969274987774`。

相邻绝对值比为

`0.2705483, 0.2909785, 0.3094066, 0.3210496, 0.3282523`。

这与正 majorant 的系数增长明显不同，说明 `B` 更可能是保守包络；但有限阶比值
不能给出 `A_5` 的收敛半径、实际奇点或大阶下界。因此该探针只标记为
`FINITE-ONLY / EXPLORATORY`，不改变 R158-A 的条件性边界。

## 有限形式高阶谱探针（n=200，仍非定理）

为避免把低阶趋势误读成收敛半径，本机又按同一 universal one-variable 方程，
直接对 `theta` 做周期谱平均，并逐阶递推 `d=5` 的 `A_5(s)` 到 `n=200`。实现见
`probe_numeric_shape.py`。在 `L=4096` 个等距角点下，前六项与 exact `D_3`
Laurent recursion 的最大误差为 `5.551e-17`；改用 `L=8192` 后为
`4.163e-17`，两次的比值曲线一致到显示精度。这是一个内部一致性与角向采样
稳定性检查，不是对无限级数的证明。

系数符号从 `n=1` 到 `n=200` 全部交替，若记
`rho_n=|a_(n-1)/a_n|`，则若干值为

`rho_20=2.8669795142`, `rho_60=2.8264353987`,
`rho_100=2.8187138052`, `rho_150=2.8148980125`,
`rho_180=2.8136326341`, `rho_200=2.8130011640`。

`rho_200` 只能叫作一阶系数比值 proxy；不能写成实际收敛半径、真实奇点位置
或大阶渐近。它目前只支持一个有限证据层面的观察：`A_5` 的实际低/中阶形状
可能远离正 majorant 的粗包络，且交替符号值得作为后续解析结构的候选线索。
一次 `n=400` 的普通双精度试跑在高阶下溢并产生 `NaN`，已明确丢弃，不计入证据。
因此本节仍标记为 `FINITE-ONLY / EXPLORATORY`，不改变整体发表性结论。
