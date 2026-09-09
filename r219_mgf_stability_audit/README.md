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

球面权重反演已经由 `MGF-QS-02` 闭合。下一轮应直接研究
`X-X'` 的 local symmetrized-MGF 控制在统一指数包络下能推出的 quantitative
Cramer/deconvolution 结论；先选择能够严格闭合的距离，再讨论是否能升级到
TV、Wasserstein 或 Kolmogorov。不要把当前 transform-stability 夸大为
classical-distance stability，也不要把 novelty 写成已认证。

## F. MGF-QS-02：sample-variance 的球面 L1 → 点态稳定性（2026-09-10）

本轮网页端把上一节的剩余关卡闭合为一个明确的内部区间定理；本机逐项核对
了密度、`n` 因子、Lipschitz 估计和 tent 积分。为消除网页公式排版造成的
歧义，以下给出经过校正的常数版本。

### 定理（显式内部点态界）

设 `n>=3`，`X_1,...,X_n` iid，`EX=0`、`EX^2=1`，并令

`Q_n=sum_i (X_i-X_bar)^2`、`q=sqrt((n-1)/n)`、`a=tau*q`。

在 `|s|<=tau` 上令

`D(s)=1/2*log(M(s)M(-s)/exp(s^2))>=0`、`M(s)=E exp(sX)`，

并假设 `E exp(2*tau*|X|)<=K`。若球面径向变换距离满足

`d_{n-1,tau}(Q_n,chi^2_{n-1})<=epsilon`，

且其定义使得 `E exp(H_t)<=1+epsilon`，则对任意 `tau'<a` 有

`sup_{|s|<=tau'} D(s) <= inf_{0<h<a-tau'} G(eta/(2*m_h); L_h,h)`，

其中

`eta=log(1+epsilon)/n`、`b_h=tau'+h`、

`c_n=Gamma((n-1)/2)/(sqrt(pi)*Gamma((n-2)/2))`、

`alpha_n=max(n-4,0)/2`、

`m_h=(c_n/a)*(1-(b_h/a)^2)^(alpha_n)`、

`L_h=sqrt(K)+b_h`，以及

`G(y;L,h)=sqrt(L*y)`（当 `y<=L*h^2`），

`G(y;L,h)=y/(2*h)+L*h/2`（当 `y>L*h^2`）。

一个完全闭式的可用选择是 `h=(a-tau')/2`。因此在固定
`n,tau,tau',K` 下，`epsilon -> 0` 时该界为
`O(sqrt(log(1+epsilon)/n))`，特别是固定 `n` 时为 `O(sqrt(epsilon))`。

### 审计要点

1. `V_1` 的密度确为
   `f_n(v)=c_n*(1-v^2)^((n-4)/2)`，`-1<v<1`。当 `n=3` 时为
   `1/(pi*sqrt(1-v^2))`；当 `n=4` 时为 `1/2`。缩放后
   `w_n(s)=f_n(s/a)/a`。在 `[-b_h,b_h]` 上的下界正是 `m_h`：
   对 `n=3,4` 指数取零，给出 `c_n/a`；对 `n>=5` 则反映端点密度退化。
2. 由 `M(s)>=1` 和 Cauchy--Schwarz，`|M'(s)/M(s)|<=sqrt(K)`；故
   `|D'(s)|<=sqrt(K)+|s|`，在 `[-b_h,b_h]` 上可取 `L_h`。
3. 球面平均及偶性给出
   `n*E D(a V_1)<=log(1+epsilon)`。若内部最大值为 `M_*`，在 `+s_0`
   与 `-s_0` 放置两个不相交的 Lipschitz tents；`D(0)=0` 保证
   `s_0>=M_*/L_h`，于是积分下界为
   `2*m_h*min(M_*^2/L_h, 2*h*M_*-L_h*h^2)`。因此若记
   `y_h=eta/(2*m_h)`，反解才恰好得到上面的 `G`。网页端本轮把
   `y_h` 写成了 `2*m_h*eta`；这是方向相反的常数错误，已按积分式校正。
4. `tau'<a` 是真实的 interior margin：当 `n>=5` 时 `w_n` 在端点趋零，
   不能仅靠该加权 L1 信息无条件控制 `|s|=a`。`n=3` 的端点奇性不破坏
   内部下界，但可另行研究端点增强界。

该结果只闭合到局部对称化 MGF/变换稳定性，尚未给出 TV、Wasserstein 或
Kolmogorov 的 Gaussian 距离率；下一接口仍是 quantitative Cramer/deconvolution。
证据标记：`PROVED UNDER STATED HYPOTHESES / LOCAL-PROOF-AUDIT`，不等于
novelty 已认证。

## G. MGF-QS-03：解析延拓审计与 Kolmogorov 阶段（2026-09-10）

