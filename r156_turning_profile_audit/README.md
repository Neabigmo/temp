# R156 — Completed-Sparse Gauss-Node Turning-Profile

日期：2026-09-09  
状态：已向网页端部署；本目录当前只记录问题定义、有限推论和证据边界，尚未
声称 A/B 任一分支已经证明。

## 目标

固定 odd `d`，令 full-SF sparse recursion 的 formal completion 产生 `B_{d,a}`，并取
first-failing section `M=M_d^sharp(a)`。设置

`lambda=|a|^{2/d}`, `tau=lambda M`, `N=2M+1`,

以及 Gaussian nodes `x_{j,M}`，直接研究

`G_{j,M}=g_{d,a,M}(x_{j,M})`。

这一步是 R137 的 fixed-`d` feasibility-radius collapse 与 R154
Hermite/Christoffel localization criterion 之间的唯一 branch-specific bridge。

## 已知的有限层推论

对 degree-`2M` truncated polynomial，`N=2M+1` Gauss--Hermite quadrature 对
`g_{d,a,M}p^2` 精确。故若所有 quadrature nodes 上 `G_{j,M}>=0`，则

`Gamma_M=sum_j w_j G_{j,M} v_j v_j^T >=0`。

因此 `Gamma_M` 非 PSD 必然要求某个真实 quadrature node 上 `G_{j,M}<0`；这只是
有限/formal Hankel 层面的必要条件，不是 genuine iid counterexample。若在一个 node
set 上有统一负深度和其余 node 的有限上界，还可使用 R154 的离散 Christoffel
充分证书得到负特征值，但不能把该充分证书误写成任意负方向的普遍必要条件。

## R156 二择一目标

* **A — bulk/turning negative-node theorem**：存在 `delta,rho>0`、真实 node block，
  `|x_{j,M}|<=(2-delta)sqrt(M)`、`G_{j,M}<=-a_M<0` 且 `a_M/b_M>=rho`，进而得到
  quantitative negative margin；
* **B — strict edge escape theorem**：所有 first-failing sequence 的负节点满足
  `|x_{j,M}|/sqrt(M)->2`，并且深度比衰减到不足以通过 bulk localization threshold，
  再把问题压到 `x=2sqrt(M)+sM^(-1/6)` 的 turning scale。

若 A、B 均不能证明，只记录可逐行核验的 partial lemma，并标记为
`CONDITIONAL / FORMAL / FINITE-ONLY / OPEN`。不得把 formal even completion、有限
截断或单点负值升级成 genuine law 或发表性结果。

## 发表性边界

R155 的整体结论仍有效：

`无（目前没有足够独立、完整、可审稿的发表性结果）`

即使 R156 得到一条 conditional turning-profile lemma，也必须与
`RK=1=>full-SF/all-row`、positive realization 和 spatial `P_3K` bridge 分开报告。

## 本机有限审计（2026-09-09）

运行

`F:\\anaconda3\\python.exe r156_turning_profile_audit\\audit_r156.py`

对 `d=5`、`a=1/50`、formal completion 到 cumulant degree `24`，并逐层取
`M=1,...,12`。审计通过：

* `R156_SPARSE_FORMAL_COMPLETION_FINITE_GRADE_PASSED`；
* `R156_GAUSS_HERMITE_EXACT_REPLAY_PASSED`；
* `R156_NEGATIVE_NODE_WITH_GRAM_PSD_PASSED`；
* `R156_QUADRATIC_MODEL_BULK_AUDIT_PASSED`；
* `R156_FIRST_FAILURE_M=NONE_WITHIN_AUDITED_GRADE`。

节点/Gram 的最小值记录为

| `M` | `lambda_min(Gamma_M)` | `min_j G_{j,M}` | 负节点数 |
|---:|---:|---:|---:|
| 1 | 1.000000 | 1.000000 | 0 |
| 2 | 1.000000 | 1.000000 | 0 |
| 3 | 0.994226 | 0.954877 | 0 |
| 4 | 0.978816 | 0.829960 | 0 |
| 5 | 0.948902 | 0.596945 | 0 |
| 6 | 0.900338 | 0.250536 | 0 |
| 7 | 0.829750 | -0.186843 | 1 |
| 8 | 0.734815 | -0.591422 | 1 |
| 9 | 0.614701 | -0.630908 | 2 |
| 10 | 0.470777 | -0.498045 | 1 |
| 11 | 0.307700 | -0.687941 | 2 |
| 12 | 0.134921 | -1.442312 | 3 |

这给出一个严格的有限层边界：节点在 `M=7` 已出现负值，但同一层的
`Gamma_M` 仍正定；到 `M=12` 仍未观察到首个 Gram 失效。因此“负节点”是非 PSD
的必要条件，却不是充分条件。它直接阻止把 R154 的局部化证书、或单个 Gauss
节点的负值，误写成 R137 branch 的首个失败定理。

该计算只验证 finite/formal full-SF jet 与 Gauss replay；没有证明首个失败层存在于
本审计的 `M<=12`，也没有提供 genuine positive realization、iid counterexample、
turning-profile asymptotic 或 A/B 任一分支。证据等级保持
`LOCAL-AUDITED / FORMAL / FINITE-ONLY / OPEN`，R155 的发表性结论仍为“无”。

同一脚本还单独复核网页端提出的三项 quadratic prefix 模型：在 `d=5`、`a=10^{-2}`、
其临界 `M=9` 下，模型的最小节点值为 `-11.079375`，节点负值数为 `3`，而
`lambda_min(Gamma_M)=-5.384434`。因此网页端的“finite quadratic model 有 bulk
negative block”获得了本机数值/有限矩阵复核；这仍只属于该模型的
`FINITE-ONLY` 结果，不能移植到 all-order completed branch。

## 网页端 R156 回执与下一桥

网页端在读取公开基线后给出：

* fixed-`d` sparse formal recursion 具有 weighted-homogeneous 的 universal one-variable
  shape `B_{d,a}(z)=E_d(az^d)`；
* first-failure 层的定义、存在性、`M_d^sharp(a)->infinity` 以及真实 Gauss 节点负值的
  必要条件成立于 formal/finite 层；
* quadratic prefix 的 bulk negative theorem 可以成立，但它不是 all-order completed
  branch 的 A；
* literal edge-escape B 也没有被证明，因为负节点的 pointwise 位置不等于 active
  negative mass 的位置。

网页端因此把下一目标改为 **R157 — Universal Sparse-Shape Partial-Sum / Singularity
Theorem**：研究 `E_d(t)=sum beta_{d,n}t^n` 在 `n` 与 `M` 同阶、以及
`t~sgn(a)(x/sqrt(M))^d tau^(d/2)` 的联合行为，二择一证明全阶 bulk negativity 或
全阶 bulk positivity，再决定是否能进入 Hermite turning/Airy 区域。该回执本身已被
记录，但其中涉及全阶形状的渐近仍标为 `OPEN / WEB-REVIEW`，不可当作定理。

## R157 当前状态（2026-09-09）

R157 已发送到同一网页研究对话；网页端已确认读取公开基线并开始从
`Phi_d(t)=t+even powers` 推出 `E_d(t)=e^t A_d(t^2)` 及其一变量收缩方程，正在继续
分析收敛半径/奇点和 `n~M` 联合尺度。当前仅记为 `WEB-IN-PROGRESS`；等待完整回复
后再做本机逐项审计，不重发、不把中间文本升级为结论。
