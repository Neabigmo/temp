# Draft packages

## `mgf_qs_ptrf_draft_2026-09-11`

- Source archive: `G:\2026\8.22统计\mgf_qs_ptrf_draft_2026-09-11.zip`
- Extracted package: `draft_packages/mgf_qs_ptrf_draft_2026-09-11/`
- Main entry points: `main_ptrf.tex` (PTRF/Springer Nature) and `main_portable.tex` (portable local QA)
- Included material: paper sections, appendices, bibliography, novelty audit, submission strategy, and `main_portable.pdf`
- Verification on 2026-09-11: the revised portable entry point compiled successfully in three passes with TeX Live 2025; no fatal TeX error, undefined reference, undefined citation, or overfull box was emitted, and the generated PDF has 15 pages.
- Revision on 2026-09-11: the reviewer-aligned rewrite makes symmetrized-MGF reflection the main narrative, adds the exact spherical transform and PSD proof, defines the spherical Laplace discrepancy, adds the asymmetric bounded non-ID example, and replaces the Laguerre audit box with the full construction chain.
- Revision follow-up: front matter is now owned by the two entry points, the tent-area inversion is piecewise-correct, the four compressed stability steps expose their analytic inequalities, Laguerre notation and bibliography are cleaned, and the portable cleveref configuration distinguishes lemmas from theorems.
- Verification follow-up on 2026-09-11: the December 2024 Springer Nature template was used in a temporary QA copy; `main_ptrf.tex` passed three pdflatex passes plus BibTeX with no fatal, undefined, overfull, or underfull diagnostics.
- Evidence status: research draft. Author metadata remains explicit placeholders for replacement, and independent referee-level verification remains separate from this local revision.
