# R213：正性与有限 OU backward divisibility 不推出对称或 mixed zero

日期：2026-09-09  
基线：R212，提交 `9cef661`

## 0. 结论先行

本轮给出一个严格的有限深度 separation result。固定 `q in (0,1)` 和任意
有限深度 `N`，存在一条

`g^(j)=P_q g^(j+1)`, `j=0,...,N-1`,

其中每一层相对于标准 Gaussian `gamma` 的密度都严格为正、质量一、均值零、
方差一，但每一层都可以非对称且有非零三阶累积量。因此“positivity + finite
OU backward divisibility + standardization”本身不能推出 law symmetry，也不能
推出 R210 所需的 `Cov(Q,exp(isC))=0`。

这不是原始问题的反例：构造没有强加 `RK=1/full-SF`。它的价值是排除一条
过弱的证明捷径，并说明 exact radial/same-factor information 必须真正进入
最终 rigidity。

## 1. 显式 bounded odd perturbation

令 `gamma` 为 `N(0,1)`，取

`c=(5/3)^(3/2)`,

`u(x)=x exp(-x^2)-c x exp(-2x^2)`。

`u` 有界且为奇函数。Gaussian 积分给出

`E_gamma[u(X)]=0`,

`E_gamma[X u(X)]=3^(-3/2)-c 5^(-3/2)=0`,

`E_gamma[X^2 u(X)]=0`,

`E_gamma[X^3 u(X)]`
` =3·3^(-5/2)-c·3·5^(-5/2)=2/(15 sqrt(3)) != 0`.

取 `0<|epsilon|<1/||u||_infinity`，定义相对于 `gamma` 的密度

`f_epsilon(x)=1+epsilon u(x)`。

于是 `f_epsilon>0`，且其对应标量 law 满足

`E X=0`, `E X^2=1`,

`kappa_3=epsilon·2/(15 sqrt(3)) != 0`。

它不是对称 law；所有结论都是直接 Gaussian 积分，不依赖数值拟合。

## 2. 任意有限 OU backward chain

用 `P_r` 表示参数为 `r` 的 OU 密度算子，满足 `P_r P_s=P_(rs)`，且
`P_r` 保持正性与 `gamma` 积分。令

`g^(j)=P_(q^(N-j)) f_epsilon`, `j=0,...,N`。

则 `g^(N)=f_epsilon` 且

`P_q g^(j+1)=g^(j)`。

由于 OU 自伴性以及

`P_r x=r x`,
`P_r x^2=r^2 x^2+(1-r^2)`,

每一层都仍然质量一、均值零、方差一；正性由 Markov 性保持。奇部分不会被
抹掉，因为 OU 在 Hermite 展开上对每个阶只乘正数。更具体地，

`kappa_3(g^(j))=q^(3(N-j)) kappa_3(f_epsilon) != 0`.

因此这是一条对任意有限 `N` 成立的 genuine positive same-reference-measure
OU chain，而非 formal coefficient vector。

## 3. 对 R210 mixed interface 的直接检验

令 `C=(X_1+X_2+X_3)/sqrt(3)`、`Q=sum_i(X_i-Xbar)^2`。R210 的精确接口为

`E[(Q-2)exp(isC)]`
` =-2 phi(s/sqrt(3))^3(1+k''(s/sqrt(3)))`.

由于 `k''(0)=-1` 且 `k'''(0)=-i kappa_3`，在 `s=0` 附近

`Cov(Q,exp(isC))`
` =(2 i/sqrt(3)) kappa_3 s+O(s^2)`.

上面的每一层 `kappa_3 !=0`，故其 mixed covariance 不恒为零。这说明有限
backward divisibility 不能替代 R210 所需的 joint/mixed information。

## 4. 固定 tangent 的深度逃逸边界

若坚持使用这一个固定 bounded tangent `u`，底层三阶量为

`kappa_3(g^(0))=q^(3N) epsilon·2/(15 sqrt(3))`。

要让底层 cubic 保持一个固定非零值，必须令 `epsilon` 按 `q^(-3N)` 增长；但
正性要求 `|epsilon|<1/||u||_infinity`。所以该固定 tangent 无法产生“深度
趋于无穷而底层 cubic 保持”的 positive family。这只是一个有限阶/固定方向
的 escape obstruction，不是对所有 moving-degree directions 的统一证明。

## 5. 证据分级与原始问题边界

### `PROVED / LOCAL-AUDITED`

显式 `u` 的 Gaussian 矩、任意有限 `N` 的正 OU chain、标准化保持，以及非零
三阶量的精确衰减。

### `FINITE-ONLY / OBSTRUCTION`

固定 bounded tangent 下，底层非零 cubic 的深度保持需要违反正性幅度界。

### `OPEN`

moving-degree positive preimages 是否可以绕过上述固定方向衰减；加上
`RK=1/full-SF` 后是否能排除所有这类序列；以及由 backward tower 推出对称性、
标量 infinite divisibility、第二样本量 identity 或 mixed zero。R213 不关闭
这些问题，也不构成 genuine full-SF counterexample。

## 6. 唯一下一步

把 R213 的固定方向衰减与 genuine full-SF 的 exact radial constraints 联立，
只检查是否能得到一个“非零 cubic 必须 moving-degree 逃逸”的严格命题；若能，
再与 R186 的 primitive rank closure 或 R188 的 `(MT_r)` 对接。不要把本构造的
有限深度结论升级为 infinite backward-tower rigidity。
