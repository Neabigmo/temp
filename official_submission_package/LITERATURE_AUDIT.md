# Literature audit and citation map

Research date: 12 September 2026. Input: the latest uploaded ZIP, not a reconstruction from the earlier chat.

## What was checked

The revised manuscript cites **27 references**. Of the original 17, 16 remain cited and one is preserved separately for further checking. Eleven references were added. All 27 cited keys have matching BibTeX entries. The earlier Dinh et al. key has been updated from 2025 to 2026, with an explicit accepted-for-publication note.

This is **not** a claim that all 28 source texts were read in full. Each entry below states whether the relevant original text, publisher abstract, or only metadata and corroborating primary literature were available. For inaccessible historical papers, the revised prose is limited to statements supported by later primary research. The one specific Kruglov 2013 attribution that could not be adequately checked has been removed. The audit uses URLs for traceability; downloaded third-party papers are not included in the package.

The most consequential original-text checks were the finite-disk theorem of Dinh et al., the comparable-density counterexamples of Bobkov et al. (2013), the sample-variance history in Ejsmont-Lehner, and the normalized Laguerre bounds in Imekraz-Robert-Thomann. A title or search snippet alone was not treated as proof of a specialized mathematical claim.

## Entry-by-entry audit

Bibliographic names below use plain ASCII for portability. Accents and protected mathematical/proper-name capitalization are supplied in the actual BibTeX file.

### 1. `Cramer1936`

**Disposition:** Original; retained.

**Bibliographic record:** Harald Cramer. Uber eine Eigenschaft der normalen Verteilungsfunktion. Mathematische Zeitschrift 41 (1936), 405-414. DOI: 10.1007/BF01180430.

**Evidence and access:** Publisher metadata and corroboration in modern primary papers. The historical article was not read in full.

**Sources:** https://link.springer.com/article/10.1007/BF01180430

**Location and citation scope:** Introduction opening; exact factor recovery in Section 2. Used only for the Gaussian decomposition theorem. The independence required by that theorem is supplied in the manuscript. German title capitalization is protected in BibTeX.

### 2. `Sapogov1951`

**Disposition:** Original; retained.

**Bibliographic record:** N. A. Sapogov. The stability problem for a theorem of Cramer. Izvestiya Akademii Nauk SSSR, Seriya Matematicheskaya 15(3) (1951), 205-218. In Russian.

**Evidence and access:** Math-Net bibliographic record, with the historical role corroborated by the primary Cramer-stability literature. The Russian original was not read in full.

**Sources:** https://www.mathnet.ru/eng/im3335

**Location and citation scope:** Section 1.2, first sentence. Supports the historical origin of quantitative Gaussian decomposition, not any asserted optimal rate. Added the language note and stable record URL.

### 3. `LinnikOstrovskii1977`

**Disposition:** Added.

**Bibliographic record:** Yu. V. Linnik and I. V. Ostrovskii. Decomposition of Random Variables and Vectors. Translations of Mathematical Monographs 48. American Mathematical Society, Providence, 1977. English translation.

**Evidence and access:** Bibliographic information corroborated in Dinh et al., version 3, and the modern decomposition literature. The monograph itself was not retrieved in full.

**Sources:** https://arxiv.org/html/2107.08469v3

**Location and citation scope:** Section 1.2. Supplies the classical analytic decomposition framework. No unverified chapter number or specialized theorem is attributed to the book.

### 4. `GolinskiiChistyakov1994`

**Disposition:** Added.

**Bibliographic record:** L. B. Golinskii and G. P. Chistyakov. Order sharp stability estimates for the decompositions of the normal distribution in the Levy metric. Journal of Mathematical Sciences 72(1) (1994), 2848-2871. DOI: 10.1007/BF01249901.

**Evidence and access:** Publisher bibliographic record and discussion in the subsequent Cramer-stability literature. Full article not retrieved.

**Sources:** https://link.springer.com/article/10.1007/BF01249901

**Location and citation scope:** Section 1.2. A precise predecessor for Levy-metric decomposition stability. The author order is Golinskii, then Chistyakov. The paper is not cited as a local-MGF theorem.

### 5. `BobkovChistyakovGotze2013`

**Disposition:** Original; retained and use expanded.

**Bibliographic record:** S. G. Bobkov, G. P. Chistyakov and F. Gotze. Stability problems in Cramer-type characterization in case of I.I.D. summands. Theory of Probability and Its Applications 57(4) (2013), 568-588. DOI: 10.1137/S0040585X97986217.

