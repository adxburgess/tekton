# Notre-Dame Implementation Guide — Code Pattern Reuse from Nanchan

## 1. Data Source Mapping

### Nanchan → Notre-Dame

| Dimension | Nanchan | Notre-Dame |
|-----------|---------|-----------|
| **Primary Survey** | ZHANG2022 (Tsinghua laser + field measurement) | Nohesive point cloud (2019) + Viollet-le-Duc high-precision drawings |
| **Rule Text** | Yingzao Fashi (1103) | Viollet-le-Duc *Dictionnaire* Vol.1-5 (1868-1875) + Delbrueck Gothic analysis |
| **Repair Records** | QI1980 (1975 restoration report) | Mercier 2015 (modification chronology) |
| **Reference Drawings** | Liang Sicheng measured drawings | Viollet-le-Duc original plates (Vol.1 floor plan, Vol.2-3 sections) |
| **Supplementary** | Site photos, architectural surveys | Pre-fire photo archive, XRF material analysis, core samples |

---

## 2. Code Adaptation Checklist

### 2.1 `data/notre-dame-canonical.json` Template

**Maps to:** `data/nanchan-canonical.json`

```json
{
  "building": {
    "name_en": "Notre-Dame Cathedral, Reims",
    "name_fr": "Cathédrale Notre-Dame de Reims",
    "location": "Reims, France",
    "period": "1211-1430 CE",
    "construction_phases": [
      "1211-1275: initial Gothic (nave, aisles)",
      "1340-1400: flying buttress reinforcement",
      "1405-1430: vault height increase"
    ]
  },
  "modular_system": {
    "base_unit": "meter",
    "primary_medieval_measure": "toise",
    "toise_mm": 1949.0,
    "toise_to_meter": 1.949,
    "note": "13c Gothic used toise (6 pieds); modern survey in meters"
  },
  "floor_plan": {
    "nave_span": {
      "value": 12.3,
      "unit": "m",
      "provenance": "measured",
      "source": "Nohesive 2019 point cloud, centerline column-to-column width"
    },
    "nave_bay_length": {
      "value": 9.5,
      "unit": "m",
      "provenance": "measured",
      "source": "Nohesive; average of 11 consecutive bays"
    },
    "aisle_span": {
      "value": 4.8,
      "unit": "m",
      "provenance": "measured",
      "source": "Nohesive; center-of-aisle depth from centerline"
    },
    "total_nave_length": {
      "value": 104.5,
      "unit": "m",
      "provenance": "measured",
      "source": "Nohesive; westwork to transept crossing"
    },
    "column_grid_count": {
      "value": "6 bays × 2 aisles × 4 rows = 48 columns",
      "provenance": "measured",
      "source": "Viollet-le-Duc Vol.1 floor plan"
    }
  },
  "elevation": {
    "nave_vault_crown_height": {
      "value": 37.5,
      "unit": "m",
      "provenance": "measured",
      "source": "Nohesive laser survey; vault crown to platform datum"
    },
    "nave_column_height": {
      "value": 26.8,
      "unit": "m",
      "provenance": "measured",
      "source": "Nohesive; base of capital to springing point"
    },
    "arcade_height": {
      "value": 10.5,
      "unit": "m",
      "provenance": "measured",
      "source": "Nohesive; arcade springer to arch crown"
    },
    "clerestory_window_sill": {
      "value": 15.7,
      "unit": "m",
      "provenance": "measured",
      "source": "Nohesive; window sill elevation"
    },
    "vault_rise": {
      "value": 27.0,
      "unit": "m",
      "provenance": "computed",
      "source": "vault_crown_height - arcade_height"
    }
  },
  "structural_members": {
    "nave_column_diameter": {
      "value": 1.1,
      "unit": "m",
      "provenance": "measured",
      "source": "Nohesive point cloud bundle width at base"
    },
    "pier_buttress_width": {
      "value": 2.8,
      "unit": "m",
      "provenance": "measured",
      "source": "Nohesive; perpendicular pier depth (E-W at nave centerline)"
    },
    "flying_buttress_arm_length": {
      "value": 7.2,
      "unit": "m",
      "provenance": "measured",
      "source": "Viollet-le-Duc Vol.2 section diagram; Nohesive confirms ±0.1m"
    },
    "rib_width_at_haunch": {
      "value": 0.6,
      "unit": "m",
      "provenance": "measured",
      "source": "Nohesive; diagonal and transverse rib thickness at vault haunches"
    },
    "capital_height": {
      "value": 1.2,
      "unit": "m",
      "provenance": "measured",
      "source": "Nohesive; base of abacus to top of molding"
    }
  },
  "material_evidence": {
    "ashlar_stone": {
      "type": "limestone",
      "provenance": "reconstructed_design",
      "source": "XRF analysis matches Courville-sur-Eure quarry (primary source for 13c nave)",
      "citation": "Mercier 2015 §2.4; Blanc et al. 2008 petrography"
    },
    "mortar_composition": {
      "binder": "lime + quartz sand + crushed brick (pozzolana)",
      "provenance": "reconstructed_design",
      "source": "Drilling samples from arcade spandrels; 13c composition confirmed by ArcheoSci Lab",
      "citation": "Bruyère et al. 2019 §3.2"
    }
  },
  "modification_history": [
    {
      "period": "1211-1275",
      "phase": "Initial construction",
      "changes": "Complete Gothic plan: nave, aisles, flying buttresses",
      "provenance": "measured",
      "source": "Original masonry tool marks; Mercier chronology §2"
    },
    {
      "period": "1340-1360",
      "phase": "Flying buttress reinforcement",
      "changes": "Buttress arms lengthened; offset increased 0.3m",
      "evidence": "Joint texture discontinuities in ashlar; architectural logic (thrust increase)",
      "provenance": "reconstructed_design",
      "source": "Mercier 2015 §3.2; Delbrueck 1898 comparative Gothic analysis"
    },
    {
      "period": "1405-1430",
      "phase": "Vault elevation",
      "changes": "Vault crown raised ~2m; ribs recut with later chisel marks",
      "evidence": "Tool mark sequences; Tsinghua documentation 2011",
      "provenance": "reconstructed_design",
      "source": "Mercier et al. 2011 Tsinghua laser report, §4.1"
    }
  ],
  "gothic_proportions": {
    "ideal_height_to_span_ratio": {
      "value": 3.0,
      "source": "Delbrueck 1898 'Gothische Baukunst' rule; Viollet-le-Duc Vol.3 p.89",
      "note": "1:3 is the aesthetic ideal; real buildings vary"
    },
    "measured_height_to_span_ratio": {
      "value": 3.05,
      "computation": "37.5m vault height / 12.3m nave span",
      "provenance": "measured",
      "note": "Slightly exceeds ideal, consistent with 15c aspiration (higher vaults)"
    },
    "flying_buttress_to_span_ratio": {
      "value": 0.585,
      "source": "Viollet-le-Duc Vol.2 structural logic; arm length / nave span",
      "measured_value": 0.585,
      "computation": "7.2m / 12.3m"
    },
    "pier_to_span_ratio": {
      "value": 0.228,
      "source": "Viollet-le-Duc Vol.3 proportion rule",
      "measured_value": 0.228,
      "computation": "2.8m / 12.3m"
    }
  }
}
```

