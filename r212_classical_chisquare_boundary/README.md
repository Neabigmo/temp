# R212：经典 sample-variance χ² 边界与本项目定位

日期：2026-09-09  
基线：R211，提交 `84e5215`

## 0. 结论先行

对三个 iid、中心化、方差为一的标量变量，令

`C=(X_1+X_2+X_3)/sqrt(3)`,

`Q=sum_i (X_i-Xbar)^2`。

Gaussian law 给出 `Q~chi^2_2`。反向命题“仅由 iid 加
`Q~chi^2_2` 推出 Gaussian”正是经典 sample-variance `chi^2` conjecture 在
`n=3` 的特例。公开文献仍把不加对称性等额外条件的经典问题列为开放问题；
因此本项目目前不能把 `full-SF => Gaussian` 当作已知定理，也不能把它当作
我们已经解决的部分。

本轮的准确总评仍是：原始 Positive Backward-Tower Exact Zero-Set Rigidity
为 `OPEN`；目前独立、完整、可审稿的发表性结果为**无**。R212 是一个重要的
定位审计，不是新的反向定理。

## 1. 与本项目完全对齐的核心统计量

对一般 iid `X_i`，`C` 是样本均值方向，`Q` 是正交残差平方和。Gaussian 情形为

`C~N(0,1)`, `Q~chi^2_2`, `C` 与 `Q` 独立。

本项目的 exact radial/full-SF 接口只直接提供

`Q~chi^2_2`,

或等价的 `E exp(-zQ)=1/(1+2z)`；它不自动提供

`Cov(Q,exp(isC))=0`, `C ⟂ Q`, `E[Q|C]=2`, 或 `E[C|Q]=0`。

R210 已把其中一个关键差别写成精确公式：在局部 zero-free、MGF 与决定性
假设下，

`E[(Q-2)exp(isC)] = -2 phi(s/sqrt(3))^3(1+k''(s/sqrt(3)))`。

因此 mixed covariance 对所有 `s` 为零会闭合 Gaussian；未倾斜的 radial
边缘律只是 `s=0` 的边界资料。R211 又证明，有内部聚点的 common Esscher
tilt 零集也足以由解析恒等定理闭合 Gaussian，但原始条件没有产生这样的
聚点集合。

## 2. 文献边界：哪些加强条件已知能闭合

以下是“额外输入存在时”的已知路线，不能反向视为本项目已有输入：