**Evidence and access:** Author-hosted full preprint accessed; relevant introduction and theorem statements read. Theorem 1.1 on page 3 of the preprint was also checked visually.

**Sources:** https://sfb701.math.uni-bielefeld.de/preprints/sfb11146.pdf

**Location and citation scope:** Section 1.2 distinguishes equal summands from reflected summands. The same section and Section 4.2 credit the earlier symmetric absolutely continuous counterexamples, including Gaussian-comparable densities. The revised paper claims novelty for the local-defect/Kolmogorov scale, not for comparable-density perturbations themselves.

### 6. `Marcinkiewicz1939`

**Disposition:** Added.

**Bibliographic record:** J. Marcinkiewicz. Sur une propriete de la loi de Gauss. Mathematische Zeitschrift 44 (1939), 612-618. DOI: 10.1007/BF01210677.

**Evidence and access:** Publisher and EuDML metadata; the exact classical theorem is also stated in Dinh et al., Theorem 2.1. Historical original not read in full.

**Sources:** https://link.springer.com/article/10.1007/BF01210677 ; https://eudml.org/doc/168829

**Location and citation scope:** Section 1.2, first mention of Marcinkiewicz theory. Used for the characterization of characteristic functions of polynomial-exponential form. It does not by itself supply the bounded-disk quantitative estimate.

### 7. `Golinskii1991`

**Disposition:** Added.

**Bibliographic record:** L. B. Golinskii. Stability estimates in the theorem of J. Marcinkiewicz. Journal of Soviet Mathematics 57 (1991), 3193-3209. DOI: 10.1007/BF01099017.

**Evidence and access:** Publisher metadata; the nature of its hypotheses was checked against Dinh et al., Appendix A. Original full text not retrieved.

**Sources:** https://link.springer.com/article/10.1007/BF01099017 ; https://arxiv.org/html/2107.08469v3

**Location and citation scope:** Section 1.2. Described as stability when an exponential of a polynomial is close to a characteristic function. It is not grouped as a theorem assuming only a zero-free disk.

### 8. `EremenkoFryntov2021`

**Disposition:** Original; retained with narrower comparison.

**Bibliographic record:** Alexandre Eremenko and Alexander Fryntov. Stability in the Marcinkiewicz theorem. Journal of Mathematical Physics, Analysis, Geometry 17(4) (2021), 463-467. DOI: 10.15407/mag17.04.463.

**Evidence and access:** Full preprint accessed and the relevant hypotheses read. Publisher bibliographic information corroborates the journal record.

**Sources:** https://arxiv.org/pdf/2106.14078 ; https://mag.ilt.kharkov.ua/index.php/jmag/article/view/jm17-0463e

**Location and citation scope:** Section 1.2. The comparison now specifies a zero-free vertical strip and a global growth condition. This avoids treating it as identical to the later finite-disk theorem.

### 9. `DinhGhoshTranTran2026`

**Disposition:** Original entry updated; old key ended in 2025.

**Bibliographic record:** Tien-Cuong Dinh, Subhroshekhar Ghosh, Hoang-Son Tran and Manh-Hung Tran. Gaussian fluctuations for spin systems and point processes: near-optimal rates via quantitative Marcinkiewicz's theorem. Annals of Applied Probability, accepted for publication, 2026. Preprint arXiv:2107.08469v3 (2025).

**Evidence and access:** Full HTML version 3 accessed; Theorem 2.2 and the historical comparison in Appendix A read. Acceptance and year checked on Hoang-Son Tran's publication page on 12 September 2026. No final volume/pages/DOI verified.

**Sources:** https://arxiv.org/html/2107.08469v3 ; https://sites.google.com/view/hoangson-tran/

**Location and citation scope:** Section 1.2. Identifies the finite zero-free disk and growth hypotheses. The comparison O((1+log R)/R) is a substitution of the manuscript's bound exp(NR), N comparable to R, into Theorem 2.2. It is not a claim that every use of their method must lose a logarithm. The bibliography explicitly says accepted, not already assigned an issue.

### 10. `LebowitzPittelRuelleSpeer2016`

**Disposition:** Added.

**Bibliographic record:** J. L. Lebowitz, B. Pittel, D. Ruelle and E. R. Speer. Central limit theorems, Lee-Yang zeros, and graph-counting polynomials. Journal of Combinatorial Theory, Series A 141 (2016), 147-183. DOI: 10.1016/j.jcta.2016.02.009.

