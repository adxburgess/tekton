# GOAL (v1.5) — Notre-Dame Spire · Materials & Texture Fidelity

> The phase **after** the spire v1 ships. Same thesis, extended to surfaces: **every texture/material proves where it came from.** Texture without provenance is decoration — and decoration is the "looks old" scenography this project exists to beat. So the material layer is **gated exactly like the geometry**.

## 0. One-line goal
Give the spire **real, sourced material fidelity** — lead cladding, copper verdigris, gilt, limestone, exposed oak — where **every material cites its source**, a **material + detail vision verifier** grades it against reference imagery, and an **"1859 as-built vs present-day weathered" hypothesis toggle** presents the speculative state as *cited conjecture*.

## 1. Why it's a gated STEP (how we "convince" the agent)
You don't *ask* an autonomous agent to add texture — you make it a **required, gated phase it cannot skip**:
1. A **MATERIAL phase** in the pipeline (after BUILD, folded into VERIFY) — no SHIP without it.
2. **Rubric criteria** in `done.rubric.json` — every component's material sourced; the material verifier passes.
3. The verifier **refuses to pass** on unsourced or invented materials — the same G09 / no-invention discipline, now applied to materials.

The agent follows **gates and the rubric**, not suggestions. That's the mechanism.

## 2. Scope
Materials / texture + higher-detail visual verification for the **spire** (post-v1). **Not** new geometry. Nanchan stays the regression anchor; don't regress it.

## 3. Hard rules (extend the existing discipline to surfaces)
1. **Material provenance** — every material/texture carries `{provenance, source}` (`measured` / `reconstructed_design` / `rule_derived` / `conjecture`), sourced exactly like geometry.
2. **Cite-or-gap for finishes** — a colour/finish with no resolvable source is a GAP or `conjecture`, **never invented**.
3. **Rights / DQ** — textures are **procedural** or rights-cleared; reference photos are **cite-only**, never imported as an asset.
4. **Material hypothesis = cited conjecture** — the "as-built vs today" appearance is a *labelled, sourced guess*, never a silent default (the PRD color-hypothesis discipline; cf. Nanchan's 今貌/唐色 toggle).
5. **Uncertainty propagates** — a conjectural material flags its component's appearance as conjecture.

## 4. The material phase (gated)
`research-materials → assign-materials (derive) → procedural texture library → render → material + detail vision verify → gate`. Add **close-up canonical views** so fine detail is graded, not just the silhouette.

## 5. Tickets (v1.5 Materials & Texture)
| Ticket | Layer | Owner | Acceptance |
|---|---|---|---|
| Material corpus — research real finishes (cite-or-gap) | Data/Research | Austin/Claude | Lead, copper-verdigris, gilt rooster/cross, exposed oak, limestone crossing each get `{provenance, source, url, rights}`; as-built vs weathered noted; undocumented finish = GAP/conjecture, never invented |
| Material provenance in the spec | Rules | Claude | Canonical + derive give every component a `material` with its own `{provenance, source}`; uncertainty propagates |
| Procedural material/texture library | Build | Claude | Procedural lead / copper-verdigris / gilt / limestone / oak textures (no imported assets; ref photos cite-only), keyed by material + provenance; extends Viewer's existing procedural-texture system |
| Material hypothesis toggle (as-built vs today) | UI/Demo | Claude | Toggle between 1859 as-built (bright lead, un-patinated copper) and present-day weathered; both cited; speculative state classed as cited conjecture |
| **Material + detail vision verifier** | Verify | **Austin** | Vision sub-agent (fresh context) grades material fidelity vs reference imagery (lead reads as lead, copper as verdigris, gilt, limestone) + a material-provenance audit (0 unsourced materials) + a no-invention guard; merged into verifier-report |
| High-detail close-up render views | Verify | Austin/Claude | New close-up canonical views (statue group, lead seams, rooster/finial, ornament) + detail-level P-checks so fine fidelity is graded, not just silhouette |

## 6. Definition of Done
- Every component carries a **sourced material**; material-provenance audit = **0 unsourced**.
- **Procedural material library** (lead/copper/gilt/limestone/oak); **no imported texture assets**.
- **Material hypothesis toggle** (as-built vs today), both cited; conjecture labelled.
- The **material + detail vision verifier passes** (materials read true vs reference; close-up detail graded); the no-invention material guard holds.
- New criteria added to `done.rubric.json`; `npm run goal` still green; **Nanchan unaffected**.

## 7. The `/goal` command (≤ 4000 chars)

```
/goal Add provenance-gated material & texture fidelity to the Notre-Dame spire (v1.5) per docs/GOAL_NOTRE_DAME_MATERIALS.md. Prereq: the spire v1 build is green. Read docs/GOAL_NOTRE_DAME_MATERIALS.md + docs/NOTRE_DAME_VERIFIED_CORPUS.md; reuse Nanchan's procedural-texture system in components/Viewer.tsx as the template. Make MATERIAL a gated phase, not an afterthought: (1) research the real finishes (lead cladding, copper verdigris statuary, gilt rooster/cross, exposed oak, limestone crossing) with citations - every material gets {provenance, source, url, rights}; an undocumented finish is a GAP or conjecture, NEVER invented; (2) extend the canonical + derive so every component carries a sourced material; (3) build a PROCEDURAL texture library (no imported assets; reference photos cite-only) keyed by material + provenance, extending the existing procedural textures in Viewer.tsx; (4) add a material-hypothesis toggle (1859 as-built vs present-day weathered), both cited, the speculative state classed as cited conjecture; (5) extend the vision-verifier in a fresh context to grade MATERIAL fidelity vs reference imagery (lead reads as lead, copper as verdigris, gilt, limestone) PLUS a material-provenance audit (0 unsourced materials) and a no-invention guard; (6) add close-up canonical views (statue group, lead seams, rooster/finial) so fine detail is graded, not just silhouette. Add these as done.rubric.json criteria so the build cannot ship without them. DONE: every component's material is sourced (0 unsourced), the procedural texture library renders, the as-built/today toggle works as cited conjecture, the material+detail vision verifier passes, npm run goal still green, Nanchan unaffected. Never invent a colour/finish; never use a non-rights-cleared texture; never present a hypothesis as measured.
```
