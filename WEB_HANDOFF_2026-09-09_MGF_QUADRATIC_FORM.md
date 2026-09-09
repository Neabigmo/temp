# Web handoff — 2026-09-09

## 用途

这是一份给网页端新对话使用的研究交接文档。开始任何新的理论工作前，请先阅读本仓库的 `C2C_WEB_INTERACTION.md` 了解网页端读取/发送规范，再完整阅读本文件，随后通过连接读取当前工作区的总纲、工作记录和 Git 状态。

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

## 2026-09-10 稳定性回合：当前可信收束

网页端已完成 rank-one 的第一轮 quantitative stability 审计。应把结论严格
分成两层：

1. **Transform stability：已闭合。** 在 `Q=X^2`、方差归一化和局部
   `M(t)M(-t)>=exp(t^2)` 下，径向局部 Laplace 距离 `epsilon` 给出局部
   MGF 距离 `epsilon+sqrt(2epsilon+epsilon^2)`，并控制 Jensen gap 与
   对称化 MGF defect。
2. **Classical-distance stability：原命题为假。** 网页端的 `Y=S|G|`
   加稀有 Poisson 跳跃构造说明，即使 `Q_n` 在 TV 中趋于 `chi^2_1`，
   每个 `X_n` 仍可满足固定邻域的 dominance，却在 TV 中趋于固定非
   Gaussian `Y`；同一尾部还使 `E exp(H)` 与 Jensen gap 发散。缺失的是
   uniform exponential integrability/transform tightness。

因此不能写成“近似 `chi^2` 加 dominance 推出近似 Gaussian”。在统一指数
包络下，TV 可先被转成径向 Laplace 控制，再获得局部 MGF 稳定性；从此处
到 TV/Wasserstein 仍须独立接入 quantitative Cramér 理论。

一般 PSD 目前已闭合的仅是 integrated spherical defect bound；sample-variance
的下一个具体关卡是：在统一指数包络及明确解析/导数控制下，把球面加权
`L^1` 缺陷反演为 `D(s)` 的 pointwise bound，或给出仍不充分的最小反例。
本轮本机复核与证据分层见 `r219_mgf_stability_audit/README.md`。这不改变
原始 OU backward-tower 主问题仍为 `OPEN`，也不构成新颖性或高分区投稿认证。

## 2026-09-10 第二稳定性回合：sample-variance 点态反演已闭合

网页端给出了从
`n E D(tau*sqrt((n-1)/n)*V_1)<=log(1+epsilon)` 到内部
`sup_{|s|<=tau'}D(s)` 的显式 tent 界；本机检查确认应使用
`q=sqrt((n-1)/n)`、`a=tau*q`，而不是重复乘一次 `q`。精确常数和 `n=3`
密度、Lipschitz、边界限制记录在 `r219_mgf_stability_audit/README.md`
的 `MGF-QS-02`。

本机审计同时发现网页端 tent 反解中的一个常数方向错误：由
`eta >= 2*m_h*I` 应取 `y=eta/(2*m_h)`，不能取 `2*m_h*eta`。阶数与结构不变，
但项目记录以分母版本为准；后续推导不得沿用网页端未校正的常数。

因此当前链条是：

`radial transform discrepancy -> integrated spherical defect -> interior pointwise D -> local symmetrized-MGF stability`.

下一轮必须直接审查 quantitative Cramer/deconvolution 接口：在统一
`E exp(2*tau*|X|)<=K` 下，明确从
`sup_{|s|<=tau'}|log M_{X-X'}(s)-s^2|<=delta`
能够推出的最强、可证明的分布距离；不得把 qualitative Levy--Cramer 当作
定量结论，也不得声称 TV/Wasserstein 率已完成。整体论文仍为候选研究包，
novelty 未认证，旧 OU 主线继续独立 `OPEN`。

## 2026-09-10 第三稳定性回合：Kolmogorov 阶段的严格分层

网页端按本机审计修正了上一轮的解析延拓公式。应统一
`Delta=2*delta`，并取
`A=exp(rho^2)(exp(Delta)-1)`、`B=K^2+exp(rho^2)`、
`L=log(B/A)`、`T=(2*rho/pi)log(L/log L)`、`H=B/L`、
`C4=K/(8*tau^4)+3/4`、`r=min(T/2,(H/C4)^(1/4))`。条带最大值原理的
参数为 `alpha=pi/(2*rho)`，由此得到

`eta_Delta=C4*r^4/(2*pi)+(2H/pi)log(T/r)+12/(pi^(3/2)T)`

作为 `d_K(L(X-X'),N(0,2))` 的显式界，阶为
`O(1/log log(1/Delta))`。这一阶段已本机核验。

