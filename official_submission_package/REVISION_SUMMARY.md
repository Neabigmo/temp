# Revision summary

## Main mathematical changes

1. **Sharp reflection stability strengthened.** The independent assumption `E exp(2 tau |X|) <= K` was removed from the main reflection theorem. The paper now proves directly that local reflected-MGF control on `[-rho,rho]` implies
   `E exp(rho |X|) <= 2 exp(rho^2+1)` for the small-defect regime, so the final constants depend only on `rho`.

2. **Exact PSD rigidity strengthened.** The separate local MGF-existence hypothesis was removed. From `X^T A X ~ chi-square_r`, conditional Jensen gives a square-exponential moment for every active coordinate, hence its MGF is finite on the whole real line.

3. **Sharpness replaced by a stronger symmetric construction.** The former odd Laguerre perturbation plus Poisson correction was replaced by an even Laguerre perturbation with parameter `alpha=-1/2`. The resulting densities are symmetric and uniformly comparable with the Gaussian density, satisfy nonnegative reflected defect, and still attain the optimal logarithmic modulus. This separates fixed-interval transform inversion instability from Fourier phase loss.

4. **Sample-variance application upgraded to a standard probability metric.** A new lemma proves
   `D_{r,tau}(Q) <= C sqrt(d_K(Q, chi-square_r))`
   under the existing exponential radial envelope. This yields a new corollary stated directly in Kolmogorov distance between the sample variance and the chi-square law, with the same logarithmic Gaussian-stability rate.

5. **Proof details tightened.** The tail-lifting argument now uses conditional Jensen directly; the zero-free-disk exponent absorbs the `O(1)` term by choosing an intermediate exponent; and the Gaussian mean/variance parameter comparison in Kolmogorov distance is proved explicitly.

6. **Positioning and references revised.** The introduction now distinguishes local-transform inversion from classical global Cramer stability, corrects the Sapogov/Bobkov-Chistyakov-Gotze attribution, and adds Michelen--Sahasrabudhe (JEMS 2026) to the zero-geometry discussion. The endpoint claim in the sample-variance transfer was weakened to what the proof actually establishes.

## Build / QA

- `pdflatex` compilation succeeds with no undefined references.
- The synchronized `.bbl` includes all 17 references.
- The compiled manuscript has 24 pages.
- All pages were rendered and visually checked for clipping/overflow.

## Note

The mathematical revisions were derived and checked in this session, including numerical spot checks of the new Laguerre MGF identity. The external cross-model reviewer backend described in the supplied proof-checker workflow is not available in this environment, so that independent-review stage was not run.
