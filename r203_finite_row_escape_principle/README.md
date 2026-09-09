# R203 — finite-row escape principle and the first genuinely global missing lemma

日期：2026-09-09

## 结论

令

`Q=(2/3)(sum_i X_i^2-sum_(i<j)X_iX_j)`,
`F_s=E Q^s-2^s s!`,

其中 `X_1,X_2,X_3` iid、`E X=0`、`E X^2=1`。对每个 `s>=2`，`F_s` 对
最高偶 cumulant `kappa_(2s)` 的系数精确为

`partial F_s/partial kappa_(2s)=3(2/3)^s !=0`,

且 `F_s` 不依赖任何 `kappa_(2r)`（`r>s`）。因此对固定 `M`，矩阵

`D_(kappa_4,kappa_6,...,kappa_(2M))(F_2,...,F_M)`

是下三角矩阵，对角线为
`3(2/3)^2,...,3(2/3)^M`，从而可逆。

## 有限行递归命题

在 Gaussian 点附近，把奇 cumulants作为参数、把偶 cumulants作为未知量。隐函数
定理给出唯一局部 analytic compensation map

`(kappa_4,kappa_6,...,kappa_(2M))=E_M(kappa_3,kappa_5,...,kappa_(2M-1))`

使 `F_2=...=F_M=0`。R197 的 genuine realization 进一步说明：对每个固定
`M`，至少沿 `kappa_3=c` 的小非零方向，这个有限行补偿可以由 genuine positive
平滑 same-factor iid law 实现。R198–R202 则逐项核验了该递归的前六行，并显示
对应的有限 Hankel block 可以在小 `c` 区域保持正定。

这得到一个统一的 `FINITE-ROW ESCAPE PRINCIPLE`：

> 任意固定有限行数都不能单独推出 `kappa_3=0`；若 cubic rigidity 成立，
> 其证明必须是 `M->infinity` 的 uniform/coercive 结论。

这里的“不能单独推出”是量词结论，不是 all-row 反例：`M` 固定时存在补偿，
不表示同一个 law 对所有 `M` 同时满足 exact rows。

## 证明

在 `Q^s` 的 total degree 为 `2s` 的展开中，单变量 moment `m_(2s)` 只可能由
纯项 `(2X_j^2/3)^s` 产生；三份 iid 的贡献合计为 `3(2/3)^s m_(2s)`。
而

`m_(2s)=kappa_(2s)+P_s(kappa_3,...,kappa_(2s-1))`,

故得到精确对角系数及高偶 cumulant 的不依赖性。下三角 Jacobian 与隐函数
定理随后给出有限行补偿。R203 的审计对 `s=2,...,6` 逐项核对了系数
`4/3,8/9,16/27,32/81,64/243`。

## 它如何接回原始问题

在 R124/R125 的紧性、moment bootstrap 和 full-row 极限接口成立时，令
`Gamma_M` 为 genuine laws 满足 `F_1=...=F_M=0` 时的最大 `|kappa_3|`。
原始 full-exact 类不存在非零 cubic law，会被 `Gamma_M->0` 所推出；反向若有
一个 full-exact law `kappa_3!=0`，则所有 `Gamma_M` 都至少保持该非零下界。因而
真正的主战场不是再找固定 `M` 的 determinant，而是证明 `Gamma_M` 的 uniform
decay，或证明同等强度的 primitive compactness/coercivity。

同因子 characteristic identity

`<prod_j phi(a_j(theta)u)>_theta=exp(-u^2/2)`

正是可能提供该 uniform 信息的结构；R203 的 radial triangular argument 本身
完全没有使用 angular modes。因此 R186 的 inverse-Hankel rank closure、R188 的
mixed-sector `(MT_r)` 与最终 tower rigidity 仍是独立缺口，不能由 R203 偷换闭合。

## 证据等级与发表性

* `PROVED / ANALYTICALLY PROVED`：最高偶 cumulant 的精确系数、下三角结构及
  固定有限行的 IFT compensation；
* `Genuine finite-row`：依赖 R197 的局部 realization，可逐个固定 `M` 实现；
* `CONDITIONAL`：`Gamma_M->0` 与 full-exact cubic exclusion 的紧性拼接依赖
  R124/R125 所列假设；
* `OPEN`：uniform-in-`M` coercivity、angular tail control、primitive closure
  和原始 Positive Backward-Tower Exact Zero-Set Rigidity；
* `发表性判断`：R203 是把连续有限行逃逸压缩成统一命题的可陈述 lemma，但
  目前与 R197–R202 合并仍不足以构成完整独立论文结果，整体仍为“无”。

## 下一最小任务

不再继续逐行展开；只尝试从 exact same-factor angular identity 推出一个明确的
uniform odd-angular coercivity 命题，形式上足以强制 `Gamma_M->0`，并先检查它
是否真的超出 R203 的 radial IFT 信息。
