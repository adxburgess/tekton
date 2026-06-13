"use client";

/**
 * Routes the scene by ?building (ND-14). Default = the Notre-Dame spire (the v1
 * product). ?building=nanchan loads the original Nanchan viewer (the regression
 * anchor) — both load, neither breaks the other.
 */
import dynamic from "next/dynamic";
import { useMemo } from "react";

const SpireViewer = dynamic(() => import("./SpireViewer"), { ssr: false });
const NanchanViewer = dynamic(() => import("./Viewer"), { ssr: false });

export default function BuildingRouter() {
  const building = useMemo(() => {
    if (typeof window === "undefined") return "notre-dame";
    return new URLSearchParams(window.location.search).get("building") ?? "notre-dame";
  }, []);
  return building === "nanchan" ? <NanchanViewer /> : <SpireViewer />;
}
