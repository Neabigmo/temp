# R217：Gaussian-flat odd jet 的一行 cross-witness benchmark

日期：2026-09-09  
基线：R216，提交 `3e41a0f`

## 0. 结论先行

R216 的有限矩构造可以精确推进一行。对任意 `L>=1`，令 `D=2L+1`，取
R216 的正密度 `f_L gamma`，使它的 raw moments 到 `2L` 阶与 Gaussian 相同，
而第 `D` 阶 odd moment首次非零。令 `r=t^(-1/2)`，并记

`rho=t^(-D)|beta_(D,1)|^2=r^(2D)|beta_(D,1)|^2`。

则：

1. `H_L^(r)` 与 Gaussian Hankel 完全相同，严格正定；
2. 在 Hermite-orthonormal basis 的 `(L,L+1)` 主子块中，唯一新的 off-diagonal
   项为 `delta_D/sqrt(L!(L+1)!)`，其中

   `|delta_D|=sqrt(D! rho)/Lambda_D`；

3. 因而只要

   `rho > rho_H(L):=Lambda_D^2 L!(L+1)!/D!`,

   `H_(L+1)^(r)` 就不是半正定；
4. 对 R101 的系数

   `Lambda_D=3*6^(-D/2)*binom(D,L-1)`，有

   `rho_H(L)=9*6^(-D)*binom(D,L-1)^2/binom(D,L)
            <=9*3^(-D)<1`。

所以在这个 Gaussian-flat relaxed 类中，任何有限 angular violation
`rho>1` 都会在下一 Hankel 行被检测到。审计取 `rho=2`，对 `L=2,4` 通过。

## 1. 证明要点

前 `2L` 阶矩匹配意味着 inverse formal moments `m_k^(r)` 在 `k<=2L` 时与
Gaussian 相同；第一个差异只出现在 `m_D`。在 Gaussian 正交归一 Hermite 基底
`psi_k=He_k/sqrt(k!)` 下，`psi_L psi_(L+1)` 的最高次项系数是
`1/sqrt(L!(L+1)!)`，所以 `H_(L+1)` 的该二阶主块为

`[[1, delta_D/sqrt(L!(L+1)!)],
 [delta_D/sqrt(L!(L+1)!), 1]]`。

其行列式在上述阈值下为负。这个计算说明 R216 的 `H_L` 正性不是一个无限
阶逃逸模型：在此特殊 Gaussian-flat 方向，首 odd angular witness 与下一行
ordinary Hankel witness 有明确的常数关系。

## 2. 严格边界

这是 `PROVED / LOCAL-AUDITED` 的 relaxed finite-jet benchmark，和
`FINITE-ONLY / OBSTRUCTION` 的对象错位审计相结合。`f_L gamma` 没有被证明
满足 genuine full-exact same-factor identity、`RK=1` 或原始 spatial `P_3K`，
因此绝不是原始命题的反例，也不能把这一行公式直接升级为 genuine theorem。

它给 genuine cross-witness 提供了一个更窄的可证伪目标：能否在 genuine
full-exact 类中，把“首 odd charge 的 angular budget 超过 1”转化为至多
`O(D)` 阶的 inverse-Hankel 负性；如果不能，应明确给出 genuine-compatible
的高阶逃逸，而不再把普通 scalar moments 当作同因子结构。

整体判断不变：原始 Positive Backward-Tower Exact Zero-Set Rigidity 仍为
`OPEN`；独立、完整、可审稿的发表性结果仍为**无**。

## 3. 审计

运行：

`node r217_gaussian_flat_one_row_witness/audit_r217.js`

预期 marker：`R217_GAUSSIAN_FLAT_ONE_ROW_WITNESS_PASSED`
