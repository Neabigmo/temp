# PTRF Revised Submission Package

This folder is the canonical official PTRF submission package and the only active working version of the manuscript. The preceding `draft_packages/mgf_qs_ptrf_draft_2026-09-11/` directory is retained as historical provenance; do not make future manuscript edits there.

This version was imported from the supplied `PTRF_revised_submission.zip` on 2026-09-12 and then rebuilt from the imported source in this directory.

## Entry point

Compile `main_ptrf.tex` in this directory:

```text
pdflatex -interaction=nonstopmode -halt-on-error main_ptrf.tex
bibtex main_ptrf
pdflatex -interaction=nonstopmode -halt-on-error main_ptrf.tex
pdflatex -interaction=nonstopmode -halt-on-error main_ptrf.tex
```

A synchronized `main_ptrf.bbl` is included for environments in which BibTeX is not available.
The checked PDF is `main_ptrf.pdf` (24 pages); `main_ptrf_official.pdf` is an identical copy for submission workflows that expect that filename. Both were rebuilt from the source in this folder.

Before external submission, replace the template author, affiliation, and e-mail fields in `main_ptrf.tex` and complete any funding, acknowledgement, disclosure, data/code, or AI-use statements required by the journal.
