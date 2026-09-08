# R158 — 全局理论脉络与发表性审计框架

日期：2026-09-09

## 1. 原始目标与逻辑链

原始目标是 `Positive Backward-Tower Exact Zero-Set Rigidity`：在固定
`q in (0,1)` 下，把 exact zero defect、same-factor cubic map、positivity 和
OU backward divisibility 同时施加到一个兼容的非 Gaussian backward tower，最终
判断这种 tower 是否只能退化为 Gaussian，或是否能排除 `P_3 K != 0` 的极限。

目前最清楚的依赖链是：

```text
exact zero defect
        |
        v
same-factor cubic / escort identity
        |
        +--> posterior / residual-Fisher / reverse-curvature identities
        |
        +--> Hermite-Fock / Bochner / Hankel-Gram necessary conditions
                              |
                              v
        positivity + OU backward divisibility + all-row compatibility
                              |
                              v
        infinite-tower rigidity or non-Gaussian obstruction
                              |
                              v
        spatial P_3 K bridge and the original zero-set conclusion
```

这张图中，Hermite/Fock/Gram 是强有力的代理问题：它们给出必要条件、有限截面
和可计算障碍，但不能单独替代 genuine positive law。`RK=1` 到 genuine
full-SF/all-row、formal sparse branch 到真正非负密度、以及 ordinary/Bargmann
到 spatial `P_3 K` 的桥，均不能默认为成立。

## 2. 当前证据分层

| 路线 | 当前最强等级 | 精确内容 | 不能推出 |
|---|---|---|---|
| R8–R10 | `PROVED UNDER MODEL` | posterior/escort/residual-Fisher 恒等式与反向曲率证书 | 不能单独给出全局 rigidity |
| R11 | `PROVED` | compatible arbitrary-depth tower 的 no-go | 不排除 moving-top、互不兼容的 tower |
| R132 | `PROVED UNDER GENUINE ALL-ROW` | `Q~chi^2_2`、square-exponential、OU smoothing 相关结论 | `RK=1` 单独不能直接套用 |
| R133 | `PROVED UNDER SF` | first odd Jacobi packet | 没有 uniform rigidity gap |
| R136 | `FORMAL + LOCAL-AUDITED` | odd input 只生成 even sparse completion，有限阶 triangular recursion | formal cumulants 不是 genuine law |
| R137 | `PROVED`（固定 d 的形式/Hankel问题） | `rho_M(d)->0`、first failure 随小振幅逃向高阶 | 没有 first-failure rate 或 spatial结论 |
| R138–R146 | `PROVED / LOCAL-AUDITED UNDER HYPOTHESES` | zero-divisor、shell、coherent、bispectrum、regression、Laguerre 等局部包 | 不能自动闭合 classical characterization |
| R147–R150 | `PROVED/LOCAL-AUDITED + OBSTRUCTION` | dual regression、reflection defect、nonlinear odd-to-even compensation、fixed-d Hankel resummation | quadratic/finite rescue 不是 completed branch 结论 |
| R151–R156 | `PROVED/CONDITIONAL/LOCAL-AUDITED` | critical Hermite shape、Toeplitz/Gram、full-section criterion、Christoffel localization、有限 bulk model | 不决定 completed branch 的全阶 sign/edge profile |
| R157 | `WEB-DRAFT + LOCAL-AUDITED ARITHMETIC + CONDITIONAL` | 正 majorant、候选统一解析半径、低能区 completed-formal 正性、first-failure lower rate | 尚非独立完整定理，不能推出 genuine law、全 tau 或 literal edge B |
| 原始命题 | `OPEN` | positive backward-tower exact zero-set rigidity | 目前没有反例，也没有完整证明 |

## 3. 最接近独立成文的三个模块

### R147–R150：反射/补偿与 Hankel resummation

技术价值明确：它解释了为什么 first odd packet 的负尾不能直接推出 full-SF
失败，并把 nonlinear odd-to-even compensation 组织成可复用的 fixed-d 结构。
当前不足是没有把 resummed completed shape 在临界 `n~M` 区域的符号闭合，且与
原始 genuine positive realization 之间仍有空档。

判断：有独立数学价值，但目前不足以作为完整可投稿结果。

### R151–R156：临界 Hermite/Gram/quadrature

技术价值也明确：有限 Gram 的 exact quadrature、负节点与负特征值的区别、以及
Christoffel/集中质量证书都已形成清楚的接口。`negative node != Gram failure`
是已经被有限计算核验的逻辑边界；quadratic prefix 的 bulk failure 也已被核验。

判断：可作为论文中的方法章节或条件性 package，但 completed branch 的 A/B 仍未闭合，
因此目前不能单独宣称发表定理。