网页端随后按本机指出的六处问题重做了 quantitative Cramer 接口。当前可保留
的修正版如下；这里明确区分自包含部分与依赖外部定理的部分。

### Y 阶段：可自包含核验的显式界

若 `0<=D(s)<=delta`（`|s|<=rho`），令 `Delta=2*delta`，`Y=X-X'`，则

`0<=log M_Y(s)-s^2<=Delta`。

在 `0<rho<2*tau` 下取

`A=exp(rho^2)*(exp(Delta)-1)`、`B=K^2+exp(rho^2)`、
`L=log(B/A)`，并在 `L` 足够大时取

`T=(2*rho/pi)*log(L/log L)`、`H=B/L`、

`C4=K/(8*tau^4)+3/4`、`r=min(T/2,(H/C4)^(1/4))`。

则条带最大值原理给出

`|M_Y(it)-exp(-t^2)|<=B*exp(-L*exp(-pi*|t|/(2*rho)))`，

从而在 `|t|<=T` 上有 `|M_Y(it)-exp(-t^2)|<=H`。Esseen 反演给出

`d_K(L(Y),N(0,2)) <= eta_Delta`,

其中可取

`eta_Delta=C4*r^4/(2*pi)+(2*H/pi)*log(T/r)+12/(pi^(3/2)*T)`。

这里 `M_Y(it)` 即 `phi_Y(t)`。四阶常数来自
`EX^4<=3K/(2*tau^4)`、`EY^4<=3K/tau^4+6`，再结合
`|cos u-1+u^2/2|<=u^4/24`。因此
`eta_Delta=O_{tau,rho,K}(1/log log(1/Delta))`。

本机审计确认上一版的符号/倒数问题已经被网页端修正：正确的条带参数是
`alpha=pi/(2*rho)`，正确的次调和函数是 `u=log(|F|/B)`；不能使用
`alpha=2*rho/pi` 或 `u=log(B/|F|)`。`T,H,r` 的对应关系也必须如上，
不能把 `H=B*exp(-L)` 与该 `T` 混用。

### X 阶段：依赖 Sapogov 的 Kolmogorov 界

将 `Y` 写成独立和 `X+(-X')`，两个 summand 都是均值零、方差一。引用
Sapogov 型定量 Cramer 定理（允许两个 summand 不同）可得

`d_K(L(X),N(0,1)) <= C_S/sqrt(log(1/eta_Delta))`，

其中 `C_S` 是该经典定理的绝对常数。因此固定 `tau,rho,K` 时确实有
`d_K(L(X),N(0,1))->0`，合并上一节给出从 radial discrepancy 到
Kolmogorov stability 的三重对数级粗模量。但当前公开核验只支持“显式到
Sapogov 绝对常数”，不支持“所有数值常数完全显式”；若不补齐该定理的
精确出处/适用条件与常数追踪，论文中应把 X 阶段标成引用定理后的结果。

### 边界反例与真正的下一关

标准化 Poisson `X_lambda=(N_lambda-lambda)/sqrt(lambda)` 满足
`D_lambda(s)=s^4/(24*lambda)+O_rho(lambda^(-2))`、固定指数包络（例如
`E exp(2*tau|X_lambda|)<=2*exp(2*tau^2*exp(2*tau))`），但它是离散分布，
所以 `d_TV(L(X_lambda),N)=1`；同时 Poisson CLT 说明它不否定 Kolmogorov
稳定性。其 odd cumulant 规模为 `kappa_3=lambda^(-1/2)`，而 even defect
为 `O(lambda^(-1))`，再次确认中心化/方差不能直接控制 odd part。

证据分层：Y 阶段为 `PROVED / LOCAL-PROOF-AUDIT`；X 阶段为
`PROVED AFTER NAMED QUANTITATIVE CRAMER THEOREM`；Sapogov 常数追踪、
利用 `phi_{X-X'}=|phi_X|^2` 改善三重对数、以及 TV 等强距离仍为 `OPEN`。

## I. MGF-QS-05：高频 odd 扰动与 Skellam 补偿（2026-09-10）

网页端本轮审查了一个试图把 Poisson 的 `sqrt(Delta)` 障碍加强为非幂率
障碍的显式族。本机按定义重新核对后，以下结论成立；这里的 `Delta` 是
reflected defect 的全量版本，不含 `1/2`：

`Delta_n=sup_{|s|<=rho} R_n(s)`，
`R_n(s)=log M_{W_n}(s)+log M_{W_n}(-s)-s^2`。

