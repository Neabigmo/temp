# R201 — the fifth row still permits a small-cubic Hankel escape

日期：2026-09-09

## 结论

在 R200 的 branch 上再加入第五个 radial row。记

`kappa_3=c, kappa_4=kappa_5=0, kappa_6=-3c^2,
 kappa_7=a, kappa_8=0, kappa_9=d, kappa_10=e`.

累积量到矩的精确转换为

`m_9=d+1260c+36a+28c^3`,

`m_10=e+945+4410c^2+120ca`.

对 `Q` 的五次 product expansion 得到

`F_5:=E Q^5-3840=(32/81)(e+60ca)`.

因此第五 exact row 只强制

`kappa_10=-60c kappa_7`.

它不约束 `kappa_9`。特别地，取 `a=0` 后有 `e=0`，仍可用 `d=kappa_9`
调节下一 Hankel Schur defect。

## 显式的 H5 可行性

在 `a=e=0` 时，令 `u=c^2`，并定义

`D_3=12-30u-6u^2`,

`B(c)=-5760c+21600c^3-4968c^5-252c^7`,

`C(c)=34560-604800u+705888u^2-2685096u^3-259497u^4+2646u^5`.

直接取 `H_5=(m_(i+j))_(0<=i,j<=5)` 的行列式，得到

`det H_5=-D_3 d^2+B(c)d+C(c)`.

只要 `D_3>0`，其关于 `d` 的最大值在

`d_opt=B(c)/(2D_3)`

取得，且

`det H_5(c,d_opt)=C(c)+B(c)^2/(4D_3)`.

对 `0<|c|<=1/10`，有 `D_3>0`，并且

`C(c)>=34560-604800(1/100)-2685096(1/100)^3
       -259497(1/100)^4>0`.

同时 R200 的 `a=0` 选择给出

`det H_4=288-2160u-486u^2-630u^3>0`,

而 R199 给出 `H_3\succ0`。所以对每个 `0<|c|<=1/10`，取
`a=e=0`、`d=d_opt`，就有

`H_3\succ0`, `H_4\succ0`, `H_5\succ0`,

且前五个 radial rows 全部满足。这是显式的 finite Hankel/finite-row
feasibility lemma，不是 representing measure、genuine all-row law 或原始
counterexample。

## 含义

R201 把 R199 的“低阶正性阈值”进一步区分开：即使加入第五 exact row，仍不能
用固定的 `H_5` 主块排除趋近 Gaussian 的小非零 cubic。新自由度 `kappa_9` 在
Schur defect 中以二次凹函数出现，正好提供有限层逃逸。若原始 rigidity 成立，
真正需要的是随阶数统一控制 odd cumulants/recurrence defects 的 coercivity，
或者直接证明 primitive inverse-Hankel failure order 有界；R201 本身不提供这
一步，也不推出 `(MT_r)`。

## 证据等级与全局位置

* `PROVED / ANALYTICALLY PROVED`：`m_9,m_10`、`F_5`、`det H_5` 及其
  `d_opt` 最大值公式；
* `FINITE HANKEL FEASIBILITY`：上述显式区间内存在满足前五行与 `H_5\succ0`
  的截断矩数据；
* `OPEN`：所有阶的正性、primitive rank closure、mixed-sector tail、原始
  Positive Backward-Tower Exact Zero-Set Rigidity；
* `发表性判断`：R201 是连续有限行失败机制的清晰新 lemma，但与 R198–R200
  合并仍不足以构成原始问题的完整独立发表结果，整体仍为“无”。

## 下一最小任务

固定 `a=e=0`、`d=d_opt(c)` 的 R201 分支，只研究第六个 radial row `F_6=0`
和 `H_6` 的首个 Schur defect：确定 `kappa_12` 的精确补偿式，并检查
`kappa_11` 是否继续提供可调的 odd escape。不得把这条有限层分支升级为全阶反例。
