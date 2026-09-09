# R211：Esscher tilt 稳定性的聚点放大引理

日期：2026-09-09  
基线：R210，提交 `5d7f8ab`

## 0. 结论先行

本轮给出一个精确的 conditional Gaussian closure：只要 genuine iid law 的
共同 Esscher tilt 在一组有内部聚点的参数上保持 full-SF，甚至只要其首个
Laguerre mode 保持为零，就必为 Gaussian。

这把正向路线的最弱目标明确量化为“产生一串有聚点的 tilted first-mode
zeros”，而不是要求先证明所有 tilt 都 exact。

## 1. 设置

令 `X` 中心化、方差为一，令

`C=(X_1+X_2+X_3)/sqrt(3)`,
`Q=sum_j(X_j-Xbar)^2`,
`M(t)=E exp(tX)`, `K(t)=log M(t)`。

在 `M` 有限且解析的区间内，定义 common Esscher expectation

`E_a[F]=E[exp(aC)F]/E exp(aC)`。

定义 tilted first Laguerre mode

`ell_1(a)=1-E_a[Q]/2`。

## 2. 精确放大引理

### R211-A — 聚点零集即 Gaussian

若存在区间 `I` 和集合 `A⊂I`，使 `A` 在 `I` 内有聚点，且

`ell_1(a)=0` 对所有 `a∈A`,

则 `X~N(0,1)`。

### 证明

由于共同 tilt 仍为三个 iid copies 的同一标量 tilt，直接计算得到

`E_a[Q]=2 K''(a/sqrt(3))`,

故

`ell_1(a)=1-K''(a/sqrt(3))`.                         (1)

左侧在 `I` 内 real-analytic。由 `A` 的聚点定理，`ell_1` 在 `I` 上恒为零，
于是 `K''(t)=1` 在一个开区间成立。解析延拓到包含零的 MGF 邻域，并利用
`K(0)=K'(0)=0`，得到 `K(t)=t^2/2`。MGF 唯一性遂给出 `X~N(0,1)`。

注意：这里不需要 `Q` 在每一个 tilt 下的全部分布，只需要一个标量条件
`E_a Q=2`。

## 3. full-SF tilt stability 是更强的充分条件

若存在同样的集合 `A`，使对每个 `a∈A`

`Q under E_a ~ chi^2_2`,

则当然 `E_a Q=2`，所以由 R211-A 得 Gaussian。等价地，若

`Lambda(a,z)=E exp(aC-zQ)/E exp(aC)=1/(1+2z)`

在一组有聚点的 `a` 上对所有 `z>=0` 成立，也立即闭合。

这给出一个比 R207 的局部反射正号更直接的 conditional route：

`tilt-stability on an accumulating set`
`              => ell_1 zero on an accumulating set`
`              => K''=1`
`              => Gaussian`.

## 4. 与原始问题的严格边界

原始 genuine full-SF 只知道 `a=0`：

`Lambda(0,z)=1/(1+2z)`.

它并没有产生任何 `a!=0` 的 tilted exactness，也没有产生一列 `a_n->0`
满足 `ell_1(a_n)=0`。因此 R211 不是原始命题的证明，而是一个清晰的
conditional target。

OU backward divisibility 的参数 `q` 也不能直接替代 Esscher 参数 `a`：OU
改变的是 Hermite/heat scale，不会自动给出 common exponential tilt stability。
把两者混同会重新引入 R11/R13 已排除的循环论证。

## 5. 证据分级与全局发表性

### `PROVED / LOCAL-AUDITED`

R211-A 的聚点零集 Gaussian closure，以及
`E_a Q=2 K''(a/sqrt(3))` 的 iid 代数接口。`audit_r211.js` 用有限支持
标量 law 直接核验了该接口。

### `CONDITIONAL`

共同 Esscher tilt 在聚点集上保持 full-SF，或直接保持 `E_a Q=2`。

### `OPEN`

由未倾斜的 full-SF、same-factor characteristic identity、positivity 和
backward divisibility 推出任何非平凡 tilted zero；以及由 bare `RK=1`
推出 full-SF。原始 spatial `P_3K` provenance bridge 仍独立开放。

整体判断仍是：原始 Positive Backward-Tower Exact Zero-Set Rigidity 为
`OPEN`；当前独立完整可审稿发表性仍为**无**。R211 是可引用的 conditional
lemma，不是 genuine non-Gaussian counterexample，也不是原始 rigidity。

## 6. 唯一下一步

只研究 genuine same-factor product identity 是否能产生一列非平凡 `a_n->0`
的 tilted first-mode zeros，或证明任何这样的零列会自动等价于
`Cov(Q,e^{isC})=0`。若不能，保持该接口为 OPEN，不再增加 radial rows。

