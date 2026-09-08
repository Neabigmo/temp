# R175 — all-`d` positivity reduced to one mod-3 binomial correlation

日期：2026-09-09

## 结论定位

R174 的唯一系数缺口是证明每个 odd `d` 的 `C_d>0`。本轮把它精确化为一个
纯组合不等式，并用整数算术审计了 `d=3,5,...,501`。这不是所有 `d` 的证明，
也不是原始 rigidity 的证明；它把后续工作压缩到一个明确的 lemma。

## 精确化简

令 `d` 为 odd，

`J_d={j in {0,...,d}: j == -d (mod 3)}`, `u_j=binom(d,j)`,

`S_0(d)=sum_{j in J_d} u_j^2`,

`S_3(d)=sum_{j in J_d, j+3<=d} u_j u_(j+3)`.

由 `j=(d-3r)/2` 的换元和二项式对称性，R174 中的有限和满足

`B_d=9*6^(-d) S_0(d)`,

`H_d=9*6^(-d) S_3(d)`,

`L_d/A_d=binom(2d,d-3)/binom(2d,d)`

`= d(d-1)(d-2)/((d+1)(d+2)(d+3))`.

因此

`C_d>0` iff

`S_3(d)/S_0(d) > d(d-1)(d-2)/((d+1)(d+2)(d+3))`,

等价地，定义整数 gap

`Delta_d=((d+1)(d+2)(d+3)) S_3(d)
       -d(d-1)(d-2) S_0(d)`,

则 `C_d>0` iff `Delta_d>0`。

这里没有使用浮点近似，也没有把不同 residue class 混合。特别地，R174 的
正性问题现在是一个单独的“模 3 子列的 lag-3 相关商严格大于全列相关商”命题。

## 本机审计

`audit_r175.js` 使用 `BigInt` 递推生成二项式系数，逐个精确检查 odd
`3<=d<=501` 的 `Delta_d>0`。输出 marker 为：

`R175_MOD3_BINOMIAL_GAP_POSITIVE_THROUGH_501`

该 marker 只表示有限范围整数核验通过，不表示 `d -> infinity` 的证明。差距随
`d` 增大而快速变小，因此普通的粗粒度单调性或渐近估计不能直接替代严格不等式。

## 证据边界与下一步

- `PROVED EXACT REDUCTION`：`C_d>0` 与 `Delta_d>0` 的等价化简。
- `LOCALLY EXACT-AUDITED`：所有 odd `d<=501` 的严格正性。
- `OPEN`：所有 odd `d` 的 `Delta_d>0`；以及该正性如何与 varying-bottom、
  bare `RK=1` 接口和原始 `P_3K` 对象身份合并。

下一步应研究 `Delta_d` 的 residue-class correlation proof（或给出反例），
而不是继续扩大有限扫描或把 R174 写成全阶结论。

