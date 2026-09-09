# R193 — finite-PSD witness escape for the all-order formal lift

日期：2026-09-09

## 结论先行

R192 的 formal radial-preserving jet 不能由“固定有限频率尺度、固定有限 Gram
阶数、且点集不退化”的正定性测试在 `epsilon -> 0` 时统一击破。原因不是正定性
没有作用，而是 Gaussian 基点的有限 Gram 矩阵严格正定，因而有限维谱隙会吸收
任何足够小的局部扰动。

另一方面，任何有限阶非平凡截断

`Phi_[M](u)=exp(-u^2/2 + sum_(k=1)^M epsilon^k b_k(iu)^(kd))`

若其指数多项式的次数大于二，则由经典 Marcinkiewicz 定理它不可能是特征函数；
由 Bochner 判据，必然存在某个有限频率集和有限 Gram 矩阵使其非 PSD。两点合在
一起给出严格的 escape dichotomy：当 `epsilon -> 0` 时，这个负性见证不能同时
保持有限阶数、有限频率范围和非退化点间距；至少一个检测尺度必须逃逸，或负
特征值裕量趋于零。

这不是 genuine counterexample。它只说明 R192 的形式方向在正定性层面不能用
一个固定的局部有限检验自动排除；原始 OPEN 缺口被精确压缩为 uniform Bochner
tail / inverse-Hankel rank closure。

## 1. 固定有限 Gram 的严格正定性

令 `K_0(s,t)=exp(-(s-t)^2/2)`，取互异点
`T=(t_1,...,t_m)`。对任意非零 `c in C^m`，

`c^*G_0(T)c
 = (1/sqrt(2*pi)) integral_R exp(-xi^2/2)
       |sum_a c_a exp(i xi t_a)|^2 d xi > 0.`

严格不等号来自：互异点的指数多项式不可能在实轴上恒为零。因此
`lambda_min(G_0(T))>0`。

R192 的任意有限 formal truncation 或任何在紧集上一致趋于 Gaussian 的 genuine
候选都满足：对固定 `T`，

`G_epsilon(T)=G_0(T)+o(1)`，

故由 Weyl 扰动估计，`|epsilon|` 足够小时 `G_epsilon(T)` 仍为正定。对第一阶
截断甚至有显式界：若 `d` 为奇数且 `|t_a|<=U`，则 `|t_a-t_b|<=2U`，

`|Phi_epsilon(s)-Phi_0(s)|
 <= |epsilon| |s|^d exp(-s^2/2)
 <= |epsilon|(2U)^d.`

从而

`||G_epsilon-G_0||_2 <= m |epsilon|(2U)^d`。

因此若

`|epsilon| < lambda_min(G_0(T))/(2m(2U)^d)`,

则 `G_epsilon(T)` 仍有最小特征值至少
`lambda_min(G_0(T))/2`。这直接否定了下述固定局部见证：存在固定互异
`T`、固定 `m` 和固定 `epsilon_0>0`，使所有 `0<|epsilon|<epsilon_0` 的
R192 形式方向都被同一 Gram 主子式以统一负裕量击破。

## 2. 非退化配置上的 uniform 版本

固定 `m_0,U,delta>0`，考虑

`K(m_0,U,delta)={T: m<=m_0, |t_a|<=U,
                 min_(a!=b)|t_a-t_b|>=delta}`.

这是有限个紧配置空间的闭子集。Gaussian Gram 矩阵对每个配置严格正定，
连续性给出

`lambda_* = inf_{T in K(m_0,U,delta)} lambda_min(G_0(T)) > 0.`

若 `Phi_epsilon -> Phi_0` 在 `[-2U,2U]` 上一致，则存在 `epsilon_* > 0`，
使所有上述配置同时满足

`lambda_min(G_epsilon(T)) >= lambda_*/2 > 0`

当 `|epsilon|<epsilon_*`。所以任何 finite-PSD witness 若随 `epsilon->0`
出现，至少必须落入以下通道之一：

1. 频率尺度 `U -> infinity`；
2. Gram 阶数 `m -> infinity`；
3. 点配置间距 `delta -> 0`，即发生点碰撞/退化的 confluent limit；
4. 最小负特征值的绝对值趋于 `0`，没有统一负裕量。

