"use client";

import { useEffect } from "react";
import type { CSSProperties } from "react";

const stations = [
  { id: "intro", label: "Workspace", angle: "0deg" },
  { id: "skills", label: "Toolbox", angle: "60deg" },
  { id: "taskmgr", label: "Task Manager", angle: "120deg" },
  { id: "realtime", label: "Realtime", angle: "180deg" },
  { id: "journey", label: "Journey", angle: "240deg" },
  { id: "contact", label: "Contact", angle: "300deg" },
] as const;

function StationVisual({ id }: { id: (typeof stations)[number]["id"] }) {
  if (id === "intro") {
    return <div className="model model--intro">
      <span className="model-desk" /><span className="model-desk-leg model-desk-leg--left" /><span className="model-desk-leg model-desk-leg--right" />
      <span className="model-screen"><i /><i /><i /></span><span className="model-screen-stand" />
      <span className="model-lamp" /><span className="model-mug" />
    </div>;
  }
  if (id === "skills") {
    return <div className="model model--skills">
      <span className="module module--front"><b>FE</b><i /><i /></span>
      <span className="module module--back"><b>API</b><i /><i /></span>
      <span className="module module--data"><b>DB</b><i /><i /></span>
      <span className="module-rail" />
    </div>;
  }
  if (id === "taskmgr") {
    return <div className="model model--taskmgr">
      <span className="kanban-head" />
      <span className="kanban-col"><i /><i /><i /></span>
      <span className="kanban-col"><i /><i /></span>
      <span className="kanban-col"><i /><i /><i /></span>
      <span className="kanban-foot" />
    </div>;
  }
  if (id === "realtime") {
    return <div className="model model--realtime">
      <span className="signal-hub"><i /></span>
      <span className="signal-line signal-line--one" /><span className="signal-line signal-line--two" /><span className="signal-line signal-line--three" />
      <span className="signal-node signal-node--one" /><span className="signal-node signal-node--two" /><span className="signal-node signal-node--three" />
      <span className="signal-bubble signal-bubble--one"><i /><i /></span>
      <span className="signal-bubble signal-bubble--two"><i /><i /></span>
    </div>;
  }
  if (id === "journey") {
    return <div className="model model--journey">
      <span className="campus-roof" /><span className="campus-body"><i /><i /><i /><i /></span>
      <span className="campus-door" /><span className="campus-steps" /><span className="campus-tree campus-tree--left" /><span className="campus-tree campus-tree--right" />
    </div>;
  }
  return <div className="model model--contact">
    <span className="portal-outer" /><span className="portal-inner" /><span className="portal-light" />
    <span className="portal-step portal-step--one" /><span className="portal-step portal-step--two" />
  </div>;
}

function Robot() {
  return <div className="robot-unit">
    <span className="robot-shadow" />
    <div className="robot">
      <span className="robot-antenna" />
      <span className="robot-ear robot-ear--left" /><span className="robot-ear robot-ear--right" />
      <span className="robot-head"><span className="robot-face"><i /><i /></span></span>
      <span className="robot-neck" />
      <span className="robot-arm robot-arm--left" /><span className="robot-arm robot-arm--right" />
      <span className="robot-body"><span className="robot-core" /></span>
      <span className="robot-leg robot-leg--left" /><span className="robot-leg robot-leg--right" />
      <span className="robot-laptop"><i /></span>
    </div>
  </div>;
}

export default function OrbitWorld() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".story-section"));
    const ring = document.querySelector<HTMLElement>(".orbit-ring");
    if (sections.length < 2 || !ring) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const lastIndex = sections.length - 1;
    let firstCenter = 0;
    let lastCenter = 1;
    let frame = 0;
    let active = -1;

    const measure = () => {
      const scrollY = window.scrollY;
      const first = sections[0].getBoundingClientRect();
      const last = sections[lastIndex].getBoundingClientRect();
      firstCenter = scrollY + first.top + first.height / 2;
      lastCenter = scrollY + last.top + last.height / 2;
      if (lastCenter <= firstCenter) lastCenter = firstCenter + 1;
    };

    const render = () => {
      frame = 0;
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      const progress = Math.min(1, Math.max(0, (viewportCenter - firstCenter) / (lastCenter - firstCenter)));
      const stationsFloat = progress * lastIndex;
      // Reduced motion: snap to whole stations instead of gliding.
      const stationsPos = reducedMotion.matches ? Math.round(stationsFloat) : stationsFloat;
      ring.style.setProperty("--orbit-angle", `${-60 * stationsPos}deg`);

      const nearest = Math.round(stationsFloat);
      if (nearest !== active) {
        active = nearest;
        document.documentElement.dataset.activeScene = sections[nearest]?.dataset.scene ?? "intro";
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const remeasure = () => {
      measure();
      schedule();
    };

    measure();
    render();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", remeasure);
    reducedMotion.addEventListener("change", remeasure);
    document.fonts?.ready.then(remeasure).catch(() => {});

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", remeasure);
      reducedMotion.removeEventListener("change", remeasure);
      if (frame) cancelAnimationFrame(frame);
      delete document.documentElement.dataset.activeScene;
    };
  }, []);

  return <div className="world-stage" aria-hidden="true">
    <div className="scene-viewport">
      <span className="scene-aura" />
      <span className="floor-shadow" />
      <span className="orbit-track orbit-track--outer" />
      <span className="orbit-track orbit-track--inner" />
      <div className="orbit-system">
        <div className="orbit-ring">
          {stations.map((station) => (
            <div
              className={`station station--${station.id}`}
              key={station.id}
              style={{ "--station-angle": station.angle } as CSSProperties}
            >
              <span className="station-plinth" />
              <div className="station-object"><StationVisual id={station.id} /></div>
              <span className="station-label">{station.label}</span>
            </div>
          ))}
        </div>
      </div>
      <Robot />
      <span className="scene-coordinate scene-coordinate--one" />
      <span className="scene-coordinate scene-coordinate--two" />
    </div>
  </div>;
}
