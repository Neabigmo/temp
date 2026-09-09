# R195 — square-exponential envelope does not bound inverse-Hankel detection order

日期：2026-09-09

## 结论先行

固定任意 `N`，存在一个 genuine positive density `p_N`，满足

`E X=0,  E X^2=1,  E exp(X^2/8)<2`,

且

`E_(p_N) X^k = E_gamma X^k`  对所有 `0<=k<=2N`，

但 `p_N != gamma`。因此对任意固定 `r>1`，其 formal inverse-OU candidate

`K_(N,r)(u)=exp((r^2-1)u^2/2) phi_(N)(r u)`

在零点到 `2N` 阶的 Taylor jet 与 `exp(-u^2/2)` 完全相同；对应的每个固定
inverse-Hankel block `H_m^(r)`（`m<=N`）恰好等于 Gaussian block，严格正定。

这证明：R112 的 square-exponential envelope、正性、中心化和方差归一化本身，
不能给 R186 所需的 uniform inverse-Hankel/derivative-kernel failure-order
上界。必须额外使用 genuine full-exact same-factor/product identity、primitive
假设，或其它跨阶结构。该构造不是原始问题的 counterexample，因为没有满足
`Q~chi^2_2` 或 three-iid same-factor exactness。

## 1. 构造任意阶 moment camouflage

取 `2N+2` 个互不相交的有限区间 `I_0,...,I_(2N+1)`，定义

`A_(k,j)=integral_(I_j) x^k gamma(x) dx,
  0<=k<=2N.`

这是一个 `(2N+1) x (2N+2)` 的实矩阵，故存在非零向量
`c=(c_j)` 满足 `A c=0`。令

`h_N(x)=sum_j c_j 1_(I_j)(x)`

并按比例缩放使 `||h_N||_infinity<=1/2`。再令

`p_N(x)=gamma(x)(1+h_N(x)).`

因为 `h_N` 非零且 `-1/2<=h_N<=1/2`，所以 `p_N` 是真正的正概率密度且
不等于 Gaussian。矩条件 `A c=0` 给出

`integral x^k p_N(x) dx
 = integral x^k gamma(x) dx + sum_j c_j integral_(I_j)x^k gamma(x)dx
 = integral x^k gamma(x)dx`

对 `0<=k<=2N` 成立。特别地，`k=0,1,2` 给出质量一、均值零和方差一。

此外

`p_N(x)<=3/2 gamma(x)`,

故

`E_(p_N) exp(X^2/8)
 <= (3/2) E_gamma exp(X^2/8)
 = (3/2) * 2/sqrt(3)
 = sqrt(3)<2.`

该包络常数与 `N` 无关。

## 2. inverse-OU finite block 完全看不见该扰动

记 `phi_N` 为 `p_N` 的 characteristic function。由于 `p_N` 与 Gaussian
匹配到 `2N` 阶，

`phi_N(u)-exp(-u^2/2)=O(u^(2N+1))`  在 `u->0`。

乘上解析因子并作尺度替换，得到

`K_(N,r)(u)
 = exp((r^2-1)u^2/2) phi_N(r u)
 = exp(-u^2/2)+O(u^(2N+1)).`

因此 formal inverse moments
`m_k^(N,r)=i^(-k) K_(N,r)^(k)(0)` 满足

`m_k^(N,r)=E_gamma G^k`，`0<=k<=2N`，

且

`H_m^(r)(p_N)=[m_(a+b)^(N,r)]_(0<=a,b<=m)
              =H_m^(Gaussian)>0`

对每一个 `m<=N`。这里 Gaussian 严格正定来自

`v^*H_m^(Gaussian)v=E|sum_(a=0)^m v_a G^a|^2>0.`

所以任何固定 inverse-Hankel 阶 `m` 都可以被一个满足统一 envelope 的 genuine
positive non-Gaussian law 完全伪装；`m` 若要检测该族，必须随 `N` 增长，除非
加入未使用的 exact/product 结构。

## 3. 证据边界与全局拼接

* `PROVED`：任意阶正密度 moment camouflage；统一
  `E exp(X^2/8)<2`；固定 inverse-Hankel blocks 与 Gaussian 完全相同；
* `ENVELOPE-ONLY OBSTRUCTION`：square-exponential tail 不能单独推出 uniform
  failure order；
* `NOT GENUINE EXACT COUNTEREXAMPLE`：构造没有 `Q~chi^2_2`、same-factor
  product identity 或原始 exact rows；
* `OPEN`：在 genuine full-exact primitive 子类中，same-factor identity 是否
  足以阻止此类任意阶 camouflage，亦即是否能推出 R186 的 uniform rank closure。

R195 与 R186 不循环：R186 说明 primitive exact 序列若趋近 Gaussian，失败阶
必须逃逸；R195 说明 R112 envelope 本身无法阻止这种逃逸。R188 `(MT_r)` 若
成立，可以控制 mixed coefficient 的总谱尾，但尚不能直接禁止这里的有限矩
伪装；还需把 `(MT_r)` 与 primitive backward realization 连接起来。

## 下一最小任务

只研究 product identity 对上述 moment camouflage 的第一个不可伪装约束：在
固定 `N` 的 `p_N` 族上计算 `Q` 的第一个非 Gaussian radial moment，判断
`Q~chi^2_2` 的 exact row 是否必然在阶数 `O(N)` 前检测到扰动；若能得到定量
阶数关系，再与 R188 mixed-sector tail 和 R186 rank closure 拼接。

