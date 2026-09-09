# 数学定理证明：理论记录镜像

这是 `8.22统计` 理论研究工作区的 GitHub 镜像，供网页端研究会话读取和审阅。仓库保留完整的历史推导、审计脚本和工作日志；结论必须以文档中的证据等级为准，不能把 relaxed Hankel 截断结果直接当作 genuine probability law。

## 网页端首选读取顺序

1. `THEORY_ROUTE_FRAMEWORK.md`：整体路线、已关闭方向、当前 OPEN 命题和各轮结论。
2. `PROJECT_WORKLOG_APPEND.md`：按轮次记录研究进度、纠错和审计状态。
3. `truncated_hamburger_cubic_radius_r125/README.md`：R125 的有限行半径接口。
4. `singular_ghost_extremum_r126/README.md`：M=3 singular non-flat ghost。
5. `m4_cubic_radius_flat_extremum_r127/README.md`：M=4 flat extremizer。
6. `singular_extension_compatibility_r128/README.md`：纠正后的 M=5 singular ghost 延拓。
7. `r129_m6_exact_extension_audit/README.md`：M=6 exact row、H6 compatibility 和全局严格 relaxed bound。
8. `r130_m6_gap_audit/README.md`：M=6 的显式有理区间 gap 证书。
9. `r130_web_gap_audit/README.md`：网页端强 gap 的本机补证与常数审计。
10. `r131_normalized_defect_audit/README.md`：genuine (L^2) 归一化缺陷接口与 M=7 exact algebra。
11. `r132_exact_law_smoothing_audit/README.md`：all-row exact law 的统一 OU 平滑、log-density 弱桥接与障碍审计。
12. `r133_first_odd_jacobi_audit/README.md`：首个奇 Hermite/Jacobi 精确包、有限行盲区与 R134 全阶 cascade 任务。
13. `r166_varying_bottom_reduction/README.md`：在 log-MGF charge 协变假设下把 varying-bottom 塔化简为 single-law 问题。
14. `r168_spatial_ou_persistence_audit/README.md`：空间 `ell_3=<log g,psi_3>` 的小-t 非消失与固定-q 最终层 persistence。
15. `r158_global_publication_audit/README.md`：全局证据等级与诚实的发表性审计。
16. `r169_spatial_ou_zero_accumulation_audit/README.md`：空间 charge 沿 OU 轨道的解析非 flatness 与固定-q 零点归约。
17. `r170_spatial_odd_sector_nonflat_audit/README.md`：首个非零 odd sector 对空间 `ell_3` 非 flatness 的条件性定理。
18. `r171_tail_based_spatial_nonflat_audit/README.md`：用 exact-tail 与超收缩削弱空间 log 展开的解析性假设。

## 分支体系

- `main`：当前完整研究记录的稳定镜像；网页端默认读取此分支。
- `theory/r129-active`：当前理论推进工作分支，与 `main` 同步，后续 R129/R130 结果优先落在这里，再合并回 `main`。
- `archive/r125-baseline`：R125 截止点的可复核快照。
- `archive/r126-ghost`：R126 M=3 ghost 结果快照。
- `archive/r127-flat`：R127 M=4 flat extremizer 快照。
- `archive/r128-corrected`：R128 纠正归一化后的 M=5 延拓快照。

分支只用于区分稳定主线、当前推进和历史快照，不代表所有快照都含有后续结论。计算脚本和数值输出必须附带输入/输出契约及审计 marker，不能直接写入 `main`。

## 当前状态（2026-09-08）

