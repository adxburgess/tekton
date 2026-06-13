#!/usr/bin/env node
/**
 * Demo stunt: "correct" the roof toward the Fashi 1:3 ideal, then let the
 * verifier refuse to ship it (V09, critical).
 *
 *   npm run demo:corrupt   — raise the ridge purlin to the rulebook position
 *   npm run demo:restore   — put the real 782 CE building back
 *
 * The backup guard means corrupt cannot run twice in a row, so the backup
 * always holds the genuine spec.
 */
import { readFileSync, writeFileSync, existsSync, copyFileSync, rmSync } from "node:fs";

const SPEC = "artifacts/structural-spec.json";
const BACKUP = "artifacts/.spec-demo-backup.json";
const mode = process.argv[2];

if (mode === "corrupt") {
  if (existsSync(BACKUP)) {
    console.error("已经处于破坏状态（备份存在）。先 npm run demo:restore。");
    process.exit(1);
  }
  copyFileSync(SPEC, BACKUP);
  const spec = JSON.parse(readFileSync(SPEC, "utf8"));
  const ji = spec.components.find((c) => c.id === "tuan-ji");
  const eaveTopY = 331.4; // liaoyan fang top
  const halfSpan = 347;
  ji.position[1] = eaveTopY + halfSpan / 3 - ji.geometry.r; // Fashi 1:3 "ideal"
  writeFileSync(SPEC, JSON.stringify(spec, null, 2));
  console.log("脊檩已按《营造法式》1:3 之制「纠正」。");
  console.log('现在跑 npm run verify — 看它拒绝出厂。');
} else if (mode === "restore") {
  if (!existsSync(BACKUP)) {
    console.error("没有备份——当前 spec 就是真实的 782 年建筑。");
    process.exit(1);
  }
  copyFileSync(BACKUP, SPEC);
  rmSync(BACKUP);
  console.log("已恢复实测屋面（举高 130 分，1:2.67）。782 年的建筑大于 1103 年的规则书。");
} else {
  console.error("usage: node scripts/demo.mjs corrupt|restore");
  process.exit(1);
}
