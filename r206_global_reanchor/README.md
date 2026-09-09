# R206：从“均值频率盲区”回接到 R145–R149 的真正缺口

日期：2026-09-09  
基线：R205，提交 `3ab614a`

## 1. 纠偏结论

R205 的信息投影判断仍然正确：径向 exact identity
`A(0,t)=exp(-t^2/2)` 只直接读取 `T=Q/2` 的边缘分布，不能由此单独得到
`E[C|Q]=0`。但“缺少任何 `s`-dependent 信息”并不准确，因为本仓库早已记录：

- R145：`A(s,t)=E[e^{isC}J_0(tR)]` 的 shifted Bessel–Schur 上界和 Appell
  mixed-cumulant identity；
- R146：tilted Laplace/Laguerre spectrum、positive-source heat inequality 与 OU
  mode scaling；
- R147：dual Laguerre regression、reflection cross-spectrum 和 finite-boundary
  blindness；
- R148：continuum circular boundary 与缺失的 normal derivative；
- R149：reflection decomposition 的 exact nonlinear compensation 与正 quadratic
  source。

因此真正的开放接口不是“能否写出一个 `s`-dependent bound”，而是：

`Q~chi^2_2 + iid scalar factorization`
`       =>? partial_s A(0,t)=0 for every t`
`       <=>? E[C|Q]=0`
`       => Gaussian.`

最后一个蕴含在 neighborhood-MGF/适当矩决定性假设下成立；中间的
full-SF-to-dual-regression 仍未证明。

## 2. 已有不等式为什么还不够

R145 的概率级上界为

`|A(s,t)-phi(s/sqrt(3))^3 exp(-t^2/2)|^2`
` <= (1-|phi(s/sqrt(3))|^6) exp(-t^2)(I_0(t^2)-1).`

它控制 common/residual dependence 的大小，但方向是 Cauchy–Schwarz 上界，
没有把 `partial_s A(0,t)` 压到零。令 `t->0` 只能得到 curvature-defect 上界，
不能得到 mixed regression 的反向符号。

R146 的 tilted transform

`Lambda(a,z)=E[e^{aC-zQ}]/E[e^{aC}]`

满足 `Lambda(0,z)=(1+2z)^(-1)`，且
`-partial_z Lambda(a,0)=2 K''(a/sqrt(3))`。所以目标等价于 `K''=1`，但
complete monotonicity、log-convexity 和 heat-flow source 都只给非负方差/源项，
没有提供 `K''-1` 的单边符号。

R147/R148 把同一事实改写为：

`partial_s A(0,t)=i E[CJ_0(t sqrt(Q))]`,

而 Bessel–Laguerre completeness 又给出

`partial_s A(0,t)=0 (all t)`
` <=> E[C|Q]=0`
` <=> ell_m'(0)=0 (all m>=1)`.

## 3. 当前两条最强路线的比较

### 路线 I：R145–R149 的 continuum regression package

这是目前最接近正向主定理的路线：它已经把 full-SF characterization 压缩为
一个连续的 normal-derivative/conditional-regression 问题，并给出 shifted Schur、
Laguerre、reflection 和 OU transport 的精确接口。主要缺口是证明一个反向不等式，
例如在 full-SF + iid 类中推出

`ell_1(a)ell_1(-a)>=0`

或直接推出 `E[C|Q]=0`。现有正性工具给出的方向相反或不够强。

### 路线 II：R197–R203 的 finite-row escape package

这是目前最清楚的负向方法学结果：固定有限 radial rows 不能单独消灭小非零
`kappa_3`；even-cumulant Jacobian 可逆，且前六行有显式 Hankel-feasible escape。
它排除固定层证明策略，却不否定 all-row rigidity。

两条路线互补而不循环：路线 I 处理真正的 continuum mixed regression，路线 II
说明继续增加有限 radial rows 没有希望替代 continuum argument。

## 4. 严格发表性判断

当前仍应回答：**无（目前没有足够独立、完整、可审稿的发表性结果）**。

最有希望的论文核心应是 R145–R149 的 shifted common–residual regression lemma
package；R197–R203 可作为其中解释 finite-row blindness 的负面补充。要成为独立
成果，至少还需把 full-SF-to-regression 的一个方向性结论真正闭合，并完成原始
`P_3K` 的对象桥接。

## 5. 下一轮唯一任务

不要再研究“是否存在某个 `s`-dependent bound”，而只审查：把 R145 的 shifted
Bessel–Schur 上界、R146 的 tilted Laguerre identity、R147 的 reflection
cross-spectrum 和 R149 的 exact reflection decomposition 联立后，能否推出
`ell_1(a)ell_1(-a)>=0` 或 `K''(a/sqrt(3))=1`；若不能，给出最小合法的
wrong-sign/relaxed witness，并明确它为何不能落入 genuine iid full-SF 类。

证据等级：`PROVED/LOCAL-AUDITED` 的坐标与不等式 + `OPEN` 的反向符号闭合；
不把 R205 或 R145–R149 升格为原始 rigidity。

