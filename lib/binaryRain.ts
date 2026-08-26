type RainHandle = { stop: () => void };

const FONT_SIZE = 18;

export function createRain(canvas: HTMLCanvasElement): RainHandle {
  const ctx = canvas.getContext('2d', { alpha: false });
  if (!ctx) return { stop: () => {} };

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.width = Math.floor(w * dpr);
  canvas.height = Math.floor(h * dpr);
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, w, h);
  ctx.font = `${FONT_SIZE}px monospace`;
  ctx.textBaseline = 'top';

  const columns = Math.ceil(w / FONT_SIZE);

  const drops = Array.from({ length: columns }, () => Math.random() * (h / FONT_SIZE));

  let raf = 0;

  const frame = () => {
    raf = requestAnimationFrame(frame);


    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < drops.length; i++) {
      const char = Math.random() > 0.5 ? '1' : '0';
      const isHead = Math.random() > 0.92;
      ctx.fillStyle = isHead ? 'rgba(255, 237, 213, 0.95)' : 'rgba(249, 115, 22, 0.65)';
      ctx.fillText(char, i * FONT_SIZE, drops[i] * FONT_SIZE);


      drops[i] -= 0.4 + Math.random() * 0.35;
      if (drops[i] < -2 && Math.random() > 0.975) {
        drops[i] = h / FONT_SIZE + Math.random() * 10;
      }
    }
  };

  raf = requestAnimationFrame(frame);

  return {
    stop: () => cancelAnimationFrame(raf),
  };
}