- R126：`\widehat\Gamma_3=\Gamma_3=\sqrt 2`，但 relaxed maximizer 是 genuine class 外的 singular ghost，genuine supremum 不取得。
- R127：`\widehat\Gamma_4=\Gamma_4=c_4`，等号点为 flat genuine extremizer。
- R128：正确归一化下 `\widehat\Gamma_5=\widehat\Gamma_4=c_4` 的 relaxed singular non-flat ghost 已通过本机审计；`\Gamma_5` 是否等于该值仍为 OPEN。
- R129：R6 原始展开、R2–R5 消元及 H5→H6 kernel compatibility 已通过精确审计；R128 ghost 无 PSD H6 延拓。结合 R125 紧性与 R127 等号分类，已解析推出有限层严格界 `\widehat\Gamma_6<c_4`，并因此有 `\Gamma_6\le\widehat\Gamma_6<c_4`。
- R130：本机初证先给出 `\widehat\Gamma_6\le1.0535`；随后网页端给出更强的 endpoint-neighborhood 证书，经本机 `r130_web_gap_audit` 补齐常数后解析通过：`c_4-\widehat\Gamma_6>25/28196\approx8.8665\times10^{-4}`，故 `\widehat\Gamma_6<1.052702`。这仍是 relaxed finite-level 上界，不是 `\widehat\Gamma_6` 的精确值，也没有关闭 genuine 或正性/反向 OU 主线。
- R131：对 genuine `d\mu=g d\gamma`、`g\in L^2(\gamma)`，`\varepsilon=\|g-1\|_2` 时，次数 `m` 的 Hermite Gram 满足 `\|G_m-I\|_{op}\le\varepsilon3^m`（以 Gaussian hypercontractivity 为标准输入），从而得到 normalized Jacobi coercivity；M=7 的最高奇矩不可见和 flat kernel 的 odd-freedom 计数也已精确审计。其 fixed-shift 传播必须同时要求 `\varepsilon3^{m+j}<1`。
- R132：网页端证明：若 genuine centered/variance-one law 实际满足所有 exact rows `E Q^r=2^r r!`，则 Carleman 给出 `Q\sim\chi^2_2`，并有显式 `\|P_t h-1\|_2<8t^{3/2}`（`t\le1/2`）及相应 `L^p` 估计；进一步得到 `\|\log(P_t h)\|_2=O(t^{3/2})` 和 `P_3\log(P_t h)` 的 cubic 级弱桥接。普通 positivity/normalization/individual `L^2` 不足以给 uniform smoothing；只有 scalar `RK=1` 时仍不能自动套用 all-row 结论。
- R133：在 genuine analytic full same-factor identity 下，若首个非零奇阶为 `d=2s+1`，则强制低于 `2d` 的偶 cumulants 消失，并得到精确 Jacobi 缺陷 `1-\beta_{s+1}/(s+1)=\binom{2s+1}{s}a_d^2`。本机已补上首个奇阶推理所需的假设边界、组合恒等式和 finite-row blindness genuine obstruction；首个 packet 在 R131 subcritical window 内不能产生 fixed gap。
- 当前下一步：R134 **Critical-Layer Same-Factor Jacobi Cascade**，从 same-factor angular identity 推导全阶 cumulative normalized curvature 的 energy/telescoping 关系，或严格证明其 obstruction；不得把猜测的 `9^m` 放大当作结论。最终 separation 与 exact-zero rigidity 仍 OPEN。

## 证据等级

文档使用 `PROVED`、`ANALYTICALLY PROVED`、`CONDITIONAL`、`FORMAL`、`OBSTRUCTION`、`OPEN` 区分结论强度。`SDP`、数值扫描、optimizer、形式 jet 或 operator-only 样例不自动构成 genuine 概率律证明。

## 最新研究快照（2026-09-09）

R158-A 已把 R157 的正 majorant 写成条件性 formal-interface lemma；最新记录在
`r158_interface_closure_audit/README.md` 和
`r158_global_publication_audit/README.md`。R99–R102 的 genuine backward charge
cone 同时应作为原始主轴的重要已闭合必要条件：对 genuine full-exact `t`-preimage，
`sum t^(-m)|beta_(m,r)|^2<=1` 的全阶预算成立；它不能替代 `P_3K` 到 primitive
angular charge 的定量非退化桥。网页端 R161–R163 目前只有用户消息、没有 assistant
理论正文；R164 也未形成理论回执。R165 已成功进入同一历史对话并显示为最新用户
消息，但等待后网页端再次回到 systemError，仍未生成 assistant 理论正文。因此
R165 的全局审计尚未完成；不能把网页无回执或有限谱探针当成主命题结论。整体
发表性判断仍保持诚实的 `无`。

