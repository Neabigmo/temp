# R204：全局脉络、证据分层与发表性审计

日期：2026-09-09  
基线：R203，提交 `d2bbde9`

## 0. 结论先行

原始命题

> 固定 `q∈(0,1)`，正的、中心化方差一的 backward-OU tower 满足每一层
> `RK=1`、底层趋于 Gaussian，但底层三阶 charge 非零，是否不可能？

仍然是 **OPEN**。

截至 R203，独立、完整、可审稿且足以直接作为一篇论文主结果的成果，诚实判断仍是：

> **无（目前没有足够独立、完整、可审稿的发表性结果）。**

这不是说项目只有试算。我们已经得到一组可逐项核验的 exact identities、正性障碍、
条件定理和形式 no-go；但它们尚未跨过“genuine positive + all rows + same-factor +
backward tower + 原始 `P_3K` 对象”这条最后的组合桥。

## 1. 全局逻辑图

```mermaid
flowchart TD
  A[原始目标：positive backward-OU tower\nRK=1, bottom→Gaussian, P3K≠0] --> B[RK=1 是否推出 full-exact？]
  B -->|未闭合| C[需 genuine all-row exact identity]
  C --> D[正性/特征函数/Bochner 与 same-factor product]
  D --> E[primitive inverse-Hankel rank closure]
  D --> F[混合 sector total-tail (MT_r)]
  E --> G[charge survives?]
  F --> G
  G --> H[backward tower + bottom limit]
  H --> I[原始 spatial P3K bridge]
  I --> J[最终 rigidity]
  K[有限行 IFT：R197-R203] -.不能替代.-> C
  L[formal radial jet：R190-R192] -.不能替代.-> D
  M[conditional full-SF walls：R173-R188] -.依赖假设.-> G
```

图中的虚线模块不是废料，而是为了精确说明当前证据能推进到哪一层，不能把有限层
或形式层偷换成原始命题的结论。

## 2. 已经得到的结果：按证据等级

### A. `PROVED` / `LOCAL-AUDITED`

1. **正性与 Hermite/Laguerre 结构的有限层恒等式。** R99–R102 建立了
   Hermite-Gram、angular Herglotz/Parseval、log-MGF/OU covariance 等可核验的
   变换接口；它们分别约束不同 charge，不能互相代名。

2. **genuine all-row smoothing 模块。** R132 在 genuine all-row exact 输入下给出
   `Q~χ²₂`、Carleman/tail 控制和
   `||P_t h-1||₂≤8t^(3/2)`（`t≤1/2`）等结果。这是闭合的技术模块，
   但输入不是由 bare `RK=1` 自动得到的。

3. **固定有限行的精确代数。** R197–R203 给出：对
   `F_s=E Q^s-2^s s!`，
   `∂F_s/∂κ_(2s)=3(2/3)^s≠0`，且 `F_s` 不含更高偶累积量。
   因而固定 `M` 时，偶累积量 Jacobian 下三角可逆；奇累积量可作为参数进行
   局部补偿。R198–R202 对前六行和 Hankel 正定性作了显式审计。

4. **固定 finite-row 不能单独消灭 cubic。** R197 的 genuine positive smooth
   realization 加 R203 的 IFT 结构，严格支持如下有限层结论：对任意固定有限行数
   `M`，存在局部 genuine positive same-factor iid law，具有非零小 `κ₃`，而
   `F_2=...=F_M=0`。这排除了“找到一个固定行/固定有限 determinant 就完成
   cubic rigidity”的路线。

5. **有限 Hankel obstruction 的精确边界。** R199 给出
   `det H_2=2-c²`、
   `det H_3=6(2-5c²-c⁴)`，从而排除一段较大的 `|c|`；R200–R202 又严格显示
   小 `c` 可通过新的 odd cumulants 继续逃逸到更高有限 block。于是有限正性检查
   既有真实排除区，也有明确的检测阶逃逸区。

### B. `PROVED UNDER STATED HYPOTHESES` / `CONDITIONAL`

1. **full-exact + full-SF 条件链。** 在明确假设 genuine all-row exact、足够的
   square-exponential/Hadamard 控制、以及相应解析零点或 Fourier factorization
   成立时，R169–R178、R181–R184 给出 odd charge wall、cross-harmonic wall、
   高 odd tail 与有限 shell 的必要条件。它们是真正的条件性定理，不是 bare
   `RK=1` 的定理。

2. **R150 replenishment 接口。** 固定首个 odd coefficient 非零时，高阶 odd
   coefficient 必须在有限窗口中出现；但 `d→∞` 与 `a→0` 的统一定量率仍 OPEN。

