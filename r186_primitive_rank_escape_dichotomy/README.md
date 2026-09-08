# R186 — Primitive inverse-Hankel rank-escape dichotomy

日期：2026-09-09

## 结论先行

R185 已说明零点壳的 density 与 degree alignment 不能互换；本轮回到全局
primitive 路线，并把 R13–R15 的量词压缩成一条可引用的 dichotomy。设
`pi` 是 genuine full-exact primitive law，固定 `r>1`，定义 inverse-OU
formal candidate

`K_(pi,r)(u)=exp((r^2-1)u^2/2) phi_pi(r u)`。

若 `H_M^(r)(pi)` 是由 `K_(pi,r)` 的 formal inverse moments 组成的 Hankel
矩阵，则：

1. 对每一个 primitive `pi`，存在有限 `M_r(pi)` 使
   `H_(M_r)^(r)(pi)` 非半正定；否则 Hamburger + Carleman 会把 `K_(pi,r)`
   重新实现为 probability characteristic function，违反 primitiveness。
2. 若 primitive exact laws `pi_N` 在统一 square-exponential envelope 下
   `pi_N => Gaussian`，则对每个固定 `M`，`H_M^(r)(pi_N)` 最终严格正定，
   因而 `M_r(pi_N)->infinity`。

所以 inverse-OU 的 finite-rank failure 对每个单律必存在，但任何试图用
固定 Gram/Hankel 复杂度统一排除 primitive shape 的证明，都必须额外阻止
`M_r(pi_N)->infinity`。这把全局 primitive escape 精确化为
`uniform inverse-Hankel rank closure`，而不是再回到有限频率或低阶零点扫描。

## 1. 单个 primitive law 的有限失败阶数

对 `phi_pi(u)=E exp(iuX)`，令

`m_k^(r)=i^(-k) K_(pi,r)^(k)(0)`,
`H_M^(r)=[m_(i+j)^(r)]_(0<=i,j<=M)`。

假设所有 `H_M^(r)` 都半正定。由 Hamburger 定理存在概率测度 `nu_r`，其
矩为 `m_k^(r)`。R12 的 square-exponential envelope 与 Cauchy 导数估计给出
Gaussian 型增长 `m_(2k)^(r)^(1/(2k))=O(sqrt(k))`，故 Carleman 条件成立；
同时这些矩具有 square-exponential 可积性，矩生成函数在原点解析且等于
`K_(pi,r)`。矩确定性遂给出 `phi_(nu_r)=K_(pi,r)`，也就是

`pi=P_(r^(-2)) nu_r`。

这与 `r(pi)=1` 矛盾。因此

`M_r(pi):=min{M:H_M^(r) not PSD}<infinity`.

这一步只使用 genuine probability、uniform/individual square-exponential
正则性和 primitive 定义；不使用原始空间 `P_3K`，也不把 angular charge
当作 inverse-Hankel witness。

## 2. Gaussian limit 下失败阶数必逃向无穷

设 `pi_N=>gamma`，并有统一 square-exponential envelope。对固定 `r>1`，
在每个固定阶导数上

`K_(pi_N,r)(u) -> exp((r^2-1)u^2/2) exp(-r^2u^2/2)
 = exp(-u^2/2)`

在 `u=0` 的导数收敛。因此

`H_M^(r)(pi_N) -> H_M^(Gaussian)`。

Gaussian 矩阵严格正定，因为对任意非零多项式 `p`（`deg p<=M`），

`p^T H_M^(Gaussian) p=E[p(G)^2]>0`。

故每个固定 `M` 最终都有 `H_M^(r)(pi_N)>0`，从而

`forall M exists N_M forall N>=N_M: M_r(pi_N)>M`。

这不是 primitive law 存在性的证明；它是一个严格的反向判据：任何
`pi_N=>gamma` 的 genuine primitive 序列都必须把 inverse-Hankel failure
推到越来越高的阶数。

## 3. 对原始 backward-tower 的全局含义

R11/R12 的 depth decay 控制 OU orbit coordinate `t_N`，而 primitive
decomposition `mu_N=P_(t_N)pi_N` 将 shape 与 amplitude 分开。R186 因此
排除了两种过强说法：

`depth decay => primitive Gaussian`，以及
`each primitive has a finite witness => one uniform witness`。

要完成原始 rigidity，仍需证明 genuine same-factor/all-row positivity
给出 `sup_N M_r(pi_N)<infinity`，或给出不依赖 `M_r` 的 global rank/coercive
估计。若不能，`M_r->infinity` 是唯一已被 R13–R15 精确保留下来的 primitive
Bochner/Hamburger escape。R183–R185 的 shell density/onset obstruction
不能替代这条 rank-closure 任务。

## 4. 证据等级与对象边界

- `PROVED UNDER GENUINE FULL-EXACT + SQUARE-EXPONENTIAL HYPOTHESES`：单律
  inverse-Hankel failure 的有限性，以及 Gaussian-convergent primitive 序列
  的固定阶严格正定/失败阶逃逸。
- `EXACT-AUDITED`：Gaussian Hankel 正定性和 OU inverse candidate 的二次
  指数抵消；见 `audit_r186.js`。
- `CONDITIONAL/OPEN`：uniform inverse-Hankel rank closure、primitive exact
  shape uniqueness、bare `RK=1` 到 genuine full-exact/all-row、原始 `P_3K`
  identification 与 charge survival。

这里的 `H_M^(r)` 是 ordinary inverse-OU moment/Hamburger 对象；它不是空间
`ell_3^sp`、Bargmann `C_g`、R102 `P_3K_MGF` 或 R101 angular charge。
原始命题目前仍无独立完整发表结果。

审计命令：

`node r186_primitive_rank_escape_dichotomy/audit_r186.js`

预期 marker：`R186_PRIMITIVE_RANK_ESCAPE_DICHOTOMY_PASSED`