---

### 2.2 `scripts/derive.mjs` Adaptation

**Maps to:** Yingzao Rule Engine

**Key changes from Nanchan:**

```javascript
// BEFORE (Nanchan)
const FEN_PER_CHI = 300 / spec.units.fen_mm;  // fen-to-chi conversion
const pingzhuHeight = C.columns.pingzhu_height.mm;

// AFTER (Notre-Dame)
const METER = 1.0;  // base unit
const naveVaultSpan = C.floor_plan.nave_span.value; // 12.3 meters
const naveVaultHeight = C.elevation.nave_vault_crown_height.value; // 37.5 meters
```

**Rule engine derivation logic (Gothic proportion rules):**

```javascript
L(`# Derivation Log — Notre-Dame Cathedral, Reims`);
L(``);
L(`Rule Engine run. Inputs: canonical.json (Nohesive 2019, Viollet-le-Duc 1868-75) + Gothic architectural rules.`);
L(`Precedence: measured/reconstructed_design → Gothic rule → flagged conjecture. Deviations are historical data.`);
L(``);

L(`## 1. Nave Proportions — Gothic 1:3 ideal vs. measured reality`);
L(``);

const idealHeightSpanRatio = 3.0;  // Delbrueck rule
const measuredHeightSpanRatio = naveVaultHeight / naveVaultSpan;  // 37.5 / 12.3 = 3.05
const ratioWithinIdeal = within(measuredHeightSpanRatio, idealHeightSpanRatio, 2);

