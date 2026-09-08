# R172 — 原始 `P_3K` 的对象溯源与不可偷换审计

日期：2026-09-09

## 结论先行

本轮没有证明项目最初命题中的 `P_3K` 等于此前任一条局部线路所使用的
charge。当前最稳妥、也是必须写入总框架的状态是：

> **原始 `P_3K` 的 provenance/定义接口仍为 `OPEN/UNRESOLVED`。**

因此 R168–R171 的空间 non-flatness 结果、R102/R166 的 log-MGF 结果、R101
的 angular Herglotz cone 结果以及 R133 的 Bargmann/Jacobi 结果必须保留为
不同对象上的不同模块，不能因为都含有“三阶/奇阶/零集”语言而拼接成原命题的
完整证明。

## 1. 四类对象必须分层

### A. 空间 log-density 投影

对 `g=e^{K_sp}`，令

`K_sp(x)=log g(x)`,  `ell_3^sp(g)=<K_sp,psi_3>_gamma`.

R168–R171 研究的是这个空间 observable 及其 OU 轨道
`r -> ell_3^sp(P_(r^2)h)`。若且仅若项目原始定义明确规定
`P_3K = P_3K_sp := ell_3^sp`，这些结论才可直接落回题目中的非零条件。

### B. normalized Bargmann log

`B_g(z)=E[g(X) exp(zX-z^2/2)]`, `C_g(z)=log B_g(z)`.

R133 的 same-factor identity 和首个 odd Jacobi packet 使用的是 `C_g`/Hermite
系数的解析结构。一般有
`C_g=log B(e^{K_sp})`，而不是 `B(K_sp)`；故 Bargmann log 不能自动替代
空间 `log g` 的投影。

### C. R102 analytic log-MGF charge

R102 定义的对象是

`P_3K_MGF(mu;z)=(1/(2*pi))*int exp(-3*i*theta)*mathscr K_mu(z,theta)dtheta`,

并在局部 MGF 存在时得到

`P_3K_MGF(mu;z)=sum_(m>=3, m odd) Lambda_m*kappa_m*z^m/m!`.

R166 的 OU 协变、varying-bottom reduction 和零集论证只对这个明确的
log-MGF 对象成立，不能未经定义比较就变成空间 `ell_3^sp`。

### D. R101 angular primitive charge

R101 的 `chi_1`/`beta_(m,1)` 是 genuine positive angular measure 的
Herglotz/Parseval cone 坐标。它给出很强的 backward-preimage 必要条件，并在
适当矩确定条件下有 `chi_1=0 iff symmetry`；但 R101 已明确声明该 angular charge
“deliberately separate from `P_3 K`”，也没有证明 `P_3K != 0 => chi_1 != 0`。

## 2. 当前可安全组合与不可安全组合的部分

可以安全组合的是各自的内部逻辑：

1. R99–R101 给 genuine positive backward preimage 的高 Hermite/角向必要条件；
2. R102 给 log-MGF charge 的 cumulant 展开、反射律和 OU 缩放；
3. R132–R133 给 full-exact/all-row 假设下的尾部、Jacobi packet 和 finite-row
   blindness 结构；
4. R168–R171 给空间 `ell_3^sp` 在附加 genuine all-row/full-SF/tail 假设下的
   OU persistence 与 non-flatness 归约。

不可安全组合的是以下三条未经补证的跳步：

* `P_3K_original = ell_3^sp`；
* `P_3K_original = P_3K_MGF` 或 `P_3K_original = chi_1`；
* scalar `RK(g)=1` 自动推出 genuine full-SF/all-row 以及上述任一 observable
  的协变性。

## 3. 对原始开放命题的影响

在原始 `P_3K` 定义尚未从早期项目记录中恢复或重新证明前，不能声称 R168–R171
已经解决了“`P_3K(g^(0)) != 0`”的题设，也不能把 R102 的单律化简写成空间版
rigidity。原命题仍至少包含四个独立障碍：

* `RK=1` 到 genuine full-exact/all-row 的接口；
* 正 backward OU tower 的长期/全阶 cone 约束；
* 原始 `P_3K` 的对象身份及其与可计算 charge 的桥；
* 排除非 Gaussian genuine exact law，或构造其反例。

所以截至 R172，整体“是否已有独立、完整、可审稿的发表性结果”的回答仍是：

> **无。**

这不是说没有可发表的局部技术；R99–R102、R132–R133、R168–R171 都可能成为
论文中的 lemma/appendix/conditional theorem。但在没有完成对象溯源、假设接口和
主命题闭合之前，它们还不能诚实地单独包装成原问题的独立完整成果。

## 4. 下一轮网页端必须完成的全局审计

网页端首先应读取总框架、工作日志以及 R158、R166、R168、R169、R170、R171、
R172 记录，然后逐项给出：

1. 原始 `P_3K` 的最早定义或明确承认仍未恢复；
2. 上述 A–D 四类对象的精确定义与相互关系；
3. 每条结论的证据等级：`PROVED`、`CONDITIONAL`、`FORMAL`、`OBSTRUCTION`
   或 `OPEN`；
4. 哪些内容有潜在独立发表价值，哪些只是主命题的条件性中间步骤；
5. 在不偷换对象的前提下，重新给出原始大命题的诚实总评。

本文件是 provenance/documentation audit，不声称完成任何 charge identification，
也不新增 hash、baseline、contract 或发布门禁。
