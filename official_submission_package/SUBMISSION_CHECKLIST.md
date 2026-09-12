# PTRF submission checklist

This checklist records technical and author-owned actions. During Round 2 the package must not be labeled `PTRF_REFEREE_R2_READY` until the independent audit has no core `OPEN` item; the final author-owned state is still not `SUBMISSION_READY`.

## Springer Nature AI/LLM policy

> Springer Nature currently distinguishes AI-assisted copy editing from substantive generative use. If Codex/LLM use is limited to readability, grammar, wording, punctuation and formatting of author-generated text, a declaration is not required under the current guideline. If an LLM is used for substantive generative editorial work, mathematical content, proof construction or autonomous content creation, the authors must review the current Springer policy and provide the required documentation in an appropriate section.

The author must decide which category applies to the actual workflow and must make any required disclosure. Codex does not make that declaration on the author's behalf.

## Source and metadata

- Replace `Author`, `Name`, `Institution Name`, `City`, `Country`, and `author@example.com` in `main_ptrf.tex`.
- Add ORCID identifiers if required by the journal.
- Add funding and competing-interest statements if applicable.
- Confirm the corresponding-author email and author order.
- Confirm the final title in `main_ptrf.tex`; record any title change in the author-facing revision notes.
- Complete an independent mathematical referee audit of every theorem and lemma.
- Read `SECOND_REFEREE_AUDIT.md` independently of the response letter and resolve every core item marked `OPEN` or `CITATION-DEPENDENT`.

## Technical QA

- The five-section structure and Appendices A/B are retained.
- No deleted research-log sections or high-frequency sine family have been reintroduced.
- The official Springer Nature December 2024 template build uses `pdflatex`, `bibtex`, and two further `pdflatex` passes.
- Check `main_ptrf_official.log` and `main_ptrf_official.pdf` after any metadata edit.
- Visually confirm that the official PDF begins with the title, author block, abstract, keywords, and classification; missing front matter is not acceptable.
- Confirm that there are no fatal errors, undefined control sequences, undefined references/citations, overfull boxes, or duplicate labels.
- The official class may report nonfatal `Underfull \\vbox` diagnostics; do not hide them with `\\raggedbottom` or `\\vbadness` suppression.
- Upload `main_ptrf.tex`, all flat `.tex` files, `references.bib`, and any required `.bst`/`.bbl` according to the target PTRF submission system's current instructions.

## Claims and references

- Do not state that the unrestricted classical fixed-sample-size sample-variance converse is solved.
- Do not add priority or unsupported novelty claims without a completed external literature audit.
- Recheck every citation and bibliography entry against the final title and author metadata.
- Review `NOVELTY_AUDIT.md`, especially the observable/factorization boundary and the remaining search tasks.