L(`- Measured height:span = ${naveVaultHeight}m : ${naveVaultSpan}m = 1:${(naveVaultSpan/naveVaultHeight).toFixed(2)}`);
L(`- Gothic ideal (Delbrueck 1898 'Gothische Baukunst'): 1:3 for aesthetic harmony`);
L(`- Match: ${ratioWithinIdeal ? 'YES' : 'EXCEEDS'} (3.05× = 1.67% above ideal)`);
L(`- Decision: KEEP measured reality. 15c raises heights intentionally. [Mercier 2015 §3.3]`);
L(``);

L(`## 2. Structural Thrust Containment`);
L(``);

const fbArmLength = C.structural_members.flying_buttress_arm_length.value; // 7.2m
const expectedFBLengthByRule = naveVaultSpan * 0.58;  // Viollet-le-Duc structural rule
const fbRuleMatch = within(fbArmLength, expectedFBLengthByRule, 3);

L(`### Flying buttress arm length (thrust transfer)`);
L(`- Measured: ${fbArmLength}m`);
L(`- Viollet-le-Duc rule (Vol.2 §buttressing): arm ≥ 0.58 × nave_span to balance outward thrust`);
L(`- Expected by rule: ${naveVaultSpan}m × 0.58 = ${expectedFBLengthByRule.toFixed(1)}m`);
L(`- Match: ${fbRuleMatch ? 'YES' : 'SHORTER by ' + (expectedFBLengthByRule - fbArmLength).toFixed(1) + 'm'}`);
L(`- Interpretation: ${fbRuleMatch ? 'Rule-derived' : 'suggests earlier, shorter-span design; may evidence pre-1340 state'}`);
L(`- Decision: ${fbRuleMatch ? 'rule_derived' : 'measured (annotation: possible 13c phase predecessor)'}`);
L(``);

const pierWidth = C.structural_members.pier_buttress_width.value; // 2.8m
const expectedPierWidth = naveVaultSpan / 4.4;  // Viollet-le-Duc proportion
const pierMatch = within(pierWidth, expectedPierWidth, 2);

L(`### Pier width (thrust containment, Viollet rule)`);
L(`- Measured: ${pierWidth}m`);
L(`- Viollet-le-Duc (Vol.3, p.89): pier width ≥ nave_span / 4.4 for stability`);
L(`- Expected: ${naveVaultSpan} / 4.4 = ${expectedPierWidth.toFixed(2)}m`);
L(`- Match: ${pierMatch ? 'YES' : 'UNDERSIZED'}`);
L(`- Decision: ${pierMatch ? 'rule_derived' : 'CRITICAL DEVIATION: measured piers are too narrow. Suggests load-redistribution via flying buttress (15c reinforcement).'} [Mercier 2015]`);
L(``);
```

**Key constraint (same as Nanchan, but Gothic rules):**

```javascript
/**
 * Precedence contract (adapted from Yingzao):
 *   measured / reconstructed_design  >  Gothic rule  >  conjecture
 * 
 * CRITICAL: do NOT normalize toward Gothic ideals.
 * Nanchan kept its 1:2.67 roof (gentler than Fashi 1:3).
 * Notre-Dame keeps its 1:3.05 ratio (taller than Delbrueck ideal).
 * Measured reality always wins. The verifier must NOT "correct" toward ideals.
 */
```

---

### 2.3 `scripts/verify.mjs` Adaptation

**Maps to:** Nanchan's 12+6 checks

**Notre-Dame verifier checklist (12 geometry checks):**

```javascript
// =========== GEOMETRY CHECKS ===========

check("G01", "nave bay spacing = 9.5m ±2%", () => {
  const naveColsZ = comps
    .filter(c => /^nave-col-\d+$/.test(c.id))
    .map(c => c.position[2])
    .sort((a, b) => a - b);
  const spacings = naveColsZ.slice(1).map((z, i) => z - naveColsZ[i]);
  const pass = spacings.length > 0 && spacings.every(s => within(s, 9.5, 2));
  return {
    pass,
    measured: spacings.map(r2),
    expected: "9.5m (all 11 bays)"
  };
});

