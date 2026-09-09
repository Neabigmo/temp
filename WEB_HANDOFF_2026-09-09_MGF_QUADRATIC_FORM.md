# Web handoff — 2026-09-09

## 用途

这是一份给网页端新对话使用的研究交接文档。开始任何新的理论工作前，请先完整阅读本文件，再通过连接读取当前工作区的总纲、工作记录和 Git 状态。

本文件记录的是网页端最近几轮对话形成的候选方向和审稿式判断，不应被当作已经完成的新颖性证明或已经投稿的论文结果。若本文件与当前代码、Git 或后续严格核验冲突，以当前代码和可核验的数学推导为准。

## 当前总判断

原始主问题

> Positive Backward-Tower Exact Zero-Set Rigidity

仍然是 **OPEN**。此前 R101、R133、R166、R186、R217/R218 等工作形成了若干 genuine full-exact 条件下的 lemma/proposition package，但尚未闭合为独立、完整、可审稿的主定理。按严格发表标准，当前整体判断仍为：

> **无（目前没有足够独立、完整、可审稿的发表性结果）。**

网页端最近的对话已经暂时离开 OU backward-tower 主线，转向一个新的概率统计候选。不要把这两个方向混为一个已经完成的项目。

## 最近几轮方向筛选

### 已停止：对称样本方差刻画

候选命题是：iid 母分布关于均值对称，标准化样本离差平方和精确服从 \(\chi^2_{n-1}\)，则母分布为 Gaussian。

网页端最初给出了基于矩递归的短证明，但随后按 novelty 筛选发现该对称情形已有 Ruben 等先例。因此该方向已经停止，不能作为新结果声称。

### 已降级：Gaussian deconvolution / finite Gaussian mixtures

网页端还得到过 Gaussian convolution 的双向不变性：若

\[
X=Y+\sigma Z,\qquad Z\sim N(0,1),\qquad Z\perp Y,
\]

并记 \(Q_X=\sum_i(X_i-\bar X)^2\)，则在适当标准化下，\(Q_X\) 的精确 \(\chi^2\) 性质与 \(Q_Y\) 的对应性质可以双向传递。由此可排除带有原子 residual 或 bounded residual 的非 Gaussian law，也可推出有限 Gaussian location-scale mixture 若满足该性质则必须退化为单个 Gaussian。

这条结果可能是正确的结构性 corollary，但证明短、范围窄，暂不足以支撑预期的较高 JCR/中科院分区，因此只保留为备用内容，不作为当前主线。

## 当前主线：symmetrized MGF dominance 下的二次型刚性

暂定题目：

> **Chi-square quadratic-form rigidity under symmetrized MGF dominance**

### 样本方差版本

先考虑 iid、中心化、方差为一的情形：

\[
EX=0,\qquad EX^2=1,
\]

\[
Q_n=\sum_{i=1}^n(X_i-\bar X)^2\sim\chi^2_{n-1}.
\]

不要求母分布对称，也不要求无限可分性，只要求在原点邻域内

\[
\boxed{M(t)M(-t)\ge e^{t^2}},
\]

