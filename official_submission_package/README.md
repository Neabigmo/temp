# Revised PTRF manuscript package

Revision date: 12 September 2026.

## Start here

- `main_ptrf.pdf`: compiled revised manuscript, 25 pages.
- `main_ptrf.tex`: canonical LaTeX entry point.
- `REVISION_NOTES.md`: actual changes, theorem-number map and author checks.
- `LITERATURE_AUDIT.md`: all 28 inspected/candidate entries, evidence level, sources and citation locations. The manuscript cites 27 of them.
- `SOURCE_DIFF.patch`: source changes against the latest uploaded ZIP.
- `VALIDATION_REPORT.md`: build and limited consistency checks.

The manuscript and editorial reports are in English. The source is editable. `main_ptrf_official.pdf` is an identical compatibility copy of the main PDF.

## Compile

A TeX installation providing pdfLaTeX, BibTeX and the packages used in `main_ptrf.tex` is required. The supplied Springer class and bibliography style are included. No font files are distributed.

On a POSIX shell:

```sh
sh build.sh
```

Or run manually:

```sh
pdflatex -interaction=nonstopmode -halt-on-error main_ptrf.tex
bibtex main_ptrf
pdflatex -interaction=nonstopmode -halt-on-error main_ptrf.tex
pdflatex -interaction=nonstopmode -halt-on-error main_ptrf.tex
```

The build script detects `bibtex.original` as a fallback for environments with a broken `bibtex` command. It does not require internet access. On Overleaf, upload the source files and select `main_ptrf.tex` as the main document. The `.bbl` is included as a convenience but should be regenerated after citation changes.

## Source organization

`paper_body.tex` includes the introduction, exact rigidity, sharp upper bound, lower bound/obstructions, sample variance, and two appendices. `references.bib` contains only the 27 cited entries. `candidate_references.bib` preserves one original entry excluded pending adequate content verification; it is not loaded by the manuscript.

## Before submission

The author/email/institution fields are placeholders inherited from the input. They must be replaced. The authors must review the mathematical edits, in particular the extension of the lower bound to every fixed radius. The audit distinguishes direct original-text checks from abstract or metadata checks; it is not a declaration that every cited source was read in full. No funding, ethics, conflict, or authorship declarations have been invented.

The original uploaded package is identified by its filename in the revision notes. Third-party article PDFs, working renders, logs, temporary files and fonts are not part of this deliverable.