### R157：universal sparse-shape majorant 候选

在 full-SF 一变量 reduction 作为形式前提时，网页端提出

`D(s)B(s)^3 - 6B(s) + 5 = 0`,

`D(s)=3cosh(sqrt(s))-2`,

`T*=arcosh(82/75)=0.428757663860...`，

并据此给出 `R(E_d)>=T*`、低能区 completed-formal bulk positivity 和

`liminf_{a->0}|a|^(2/d)M_d^sharp(a) >= e^(-1/4)T*^(2/d)/8`。

本机已核对 majorant 代数到 `s^6`、d=5 已知 `a_n` 的支配到 `s^3`、奇数 d
几何/Hölder 指数 bookkeeping、Hermite 逐项上界和所有常数；d=5 安全常数为
`0.069377900139...`。这些核验支持“链条自洽”，但仍只把它放在
`LOCAL-AUDITED ARITHMETIC / CONDITIONAL`，没有升级成无条件 `PROVED`。

判断：这是目前最接近独立论文定理模块的候选，数学内容比单纯有限阶扫描强；当前
仍不足以声称完整可审稿成果。

## 4. R157 条件性定理的准确边界

在以下前提下：

1. sparse full-SF triangular completion 对固定 odd `d>=5` 确实给出
   `E_d(t)=e^t A_d(t^2)`；
2. 其形式方程确为
   `<cosh(sqrt(s)p_d) product_j A_d(sq_j)>=1`；
3. formal coefficients 与目标 finite Hermite section 的归一化一致；

网页端 majorant 论证可整理为以下候选结论：

`|a_{d,n}|<=b_n`，其中 `B=1+sum b_ns^n` 是上述方程在 `B(0)=1` 分支的正
形式解；其正实奇点满足 `B*=5/4`、`D(s*)=32/25`，故 `s*=T*^2`。于是
`E_d` 在 `|t|<T*` 内解析且无零点；若 `lambda M<=tau` 且
`A^d exp(d tau/A^2)<T*`，则 completed truncated Hermite density 在
`|y|<=A` 上统一逼近 `E_d(sign(a)y^d)` 并最终为正。结合
`|x_{j,M}|<2sqrt(2M+1)`，可得到安全的 first-failure 下界速率。

这应标为 `WEB-DRAFT / CONDITIONAL`，因为上述三项前提及其与原始对象的对应关系
尚未由本机独立逐行闭合。

在 majorant 本身内部，平方根大阶律已经不只是数值拟合：判别式方程强制
`B*=5/4`、`D(s*)=32/25`；方程 `cosh(sqrt(s))=82/75` 的解表明
`s*=T*^2` 是最近的有限分支奇点。标准隐函数展开和系数转移因此给出
`b_n ~ K/(2sqrt(pi))s*^(-n)n^(-3/2)`。这仍只是上包络结果，不能转成真实
`A_d` 系数的匹配下界。

## 5. 尚未闭合的最小缺口

最小缺口不是再算更多低阶系数，而是完成一条可审计的接口证明：

```text
full-SF sparse completion
  -> universal one-variable equation (all orders)
  -> coefficient majorant and analytic completed shape
  -> finite Hermite density with the stated normalization
  -> one explicit conclusion about first failure
```

随后才有资格研究所有 `tau` 的 sign、active negative mass、turning/Airy 区域以及
literal edge escape。最后仍必须补上 formal-to-genuine-law、`RK=1` 到 all-row 和
spatial `P_3 K` 三座桥。

## 6. 诚实的发表性结论

目前这些工作具有真实的技术价值，并且 R157 已出现一个值得整理的定理模块候选；
但由于依赖链尚未全部独立闭合，当前仍不能声称有足够独立、完整、可审稿的发表
成果。因此整体结论是：

**无（目前没有足够独立、完整、可审稿的发表性结果）**。

## 10. R166：重新校准 varying-bottom 的最小问题（2026-09-09）

在 genuine full-exact、`L^2`、前向 OU 闭包和 `P_3K` OU 协变假设下，本机新增
`r166_varying_bottom_reduction/README.md`：原始 varying-bottom 非零 charge 塔
的存在，与存在一个 `P_3K` 非零 genuine exact 单律等价。构造为
`g_N^(j)=P_(q^(N-j))h`，并有 `L^2` 收敛与非零解析 germ 的严格缩放证明。

该化简同时显示，若非对称单律存在，R101 的未归一化 `tau_ang` 会按 OU 参数线性
塌缩；故“uniform primitive charge noncollapse”若不作 OU-invariant 归一化，不是
可独立成立的较弱桥。真正的单一主问题应回到排除 `P_3K` 非零 genuine exact law，
或构造满足 one-body factorization 的 genuine obstruction。此模块不构造反例，
也不把 genuine 结论转移到 bare scalar `RK=1`。

