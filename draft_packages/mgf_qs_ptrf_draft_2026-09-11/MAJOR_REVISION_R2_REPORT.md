# C2C / MGF-QS — PTRF Major Revision Round 2 Report

## Baseline recorded before revision

This Round 2 branch is based on manuscript commit `bded70951a6fa4959ad2b093371f1d8a7b4709be` (`style: final PTRF language and typesetting polish`) from the preceding manuscript-polish branch. The protected `main` branch remains at `65d9926` and is not modified by this revision. The previous artifacts were 16 pages for `main_portable.pdf` and 17 pages for `main_ptrf_official.pdf`; the latter was found on visual inspection to omit its title, author block, and abstract because its Springer entry point did not call `\maketitle`.

## Headline theorem inventory at baseline

The manuscript contains three headline results stated in the Introduction: Theorem 1.1 (exact positive-semidefinite quadratic-form rigidity), Theorem 1.2 (sharp reflection stability in Kolmogorov distance), and Theorem 1.3 (a Laguerre lower-bound construction). Section 5 contains the sample-variance exact and quantitative consequences, and the optimality section contains the lattice total-variation obstruction.

## Referee comment to manuscript-location map

| Referee item | File | Current location | Required action | Status at baseline |
|---|---|---|---|---|
| Cramér/Sapogov positioning | `sections/introduction.tex` | Section 1 | Distinguish global convolution input, equal-factor theory, and local reflected-MGF input; explain why direct Sapogov reduction loses the sharp structure | OPEN |
| Half-disk propagation | `sections/sharp_upper.tex` | Section 3 | Make the two-constants estimate formal, address zeros, and explain scale invariance | OPEN |
| Zero-free argument | `sections/sharp_upper.tex` | Lemma 3.4 | Display complex growth, propagated exponent, and relative comparison in full | OPEN |
| Carathéodory/Esseen | `sections/sharp_upper.tex` | Lemma 3.5 | Normalize the positive-real-part function, identify logarithmic coefficients, and cite standard tools | OPEN |
| $U_m\perp J_m$ | `sections/sharpness.tex` | Laguerre family | State independence and factorization hypotheses explicitly | OPEN |
| Defect limit notation | Introduction and repository docs | Theorem 1.3 and supporting prose | Replace unjustified monotonicity notation by convergence notation | OPEN |
| Laguerre envelope | `appendices/laguerre_details.tex` | Appendix B | Show the four-region power cancellations and the half-axis integral | OPEN |
| Sample-variance rate transfer | `sections/sample_variance.tex` | Section 5 | Show the explicit substitution from the spherical discrepancy to Theorem 1.2 | OPEN |
| $n=2$ and local-domain quantifiers | `sections/sample_variance.tex`, `sections/exact_rigidity.tex` | Exact corollary and proof | Audit the rank-one case and state a common MGF neighborhood | OPEN |
| Standard complex-analysis and smoothing citations | `references.bib`, `references_manual.tex` | Bibliography | Add and verify stable textbook/classical references for Carathéodory and Esseen | OPEN |
| Official front matter | `main_ptrf.tex` | Springer entry point | Call `\maketitle` after title, author, abstract, keywords, and PACS metadata | OPEN |

The revision will keep the existing five-section architecture and the established theorem statements and rates unless an explicit mathematical defect requires a narrowly documented correction. It will not restore deleted research-log material or add an unsupported headline theorem.

## Resolved major comments

1. **Cramér/Sapogov positioning — RESOLVED.** The Introduction now separates the general $F*G$ theorem, equal-factor iid $F*F$ theory, and the reflected local-MGF input $F*\widetilde F$. It explains why a direct global Sapogov reduction would discard the phase-retaining and local analytic structure used here.
2. **Half-disk propagation — RESOLVED.** Section 3 states a formal two-constants lemma, regularizes the logarithm by $\log(|F|+\delta)$, passes to the limit, and records the scale-invariant harmonic-measure parameter.
3. **Zero-free argument — RESOLVED.** The proof now displays the complex growth bound, the propagated exponent $\gamma_*$, the condition $\gamma_*>a_0^2$, and the relative comparison needed for nonvanishing on the growing disk.
4. **Carathéodory and Esseen steps — RESOLVED.** The analytic logarithm, normalization to nonnegative real part, coefficient estimate, Gaussian damping, and the exact smoothing normalization are written out and cited.
5. **Laguerre lower bound — RESOLVED.** The construction states that the Skellam variable is independent of the Gaussian perturbation, displays the MGF factorization, preserves the exact constants, and includes the four-region envelope and matching-scale calculation.
6. **Defect-limit notation — RESOLVED.** The theorem and supporting prose use convergence notation only; no monotonicity is assumed.
7. **Application and obstruction audit — RESOLVED.** The sample-variance transfer now shows the factor-of-two and logarithmic substitutions explicitly; the exact $n=2$ rank-one case is audited; the lattice total-variation obstruction records its convention, CGF, and discrete-versus-Gaussian mechanism.

The previously missing official front matter is also resolved: `main_ptrf.tex` now calls `\maketitle`, and its final PDF begins with the same title, author block, abstract, keywords, and classification metadata as the portable entry point (up to template layout).

## Minor comments

- **Bibliography — RESOLVED.** Cramér, Sato, Duren, and Esseen are included in both bibliography paths; all citations used by the manuscript resolve in the final builds.
- **Domain quantifier — RESOLVED.** The exact proof records a common positive MGF neighborhood by taking the minimum of the finitely many coordinate radii.
- **Dimension convention — RESOLVED.** The exact sample-variance corollary is stated for $n\ge2$ after the rank-one audit; the quantitative theorem remains $n\ge3$ because its spherical-density argument needs the stated nondegenerate regime.
- **Front-matter author metadata — AUTHOR ACTION.** Replace the template author, affiliation, and e-mail placeholders before any external circulation.

## Theorem changes

No headline theorem, headline rate, Laguerre constant, or sharpness claim was strengthened in this round. The only mathematical scope correction is the exact sample-variance corollary changing from $n\ge3$ to $n\ge2$ after the explicit rank-one audit. The quantitative sample-variance theorem remains $n\ge3$ for the density-based transfer argument.

## Final QA record

- Portable entry point: three `pdflatex -interaction=nonstopmode -halt-on-error main_portable.tex` passes; `main_portable.pdf` is 18 pages.
- Official Springer entry point: `pdflatex`, `bibtex main_ptrf`, then two further `pdflatex` passes; `main_ptrf_official.pdf` is 20 pages.
- Final logs contain no fatal errors, undefined citations or references, overfull boxes, multiply-defined labels, or unresolved rerun markers. The official Springer class emits only nonfatal underfull page-box diagnostics.
- Visual checks covered the first page, the analytic proof midsection, and the final bibliography page for both entry points. The former official blank-front-matter defect and the isolated final DOI page are gone.
- Static gates pass: no prohibited draft markers, no obsolete monotone-decrease defect notation, no `nu_m` typo, and no stale `gamma_1`/`gamma_2` proof notation in the source.

## Remaining author actions

Only author-controlled finishing actions remain: replace template metadata, choose the final title/venue wording, complete funding/acknowledgment/disclosure statements if applicable, decide the Springer AI-use declaration from the current policy, and perform the final human mathematical and bibliographic review. These are not unresolved core proof comments.

## Status

`PTRF_REFEREE_R2_READY`

This marker means that the Round 2 referee-response package and independent technical audit are complete and the compiled artifacts pass the recorded QA. It does not mean accepted, published, or `SUBMISSION_READY`; the author actions above remain necessary.
