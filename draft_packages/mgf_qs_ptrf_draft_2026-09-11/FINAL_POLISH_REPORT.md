# MGF-QS / PTRF final-polish report

Revision date: 2026-09-11  
Working branch: `mgf-qs-ptrf-final-polish`  
Base: the repository's 2026-09-11 `main`-aligned draft, without modifying `main`

The revision keeps the five-section theorem-paper architecture and Appendices A and B. The deleted standalone research-log sections and the high-frequency sine family were not restored. No theorem, rate, core hypothesis, or Laguerre/Skellam constant was changed; the work below closes exposition and verification gaps in the established route.

## A. Mathematical fixes

Appendix A now fixes a finite target exponent `Gamma>4`, chooses the truncation factor with `beta_B>4 Gamma`, and then chooses `a_0` so that both `-log(C_T a_0^2)>4 Gamma` and the complex-growth inequalities hold. The real-axis error is therefore assigned the finite exponent `gamma_1=Gamma`, and the propagated exponent satisfies `gamma_2>=omega_0 Gamma/2>a_0^2`. The choice order is written explicitly as `A -> c_0 -> Gamma -> B -> a_0 -> theta`, with no later choice affecting an earlier inequality.

The Laguerre construction now contains the generating-function calculation for
`I_m(s)=(2 pi)^(-1/2) int x exp(s x-3 x^2/2) L_m^(1/2)(3 x^2/2) dx`. Summing in `m`, evaluating the Gaussian integral, and comparing coefficients gives the displayed formula for `u_m` rather than merely citing a generating identity. The half-axis discrepancy is also derived: the substitution `r=3x^2/2` reduces it to an integral of `e^{-r}L_m^(1/2)(r)`, whose generating function is `(1-t)^(-1/2)`. The coefficient asymptotic `(1/2)_m/m! asymp m^(-1/2)` then supplies the Kolmogorov lower bound.

The lower-bound theorem and construction use the explicit definition `Delta_m=sup_{|s|<=rho} R_{W_m}(s)`, together with the stated exponential-integrability, positivity of the reflected defect, logarithmic asymptotic, and Kolmogorov lower bound. The proof of the Poisson total-variation obstruction is self-contained: its centered cumulant generating function is expanded to obtain `R_{X_lambda}(s)=s^4/(12 lambda)+O(lambda^(-2))`, and a direct exponential-moment estimate gives the required uniform envelope. The total-variation convention is stated as `d_TV(mu,nu)=sup_A |mu(A)-nu(A)|`.

The spherical transform `Psi_r(z)=E exp(z V_1)` is now defined before its first use in the exact-rigidity proof and recalled in the sample-variance section. The sample-variance theorem title explicitly identifies the spherical Laplace discrepancy. The pointwise transfer includes the two-tent argument, the Lipschitz lower tents, the disjointness condition, and the two cases of the tent area. The Kolmogorov convention is stated in the Introduction.

Section 3 contains one unnumbered half-disk two-constants auxiliary estimate. Lemma 3.1 uses fixed half-disks `D_{rho_0}^+` and `D_{rho_0}^-` with `rho_0<min(rho,2 tau)`, explicit diameter and arc bounds, regularized subharmonic logarithms, a harmonic-measure lower bound, Cauchy estimates, and the Stirling comparison. Lemma 3.4 invokes the same half-disk estimate on the disk of radius `2R`; its complex growth bound and the relative estimate
`|F_N(z)|/|exp(-z^2)| <= exp(-(gamma_2-a_0^2)m)` now explicitly imply the zero-free factor disk.

The tail lemma now uses the moment symmetrization inequality `E|X-a|^p <= 2 E|X-X'|^p` for a median `a`, followed by the `L^(2m)` norm bound, Markov truncation, total-variation coupling, and the mean/variance tail shifts. The factor-recovery lemma names the cubic remainder `E_N(t)`, gives its coefficient bound, obtains `1/2<=sigma_N^2<=3/2`, chooses the Esseen fraction for Gaussian damping, uses `|exp(z)-1|<=|z|exp(|z|)`, and evaluates the Esseen integral explicitly.

## B. Expository changes

The Introduction now states the fixed exponential envelope, defines `d_K`, presents the exact PSD theorem and sharp reflection theorem as independently readable statements, and positions the quadratic-form boundary through Christoph--Prohorov--Ulyanov, Kruglov, and Golikova--Kruglov. The Cramér/Marcinkiewicz paragraph distinguishes general `F*G`, equal-factor `F*F`, and reflected `F*tilde F` problems, including the loss of Fourier phase and the fact that the zero-free disk is derived in this paper.

