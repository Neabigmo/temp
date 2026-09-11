# Novelty audit — MGF-QS sharp reflection stability

Audit date: 2026-09-11

## Claim discipline

The paper must **not** claim to solve the unrestricted classical fixed-n sample-variance characterization problem. Ejsmont–Lehner (JFA 2017) explicitly describe that classical converse as open. Our theorem adds local symmetrized-MGF dominance and a fixed exponential-integrability hypothesis for stability.

## Closest prior work and separation

| Prior work | What it proves / studies | Why it does not directly cover the present theorem |
|---|---|---|
| Cramér (1936) | Exact Gaussian factorization of a Gaussian convolution | Qualitative exact factorization; no reflection-specific local MGF stability |
| Sapogov (1951) | Stability of Cramér decomposition | Starts from a nearly Gaussian convolution; general factor stability is logarithmic and does not exploit local MGF dominance of a reflected factor |
| Bobkov–Chistyakov–Götze (2013) | Cramér stability for identically distributed summands | Equal-factor convolution `F*F` retains Fourier phase; our reflected convolution `F*\tilde F` gives `|phi_F|^2` and erases it |
| Bondesson (1977) | Exact sample-variance characterization for the normal law | A classical exact characterization; it does not give the present reflected-MGF stability theorem |
| Christoph–Prohorov–Ulyanov (2001) | Characterization and stability for finite quadratic forms of i.i.d. symmetric variables | Symmetry is imposed; the present factor-recovery theorem uses a local reflected-MGF condition and permits nonsymmetric factors |
| Ruben (1974) | Sample-variance Gaussian characterization under symmetry | Uses symmetry; does not cover the unrestricted law or our quantitative reflected-MGF regime |
| Ruben (1978) | Quadratic forms and normality | A classical quadratic-form boundary reference; it does not analyze the present local reflected-MGF class |
| Golikova–Kruglov (2015) | Partial converse for independent infinitely divisible variables | Infinite divisibility is a different structural assumption; no sharp stability theorem of the present type |
| Ejsmont–Lehner (2017) | Free-probability analogue; records classical problem as open | Confirms the classical boundary rather than providing the present theorem |
| Eremenko–Fryntov (2021) | Stable Marcinkiewicz theorem from a wide zero-free strip for entire characteristic functions | Requires an a priori zero-free region/growth setting; our proof derives a growing zero-free disk from a small reflected MGF defect after truncation |
| Dinh–Ghosh–Tran–Tran (arXiv 2107.08469, revised 2025) | Quantitative Marcinkiewicz / CLT from zero-free disks | Their zero-free disk is an input. Here the core new bridge is defect -> high moments -> sqrt(m)-tail -> bounded truncation -> real product closeness -> complex propagation -> zero-free factor disk. Our bounded-support specialization then yields an O(1/R) logarithmic remainder directly |
| Imekraz–Robert–Thomann (2016) | Uniform Laguerre-function estimates | Supplies an external analytic estimate used inside the sharpness construction; it does not concern Gaussian characterization or reflection stability |

## Search families used

The audit searched combinations of:

- `sample variance chi-square characterization normal distribution fixed n`
- `sample variance characterization stability Gaussian`
- `M_X(t) M_X(-t) Gaussian characterization`
- `symmetrized moment generating function Gaussian characterization`
- `X-X' Gaussian characterization stability`
- `reflection convolution Cramer stability`
- `quadratic form chi-square converse independent variables Gaussian`
- `quantitative Marcinkiewicz zero-free characteristic function`

No direct theorem was found that assumes the present local one-sided symmetrized-MGF dominance and proves either the exact PSD rigidity theorem or the sharp `sqrt(log log / log)` Kolmogorov stability rate.

## Novelty claims currently safe to write

After the present bibliographic additions and local construction rewrite, the Introduction can safely say:

1. *We prove an exact Gaussian rigidity theorem under a local symmetrized-MGF dominance condition.*
2. *We establish a quantitative reflection-stability bound with order `sqrt(log log(1/Delta) / log(1/Delta))`.*
3. *The proof derives a growing zero-free disk for a truncated factor from real-axis reflected MGF information, rather than assuming a zero-free region.*
4. *A Laguerre construction supplies a sequence-wise lower-order obstruction, showing that the rate cannot be improved uniformly in general.*

Avoid “first”, “new optimal theorem”, or “resolves the classical sample-variance problem” until a final MathSciNet/zbMATH/Google Scholar forward-and-backward citation audit is complete.

## Final audit still required

- Follow all papers citing Ruben (1974, 1978), Bondesson (1977), and Golikova–Kruglov (2015).
- Search MathSciNet/zbMATH by MSC 60E10, 62E10, and phrases involving variance characterization and Cramér stability.
- Follow citations to Sapogov/Chistyakov/Golinskii that mention analytic moments or exponential tails.
- Re-check 2024–2026 papers on chi-square quadratic forms for converse/non-Gaussian variants.
- Recheck the complete Laguerre construction and the fixed-parameter quantifiers before external submission.
