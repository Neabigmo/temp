# R171 — tail-based finite log expansion and spatial non-flatness

日期：2026-09-09

R170 把空间 `log` 投影的逐项展开列为额外解析假设。本轮说明：若只需要
`ell_3^sp` 的 leading asymptotic，而不是完整解析 germ，则 R132 的
genuine all-row exact tail、`L^2` 和 positivity 已足以控制有限阶 Taylor 余项。
因此 R170 的 odd-sector non-flatness 可以在一个更弱、可核验的分析接口下成立。

全程仍严格使用

`ell_3^sp(g)=<log g,psi_3>`，

不把它与 R102 `P_3K_MGF` 或 Bargmann `C_g` 混同。

## 1. 假设

令 `h=dmu/dgamma` 是 centered、variance-one、positive genuine density，
`h-1 in L^2(gamma)`，满足 genuine full same-factor identity (SF)，并且
实际满足 all-row exactness。因此 R132 的 exact-tail 与 Mehler lower bound 可用。

令 `d>=3` 是第一个非零 odd cumulant 阶，`a_n=E_mu[psi_n(X)]`。对 `d>=5`，
SF 的偶阶递推给出

`a_4=a_6=...=a_(2d-2)=0`,

而首个 odd 假设给出 `a_3=a_5=...=a_(d-2)=0`、`a_d!=0`。

置 `r=sqrt(t)`、`g_r=P_(r^2)h` 和 `u_r=g_r-1`，则

`u_r=sum_(n>=d) a_n r^n psi_n`.

## 2. 有限阶 log 余项：不需要完整解析性

由 Gaussian hypercontractivity
`||psi_n||_p <= (p-1)^(n/2)`（`p>=2`），对任意 `m` 且
`r^2(p-1)<1`，Hermite 系数的 Cauchy-Schwarz 给出

`||sum_(n>=m) a_n r^n psi_n||_p
 <= ||h-1||_2 [r^2(p-1)]^(m/2)/sqrt(1-r^2(p-1))`.

所以首个非零 Hermite 阶为 `d` 时，`||u_r||_p=O(r^d)`；去掉首项后，
odd tail 是 `O(r^(d+2))`，even tail 是 `O(r^(2d))`。这里没有假设 `h` 或
`F_h(r)` 在复邻域解析。

R132 的 exact-row tail 和 Mehler positivity 给出小 `r` 的下界

`g_r(x)>=c exp(-C x^2)`.

另一方面，Mehler kernel 的 `L^2(gamma)` Cauchy-Schwarz 上界给出
`log g_r(x)<=A+B r^2 x^2`。故 `|log g_r(x)|<=A'+B'x^2`。在
`{|u_r|<=1/2}` 上使用三阶 Taylor 余项，在 `{|u_r|>1/2}` 上用上面的高阶
`L^p` 小量和 Gaussian 多项式矩，取足够大的固定 `p`，得到

`< log(1+u_r)-u_r+u_r^2/2-u_r^3/3, psi_3 > = o(r^(3d))`.

这是有限阶 asymptotic，不是完整 power-series convergence；它正是本轮相对
R170 的假设削弱。

## 3. Theorem R171-A：所有 odd sector 的 spatial non-flatness

先看线性项：`<u_r,psi_3>=a_3r^3=0`（`d>=5`）。

对二次项，`psi_3` 为 odd，因此只有一个 odd 与一个 even Hermite mode 能贡献。
首项 `a_d r^d psi_d` 与任何 even mode 的三元积只有在 mode 阶不超过 `d+3`
时才可能非零；而 `d+1,...,2d-2` 的 even modes 已被 SF 消掉，`2d>d+3`
时三元积又为零。因此首个 odd mode与整个 quadratic projection 不产生
`r^(3d)` 项；剩余 odd/even tail 至少是
`O(r^(d+2)) O(r^(2d))=o(r^(3d))`。

对三次项，三份首项恰好产生

`<u_r^3,psi_3> = a_d^3 r^(3d) T_d + o(r^(3d))`,

其中 `T_d=<psi_d^3,psi_3> >0`。因此

`ell_3^sp(P_(r^2)h)
 = (T_d/3) a_d^3 r^(3d) + o(r^(3d))`, `d>=5`.

`T_d` 的显式式子为：令 `s=0,1,2,3`、`rho_s=(d-3+2s)/2`，则

`T_d = 1/(sqrt(6)(d!)^(3/2)) *
       sum_s rho_s! binom(d,rho_s)^2 s! binom(d,s) binom(3,s)
             (d+3-2s)! > 0`.

当 `d=3` 时，线性项已经给出
`ell_3^sp(P_(r^2)h)=a_3r^3+o(r^3)`；R132 进一步给出
`m_3(h)r^3/sqrt(6)+O(r^6)`。

## 4. 对 varying-bottom 的后果

R171-A 直接推出 `r -> ell_3^sp(P_(r^2)h)` 在 `r=0` 附近 non-flat`，无需
完整解析 germ。于是固定任意 `q in (0,1)`，对充分大 `N`

`ell_3^sp(P_(q^N)h)!=0`.

结合 genuine full-exact 的前向 OU 闭包和 R132 的
`||P_(q^N)h-1||_2<=8q^(3N/2)`，若原始 `P_3K_sp` 定义就是 `ell_3^sp`，则

`存在 asymmetric genuine full-exact 单律`
`<=>`
`存在任意深 varying-bottom 非零 spatial-charge 塔`

在本节假设下成立。正向用 `g_N^(j)=P_(q^(N-j))h`；反向从任意一个塔层直接
取 genuine 非零 charge 单律。

## 5. 证据等级与边界

R171-A 是 `PROVED UNDER STATED GENUINE ALL-ROW + FULL-SF HYPOTHESES` 的
finite-asymptotic theorem；本机脚本核验 Hermite 模式间隔、`T_d` 正性和
余项阶数接口。它不声称 exact tail 自动给出完整 complex analyticity，只给出
本 leading-term 所需的有限阶实渐近。

仍未解决：原始 `P_3K` 是否等于空间 `ell_3^sp`、`RK=1=>full-exact/all-row`、
asymmetric genuine exact law 的存在/排除，以及最终 rigidity。因此它是一个
更接近论文正文的条件性 reduction theorem，但整体独立、完整、可审稿发表性
判断仍为“无”。

审计命令：

`F:\\anaconda3\\python.exe r171_tail_based_spatial_nonflat_audit\\audit_r171.py`