R166 在本机先完成了一个结构性化简：在 genuine full-exact 类的前向 OU 闭包、
`L^2` 收敛和 `P_3K` OU 协变成立时，原始 varying-bottom 非零 charge 塔与存在
一个 `P_3K` 非零 genuine exact 单律等价；因此未归一化 primitive charge 的统一
下界不是正确的独立目标。详见 `r166_varying_bottom_reduction/README.md`。

R168 进一步处理空间对象的最小局部情形：若明确采用
`P_3K_sp(g)=ell_3(g)=<log g,psi_3>`，并且 genuine all-row 底层 `h` 的三阶矩
`m_3(h)` 非零，则 R132 的
`ell_3(P_t h)=t^(3/2)m_3(h)/sqrt(6)+O(t^3)` 给出固定 `q` 网格上从某个深度起
所有底层 charge 都非零，同时 `||P_(q^N)h-1||_2<=8q^(3N/2)`。这只是
`PROVED UNDER STATED HYPOTHESES` 的局部 lemma；它不等同于 R102 log-MGF charge，
不处理 `m_3=0` 的高 odd sector，也不构造 genuine 非 Gaussian exact law。

当前应交给网页端的下一轮首要任务是：先完整重建全路线，逐项标出真正已闭合、
仅条件性、仅有限/形式、obstruction 和 OPEN 的内容，并在独立完整可审稿结果尚
不存在时明确回答“无”；随后再审查空间 `P_3K_sp` 的定义与 R168 这条局部 persistence
是否能在原始对象上合法使用。网页端开始工作前必须先读取
`THEORY_ROUTE_FRAMEWORK.md`、`PROJECT_WORKLOG_APPEND.md`、
`r158_global_publication_audit/README.md`、`r166_varying_bottom_reduction/README.md`
和 `r168_spatial_ou_persistence_audit/README.md`。

R169 又把空间线压缩了一步：若 `F_h(r)=ell_3^sp(P_(r^2)h)` 在 `r=0` 附近解析且
不恒等为零，则解析函数有限阶零点性质保证 `F_h(q^(N/2))!=0` 对所有充分大 `N`；
结合 R132 的 L2 平滑即可生成任意深塔。故固定-q 的离散零点不是主障碍，最小缺口
改为证明空间 charge 轨道 non-flat，或构造满足全部 genuine exact/positive 约束的
flat-orbit law。R169 仍是 `PROVED UNDER STATED ANALYTIC HYPOTHESES` 的 reduction
lemma，不构造 law，也不改变整体发表性结论“无”。网页端若恢复，应先阅读 R168、R169
并围绕这个 non-flatness 问题推进。

R170 的网页审查投递未落入历史；回读仍为 R169 且线程为 `systemError`，没有网页端
理论正文。R170 目前只是本机条件性 theorem，不能写成网页端已确认结果。

R171 又削弱了 R170 的前提：只需有限阶 log Taylor 渐近，不需完整 complex analyticity。
利用 R132 的 exact-tail/Mehler 下界、Mehler 的 L2 上界和 Gaussian hypercontractivity，
可控制三阶余项；在 full-SF 消去低阶 even modes 后，所有首个 odd sector 仍给出
空间 `ell_3` 的非零 leading term。该结果仍要求原始空间 charge convention 和
genuine full-SF/all-row，不能推出 bare `RK=1` 或最终 rigidity。

R171 的网页审查尚未进入历史；回读仍停留在 R170 且线程为 `systemError`，没有网页端
理论正文。本机 R171 已把 R170 的完整解析性要求削弱为 exact-tail 下的有限阶 log
渐近，但它仍是条件性结果，不能写成网页端已确认结论。

R172 新增 `r172_p3k_provenance_audit/`，专门审计原始 `P_3K` 的对象身份：历史记录
中 R102 已恢复出 analytic log-MGF 工作定义，但早期 R4 原文没有随仓库保存；空间
`ell_3^sp=<log g,psi_3>`、R102 的 `P_3K_MGF`、Bargmann `C_g=log B_g` 和
R101 的 angular `chi_1` 仍必须分开。故当前最准确的表述是“R102 工作定义已恢复，
原始来源的完全核验仍为 `OPEN/UNRESOLVED`”；R168–R171 只能作为空间对象上的
条件性结果，R102/R166 只能作为 log-MGF 版本的结果。R172 的整体发表性复核仍诚实
记为“无”，但保留这些模块作为潜在 lemma/conditional theorem。网页端下一轮必须
先读 R172 与全框架，给出全局证据分层和发表性判断，不得继续偷换 charge 对象。

