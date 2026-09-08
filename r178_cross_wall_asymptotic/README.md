# R178 — asymptotic scale of the all-odd cross-wall coefficient

日期：2026-09-09

## 结果

R177 给出的显式下界，在 `d=2s+1` 时可写成

`C_d >= underlineC_d`,

`underlineC_d = [3*d*(d+1)/((d+2)(d+3))]
               *2^(-2d-1)*3^(-s)*sqrt((2d)!)/(s!(s+1)!)`.

对阶乘使用带一阶余项的 Stirling 展开，得到

`underlineC_d
 ~ [3/(sqrt(2)*pi^(3/4))] d^(-3/4) 3^(-s)`

即

`underlineC_d
 ~ [3*sqrt(3)/(sqrt(2)*pi^(3/4))] d^(-3/4) 3^(-d/2)`.

因此

`C_d^(-1)=O(d^(3/4)3^(d/2))`

（这里是由下界得到的上界），R177 的 backward wall 进一步给出

`a_d(g)^2 <= O(d^(3/4)(sqrt(3)*t)^d)`

对 `d` 足够大；在 `N` 层 tower 的底部 `t=q^N`，相应形式为

`a_(d_N)(g_N^(0))^2
 <= O(d_N^(3/4)(sqrt(3)*q^N)^(d_N))`.

这里的 `O` 只表示由显式 `underlineC_d` 和 Stirling 余项导出的最终渐近上界，
不是对系数的下界。它说明高阶首 odd 系数若随 `d_N` 逃逸，必须以至少这个
尺度同步变小；但“非零系数可以任意小”仍未被排除，所以 moving-degree escape
仍然是 OPEN。

## 证据等级

- `PROVED UNDER GENUINE FULL-EXACT + FULL-SF`：R177 的显式下界及本轮的
  Stirling 渐近推论。
- `EXACT-AUDITED`：R177 的整数审计已核验下界所依赖的 gap inequality；
  本轮没有把浮点拟合当作证明。
- `OPEN`：由该尺度推出 uniform contradiction、bare `RK=1` 接口、原始
  `P_3K` identification、以及非 Gaussian exact law 的排除。

R178 的价值是给出高 odd sector 逃逸的可量化 envelope，而不是宣称已经完成
Positive Backward-Tower Exact Zero-Set Rigidity。