从 `X+(-X')` 到 `X` 的 Kolmogorov 界仍依赖 Sapogov 定量 Cramer 定理；
其绝对常数尚未数值追踪。因此当前正确表述是：Kolmogorov stability 在
引用该经典定理后成立，Y 阶段完全显式，整条链不是完全自包含。标准化
Poisson 格点族已严格排除 TV 模量。下一轮转攻反射结构的 phase recovery
与 rate improvement；若不能改善，则整理现有弱距离结果，不提前写论文。

## 2026-09-10 第四稳定性回合：Poisson 反射障碍

标准化 Poisson `X_m=(N_m-m)/sqrt(m)` 给出严格下界：若
`Delta_m=sup_{|s|<=rho}(log M_{X_m-X_m'}(s)-s^2)`，则
`rho^4/(12m)<=Delta_m<=rho^4*cosh(rho)/(12m)`，同时
`d_K(X_m,N)>=e^(-1/12)/(2sqrt(2*pi*m))`。所以任何固定 EI 类上的
reflection-specific 模量都不能是 `o(sqrt(Delta))`，但三重对数是否可改善、
是否存在任意幂率仍未解决。TV 已被同族排除，Kolmogorov 未被排除。

当前不应开始正式论文：X 阶段仍依赖 Sapogov 定量 Cramer，且反射结构的最优
速率未知。下一轮交给网页端的唯一任务是验证高频 odd-density 扰动加微小
对称补偿能否形成非幂率 sharpness family；若成功，才足以显著抬高论文的
stability 部分。

## 2026-09-10 第五稳定性回合：高频 odd 扰动的非幂率障碍已通过审计

候选族
`f_n=phi*(1+epsilon*(sin(n*x)-c_n*sin(x)))`、
`c_n=n*exp(-(n^2-1)/2)`，配合独立 Skellam 变量并按
`lambda_n=(2*epsilon^2/3)*exp(-n^2)*(n^3+n)^2*rho^2` 标准化，已完成
逐式检查。它满足均值零、方差一、固定指数包络和
`R_n(s)=log M_{W_n}(s)+log M_{W_n}(-s)-s^2>=0`。

本机核验使用的关键式为
`R_n(s)>=(epsilon^2/18)*exp(-n^2)*(n^3+n)^2*v^4*(rho^2-v^2)`，
`v=s/sqrt(1+lambda_n)`；上界为
`R_n(s)<= (epsilon^2/18)*exp(-n^2)*(n^3+n)^2*rho^6*cosh(rho)`。
在 `s=rho/2` 处对充分大 `n` 有相应正下界，故
`Delta_n=Theta_{rho,epsilon}(n^6*exp(-n^2))`。高斯半轴振荡积分给出
`|F_{X_n}(0)-1/2|>=c(epsilon)/n`，而 `P(J_n!=0)<=lambda_n=o(1/n)`，
所以 `d_K(W_n,N)>=c(epsilon)/n`。该族从而排除统一正幂率和
`o(1/sqrt(log(1/Delta)))` 模量。

证据状态：本构造为 `PROVED / LOCAL-PROOF-AUDIT`，数值仅辅助；但这不等于
三重对数上界最优，也未提供匹配的单对数平方根上界。继续工作前网页端必须
尝试：在同一固定 `tau,rho,K` 假设下证明
`d_K(X,N)<=C/sqrt(log(1/Delta))`，或者构造严格慢于该尺度的合法族；若两者
都做不到，再判断现有“无正幂率 + 明确下障碍 + 三重对数上界”是否已经形成
可独立发表的结果，但不得省略 Sapogov 常数、反射相位损失和假设边界审计。

## 下一轮网页端任务：优先审查消失矩 Laguerre 候选

不要先重复高频正弦族，也不要默认单对数平方根上界正确。请优先核验本机提出的
`p_m=x exp(-x^2)L_m^(1/2)(3x^2/2)`、`h_m=p_m/sup|p_m|` 奇扰动：前 `m`
个奇矩消失，但半轴积分等于常数乘 `(1/2)_m/m!`，预期为 `Theta(m^(-1/2))`。
用 Taylor 余项和独立 Skellam 补偿，检查能否得到
`log(1/Delta_m)=2m log m+O(m)` 与 `d_K>=c/sqrt(m)`，即
`d_K>=c sqrt(loglog(1/Delta)/log(1/Delta))`。

网页端必须逐项判断：Laguerre 一致界是否适用；`f_m` 的正性、均值方差和固定
指数包络；Skellam dominance 的逐点上下界；补偿对 CDF 下界的影响。若该族成立，
请明确宣布单对数平方根上界不可能，并把下一目标改为修正后的最优模量；若失败，
指出精确失败行并回到 reflection-specific 上界。只给一个最小可执行结论，勿重复综述。
