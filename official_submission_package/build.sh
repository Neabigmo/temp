#!/bin/sh
# Rebuild the manuscript without downloading anything.
set -eu
cd "$(dirname "$0")"
if ! command -v pdflatex >/dev/null 2>&1; then
    echo "pdfLaTeX is required but was not found." >&2
    exit 1
fi
if [ -n "${BIBTEX:-}" ]; then
    if ! command -v "$BIBTEX" >/dev/null 2>&1; then
        echo "The requested BIBTEX command was not found: $BIBTEX" >&2
        exit 1
    fi
elif command -v bibtex >/dev/null 2>&1 && bibtex --version >/dev/null 2>&1; then
    BIBTEX=bibtex
elif command -v bibtex.original >/dev/null 2>&1; then
    BIBTEX=bibtex.original
else
    echo "BibTeX is required but was not found." >&2
    exit 1
fi
pdflatex -interaction=nonstopmode -halt-on-error main_ptrf.tex
"$BIBTEX" main_ptrf
pdflatex -interaction=nonstopmode -halt-on-error main_ptrf.tex
pdflatex -interaction=nonstopmode -halt-on-error main_ptrf.tex
cp main_ptrf.pdf main_ptrf_official.pdf
printf '\nBuilt main_ptrf.pdf and its identical compatibility copy.\n'
