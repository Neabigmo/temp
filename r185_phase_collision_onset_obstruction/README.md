# R185 — Phase-collision obstruction to uniform onset

日期：2026-09-09

## 结论先行

R184 已在 `R_Delta<=1` 的 genuine full-exact small-shell regime 中统一控制
首壳模态数 `J<=9` 和 R182 的正下密度 `p_0>=1/17`。但这仍不能把
正下密度子序列对齐到 R150 的有限 replenishment window，因为不同首壳相位
可以任意近碰撞。这个缺口即使在固定 `J`、固定整数重数差和实值共轭对称下
也存在。

取 `0<delta<<1`、固定 `theta`，令

`lambda_1=exp(i theta)`, `lambda_2=exp(-i theta)`,
`lambda_3=exp(i(theta+delta))`, `lambda_4=exp(-i(theta+delta))`,

并取整数 shell weights

`b=(1,1,-1,-1)`。

则 `J=4`、`S_2=4`、`B=4`、`p_0=1/7`，同时

`A_k(delta)=sum_j b_j lambda_j^k`
`=2(cos(k theta)-cos(k(theta+delta)))`。

由 `|cos u-cos v|<=|u-v|`，对每个 `0<=k<=L` 有

`|A_k(delta)|<=2k delta<=2L delta`。

因此给定任意有限窗口 `[0,L]` 和 `eta>0`，取
`delta<=eta/(2L)` 即可使整个窗口中的 shell profile 都小于 `eta`，而
`J,S_2,B,p_0` 保持固定。要看到幅度 `alpha`，其起始阶次至少满足

`k>=alpha/(2delta)`。

所以 R184 的 uniform `p_0` 只控制“最终会出现多大比例的阶次”，不控制
“从哪一阶开始出现”；R150 的 `d<n<2M_d(a)` 窗口可以在该 onset 之前完全
看不见首壳尾部。

## 1. 与 real-valued MGF 结构的关系

该模型的 `lambda` 成共轭对，且共轭点的权重相同；正负号只发生在两组不同
相位的 conjugate pairs 之间。因此它满足首壳形式数据所需的 real-conjugation
和整数 `delta_j` 约束，也不是 R183 那种只具有复形式的两模态模型。

不过，这仍只是 zero-shell divisor data：尚未构造具有该精确首壳、正定
Bochner 性、归一化 MGF 和 R112 genuine full-exact realization 的同一概率律。
故它是 onset/separation obstruction，不是 genuine counterexample。

## 2. 对 R150 的精确含义

在 OU shell-normalized 坐标中，`c_(2k+1)` 的首壳主项是
`R_Delta^(-(2k+1))A_k/(2k+1)`（常数和符号不影响这里的 cancellation）。
当 `R_Delta=1` 时，上式直接继承 `|A_k|<=2k delta`；当 `R_Delta` 一般时，
只需把目标阈值按 `R_Delta^(2k+1)` 重标即可。因而任意预先给定的 finite
R150 window 都可以通过更小的 `delta` 推迟到窗口之后。

R112 的 Jensen bound 只限制壳内零点总数，不能给不同零点之间的最小角距；
有限个零点的数量有统一上界，并不排除其中两个角度趋于相同。要关闭该
escape，至少需要一个 genuine 的 uniform angular separation、一个等价的
Vandermonde lower bound，或直接给出 shell-to-Hankel 的 onset estimate。

## 3. 最强可写命题与唯一缺口

> 在 R112/R182 的假设下，small-shell 首壳的模态数和正下密度可以统一，
> 但若不再假设首壳相位分离，则不存在与 R150 窗口长度无关的 uniform onset
> bound；上述 `J=4` 共轭单位根族给出精确形式 obstruction。

该命题证明了“uniform density”与“uniform degree alignment”是两个不同层次，
不能互相替代。下一真正任务不是再提高 `p_0`，而是判断 genuine positive
MGF 是否能产生相位分离，或建立不依赖相位分离的 Hankel 直接下界。

## 4. 证据等级

- `PROVED UNDER HADAMARD SHELL DATA`：单位根共轭族的精确 cancellation、
  固定 `J,S_2,B,p_0` 和 onset 下界。
- `CONDITIONAL`：R112 genuine envelope 对小壳零点计数的应用。
- `OPEN`：该 shell data 的 genuine MGF 可实现性、uniform angular separation、
  shell-to-Hankel onset、原始 `RK=1` 识别和 `P_3K` 溯源。

原始 Positive Backward-Tower Exact Zero-Set Rigidity 仍没有独立完整发表结果；
R185 是一个可用于论文中区分 density 与 alignment 的 obstruction lemma 候选。

审计命令：

`node r185_phase_collision_onset_obstruction/audit_r185.js`

预期 marker：`R185_PHASE_COLLISION_ONSET_OBSTRUCTION_PASSED`
