# Response to the simulated PTRF referee — Major Revision Round 2

This response accompanies the branch `mgf-qs-ptrf-major-revision-r2`. The revision preserves the headline theorem statements and the established rate. It closes proof and exposition gaps, makes the literature boundary explicit, and records the independent second-referee audit in `SECOND_REFEREE_AUDIT.md`.

## Comment 1 — Cramér/Sapogov positioning

### Concern

The previous Introduction could be read as saying that a reflected convolution lies outside classical Cramér stability theory. It also did not sufficiently distinguish general two-factor convolution stability, the equal-factor iid case, and the local transform input used here.

### Response

We agree. The revised Introduction now states that $F*\widetilde F$ is a legitimate special case of the general two-factor convolution framework. It separately describes the equal-factor case $F*F$, where the Fourier phase is retained, and the reflected case $F*\widetilde F$, where the phase is erased. The revised text identifies the actual distinction: the proof starts from local reflected-MGF control on a fixed real interval rather than a global probability-metric approximation of the convolution. It also explains why a direct reduction to a global Sapogov theorem would discard the structure used to obtain the sharp modulus.

### Changes

`introduction.tex`, Section 1, the Cramér/Marcinkiewicz positioning paragraphs. The bibliography retains Cramér, Sapogov, and Bobkov--Chistyakov--Götze and adds the standard references used by the proof.

## Comment 2 — Half-disk propagation and zero-freeness

### Concern

The complex propagation argument needed a formal two-constants statement, a treatment of zeros, an explanation of the scale-independent harmonic-measure constant, and a complete relative comparison in the growing zero-free disk.

### Response

We have made the propagation principle Lemma `two-constants` at the beginning of Section 3. Its proof applies the subharmonic two-constants theorem to $\log(|F|+\delta)$ and then lets $\delta$ tend to zero. Scaling $z=Rw$ identifies the relevant inner region with a fixed compact subset of the unit half-disk, so the harmonic-measure constant depends only on $\eta$. Lemma `zero-free` now displays the entire-function growth bound, the propagated exponent $\gamma_*$, the inequality $\gamma_*>a_0^2$, and the full relative estimate against $e^{-z^2}$ before applying the $1/2$ comparison.

### Changes

`sharp_upper.tex`, Lemma `two-constants` and Lemma `zero-free`; `parameter_selection.tex`, the non-circular choice chain and the definition of $\gamma_*$.

## Comment 3 — Quantitative Marcinkiewicz step

### Concern

The logarithmic coefficient estimate and Esseen step should be independently checkable, with the normalization, the first two coefficients, Gaussian damping, and smoothing inequality all written explicitly.

### Response

The revised factor-recovery proof first states that the zero-free disk is simply connected and therefore supports the unique analytic logarithm with value zero at the origin. It defines $H(z)=NR-\log\varphi_N(z)$, scales to the unit disk, and applies the Carathéodory coefficient theorem to obtain $|a_k|\le2NR^{1-k}$. It then identifies $a_1=i\mu_N$ and $a_2=-\sigma_N^2/2$, bounds the cubic remainder, chooses a fixed $\theta$ from the explicit Gaussian damping estimate, and writes the characteristic-function difference before smoothing. The Esseen inequality is stated in a Gaussian-target normalization with the target-density term visible. Duren is cited for the standard positive-real-part coefficient estimate and Esseen for the smoothing inequality.

### Changes

`sharp_upper.tex`, Section 3, Lemma `factor-gaussian`; `references.bib`, entries `Duren1983` and `Esseen1945`.

## Comment 4 — Independence in the Laguerre/Skellam construction

### Concern

The construction must state that the Skellam perturbation is independent of the Laguerre variable before factorizing the MGF.

### Response

We now state that the two Poisson variables are independent of each other and independent of $U_m$. The proof immediately records $M_{U_m+J_m}(q)=M_{U_m}(q)M_{J_m}(q)$ and the Skellam MGF. The reflected-defect identity is consequently tied to an explicit probabilistic factorization rather than an implicit independence convention.

