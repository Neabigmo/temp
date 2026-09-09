# R210：残差边缘律与 mixed covariance 刻画的严格分界

日期：2026-09-09  
基线：R209，提交 `ebda505`

## 0. 全局校正

经典正态刻画使用的是样本均值与样本方差的独立性，或其较弱的 Fourier
形式

`Cov(Q, exp(i s C))=0`  对所有 `s`,

而不是单独的边缘律 `Q~chi^2_2`。本轮把这两类信息的差别写成精确公式，
并确认当前主问题真正缺的是 mixed covariance 的消失，而不是更多径向
moments。

这里

`C=(X_1+X_2+X_3)/sqrt(3)`,
`Q=sum_j(X_j-Xbar)^2`,
`x=s/sqrt(3)`,

且 `phi(x)=E exp(i x X)`、`k=log phi` 在零点邻域定义。

## 1. 精确 mixed covariance 公式

直接展开 `Q=sum_j X_j^2-(sum_j X_j)^2/3`，得到

`E[(Q-2) exp(i s C)]`
` = -2 phi(x) [phi(x)^2+phi(x)phi''(x)-phi'(x)^2]`
` = -2 phi(x)^3 [1+k''(x)]`.                         (1)

因此在 characteristic-log 记号下，

`Cov(Q, exp(i s C))=0`
` <=> 1+k''(x)=0`

在一个 zero-free neighborhood 内成立。若标量 law 具有 neighborhood MGF，
这给出 `K''(t)=1`，从而 `K(t)=t^2/2`，最后由矩决定性得到标准 Gaussian。

这正是 R145/R146/R207 中的 constant-regression / first Laguerre mode
接口；它是一个真正的 sufficient closure，但其前提是 mixed covariance
已经为零。

## 2. 当前 full-SF 只给了什么

genuine full-SF/all-row 假设给出

`Q~chi^2_2`,

等价于

`E exp(-z Q)=1/(1+2z)`  对所有 `z>=0`.

这是 `s=0` 的 residual boundary。它没有给出

`E[exp(i s C)(Q-2)]=0`,

也没有给出 `E[Q|C]=2` 或 `E[C|Q]=0`。R145--R149 的 shifted/tilted
inequalities 能控制 mixed dependence 的大小或正能量，但目前没有产生
(1) 所需的反向零符号。

因此下列蕴含仍必须分开写：

`Q~chi^2_2 + iid`  `not known to imply`  `Cov(Q,exp(i s C))=0`;

而

`Cov(Q,exp(i s C))=0 for all s + MGF`  `=>`  `Gaussian`

是已闭合的 conditional characterization。

## 3. 与已有正态刻画文献的关系

Ait Aoudia--Marchand--Perron 的综述性报告把经典结论表述为：样本均值与样本
方差的独立性刻画正态；其 Fourier 形式正是
`Cov(S^2,exp(i t Xbar))=0`，并导致 cumulant generating function 的
二阶导数恒定。该已知刻画支持本记录的公式方向，但不替代本项目的核心
open implication，因为它假设 mixed independence/covariance，而不是只假设
`Q` 的 marginal chi-square law。

参考：
`https://www.usherbrooke.ca/mathematiques/fileadmin/sites/mathematiques/documents/Recherche/Publications/Rapports_de_recherche/rr103.pdf`

## 4. 证据分级与下一步

### `PROVED / LOCAL-AUDITED`

1. 公式 (1) 及其 `Cov=0 => Gaussian` 的条件性闭合；
2. `Q~chi^2_2` 只是 zero-common-frequency marginal boundary；
3. mixed covariance 与 residual marginal 的信息层级不同。

### `CONDITIONAL / KNOWN CHARACTERIZATION`

若能从 genuine iid full-SF same-factor structure 推出
`Cov(Q,exp(i s C))=0`，则 Gaussian rigidity follows under the stated MGF
and determinacy hypotheses。

### `OPEN`

如何由 `Q~chi^2_2`、one-body factorization、positivity 以及 backward
divisibility 得到这个 mixed covariance zero；以及如何从 bare `RK=1` 恢复
`Q~chi^2_2`。原始 spatial `P_3K` charge 的 provenance bridge 仍独立开放。

整体发表性仍诚实为：**无**。R210 的价值是把我们的 open interface 与
经典 normal-characterization interface 精确对齐，防止把后者的假设偷换成
本项目已有的 marginal radial identity。

下一轮唯一任务：只研究 genuine same-factor product identity 能否推出
`Cov(Q,exp(i s C))=0` 的任一非平凡局部/全局片段；若不能，记录其最小
反例机制，但不得把一般 `(C,Q)` relaxed witness 当成 iid full-SF law。

