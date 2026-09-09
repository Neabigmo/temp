# R198 — exact quadratic normal form of the finite-row cubic compensation

日期：2026-09-09

## 结论

在中心化、方差一的 iid 类中，令 `c=kappa_3`。前两个非平凡 radial rows
的局部补偿有如下精确正规形：

`F_2:=E Q^2-8 = (4/3) kappa_4`,

所以 `F_2=0` 精确强制 `kappa_4=0`。在切片
`kappa_4=kappa_5=0` 上，第三行满足精确恒等式

`F_3:=E Q^3-48 = (8/9) kappa_6 + (8/3)c^2`.

因此 `F_3=0` 等价于

`kappa_6=-3c^2`.

这不是只在形式级数中成立的拟合，而是有限阶 genuine moment identity。它与
R191/R192 的 formal branch 一致：若 `c=6epsilon`，则 R192 的二阶系数
`b_2=-3/20` 给出

`kappa_6=6! b_2 epsilon^2=-3c^2`.

所以 finite-row IFT 补偿在最初两步并没有产生新的矛盾；它准确重现了形式
radial-preserving direction 的低阶起点。真正 OPEN 的是该补偿分支在全阶上
是否仍能保持 characteristic positive-definiteness。

## 1. `F_2` 的精确计算

写

`Q=(2/3)(sum_i X_i^2-sum_(i<j)X_iX_j)`.

对任意中心化方差一 law，记 `m_4=3+kappa_4`。直接展开：

`E(sum_i X_i^2)^2=3m_4+6`,

`E[(sum_i X_i^2)(sum_(i<j)X_iX_j)]=0`,

`E(sum_(i<j)X_iX_j)^2=3`.

于是

`E Q^2=(4/9)(3m_4+9)=8+(4/3)kappa_4`.

## 2. `F_3` 在补偿切片上的精确计算

令 `kappa_4=kappa_5=0`。此时

`m_3=c`, `m_4=3`, `m_5=10c`,

`m_6=15+10c^2+kappa_6`.

`Q^3` 的逐项 product expansion 只读取这些单变量 moments；直接收集得到

`E Q^3=48+(8/9)kappa_6+(8/3)c^2`.

因此第三行没有未知的高阶项，也没有近似误差。注意这个公式的量词是在
`mean=0, variance=1, kappa_4=kappa_5=0` 的 genuine moment 类内；它不是把
finite Hankel ghost 当成概率律。

## 3. 与 R192 formal branch 的一致性

R192 的 `d=3` formal characteristic log jet 写作

`log(phi_epsilon/phi_0)
 =epsilon(iu)^3+b_2 epsilon^2(iu)^6+O(epsilon^4u^12)`.

R191 的 angular constants 是

`A_3=3 binom(6,3)/6^3=5/18`,
`B_3=9(1+1)/6^3=1/12`,

故二阶径向抵消给 `-b_2=B_3/(2A_3)=3/20`。由于
`kappa_3=3!epsilon=6epsilon`、`kappa_6=6!b_2epsilon^2`，得到
`kappa_6=-3kappa_3^2`，恰与 `F_3=0` 的 genuine exact calculation 相同。

这说明 R190–R192 的 formal direction 并非低阶代数错误；同时也说明继续计算
第三、第四个 radial row 的低阶补偿不会自动产生 positivity obstruction。

## 4. 证据等级与全局位置

* `PROVED / ANALYTICALLY PROVED`：`F_2=(4/3)kappa_4`；补偿切片上
  `F_3=(8/9)kappa_6+(8/3)kappa_3^2`；`F_3=0 => kappa_6=-3kappa_3^2`；
* `Genuine finite-row identity`：公式只使用真实 iid moments，不使用 ghost；
* `FORMAL CONSISTENCY`：与 R191/R192 的 `b_2=-3/20` 一致；
* `OPEN`：补偿分支的 all-order convergence、positive-definiteness、全 exact
  realization，以及原始 backward-tower rigidity；
* `发表性判断`：R198 是可作为局部正规形引理的精确结果，但单独不足以构成
  原始问题的完整发表结果，整体仍为“无”。

## 下一最小任务

不再盲目展开更高 radial rows。只研究 R198 补偿分支的第一个正定性问题：以
`kappa_3=c, kappa_6=-3c^2, kappa_4=kappa_5=0` 为输入，求最低阶 moment
Hankel 主子式对 `c` 的精确展开；若其在固定阶仍正，记录该阶并量化检测阶
逃逸；若出现负项，给出严格的有限 PSD obstruction。

