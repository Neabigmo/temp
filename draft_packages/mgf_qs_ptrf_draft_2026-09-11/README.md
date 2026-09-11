# MGF-QS PTRF paper draft

This package turns the 2026-09-10/11 research handoff into a paper-oriented draft.

## Entry points

- `main_ptrf.tex` — intended PTRF/Springer Nature entry point. Copy the folder contents into the official Springer Nature LaTeX template package containing `sn-jnl.cls`.
- `main_portable.tex` — locally compilable article-class version used for QA.
- `paper_body.tex` — shared title, abstract, and section inputs.
- `NOVELTY_AUDIT.md` — literature boundary and claims discipline.
- `SUBMISSION_STRATEGY.md` — PTRF-first journal strategy.

## Evidence gates

The sharp upper theorem has a complete audited proof architecture in `sections/sharp_upper.tex`. The exact PSD theorem is included, but the final manuscript should import the precise spherical-transform identity from the original proof record. The Laguerre lower theorem remains behind an explicit audit gate: the Imekraz–Robert–Thomann uniform Laguerre estimate has been checked, but the remaining construction chain must be reconstructed independently before submission.

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
