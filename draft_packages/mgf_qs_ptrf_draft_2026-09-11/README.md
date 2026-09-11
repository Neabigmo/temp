# Gaussian Rigidity from Symmetrized Moment Generating Functions — PTRF paper draft

This package is the reviewer-aligned 2026-09-11 revision of the MGF-QS/PTRF draft. Its central object is the one-dimensional reflected MGF defect; chi-square quadratic forms and sample variance are treated as exact and quantitative applications of that theory.

## Entry points

- `main_ptrf.tex` — PTRF/Springer Nature entry point. Copy the folder contents into the official Springer Nature LaTeX template package containing `sn-jnl.cls`; the local smoke compile used the December 2024 template package.
- `main_portable.tex` — locally compilable article-class version used for QA.
- `abstract.tex` — shared abstract text used by both entry points.
- `paper_body.tex` — shared section and appendix inputs; front matter is kept in each entry point.
- `NOVELTY_AUDIT.md` — literature boundary and claims discipline.
- `FINAL_POLISH_REPORT.md` — historical mathematical, expository, literature, and QA record for the preceding polish branch.
- `MAJOR_REVISION_R2_REPORT.md` — baseline, referee-location map, resolved comments, and final Round 2 status.
- `RESPONSE_TO_REFEREE_R2.md` — point-by-point response template for the simulated major-revision comments.
- `SECOND_REFEREE_AUDIT.md` — independent adversarial audit of the theorem chains and supporting citations.
- `SUBMISSION_CHECKLIST.md` — author-owned metadata, disclosure, claims, and submission checks.
- `SUBMISSION_STRATEGY.md` — PTRF-first journal strategy.

## Revision status

The manuscript now has a single reflected-defect notation, an exact spherical-transform identity, a full exact PSD proof, a precise spherical Laplace discrepancy, a complete Laguerre construction section, and an explicit non-circular parameter appendix. The main text is organized as five sections, with the exact and sharp results stated in the Introduction and the sample-variance interface consolidated in Section 5. The portable and PTRF entry points now both emit the same title, author block, abstract, keywords, and shared body, subject only to venue-specific typography and bibliography formatting. Round 2 adds the formal half-disk lemma, explicit complex-propagation and logarithmic-coefficient chains, the independence and matching-scale details in the Laguerre construction, the four-region envelope proof, the $n=2$ exact audit, and standard references for Cram\'er decomposition, L\'evy--Khintchine, Carath\'eodory coefficients, and Esseen smoothing. Author name, affiliation, and email remain explicit placeholders and must be replaced before submission; the independent second-referee audit records whether any core gap remains.

The main narrative is Introduction and main results → exact rigidity → sharp reflection stability → optimality/obstructions → sample variance. The high-frequency sine family is not part of the main text.

The final language pass fixes the non-circular parameter order in Appendix A, states the Laguerre lower-bound hypotheses explicitly, and uses descriptive rather than branded proof-step headings. The authoritative Round 2 status and detailed comment map are recorded in `MAJOR_REVISION_R2_REPORT.md`; the preceding report remains as historical provenance.

## Local compile

```
pdflatex main_portable.tex
pdflatex main_portable.tex
pdflatex main_portable.tex
```

## PTRF template

Official Springer Nature template page:
https://www.springernature.com/gp/authors/campaigns/latex-author-support/see-where-our-services-will-take-you/18782940