这是一个有完整量词的 local-to-global dichotomy，而不是“正定性很难”的描述。

## 3. 为什么有限截断仍然必有某种负性见证

固定第一个非零的高于二次项后，有限截断的指数为一个次数大于二的多项式，
且函数不为零、在零点取一。若它是概率特征函数，则经典 Marcinkiewicz 定理
要求其对数为至多二次多项式，矛盾。因此该截断不是特征函数。

Bochner 判据的逆命题于是给出：存在有限 `m`、有限实频率点
`t_1,...,t_m` 和向量 `c`，使

`sum_(a,b) conjugate(c_a)c_b Phi_[M](t_a-t_b) < 0.`

第 1、2 节说明，这个见证虽然存在，但不能在 `epsilon -> 0` 时被限制在一个
固定的非退化紧频率配置族内。因此“每个有限截断非正定”和“没有统一有限
局部见证”同时成立；二者并不矛盾。

注意：这一步只处理 finite truncation。R192 的 infinite formal series 未证明
收敛，故不能把有限截断的 Marcinkiewicz 结论外推成某个 genuine 全阶族必然
存在或必然不存在。

## 4. 与 R186、R188 的非循环拼接

R186 的 primitive dichotomy 是：固定 `r>1` 时，每个 genuine primitive law 的
inverse-Hankel 链在有限阶失败，但趋于 Gaussian 的 primitive 序列可能满足
失败阶 `M_r -> infinity`。R193 的 finite-PSD dichotomy 发生在 Bochner Gram
层：每个非平凡 finite truncation 有某个负性见证，但见证可以向频率、阶数、
点碰撞或零裕量逃逸。

二者属于同一类“正性检测阶逃逸”，但不是同一个命题：R186 以 moment/Hankel
阶为检测参数，R193 以频率配置和 Bochner Gram 阶为检测参数。R193 没有使用
R186 的结论；它只为 R192 的 formal jet 建立局部正定性 no-go，并因此独立地
说明必须寻找 uniform Bochner-tail 或 Hankel-rank closure。

R188 的 `(MT_r)` 若能在 genuine exact 类上成立，则可控制 mixed coefficient
的 inverse-weighted 总尾部；但它本身不提供 R193 所需的有限 Gram 负裕量，也不
保证 formal jet 收敛或 characteristic realizability。因此拼接链为：

`(MT_r) + fixed-coordinate continuity`
`=> mixed spectral compactness`
`=> candidate primitive closure`
`+ uniform inverse-Hankel/Bochner rank closure`
`=> rigidity.`

当前第一步和最后一步都未从原始假设闭合。

## 5. 证据等级和发表性

* `PROVED`：Gaussian finite Gram strict positivity；非退化紧配置上的 uniform
  spectral gap；固定局部 finite-PSD witness 不可能统一击破小 `epsilon`；
* `CONDITIONAL/CLASSICAL INPUT`：有限多项式截断由 Marcinkiewicz 非特征，从而
  由 Bochner 存在某个有限负性见证；
* `FORMAL`：R192 all-order radial-preserving jet；
* `OPEN`：形式级数收敛、global positive-definiteness、`(MT_r)`、uniform
  inverse-Hankel/Bochner rank closure，以及原始 tower rigidity；
* `发表性判断`：截至目前，尚无已经独立闭合、足以作为原始问题完整论文主定理的
  结果。R193 是一个可抽取的正定性局部闭合/逃逸引理，但单独仍不足以解决原始
  命题；因此整体独立发表性仍为“无”。

## 6. 下一轮唯一最小任务

不要再增加 radial Taylor 阶数。下一步只研究一个 confluent-Bochner 问题：当
`delta->0` 时，把归一化有限差分 Gram 测试写成导数核矩阵，判断 R192 的首个
非平凡高阶项是否能在固定 `m,U` 的导数核层面产生负主子式；若仍不能，给出
“导数阶也必须逃逸”的定量版本。该任务直接决定点碰撞通道是否只是坐标退化，
并可与 R186 的 inverse-Hankel 失败阶进行最短拼接。