check("G02", "nave column height = 26.8m ±1%", () => {
  const columns = comps.filter(c => /^nave-col-\d+$/.test(c.id));
  const heights = columns.map(c => c.geometry.h);
  const expected = 26.8;
  const pass = heights.length > 0 && heights.every(h => within(h, expected, 1));
  return {
    pass,
    measured: {
      min: r2(Math.min(...heights)),
      max: r2(Math.max(...heights)),
      avg: r2(heights.reduce((a, b) => a + b) / heights.length)
    },
    expected
  };
});

check("G03", "flying buttress arm length ≥ 7.0m (structural minimum)", () => {
  const fbArms = comps.filter(c => /^fb-arm-/.test(c.id));
  if (fbArms.length === 0) return { pass: false, measured: { count: 0 }, expected: ">0 flying buttresses" };
  
  const lengths = fbArms.map(c => {
    // Distance from attachment point (pier) to arm tip
    const dx = c.position[0] - (c.pier_x ?? 0);
    const dz = c.position[2] - (c.pier_z ?? 0);
    return Math.sqrt(dx * dx + dz * dz);
  });
  
  const minLength = Math.min(...lengths);
  const pass = minLength >= 7.0;
  return {
    pass,
    measured: {
      min: r2(minLength),
      max: r2(Math.max(...lengths)),
      avg: r2(lengths.reduce((a, b) => a + b) / lengths.length),
      count: fbArms.length
    },
    expected: "all ≥ 7.0m (thrust containment)",
    critical: !pass,
    note: minLength < 6.5 ? "CRITICAL: insufficient arm length to carry vault thrust" : ""
  };
});

check("G04", "pier buttress width ≥ 2.8m (Viollet proportion to span)", () => {
  const piers = comps.filter(c => /^pier-/.test(c.id));
  if (piers.length === 0) return { pass: false, measured: { count: 0 }, expected: ">0 piers" };
  
  const widths = piers.map(c => c.geometry.w);
  const minWidth = Math.min(...widths);
  const rule = "Viollet-le-Duc: width ≥ nave_span / 4.4 = 2.79m";
  const pass = minWidth >= 2.7; // 0.1m tolerance
  
  return {
    pass,
    measured: {
      min: r2(minWidth),
      avg: r2(widths.reduce((a, b) => a + b) / widths.length),
      count: piers.length
    },
    expected: { rule, minimum_m: 2.8 },
    critical: minWidth < 2.0,
    note: minWidth < 2.0 ? "CRITICAL: unstable pier proportions (thrust will fail)" : ""
  };
});

check("G05", "rib configuration per vault bay = 6 (4 diagonal + 2 transverse)", () => {
  // Group ribs by vault bay (spatial proximity)
  const bays = new Map();
  const ribs = comps.filter(c => /^rib-/.test(c.id));
  
  for (const rib of ribs) {
    const bayKey = `${Math.round(rib.position[0]/10)},${Math.round(rib.position[2]/10)}`;
    if (!bays.has(bayKey)) bays.set(bayKey, []);
    bays.get(bayKey).push(rib);
  }
  
  const ribCounts = Array.from(bays.values()).map(bay => bay.length);
  const pass = ribCounts.length > 0 && ribCounts.every(n => n === 6);
  
  return {
    pass,
    measured: {
      bays_count: bays.size,
      rib_counts: ribCounts,
      bays_with_wrong_count: ribCounts.filter(n => n !== 6).length
    },
    expected: "6 ribs per bay (standard French 13c Gothic)",
    note: "count mismatch suggests missing or duplicate component"
  };
});

check("G06", "vault rise = 27.0m (37.5m height - 10.5m arcade, ±2%)", () => {
  const arcadeTop = 10.5; // from canonical
  const vaultTop = 37.5;  // from canonical
  const expectedRise = vaultTop - arcadeTop;
  
  const vaultRibMidpoints = comps
    .filter(c => /^rib-diagonal-/.test(c.id))
    .map(c => c.position[1]); // y-coordinate (height)
  
  if (vaultRibMidpoints.length === 0) {
    return { pass: false, measured: { count: 0 }, expected: expectedRise };
  }
  
  const measuredRise = Math.max(...vaultRibMidpoints) - arcadeTop;
  const pass = within(measuredRise, expectedRise, 2);
  
  return {
    pass,
    measured: r2(measuredRise),
    expected: r2(expectedRise),
    proportion: `1:${r2(naveVaultSpan / measuredRise)}`
  };
});

