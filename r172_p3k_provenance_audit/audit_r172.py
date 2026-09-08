from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(rel: str) -> str:
    return (ROOT / rel).read_text(encoding="utf-8")


framework = read("THEORY_ROUTE_FRAMEWORK.md")
r101 = read("angular_charge_cone_r101/README.md")
r133 = read("r133_first_odd_jacobi_audit/README.md")
r172 = read("r172_p3k_provenance_audit/README.md")

assert "P_3K_MGF" in framework
assert "K_sp=log g" in framework
assert "deliberately separate from `P_3 K`" in r101
assert "K_sp(x)=log g(x)" in r133
assert "C_g(z)=log B_g(z)" in r133
assert "OPEN/UNRESOLVED" in r172
assert "不能未经定义比较" in r172
assert "整体“是否已有独立、完整、可审稿的发表性结果”的回答仍是：" in r172

print("R172_SPATIAL_BARGMANN_LOG_MGF_SEPARATION_PASSED")
print("R172_ORIGINAL_P3K_PROVENANCE_UNRESOLVED_PASSED")
print("R172_SCOPE_EXPLICIT: documentation provenance only; no charge identification claimed")
