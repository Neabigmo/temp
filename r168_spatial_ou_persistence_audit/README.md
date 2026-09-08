# R168 — spatial log-density charge: eventual persistence on a fixed OU grid

日期：2026-09-09

本轮把 R132 的小-t log-density 展开推进到一个严格但有明确范围的
离散 OU 结论。它处理的是空间线性投影

`ell_3^sp(g)=<log g, psi_3>`，

而不是 R102 的 analytic log-MGF charge，也不是 normalized Bargmann log
`C_g=log B_g`。除非项目原始定义明确给出
`P_3K_sp=ell_3^sp`，否则本模块不能代替原始 `P_3K`。

## 1. 假设

令 `h=dmu/dgamma` 是 genuine、centered、variance-one、full-exact/all-row
的 `L^2(gamma)` 密度，并令 `g_t=P_t h`。假设 R132 的 local estimate 在
`0<t<=1/64` 上成立：存在 `C_h<infinity` 使

`ell_3^sp(g_t) = t^(3/2) m_3(h)/sqrt(6) + R_h(t)`,

`|R_h(t)| <= C_h t^3`.

这里 `m_3(h)=E_mu[X^3]`；由于 centered，亦即三阶中心矩。

## 2. 局部 persistence lemma

若 `m_3(h)!=0`，取

`t_h = min{1/64, (|m_3(h)|/(2 sqrt(6) C_h))^(2/3)}`

（若 `C_h=0`，第二项视为 `infinity`）。则对每个 `0<t<=t_h`，

`|ell_3^sp(P_t h)| >= |m_3(h)| t^(3/2)/(2 sqrt(6)) > 0`.

证明只有三角不等式：主项为
`|m_3(h)|t^(3/2)/sqrt(6)`，余项至多为
`C_h t^3`，而 `t^(3/2)<=|m_3(h)|/(2 sqrt(6) C_h)`。

## 3. 固定 q 的 arbitrarily-deep tower corollary

固定任意 `q in (0,1)`。令 `N_0` 为满足 `q^(N_0)<=t_h` 的最小非负整数，
并对 `N>=N_0` 定义

`g_N^(j)=P_(q^(N-j)) h`, `j=0,...,N`.

前向 OU 闭包与半群律给出

`g_N^(j)=P_q g_N^(j+1)`.

在 genuine full-exact 类的闭包假设下每层仍为正、centered、variance-one、
exact；R132 的 uniform smoothing estimate 给出

`||g_N^(0)-1||_2 <= 8 q^(3N/2) -> 0`.

另一方面，`q^N<=t_h` 时

`ell_3^sp(g_N^(0)) != 0`.

因此：

> 若存在一个 genuine full-exact law `h` 且 `m_3(h)!=0`，并且原始空间
> `P_3K_sp` 的定义就是 `ell_3^sp`，则对每个固定 `q` 都存在任意深的
> varying-bottom 非零 spatial-charge tower。

这条推论不需要假设 spatial charge 具有 R102 那样的全参数 OU 协变；只用到
R132 在 `t=0` 附近的 leading term。

## 4. 严格边界

本模块没有构造 `m_3(h)!=0` 的 genuine full-exact 非 Gaussian law，也没有证明
`RK=1` 等价于 full-exact/all-row。因此它不是原始命题的反例或证明。

它也不能处理 `m_3(h)=0` 而空间 `P_3K_sp` 通过更高 odd sector 非零的情况；
更不能把 `ell_3^sp`、`P_3K_MGF`、`C_g` 或原始未定义的 `P_3K` 混写。

## 5. 证据等级与发表性判断

在 R132 的 displayed expansion、genuine all-row OU closure 和明确的 spatial
charge convention 下，本模块是 `PROVED UNDER STATED HYPOTHESES`，并由脚本
核验参数不等式、固定-q 离散序列和 tower 的 `L^2` 收敛。

它是一个可作为论文局部 lemma 的候选，但单独不足以构成独立、完整、可审稿的
发表结果：关键的 genuine asymmetric exact law existence/exclusion、scalar
`RK=1` 接口、高阶 spatial charge persistence 和原始 rigidity 仍为 `OPEN`。

审计命令：

`F:\\anaconda3\\python.exe r168_spatial_ou_persistence_audit\\audit_r168.py`