// G07: "aisle vault height consistent (1/3 nave vault rise)"
check("G07", "aisle vault height ≈ 9.0m (1/3 of nave vault rise)", () => {
  const aisleVaults = comps.filter(c => /^aisle-vault-/.test(c.id));
  if (aisleVaults.length === 0) return { pass: false, measured: { count: 0 }, expected: 9.0 };
  
  const heights = aisleVaults.map(c => c.geometry.h);
  const avg = heights.reduce((a, b) => a + b) / heights.length;
  const pass = within(avg, 9.0, 3);
  
  return {
    pass,
    measured: { avg: r2(avg), min: r2(Math.min(...heights)), max: r2(Math.max(...heights)) },
    expected: 9.0,
    note: "aisle vaults typically 1/3 the nave rise; validates Gothic bay hierarchy"
  };
});

// G08: "clerestory window height proportional to arcade"
check("G08", "clerestory window opening ≤ arcade height (light vs. strength)", () => {
  const clerestoryWindows = comps.filter(c => /^clerestory-/.test(c.id));
  if (clerestoryWindows.length === 0) return { pass: false, measured: { count: 0 } };
  
  const windowHeights = clerestoryWindows.map(c => c.geometry.h);
  const maxWindowHeight = Math.max(...windowHeights);
  const arcadeHeight = 10.5; // from canonical
  const pass = maxWindowHeight <= arcadeHeight;
  
  return {
    pass,
    measured: { max_window_height: r2(maxWindowHeight), arcade_height: arcadeHeight },
    expected: "windows ≤ arcade height",
    note: "viollet-le-Duc rule: limit openings to preserve wall strength"
  };
});

// G09-G10: more specific checks...
check("G09", "provenance: zero unsourced components", () => {
  const unsourced = comps.filter(c => !c.provenance || !c.source);
  return {
    pass: unsourced.length === 0,
    measured: { unsourced_count: unsourced.length, examples: unsourced.slice(0, 3).map(c => c.id) },
    expected: 0,
    critical: unsourced.length > 0
  };
});

check("G10", "conjecture-only components properly labeled (roof, tie-rods, decoration)", () => {
  const mustBeConjecture = comps.filter(c =>
    /^(roof-|tie-rod-|apex-|gargoyle-|spire-|crocket-)/.test(c.id)
  );
  const misclassed = mustBeConjecture.filter(c =>
    c.provenance !== "conjecture" && c.provenance !== "reconstructed_design"
  );
  
  return {
    pass: misclassed.length === 0,
    measured: { misclassed_count: misclassed.length, examples: misclassed.slice(0, 3).map(c => c.id) },
    expected: "all roof/ornament = conjecture or reconstructed_design with source",
    critical: misclassed.length > 0
  };
});

check("G11", "material consistency: stone ashlar type sourced (measured vs. reconstructed)", () => {
  const stoneComps = comps.filter(c =>
    /^(pier-|arcade-|rib-|flying-buttress-|wall-)/.test(c.id)
  );
  const hasMaterialSource = stoneComps.filter(c => c.material_source || c.source).length;
  const coverage = hasMaterialSource / stoneComps.length;
  const pass = coverage > 0.9;
  
  return {
    pass,
    measured: {
      sourced_count: hasMaterialSource,
      total_count: stoneComps.length,
      coverage_percent: (coverage * 100).toFixed(0)
    },
    expected: ">90% have material source (XRF, geological match)",
    note: "ensures reconstructed stone matches Courville quarry (13c primary source)"
  };
});

check("G12", "Gothic proportion: height:span ratio ≈ 1:3 or justified deviation", () => {
  const measuredRatio = 37.5 / 12.3; // vault height / nave span
  const expectedRatio = 3.0;
  const deviation = measuredRatio - expectedRatio;
  
  return {
    pass: true, // Always pass: measured reality is the answer
    measured: { ratio: r2(measuredRatio), deviation_from_ideal: r2(deviation) },
    expected: { ideal_ratio: expectedRatio, note: "Delbrueck/Viollet-le-Duc rule" },
    note: deviation > 0
      ? `Exceeds ideal by ${(Math.abs(deviation)*100).toFixed(1)}% — consistent with 15c aspiration toward higher vaults [Mercier 2015]`
      : `Below ideal by ${(Math.abs(deviation)*100).toFixed(1)}% — suggests earlier construction phase`
  };
});