其中 \(M(t)=Ee^{tX}\)。等价地，\(X-X'\) 在局部 MGF 意义下不小于同方差 Gaussian 的双边变换。

### 一般投影版本

令 \(P=P^\top=P^2\) 是秩为 \(r\) 的正交投影，\(X_1,\ldots,X_m\) 相互独立、中心化，且

\[
\operatorname{Var}(X_i)=\sigma_i^2,
\qquad Q=X^\top P X\sim\chi_r^2.
\]

对每个活跃坐标 \(P_{ii}>0\)，假设在原点邻域内

\[
\boxed{M_i(t)M_i(-t)\ge e^{\sigma_i^2t^2}}.
\]

候选结论是：每个满足 \(P_{ii}>0\) 的坐标 \(X_i\) 都必须是 Gaussian。这里的“活跃坐标”限制必须保留；若 \(P_{ii}=0\)，该二次型不应自动提供关于 \(X_i\) 的信息。

## 核心证明机制（必须逐行审计）

令 \(H=\operatorname{Ran}P\)，在其单位球面上取均匀向量 \(V\)。由于 \(Q\) 的精确分布与标准 \(r\) 维 Gaussian 半径一致，球面平均给出

\[
\boxed{E_V\prod_i M_i(tV_i)=e^{t^2/2}}.
\]

定义

\[
C_i(s)=\log M_i(s)-\frac{\sigma_i^2s^2}{2},
\]

以及

\[
H_t(V)=\sum_i C_i(tV_i)
 +\frac{t^2}{2}\left(\sum_i\sigma_i^2V_i^2-1\right).
\]

由上面的球面恒等式，

\[
E_V e^{H_t(V)}=1.
\]

因此 Jensen 给出

\[
E_V H_t(V)\le 0.
\]

另一方面，\(V_i\overset d=-V_i\)，且 MGF dominance 给出

\[
\frac12\left[log M_i(s)+\log M_i(-s)-\sigma_i^2s^2\right]\ge0.
\]

又由 \(Q\sim\chi_r^2\) 得

\[
\operatorname{tr}(P\operatorname{diag}(\sigma_i^2))=r,
\]

所以二次修正项的球面平均为零，从而

\[
0\le E_V H_t(V)\le0.
\]

所有不等式必须取等号。对于每个活跃坐标，应进一步利用 \(V_i\) 在非退化区间上具有连续支持，得到

\[
M_i(s)M_i(-s)=e^{\sigma_i^2s^2}
\]

在原点邻域成立。因此

\[
X_i-X_i'\sim N(0,2\sigma_i^2).
\]

由于 \(X_i\) 与 \(-X_i'\) 独立，Lévy–Cramér 分解定理推出 \(X_i\) 本身 Gaussian。

网页端认为这条机制的概念核心是：

\[
\boxed{
\text{exact radial law}
+\text{spherical averaging}
+\text{Jensen equality}
+\text{one-sided symmetrized MGF order}
\Longrightarrow
\text{Gaussian rigidity}.
}
\]

但该证明仍必须检查：MGF 的共同定义域、球面平均与 Fubini/积分交换、活跃坐标的支持、退化投影、方差归一化，以及从局部 MGF 等式调用 Lévy–Cramér 的条件。

## 为什么它可能比无限可分性更有意义

在指数矩存在的适当条件下，无限可分性可由 Lévy–Khintchine 公式推出上述 dominance：

\[
K(t)+K(-t)-\operatorname{Var}(X)t^2
=2\int\left(\cosh(tx)-1-\frac{t^2x^2}{2}\right)\nu(dx)\ge0.
\]

因此

\[
\text{infinitely divisible}\Longrightarrow\text{symmetrized MGF dominance}.
\]

网页端还给出一个方向性检查：取对称密度

\[
f_Z(z)=\frac{|z|}{2}e^{-|z|},
\]

其特征函数有零点，因而不是无限可分；再令

\[
Y=Z+c(N-\lambda),
\qquad N\sim\operatorname{Poisson}(\lambda),
\]

则可以得到 asymmetric、non-infinitely-divisible 且偶 cumulant remainder 非负的例子。这个例子必须重新逐行验证，不能仅凭网页端的概述就写成论文事实。

## 当前发表性状态

当前不能写“已经发现新定理”或“可以投稿”。更准确的状态是：

- 数学机制看起来有潜力，且可能严格弱于无限可分性；
- 一般投影版本比单纯 sample-variance corollary 更有结构意义；
- 当前尚未完成直接先例排查；
- 尚未完成 sharpness/boundary 研究；
- 尚未证明该条件不是已有定理的重新表述；
- 尚未进入期刊选择、模板下载或正式论文写作阶段。

## 新对话的唯一优先任务：先杀 novelty / sharpness 风险

请网页端不要直接写论文，也不要先选期刊。按以下顺序工作：

1. 通过连接读取本文件、`THEORY_ROUTE_FRAMEWORK.md`、最新工作记录和 Git；明确区分网页候选与本机已经提交的旧 OU 路线。
2. 对 Golikova–Kruglov 的全文和相关 sample-variance characterization 文献逐行核对：他们是否已经证明了该 MGF inequality，或者其证明只隐含使用了同一不等式。
3. 系统检查 1960—1990 年代 quadratic-form characterization、normal quadratic forms、independent coordinates、projection converse 相关文献，尤其警惕已有定理只差表述方式的情况。
4. 将一般投影定理写成精确版本，补齐局部 MGF 域、活跃坐标、秩、归一化、退化情形、Fubini/Jensen 等所有假设，并进行反例式审计。
5. 验证 dominance 严格弱于 infinite divisibility：给出完整、可检查的 asymmetric non-ID 例子，或明确承认该例子尚未成立。
6. 研究 sharpness：去掉 dominance、减弱为有限阶偶 cumulant 条件或仅保留 radial law 时，是否能构造边界反例；若不能，说明需要证明哪些最优性命题。

## 网页端必须返回的结果格式

请给出一份审稿人式报告，至少包含：

- 精确 theorem statement；
- 逐行 proof audit；
- 与已有文献的直接对照表；
- 该条件相对 infinite divisibility 的真实强弱关系；
- sharpness 或边界反例；
- 结论是“新且值得继续”“已有先例”“正确但过于显然/过窄”还是“证明有漏洞”；
- 若仍值得继续，只提出一个最小下一任务。

在上述审计通过前，不要把方向升级为正式论文项目，也不要宣称高分区投稿可行。

## 本机同步状态

本机 Git 工作区目前仍主要记录旧的 OU backward-tower 研究线，最新已知提交为 R218（first-odd genuine cross-witness）。本文件是把网页端新候选正式交接给网页端的第一份记录；后续若新方向通过审计，再单独建立清晰的研究分支和工作记录，避免覆盖旧路线或混淆证据等级。
