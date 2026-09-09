# Laguerre phase-obstruction theorem: proof-ready statement

**Evidence status:** `CITED-THEOREM / LOCAL-DERIVED`. The only imported input is the
four-zone estimate for normalized Laguerre functions in Imekraz--Robert--Thomann,
Proposition 3.2, [arXiv:1403.4913](https://arxiv.org/abs/1403.4913), published in
*Transactions of the American Mathematical Society* 368 (2016), 2763--2792.
The remaining identities and inequalities below are local calculations. The web
agent must still independently check the citation normalization before this is
labelled `PROVED` in a paper.

## Theorem skeleton

Fix `rho>0`, `tau>0`, and `0<epsilon<1/4`. Put

`p_m(x)=x exp(-x^2) L_m^(1/2)(3x^2/2)`

and

`C_L=sup_{m>=1,x in R}|p_m(x)|`.

The cited four-zone estimate implies `C_L<infinity`: with `r=3x^2/2`,
`nu=4m+3`, and

`Q_m(r)=sqrt(r) exp(-r/2)|L_m^(1/2)(r)|`,

one has `Q_m<=C` for `r<=nu/2` and `Q_m<=C nu^(1/6)` for `r>=nu/2`
(the outer region is exponentially smaller). Since

`|p_m(x)|=sqrt(2/3) sqrt(r) exp(-2r/3)|L_m^(1/2)(r)|`

`=sqrt(2/3) Q_m(r) exp(-r/6)`,

the supremum is finite.

Define `h_m=p_m/C_L` and the probability density

`f_m(x)=phi(x)(1+epsilon h_m(x))`,

where `phi` is the standard Gaussian density. Laguerre orthogonality gives

`int x^(2k+1) h_m(x) phi(x) dx=0` for `0<=k<m`;

the perturbation is odd, so `E X_m=0` and `E X_m^2=1`. The exact MGF identity is

`M_Xm(s)=exp(s^2/2)(1+u_m(s))`,

`u_m(s)=(epsilon/C_L)[s/(3sqrt(3))] exp(-s^2/3)(-s^2/6)^m/m!`.

Let

`a_m=epsilon/(3sqrt(3) C_L 6^m m!)`,
`lambda_m=96 a_m^2 rho^(4m-2)`,

and let `J_m` be symmetric Skellam with variance `lambda_m`. For
`W_m=(X_m+J_m)/sqrt(1+lambda_m)`, put `q=s/sqrt(1+lambda_m)`. Then

`R_m(s):=log M_Wm(s)+log M_Wm(-s)-s^2`

`=log(1-u_m(q)^2)+2lambda_m(cosh(q)-1-q^2/2)`.

For all sufficiently large `m`, `|u_m(q)|<=1/2` on `|s|<=rho`, and hence

`R_m(s)>=lambda_m q^4/16>=0`,

while

`R_m(s)<=lambda_m rho^4 cosh(rho)/12`.

If additionally `lambda_m<=1`, evaluating at `s=rho` gives

`lambda_m rho^4/64 <= Delta_m:=sup_|s|<=rho R_m(s)`

`<=lambda_m rho^4 cosh(rho)/12`.

Thus `Delta_m asymp lambda_m` and
`log(1/Delta_m)=2m log(m)+O(m)`.

The fixed exponential envelope follows from `|h_m|<=1`, `f_m<=(1+epsilon)phi`,
and `sup_m lambda_m<infinity`. Finally,

`|F_Xm(0)-1/2|`

`=epsilon/(3 C_L sqrt(2pi)) (1/2)_m/m!`

`asymp m^(-1/2)`, whereas adding `J_m` changes the CDF at zero by at most
`P(J_m!=0)<=lambda_m=o(m^(-1/2))`. Therefore

`d_K(W_m,N(0,1))>=c(epsilon,C_L) m^(-1/2)`

for all large `m`, and consequently

`d_K(W_m,N) >= c sqrt(log log(1/Delta_m)/log(1/Delta_m))`.

## Consequence for the main stability problem

Once the cited Laguerre normalization is checked, the fixed-EI, local-dominance
class admits no uniform bound of the form `C Delta^alpha` for any `alpha>0`, and
also no bound `C/sqrt(log(1/Delta))`. The latter fails by a factor of order
`sqrt(log log(1/Delta))`. The remaining research question is the matching upper
scale, not the previously proposed single-log upper bound.
