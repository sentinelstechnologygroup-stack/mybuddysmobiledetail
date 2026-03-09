import React, { useState, useRef, useCallback } from "react";

export default function BeforeAfterSlider({ before, after, label }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updateSlider = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e) => {
    dragging.current = true;
    updateSlider(e.clientX);
  };

  const onMouseMove = (e) => {
    if (!dragging.current) return;
    updateSlider(e.clientX);
  };

  const onMouseUp = () => { dragging.current = false; };

  const onTouchMove = (e) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-white/5 group">
      {/* Image container */}
      <div
        ref={containerRef}
        className="relative select-none cursor-col-resize"
        style={{ aspectRatio: "16/10" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        onTouchStart={(e) => updateSlider(e.touches[0].clientX)}
      >
        {/* After image (background) */}
        <img
          src={after.src}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={before.src}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
            draggable={false}
          />
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-zinc-950/80 backdrop-blur-sm rounded-full text-[10px] font-bold tracking-widest uppercase text-zinc-300 pointer-events-none">
          Before
        </div>
        <div className="absolute top-3 right-3 px-2.5 py-1 bg-amber-500/90 backdrop-blur-sm rounded-full text-[10px] font-bold tracking-widest uppercase text-zinc-950 pointer-events-none">
          After
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.5)] pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-none z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 8L2 5M2 5L5 2M2 5H14M11 8L14 5M14 5L11 2M14 5H2" stroke="#18181b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Caption */}
      <div className="px-5 py-4 bg-zinc-900/60">
        <p className="text-sm font-medium text-zinc-300">{label}</p>
        <p className="text-xs text-zinc-600 mt-0.5">Drag to compare</p>
      </div>
    </div>
  );
}