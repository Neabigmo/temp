# R188 — Conditional-moment projection and the mixed-sector tail interface

日期：2026-09-09

## 结论先行

R17 的缺口可以不再笼统地称为“缺少跨扇区控制”，而可精确写成一个
conditional-moment tail 条件。令

`U=(X_1+X_2+X_3)/sqrt(3)`, `T=Q/2`, `T~Exp(1)`,

并令 `psi_ell(U)=H_ell(U)/sqrt(ell!)`、`L_n` 为普通 Laguerre 多项式。定义

`m_ell(t)=E[psi_ell(U)|T=t]`,

则

`C_(ell,n)=E[psi_ell(U)L_n(T)]
          = <m_ell,L_n>_(L^2(e^(-t)dt))`.

精确径向律只强迫 `m_0(t)=1`（因而 `C_(0,n)=0`，`n>=1`）；它没有
强迫 `m_ell` 在 `ell>=1` 上具有任何总次数尾部衰减。对 `r>1`，真正需要的
接口是

`(MT_r)  lim_(M->infinity) sup_j
         sum_(2n+ell>M) r^(4n+2ell)|C_(ell,n)(mu_j)|^2 = 0.`

这正是 inverse-OU 系数在总次数上的 tightness，而不是逐个 `ell` 的
Parseval 界。若固定坐标逐项收敛且 `(MT_r)` 成立，则加权系数向量在
`ell^2` 中收敛；这一步是严格的有限块加尾部论证。它完成了“总尾部条件
足以修复谱系数接口”的分析层，但没有自动给出 genuine probability
preimage，后者仍需正性/同因子实现定理。

## 1. 精确投影恒等式

条件 Jensen 给出

`||m_ell||_(L^2(e^(-t)dt))^2
 <= E[psi_ell(U)^2]`.

由于 `L_n` 在 `L^2(e^(-t)dt)` 中构成正交归一基，

`sum_n C_(ell,n)^2 <= E[psi_ell(U)^2]`.

若 `mu=P_(r^(-2))nu`，OU 对角化给出

`C_(ell,n)(mu)=r^(-(2n+ell)) C_(ell,n)(nu)`,

从而每个固定 `ell` 都满足

`sum_n r^(4n+2ell) C_(ell,n)(mu)^2
 <= E_nu[psi_ell(U)^2]`.

但把这些不等式对 `ell` 求和需要一个额外的、随 `ell` 一致的 conditional
moment 预算；R187 已给出仅凭逐 sector 预算不能推出 `(MT_r)` 的抽象移动谱族。

## 2. 总次数尾部的严格接口定理

设 `mu_j` 是一列 full-exact 候选，且对每个固定 `(ell,n)` 有
`C_(ell,n)(mu_j)->C_(ell,n)(mu)`. 若对某个 `r>1` 满足 `(MT_r)`，则

`sum_(ell,n) r^(4n+2ell)
 |C_(ell,n)(mu_j)-C_(ell,n)(mu)|^2 -> 0.`

证明只有两步。给定 `epsilon>0`，先用 `(MT_r)` 对 `mu_j` 统一截断到
`2n+ell<=M`；由固定坐标收敛，有限集合上的加权平方和趋于零。对极限
`mu` 的尾部，由 Fatou（或先取有限子列再用非负和）得到同样的上界；再用
`(a-b)^2<=2a^2+2b^2` 合并两端。于是总和趋于零。

这一定理的作用是明确分层：

* `PROVED`：`(MT_r)` + finite-coordinate convergence `=>` inverse-weighted
  mixed coefficient convergence；
* `OPEN`：genuine same-factor exact identity + positivity `=> (MT_r)`；
* `OPEN`：上述系数收敛再加何种正性闭包，才能产生真实 backward preimage。

因此它是 R186 primitive rank-escape 分支所需的一个干净 analytic interface，
但不是 primitive closedness 本身。

## 3. 正联合密度的 marginal-blindness obstruction

下面构造一个真实的正联合密度，说明 `T~Exp(1)` 及固定 `U,T` 边缘不能单独
推出 `(MT_r)`。它不是原命题反例，因为没有要求该联合密度来自三份 iid
坐标的 residual transform。

取基准测度 `phi(u)e^(-t)dudt`，其中 `phi` 是标准 Gaussian 密度。令
`a(u)=tanh(u)`；它有界、均值为零，且

`A_1=E[a(U)psi_1(U)]=E[U tanh(U)]>0`.

固定 `N` 和任意 `A>0`。在 `L^2([0,A],e^(-t)dt)` 中，把 `L_N` 投影到
`span{L_0,...,L_(N-1)}`，令

`b_N(t)=(L_N(t)-Pi_(N-1,A)L_N(t)) 1_[0,A](t)`.

这是有界函数，并满足

`<b_N,L_n>_(Exp)=0`  (0<=n<N),
`B_N:=<b_N,L_N>_(Exp)>0`.

当 `|epsilon| ||a||_infinity ||b_N||_infinity < 1` 时，

`f_(epsilon,N)(u,t)=phi(u)e^(-t)[1+epsilon a(u)b_N(t)]`

是正的联合密度。由于 `E a(U)=0` 且 `<b_N,L_0>=0`，它保持两个边缘律
`U~N(0,1)`、`T~Exp(1)` 不变；同时

`C_(1,n)(f_(epsilon,N))=0`  (n<N),
`C_(1,N)(f_(epsilon,N))=epsilon A_1 B_N != 0`.

所以一个混合系数可以在任意高的 Laguerre 阶出现，而径向边缘与 common
边缘完全不变。该例精确说明 R17 不能把 `T~Exp(1)` 误读成 `U|T` 的控制；
R187 的抽象谱迁移不是记号游戏，而有正联合概率层面的边缘盲点。

## 4. 对原始问题的影响

这轮没有得到原始 `RK=1` 问题的 unconditional rigidity，也没有得到 genuine
same-factor counterexample。它把下一步压缩为一个可证伪的二选一：

1. 从三份 iid 的 product density 结构和 all-degree exact identity 中证明
   `(MT_r)`，最好表现为一个 conditional moment matrix 的 trace/Schur 预算；或
2. 在保持 genuine same-factor、正性和 all-degree exactness 的前提下构造
   mixed-sector mass migration。

仅继续加强固定 `ell` 的 Parseval 常数、继续扫描 radial Fock 系数，都不能
越过这个接口。

## 5. 证据等级与发表性

* `PROVED`：conditional projection formula、OU scaling、总尾部条件下的
  加权系数收敛定理；
* `EXACT-AUDITED`：正联合密度构造的边缘保持、低阶 Laguerre 消失和第 `N` 阶
  混合系数非零；
* `NOT A GENUINE COUNTEREXAMPLE`：第 3 节没有 iid same-factor realization；
* 原始 positive backward-tower rigidity 的整体发表性判断仍为“无”。

审计命令：

`node r188_mixed_sector_projection/audit_r188.js`

预期 marker：`R188_MIXED_SECTOR_PROJECTION_PASSED`