3. **R166 varying-bottom reduction。** 在 genuine full-exact forward OU closure
   与 R102 covariance 输入下，非零 tower 等价地转化为任意深度的 varying-bottom
   非零 charge 序列。这压缩了问题，但没有完成 primitive closure 或最终 rigidity。

4. **R186/R188 接口命题。** R186 将 primitive law 的有限 inverse-Hankel 失败阶
   与 Gaussian 极限下失败阶 `M_r→∞` 联系起来；R188 说明若能证明
   `
   (MT_r)  lim_{M→∞} sup_j Σ_{2n+ell>M} r^(4n+2ell)|C_(ell,n)(mu_j)|²=0,
   `
   再加固定坐标收敛，即可得到 inverse-weighted mixed coefficient 收敛。
   这两个接口都精确，但所需 uniform input 尚未由 same-factor identity 推出。

### C. `FORMAL` / `FINITE-ONLY` / `OBSTRUCTION`

1. **R190–R192 formal radial jet。** Gaussian 线性化存在 odd blind ladder；二阶
   与全阶形式递归可以调节 radial angular average 的 even coefficients。这证明
   radial formal identity 本身不够，但不产生特征函数、更不产生正的 all-row law。

2. **R193–R196 正性检测逃逸。** 固定 finite Gram、confluent Bochner block、
   square-exponential envelope，以及 genuine same-factor finite-row camouflage
   都不能提供与阶数无关的有限检测器。R195 的 envelope-only 构造和 R196 的
   iid product 推广不是 full-exact counterexample；它们严格说明检测阶可能逃逸。

3. **R197–R203 finite-row escape principle。** 这是目前最接近独立负面小定理的
   组合：有限 exact radial rows 具有可逆的 even-cumulant compensation，且局部
   genuine positive realization 存在。它只否定固定有限层证明策略，不否定 all-row
   rigidity。

## 3. 必须分开的对象和未闭合桥

下列对象目前不能写成同一个三阶 charge：

`P_3K`（原始/空间对象）、`ell_3^sp=<log g,psi_3>`、normalized Bargmann
`C_g=log B_g` 的三阶系数、R102 的 log-MGF charge、R101 的 angular Herglotz
charge。它们之间的 provenance/identity bridge 尚未闭合。因此即使某一条解析路线
证明了某个 charge 为零，也不能未经桥接就宣称原始 `P_3K=0`。

同样，以下四个逻辑缺口相互独立：

1. `RK=1 ⇒ full-exact`：bare scalar 约束能否恢复所有 radial rows；
2. `primitive inverse-Hankel rank closure`：如何阻止有限正性检测阶向无穷逃逸；
3. mixed-sector `(MT_r)`：如何从 same-factor product identity 控制总次数尾部；
4. `full-exact → tower rigidity → spatial P_3K`：如何将底层极限、OU backward
   divisibility 和正确 charge 桥接到原始命题。

## 4. 最接近发表的结果是什么

当前最接近的是下面这个候选组合，而不是原始 rigidity 本身：

> **Finite-row non-annihilation theorem (候选表述).** 在中心化、方差一、
> genuine positive smooth same-factor iid 类的 Gaussian 邻域内，对每个固定 `M`，
> 存在 `κ₃≠0` 的 law 使 `F_2=...=F_M=0`；其 even-cumulant compensation
> Jacobian 为下三角可逆矩阵，且前六行存在显式 Hankel-feasible escape。

它有清楚的反面意义：任何只依赖固定有限 radial rows 的 cubic rigidity 证明都不可能
成立。要把它提升到可投稿的小论文，仍需统一写出 realization 的精确定义域、标准化
映射的正则性、IFT 邻域的量词，并把 R198–R202 的显式例子压缩成一个不依赖数值
扫描的定理—证明包。就本轮审计而言，这仍是“最接近可发表的候选”，不是已经完成的
独立发表成果。

## 5. 下一条真正值得集中火力的任务

停止继续增加 radial 行数。唯一下一任务是：

> 在 genuine full-exact same-factor iid 类、并明确给出所需 square-exponential
> envelope 的前提下，直接把 product characteristic identity 投影到
> `psi_ell(U)L_n(T)`，尝试证明 `(MT_r)`；若不能，给出保持 exact finite
> projections 与所有已知 marginal/sector budgets、但 total degree 向无穷迁移的
> 最小 formal obstruction。

成功则可推进 R186 的 primitive rank closure；失败则会把“same-factor identity 仍不
足以控制 mixed total tail”的缺口写成严格 lemma。无论哪种结果，都比再计算第七个
 radial row 更接近主问题。

