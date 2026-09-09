# R199 — Hankel obstruction on the cubic-compensation branch

日期：2026-09-09

## 结论

沿 R198 的有限行补偿分支，记 `c=kappa_3`，并取

`kappa_4=kappa_5=0`, `kappa_6=-3c^2`.

若该 cumulant 数据来自 genuine 实值概率律，则其四阶 moment Hankel block

`H_3=(m_(i+j))_(0<=i,j<=3)`

必须半正定。由 cumulant--moment 公式

`(m_0,...,m_6)=(1,0,1,c,3,10c,15+7c^2)`,

因此

`H_3 = [[1,0,1,c], [0,1,c,3], [1,c,3,10c],
       [c,3,10c,15+7c^2]]`.

直接取行列式得到精确式

`det H_3 = 12-30c^2-6c^4 = 6(2-5c^2-c^4)`.

所以 genuine positive law 必须满足

`|c| <= c_* := sqrt((sqrt(33)-5)/2) = 0.610...`.

这是真正的 finite-row PSD obstruction：它排除了 R198 补偿分支上所有
`|kappa_3|>c_*` 的 genuine law。它没有排除 `0<|c|<=c_*` 的小分支，因而
不能升级为 cubic annihilation、all-row rigidity 或原始 backward-tower 定理。

## Schur-complement 形式

令 `A=H_2`。则

`det A=2-c^2`,

且在 `|c|<sqrt(2)` 时 `A` 正定。于是最后一个 Schur defect 为

`sigma_3(c)=det(H_3)/det(H_2)
          =6(2-5c^2-c^4)/(2-c^2)`.

因此在 `c_*<|c|<sqrt(2)` 时，前一块仍正定但 `sigma_3(c)<0`；在
`|c|>=sqrt(2)` 时，`H_2` 已先违反半正定性（而 `det H_3` 也为负）。这把
R198 的 formal/finite compensation 与 genuine moment positivity 的第一次
非平凡冲突写成了单个明确的 recurrence defect。

另一方面，`det H_3>0` 对足够小的 `c` 成立；再结合 `H_3(0)` 是 Gaussian
的正定块，连续性说明该有限 Hankel block 本身不能在 `c=0` 附近排除整条
小非零分支。故剩余问题确实是检测阶逃逸，而非 R199 已经解决了全阶问题。

## 证据等级与全局位置

* `PROVED / ANALYTICALLY PROVED`：上述 moment 数据、`det H_2`、`det H_3`、
  `sigma_3(c)` 及阈值 `c_*`；
* `Genuine finite-row obstruction`：只要数据来自 genuine law，Hankel PSD
  是必要条件，因此负行列式确实排除 genuine law；
* `OPEN`：小 `c` 补偿分支是否能延伸到 all rows、是否存在正特征函数、以及
  原始 Positive Backward-Tower Exact Zero-Set Rigidity；
* `发表性判断`：R199 比 R198 更接近可单独陈述的有限阶 obstruction，但和
  R197/R198 合在一起仍不足以构成原始问题的完整独立发表结果，整体仍为“无”。

## 与全局路线的拼接

R199 给出的是固定低阶 Hankel 检测，不能替代 R186 的 primitive inverse-Hankel
rank closure：它只排除补偿参数的中大幅度部分，不能控制 `c->0` 时检测阶是否
逃逸。它也不等于 R188 的 mixed-sector `(MT_r)`，因为这里完全只使用 one-body
moment Hankel，而未控制 `(ell,n)` 的总尾部。与 R173--R179 的 odd cone walls
拼接后，当前逻辑是：有限 odd/cross-row 墙与 R199 可压缩允许参数区，但仍缺少
统一的全阶 coercivity 或 compactness，才能把 `c_*` 再压到零。

## 下一最小任务

固定 `kappa_3=c`、`kappa_4=kappa_5=0`、`kappa_6=-3c^2`，只继续求下一个
未被 R199 检测到的 Hankel/Schur recurrence defect，优先追踪 `m_7,m_8` 引入
的自由 cumulants；目标是判断 `kappa_7,kappa_8` 是否能继续吸收该 defect，还是
出现与 `c` 无关的符号性 obstruction。不得把该有限层结果写成 all-row 定理。
