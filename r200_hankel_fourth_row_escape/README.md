# R200 — the fourth row does not sharpen the Hankel threshold

日期：2026-09-09

## 结论

继续沿 R198 的补偿分支，并同时要求第四个 radial row：

`kappa_3=c, kappa_4=kappa_5=0, kappa_6=-3c^2`，
`F_4:=E Q^4-2^4 4!=0`。

直接展开同因子 product polynomial 得到精确恒等式

`F_4=(16/27)kappa_8`。

所以第四行只强制 `kappa_8=0`；`kappa_7` 不出现在这一行，因为任何总次数为
8、含单变量七次幂的项还必须含另一个单变量一次幂，而 `m_1=0`。

令 `a=kappa_7`、`u=c^2`。在 `kappa_8=0` 时，前八阶 moments 为

`(m_0,...,m_8)=(1,0,1,c,3,10c,15+7u,a+105c,105+196u)`.

相应的 `H_4=(m_(i+j))_(0<=i,j<=4)` 的行列式为

`D_4(c,a)=(u-2)a^2-36c(4-3u)a
           +288-2160u-486u^2-630u^3`.

对 `0<=u<u_*`，其中
`u_*=(sqrt(33)-5)/2` 是 R199 的阈值平方，`H_3` 已正定。取

`a_opt=-18c(4-3u)/(2-u)`

则

`D_4(c,a_opt)
 =[(2-5u-u^2)(-630u^2+1008u+288)]/(2-u)>0`.

因此对每个 `0<|c|<sqrt(u_*)`，存在一个满足 R198、第四 radial row 以及
`H_4\succ0` 的有限 moment 数据。这里的“存在”是有限 Hankel/有限 row
可行性，不是说该截断必有 representing measure，更不是 all-row positive law。

## 证明链与含义

1. R198 给出 `F_2=F_3=0` 的补偿条件；R200 的 product expansion 给出
   `F_4=(16/27)kappa_8`，故 exact fourth row 与 `kappa_8=0` 等价。
2. `H_3` 的前三个 leading principal minors 为正，且
   `det H_3=6(2-5u-u^2)>0`，所以当 `u<u_*` 时 `H_3\succ0`。
3. 对固定正定 `H_3`，`H_4\succ0` 等价于最后一个 Schur defect 为正，也就是
   `D_4(c,a)>0`。上面的 `a_opt` 使其显式为正。

这说明 R199 的固定低阶 obstruction 在下一行没有继续收紧：`kappa_8` 被
第四行消掉后，新的奇 cumulant `kappa_7` 仍能吸收 `H_4` 的 Schur defect。
故若最终 rigidity 成立，必须控制随阶数移动的 odd cumulant/recurrence
自由度，不能只累加固定 Hankel minors。

## 证据等级与全局位置

* `PROVED / ANALYTICALLY PROVED`：`F_4=(16/27)kappa_8`、`D_4(c,a)`、
  `a_opt` 以及 `D_4(c,a_opt)>0` 的精确公式；
* `FINITE HANKEL FEASIBILITY`：有限矩数据可以同时通过第四 radial row 与
  `H_4\succ0`，不等同于 genuine representing measure；
* `OPEN`：高阶 rows 是否最终消灭所有 `c!=0`、`(MT_r)`、primitive
  inverse-Hankel rank closure、以及原始 backward-tower rigidity；
* `发表性判断`：R200 是 R199 后的明确“下一阶不再收紧”定理/obstruction，
  但与 R198/R199 合并仍不足以构成原始问题的完整独立发表结果，整体仍为“无”。

## 下一最小任务

固定这条 branch，只研究第五个 radial row `F_5=0` 与下一 Hankel Schur defect
的联立关系：先确定 `kappa_10` 是否再次被 exact row 唯一消去，再看新出现的
`kappa_9` 能否继续使 `H_5` 保持正定。不要把有限阶可行性升级为 all-row 结论。