固定 `0<epsilon<1/4`，令 `phi` 为标准正态密度，
`c_n=n*exp(-(n^2-1)/2)`，
`h_n(x)=sin(n*x)-c_n*sin(x)`，并取
`f_n(x)=phi(x)*(1+epsilon*h_n(x))`。由于 `h_n` 有界且
`sup_{n>=2}c_n=2*exp(-3/2)<1/2`，`f_n` 为正密度（`n=1` 时 `h_1=0`）。
高斯积分公式
`E[exp(sG)sin(aG)]=exp(s^2/2-a^2/2)sin(a*s)` 给出

`E X_n=0`, `E X_n^2=1`,
`M_{X_n}(s)=exp(s^2/2)*(1+u_n(s))`,
`u_n(s)=epsilon*exp(-n^2/2)*(sin(n*s)-n*sin(s))`。

归一化和独立性还给出 `E J_n=0`、`Var(J_n)=lambda_n`、
`Var(W_n)=1`，其中
`J_n=N_{+,n}-N_{-,n}`、`N_{+,n},N_{-,n}~Poisson(lambda_n/2)`，
`W_n=(X_n+J_n)/sqrt(1+lambda_n)`，以及
`M_{J_n}(v)=exp(lambda_n*(cosh(v)-1))`。

取 `A_n=n^3+n` 和
`lambda_n=(2*epsilon^2/3)*exp(-n^2)*A_n^2*rho^2`。写
`v=s/sqrt(1+lambda_n)`，则

`R_n(s)=log(1-u_n(v)^2)+2*lambda_n*(cosh(v)-1-v^2/2)`.

这里 `|u_n(v)|<1/2` 可由全局界
`|sin(nv)-n*sin(v)|<=1+n` 直接得到（对 `n>=2` 足够小，`n=1` 为零）。
因而 `-log(1-u^2)<=2u^2`；另一方面
`cosh(v)-1-v^2/2>=v^4/24`。再用
`|sin(nv)-n*sin(v)|<=A_n*|v|^3/6`，得到逐点界

`R_n(s)>=(epsilon^2/18)*exp(-n^2)*A_n^2*v^4*(rho^2-v^2)>=0`

在 `|s|<=rho` 上成立。因此该族确实满足局部 reflected dominance。
同时 Taylor 余项给出

`R_n(s)<=lambda_n*v^4*cosh(rho)/12`，
从而
`Delta_n<= (epsilon^2/18)*exp(-n^2)*A_n^2*rho^6*cosh(rho)`。

在 `s=rho/2` 处，上述下界为
`(epsilon^2/18)*exp(-n^2)*A_n^2*v^4*(rho^2-v^2)`；当
`n>=n_0(rho,epsilon)` 使 `lambda_n<=1` 时，它至少为
`epsilon^2*rho^6*A_n^2*exp(-n^2)/1536`。故

`Delta_n=Theta_{rho,epsilon}(n^6*exp(-n^2))`.

固定 `tau` 时该族有统一指数包络：`f_n<=C_epsilon*phi`，且
`E exp(a|J_n|)<=2*exp(lambda_n*(cosh(a)-1))`；数列 `lambda_n` 有界，故
`sup_n E exp(2*tau|W_n|)<infinity`。这一步只使用普通上界，不把
`epsilon` 或 `tau` 随 `n` 调整。

最后，令 `I(a)=int_0^infinity phi(x)sin(a*x)dx`。两次分部积分给出
`I(n)=phi(0)/n+O(n^-2)`，而 `c_n I(1)` 指数小。因此
`|F_{X_n}(0)-1/2|>=epsilon*phi(0)/(4n)` 对充分大 `n` 成立。
由于 `|F_{W_n}(0)-F_{X_n}(0)|<=P(J_n!=0)<=lambda_n=o(1/n)`，有

`d_K(L(W_n),N(0,1))>=c(epsilon)/n`。

对扰动 CDF 做一次分部积分即可得到相应的 `O(1/n)` 上界，但对于排除
统一幂率，以上下界中的下界已经足够。结合 `Delta_n` 的双侧阶估计，
`1/n=Theta(1/sqrt(log(1/Delta_n)))`。

证据分层：`f_n` 的归一化、均值/方差、MGF、Skellam 缩放、dominance、
指数包络和 `d_K` 下界均为 `PROVED / LOCAL-PROOF-AUDIT`；网页端的数值网格
仅作辅助。该族严格排除任何统一 `C*Delta^alpha`（任意 `alpha>0`）的
reflection stability modulus，也排除 `o(1/sqrt(log(1/Delta)))`。但它尚未
证明当前三重对数上界最优，也没有闭合单对数平方根的统一上界；因此论文
门槛仍为 `OPEN`，下一关是匹配上界或构造更慢族，而不是直接起草论文。

## H. MGF-QS-04：反射结构的 Poisson 速率障碍（2026-09-10）

