# R191 — Second-order radial cancellation of the odd mixed Laguerre ladder

日期：2026-09-09

## 结论先行

R190 只说明 Gaussian 点的径向 identity 在线性阶看不见 odd mixed ladder。
R191 进一步计算二阶：对任意 odd `d>=3`，令

`a_j(theta)=sqrt(2/3) cos(theta+2*pi*j/3)`,
`S_d(theta)=sum_j a_j(theta)^d`.

考虑 Gaussian characteristic factor 的 formal one-body jet

`phi_epsilon(u)=phi_0(u) exp(epsilon (i u)^d
                    + epsilon^2 kappa_d u^(2d)+O(epsilon^3))`.

若

`A_d=<sum_j a_j^(2d)>_theta`,
`B_d=<S_d(theta)^2>_theta`,

则取

`kappa_d=B_d/(2 A_d)>0`

会使 angular exact radial identity 保持到二阶：

`<prod_j phi_epsilon(a_j(theta)u)>_theta
 = exp(-u^2/2)+O(epsilon^3)`.

同时 R190 的 mixed coefficient 一阶变化

`D C_(1,n)=sqrt(3)(2n+1)!(-1)^n/(3^n n!)`

（`d=2n+1`）不为零。因此二阶径向 response 仍不是一个强制消灭
`ell=1` mixed ladder 的正 coercive defect。

该结论是 `FORMAL SECOND-ORDER NO-GO`：formal jet 未证明是全局正定
characteristic function，也未构造 genuine all-degree exact density。它的价值是
严格排除了“只要把 R190 推到二阶就会自动得到 rigidity”的捷径。

## 1. 精确二阶 product expansion

Gaussian base 满足

`prod_j phi_0(a_j(theta)u)=exp(-u^2/2)`,

因为 `sum_j a_j(theta)^2=1`。将 formal jet 代入并展开到 `epsilon^2`：

`prod_j phi_epsilon(a_j u)
 = exp(-u^2/2) [1
   + epsilon (i u)^d S_d(theta)
   + epsilon^2 u^(2d)
       {kappa_d sum_j a_j^(2d) + (i^(2d)/2) S_d(theta)^2}
   + O(epsilon^3)].`

当 `d` odd 时，`<S_d>=0`（也可由 `theta->theta+pi` 直接看出），且
`i^(2d)=-1`。于是 angular averaging 的二阶系数是

`u^(2d) [kappa_d A_d-B_d/2]`.

取 `kappa_d=B_d/(2A_d)` 后逐个实 `u` 消失。这是 pointwise-in-u 的二阶
radial cancellation，不是只对有限个 radial moments 的 cancellation。

## 2. 二项式闭式与正性

令

`S0_d=sum_{0<=k<=d, d-2k=0 (mod 3)} binom(d,k)^2`.

三次单位根筛选给出

`A_d=3 binom(2d,d)/6^d`,
`B_d=9 S0_d/6^d`,

从而

`kappa_d=(3/2) S0_d/binom(2d,d)>0`.

`A_d>0` 是显然的平方和；`B_d>0` 因 `S_d` 不恒为零。该闭式与 R175-R176
的 mod-3 binomial structure 相容，但此处的作用不同：它给出的是二阶
radial-identity jet 的可抵消系数，而不是 R174 cross-wall 的 positive cone wall。

## 3. 为什么它没有关闭 mixed-sector tail

对 `d=2n+1`，R190 已给出同一 odd direction 的一阶 mixed response

`D C_(1,n)=sqrt(3)(2n+1)!(-1)^n/(3^n n!) !=0`.

R191 的 even correction 只负责抵消 radial angular average 的二阶项；它不改变
这一阶 mixed response。故任何仅使用

`<prod_j phi(a_j u)>=exp(-u^2/2)`

及其二阶变分的论证，都还需要一个额外输入，才能把 mixed signal 转化成
正的 total-degree budget `(MT_r)`。二阶 pairing 的 algebraic sign 被
`kappa_d` 调整项抵消，不能直接当作 positivity certificate。

## 4. 证据分层

* `PROVED`：二阶 product expansion、`<S_d>=0`、`A_d/B_d` 的 mod-3 闭式和
  `kappa_d>0`；
* `FORMAL SECOND-ORDER NO-GO`：存在逐点 radial-cancelling formal jet；
* `NOT GENUINE`：未证明 `phi_epsilon` positive definite，未保持完整 all-degree
  exact law；
* `OPEN`：positivity 是否在三阶或完整 conditional-moment matrix 层强迫
  `C_(1,n)=0`，以及能否推出 R188 的 `(MT_r)`。

## 5. 对路线的更新

R190 排除了 linear radial closure，R191 排除了 naive quadratic radial closure。
下一步不应继续单独求 radial Taylor 阶，而应直接寻找一个带 genuine positivity
的 nonlinear conditional/Schur identity；若它仍只产生 even pairing energy，
应正式把该路线标为 no-go，而不是当作 rigidity bridge。

审计命令：

`node r191_second_order_radial_cancellation/audit_r191.js`

预期 marker：`R191_SECOND_ORDER_RADIAL_CANCELLATION_PASSED`

