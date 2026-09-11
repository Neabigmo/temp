# Symmetrized-MGF Gaussian Rigidity — PTRF paper draft

This package is the reviewer-aligned 2026-09-11 revision of the MGF-QS/PTRF draft. Its central object is the one-dimensional reflected MGF defect; chi-square quadratic forms and sample variance are treated as exact and quantitative applications of that theory.

## Entry points

- `main_ptrf.tex` — intended PTRF/Springer Nature entry point. Copy the folder contents into the official Springer Nature LaTeX template package containing `sn-jnl.cls`.
- `main_portable.tex` — locally compilable article-class version used for QA.
- `paper_body.tex` — shared title, abstract, and section inputs.
- `NOVELTY_AUDIT.md` — literature boundary and claims discipline.
- `SUBMISSION_STRATEGY.md` — PTRF-first journal strategy.

## Revision status

The manuscript now has a single reflected-defect notation, an exact spherical-transform identity, a full exact PSD proof, a precise spherical Laplace discrepancy, a complete Laguerre construction section, and an explicit non-circular parameter appendix. Inline `\\auditgate` and “schematic statement” markers have been removed from the LaTeX manuscript. The research status remains conservative: final external bibliographic checking and independent referee-level verification are still separate from this local revision.

The main narrative is Introduction → symmetrized-MGF class and results → exact rigidity → sharp reflection stability → optimality/obstructions → sample-variance application → discussion. The high-frequency sine family is not part of the main text.

## Local compile

```
pdflatex main_portable.tex
bibtex main_portable
pdflatex main_portable.tex
pdflatex main_portable.tex
```

## PTRF template

Official Springer Nature template page:
https://www.springernature.com/gp/authors/campaigns/latex-author-support/see-where-our-services-will-take-you/18782940
