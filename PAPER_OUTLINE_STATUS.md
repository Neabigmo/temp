# Reflection-MGF stability: paper outline and evidence ledger

**Current status:** internal paper outline only. The central reflection-specific rate
question remains open; no submission-ready claim is made here.

## 1. Problem and normalization

Let `X` have `E X=0`, `E X^2=1`, and a fixed exponential envelope
`E exp(2 tau |X|)<=K`. Put `Y=X-X'` with `X'` independent and define

`R(s)=log M_Y(s)-s^2`

and `Delta=sup_{|s|<=rho} R(s)`, assuming `0<=R(s)<=Delta` on the real interval.
The factor `Delta=2 delta` relative to the one-sided even defect must remain explicit.

## 2. Positive stability package already obtained

The analytic-strip propagation and Esseen calculation give a fully explicit
`d_K(Y,N(0,2))<=eta_Delta`, with `eta_Delta=O(1/loglog(1/Delta))` under the fixed
`(tau,rho,K)` assumptions. Recovering `X` from `X+(-X')` then uses a cited classical
Sapogov--Cramer theorem; its absolute constant is not numerically tracked.

Evidence level: `PROVED` for the `Y` stage; `CITED-THEOREM` for the `X` stage.

## 3. Phase and lattice obstructions

The standardized Poisson family proves that no uniform Kolmogorov modulus can be
`o(sqrt(Delta))`, while its total-variation distance remains one. This separates
the TV obstruction from the Kolmogorov question and shows that odd cumulants/phase
can be of order `sqrt(Delta)` while the reflected even defect is order `Delta`.

Evidence level: `LOCAL-PROOF-AUDIT`.

## 4. High-frequency odd obstruction

The Gaussian odd perturbation plus symmetric Skellam compensation gives a rigorous
family with `Delta_n asymp n^6 exp(-n^2)` and
`d_K(W_n,N)>=c/n`. Hence no uniform power-law modulus `C Delta^alpha` exists, and
no modulus `o((log(1/Delta))^(-1/2))` exists.

Evidence level: `LOCAL-PROOF-AUDIT`; all factor-of-two and scaling checks are recorded
in `r219_mgf_stability_audit/README.md`.

## 5. Laguerre vanishing-moment obstruction

Use

`p_m(x)=x exp(-x^2)L_m^(1/2)(3x^2/2)`

and `f_m=phi(1+epsilon p_m/C_L)`. The four-zone estimate in Imekraz--Robert--Thomann,
Proposition 3.2, has now been checked directly in the source PDF, including its
normalization and the three finite endpoints, and implies `C_L<infinity`. The exact MGF has a zero of order `2m+1` at the
origin, while the half-axis bias is `Theta(m^(-1/2))`. Symmetric Skellam compensation
with `lambda_m=96 a_m^2 rho^(4m-2)` gives

`Delta_m asymp lambda_m`,
`log(1/Delta_m)=2m log(m)+O(m)`,
`d_K(W_m,N)>=c/sqrt(m)`.

Therefore the proposed single-log upper bound
`d_K<=C/sqrt(log(1/Delta))` is impossible if the cited normalization is accepted;
the lower obstruction is at least
`sqrt(loglog(1/Delta)/log(1/Delta))`.

Detailed statement: `r219_mgf_stability_audit/LAGUERRE_SHARPNESS_THEOREM.md`.
Evidence level: `CITED-THEOREM VERIFIED / LOCAL-DERIVED`. The mathematical family is
now proof-ready; external novelty checking and final manuscript citation review
remain open.

## 6. The actual decision tree

1. Promote the Laguerre family to a theorem with the cited four-zone estimate and
   withdraw the single-log upper-bound target.
2. Investigate whether the corrected
   `sqrt(loglog(1/Delta)/log(1/Delta))` scale is an upper bound, or whether a still
   slower reflection-specific family exists.
3. If a slower family exists, isolate its mechanism; otherwise prove a matching
   upper bound under the fixed exponential envelope.

## 6a. Literature boundary that controls the paper's novelty claim

Bobkov--Chistyakov--Götze prove polynomial quantitative stability for the
equal-factor convolution `F*F` in Kolmogorov distance, together with near-square-root
lower obstructions. That theorem is directly relevant only when `X` is symmetric,
because then `F*F^<- = F*F`. For the present unrestricted law, the observed object is
`F*F^<-` and its characteristic function is `|phi_X|^2`; the odd phase is erased.
The Laguerre construction is deliberately asymmetric and therefore lies outside
the equal-factor theorem's scope. The defensible novelty target is consequently not
"another self-convolution Cramer bound", but a reflection-specific local-MGF
stability problem with an explicit phase-obstruction family. This is a novelty
boundary, not yet a certified novelty result.

## 7. Publication threshold

The current package is already a potentially publishable negative result against
all power-law stability, but it is not yet a closed sharp-modulus paper. Before
writing a submission draft, require one of:

- a web-verified Laguerre theorem plus a defensible corrected sharpness statement; or
- a reflection-specific upper bound matching the strongest verified obstruction.

Until then, this outline is a map and evidence ledger, not a final manuscript.
