# R169 — spatial OU charge: zero-accumulation reduction on a fixed q-grid

日期：2026-09-09

R168 处理了 `m_3(h)!=0` 的一个具体 leading term。本轮抽取出更一般的
离散零点原则，说明固定 `q` 的序列 `q^N` 不是主要障碍；真正的障碍是空间
charge 沿 OU 轨道在 Gaussian 端是否可能 flat。

## 1. 解析零点命题

固定一个 genuine 底层 `h`，令

`F_h(r) = ell_3^sp(P_(r^2) h)`，

其中 `ell_3^sp(g)=<log g,psi_3>`，并假设 `F_h` 在 `|r|<r_0` 有收敛的实/复
解析展开

`F_h(r)=sum_(n>=0)c_n r^n`。

若 `F_h` 不恒等于零，令 `k` 为首个满足 `c_k!=0` 的阶数，则

`F_h(r)=c_k r^k(1+O(r))`。

所以存在 `0<r_1<=r_0`，使得 `F_h(r)!=0` 对所有 `0<r<r_1` 成立；实值情形下
其符号也由 `c_k` 固定。对任意固定 `q in (0,1)`，取充分大的 `N` 使
`q^(N/2)<r_1`，便有

`ell_3^sp(P_(q^N)h)!=0`。

证明只是解析函数的有限阶零点性质；不需要 spatial charge 具备 R102 的精确
OU 协变。

## 2. 与 R168 的关系

R132 在 `m_3(h)!=0` 时给出

`ell_3^sp(P_t h)=t^(3/2)m_3(h)/sqrt(6)+O(t^3)`。

写 `t=r^2` 后，首项是
`m_3(h)r^3/sqrt(6)`，因此 R168 正是本命题的 `k=3`、且 leading coefficient
已被显式识别的特例。若 `m_3(h)=0`，本轮只说明：一旦能证明 `F_h` 不是恒等
零，固定-q 最终层 persistence 仍自动成立；本轮没有证明这个 non-flatness。

## 3. tower 推论

若 genuine full-exact 类对前向 OU 闭包，定义

`g_N^(j)=P_(q^(N-j))h`, `j=0,...,N`。

则半群律给出 `g_N^(j)=P_q g_N^(j+1)`，而 R132 的 all-row smoothing 给出
`||g_N^(0)-1||_2<=8q^(3N/2)`。当 `N` 足够大时，解析零点命题给出
`ell_3^sp(g_N^(0))!=0`。

因此在明确的空间 charge convention 下，原始 varying-bottom 难题的离散部分
可压缩为一个更小的问题：

> 是否存在 genuine asymmetric exact law `h`，使空间 charge 轨道
> `r -> ell_3^sp(P_(r^2)h)` 在 `r=0` 附近恒等为零？

若答案是否定的，则所有非零空间 charge 单律都会自动生成任意深的 varying-bottom
非零塔；若答案是肯定的，必须给出满足 exact/positive 约束的 flat-orbit law。

## 4. 逻辑边界

本模块不证明原始 `P_3K` 就是 `ell_3^sp`，不证明每个 nonzero `P_3K_sp(h)`
都使 `F_h` non-flat，也不构造 flat 或非 Gaussian genuine exact law。它不把
R102 的 `P_3K_MGF`、Bargmann `C_g` 和空间 `ell_3^sp` 混为同一对象；
`RK=1=>full-exact/all-row` 仍是独立缺口。

## 5. 证据等级与发表性

解析零点命题及其固定-q 推论是 `PROVED UNDER STATED ANALYTIC HYPOTHESES`；
本机脚本只核验首项/余项的零点排除、几何序列和塔的指数关系。它是 R168 的
概念性加强，适合写入论文作为 reduction lemma，但单独仍不足以成为独立完整的
发表结果，因为 spatial non-flatness、genuine law existence/exclusion、scalar
`RK=1` 接口和原始 rigidity 未解决。

审计命令：

`F:\\anaconda3\\python.exe r169_spatial_ou_zero_accumulation_audit\\audit_r169.py`