1. **对称性或 `n=2`。** Ejsmont--Lehner 对经典问题的历史综述明确记载：
   Ruben 的结果在 `n=2` 或母体分布对称时成立；对 `n>=3` 去掉对称性仍是
   未知边界。Ruben 1974 的书目信息见 [Pascal-Francis 记录](https://pascal-francis.inist.fr/vibad/index.php?action=getRecordDetail&idt=PASCAL7630042798)。
2. **两个不同样本量。** 同一综述记载 Ruben 1975 处理了两个不同样本量的
   sample variance 同时为相应 χ² 的情形；这不是本项目固定三点/固定一个
   radial identity 所给出的条件。
3. **无限可分性。** Golikova--Kruglov 给出了带 independent infinitely
   divisible 假设的 partial converse，见 [Kruglov 文章](https://www.tandfonline.com/doi/full/10.1080/07362994.2013.817250)。
   本项目没有证明 backward-OU divisibility 会推出标量 law 的 infinite
   divisibility；二者不能混同。
4. **均值—方差独立或更强的非中心二次型不变性。** 经典 Geary/Lukacs/
   Kawata--Sakamoto 型结论使用的是 `C ⟂ Q`（或等价的更强联合信息），而
   不是只使用 `Q` 的边缘分布；原始论文可见 [Kawata--Sakamoto, JMSJ](https://www.jstage.jst.go.jp/article/jmath1948/1/2/1_2_111/_article/-char/en)。
   更一般的均值与可行定型统计量独立刻画见 [Hu--Lin](https://arxiv.org/abs/2112.06152)。

Ejsmont--Lehner 的公开版本把上述逻辑位置说得很明确：经典 `chi^2`
conjecture 在无这些附加限制时仍是 open，并将对称性、两个样本量和无限
可分性作为不同的部分结果记录在引言中，见 [arXiv:1607.06586](https://arxiv.org/abs/1607.06586)，尤其其引言的历史分层。

## 3. 映射到本项目的证据分层

### 已证明或本机核验（但不是主命题）

- R99--R102：有限变换、Hermite/角向接口及其明确假设下的代数关系。
- R132：在 genuine all-row/full-SF 输入下的 smoothing、tail 与 Carleman 模块。
- R197--R203：固定有限 radial rows 的 exact compensation 与 positive local
  realization；任意固定有限行不能单独消灭小非零 cubic。
- R210：mixed covariance 公式，以及在明确 analytic/MGF/determinacy 假设下
  `Cov(Q,exp(isC))=0` 的 Gaussian closure。
- R211：common Esscher 参数集合有内部聚点且首 Laguerre mode 为零时的
  Gaussian closure。

### 条件、形式或障碍

- R145--R149、R150、R166、R173--R188：依赖 genuine full-exact、解析包络、
  inverse-Hankel 或 mixed-tail 等额外假设的条件链。
- R190--R196、R198--R202：formal/finite-only 的检测阶逃逸与补偿，不能升级
  成 all-row positive law 或反例。
- R209：连续 tilt Gram 的 relaxed wrong-sign obstruction；它不是 iid
  same-factor realization。

### 仍然 OPEN 的不可替代桥

1. bare `RK=1 => full-exact/full-SF`；
2. 原始 spatial `P_3K` 与 Bargmann/MGF/angular charge 的 provenance bridge；
3. genuine primitive inverse-Hankel rank closure；
4. mixed total-degree tightness `(MT_r)`；
5. 从 full-exact positive backward tower 到 tilted/mixed zero，再到最终
   spatial zero-set rigidity 的组合桥。

R212 的新定位是：第 5 项并非普通技术细节，而与经典概率中“sample variance
边缘 χ² 是否足以刻画 Gaussian”的未解核心直接相邻。故若没有从正性与
backward tower 中导出对称性、无限可分性、第二个样本量、均值—方差联合信息或
新的 same-factor mixed identity，就不能调用这些已知定理替代缺口。

## 4. 发表性判断

当前不能诚实地声称已有独立、完整、可投稿的论文主结果：**无**。

最接近可抽取的内容是一个“边界清晰的组合包”，而不是现成论文：

- R203 的 fixed-finite-row non-annihilation/compensation 负面小定理；
- R210 的 residual-marginal versus mixed-covariance 精确接口；
- R211 的 accumulating Esscher-zero conditional rigidity；
- R212 对这些模块与经典 `chi^2` conjecture 的假设边界定位。

其中任一模块若要成为有独立发表意义的结果，还必须补上一个 genuinely new
bridge，或者把它们组织成一个明确的新条件定理并完整核对文献新颖性。R212
本身只负责防止研究叙事越过已有定理边界。

## 5. 下一步（只保留一个最小任务）

研究 backward-OU divisibility 加 positivity 是否能推出下列四者中的任一者：

`(i)` law symmetry；`(ii)` scalar infinite divisibility；`(iii)` a second
sample-size/full-SF identity；`(iv)` a nontrivial mixed identity such as
`Cov(Q,exp(isC))=0` on an interval。

若四者均不能推出，则必须把 `full-SF-to-Gaussian` 明确固定为经典 open-core
接口，停止把 radial rows 或一般 PSD Gram 当作其替代品。

## 6. 证据边界

本文件的文献结论只用于路线定位；本机 `audit_r212.js` 仅核验三点几何、
`chi^2_2` 的基本矩/拉普拉斯标定和文档中的证据标记，不把文献综述当作新数学
证明，也不把任何 relaxed/formal 构造当作 genuine counterexample。
