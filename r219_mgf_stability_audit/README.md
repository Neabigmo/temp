# MGF stability audit — rank one and the TV obstruction (2026-09-10)

## 证据等级

本记录对应网页端当前稳定性回合。网页端给出的代数推导已经过本机逐式核对；
反例的积分常数与 Poisson 修复在本机用独立 Node 数值积分复核。数值结果只作
`LOCAL-NUMERIC-AUDIT`，不替代解析证明。当前 MGF 二次型方向仍未完成直接
文献核杀，不能升级为已认证的新论文。

## A. 已闭合的 rank-one transform-stability

令 `EX=0`、`EX^2=1`、`Q=X^2`，并在 `|t|≤τ` 假设

`M_X(t)M_X(-t)≥exp(t^2)`。

定义

`d_rad,τ(Q,χ^2_1)=sup_{|t|≤τ}|exp(-t^2/2) E cosh(t√Q)-1|`，

`d_MGF,τ(X,G)=sup_{|t|≤τ} exp(-t^2/2)|M_X(t)-exp(t^2/2)|`。

若 `d_rad,τ≤ε`，则令 `g=exp(t^2/2)`、`a=M_X(t)/g`、
`b=M_X(-t)/g`。有 `ab≥1`，且 `1≤(a+b)/2≤1+ε`，于是

`|a-1|≤ε+sqrt(2ε+ε^2)`。

对 `b` 同理。因此

`d_MGF,τ(X,G)≤ε+sqrt(2ε+ε^2)=O(sqrt(ε))`。

同一计算还给出 `0≤E exp(H_t)-1≤ε`、
`0≤log E exp(H_t)-E H_t≤log(1+ε)`，以及

`0≤(1/2)log(M_X(t)M_X(-t)/exp(t^2))≤log(1+ε)`。

这里的稳定性是 **transform stability**，不是自动的 TV 或 Wasserstein
稳定性。

## B. TV/弱距离的严格障碍构造

取 `R=|G|`、`G~N(0,1)`，令

`c=exp(1/2)-1=(φ(0)-φ(1))/φ(1)`，

并令 `h(r)=1`（`r≤1`）、`h(r)=-c`（`r>1`）。给定 `R=r`，取
`P(S=1|R=r)=(1+h(r))/2`，设 `Y=SR`。则

`EY=0`、`EY^2=1`、`Y^2=G^2` a.s.，但 `Y` 非 Gaussian。

写 `a_Y(t)=E[h(R)sinh(tR)]`，则

`M_Y(t)=exp(t^2/2)+a_Y(t)`、
`M_Y(-t)=exp(t^2/2)-a_Y(t)`，

所以 `D_Y(t)=log(M_Y(t)M_Y(-t))-t^2≤0`，且 `a_Y(t)=O(t^3)`、
`D_Y(t)=O(t^6)`。

固定 `τ>0`，取 `C_τ=sup_{0<|u|≤τ}[-D_Y(u)/u^4]`，再取
`K>12C_τ`。令 `λ_n=K/n^4`、`N_n~Poisson(λ_n)` 独立于 `Y`，
`J_n=n(N_n-λ_n)`，并设

`X_n=(Y+J_n)/sqrt(1+K/n^2)`。

则 `EX_n=0`、`EX_n^2=1`，且对 `|t|≤τ`，令
`u=t/sqrt(1+K/n^2)`，有

`log M_Xn(t)+log M_Xn(-t)-t^2`
`=D_Y(u)+2λ_n[cosh(nu)-1-(nu)^2/2]≥0`。

最后一个不等式只用 `cosh x-1-x^2/2≥x^4/24`。另一方面，
`P(N_n≥1)→0`，而 `Y` 有 L1 密度；主事件上的平移/缩放趋于恒等，故
`X_n→Y` in TV。平方映射不增加 TV，于是

`d_TV(L(X_n^2),χ^2_1)→0`，但 `X_n→Y` in TV 且 `Y` 非 Gaussian。

因此：

`d_TV(L(Q_n),χ^2_1)→0 + local dominance`
`not⇒ X_n⇒N(0,1)`。

同一稀有跳跃的指数尾使固定 `t>0` 时 `E exp(H_{n,t})→∞`，所以 TV
径向接近也不能控制 Jensen gap；缺口是 uniform integrability，而不是
Jensen 计算本身。

## C. 可修复的附条件版本

若此外有统一指数包络 `E exp(2τ|X|)≤K_0`，并且
`d_TV(L(X^2),χ^2_1)≤δ`，则对 `|t|≤τ`

`|E cosh(tX)-E cosh(tG)|`
`≤sqrt(2δ(K_0+(1+exp(2τ^2))/2))`。

因此 `d_rad,τ≤η`，其中
`η=sqrt(δ(2K_0+1+exp(2τ^2)))`，再由 A 得

`d_MGF,τ≤η+sqrt(2η+η^2)`。

该结论仍只给局部 MGF 控制；要转成经典分布距离，必须另接 quantitative
Cramér/deconvolution 稳定性定理，不能直接调用 qualitative Lévy–Cramér。

## D. 一般 PSD 与 sample-variance 的剩余缺口

对 `A=B^T B`、`rank(A)=r`，正确的径向输入是球面 Laplace 变换

`d_{r,τ}=sup_{|t|≤τ}|exp(-t^2/2)E Ψ_r(t√Q)-1|`，

其中 `Ψ_r(s)=E_V exp(sV_1)`。在
`tr(A diag(σ_i^2))=r`、共同 MGF 域和 dominance 下，网页端的 Jensen
链可给出 integrated defect bound

`0≤Σ_i E_V D_i(t b_i^T V)≤log(1+ε)`。

sample-variance iid 情形进一步变成

`n E D(t sqrt((n-1)/n) V_1)≤log(1+ε)`，`V~Unif(S^{n-2})`。

尚未闭合的真正问题是由该球面加权 L1 控制反演出 `D(s)` 的点态控制，
需要统一解析/等连续性或更强的 transform envelope。随后才是从点态
对称化 MGF 接到经典距离的 quantitative Cramér 问题。

## E. 本机复核摘要

独立 Node 数值积分（把半正态积分在 `0–1` 与 `1–12` 分段，避免 `h` 的
跳点）得到：

- `c=0.6487212707001282`；
- `EY≈-1.85×10^-11`、`EY^2≈0.99999999999998`；
- `D_Y(t)/t^6` 在 `t=0.01,0.03,0.1,0.2,0.5` 分别约为
  `-0.01768,-0.01768,-0.01760,-0.01733,-0.01562`；
- `τ=0.5` 时 `C_τ≈0.00390474`，取 `K=12C_τ+1≈1.04685688`；
- 对 `n=10,30,100`，网格检查 `D_Y(u)+2λ_n[cosh(nu)-1-(nu)^2/2]`
  的最小值均为 `0`（出现在 `t=0`），其余网格点非负。

这些结果支持构造与常数，没有发现网页端本轮代数错误；但反例的解析版本、
一般 PSD 的点态反演以及文献 novelty 仍需继续审计。

## 下一轮建议

优先让网页端研究 sample-variance 的球面权重反演：在明确的统一指数包络
与导数/解析控制下，给出 `L1 spherical defect → sup pointwise D` 的定理，
或构造说明即使加入所给包络仍不够的最小反例。不要重新讨论期刊排名，
也不要把当前 transform-stability 夸大为 classical-distance stability。