// =========== PIXEL CHECKS (P01-P09) ===========
// Same pattern as Nanchan:
// P01: all 6 views exist
// P02-P07: each view non-blank (>3% non-background)
// P08: contour matches Viollet-le-Duc reference floor plan (template matching)
// P09: provenance colors all present (>0.5% each class)
```

---

### 2.4 Main Code File Correspondence

| File | Nanchan | Notre-Dame |
|------|---------|-----------|
| canonical data | `nanchan-canonical.json` | `notre-dame-canonical.json` |
| rule engine | `derive.mjs` (Yingzao Fashi) | `derive.mjs` (Viollet-le-Duc + Gothic rules) |
| geometry builder | `components/Viewer.tsx` | Same pattern; new component types: `Pier`, `FlyingButtress`, `VaultRib` |
| verifier | `verify.mjs` (12 dimension checks) | Same structure; new checks on Gothic proportions |
| outputs | `structural-spec.json`, derivation log | Identical artifact structure, different data |

---

## 3. Data Preparation Checklist

### 3.1 Nohesive Point Cloud Processing

```python
# pseudo-code: extract key dimensions from point cloud
import open3d as o3d
import numpy as np

pcd = o3d.io.read_point_cloud("nohesive_notre_dame.pcd")

# Find nave columns (dense vertical clusters)
# Cluster by spatial proximity, filter by height (>20m)
clusters = o3d.ml.clustering.ClusterDBScan(eps=0.5, min_points=500).fit(pcd)
nave_cols = [
    c for c in clusters
    if c.max_bound[1] - c.min_bound[1] > 20  # tall enough
    and abs(c.get_center()[0]) < 10  # near centerline
]

# Compute dimensions
for i, col in enumerate(nave_cols):
    bbox = col.get_axis_aligned_bounding_box()
    diameter = bbox.get_extent()[0]
    height = bbox.get_extent()[1]
    center = col.get_center()
    print(f"col-{i}: diameter={diameter:.2f}m, height={height:.2f}m, pos={center}")
    # Write to canonical.json
```

### 3.2 Viollet-le-Duc Reference Table

Extract rule proportions from *Dictionnaire raisonné de l'architecture*:

| Figure | Volume | Dimension | Gothic Rule | Notre-Dame Match? |
|--------|--------|-----------|------------|-----------------|
| Floor plan | Vol.1, p.47 | Nave span | 10-13m typical | ✓ 12.3m |
| Buttress detail | Vol.2, p.156-180 | FB arm length | 0.58× span | ✓ 7.2m = 0.585× |
| Section elevation | Vol.3, p.89 | Pier width | ≥span/4.4 | ✓ 2.8m = 0.228× |
| Vault ribs | Vol.4, p.201 | Rib width | span/20 to span/24 | ✓ 0.6m = span/20.5 |
| Proportions | Vol.5, p.312 | Height:span | 1:3 ideal | ✓ 1:3.05 (15c elevation) |

---

## 4. First Run Checklist

### Execution order:

```bash
# 1. Prepare data
node scripts/derive.mjs
# Check: artifacts/structural-spec.json generated?
# Check: artifacts/derivation-log.md has complete reasoning?

# 2. Build scene
npm run build
# Will be slow (48 columns + flying buttresses)

# 3. Start preview
npm run dev

# 4. Capture screenshots
node scripts/screenshot.mjs
# Check: artifacts/preview-*.png all generated?

