# Independent second-referee adversarial audit

This audit was performed against the revised source and proof chains, independently of the response letter. `PASS` means that the source contains the required hypothesis, calculation, or logical bridge. `CITATION-DEPENDENT` means that the step is standard but its external theorem is not reproved here. There is no core theorem item marked `OPEN`.

## Theorem 1.1 — exact PSD rigidity

| Attack | Status | Audit finding |
|---|---|---|
| Inactive-coordinate loophole | PASS | The conclusion is restricted to active coordinates with $A_{ii}=\|b_i\|^2>0$; inactive coordinates are not claimed to be Gaussian. |
| Zero-variance loophole | PASS | The proof separately handles $\sigma_i^2=0$ and concludes $X_i=0$ almost surely. |
| Rank-one loophole | PASS | The $r=1$ case is treated using $V\in\{-1,1\}$ and the evenness of the reflected defect. |
| MGF-domain loophole | PASS | Coordinate-wise neighborhoods are reduced to the common interval $|s|<\rho_*$. Compactness of the sphere then makes all displayed expectations legitimate. |
| Spherical normalization | PASS | $\E_V\langle b_i,V\rangle^2=\|b_i\|^2/r$ and $\E(X^{\mathsf T}AX)=r$ give the required quadratic cancellation. |
| Gaussian decomposition step | CITATION-DEPENDENT | The use of the classical Cramér decomposition theorem is explicitly cited to Cramér (1936). |

## Theorem 1.2 — sharp reflection stability

| Attack | Status | Audit finding |
|---|---|---|
| Fixed-disk analytic continuation | PASS | The reflected MGF is analytic on a fixed half-disk inside the exponential-moment strip; the formal two-constants lemma handles the propagation. |
| Factorial loss | PASS | The proof displays $\log(k!)\le k\log k\le2m\log(2m)$ and chooses $c_0$ through $(A+3)c_0<\omega_0$. |
| Median symmetrization | PASS | The median argument gives $\E|X-a|^{2m}\le2\E|X-X'|^{2m}$, followed by the $L^{2m}$ triangle inequality. |
| Truncation | PASS | Markov's inequality, conditional-law total variation, and the exponential-envelope tail moments are all shown. |
| Real product approximation | PASS | The $2m-1$ Taylor remainder, reflected-moment mismatch, and truncation error are separated on $|t|\le2R$. |
| Complex growth | PASS | Bounded support gives $|\varphi_N(z)|\le e^{N|\operatorname{Im}z|}$ and the explicit bound $2e^{4NR+4R^2}$. |
| Harmonic measure | PASS | Scaling $z=Rw$ makes $\omega_0$ independent of $R$, $m$, and $\Delta$; zeros are handled by $\log(|F|+\delta)$. |
| Zero-free relative comparison | PASS | The source displays $|e^{-z^2}|\ge e^{-a_0^2m}$, the ratio estimate, and the eventual $1/2$ bound before concluding nonvanishing of both factors. |
| Analytic logarithm | PASS | The disk is identified as simply connected and the branch is normalized by $\psi_N(0)=0$. |
| Carathéodory normalization | PASS | $H=NR-\psi_N$ has nonnegative real part; scaling by $R$ gives $|a_k|\le2NR^{1-k}$. |
| Gaussian damping | PASS | $a_1=i\mu_N$, $a_2=-\sigma_N^2/2$, $\sigma_N^2\ge1/2$, and the fixed choice $C\theta\le1/8$ yield the displayed damping. |
| Esseen cutoff | CITATION-DEPENDENT | The Gaussian-target smoothing inequality is written with the target-density term and cited to Esseen (1945). |
| Gaussian recentering/rescaling | PASS | The tail lemma gives exponentially small mean and variance shifts, and bounded Gaussian density converts them to $o(R^{-1})$. |

## Theorem 1.3 — Laguerre lower bound

