# Official PTRF Submission Package

This is the canonical working version of the MGF-QS / PTRF manuscript. From this point onward, manuscript, proof, bibliography, PDF, and referee-response adjustments are to be made in this folder only. The preceding dated package under `draft_packages/` is a historical Round 2 snapshot and should not receive new manuscript edits.

The package is intentionally flat: all manuscript source files, the Springer class, the bibliography style, the compiled official PDF, and the current review documents are at this level. There are no required nested source directories.

## Official entry point

Compile `main_ptrf.tex` in this directory:

```text
pdflatex -interaction=nonstopmode -halt-on-error main_ptrf.tex
bibtex main_ptrf
pdflatex -interaction=nonstopmode -halt-on-error main_ptrf.tex
pdflatex -interaction=nonstopmode -halt-on-error main_ptrf.tex
```

The resulting official manuscript is `main_ptrf.pdf`; the checked-in reference artifact is `main_ptrf_official.pdf`. The current verified build has 20 pages and contains the rendered title, author block, abstract, keywords, and MSC classification on its first page.

## Package contents

- `main_ptrf.tex`, `paper_body.tex`, `abstract.tex`: official entry point and manuscript assembly.
- `introduction.tex`, `exact_rigidity.tex`, `sharp_upper.tex`, `sharpness.tex`, `sample_variance.tex`: the five manuscript sections.
- `parameter_selection.tex`, `laguerre_details.tex`: the two appendices.
- `references.bib`, `sn-jnl.cls`, `sn-mathphys-num.bst`: bibliography and Springer build dependencies.
- `main_ptrf_official.pdf`: verified official PDF. Build logs are kept locally but ignored so the submission directory stays focused on deliverables.
- `MAJOR_REVISION_R2_REPORT.md`, `RESPONSE_TO_REFEREE_R2.md`, `SECOND_REFEREE_AUDIT.md`, `SUBMISSION_CHECKLIST.md`: current revision, response, and audit records.

The `PTRF_REFEREE_R2_READY` marker records technical readiness after the independent audit. It is not an acceptance or publication decision. Before external submission, replace the template author, affiliation, and e-mail fields and complete any applicable funding, acknowledgement, disclosure, and AI-use declarations.