**Evidence and access:** Author-hosted published PDF accessed; introductory scope and bibliographic information checked.

**Sources:** https://cmsr.sas.rutgers.edu/images/people/lebowitz_joel/publications-archived/593_Central_limit_theorems.pdf

**Location and citation scope:** Section 1.2, zero geometry paragraph. Supplies context for zeros and normal approximation. It is not invoked to prove local reflected-MGF recovery. All four authors, including Speer, are retained.

### 11. `MichelenSahasrabudhe2019`

**Disposition:** Added.

**Bibliographic record:** Marcus Michelen and Julian Sahasrabudhe. Central limit theorems from the roots of probability generating functions. Advances in Mathematics 358 (2019), article 106840.

**Evidence and access:** Full preprint and abstract accessed; introductory results checked. Journal/article metadata corroborated in Dinh et al. No publisher DOI was independently verified in this pass, so none was guessed.

**Sources:** https://arxiv.org/abs/1804.07696 ; https://arxiv.org/pdf/1804.07696

**Location and citation scope:** Section 1.2. Adds the earlier probability-generating-function result to the zero-geometry background. Kept distinct from the later JEMS paper; an article number is not a page range.

### 12. `MichelenSahasrabudhe2026`

**Disposition:** Original; retained.

**Bibliographic record:** Marcus Michelen and Julian Sahasrabudhe. Central limit theorems and the geometry of polynomials. Journal of the European Mathematical Society 28(5) (2026), 2261-2305. DOI: 10.4171/JEMS/1530.

**Evidence and access:** Official EMS journal page and the full preprint introduction/theorem statements checked. Online publication in 2024 and print issue in 2026 are distinguished.

**Sources:** https://ems.press/journals/jems/articles/14298247 ; https://arxiv.org/html/1908.09020v2

**Location and citation scope:** Section 1.2. Supports the link between zero geometry and quantitative normal approximation. Retains the verified 2026 journal citation rather than changing it to the online-first year.

### 13. `KaganLinnikRao1973`

**Disposition:** Added.

**Bibliographic record:** A. M. Kagan, Yu. V. Linnik and C. R. Rao. Characterization Problems in Mathematical Statistics. John Wiley & Sons, New York, 1973.

**Evidence and access:** Book metadata and the page-466 location are corroborated in the introduction of Ejsmont and Lehner. The original book page was not independently retrieved.

**Sources:** https://arxiv.org/pdf/1607.06586

**Location and citation scope:** Section 1.3. Historical location of the unrestricted sample-variance question. The page locator is secondary corroboration from a primary research paper, not a claim of direct inspection of the book. Author review of the cited edition/page is recommended.

### 14. `EjsmontLehner2017`

**Disposition:** Original; retained with explicit scope.

**Bibliographic record:** Wiktor Ejsmont and Franz Lehner. Sample variance in free probability. Journal of Functional Analysis 273(7) (2017), 2488-2520. DOI: 10.1016/j.jfa.2017.05.007.

**Evidence and access:** Full preprint accessed; the historical introduction and bibliography read.

**Sources:** https://arxiv.org/pdf/1607.06586

**Location and citation scope:** Section 1.3. Supports the formulation and history of the classical question and the Ruben/Bondesson distinctions. The manuscript explicitly says that the paper's main results are in free probability; it is not cited as a solution of the classical conjecture.

### 15. `Ruben1974`

**Disposition:** Original; retained.

**Bibliographic record:** Harold Ruben. A new characterization of the normal distribution through the sample variance. Sankhya, Series A 36(4) (1974), 379-388.

**Evidence and access:** Original bibliographic identity corroborated in Ejsmont-Lehner and the publisher reference list of Golikova-Kruglov. Original JSTOR full text not retrieved; the theorem scope is corroborated by Ejsmont-Lehner's introduction.

**Sources:** https://www.jstor.org/stable/25049950 ; https://arxiv.org/pdf/1607.06586 ; https://link.springer.com/article/10.1007/s13171-014-0060-5

**Location and citation scope:** Section 1.3. Assigned specifically to symmetric laws and the n=2 case, rather than included in an undifferentiated list of partial results. The n=2 implication is also explained directly in Section 5.1.

### 16. `Ruben1975`

**Disposition:** Added.

**Bibliographic record:** Harold Ruben. A further characterization of normality through the sample variance. Sankhya, Series A 37(1) (1975), 72-81.

