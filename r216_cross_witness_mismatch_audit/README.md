# R216：Angular-to-Hankel cross-witness 的对象错位审计

日期：2026-09-09  
基线：R215，提交 `94d39cf`

## 0. 结论先行

网页端上一轮提出的最小接口是：高阶 angular charge budget 违反时，能否推出
某个有限阶 ordinary inverse-Hankel 矩阵出现负特征值。R216 的本机审计没有
证明这个接口，也没有构造原始问题的反例；它严格定位了一个不能偷换的对象
缺口：

* R101 的 angular cone 需要 `mu` 及其 OU 前像都是真实的、正的、同因子
  `full-exact` law；
* R186 的 `H_M^(r)(pi)` 只检查 inverse-OU formal candidate 的 ordinary
  Hamburger moments 是否为正；即使所有有限 Hankel 行通过，Hamburger 实现
  也不自动是 genuine full-exact、同因子、或满足原始 `RK=1`；
* 因而“angular violation => bounded-rank ordinary Hankel negativity”不是
  现有结论的直接推论，真正的 cross-witness 仍为 `OPEN`。

## 1. 一个可复核的 finite-moment obstruction

固定整数 `L>=1`，取

`u_L(x)=sum_(k=1)^(L+1) c_k x exp(-k x^2)`，

其中令 `y_k=(1+2k)^(-1)`，并取

`c_k = y_k^(-3/2) / prod_(j!=k)(y_k-y_j)`。

Vandermonde 插值恒等式给出

`sum_k c_k (2l+1)!! (1+2k)^(-(l+3/2)) = 0`

对 `l=0,...,L-1`，而对 `l=L` 非零。因此在 `gamma=N(0,1)` 下，

`E_gamma[X^n u_L(X)] = 0` 对所有 `n<=2L`，

但

`E_gamma[X^(2L+1)u_L(X)] != 0`。

偶次条件由奇性自动成立，奇次条件由上面的 Vandermonde null vector 给出。
取 `epsilon` 足够小，使 `f_L=1+epsilon*u_L>0`。则 `f_L gamma` 是真实的、
中心化、方差一、具有 Gaussian tail 的非对称概率律，且首个非零 odd
Hermite coefficient 可以放在 `D=2L+1`。

令 `a_D=<f_L,He_D/sqrt(D!)>`，则低阶矩匹配意味着

`a_D = epsilon E_gamma[X^D u_L]/sqrt(D!) != 0`。

在 R101 的代数 angular map 中，首 odd minimality 给

`beta_(D,1)=Lambda_D a_D != 0`。

选择

`t=(|beta_(D,1)|^2/2)^(1/D)`、`r=t^(-1/2)`，

即可使有限 angular partial budget 满足

`t^(-D)|beta_(D,1)|^2=2>1`。

另一方面，`f_L gamma` 的 raw moments 直到 `2L` 与 Gaussian 完全相同。故
R186 的 formal inverse candidate

`K_(f_L,r)(z)=exp((r^2-1)z^2/2) phi_(f_L)(rz)`

在 `0` 点直到 `2L` 阶的导数也与 Gaussian 相同，因而

`H_L^(r)(f_L)=H_L^(r)(gamma)>0`。

这说明：在只使用标量正性、有限矩与 ordinary inverse-Hankel 的证明体系中，
angular finite charge 可以先出现，而 Hankel positivity 至少可保持到阶 `L`。
对任意 `L` 都可这样延迟。因此不存在一个不依赖 angular degree 的低阶
Hankel 转换；任何真正的 `M(D,r)` 若存在，必须显式使用 genuine same-factor
结构，而不能只引用 ordinary Hamburger positivity。

这个构造不是原始问题的反例：`f_L gamma` 没有被证明满足 R101 的
full-exact identity，也没有满足 `RK=1`。它是 `FINITE-ONLY / OBSTRUCTION`，
用途是封存错误的对象拼接。

## 2. 与 R101、R186 的精确关系

R101 证明的是：若 genuine exact positive preimage 存在，则 angular charge
必须落在由三份 iid 同因子 law 产生的 Herglotz/Parseval cone 内。

R186 证明的是：若 primitive law 没有 genuine inverse-OU preimage，则其
ordinary inverse moment sequence 在某个有限 Hankel 阶失败；这一步的
Hamburger 实现若存在，只说明 ordinary probability 实现，不恢复三份同因子
exact identity。

所以当前只能写

`angular cone violation => no genuine full-exact preimage at that scale`，

以及

`primitive non-divisibility => some finite ordinary Hankel failure`，

不能写成它们之间已有统一的 `M(D,r)` 或负裕量估计。

## 3. 证据等级与发表性

* `PROVED / LOCAL-AUDITED`：Vandermonde finite-moment family、正性小扰动、
  `2L` 阶 Gaussian moment matching、formal inverse-Hankel 的低阶相等；
* `FINITE-ONLY / OBSTRUCTION`：低阶 ordinary Hankel positivity 与有限 angular
  algebraic charge 可错位；
* `OPEN`：genuine full-exact same-factor 类内的 Angular-to-Hankel cross-witness；
  `RK=1` 到 genuine full-exact；原始 spatial `P_3K` 的 provenance bridge；
  symmetric even-sector rigidity；
* 整体独立、完整、可审稿的发表性判断仍为：**无**。

## 4. 审计

运行：

`node r216_cross_witness_mismatch_audit/audit_r216.js`

预期 marker：`R216_CROSS_WITNESS_MISMATCH_AUDIT_PASSED`
