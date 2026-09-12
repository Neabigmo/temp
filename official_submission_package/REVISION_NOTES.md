# Revision notes

## Scope and principal changes

This revision is based on `bf1201bd-f3be-4eff-b34a-186d2118b145.zip`. It changes the actual LaTeX manuscript, not just a list of recommendations. The compiled manuscript is 25 pages and contains 27 cited references. The journal class and bibliography style supplied with the input have been retained.

The central question is now recovery of a Gaussian factor from local reflected-MGF information. The sharp upper and lower bounds are presented together in the introduction. Quadratic forms motivate the reflection condition; sample variance is an application with additional assumptions. Total variation is treated as a limitation of the available information, not as another principal theorem.

## Theorem-number map

| Stable LaTeX label | Original introduction | Revised introduction |
|---|---|---|
| `thm:sharp-upper` | Theorem 1.2 | Theorem 1.1 |
| `thm:sharpness` | Theorem 1.3 | Theorem 1.2 |
| `thm:exact-psd` | Theorem 1.1 | Theorem 1.3 |

Internal labels are preserved. The exact sample-variance corollary and its proof now appear together in Section 5.1. Shared theorem counters previously made some cleveref references say "Theorem" when the target was a lemma or corollary. Explicit label types correct this throughout the manuscript.

## 1. Title, abstract and introduction

