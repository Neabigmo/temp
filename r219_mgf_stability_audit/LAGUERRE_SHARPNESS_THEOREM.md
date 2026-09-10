# Laguerre phase-obstruction theorem: proof-ready statement

**Evidence status:** `CITED-THEOREM VERIFIED / LOCAL-DERIVED`. The only imported input is the
four-zone estimate for normalized Laguerre functions in Imekraz--Robert--Thomann,
Proposition 3.2, [arXiv:1403.4913](https://arxiv.org/abs/1403.4913), published in
*Transactions of the American Mathematical Society* 368 (2016), 2763--2792.
The source PDF was checked directly: its normalization, `nu=4m+2alpha+2`, and
the endpoints `1/nu`, `nu/2`, and `3nu/2` match the conversion below. The
remaining identities and inequalities are local calculations. Novelty and final
manuscript-level citation checking remain separate questions.

## Theorem skeleton

Fix `rho>0`, `tau>0`, and `0<epsilon<1/4`. Put

`p_m(x)=x exp(-x^2) L_m^(1/2)(3x^2/2)`

and

`C_L=sup_{m>=1,x in R}|p_m(x)|`.

The cited four-zone estimate is stated for

`mathcal L_m^(alpha)(r)=sqrt(m!/Gamma(m+alpha+1)) exp(-r/2) r^(alpha/2) L_m^(alpha)(r)`

with `nu=4m+2alpha+2`. For `alpha=1/2`, `nu=4m+3`, and

`Q_m(r)=sqrt(r) exp(-r/2)|L_m^(1/2)(r)|`,

the four source bounds are `C(r nu)^(1/4)` on `0<=r<=1/nu`,
`C(r nu)^(-1/4)` on `1/nu<=r<=nu/2`,
`C nu^(-1/4)(nu^(1/3)+|nu-r|)^(-1/4)` on
`nu/2<=r<=3nu/2`, and `C exp(-gamma r)` on `r>=3nu/2`.

Moreover,

`Q_m(r)=sqrt(Gamma(m+3/2)/m!) r^(1/4) |mathcal L_m^(1/2)(r)|`

and `sqrt(Gamma(m+3/2)/m!) asymp nu^(1/4)`. Thus the first two zones give
`Q_m<=C`, the turning zone gives `Q_m<=C nu^(1/6)`, and the outer zone is
exponentially smaller. Since

`|p_m(x)|=sqrt(2/3) sqrt(r) exp(-2r/3)|L_m^(1/2)(r)|`

`=sqrt(2/3) Q_m(r) exp(-r/6)`,

the supremum is finite.

### Direct source-to-envelope audit

The turning-zone loss is exactly `nu^(1/6)`, not a uniform bound for `Q_m`.
The candidate carries the extra factor `exp(-r/6)`. For `r>=nu/2`,
`Q_m exp(-r/6)<=C nu^(1/6) exp(-nu/12)`, while the outer zone is bounded by
`C nu^(1/4) r^(1/4) exp(-(gamma+1/6)r)`. Hence

`C_L=sup_{m>=1,r>=0} sqrt(r) exp(-2r/3)|L_m^(1/2)(r)|<infinity`.

If the source states Proposition 3.2 only for `m>=1`, the finitely many omitted
indices are absorbed directly because each remaining polynomial is finite.

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