R172 全局审计任务已进入网页历史，但该线程随后仍为 `systemError`，没有 assistant
理论正文。因此网页端尚未完成这次全局梳理；本机只记录“已投递、无理论回执”，不把
网页状态升级为数学结论。

R173 继续推进 R102 的原始-charge 工作分支：对首个非零 odd 阶 `d`，证明在
`d<=m<3d` 的窗口中 `beta_(m,1)=Lambda_m a_m`，从而任意正 `t`-preimage 满足
`sum Lambda_m^2 t^(-m)a_m(g)^2<=1`，并给出首个 R102 log-MGF 系数的显式 backward
wall（当前安全形式为非严格 `<=`）。该高阶 finite-window cone lemma 已通过本机精确 support audit，但仍不能
处理 `d_N` 逃逸或原始 rigidity。R173 任务投递后网页端仍未返回理论正文，回读停在
R172/systemError，故本机不把网页端审查写成已完成。

R174 将 R173 在首个 nonlinear threshold `2d` 处继续推进：`r=2` angular cone
首项精确为 `beta_(2d,2)=L_d a_(2d)+Q_d a_d^2`；full-SF 的 `z^(2d)` 系数又给出
`a_(2d)` 关于 `a_d^2` 的精确关系，从而得到 `|C_d|a_d^2<=t^d` 的 cross-harmonic
backward wall。`d=3,5,7` 的常数均为正且已核验；所有 `d` 的常数正性仍 OPEN。

R174 任务经后续回读已进入网页历史，但网页端仍未返回理论正文；本机不把消息进入
历史误当作数学审查完成。

R175 把 R174 的全阶系数正性进一步压缩成一个明确的模 3 二项式相关 gap：
`C_d>0` 等价于 `Delta_d>0`，其中 `Delta_d` 只含一个 residue-class 的
`binom(d,j)^2` 与 lag-3 乘积和。BigInt 审计已核验所有 odd `d<=501`，但这不是
全阶证明；下一步应证明或否证该组合 lemma。整体发表性判断仍为“无”。

R175 已进入网页历史但未得到理论正文，网页线程再次返回 `systemError`；因此仅
记录为已投递、未审查，不改变本机证据等级或整体“无”的发表性判断。

R176 已解决 R174 的全阶系数正性：通过三次单位根滤波与
`Q(x)=(1+x)(1+omega x)` 的仿射中心展开，证明所有 odd `d>=3` 的 `C_d>0`。
这把 `d=3,5,7` 的有限证据升级为 genuine full-exact + full-SF 下的全阶
cross-harmonic wall；原始题设的完整 rigidity 和独立发表性判断仍为“无”。

R177 又从该证明保留一个正项，给出 `C_d` 的显式下界及
`C_(d_N)a_(d_N)(g_N^(0))^2<=q^(N*d_N)` 的定量形式；它强化了固定 odd sector，
但没有消灭 moving-degree escape。R176 网页端消息已入历史但未生成理论正文，故
本机证据等级与整体发表性结论不变。

R177 的网页短提示未形成新的理论回执，线程仍返回错误；后续网页恢复时先审查
R176/R177，再决定 bare `RK=1`、all-row 或原始 `P_3K` 接口的下一步。

R178 给出 R177 系数下界的 Stirling 尺度：
`C_d >= const·d^(-3/4)3^(-d/2)`（渐近意义），从而
`a_d(g)^2 <= O(d^(3/4)(sqrt(3)t)^d)`。这只量化 moving-degree escape，未将其
排除；整体发表性判断仍为“无”。

R178 网页短提示未形成理论回执，线程仍返回错误；本机不将该状态当作数学否定。

R179 网页发送调用再次未形成历史回执。本机新增 `r179_homogeneous_wall_scale_no_go`：
证明所有 OU 齐次 backward wall 在由单个 genuine exact law 生成的塔上都约化为
底层的 `N` 无关约束，因此不能单独排除 varying-degree/tower escape。下一主轴回到
single-law exclusion、formal-to-genuine、`RK=1=>all-row` 或原始 `P_3K` 溯源；整体
发表性判断仍为“无”。