网页端进一步严格核验了标准化 Poisson 障碍。令
`X_m=(N_m-m)/sqrt(m)`、`Y_m=X_m-X_m'`，并令
`Delta_m=sup_{|s|<=rho}(log M_{Y_m}(s)-s^2)`。则

`R_m(s)=log M_{Y_m}(s)-s^2`
`=2*m*(cosh(s/sqrt(m))-1-s^2/(2*m))>=0`，

且
`rho^4/(12*m)<=Delta_m<=rho^4*cosh(rho)/(12*m)`。
在 `X_m=0` 处的原子质量和分布函数跳跃给出

`d_K(L(X_m),N(0,1))>=e^(-1/12)/(2*sqrt(2*pi*m))`

（采用 `d_K=sup_x|F(x)-G(x)|`）。因此任意固定指数包络类上的统一反射
恢复模量都不能是 `o(sqrt(Delta))`；若是幂率 `Delta^alpha`，则必有
`alpha<=1/2`。该族仍满足固定 `E exp(2*tau|X_m|)<=K`（任意
`K>2*exp(2*tau^2)*Phi(2*tau)` 对充分大 `m` 可用），并且它只否定 TV，
不否定 Kolmogorov，因为 Poisson CLT 仍给 `d_K->0`。

网页端同时确认：已有 iid self-convolution 的 polynomial Cramer 结果针对
`F*F`（特征函数平方），不能移植到本题的 reflected convolution
`F*F^\\leftarrow`（模平方）；相位被完全抹掉。故当前仍没有 reflection-specific
的正幂率，也没有证明三重对数是最优。

证据标记：Poisson 障碍为 `PROVED / LOCAL-AUDITED`；一般 Sapogov 链仍是
`CITED-THEOREM`；是否存在任意幂率、以及能否构造更慢的高频奇扰动障碍，仍
`OPEN`。论文门槛尚未达到。

## I. MGF-QS-06：消失矩 Laguerre 奇扰动候选（2026-09-10，待网页端核验）

本机提出一个可能严格否定“单对数平方根上界”的候选族。它不再只提高正弦
频率，而是让 odd perturbation 的前 `m` 个奇矩全部消失，从而把局部 MGF
defect 压到阶乘级，同时保持半轴 CDF 偏差为 `m^(-1/2)`。

令 `phi` 为标准高斯密度，
`p_m(x)=x*exp(-x^2)*L_m^(1/2)(3*x^2/2)`。待核验的标准 Laguerre 界为
`sup_m sup_x|p_m(x)|<=C_L<infinity`；取 `h_m=p_m/C_L`、
`f_m=phi*(1+epsilon*h_m)`，其中 `0<epsilon<1/4`。由此 `|h_m|<=1`、正性
和归一化成立。Laguerre
正交性给出 `int x^(2k+1)h_m(x)phi(x)dx=0`（`0<=k<m`），故均值为零、
方差仍为一。半轴偏差还有精确公式

`int_0^infinity h_m(x)phi(x)dx
 =[1/(3*C_L*sqrt(2*pi))]*(1/2)_m/m! ~ c/(C_L*sqrt(m))`。

写 `M_X(s)=exp(s^2/2)*(1+u_m(s))`。直接由生成函数可得精确式

`u_m(s)=(epsilon/C_L)*[s/(3*sqrt(3))]*exp(-s^2/3)*(-s^2/6)^m/m!`，

故对实数 `s` 有 `|u_m(s)|<=a_m*|s|^(2m+1)`，其中
`a_m=epsilon/[3*sqrt(3)*C_L*6^m*m!]`。

取独立对称 Skellam 补偿，`lambda_m=96*a_m^2*rho^(4m-2)`，
`W_m=(X_m+J_m)/sqrt(1+lambda_m)`。当 `m` 足够大时，四阶双曲余项逐点
补偿 `log(1-u_m^2)`，预期得到 `Delta_m=Theta(lambda_m)`，并且
`log(1/Delta_m)=2*m*log(m)+O(m)`。若半轴下界在补偿后保留，则

`d_K(W_m,N)>=c/sqrt(m)`，即
`d_K>=c*sqrt(log log(1/Delta_m)/log(1/Delta_m))`，

严格慢于正在追踪的 `1/sqrt(log(1/Delta))`。固定指数包络仍由 `|h_m|<=1`
和 `sup_m lambda_m<infinity` 给出。

证据状态只能标为 `CANDIDATE / LOCAL-DERIVATION`：网页端或本机还必须完成
Laguerre 一致函数界、Taylor 常数、Skellam dominance 双侧估计，以及补偿后
CDF 下界不被 `lambda_m` 吞掉的审计。若四项闭合，当前单对数平方根上界是
错误目标，应改攻含 `sqrt(log log)` 修正的最优模量或寻找更慢族。
