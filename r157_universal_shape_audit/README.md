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

## Exact formal triangular lemma

Assuming the displayed one-variable reduction is the correct formal
full-SF reduction, write `A_d(s)=1+sum_{n>=1} a_n s^n`.  At order `s^n`, the
only occurrence of the new coefficient `a_n` comes from choosing `a_n s^n`
in exactly one of the three factors.  Hence

`[s^n](F_d(A_d;s)-1) = mu_{d,n} a_n + P_{d,n}(a_1,...,a_{n-1})`,

where `P_{d,n}` is already determined by lower coefficients and

`mu_{d,n}=3*binom(2dn,dn)/6^(dn)>0`.

Consequently the formal equation has a unique coefficient-by-coefficient
solution, with `a_n=-P_{d,n}/mu_{d,n}` for every `n`.  For fixed odd `d>=5`,
`mu_{d,n}<1` as well, since
`mu_{d,n} <= 3*(2/3)^(dn) < 1`; the complementary quantity
`Delta_{d,n}=1-mu_{d,n}` is therefore positive.  This is an all-order formal
existence/uniqueness statement conditional on the one-variable reduction, not
an analytic existence theorem.

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
A_5(s) = 1 - 25/84 s
         + 14995625/186234048 s^2
         - 733418534375/31302963724032 s^3 + O(s^4).
```

Equivalently, for `E_5(t)=sum beta_n t^n`, the coefficients through degree six
are

```text
[1, 1, 17/84, -11/84,
 -708289/26604864, 12182959/310390080,
 910692632903/156514818620160].
```

## Evidence boundary

`PROVED UNDER THE STATED FORMAL REDUCTION`: all-order triangular formal
existence/uniqueness, conditional on the displayed one-variable equation and
the exact coefficient formula for `mu_{d,n}`.

`LOCAL-AUDITED`: exact finite coefficient recursion, positivity of `mu` and
`Delta` at the listed orders, and exact truncated residual cancellation.

`OPEN`: uniform all-order coefficient bounds, a positive convergence radius,
singularity location/type, the joint `n~M` partial-sum asymptotic, all-order
bulk negativity or positivity, and the passage from the formal branch to a
nonnegative genuine law.

## R157 web majorant: local audit boundary (2026-09-09)

The completed web response proposed the positive majorant

`D(s) B(s)^3 - 6 B(s) + 5 = 0`,

where `D(s)=3 cosh(sqrt(s))-2`. The factor `3` in the non-cosh terms is
important: non-linear terms from the `m=0` product are bounded by `h_(d,n)`
and therefore carry a factor `1/3` after division by the direct pivot
`3 h_(d,n)`, whereas terms with `m>=1` are bounded by `3 h_(d,n)`. Thus the
formal majorant recurrence is

`6 b_n = [s^n] D(s) B(s)^3` for `n>=1`,

which is equivalent to the displayed algebraic equation with `b_0=1`.

The companion script `audit_web_majorant_r157.py` exactly checks:

- the algebraic recurrence through degree six and positivity of its rational
  coefficients;
- domination of the locally audited `d=5` coefficients through `s^3`;
- the odd-`d` geometric inequality and the exponent bookkeeping behind the
  generalized Holder bound;
- the termwise Hermite majorant arithmetic and the constants
  `T*=arcosh(82/75)` and `tau_safe=e^(-1/4) T*^(2/d)/8`.

The same audit also expands the positive majorant at its first positive
singularity.  With `s*=T*^2` and

`K=(25/32) sqrt(T* sinh(T*))`,

the positive branch has

`B(s)=5/4-K sqrt(1-s/s*)+O(1-s/s*)`.

Consequently its coefficients satisfy the transfer-law prediction

`b_n ~ K/(2 sqrt(pi)) s*^(-n) n^(-3/2)`.

The numerical triangular recurrence through order 180 agrees with this
constant.  This strengthens the audit of the majorant barrier, but it is only
an asymptotic statement for `B`; coefficient domination gives no matching
lower bound for the actual universal shape `A_d`.

This is a `LOCAL-AUDITED / CONDITIONAL` arithmetic check of the web
derivation, not an independent proof of the full theorem. The conditional
inputs are the full-SF one-variable reduction and its all-order formal
recurrence. The remaining boundaries are: whether the previous sparse
completion really supplies that reduction for the intended object; the exact
formal-to-spatial/genuine-law interpretation; and any claim about edge
escape, negative bulk, or the literal global alternatives A/B.

Run:

```text
F:\\anaconda3\\python.exe -u r157_universal_shape_audit\\audit_web_majorant_r157.py
```

Expected final marker:

```text
R157_WEB_MAJORANT_AUDIT_COMPLETED
```

The result is a useful structural lemma and a clean next interface, but it is
not yet an independent publishable theorem.  The global publication verdict
therefore remains: **无（目前没有足够独立、完整、可审稿的发表性结果）**.
