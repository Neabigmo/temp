# Symmetrized-MGF Gaussian Rigidity — PTRF paper draft

This package is the reviewer-aligned 2026-09-11 revision of the MGF-QS/PTRF draft. Its central object is the one-dimensional reflected MGF defect; chi-square quadratic forms and sample variance are treated as exact and quantitative applications of that theory.

## Entry points

- `main_ptrf.tex` — PTRF/Springer Nature entry point. Copy the folder contents into the official Springer Nature LaTeX template package containing `sn-jnl.cls`; the local smoke compile used the December 2024 template package.
- `main_portable.tex` — locally compilable article-class version used for QA.
- `abstract.tex` — shared abstract text used by both entry points.
- `paper_body.tex` — shared section and appendix inputs; front matter is kept in each entry point.
- `NOVELTY_AUDIT.md` — literature boundary and claims discipline.
- `SUBMISSION_STRATEGY.md` — PTRF-first journal strategy.

## Revision status

The manuscript now has a single reflected-defect notation, an exact spherical-transform identity, a full exact PSD proof, a precise spherical Laplace discrepancy, a complete Laguerre construction section, and an explicit non-circular parameter appendix. The portable front matter now places the title before the abstract, and the PTRF entry point keeps Springer front matter separate from the shared body. The actual December 2024 `sn-jnl.cls` template smoke compile is clean. Author name, affiliation, and email remain explicit placeholders and must be replaced before submission; independent referee-level verification remains separate from this local revision.

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