| Attack | Status | Audit finding |
|---|---|---|
| Density positivity | PASS | The uniform envelope defines $C_L$ and $|h_m|\le1$, so $f_m=\phi(1+\epsilon h_m)\ge0$. |
| Normalization | PASS | $h_m$ is odd, so its Gaussian integral is zero. |
| Mean and variance | PASS | Laguerre orthogonality annihilates the first required odd moment, and the variance perturbation is an odd integral. |
| Exact MGF | PASS | The generating-function calculation explicitly produces $3\sqrt3$, $e^{-s^2/3}$, $6^m$, and $(-1)^m$ in $u_m$. |
| Independence | PASS | $N_m^+$ and $N_m^-$ are stated independent of each other and independent of $U_m$; the MGF factorization is displayed. |
| Defect identity | PASS | The standardization $q=s/\sqrt{1+\lambda_m}$ and the Skellam MGF give the exact reflected-defect formula. |
| Dominance lower bound | PASS | The bounds on $-\log(1-u_m(q)^2)$ and the fourth-order hyperbolic remainder are combined with the chosen $\lambda_m$. |
| Defect scale | PASS | Two-sided bounds give $\Delta_m\asymp\lambda_m$ and Stirling gives $\log(1/\Delta_m)=2m\log m+O(m)$. Only $\Delta_m\to0$ is asserted. |
| Laguerre envelope | CITATION-DEPENDENT | Appendix B applies the four regions of Proposition 3.2 in Imekraz--Robert--Thomann (2016), with each power cancellation written out. |
| EI uniformity | PASS | The Gaussian domination of $U_m$, the Poisson/Skellam exponential bound, independence, and positive standardization give a fixed envelope. |
| CDF lower bound | PASS | The half-axis integral reduces to $(1/2)_m/m!\asymp m^{-1/2}$, while the Skellam perturbation changes the CDF by at most $\lambda_m=o(m^{-1/2})$. |
| Matching scale | PASS | The proof explicitly derives $\log\log(1/\Delta_m)$ and the equivalence of the ratio with $1/m$. |

## Sample variance

| Attack | Status | Audit finding |
|---|---|---|
| Matrix normalization | PASS | $P=I_n-n^{-1}\mathbf1\mathbf1^{\mathsf T}$ is represented by $B^{\mathsf T}B$, with $BB^{\mathsf T}=I_{n-1}$. |
| Sphere dimension | PASS | The exact identity uses $V\sim S^{n-2}$ and $r=n-1$ consistently. |
| Spherical density | PASS | The continuous density formula and its interior lower bound are used only for $n\ge3$. |
| $q$ scaling | PASS | Every column has norm $q=\sqrt{(n-1)/n}$, so the controlled interval is correctly restricted to $\rho'<\tau q$. |
| Factor of two | PASS | $D_X=R_X/2$ is defined and the final transfer writes $\Delta_{\rho'}\le C_1\sqrt\varepsilon$. |
| Tent overlap | PASS | Evenness, $D_X(0)=0$, the Lipschitz lower tent, and $|s_0|\ge M_*/L_h$ give disjoint tent interiors. |
| Endpoint restriction | PASS | The proof chooses $h<a-\rho'$ and explicitly notes why the strict interior condition matters when the spherical density vanishes at endpoints. |
| Logarithmic substitution | PASS | The relations for $\log(1/\Delta)$ and $\log\log(1/\Delta)$ are displayed before Theorem 1.2 is invoked. |
| Exact $n=2$ branch | PASS | The exact corollary now allows $n\ge2$ and identifies its rank-one projection; the quantitative density argument remains $n\ge3$. |

## Bibliography and front matter

The cited external tools have entries in both `references.bib` and `references_manual.tex`: Cramér (decomposition), Sato (Lévy--Khintchine), Duren (positive-real-part coefficients), Esseen (smoothing), and Imekraz--Robert--Thomann (Laguerre bounds). The Springer entry point calls `\maketitle` after all front-matter declarations, so the title, author block, abstract, keywords, and PACS metadata are rendered in the official PDF as well as in the portable PDF.

## Audit conclusion

All requested major comments are resolved at the source-verification level. No core theorem gap is `OPEN`. The resulting manuscript may carry the technical status `PTRF_REFEREE_R2_READY`, subject to the author-owned metadata, disclosure, title, and final independent human verification listed in the final report.
