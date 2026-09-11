# Gaussian Rigidity from Symmetrized Moment Generating Functions — PTRF paper draft

This package is the reviewer-aligned 2026-09-11 revision of the MGF-QS/PTRF draft. Its central object is the one-dimensional reflected MGF defect; chi-square quadratic forms and sample variance are treated as exact and quantitative applications of that theory.

## Entry points

- `main_ptrf.tex` — PTRF/Springer Nature entry point. Copy the folder contents into the official Springer Nature LaTeX template package containing `sn-jnl.cls`; the local smoke compile used the December 2024 template package.
- `main_portable.tex` — locally compilable article-class version used for QA.
- `abstract.tex` — shared abstract text used by both entry points.
- `paper_body.tex` — shared section and appendix inputs; front matter is kept in each entry point.
- `NOVELTY_AUDIT.md` — literature boundary and claims discipline.
- `FINAL_POLISH_REPORT.md` — mathematical, expository, literature, and QA record for this final-polish branch.
- `SUBMISSION_CHECKLIST.md` — author-owned metadata, disclosure, claims, and submission checks.
- `SUBMISSION_STRATEGY.md` — PTRF-first journal strategy.

## Revision status

The manuscript now has a single reflected-defect notation, an exact spherical-transform identity, a full exact PSD proof, a precise spherical Laplace discrepancy, a complete Laguerre construction section, and an explicit non-circular parameter appendix. The main text is organized as five sections, with the exact and sharp results stated in the Introduction and the sample-variance interface consolidated in Section 5. The portable front matter places the title before the abstract, and the PTRF entry point keeps Springer front matter separate from the shared body. This final-polish branch adds the explicit Laguerre integrals, the unified half-disk propagation estimate, the full truncation and Gaussian-damping chains, and the author-facing report/checklist. The portable entry point compiles cleanly; the official December 2024 `sn-jnl.cls` compile also completes, with the template's nonfatal vertical-spacing diagnostics visible because warning suppression was removed. Author name, affiliation, and email remain explicit placeholders and must be replaced before submission; independent referee-level verification remains separate from this local revision.

The main narrative is Introduction and main results → exact rigidity → sharp reflection stability → optimality/obstructions → sample variance. The high-frequency sine family is not part of the main text.

The final language pass fixes the non-circular parameter order in Appendix A, states the Laguerre lower-bound hypotheses explicitly, restores a compact Cramér/Marcinkiewicz novelty boundary in the Introduction, and uses descriptive rather than branded proof-step headings. The authoritative status and detailed mathematical diff are recorded in `FINAL_POLISH_REPORT.md`.

## Local compile

```
pdflatex main_portable.tex
pdflatex main_portable.tex
pdflatex main_portable.tex
```

## PTRF template

Official Springer Nature template page:
https://www.springernature.com/gp/authors/campaigns/latex-author-support/see-where-our-services-will-take-you/18782940