**Evidence and access:** Metadata corroborated by the publisher reference list of Golikova-Kruglov; the two-sample-size scope is stated in Ejsmont-Lehner's introduction. Original JSTOR full text not retrieved.

**Sources:** https://www.jstor.org/stable/25049961 ; https://arxiv.org/pdf/1607.06586 ; https://link.springer.com/article/10.1007/s13171-014-0060-5

**Location and citation scope:** Section 1.3. Fills the historical step between Ruben 1974 and Bondesson 1977. The text says two distinct sample sizes, not one unrestricted fixed sample size.

### 17. `Bondesson1977`

**Disposition:** Original; retained with corrected grouping.

**Bibliographic record:** Lennart Bondesson. The sample variance, properly normalized, is chi-squared-distributed for the normal law only. Sankhya, Series A 39 (1977), 303-304.

**Evidence and access:** Bibliographic identity and the interpretation as a simpler treatment of the two-sample-size result are corroborated in Ejsmont-Lehner. Original full text not retrieved.

**Sources:** https://arxiv.org/pdf/1607.06586

**Location and citation scope:** Section 1.3, paired with Ruben 1975. The title is not used to infer that the unrestricted fixed-n conjecture was solved. That inference would be a text-citation mismatch.

### 18. `GolikovaKruglov2015`

**Disposition:** Original; retained.

**Bibliographic record:** Nina N. Golikova and Victor M. Kruglov. A characterisation of the Gaussian distribution through the sample variance. Sankhya A 77(2) (2015), 330-336. DOI: 10.1007/s13171-014-0060-5.

**Evidence and access:** Publisher abstract and reference list read directly. Full article is paywalled and was not retrieved. The print year 2015 differs from the online-first year 2014.

**Sources:** https://link.springer.com/article/10.1007/s13171-014-0060-5

**Location and citation scope:** Section 1.3. Cited for a sample-variance characterization for independent infinitely divisible variables with common mean. The abstract distinguishes the n>=3 conclusion from the n=2 variance-sum conclusion. The manuscript uses only the broad common-mean statement, not an invented i.i.d.-only hypothesis.

### 19. `Ruben1978`

**Disposition:** Original; retained as general background.

**Bibliographic record:** Harold Ruben. On quadratic forms and normality. Sankhya, Series A 40 (1978), 156-173.

**Evidence and access:** Bibliographic identity corroborated by the characterization literature. Original JSTOR full text was not retrieved.

**Sources:** https://www.jstor.org/stable/25050144 ; https://rd.springer.com/chapter/10.1007/978-1-4612-0209-7_3

**Location and citation scope:** Section 1.3, general quadratic-form background only. Removed from the sentence attributing specific sample-variance results under symmetry or infinite divisibility. No detailed theorem is asserted on the strength of its title.

### 20. `ChristophProhorovUlyanov2001`

**Disposition:** Original; retained and metadata corrected.

**Bibliographic record:** Gerd Christoph, Yu. Prohorov and Vladimir Ulyanov. Characterization and Stability Problems for Finite Quadratic Forms. In Asymptotic Methods in Probability and Statistics with Applications, edited by N. Balakrishnan, I. A. Ibragimov and V. B. Nevzorov. Birkhauser, Boston, 2001, pp. 39-50. DOI: 10.1007/978-1-4612-0209-7_3.

**Evidence and access:** Publisher chapter abstract and metadata checked. Only a limited preview was available, not the full chapter.

**Sources:** https://rd.springer.com/chapter/10.1007/978-1-4612-0209-7_3 ; https://link.springer.com/book/10.1007/978-1-4612-0209-7

**Location and citation scope:** Section 1.3. The cited scope includes characterization and stability of finite quadratic forms for i.i.d. symmetric variables. Replaced the incomplete editor field ending in "and others" with all three editors.

### 21. `Sato1999`

**Disposition:** Original; retained.

**Bibliographic record:** Ken-Iti Sato. Levy Processes and Infinitely Divisible Distributions. Cambridge Studies in Advanced Mathematics 68. Cambridge University Press, Cambridge, 1999.

**Evidence and access:** Edition metadata corroborated by the publisher reference list of Golikova-Kruglov; Cambridge table of contents for the revised edition corroborates the subject coverage. The full 1999 edition was not inspected.

**Sources:** https://link.springer.com/article/10.1007/s13171-014-0060-5 ; https://assets.cambridge.org/97811076/56499/toc/9781107656499_toc.pdf