### Changes

`sharpness.tex`, the definition of $J_m$ and the display preceding the reflected-defect identity.

## Comment 5 — Defect convergence notation and matching scale

### Concern

The earlier monotone-decrease notation asserted monotonicity that was not proved, and the matching scale was compressed into a single consequence.

### Response

All theorem-level uses now state $\Delta_m\to0$. The sharpness proof derives $\log(1/\Delta_m)=2m\log m+O(m)$ and then explicitly computes $\log\log(1/\Delta_m)$ and the ratio of the two logarithmic scales, yielding the displayed equivalence with $m^{-1/2}$. No monotonicity is used.

### Changes

`introduction.tex`, Theorem 1.3; `sharpness.tex`, the end of the Laguerre proof; repository-wide exact search for the prohibited monotone-decrease notation.

## Comment 6 — Laguerre exact formula and envelope

### Concern

The exact MGF formula and the uniform envelope should be transparent, including the four-region cancellations and the half-axis CDF discrepancy.

### Response

The exact MGF calculation now sums the Laguerre generating function, evaluates the Gaussian integral, and compares coefficients. This gives the factors $3\sqrt3$, $e^{-s^2/3}$, $6^m$, and $(-1)^m$ in the displayed $u_m$. Appendix B now defines $Q_m$ and the normalized Laguerre function, records the four IRT regions including the exponential outer estimate, and shows the power cancellation in Regions I and II, the $\nu^{1/6}$ turning-region factor, and the exponential domination. The half-axis calculation in Section 4 uses $r=3x^2/2$, $x\,dx=dr/3$, and the generating identity for $(1/2)_m/m!$.

### Changes

`sharpness.tex`, the exact MGF and half-axis derivations; `laguerre_details.tex`, the complete four-region proof; `references.bib`, the IRT citation.

## Comment 7 — Sample-variance rate transfer

### Concern

The final substitution from the spherical Laplace discrepancy to the reflected-MGF defect needed to be displayed, and the observable should not be described as a probability metric.

### Response

The sample-variance section now states the spherical observable explicitly and calls it a Laplace observable. After the two-tent estimate gives $\Delta_{\rho'}(X)\le C_1\sqrt\varepsilon$, the proof sets $\Delta=C_1\sqrt\varepsilon$ and writes the corresponding relations for $\log(1/\Delta)$ and $\log\log(1/\Delta)$ before applying Theorem 1.2. The theorem title and the Introduction use the same observable-based terminology.

### Changes

`sample_variance.tex`, the discrepancy definition, theorem title, pointwise transfer, and final rate substitution.

## Additional audit — exact $n=2$ case and local domains

The rank-one audit shows that $A=I_2-\frac12\mathbf1\mathbf1^{\mathsf T}$ has rank one and positive diagonal entries. The exact sample-variance corollary is therefore stated for $n\ge2$, while the quantitative spherical-density theorem remains in the range $n\ge3$. The exact-rigidity proof now explains that finitely many coordinate-wise MGF neighborhoods can be reduced to a common interval.

## Additional audit — official front matter

The PTRF entry point now calls `\maketitle` after title, author, affiliation, abstract, keywords, and PACS metadata. This corrects the earlier official PDF defect in which the source metadata was defined but never rendered. Both entry points are required to begin with the same semantic front matter; their venue-specific typography and bibliography layout may differ.

## Theorem changes

No headline rate or headline stability theorem was strengthened. The exact sample-variance corollary was extended from $n\ge3$ to $n\ge2$ after the rank-one case was checked directly. The quantitative sample-variance theorem remains stated for $n\ge3$ because its density-based pointwise transfer is written for $S^{n-2}$ with a continuous spherical density.

## Final status

The independent audit is recorded in `SECOND_REFEREE_AUDIT.md`. The final status is determined there and in `MAJOR_REVISION_R2_REPORT.md`; it is never an acceptance decision and does not replace author metadata, disclosure, or independent human verification.
