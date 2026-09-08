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