**Location and citation scope:** Section 1.3 and Remark 2.1. Used for the Levy-Khintchine framework. The reflected identity and the nonnegative cosh integrand are written in the manuscript, rather than left as an unspecified appeal to the book. No revised-edition page number is assigned to the 1999 edition.

### 22. `Ransford1995`

**Disposition:** Added.

**Bibliographic record:** Thomas Ransford. Potential Theory in the Complex Plane. London Mathematical Society Student Texts 28. Cambridge University Press, Cambridge, 1995.

**Evidence and access:** Official publisher book record checked. The whole book was not retrieved; no exact theorem/page locator is claimed.

**Sources:** https://www.cambridge.org/core/books/potential-theory-in-the-complex-plane/FC129402A9C28985C0C554C4416DB4A5/listing

**Location and citation scope:** Lemma 3.2. A background source for the subharmonic two-constants principle. The manuscript itself explains the harmonic-measure argument and the scale-independent positive lower bound.

### 23. `Duren1983`

**Disposition:** Original; retained.

**Bibliographic record:** Peter L. Duren. Univalent Functions. Grundlehren der mathematischen Wissenschaften 259. Springer-Verlag, New York, 1983.

**Evidence and access:** Publisher bibliographic record checked. Full book not retrieved; the manuscript uses a standard Caratheodory coefficient theorem without an unverified page locator.

**Sources:** https://link.springer.com/book/9780387907956

**Location and citation scope:** Lemma 3.7. The revised proof explicitly normalizes the positive-real-part function to have value one at the origin, and displays the coefficient bound. The normalization is part of our derivation, not a claim about the wording of Duren.

### 24. `Esseen1945`

**Disposition:** Original; retained.

**Bibliographic record:** Carl-Gustav Esseen. Fourier analysis of distribution functions. A mathematical study of the Laplace-Gaussian law. Acta Mathematica 77 (1945), 1-125. DOI: 10.1007/BF02392223.

**Evidence and access:** Official publisher metadata checked. The historical full article was not read in full; the standard smoothing inequality is displayed explicitly in the manuscript.

**Sources:** https://link.springer.com/article/10.1007/BF02392223

**Location and citation scope:** Lemma 3.7. Used for Fourier smoothing, with the Gaussian density bound and truncation scale stated. This is a technical background citation, not a new comparison of optimal constants.

### 25. `ImekrazRobertThomann2016`

**Disposition:** Original; retained and technical input checked.

**Bibliographic record:** Rafik Imekraz, Didier Robert and Laurent Thomann. On random Hermite series. Transactions of the American Mathematical Society 368(4) (2016), 2763-2792. DOI: 10.1090/tran/6607.

**Evidence and access:** Full preprint accessed. Proposition 3.2, its normalization and four Laguerre regions were checked, including a screenshot of page 13. The technical check uses the author preprint. Direct retrieval of the AMS publisher record was unsuccessful in this pass; the listed journal metadata and DOI should also be checked against the publisher record before submission.

**Sources:** https://arxiv.org/pdf/1403.4913 ; https://doi.org/10.1090/tran/6607

**Location and citation scope:** Lemma 4.1 and Appendix B. Proposition 3.2 covers alpha>-1, hence alpha=-1/2. The turning-region cutoff is 3 nu/2. The revised appendix treats r=0 by continuity only after cancelling the normalization singularity.

### 26. `Szego1975`

**Disposition:** Added.

**Bibliographic record:** Gabor Szego. Orthogonal Polynomials. Fourth edition. American Mathematical Society Colloquium Publications 23. American Mathematical Society, Providence, 1975.

**Evidence and access:** Academic-hosted book record/PDF and the Laguerre background checked. The generating function was cross-checked directly against NIST DLMF 18.12.13. This is not a claim that the entire monograph was read.

**Sources:** https://people.math.osu.edu/nevai.1/SZEGO/szego%3Dszego1975%3Dops%3DOCR.pdf ; https://dlmf.nist.gov/18.12.E13

**Location and citation scope:** Section 4.1, orthogonality for parameter -1/2 and the subsequent generating-function computation. Chapter V is the Laguerre/Hermite chapter. The manuscript supplies the Gaussian integral and coefficient extraction, rather than attributing its particular perturbation formula to the book.

### 27. `BobkovChistyakovGotze2016`

**Disposition:** Added.

**Bibliographic record:** S. G. Bobkov, G. P. Chistyakov and F. Gotze. Regularized distributions and entropic stability of Cramer's characterization of the normal law. Stochastic Processes and their Applications 126(12) (2016), 3865-3887. DOI: 10.1016/j.spa.2016.04.010.

