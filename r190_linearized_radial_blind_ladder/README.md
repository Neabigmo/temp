# R190 — Linearized radial blind spot for the full mixed Laguerre ladder

日期：2026-09-09

## 结论先行

在 Gaussian law `gamma` 处，所有 odd one-body Hermite tangent directions 对
residual radial law `Q` 的一阶变化都为零；但它们可以在 common/residual
分解中产生非零的 mixed coefficients。对 `n>=1`，取 formal tangent
`h_(2n+1)(x)=H_(2n+1)(x)`，则

`D_h C_(1,n)
 = sum_(i=1)^3 E_gamma[U L_n(T) H_(2n+1)(X_i)]
 = sqrt(3) (2n+1)! (-1)^n /(3^n n!) != 0.`

这里 `U=(X_1+X_2+X_3)/sqrt(3)`、`T=Q/2`、`psi_1(U)=U`。同时，对任意合适的
径向测试函数 `F(Q)`，

`D_h E[F(Q)]
 = sum_i E_gamma[F(Q)H_(2n+1)(X_i)] = 0`,

因为 `Q` 在全局反射 `(X_1,X_2,X_3)->(-X_1,-X_2,-X_3)` 下不变，而
`H_(2n+1)` 变号。

因此“径向 exact identity 的一阶变分”不能给出 `(MT_r)` 所需的 mixed-sector
控制，甚至不能看见整个 `ell=1` Laguerre ladder；需要 genuinely nonlinear
all-degree/product-density information。该结果是 `FORMAL LINEARIZED OBSTRUCTION`
而非原始 exact-law counterexample：未声称 `1+epsilon H_d` 是正密度。

## 1. 反射盲性

令 `mu_epsilon` 是 Gaussian product law 的 signed first-order perturbation，
其一体 score 为 `h_d=H_d`，`d=2n+1>=3`。对于任意只依赖
`Q=sum_i(X_i-X_bar)^2` 的可积 `F`，

`D_h E[F(Q)] = E_gamma[F(Q) sum_i H_d(X_i)]`.

全局反射保持 Gaussian product measure 与 `Q`，却把
`sum_i H_d(X_i)` 变为其相反数，故该期望为零。特别地，所有 radial moments
和 radial characteristic tests 的一阶变化均为零。又因 `d>=3`，

`E H_d(X)=E[XH_d(X)]=E[X^2H_d(X)]=0`,

所以 normalization、centering、variance 的一阶约束也不被破坏。

## 2. 混合系数的闭式计算

在 Gaussian base 下，写 `X_i=U/sqrt(3)+v_i dot R`，其中 `|v_i|^2=2/3`、
`T=|R|^2/2`，且 `U` 与 `R` 独立。由 Hermite generating function，

`E[U L_n(T) exp(t X_i-t^2/2)]`
`= (t/sqrt(3)) E[L_n(T) exp(t v_i dot R-t^2|v_i|^2/2)]`.

若 `s=t|v_i|`，Laguerre generating function给出精确恒等式

`E[L_n(T) exp(s R_1-s^2/2)] = (-s^2/2)^n/n!`.

由于 `s^2=2t^2/3`，得到

`E[U L_n(T) exp(tX_i-t^2/2)]`
`= t/sqrt(3) * (-t^2/3)^n/n!`.

比较 `exp(tX_i-t^2/2)=sum_d H_d(X_i)t^d/d!` 的 `t^(2n+1)` 系数，

`E[U L_n(T)H_(2n+1)(X_i)]`
`= (2n+1)!/sqrt(3) * (-1)^n/(3^n n!).`

对三个 iid factors 求和，便得 R190-1。

## 3. 证据边界

该 calculation 的逻辑等级必须严格写为：

* `PROVED`：Gaussian product law 上的反射零变分和 Hermite–Laguerre 闭式；
* `FORMAL LINEARIZED OBSTRUCTION`：用 `H_d` 作为 signed tangent；
* `NOT A GENUINE COUNTEREXAMPLE`：`1+epsilon H_d` 不是全局正密度；
* `OPEN`：是否存在正的、全阶 exact、same-factor nonlinear correction，能把
  这些一阶 mixed signals在高阶同时消掉。

形式方向也不是正性方向的替代。若只需要说明“有正 bounded tangent”，可在
odd `L^2(gamma)` 约束子空间中取有界紧支撑函数，消去有限个低阶 Hermite
约束并保留对 `U L_n(T)` 的非零投影；反射盲性仍成立，但上面的闭式常数只
对应 `H_(2n+1)` 的 canonical formal direction。

## 4. 对 R188/R186 的直接含义

R188 的正联合 copula obstruction 说明 radial/common 边缘本身不够；R190
进一步说明，即使在 genuine three-iid Gaussian anchor 的一阶 product-density
线性化层，radial exactness 仍完全看不见 odd mixed ladder。故任何证明 `(MT_r)`
的路线都必须利用：

1. nonlinear same-factor product identity 的高阶耦合；以及
2. positivity 如何把一阶可见 mixed signal 与更高阶 correction 连接起来。

R173-R179 的 odd cone/cross-wall 只在某些 full-SF/all-degree 假设下给出
backward amplitude wall；它们不能消灭 R190 的一阶 blind spot，也不能单独
提供 inverse-Hankel rank closure。

## 5. 当前最小 OPEN

寻找一个真正 nonlinear 的二阶或 cubic product-density identity，使其对
R190 的 `H_(2n+1)` tangent 产生非零的 positive quadratic defect，并能统一
控制 `n->infinity`。若该 defect 只给平方能量而不带 sign，则应把它记录为
another no-go，而不是当作 rigidity bridge。

审计命令：

`node r190_linearized_radial_blind_ladder/audit_r190.js`

预期 marker：`R190_LINEARIZED_RADIAL_BLIND_LADDER_PASSED`