The title now places sharp reflection stability before the chi-square applications. The abstract starts with the input, gives the upper rate and matching lower family, and only then describes the applications. The introductory identity M_(X-X') = M_X M_X(-s) poses the factor-recovery problem before discussing proof methods.

The introduction has three tasks: state the sharp results; compare the hypotheses and mechanisms with decomposition/zero-free theory; explain the quadratic-form and sample-variance setting. The extended two-point example has been moved out of the introduction into Remark 2.1.

The comparison with Dinh et al. is explicit and limited: inserting only the support-growth bound exp(NR), N comparable to R, into their finite-disk theorem gives an extra logarithm. The manuscript's direct coefficient argument obtains the scale it needs. No claim is made that all possible applications of their work are suboptimal.

Bobkov et al. (2013) are credited for earlier symmetric perturbations with Gaussian-comparable densities. The lower-bound contribution is described through cancellation of moments, factorial local defect, and the matching Kolmogorov scale. Comparable densities by themselves are not presented as new.

## 2. Exact rigidity

The proof is introduced by its two steps: the chi-square law supplies integrability, and spherical averaging turns nonnegative reflected defects into equality. The moved remark contains the Levy-Khintchine implication, the nonsymmetric two-point example, and the reason bounded nondegenerate laws are not infinitely divisible. A symmetric Rademacher example makes clear that symmetry alone does not imply dominance.

No unrestricted sample-variance characterization is claimed. The sample-variance corollary is proved where it is stated, and the exact n=2 case is separately explained without the dominance assumption.

## 3. Sharp upper bound: expanded mathematical steps

The opening roadmap links four stages and explains the scale m log m comparable to log(1/Delta). The seven subsections are retained as technical steps rather than presented as disconnected tricks.

In Lemma 3.3 and Appendix A, the same half-disk parameter eta=1/2 and harmonic-measure constant are used in both propagation arguments.

Lemma 3.5 now displays both Taylor remainders and the moment mismatch. Under d_TV=sup_A, characteristic functions differ by at most 2 p_N after conditioning, and the two-factor products differ by at most 4 p_N. The exponent choices contain enough slack to absorb these constants and the sum of the errors.

Lemma 3.6 and Appendix A specify that B is chosen before a_0. Decreasing a_0 after fixing B improves both the Taylor estimate and the complex growth bound. The zero-free comparison requires gamma_*>a_0^2, and the parameter order records how that is achieved.

Lemma 3.7 now normalizes H(Rw)/(NR) to a function with nonnegative real part and value one at the origin. Its coefficients give |a_k|<=2NR^(1-k). The rest of the proof shows how N comparable to R, Gaussian damping and Esseen smoothing yield O(R^(-1)).

These changes expand and align the existing proof. They are not a formal machine-checked certification of every theorem.

## 4. Lower bound: one genuine statement-level extension

Theorem 1.2 and its proof now hold for **every fixed rho>0**, rather than only the displayed choice rho=1. The family itself is unchanged. For m>rho^2/3, exp(-s^2/3)s^(2m) increases on [0,rho], so

    Delta_m = 2 log(1+v_m(rho)),
    log(1/Delta_m) = m log m + O_rho(m).

This is a change to the theorem's stated scope and should receive an explicit author check. No claim of constants uniform as rho varies is introduced.

The Laguerre orthogonality and generating-function background are cited. The Gaussian integral and coefficient extraction remain written out. Appendix B handles the normalization singularity at zero by continuity after multiplication by the cancelling power of r. Proposition 3.2 of Imekraz-Robert-Thomann was checked at alpha=-1/2.

The standardized Poisson obstruction is restricted to lambda>=1 when asserting a uniform envelope. The failure of total-variation convergence is kept separate from the sharp Kolmogorov rate.

## 5. Sample variance

Section 5 now separates the exact consequence, the spherical-to-reflected transfer, the transfer from Kolmogorov distance, and scope/further questions.

The spherical quantity is introduced as an intermediate transform discrepancy, not an artificially substituted final probability metric. The proof writes the chain

    1 <= exp(n E D_X(aV_1))
      <= normalized spherical transform
      <= 1 + spherical discrepancy.

The two tents are integrated on intervals of half-width min(h,M_*/L_h). Their interiors are disjoint because |s_0|>=M_*/L_h. Both branches of the tent-area formula are stated. The argument uses equality of the one-dimensional spherical marginals, not an unnecessary joint-exchangeability claim.

The logarithmic estimates are stated for strictly positive small error. Zero error is handled separately, avoiding log(1/0) and the choice T=delta^(-1/2) at delta=0. The exponential envelope's role in the Lipschitz/observable transfer is explicit. Sharpness for the reflected-MGF problem is not asserted to prove sharpness of the sample-variance corollary.

## 6. Bibliography and prose

The bibliography now has 27 cited items: 16 retained originals and 11 additions. The original Kruglov 2013 entry is preserved in `candidate_references.bib` because its particular theorem attribution could not be adequately verified in this pass. The audit is itemized in `LITERATURE_AUDIT.md`.

The CPU chapter's editor list is complete; Dinh et al. are listed as accepted in 2026 with the version-3 preprint identified; technical and historical references are attached to specific statements instead of broad multi-claim citation clusters. Publication years are not silently replaced by online-first years.

Self-evaluating phrases such as "the distinctive step" and "a useful self-improvement" have been replaced by direct statements. Repetition around the main contribution has been reduced. Ordinary proof connectives remain where they carry a logical step; semicolons and dashes have not been mechanically banned from mathematical prose.

## 7. Compilation and visual checks

The final build used pdfLaTeX, BibTeX, and two further pdfLaTeX passes. All citation keys resolve. The final log has no undefined references/citations or overfull-box warnings. All 25 rendered pages were visually reviewed, with individual-page checks of the title page and the bibliography. Font size was not reduced; reference spacing was modestly reduced from the class default to prevent a nearly empty final bibliography page.

The initial manuscript, source diff and input identifier make the changes traceable. `SOURCE_DIFF.patch` compares the substantive source files to the latest uploaded package. The compiled `main_ptrf_official.pdf` is an identical compatibility copy of `main_ptrf.pdf`, not a second competing version.

## Author approval still needed

Replace the supplied author, email and institution placeholders. Review the generalized lower-bound statement and all expanded proof steps. Check the historical original texts listed as inaccessible in the audit where library access is available. Update the accepted Dinh entry when final publisher metadata is assigned. Supply any journal-required declarations using the authors' actual circumstances; no funding, conflict-of-interest or authorship statement has been invented.

This package is a revised manuscript for author review, not a guarantee of mathematical correctness, novelty, or acceptance by PTRF.
