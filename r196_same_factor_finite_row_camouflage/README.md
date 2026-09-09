# R196 — same-factor product identity has no uniform finite-row detector

日期：2026-09-09

## 结论先行

R195 的 moment camouflage 可以直接放回 genuine three-iid product law。对任意
`N`，存在正的非 Gaussian 单变量密度 `p_N`，满足

`E X=0,  E X^2=1,  E exp(X^2/8)<2`,

并且与 Gaussian 匹配所有单变量矩直到 `2N` 阶。令 `X_1,X_2,X_3` iid `p_N`
且

`Q=sum_j (X_j-X_bar)^2`。

那么

`E_(p_N^3) Q^r=2^r r!`,  `1<=r<=N`,

即前 `N` 个 exact radial rows 全部与 Gaussian 相同。与此同时，三份 iid 的
same-factor angular characteristic identity 在原点的 Taylor jet 也至少到
`2N` 阶相同：

`<prod_j phi_(N)(a_j(theta)u)>_theta
 = exp(-u^2/2)+O(u^(2N+1)).`

因此 product identity 的确提供跨副本约束，但不存在与 `N` 无关的 finite-row
detector。若原始 rigidity 成立，矛盾必须来自 all-row limit/compactness 或
uniform asymptotic coercivity，而不能来自一个固定的 exact row。

该结果是 genuine positive finite-row family，但不是 genuine full-exact
counterexample：它只保证前 `N` 行，不保证所有行；因此它严格支持 R125 的
“有限层不能 annihilate cubic / 必须研究全阶极限”主线。

## 1. 单变量正密度的构造

沿用 R195。取 `2N+2` 个互不相交有限区间 `I_j`，矩阵

`A_(k,j)=integral_(I_j) x^k gamma(x) dx,
  0<=k<=2N`

有非零零空间向量 `c`。令 `h_N=sum_j c_j 1_(I_j)` 并缩放到
`||h_N||_infinity<=1/2`，定义 `p_N=gamma(1+h_N)`。则 `p_N` 为正概率密度，
保持质量、均值、方差及所有 `0<=k<=2N` 的 Gaussian moments，并满足

`E_(p_N)exp(X^2/8)<=sqrt(3)<2`。

这里 `p_N` 可以进一步用成对对称区间和对称系数选择为偶密度，但本轮结论
不需要额外对称性。

## 2. exact rows 的直接 product proof

`Q` 是 `x_1,x_2,x_3` 的二次齐次多项式，因此 `Q^r` 是总次数 `2r` 的多项式：

`Q^r=sum_(nu_1+nu_2+nu_3<=2r)
       d_(nu) x_1^(nu_1)x_2^(nu_2)x_3^(nu_3)`.

独立性给出

`E Q^r=sum_nu d_(nu) prod_j E X^(nu_j)`.

当 `r<=N` 时，所有 `nu_j<=2r<=2N`，所以每个单变量因子都与 Gaussian
相同。于是

`E_(p_N^3)Q^r=E_(gamma^3)Q^r=2^r r!`.

这一步没有使用 abstract copula，也没有把 radial marginal 当成 product law；
它直接使用了三份 iid same-factor factorization。

## 3. angular characteristic identity 的同阶版本

在 common/residual 坐标中，令

`a_j(theta)=sqrt(2/3) cos(theta+2*pi*j/3)`。

对 `phi_N` 的 characteristic function，有

`phi_N(u)=exp(-u^2/2)+O(u^(2N+1))`  在 `u->0`。

由于 `a_j(theta)` 在圆上有界，有限乘积的差仍为

`prod_j phi_N(a_j(theta)u)
 - prod_j exp(-(a_j(theta)u)^2/2)
 =O(u^(2N+1))`

且余项常数对 `theta` 一致。积分得到

`<prod_j phi_N(a_j(theta)u)>_theta
 =<exp(-u^2 sum_j a_j(theta)^2/2)>_theta+O(u^(2N+1))`

`=exp(-u^2/2)+O(u^(2N+1))`,

因为 `sum_j a_j(theta)^2=1`。所以 same-factor angular identity 的前 `2N`
个局部系数同样完全看不见该扰动。

## 4. 全局含义与证据等级

* `PROVED`：对每个 `N` 的 genuine positive same-factor finite-row camouflage；
  前 `N` 个 `E Q^r` exact rows；angular product identity 的 `2N` 阶 Taylor
  matching；统一 square-exponential envelope；
* `FINITE-ROW OBSTRUCTION`：same-factor product identity 不能给出固定阶、
  与 `N` 无关的 exact-row annihilation；
* `NOT A FULL-EXACT COUNTEREXAMPLE`：`p_N` 的高阶 rows 未被控制，不能声称
  `Q~chi^2_2`；也没有非零 cubic charge 的 all-row law；
* `OPEN`：全阶 exact rows 加 positivity 是否排除固定非零 cubic，亦即 R125
  的 `Gamma_M->0` / `GammaHat_M->0` 或等价的 genuine primitive closure；
* `发表性判断`：R196 是可独立引用的 finite-row no-uniform-detector lemma，
  但原始大命题仍未闭合，整体独立发表性仍为“无”。

## 下一最小任务

研究 `r=N+1` 的首个可能检测项：把 `E Q^(N+1)-2^(N+1)(N+1)!` 展开成
单变量矩差的线性/二次组合，判断能否选择 `h_N` 使其也消失，或证明 product
identity 至少在某个定量阶数必然检测 moment camouflage。若只能继续把首行
推高，则给出递归结论，并明确它仍不是真正 all-row law。

