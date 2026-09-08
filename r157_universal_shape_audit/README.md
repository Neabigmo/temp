# R157 — Universal Sparse-Shape Partial-Sum / Singularity Audit

## Scope

This directory records a finite, exact formal check of the one-variable
reduction proposed in the R157 web round.  It is deliberately weaker than an
analytic theorem: no convergence radius, singularity classification,
all-order sign theorem, positivity, or genuine probability realization is
claimed.

For fixed odd `d`, write the universal sparse shape as

`E_d(t) = exp(t) A_d(t^2)`.

With the exact `D_3` Laurent representation of the three directions, the
formal full-SF identity reduces to

`< cosh(sqrt(s) p_d(theta)) product_j A_d(s R_j(theta)) > = 1`,

where `R_j = r_j^(2d)` and `<...>` is the zero Laurent coefficient/angular
average.  The direct coefficient multiplier of the new unknown `a_n=[s^n]A_d` is

`mu_{d,n}=3*binom(2dn,dn)/6^(dn)`.

Its complementary contraction defect is
`Delta_{d,n}=1-mu_{d,n}`.  For `d=5,7,9,11` and `n=1,...,8`, both `mu_{d,n}`
and `Delta_{d,n}` lie strictly between zero and one.  Thus the finite formal
recursion is non-singular at each audited order (for the displayed equation,
the relevant direct coefficient is `mu_{d,n}>0`; `Delta_{d,n}` is not the same
coefficient).

## Local audit

Run:

```text
F:\\anaconda3\\python.exe -u r157_universal_shape_audit\\audit_r157.py
```

The current exact D3 audit computes `d=5` through `s^3` and checks the
truncated residual through `s^3`.  It passed:

```text
R157_D3_CONTRACTION_PIVOTS_PASSED
R157_ONE_VARIABLE_RECURSION_PASSED
R157_EVEN_LOG_SHAPE_PASSED
R157_FINITE_FORMAL_RESIDUAL_PASSED
R157_AUDIT_COMPLETED
```

The audited coefficients are

```text
A_5(s) = 1 - 2617/84 s
         + 54284751977/186234048 s^2
         - 126007733040112291/156514818620160 s^3 + O(s^4).
```

Equivalently, for `E_5(t)=sum beta_n t^n`, the coefficients through degree six
are

```text
[1, 1, -2575/84, -2603/84,
 51391473017/186234048, 88865485039/310390080,
 -103399694276359513/156514818620160].
```

## Evidence boundary

`PROVED UNDER THE STATED FINITE FORMAL MODEL / LOCAL-AUDITED`: exact finite
coefficient recursion, positive pivots at the listed orders, and exact
truncated residual cancellation.

`OPEN`: uniform all-order coefficient bounds, a positive convergence radius,
singularity location/type, the joint `n~M` partial-sum asymptotic, all-order
bulk negativity or positivity, and the passage from the formal branch to a
nonnegative genuine law.

The result is a useful structural lemma and a clean next interface, but it is
not yet an independent publishable theorem.  The global publication verdict
therefore remains: **无（目前没有足够独立、完整、可审稿的发表性结果）**.
