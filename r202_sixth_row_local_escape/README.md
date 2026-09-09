# R202 — the sixth row also has a local Hankel escape

日期：2026-09-09

## 结论

固定 R201 的选择 `kappa_7=kappa_8=kappa_10=0`，令
`kappa_9=d`、`kappa_11=f`、`kappa_12=g`。累积量--矩递推给出

`m_11=f+17325c+1540c^3+55d`,

`m_12=g+10395+97020c^2-8162c^4+220cd`.

在这条 branch 上，直接展开 `Q^6` 得到精确恒等式

`F_6:=E Q^6-2^6 6!
     =(64/243)(g+120cd-3213c^4)`.

因此第六个 exact row 只确定

`kappa_12=3213c^4-120c kappa_9`；

`kappa_11` 完全不进入这一 row，因为总次数为 12 的含 `m_11` 项还必须含
一个一次幂，而 `m_1=0`。

## H6 的局部正定性

沿 R201 的显式选择

`d(c)=B(c)/(2D_3(c))`,

其中 `B,D_3` 见 R201，并令
`g(c)=3213c^4-120c d(c)`、`f(c)=0`。只要 `c` 足够接近 0，分母
`D_3(c)=12-30c^2-6c^4` 非零，因此 `d(c),g(c)` 连同矩阵

`H_6(c)=(m_(i+j)(c))_(0<=i,j<=6)`

都是 `c` 的连续函数。`H_6(0)` 正是标准 Gaussian 的七阶 moment Hankel
矩阵，严格正定。由正定矩阵锥的开性，存在 `epsilon>0`，使得

`H_6(c)\succ0` 对所有 `|c|<epsilon` 成立。

同时 R201 已保证前五个 rows，R202 的公式保证第六个 row，故得到：存在一
个明确构造的 finite-row branch，使六个 exact radial rows 与 `H_6\succ0`
同时成立，且 `c` 可以非零并任意接近 0。

这一步是严格的局部连续性结论；数值审计只用来检查所选分支在小样本点上的
实现，不把数值点冒充统一半径或 all-row law。

## 含义

R202 说明继续增加固定低阶 row 并不会自动产生一个与 `c->0` 无关的正性墙：
第六行把新的最高偶 cumulant `kappa_12` 消去，而新的奇 cumulant `kappa_11`
仍然自由；即使把它固定为 0，Gaussian 点的正定性也保证一个局部 escape。
这不是 full-exact counterexample，因为 `epsilon` 尚未统一、所有更高 rows
尚未满足，也没有证明截断矩序列可延拓为 genuine law。

## 证据等级与全局位置

* `PROVED / ANALYTICALLY PROVED`：`m_11,m_12` 的位置、`F_6` 的精确补偿式；
* `FINITE-ROW LOCAL FEASIBILITY`：由 `H_6(0)\succ0` 与开性得到非零小 `c`
  的有限行正定分支；
* `OPEN`：uniform-in-order control、all-row positive realization、primitive
  inverse-Hankel closure、`(MT_r)` 以及原始 rigidity；
* `发表性判断`：R202 是连续有限行逃逸链的局部闭合，但和 R197–R201 一样，
  不能单独构成原始问题的完整独立发表结果，整体仍为“无”。

## 下一最小任务

不要机械地继续逐行展开。回到全局接口：把 R197–R202 的 finite-row escape
链抽象成一个统一的“最高偶 cumulant可解、下一奇 cumulant留自由度”的递归
命题，并检查它与 R186 的 inverse-Hankel rank escape 是否能严格拼接；若不能，
明确指出首次需要真正利用 same-factor angular identity 的位置。