**Evidence and access:** Author preprint/abstract and the University of Minnesota publication record checked. Metadata and the Gaussian-regularization scope agree.

**Sources:** https://arxiv.org/abs/1504.02961 ; https://ar5iv.labs.arxiv.org/html/1504.02961 ; https://experts.umn.edu/en/publications/regularized-distributions-and-entropic-stability-of-cramers-chara/

**Location and citation scope:** Section 4.2 closing paragraph. Separates instability without smoothing from total-variation/entropic stability after Gaussian regularization. The journal is SPA, not Bernoulli; no assertion about the unregularized local-MGF problem is attributed to it.

### 28. `Kruglov2013`

**Disposition:** Original; excluded from the revised bibliography, preserved as a candidate.

**Bibliographic record:** Victor M. Kruglov. A characterization of the Gaussian distribution. Stochastic Analysis and Applications 31(5) (2013), 872-875. DOI: 10.1080/07362994.2013.817250.

**Evidence and access:** Existence and journal metadata are corroborated in the official reference list of Golikova-Kruglov 2015. This pass did not retrieve enough of the original article or its publisher abstract to verify the precise sums-of-squares theorem previously attributed to it.

**Sources:** https://doi.org/10.1080/07362994.2013.817250 ; https://link.springer.com/article/10.1007/s13171-014-0060-5

**Location and citation scope:** The specific sentence was removed from Section 1.3, and the entry moved to candidate_references.bib. This is a verification limitation, not a finding that the article is fictitious or incorrect. It can be restored after checking the original hypotheses and conclusion. It is not needed for any proof in the manuscript.

## Reference-count comparison with PTRF

These counts were taken from the numbered reference lists on publisher pages, not inferred from page length. They are examples, not an editorial requirement.

| Paper | Published extent | References | Relevance of the comparison |
|---|---:|---:|---|
| R. Herry, D. Malicet and G. Poly, *Regularity of laws via Dirichlet forms: application to quadratic forms in independent and identically distributed random variables*, PTRF 191 (2025), 523-567 | 45 pages | 28 | Adjacent quadratic-form/normal-approximation literature. It studies forward regularity and convergence, not the same inverse characterization problem. |
| H. Boedihardjo and X. Geng, *On the lack of Gaussian tail for rough line integrals along fractional Brownian paths*, PTRF 188 (2024), 1287-1313 | 27 pages | 17 | Same-journal length/style comparison only; not a close scientific predecessor. |
| A. Bovier and A. Schertzer, *Fluctuations of the free energy in p-spin SK models on two scales*, PTRF 189 (2024), 771-810 | 40 pages | 15 | Same-journal reference-count comparison only; a different probability problem. |

Publisher pages:

- https://link.springer.com/article/10.1007/s00440-024-01332-x
- https://link.springer.com/article/10.1007/s00440-023-01242-4
- https://link.springer.com/article/10.1007/s00440-024-01296-y

The revised total of 27 is supported by the coverage needed here: decomposition stability, Marcinkiewicz/zero geometry, quadratic-form characterization, and the analytic tools used in the proof. The comparison does not justify filling the bibliography to an arbitrary quota. The three benchmark papers were not added to the manuscript merely to increase its count.

## Additions considered but not forced into the paper

The previously suggested Golinskii-Chistyakov 1992 item was not added: the verified 1991 and 1994 papers already cover the relevant historical points, and no additional theorem-level comparison was needed. No unverified DOI was guessed for the Michelen-Sahasrabudhe 2019 entry. Kruglov 2013 is preserved in `candidate_references.bib`, not silently discarded or represented as fully checked.

## Limits and author checks before submission

For the historical Ruben/Bondesson attributions, the evidence is the explicit discussion in Ejsmont-Lehner, not independent full-text inspection of each old article. The Kagan-Linnik-Rao page locator is similarly corroborated rather than directly inspected. Author or library access would allow these checks to be completed against the originals.

The accepted-publication status of Dinh et al. was checked on an author's current publication page. The final volume, issue, pages and DOI should be updated when a publisher issue record becomes available. The bibliography does not invent them.

This search did not establish an exhaustive novelty survey or a proof of the current unsolved status of every classical characterization problem. The introduction records the documented formulation and explicitly states that the present paper retains a dominance assumption. The manuscript's own proofs and comparisons still require the authors' mathematical approval.
