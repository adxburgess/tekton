#!/usr/bin/env node
/** Headless screenshots of the viewer for visual self-checks and the vision verifier. */
import { chromium } from "playwright";

const URL = process.env.URL ?? "http://localhost:3003";
const browser = await chromium.launch({ args: ["--use-angle=swiftshader"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

// Next dev keeps an HMR socket + a continuous WebGL render loop alive, so
// `networkidle` never settles — wait for the canvas DOM instead.
const ready = async () => {
  await page.waitForSelector("canvas", { timeout: 20000 });
};

for (const cam of ["default", "front", "bracket", "eave", "altar"]) {
  await page.goto(`${URL}/?cam=${cam}`, { waitUntil: "domcontentloaded" });
  await ready();
  await page.waitForTimeout(cam === "default" ? 4000 : 1800);
  await page.screenshot({ path: `artifacts/preview-${cam}.png` });
}
// three-mode switch: capture 复原 (reconstructed) and 出处 (provenance) from the default station
await page.goto(`${URL}/?cam=default`, { waitUntil: "domcontentloaded" });
await ready();
await page.waitForTimeout(3000);
await page.click("button:has-text('复原')");
await page.waitForTimeout(1200);
await page.screenshot({ path: "artifacts/preview-recon.png" });
await page.click("button:has-text('出处')");
await page.waitForTimeout(1000);
await page.screenshot({ path: "artifacts/preview-provenance.png" });
await browser.close();
console.log("saved previews: default, front, bracket, eave, recon, provenance");
