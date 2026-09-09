# R194 — confluent-Bochner derivative-order escape

日期：2026-09-09

## 结论

R193 的点碰撞通道不能在固定导数阶上提供统一 PSD 反证。将互相趋近的
Bochner Gram 点集用归一化有限差分展开后，极限测试是特征函数的导数核，
也就是 moment Hankel 矩阵。Gaussian 基点的每个有限 Hankel 主块严格正定，
所以 R192 的小 formal perturbation 在任何固定导数阶上仍被有限谱隙吸收。

因此若有限截断的非特征性由点碰撞见证，碰撞归一化后的导数阶必须趋于无穷，
或负裕量趋于零。R194 不证明 R192 的 formal series 收敛，也不是 genuine
counterexample；它是 R193 的 confluent refinement。

## 1. 导数核与 Hankel 矩阵

设 `Phi` 是特征函数，`K(x,y)=Phi(x-y)`。在同一点 `t` 的导数核为

`H_ab(t)=partial_x^a partial_y^b K(x,y)|_(x=y=t)
        = i^a(-i)^b integral xi^(a+b) dmu(xi)`.

对任意有限复向量 `c=(c_0,...,c_n)`，

`sum_(a,b<=n) conjugate(c_a)c_b H_ab(t)
 = integral |sum_a c_a i^a xi^a|^2 dmu(xi) >= 0.`

这正是把点集作归一化有限差分后得到的 confluent Gram PSD 条件。对 Gaussian
`mu_0=N(0,1)`，去掉无关的相位后，

`H_n(0)=(E[X^(a+b)])_(0<=a,b<=n)`

满足

`c^*H_n(0)c=E|sum_a c_a X^a|^2>0`

对任意非零多项式，因此 `lambda_min(H_n(0))>0`。

## 2. 固定导数阶的稳定性

令 `Phi_epsilon` 是 R192 的任一有限 truncation，或任何在 `u=0` 附近的
导数到阶 `2n` 连续趋于 `Phi_0` 的 genuine 候选。则

`H_n(epsilon)=H_n(0)+o(1)`

逐项成立。有限维 Weyl 扰动给出：对每个固定 `n`，存在 `epsilon_n>0`，使

`|epsilon|<epsilon_n => H_n(epsilon) >= (lambda_min(H_n(0))/2) I.`

若考虑有限个 `n<=n_0`，取最小的 `epsilon_n` 即得统一结论。因此，任何固定
导数阶的 confluent principal minor 都不能以统一负裕量击破 R192 的小参数支。

## 3. 与有限截断非特征性的关系

R193 中有限阶指数截断若含次数大于二的对数多项式，则由经典 Marcinkiewicz
定理不是特征函数，故某个 finite Gram 必然非 PSD。若其 witness 的频率点
发生碰撞，将其向量系数改写为有限差分基并取归一化极限，得到某个有限导数
阶的非 PSD 导数核；但第 2 节说明，在 `epsilon->0` 时固定阶不可能统一负。

所以任何这样的 confluent witness 都必须满足至少一项：

* 导数阶 `n->infinity`；
* 归一化过程退化且不能落入固定导数核；
* 负特征值裕量趋于零；
* 频率中心本身向无穷逃逸。

这排除了“只因点碰撞就获得固定低阶正性矛盾”的捷径。

## 4. 与全局路线

R193 的 Bochner witness escape 现在可分解为频率尺度、非碰撞 Gram 阶、
confluent 导数阶和负裕量四个可检验参数。R194 的导数阶与 R186 的
inverse-Hankel failure order 在结构上相似，但 R194 来自 characteristic
kernel 的局部导数，R186 来自 primitive backward moment 链；二者仍不循环。

R188 `(MT_r)` 控制的是 mixed Laguerre coefficient 的加权总尾，不直接给出
上述导数核谱隙。要闭合原始问题，仍需 genuine exact/product identity 提供
uniform Bochner 或 inverse-Hankel rank closure，并先补上 bare `RK=1` 与原始
`P_3K` 的对象桥。

证据等级：`PROVED`（导数核 PSD、Gaussian finite Hankel strict positivity、
固定阶稳定性）；`CONDITIONAL/CLASSICAL INPUT`（有限截断的 Marcinkiewicz-
Bochner 负性见证）；`OPEN`（uniform derivative-order closure、formal-to-genuine、
原始 tower rigidity）。截至 R194，整体独立发表性仍为“无”。

## 下一最小任务

只研究一个定量问题：能否从 R112 的 square-exponential envelope 给出固定
`r>1` 下 inverse-Hankel/derivative-kernel 的统一阶上界；若不能，给出一个满足
全部已知 envelope 的抽象 rank-escape 族，且明确它不是真正 product law。

