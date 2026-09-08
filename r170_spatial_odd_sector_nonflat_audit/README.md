# R170 — first odd sector forces spatial log-density non-flatness

日期：2026-09-09

本轮把 R169 的 `F_h(r)` non-flatness 假设，在一个明确的 genuine analytic
full same-factor 类中推进了一步。这里仍把空间量严格定义为

`ell_3^sp(g)=<log g,psi_3>`。

## 1. 假设与记号

令 `h=dmu/dgamma` 是 centered、variance-one 的 genuine density，`h-1` 属于
`L^2(gamma)`，其 normalized Bargmann log 在原点解析，并满足 genuine full
same-factor identity (SF)。设 `d>=3` 是第一个非零 odd cumulant 阶：

`kappa_3=kappa_5=...=kappa_(d-2)=0`, `kappa_d!=0`.

另加一个明确的空间解析假设：对 `r` 在 0 的邻域，

`F_h(r)=ell_3^sp(P_(r^2)h)`

允许把 `log(1+P_(r^2)h-1)` 的 Hermite 级数逐项展开到所需阶数。这个假设
是 R169 的 `analytic orbit` 假设；本轮没有声称它仅由 square-exponential tail
自动推出。

记 `a_n=E_mu[psi_n(X)]`。在第一个非 Gaussian 阶之前
`a_d=kappa_d/sqrt(d!)`。

## 2. 定理 R170-A：空间 charge 的首项

令 `u_r=P_(r^2)h-1=sum_(n>=3) a_n r^n psi_n`。由 SF 的偶阶系数递推，

`a_4=a_6=...=a_(2d-2)=0`。

当 `d=3` 时，直接有

`F_h(r)=a_3 r^3+O(r^4)`;

更精确的 R132 展开为
`F_h(r)=m_3(h)r^3/sqrt(6)+O(r^6)`。

当 `d>=5` 为奇数时，

`F_h(r) = (T_d/3) a_d^3 r^(3d) + O(r^(3d+1))`,

其中

`T_d=<psi_d^3,psi_3> > 0`.

一个完全显式的正表达式是：令
`r_s=(d-3+2s)/2`，则

`T_d = 1/(sqrt(6)(d!)^(3/2)) *
       sum_(s=0)^3 [ r_s! binom(d,r_s)^2 s! binom(d,s) binom(3,s)
                     (d+3-2s)! ]`.

所有 summand 都正，因此 `T_d>0`。例如 `T_5=570 sqrt(5)`；该数值只用于
检查组合式，不是依赖数值 law 的结论。

### 证明的关键阶数审计

`log(1+u_r)=u_r-u_r^2/2+u_r^3/3-...` 中：

1. 线性项只能通过 `a_3` 投影到 `psi_3`，而 `a_3=0`（`d>=5`）。
2. 二次项若能投影到 odd `psi_3`，必须含一个 odd 和一个 even Hermite
   coordinate。最早可能是 `(d,2d)`；但
   `<psi_d psi_(2d),psi_3>=0`，因为 `He_d He_3` 的最高阶只有 `d+3<2d`。
3. 三次项的最低总阶是 `3d`，且只有 `(d,d,d)` 达到该阶，产生
   `(T_d/3)a_d^3`。
4. 四次及以上项的总阶至少 `4d`；其余三次/二次组合从 `3d+1` 起。

这就把 R133 的 first-odd even-cumulant cancellation 与空间 log projection
首次接起来。它不是把 `P_3K_MGF`、Bargmann `C_g` 与空间 `ell_3^sp` 混同。

## 3. R169 的加强与 tower 结论

R170-A 给出 `F_h` 在 `r=0` 附近不恒等为零：`d=3` 有三阶首项，`d>=5` 有
`3d` 阶首项。于是 R169 的解析零点归约适用；固定任意 `q in (0,1)`，
`ell_3^sp(P_(q^N)h)!=0` 对所有充分大 `N` 成立。若 genuine full-exact 类
对前向 OU 闭包，则

`g_N^(j)=P_(q^(N-j))h`,
`g_N^(j)=P_q g_N^(j+1)`,
`||g_N^(0)-1||_2<=8q^(3N/2)`.

因此，只要原始空间 `P_3K_sp` 的定义确实是 `ell_3^sp`，在本轮全部假设下

`存在 asymmetric genuine analytic full-exact 单律`
`<=>`
`存在任意深 varying-bottom 非零 spatial ell_3 塔`。

## 4. 边界与证据等级

R170-A 是 `PROVED UNDER STATED ANALYTIC FULL-SF HYPOTHESES`；本机脚本审计
Hermite 组合式的正性、二次项的度数消失、`d=3`/`d>=5` 的阶数和 R169 tower
缩放。尚未证明：

- 项目原始 `P_3K` 是否就是空间 `ell_3^sp`；
- square-exponential exact tail 是否足以推出所需的空间逐项 log 解析性；
- `RK=1` 是否等价于 genuine full-exact/all-row；
- 是否存在 asymmetric genuine exact law，或能否排除它。

所以 R170 是可以写入论文的条件性局部 theorem/reduction，但单独仍不是独立、
完整、可审稿的发表结果；整体发表性判断仍为“无”。

审计命令：

`F:\\anaconda3\\python.exe r170_spatial_odd_sector_nonflat_audit\\audit_r170.py`