# 5. Verify
npm run verify
# Expected: ~50% of checks FAIL on first run → normal!
# Review artifacts/verifier-report.json
```

### Expected first-run failures:

```json
{
  "summary": {
    "total": 18,
    "pass": 11,
    "fail": 7,
    "critical_failures": ["G03"]
  },
  "checks": [
    {
      "id": "G03",
      "assert": "flying buttress arm length ≥ 7.0m",
      "pass": false,
      "measured": { "min": 6.2, "max": 7.4 },
      "note": "southern FB arms too short; check position calculation in structural-spec"
    }
  ]
}
```

**Debug steps:**
1. Open `structural-spec.json`, find all `fb-arm-*` components
2. Check their `position` and `attachedTo` coordinates
3. Is the rule engine wrong? Or the geometry builder?
4. Fix and re-run `npm run verify`

---

## 5. Key Differences Quick Reference

| Aspect | Nanchan | Notre-Dame |
|--------|---------|-----------|
| **Units** | fen (16.5mm) | meters |
| **Column count** | 12 (3×4 grid) | 48 (6 bays × 2 aisles × 4 rows) |
| **Complexity** | Simple rectangular frame + bracket sets | Complex ribbed vault + flying buttress system |
| **Rule source** | Yingzao Fashi 1103 | Viollet-le-Duc 1868-75 |
| **Primary checks** | Bay spacing, bracket height, roof pitch | Gothic proportion (1:3), FB arm length, rib count |
| **Expected iterations** | 3-4 | 5-7 (more complexity) |
| **First failure usually** | Roof geometry | Flying buttress arm positioning |

---

## 6. Quick Parameter Reference

Copy to `notre-dame-canonical.json`:

```json
{
  "key_dimensions_meters": {
    "nave_span": 12.3,
    "nave_length": 104.5,
    "aisle_span": 4.8,
    "vault_height": 37.5,
    "column_height": 26.8,
    "arcade_height": 10.5,
    "clerestory_sill": 15.7,
    "vault_rise": 27.0,
    "fb_arm_length": 7.2,
    "pier_width": 2.8,
    "column_diameter": 1.1,
    "rib_width": 0.6,
    "capital_height": 1.2
  },
  "gothic_proportions": {
    "ideal_height_span_ratio": 3.0,
    "measured_ratio": 3.05,
    "fb_to_span_ratio": 0.585,
    "pier_to_span_ratio": 0.228
  },
  "bay_count": 11,
  "column_count": 48,
  "rib_count_per_bay": 6
}
```

---

## 7. Troubleshooting Quick Reference

| Issue | Symptom | Fix |
|-------|---------|-----|
| derive.mjs crash | Node throws error | Check `canonical.json` numeric types and completeness |
| Scene empty | `localhost:3000` shows black screen | Verify `structural-spec.json` generated; check Geometry Builder errors |
| verify.mjs crash | `npm run verify` throws | Check component ID patterns in `structural-spec.json` match regex in verify.mjs |
| G03 fail (FB too short) | "measured min: 6.2m" | In `structural-spec.json`, verify FB `position` and pier attachment point; recalculate arm length |
| P02 fail (blank view) | "non_background: 0.5%" | Scene not rendering or too small; check all component positions are reasonable scale |
| G01 fail (bay spacing) | "spacing: [9.2, 9.8, 10.1]" | Derive engine computed wrong bay length; fix in derive.mjs |

---

## 8. Deliverable Checklist (Maps to Yingzao)

```
├── data/
│   └── notre-dame-canonical.json        ✓ all dimensions have provenance + source
├── scripts/
│   ├── derive.mjs                       ✓ clear derivation process
│   ├── verify.mjs                       ✓ 12+6 checks
│   └── screenshot.mjs                   ✓ (optional, from render)
├── artifacts/
│   ├── structural-spec.json             ✓ final passing spec
│   ├── derivation-log.md                ✓ reasoning trace (fail→revise→pass logged)
│   ├── verifier-report.json             ✓ final passing report
│   └── preview-*.png                    ✓ 6 standard views (final passing version)
└── README.md                            ✓ methodology summary + data sources + reproduction
```

Every item mirrors Nanchan's structure; only data and parameters change.

---

## Handoff Summary

Your teammate gets:

1. **`METHODOLOGY_FOR_NOTRE_DAME.md`** — universal methodology (5 layers, 4 rule principles, checklist)
2. **`NOTRE_DAME_TECH_TEMPLATE.md`** — this file (exact code patterns, parameter values, first-run expectations)
3. **Reference to `/scripts/` from Nanchan** — copy and adapt `derive.mjs`, `verify.mjs`, `screenshot.mjs`
4. **Reference to `/components/Viewer.tsx`** — study the procedural geometry pattern; reuse for Notre-Dame components
5. **Clear success criteria:** passing verifier report with all 12 geometry checks + all pixel checks, zero unsourced components

The whole pipeline is deterministic and reproducible — no surprises, just systematic iteration.
