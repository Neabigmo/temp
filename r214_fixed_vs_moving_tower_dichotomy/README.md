# R214：固定底层与 varying-bottom backward tower 的二分

日期：2026-09-09  
基线：R213，提交 `12e0d45`

## 0. 结论先行

在 genuine positive centered variance-one full-exact 类、局部 MGF 与
square-exponential 假设下，backward tower 有一个必须区分的二分：

1. **固定底层：** 若一个固定 law `mu` 对每个 `N` 都有正的 genuine exact
   preimage at scale `q^N`，则 `mu` 必须 angular-symmetric；
2. **varying bottom：** 对固定 `q`，存在一个 asymmetric genuine exact law
   `h`，等价于存在底层趋于 Gaussian 且 cubic MGF charge 每层非零的
   varying-bottom towers。

因此，原始 varying-bottom tower 的真正核心不是“塔深度本身”，而是是否存在
一个 asymmetric genuine exact single law，以及它能否与原始 spatial `P_3K`
接上。任何只证明固定 law 的 uniform angular backward gap 的路线，都不能直接
排除 varying-bottom orbit，因为该 gap 会随 OU scale 一起缩小。

## 1. 固定底层的 exact cone 排除

设 `mu` 属于 R101 的 genuine full-exact 类。对 angular charge `beta_(m,1)`，
R101 的 Herglotz/Parseval cone 给出

`S_3(t;mu)=sum_(m odd, m>=3) t^(-m)|beta_(m,1)(mu)|^2 <= 1`

是 `mu=P_t nu` 的必要条件。若 `mu` asymmetric，首个非零 odd Hermite mode
给出某个有限 `d>=3` 的 `beta_(d,1)(mu)!=0`，从而存在

`tau_ang(mu)>0`。

若固定 `mu=P_(q^N) nu_N` 对任意 `N` 成立，则必要条件要求
`q^N>=tau_ang(mu)`（按 R101 的 scale convention）。但 `q^N->0`，与
`tau_ang(mu)>0` 矛盾。因此固定底层的 infinite positive exact tower 必须
满足 `chi_1=0`，即在 moment-determinate 假设下对称。

这是 genuine full-exact 下的 `PROVED UNDER STATED HYPOTHESES` 小定理；它不
使用 bare `RK=1`，也不声称对称 even sector 已经 Gaussian。

## 2. varying-bottom 与 single-law asymmetry 等价

令 `A_3^MGF` 表示存在 `h` 使 R102 analytic log-MGF charge
`P_3K_MGF(h)` 非零；令 `B_q^MGF` 表示存在 `N_k->infinity` 的 towers，
其底层趋于 `1` 且每个底层的该 charge 非零。R166 已证明

`A_3^MGF  <=>  B_q^MGF`。

正向构造对任意 `h` 直接取

`g_N^(j)=P_(q^(N-j))h`, `0<=j<=N`。

半群律给出 `P_q g_N^(j+1)=g_N^(j)`；由于 `a_1(h)=a_2(h)=0`，

`||g_N^(0)-1||_2^2
 =sum_(m>=3) q^(Nm)|a_m(h)|^2
 <=q^(3N)||h-1||_2^2 ->0`.

而 R102 的 charge covariance 给出

`P_3K_MGF(g_N^(0);z)=P_3K_MGF(h;q^(N/2)z)`,

非零 analytic germ 的首个系数只被乘以正数，故每个有限 `N` 仍非零。反向
只需从任意一个 varying tower 取一个非零底层即可。

## 3. 这对原始命题的精确含义

R214 把三个常被混为一谈的陈述分开：

- 固定 law 的无限 positive exact divisibility：可排除 asymmetric angular
  law；
- varying-bottom tower：不比“存在一个 asymmetric genuine exact law”更强，
  因为任意单律的 OU orbit 都给出这样的 tower；
- 原始命题：还要把 scalar `RK=1` 识别为 genuine full-exact、把 spatial
  `P_3K` 接到 R102/R101 charge，并处理 even sector。

特别地，若 `h` asymmetric，则其 OU orbit 的未归一化 angular threshold 满足

`tau_ang(P_s h)=s tau_ang(h)`,

所以 varying-bottom 中 `tau_ang(g_N^(0))->0` 是结构必然，而不是证明失效的
偶然数值现象。R213 的 finite-depth asymmetric construction 说明在没有
full-SF exact cone 时甚至不能推出最基本的 symmetry；R214 的固定底层排除
必须保留其 exact-cone 假设。

## 4. 证据分级与发表性

### `PROVED UNDER STATED HYPOTHESES / LOCAL-AUDITED`

固定底层 asymmetric exclusion、R166 的 varying-bottom/single-law MGF-charge
等价、OU `L^2` 收敛和 charge nonvanishing scaling。

### `CONDITIONAL`

把这些结果转回原始 scalar `RK=1`；把 R102 MGF charge 等同于原始 spatial
`P_3K`；以及由 angular symmetry 继续推出 Gaussian。

### `OPEN`

是否存在 asymmetric genuine full-exact law；是否能用 positivity、same-factor
identity 与 all-row full-SF 排除它；primitive rank closure、mixed `(MT_r)`、
even sector 与最终 spatial zero-set rigidity。

独立、完整、可审稿的发表性总评仍为**无**。R214 是一个清楚的 structural
reduction/conditional theorem，不是原始问题的解决或 genuine counterexample。

## 5. 唯一下一步

直接攻单律问题：在 genuine full-exact + positivity 下，能否排除 asymmetric
`h`，或构造真正的 asymmetric `h`。优先使用 R101 的 all-degree cone 与
R186 的 inverse-Hankel rank escape 对接；不要再把 varying-bottom 的深度衰减
本身当作新的独立障碍。