R180 网页发送调用仍未形成理论正文。本机合并 R137/R138/R150，证明任何假想
asymmetric genuine exact law 都必须具有无限 odd tail、有限半径非配对 MGF 零点和
高 odd replenishment；这把剩余 OPEN 压缩为一个明确的无限尾 escape 与正性/全阶
Hankel 相容性问题。新增 `r180_infinite_odd_tail_escape_dichotomy`，整体发表性
判断仍为“无”。

R181 网页发送调用未形成理论正文。本机新增 `r181_cauchy_replenishment_bridge`，
以 Cauchy 估计把非配对零点半径与 R150 的高 odd replenishment 阈值接成精确不等式；
剩余缺口是联合 uniform 控制，不是更多低阶展开。整体发表性判断仍为“无”。

R182 网页发送调用未形成理论正文。本机新增
`r182_positive_density_zero_shell_tail`，将第一非配对零点壳的 odd-cumulant
下界加强为正下密度子序列结果；它排除了极稀疏尾部逃逸，但仍未形成 uniform
正性矛盾，整体发表性判断仍为“无”。

R183 网页端发送后仍未形成理论正文。本机新增
`r183_scale_free_shell_cone_obstruction`：用精确单位根指数和证明零点壳平均
能量可以保持而 odd 系数只在 `1/J` 密度阶次出现，故现有 shell energy、Cauchy
和 OU 缩放不能单独提供 uniform cone coercivity。该 obstruction 不是 genuine
MGF 反例，整体发表性判断仍为“无”。

R184 网页端发送后暂未形成理论正文。本机新增
`r184_jensen_zero_count_small_shell`：由 R112 的统一 square-exponential 包络
和 Jensen 计数，在首壳半径 `R_Delta<=1` 时得到 `J<=9`、`p_0>=1/17`；
这缩小了小壳区间的模态退化，但仍未对齐 R150 的 `eta_d(a)`，整体发表性判断
仍为“无”。

R185 网页端发送后暂未形成理论正文。本机新增
`r185_phase_collision_onset_obstruction`：固定四个共轭单位根模态和整数重数差，
通过相位近碰撞把任意有限 odd window 的壳信号压到任意小，说明 R184 的正密度
不能替代 degree alignment。该模型不是 genuine MGF 反例，整体发表性判断仍为“无”。

R186 网页端重发未进入历史，本机新增
`r186_primitive_rank_escape_dichotomy`，将 primitive inverse-OU 的有限失败阶
与 Gaussian 极限下的 rank escape 量词明确化；这把主问题重新拉回全局
`uniform inverse-Hankel rank closure`，整体发表性判断仍为“无”。

R187 已把该全局瓶颈进一步具体化：sector-wise Parseval 允许 weighted mass
沿 `n=N` 迁移，不能单独推出 total-degree inverse-tail tightness。新增
`r187_spectral_tail_migration_obstruction`，整体发表性判断仍为“无”。

R188 新增 `r188_mixed_sector_projection`：把缺口写成
`m_ell(t)=E[psi_ell(U)|T=t]` 的 total-degree inverse tail 条件，并严格证明该
条件加固定坐标收敛足以得到 weighted mixed-coefficient 收敛。另用正联合密度
保持 `U`、`T` 两个边缘不变而把首个 mixed Laguerre 信号推到任意高阶，说明
`T~Exp(1)` 本身不是 `U|T` 控制；该构造不满足 three-iid same-factor，因此不是
原始问题反例。网页端本轮仍未产生理论正文，整体发表性判断仍为“无”，审计已通过。

R190 新增 `r190_linearized_radial_blind_ladder`：在 Gaussian 点上，所有 odd
Hermite tangent 对任意径向 `F(Q)` 的一阶变化为零，但对每个 `n>=1`，
`D C_(1,n)=sqrt(3)(2n+1)!(-1)^n/(3^n n!)!=0`。这说明径向 exactness 的
一阶信息对整个 common/residual mixed ladder 都盲；它是形式线性化 obstruction，
不是 genuine counterexample。审计已通过，原始问题整体发表性仍为“无”。