The proof section uses descriptive headings: high-order moments, tail bound and truncation, product approximation on a growing interval, a zero-free disk, and from zero-freeness to Gaussian approximation. Process narration and teaching-style labels were reduced, while the five analytic transitions remain visible in their displayed inequalities.

The sharpness section makes both the exact Laguerre calculation and the lattice obstruction readable without relying on hidden computations. The sample-variance section distinguishes the spherical Laplace observable from a probability metric, expands the tent proof, and ends with the requested bounded questions about weakening exponential moments and replacing the spherical discrepancy under additional uniform integrability.

The abstract is now 169 whitespace-delimited words after LaTeX command normalization, within the requested 150--250-word range. The PTRF keywords include Gaussian characterization, symmetrized moment generating function, quadratic forms, sample variance, Cramér stability, and zero-free characteristic functions. The existing long title was retained in the TeX entry points; three candidates are recorded below for the author's choice.

## C. Literature changes

The Introduction and bibliography retain Sapogov (1951) for general Cramér stability, Bobkov--Chistyakov--Götze (2013) for the equal-factor iid setting, Eremenko--Fryntov (2021) for a zero-free-strip Marcinkiewicz stability result, and Dinh--Ghosh--Tran--Tran (2025) for quantitative Marcinkiewicz estimates based on zero-free disks. Their role is to delimit the input/output boundary: those results begin with a zero-free region, while the present proof derives one from reflected-MGF information.

The quadratic-form positioning cites Christoph--Prohorov--Ulyanov (2001), Kruglov (2013), and Golikova--Kruglov (2015), alongside the existing Ruben, Bondesson, and Ejsmont--Lehner references. Imekraz--Robert--Thomann (2016) remains the external source for the uniform Laguerre-function estimate used in Appendix B. `NOVELTY_AUDIT.md` now contains a separate observable/factorization matrix and keeps the claims at theorem-level statements supported by the current audit.

## D. Claims deliberately not strengthened

The paper does not claim to solve the unrestricted fixed-sample-size sample-variance characterization problem. It does not claim priority, a new characterization, or a general theorem beyond the displayed hypotheses. It does not treat the cited classical results as if they were proved inside this manuscript. The reflection rate is described as optimal in the stated uniform class because the Laguerre sequence in the paper supplies the matching obstruction; no broader optimality claim is added. Total variation is presented as a boundary obstruction, not as a defect of the Kolmogorov theorem.

## E. Remaining author actions

The source front matter still contains explicit placeholders for author name, affiliation, city/country, and email. These are the only remaining source-completion actions. Before submission, the author must also supply any ORCID, funding, competing-interest statement, and other journal metadata required by PTRF, choose the final title, and decide the appropriate Springer Nature AI/LLM disclosure after reviewing the current policy. An independent mathematical referee audit remains necessary; this report therefore uses the status `PTRF_POLISH_READY`, not `SUBMISSION_READY`.

Title candidates for author decision are:

1. `Gaussian Rigidity from Symmetrized Moment Generating Functions: Chi-Square Quadratic Forms and Sharp Reflection Stability` (current title; retained).
2. `Gaussian Rigidity via Reflected Moment Generating Functions: Quadratic Forms, Stability, and Optimality`.
3. `Reflected Moment Generating Functions and Gaussian Rigidity for Chi-Square Quadratic Forms`.

## QA record

The portable entry point was compiled three times with TeX Live 2025 using `pdflatex main_portable.tex`. The final `main_portable.log` contains no fatal error, undefined reference, undefined citation, overfull box, or duplicate-label diagnostic, and the PDF has 16 pages. Because the portable entry point uses the checked-in `references_manual.tex`, BibTeX is not part of its build.

The official December 2024 Springer Nature package was downloaded from the official template page, the package was copied into a temporary `sn-article-template` directory, and `main_ptrf.tex` was compiled with `pdflatex`, `bibtex`, and two further `pdflatex` passes. The resulting `main_ptrf_official.pdf` has 17 pages. Its log has no fatal error, undefined control sequence, undefined reference/citation, overfull box, or duplicate-label diagnostic. The official class emits visible nonfatal `Underfull \\vbox` diagnostics on page output; warning suppression, `\\raggedbottom`, and `\\vbadness` were not used.

The final marker is `PTRF_POLISH_READY`. It is not a submission approval: metadata, disclosures, final title selection, and independent referee verification remain with the author.
