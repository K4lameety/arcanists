'use client';

import { useEffect, useRef } from 'react';
import { createBurst } from '@/lib/embers';
import { createRain } from '@/lib/binaryRain';

const TOTAL_MS = 3500;
const LOGO_AT_MS = 1300;

export function IntroGate() {
  const rainRef = useRef<HTMLCanvasElement>(null);
  const burstRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('arc-intro')) return;

    const rain = rainRef.current ? createRain(rainRef.current) : { stop: () => {} };
    const burst: { handle: ReturnType<typeof createBurst> | null } = { handle: null };
    let finished = false;

    const burstTimer = window.setTimeout(() => {
      if (burstRef.current && logoRef.current) {
        const logoRect = logoRef.current.getBoundingClientRect();
        burst.handle = createBurst(burstRef.current, {
          count: 110,
          duration: 1100,
          startRadius: logoRect.width / 2,
          center: { x: logoRect.left + logoRect.width / 2, y: logoRect.top + logoRect.height / 2 },
        });
      }
    }, LOGO_AT_MS);

    const finish = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(burstTimer);
      window.clearTimeout(endTimer);
      rain.stop();
      burst.handle?.stop();
      root.classList.remove('arc-intro');
      window.dispatchEvent(new CustomEvent('arc:surge'));
    };

    const endTimer = window.setTimeout(finish, TOTAL_MS);

    window.addEventListener('keydown', finish);
    window.addEventListener('pointerdown', finish);

    return () => {
      window.clearTimeout(burstTimer);
      window.clearTimeout(endTimer);
      rain.stop();
      burst.handle?.stop();
      window.removeEventListener('keydown', finish);
      window.removeEventListener('pointerdown', finish);
    };
  }, []);

  return (
    <div id="arc-gate" aria-hidden="true" className="fixed inset-0 z-[200] overflow-hidden">
      <canvas ref={rainRef} className="arc-rain absolute inset-0 h-full w-full" />
      <canvas ref={burstRef} className="absolute inset-0 h-full w-full pointer-events-none" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        <div ref={logoRef} className="relative h-[220px] w-[220px] md:h-[320px] md:w-[320px]">
          <div className="arc-shock absolute inset-0 rounded-full border border-orange-500/60" />
          <img
            src="/icon.png"
            alt=""
            className="arc-logo absolute inset-0 h-full w-full object-contain"
          />
        </div>
        <p className="arc-welcome terminal-text text-lg md:text-3xl text-orange-500 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">
          Welcome, Arcanist
        </p>
      </div>

      <p className="arc-skip absolute bottom-8 left-1/2 -translate-x-1/2 terminal-text text-[10px] uppercase tracking-[0.3em] text-neutral-600">
        press any key to skip
      </p>
    </div>
  );
}