## 7. 下一轮唯一任务

只做 **R158-A：把 R157 majorant 写成条件性定理并逐行闭合其接口**。网页端需要
完成前提、量词、归一化、`s` 与 `t` 半径转换、Hermite 截断和 first-failure
下界的完整证明；本机只核验对应精确系数、常数、有限截断残差和任何新出现的
关键不等式。若其中任一环节失败，必须给出修正版，而不是继续扩展有限低阶扫描。

## 8. R162–R163 更新：全局状态与 formal-interface 的进一步闭合（2026-09-09）

在网页端 R162/R163 尚未产生 assistant 理论正文期间，本机把 R158-A 的中间步骤
进一步写成了可独立引用的条件性 lemma。明确假设 `q_i>=0`、`h_n>0`、总次数为
`n` 的混合矩满足 Hölder 上界，以及 odd-`d` 几何给出的
`|p_d|^(2m)<=sum_i q_i^m` 后，universal equation 的当前系数 pivot 严格为
`3h_n`；去掉 `m=0` 的三个当前 linear terms 后，归纳得到

`|a_(d,n)|<=b_n`,
`6b_n=[s^n]((3cosh(sqrt(s))-2)B(s)^3)`。

odd-`d` 的几何步骤由 `r_1+r_2+r_3=0` 重排为 `a,b,-(a+b)` 直接证明，Hölder
的指数总和为 `n`。因此，“formal universal equation -> positive majorant”这一
局部接口已比此前更明确；但它仍是 `CONDITIONAL / FORMAL-INTERFACE`，因为
full-SF 全阶 reduction、Hermite 同归一化、formal-to-genuine-law 和首失效桥
仍未由原始对象独立给出。

本机 `d=5` 周期谱探针到 `n=200` 只属于 `FINITE-ONLY / EXPLORATORY`；它不能
推出实际收敛半径、奇点或全阶交替符号。最新记录已提交为 `9fb488f`，并同步到
`main` 与 `theory/r129-active`。整体发表性判断保持：

**无（目前没有足够独立、完整、可审稿的发表性结果）**。

网页端恢复后的唯一任务仍是：逐行审查上述 formal-interface lemma，并在每一条
前提无法从原始对象推出时给出最小缺口；不要以网页无回执或有限数值替代证明。

## 9. 回到原始主轴：genuine 高 Hermite/角向 Herglotz 锥（2026-09-09）

为避免把 R158-A 的 scalar majorant 当成主命题本身，需要重新把 R99–R102 的
genuine backward-cone 结果放回全局路线。对 genuine full-exact 三拷贝 law `mu`，
定义角向 Fourier charge `nu_r`、密度 `chi_r` 及 Hermite 系数 `beta_(m,r)`。
正性给出点态 Toeplitz/Herglotz 锥；若 `mu=P_t nu` 且两者都属于 genuine
full-exact 类，则 OU intertwining 与 Parseval 严格给出

`sum_(m>=3|r|, m congruent r (mod 2)) t^(-m)|beta_(m,r)(mu)|^2 <= 1`.

这是真正作用于 backward preimage 的全阶高 Hermite 系数预算，不是 relaxed
Hankel ghost 或有限形式递推。对 `r=1`，若 `d` 是第一个非零奇 Hermite 阶，
则 `beta_(d,1)=Lambda_d a_d` 且 `Lambda_d>0`；因此任意固定 asymmetric genuine
base 都有严格正的最小可逆 OU 参数/最大 backward 深度。R100 的
`F_m(t;g)>0` 与 skew–kurtosis 唯一根证书是这个全阶锥的低阶投影。

这条线比 R158-A 更直接地触及原始 positive backward-tower：若能证明 primitive
angular charge 在 `g^(0)->1` 的归一化下不塌缩，便可直接排除任意深 tower。当前
不能偷换的是：`P_3K`（log-cumulant/spatial charge）与 `chi_1` 的零集等价需要
genuine full-exact、解析性和 moment-determinacy；其**定量非退化下界**仍 OPEN，
且 varying-bottom sequence 允许各自的 charge budget 趋向零。故这条线给出了比
scalar majorant 更贴近主命题的最小 OPEN：

`P_3K(g^(0)) != 0  ->  a normalized primitive angular charge lower bound`

或一个满足全部已知 exact/positive 约束的 charge-collapse obstruction。R99–R102
的已闭合公式可以写入论文的 genuine necessary-condition 部分；它们仍不能单独
推出最终 rigidity。整体发表性结论保持：

**无（目前没有足够独立、完整、可审稿的发表性结果）**。
