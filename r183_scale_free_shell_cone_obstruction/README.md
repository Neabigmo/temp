# R183 — Scale-free shell-to-cone obstruction

日期：2026-09-09

## 结论先行

R182 的第一非配对零点壳确实给出正下密度 odd-tail，但这个密度不能由
当前的 shell energy 和 Cauchy 上界统一提升为逐阶、或与 R150 的 Hankel
replenishment 阈值统一比较。一个完全显式的单位根壳族已经展示了缺口：壳的
归一化二次能量保持不变，而可见 odd 系数只出现在密度 `1/J` 的阶次上。

令

`lambda_j=exp(2*pi*i*j/J)`, `b_j=1`, `0<=j<J`,

并定义

`A_k^(J)=sum_(j=0)^(J-1)b_j lambda_j^k`。

离散 Fourier 正交性给出精确恒等式

`A_k^(J)=J` if `J|k`, and `A_k^(J)=0` otherwise.

因此

`S_2=J`, `B=J`, `B^2/S_2=J`,

而 `|A_k|^2>=S_2/2` 的集合恰好是 `J*Z_{>=0}`，密度为 `1/J`。R182 的通用
下界只有

`p_0=(S_2/2)/(B^2-S_2/2)=1/(2J-1)`。

两者同阶，故不能仅从该能量论证得到与 `J` 无关的正密度。若改取
`b_j=1/sqrt(J)`，则 `S_2=1`、`B=sqrt(J)`，同一稀疏图样仍然成立，说明
固定壳 `L^2` 能量也不够；退化转移到了 `B^2/S_2`，即壳模态数/总变差。

## 1. 精确 cancellation lemma

对任意 `J>=2`，令 `E_J={k>=0:J|k}`。几何级数给出

`sum_(j=0)^(J-1) exp(2*pi*i*j*k/J) = 0`

当 `J` 不整除 `k`，整除时等于 `J`。所以

`lim_(K->infinity) K^(-1) sum_(k<K)|A_k^(J)|^2=J=S_2`,

但 `A_k^(J)=0` 对所有 `k` 属于 `[1,J-1]`。这同时说明：

1. 平均二次能量完全可以保持非零；
2. 任意给定的有限 odd-degree window 都可以被选取 `J` 大于该窗口后完全
   cancellation；
3. 可见阶次的下密度可以趋于零。

这不是数值例子，而是有限单位根指数和的精确模型。它与零点壳的形式数据
`delta_j=1` 一致；是否能由某个 genuine MGF 零除子实现，则仍需另行证明，
故这里只把它用作“现有 shell-only 估计不足”的 sharp obstruction，而不把它
当作原始问题的反例。

## 2. 无量纲化与 OU 变换

若 `C_h(z)=sum_m c_m z^m`，则合法 OU 轨道满足

`c_m(P_t h)=t^(m/2)c_m(h)`,
`a_m(P_t h)=t^(m/2)a_m(h)`,
`R_Delta(P_t h)=R_Delta(h)/sqrt(t)`.

故 shell-normalized profile 不变：若
`c_m(h) = const * R_Delta^(-m) A_((m-1)/2)`，则

`c_m(P_t h)=const * (R_Delta/sqrt(t))^(-m) A_((m-1)/2)`。

当 `R_Delta<=1` 时可取 `t=R_Delta^2` 把壳移到单位半径；当 `R_Delta>1`
该取值超出 forward OU 的 `t<=1` 范围，不能偷偷使用。无论取值是否合法，
`A_k` 的 cancellation 图样和 `p_0` 都不变。R150 的 `eta_d(a)` 不是一个
已证明 OU-invariant 的无量纲函数：已知的精确变换只有
`a -> t^(d/2)a` 和每个高阶系数 `c_n -> t^(n/2)c_n`，因此不能把
`p_0` 直接乘到 `eta_d` 上。

## 3. 对原始桥的含义

R183 排除了如下过强的推断：

`R182 positive-density shell tail + R139 energy upper bound`
`=> uniform positive Hankel/cone obstruction`。

要关闭原始命题，至少还需要一个 genuine 输入，控制下列某一项：

`B^2/S_2` 的统一上界、首壳模态数的统一上界、shell-to-Hankel 的 coercive
映射，或直接给出随首 odd 阶 `d` 不退化的 `eta_d(a)`。R183 的族表明，单纯
增加 Fourier/零点壳的平均能量、Cauchy 上界或 OU 缩放审计都不能提供该输入。

## 4. 证据等级

- `PROVED UNDER HADAMARD SHELL HYPOTHESES`：R182 的正下密度结论与本节的
  单位根 cancellation lemma。
- `EXACT-AUDITED`：离散 Fourier 恒等式、密度、能量和 OU 幂次变换。
- `OPEN`：genuine zero-divisor 可实现性、统一 shell-to-cone coercivity、
  `RK=1` 到 full-exact/all-row、原始 `P_3K` 溯源。

原始 Positive Backward-Tower Exact Zero-Set Rigidity 仍无独立完整发表结果；
R183 是一个可作为论文中“为何需要额外壳几何假设”的 obstruction lemma 候选，
不是主定理。

审计命令：

`node r183_scale_free_shell_cone_obstruction/audit_r183.js`

预期 marker：`R183_SCALE_FREE_SHELL_CONE_OBSTRUCTION_PASSED`
