# R166 — varying-bottom tower reduces to a single genuine exact law

Date: 2026-09-09.

This note isolates a structural reduction that is more basic than a proposed
uniform charge lower bound.  It is stated only for the genuine full-exact
class; a scalar `RK=1` statement remains conditional until the scalar-to-law
identification is independently proved.

## 1. Class and hypotheses

Let `E_2` be the class of genuine positive centered variance-one exact laws
whose density relative to `gamma` lies in `L^2(gamma)`, and assume the local
MGF hypotheses used by R101--R102.  We use only:

1. `E_2` is closed under the forward OU semigroup `P_s`, `0<s<=1`;
2. `P_3K(P_s mu;z)=P_3K(mu;sqrt(s) z)` as an analytic germ;
3. for `h in E_2`, the centered/variance-one conditions give Hermite
   coefficients `a_1(h)=a_2(h)=0`.

The first item is the genuine residual-plane argument: if
`Q=sum_i(X_i-Xbar)^2` is `chi^2_2`, then after independent OU smoothing the
residual is `sqrt(s)R+sqrt(1-s)G`, again standard two-dimensional Gaussian.

## 2. Exact reduction theorem

Define `A_3` to be the assertion

`there exists h in E_2 with P_3K(h) not identically zero`.

Define `B_q` to be the existence of `N_k -> infinity` and towers
`g_k^(0),...,g_k^(N_k)` such that, for every `k`,

`g_k^(j)=P_q g_k^(j+1)`,

all layers lie in `E_2`, `g_k^(0) -> 1` in `L^2(gamma)`, and
`P_3K(g_k^(0))` is not identically zero.

### Theorem (single-law equivalence)

Under the three hypotheses above,

`A_3  <=>  B_q` for every fixed `q in (0,1)`.

### Proof

Assume `A_3` and fix such an `h`.  For every `N>=1`, set

`g_N^(j)=P_(q^(N-j)) h`,  `0<=j<=N`.

The semigroup law gives

`P_q g_N^(j+1)=P_(q^(N-j))h=g_N^(j)`.

OU closure preserves positivity, centeredness, variance one and exactness.  If
`a_m(h)=<h,psi_m>_gamma`, then Parseval and `a_1=a_2=0` give the explicit bound

`||P_t h-1||_2^2=sum_(m>=3)t^m |a_m(h)|^2
                  <= t^3 ||h-1||_2^2`.

Taking `t=q^N` proves `g_N^(0)->1`.  Finally, analytic-germ covariance gives

`P_3K(g_N^(0);z)=P_3K(h;q^(N/2)z)`,

which is not the zero germ for any finite `N`: if `d` is its first nonzero
coefficient, the new coefficient is multiplied by `q^(Nd/2)>0`.

Conversely, any one finite bottom `g_k^(0)` in `B_q` already belongs to `E_2`
and has nonzero `P_3K`; it is an `h` witnessing `A_3`.  The limit and the tower
are not needed for this reverse implication.

## 3. Charge-collapse consequence

For the R101 angular charge,

`beta_(m,r)(P_s mu)=s^(m/2) beta_(m,r)(mu)`.

Hence, for the odd `r=1` budget,

`S_3(t;P_s mu)=S_3(t/s;mu)`,

and therefore (when the infimum is taken in the same admissible range)

`tau_ang(P_s mu)=s tau_ang(mu)`.

Thus, if `A_3` holds, the genuine OU orbit `P_s h` supplies a charge-collapse
mechanism: it converges to Gaussian, retains nonzero `P_3K` at every `s>0`, and
has unnormalised angular backward scale tending to zero.  A uniform lower bound
on `tau_ang(g^(0))` or on an unnormalised primitive charge would therefore
contradict the very asymmetric law whose exclusion is the original problem.

An OU-invariant quantity such as `tau_ang(P_s h)/s` can still be useful, but a
uniform positive lower bound for it is a single-law global gap statement.  It is
not a consequence of backward divisibility alone and must not be presented as
a weaker varying-bottom lemma.

## 4. Evidence boundary

- **ANALYTICALLY PROVED under genuine full-exact, `L^2`, and local-MGF
  hypotheses:** the equivalence `A_3 <=> B_q`, the explicit `L^2` convergence
  estimate, nonvanishing under OU scaling, and the charge scaling mechanism.
- **CONDITIONAL:** transfer to a bare scalar `RK=1` class, if exact-law
  identification or OU closure has not been independently established.
- **Not proved:** existence of an asymmetric genuine exact law.  R166 constructs
  no counterexample; it only shows that, if one exists, the varying-bottom
  formulation cannot eliminate it through an unnormalised charge gap.
- **OPEN:** exclusion of `A_3`, the symmetric even sector, and the full original
  rigidity theorem.

This reduction corrects the priority of the next task: first attack the
single-law asymmetric exact exclusion (or construct a genuine obstruction), and
only then discuss an OU-invariant quantitative gap.

