# R192 — All-order formal radial lift of an odd mixed direction

日期：2026-09-09

## 结论先行

R190-R191 的 linear/quadratic blind spot 可以推进到一个形式上的 all-order
statement。固定 odd `d>=3`，令

`S_k(theta)=sum_j a_j(theta)^k`,
`a_j(theta)=sqrt(2/3)cos(theta+2*pi*j/3)`.

考虑 one-body characteristic log jet

`log(phi_epsilon(u)/phi_0(u))
 = sum_(k>=1) epsilon^k b_k (i u)^(k d)`,

其中 `b_1=1`。在

`R_epsilon(u)=<prod_j phi_epsilon(a_j(theta)u)>_theta`

的每个 epsilon 阶，系数都是 `u^(m d)` 乘以一个标量。若 `m` 为 odd，
该标量由 `theta->theta+pi` 自动为零；若 `m` 为 even，唯一新未知量
`b_m` 的系数是

`i^(m d) A_(m d)`,
`A_k=<S_k>=3 binom(k,k/2)/6^(k/2)>0`.

因此可以递归选择 `b_m`（所有 even `m`），使

`R_epsilon(u)=exp(-u^2/2)`

在 formal epsilon power series 意义下逐阶成立，同时 `b_1=1` 保留 R190
的非零 mixed response。R191 的常数只是 `m=2` 的第一步：若用
`phi_0 exp(epsilon(iu)^d+epsilon^2 kappa_d u^(2d))` 记号，则
`kappa_d=-b_2=B_d/(2A_d)`。

这是一个严格的 `FORMAL ALL-ORDER RADIAL NO-GO`：它说明 angular radial
identity 单独不能在形式层面消灭 odd mixed direction。它不是 genuine
characteristic family、不是正密度、也不是原始问题的 counterexample；真正
尚未用上的结构恰恰是 global positive-definiteness 与 all-order same-factor
realizability。

## 1. 三阶为什么不产生 compatibility condition

记 `E_1=(iu)^d S_d`、`E_2=b_2(iu)^(2d)S_(2d)`、
`E_3=b_3(iu)^(3d)S_(3d)`。epsilon^3 的 product coefficient 是

`E_3+E_1 E_2+E_1^3/6`.

每一项在 `theta->theta+pi` 下都变号，因为总 residual degree 是 `3d`，
所以 angular average 为零；特别是它不限制 `b_3`。这不是低阶偶然，而是
所有 odd total epsilon orders 的统一奇偶性。

## 2. 偶阶递归公式

设 `K_m(b_1,...,b_(m-1))` 是 epsilon^m 系数中所有不含 `b_m` 的项：

`K_m=sum_{r_1+2r_2+...+(m-1)r_(m-1)=m}
       <prod_k [b_k(i)^(k d)S_(k d)]^(r_k)> /
       prod_k r_k!`.

（这里 `r_k>=0`，有限和。）含 `b_m` 的唯一项是
`b_m i^(m d) A_(m d)`，故当 `m` 为 even 时取

`b_m=-K_m/(i^(m d) A_(m d))`.

当 `m` 为 odd 时，`K_m=0`，因为每个被平均的 monomial 在全局 residual
反射下变号；可取 `b_m=0`（除 `b_1=1` 外）。由于 `A_(m d)>0` 对 even
`m`，递归永远可继续。

## 3. 与 mixed ladder 的关系

`b_1=1` 不被后续递归改变，因此对 `d=2n+1`，R190 的一阶量仍是

`D C_(1,n)=sqrt(3)(2n+1)!(-1)^n/(3^n n!) !=0`.

所以形式 radial-preserving jet 同时具有：

* 所有 radial angular-average coefficients 为零；
* 一个任意指定的 odd mixed Laguerre coordinate 在一阶非零；
* even correction 只在更高 epsilon 阶调整 radial identity。

这比 R188 的 arbitrary-positive-copula obstruction 更贴近 exact angular
factorization，但仍不能声称 genuine three-iid law。

## 4. 证据分层与真实缺口

* `PROVED`：odd-order parity、even-order nonzero pivot `A_(m d)`、formal
  recursive cancellation；
* `FORMAL ALL-ORDER NO-GO`：逐点/逐阶 formal radial-preserving jet；
* `NOT GENUINE`：没有证明每个 epsilon 的 `phi_epsilon` positive definite，
  也没有证明 formal series 收敛；
* `OPEN`：positivity 是否能阻断该 formal jet，或能否直接推出 R188 的
  total-degree condition `(MT_r)`。

因此下一步不应再计算 radial Taylor 阶数；唯一有价值的方向是把
positive-definiteness（例如 characteristic Gram/conditional Schur）真正
施加到这条 formal jet，并寻找一个不能被 `b_m` 调节的 mixed-sector defect。

审计命令：

`node r192_all_order_formal_radial_lift/audit_r192.js`

预期 marker：`R192_ALL_ORDER_FORMAL_RADIAL_LIFT_PASSED`

