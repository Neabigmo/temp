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
