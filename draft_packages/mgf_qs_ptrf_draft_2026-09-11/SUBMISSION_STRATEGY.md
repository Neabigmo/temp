# Submission strategy — quality vs. speed

## Recommended first target: Probability Theory and Related Fields (PTRF)

**Why:** The manuscript is primarily a probability theorem paper: Gaussian characterization, Cramér/Marcinkiewicz stability, complex-analytic factor recovery, and a sharp extremal family. That combination is a natural PTRF fit if the sharpness construction and novelty audit survive final verification.

**Speed reality:** A small, non-random sample of PTRF papers published/accepted in 2026 shows received-to-accepted spans ranging from roughly 8.5 months to around 20 months, with many examples around 10–18 months. This is only anecdotal public metadata, not an official service-time guarantee. PTRF is therefore a reasonable *quality/speed compromise* at this level, but not a fast journal in an absolute sense.

## Reach option: Annals of Probability (AOP)

Use AOP first only if the final paper achieves a broader theorem than the present application-specific framing—e.g. a reusable reflection-factor stability principle—and if the sharpness theorem is fully self-contained. It is a higher-risk route for both selectivity and elapsed time. Do not delay the paper solely to force an AOP framing unless a genuinely more general theorem emerges.

## Strong second target: Bernoulli

Excellent topical fit if the sample-variance/statistical characterization motivation is emphasized. The current author information says papers are generally limited to about 25 pages in the Bernoulli template, including references, with supplementary material available for excess technical detail. A PTRF-style 30–40 page proof should therefore be compressed before transfer.

## Other strong alternatives

- Annales de l'Institut Henri Poincaré, Probabilités et Statistiques (AIHP): strong probability audience; natural fallback if the paper remains theorem-heavy.
- Electronic Journal of Probability (EJP): strong probability venue and good fit for a clean technical theorem; consider if speed becomes more important than maximizing journal tier.
- Transactions of the AMS: attractive if the final presentation becomes more complex-analytic/rigidity-driven than probabilistic.

## Recommended submission sequence

1. **PTRF** — default.
2. **AOP instead of PTRF only if** the theorem is generalized materially before submission; otherwise do not spend months optimizing for a more speculative fit.
3. If PTRF rejects, choose **Bernoulli** or **AIHP** depending on whether the paper reads more statistical-characterization or pure-probability.
4. **EJP** if turnaround becomes the overriding priority after a first-round attempt.

## Manuscript engineering for a fast editorial read

- Put the sharp stability theorem and matching lower order on page 2.
- State explicitly that the unrestricted fixed-n sample-variance converse remains open and is **not** claimed.
- In the Introduction, contrast the reflected convolution `F*\tilde F` with equal-factor `F*F` in one short paragraph.
- Keep the upper-bound proof architecture to five named lemmas.
- Move high-frequency power-rate obstruction and lengthy Laguerre algebra to an appendix or supplement if they interrupt the main narrative.
- Include a one-page “parameter selection” appendix to make the complex-propagation proof referee-friendly.

## Template

Springer Nature officially recommends its journal-article LaTeX template for Springer Nature journals, including Springer titles such as PTRF. Use `main_ptrf.tex` with the official `sn-jnl.cls` package. `main_portable.tex` is included solely so the draft can compile without the proprietary/current template files in the local environment.
