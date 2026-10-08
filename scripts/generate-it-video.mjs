import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const WIDTH = 1280;
const HEIGHT = 720;
const FPS = 30;
const DURATION_SEC = 10;
const TOTAL_FRAMES = FPS * DURATION_SEC;
const TAU = Math.PI * 2;

// 5x7 minimal bitmap font for ASCII 32..126
const FONT = {
  ' ': [0, 0, 0, 0, 0],
  '!': [0, 0, 95, 0, 0],
  '"': [0, 7, 0, 7, 0],
  '#': [20, 127, 20, 127, 20],
  '$': [36, 42, 127, 42, 18],
  '%': [35, 19, 8, 100, 98],
  '&': [54, 73, 85, 34, 80],
  "'": [0, 5, 3, 0, 0],
  '(': [0, 28, 34, 65, 0],
  ')': [0, 65, 34, 28, 0],
  '*': [20, 8, 62, 8, 20],
  '+': [8, 8, 62, 8, 8],
  ',': [0, 80, 48, 0, 0],
  '-': [8, 8, 8, 8, 8],
  '.': [0, 96, 96, 0, 0],
  '/': [32, 16, 8, 4, 2],
  '0': [62, 81, 73, 69, 62],
  '1': [0, 66, 127, 64, 0],
  '2': [66, 97, 81, 73, 70],
  '3': [33, 65, 69, 75, 49],
  '4': [24, 20, 18, 127, 16],
  '5': [39, 69, 69, 69, 57],
  '6': [60, 74, 73, 73, 48],
  '7': [1, 113, 9, 5, 3],
  '8': [54, 73, 73, 73, 54],
  '9': [6, 73, 73, 41, 30],
  ':': [0, 54, 54, 0, 0],
  ';': [0, 86, 54, 0, 0],
  '<': [8, 20, 34, 65, 0],
  '=': [20, 20, 20, 20, 20],
  '>': [0, 65, 34, 20, 8],
  '?': [2, 1, 81, 9, 6],
  '@': [50, 73, 121, 65, 62],
  'A': [126, 17, 17, 17, 126],
  'B': [127, 73, 73, 73, 54],
  'C': [62, 65, 65, 65, 34],
  'D': [127, 65, 65, 34, 28],
  'E': [127, 73, 73, 73, 65],
  'F': [127, 9, 9, 9, 1],
  'G': [62, 65, 73, 73, 122],
  'H': [127, 8, 8, 8, 127],
  'I': [0, 65, 127, 65, 0],
  'J': [32, 64, 65, 63, 1],
  'K': [127, 8, 20, 34, 65],
  'L': [127, 64, 64, 64, 64],
  'M': [127, 2, 12, 2, 127],
  'N': [127, 4, 8, 16, 127],
  'O': [62, 65, 65, 65, 62],
  'P': [127, 9, 9, 9, 6],
  'Q': [62, 65, 81, 33, 94],
  'R': [127, 9, 25, 41, 70],
  'S': [70, 73, 73, 73, 49],
  'T': [1, 1, 127, 1, 1],
  'U': [63, 64, 64, 64, 63],
  'V': [31, 32, 64, 32, 31],
  'W': [127, 32, 24, 32, 127],
  'X': [99, 20, 8, 20, 99],
  'Y': [7, 8, 112, 8, 7],
  'Z': [97, 81, 73, 69, 67],
  '[': [0, 127, 65, 65, 0],
  '\\': [2, 4, 8, 16, 32],
  ']': [0, 65, 65, 127, 0],
  '^': [4, 2, 1, 2, 4],
  '_': [64, 64, 64, 64, 64],
  '`': [0, 1, 2, 4, 0],
  'a': [32, 84, 84, 84, 120],
  'b': [127, 68, 68, 68, 56],
  'c': [56, 68, 68, 68, 40],
  'd': [56, 68, 68, 68, 127],
  'e': [56, 84, 84, 84, 24],
  'f': [8, 126, 9, 1, 2],
  'g': [24, 164, 164, 164, 124],
  'h': [127, 8, 4, 4, 120],
  'i': [0, 68, 125, 64, 0],
  'j': [32, 64, 68, 61, 0],
  'k': [127, 16, 40, 68, 0],
  'l': [0, 65, 127, 64, 0],
  'm': [124, 4, 24, 4, 120],
  'n': [124, 8, 4, 4, 120],
  'o': [56, 68, 68, 68, 56],
  'p': [252, 36, 36, 36, 24],
  'q': [24, 36, 36, 36, 252],
  'r': [124, 8, 4, 4, 8],
  's': [72, 84, 84, 84, 32],
  't': [4, 62, 68, 64, 32],
  'u': [60, 64, 64, 32, 124],
  'v': [28, 32, 64, 32, 28],
  'w': [60, 64, 48, 64, 60],
  'x': [68, 40, 16, 40, 68],
  'y': [156, 160, 160, 160, 124],
  'z': [68, 100, 84, 76, 68],
  '{': [0, 8, 54, 65, 0],
  '|': [0, 0, 127, 0, 0],
  '}': [0, 65, 54, 8, 0],
  '~': [16, 8, 16, 32, 16],
};

// Canvas buffer
const buf = Buffer.alloc(WIDTH * HEIGHT * 3);

function clear(r = 3, g = 7, b = 18) {
  for (let i = 0; i < buf.length; i += 3) {
    buf[i] = r;
    buf[i + 1] = g;
    buf[i + 2] = b;
  }
}

function setPixel(x, y, r, g, b, alpha = 1) {
  if (x < 0 || x >= WIDTH || y < 0 || y >= HEIGHT) return;
  const idx = ((y | 0) * WIDTH + (x | 0)) * 3;
  if (alpha >= 1) {
    buf[idx] = r;
    buf[idx + 1] = g;
    buf[idx + 2] = b;
  } else {
    const inv = 1 - alpha;
    buf[idx] = Math.min(255, (buf[idx] * inv + r * alpha) | 0);
    buf[idx + 1] = Math.min(255, (buf[idx + 1] * inv + g * alpha) | 0);
    buf[idx + 2] = Math.min(255, (buf[idx + 2] * inv + b * alpha) | 0);
  }
}

function drawLine(x0, y0, x1, y1, r, g, b, alpha = 1) {
  x0 = x0 | 0; y0 = y0 | 0; x1 = x1 | 0; y1 = y1 | 0;
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;
  let cx = x0;
  let cy = y0;

  while (true) {
    setPixel(cx, cy, r, g, b, alpha);
    if (cx === x1 && cy === y1) break;
    const e2 = 2 * err;
    if (e2 > -dy) { err -= dy; cx += sx; }
    if (e2 < dx) { err += dx; cy += sy; }
  }
}

function drawCircle(cx, cy, radius, r, g, b, alpha = 1, fill = false) {
  const r2 = radius * radius;
  const minX = Math.max(0, Math.floor(cx - radius));
  const maxX = Math.min(WIDTH - 1, Math.ceil(cx + radius));
  const minY = Math.max(0, Math.floor(cy - radius));
  const maxY = Math.min(HEIGHT - 1, Math.ceil(cy + radius));

  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      const d2 = (x - cx) * (x - cx) + (y - cy) * (y - cy);
      if (fill) {
        if (d2 <= r2) {
          const edgeAlpha = Math.max(0, Math.min(1, radius - Math.sqrt(d2) + 0.5));
          setPixel(x, y, r, g, b, alpha * edgeAlpha);
        }
      } else {
        const d = Math.sqrt(d2);
        if (Math.abs(d - radius) < 1) {
          const a = (1 - Math.abs(d - radius)) * alpha;
          setPixel(x, y, r, g, b, a);
        }
      }
    }
  }
}

function drawGlow(cx, cy, radius, r, g, b, maxAlpha = 0.5) {
  const minX = Math.max(0, Math.floor(cx - radius));
  const maxX = Math.min(WIDTH - 1, Math.ceil(cx + radius));
  const minY = Math.max(0, Math.floor(cy - radius));
  const maxY = Math.min(HEIGHT - 1, Math.ceil(cy + radius));

  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      const d = Math.hypot(x - cx, y - cy);
      if (d < radius) {
        const a = Math.pow(1 - d / radius, 2) * maxAlpha;
        setPixel(x, y, r, g, b, a);
      }
    }
  }
}

function drawChar(ch, startX, startY, r, g, b, scale = 1, alpha = 1) {
  const cols = FONT[ch] || FONT['?'];
  for (let c = 0; c < 5; c++) {
    const colBits = cols[c];
    for (let row = 0; row < 7; row++) {
      if ((colBits >> row) & 1) {
        for (let sx = 0; sx < scale; sx++) {
          for (let sy = 0; sy < scale; sy++) {
            setPixel(startX + c * scale + sx, startY + row * scale + sy, r, g, b, alpha);
          }
        }
      }
    }
  }
}

function drawText(text, x, y, r, g, b, scale = 1, alpha = 1) {
  let cx = x;
  const charWidth = 6 * scale;
  for (let i = 0; i < text.length; i++) {
    drawChar(text[i], cx, y, r, g, b, scale, alpha);
    cx += charWidth;
  }
}

// Network Plexus Nodes (Phase-locked orbits for seamless looping)
const NODES_COUNT = 36;
const nodes = [];
for (let i = 0; i < NODES_COUNT; i++) {
  nodes.push({
    cx: 80 + (i % 6) * 210 + (Math.sin(i * 1.7) * 40),
    cy: 70 + Math.floor(i / 6) * 110 + (Math.cos(i * 2.3) * 30),
    rx: 25 + (i * 7) % 35,
    ry: 20 + (i * 11) % 30,
    speed: (i % 3 === 0 ? 1 : i % 2 === 0 ? -1 : 2),
    phase: (i * 17) % TAU,
    r: i % 4 === 0 ? 56 : i % 3 === 0 ? 16 : 14,
    g: i % 4 === 0 ? 189 : i % 3 === 0 ? 185 : 165,
    b: i % 4 === 0 ? 248 : i % 3 === 0 ? 129 : 233, // Cyan, Emerald, Blue
  });
}

// Digital Matrix Rain Columns
const MATRIX_COLS = 42;
const matrixStreams = [];
const CODE_CHARS = '010101ABCDEF7F3A9C4E01XYZ<>{}[]=/*';
for (let i = 0; i < MATRIX_COLS; i++) {
  matrixStreams.push({
    x: 20 + i * 30 + (i % 3) * 5,
    speed: 1 + (i % 4),
    offset: (i * 23) % TOTAL_FRAMES,
    chars: Array.from({ length: 22 }, (_, j) => CODE_CHARS[(i * 7 + j * 5) % CODE_CHARS.length]),
  });
}

// Floating Terminal Lines
const TERMINAL_LEFT = [
  '// STUDIO CORE ARCHITECTURE',
  'import { Three, Canvas } from "@studio"',
  'const pipeline = new DeploymentPipeline();',
  'await pipeline.build({ optimize: true });',
  '> [DOCKER] Containerized prod-v2.4',
  '> [REST/WS] Socket connection: 100%',
  '> [DB-POOL] PostgreSQL query in 1.4ms',
  '> [TEST-SUITE] 124 unit & e2e PASS',
  '> [SECURITY] TLS 1.3 / AES-256 ACTIVE',
  'export default studioEngine.deploy();',
];

const TERMINAL_RIGHT = [
  'ROHIT x AKSHAY // FULL STACK',
  'SYS_LOAD: [||||||||||......] 42%',
  'MEM_USAGE: 2.1 GB / 16.0 GB',
  'ACTIVE_SERVICES: 10 REAL PRODUCTS',
  'CACHE_HIT_RATIO: 99.4% (REDIS)',
  'RENDER_LATENCY: 16.6ms (60 FPS)',
  'NETWORK: 1.28 GB/s I/O STREAM',
  'STATUS: ALL_SYSTEMS_OPERATIONAL',
  'WORKERS: [TH-01, TH-02, TH-03, TH-04]',
  '>>> ARCHITECTURE VERIFIED OK <<<',
];

// Ensure public/videos exists
fs.mkdirSync('public/videos', { recursive: true });
const outMp4 = 'public/videos/hero-it-bg.mp4';

console.log(`Starting generation of ${outMp4}...`);
const ffmpeg = spawn('ffmpeg', [
  '-y',
  '-f', 'rawvideo',
  '-pix_fmt', 'rgb24',
  '-s', `${WIDTH}x${HEIGHT}`,
  '-r', `${FPS}`,
  '-i', 'pipe:0',
  '-c:v', 'libx264',
  '-preset', 'medium',
  '-crf', '20',
  '-pix_fmt', 'yuv420p',
  '-movflags', '+faststart',
  outMp4
]);

ffmpeg.stderr.on('data', (d) => {
  const str = d.toString();
  if (str.includes('frame=')) {
    process.stdout.write(`\r${str.trim().slice(0, 75)}`);
  }
});

for (let frame = 0; frame < TOTAL_FRAMES; frame++) {
  const t = frame / TOTAL_FRAMES;
  const angle = t * TAU;

  // 1. Clear background to dark cyberspace obsidian
  clear(3, 7, 18);

  // 2. Perspective Horizon Grid
  const horizonY = 380;
  // Vanishing lines radiating from center horizon
  for (let x = -200; x <= WIDTH + 200; x += 90) {
    drawLine(640, horizonY - 40, x, HEIGHT, 14, 40, 80, 0.15);
  }
  // Horizontal perspective depth lines moving forward
  for (let row = 0; row < 14; row++) {
    const rowFrac = ((row + t * 2) % 14) / 14;
    const y = horizonY + Math.pow(rowFrac, 2.2) * (HEIGHT - horizonY);
    drawLine(0, y, WIDTH, y, 14, 50, 95, 0.12 + rowFrac * 0.25);
  }

  // 3. Cyber Matrix Rain
  for (const stream of matrixStreams) {
    const streamY = ((frame * stream.speed * 2.5 + stream.offset * 12) % (HEIGHT + 350)) - 100;
    for (let c = 0; c < stream.chars.length; c++) {
      const cy = streamY - c * 16;
      if (cy > -10 && cy < HEIGHT + 10) {
        if (c === 0) {
          // Head of stream glows white/cyan
          drawChar(stream.chars[c], stream.x, cy, 255, 255, 255, 1, 0.95);
          drawGlow(stream.x + 2, cy + 3, 10, 56, 189, 248, 0.4);
        } else if (c < 4) {
          drawChar(stream.chars[c], stream.x, cy, 56, 189, 248, 1, 0.75 - c * 0.1);
        } else {
          const fade = Math.max(0.1, 1 - c / stream.chars.length);
          drawChar(stream.chars[c], stream.x, cy, 14, 116, 144, 1, fade * 0.45);
        }
      }
    }
  }

  // 4. Plexus Network Constellation
  const currentNodes = nodes.map((n) => {
    const a = angle * n.speed + n.phase;
    return {
      x: n.cx + Math.cos(a) * n.rx,
      y: n.cy + Math.sin(a) * n.ry,
      r: n.r, g: n.g, b: n.b,
    };
  });

  // Connecting lines
  for (let i = 0; i < currentNodes.length; i++) {
    for (let j = i + 1; j < currentNodes.length; j++) {
      const n1 = currentNodes[i];
      const n2 = currentNodes[j];
      const dist = Math.hypot(n2.x - n1.x, n2.y - n1.y);
      if (dist < 150) {
        const alpha = (1 - dist / 150) * 0.35;
        drawLine(n1.x, n1.y, n2.x, n2.y, 30, 90, 160, alpha);

        // Data packet moving along connection
        const packetPhase = (t * 4 + (i + j) * 0.2) % 1;
        const px = n1.x + (n2.x - n1.x) * packetPhase;
        const py = n1.y + (n2.y - n1.y) * packetPhase;
        setPixel(px, py, 255, 255, 255, 0.8);
        drawGlow(px, py, 4, 56, 189, 248, 0.5);
      }
    }
  }

  // Draw node points
  for (const n of currentNodes) {
    drawGlow(n.x, n.y, 14, n.r, n.g, n.b, 0.55);
    drawCircle(n.x, n.y, 3, 255, 255, 255, 0.95, true);
    drawCircle(n.x, n.y, 6, n.r, n.g, n.b, 0.6, false);
  }

  // 5. Center Telemetry HUD Ring
  const hudX = 640;
  const hudY = 360;
  drawGlow(hudX, hudY, 180, 14, 116, 200, 0.12);
  drawCircle(hudX, hudY, 140, 30, 90, 150, 0.3, false);
  drawCircle(hudX, hudY, 160, 56, 189, 248, 0.25, false);

  // Rotating Radar Sweep Line
  const sweepAngle = angle * 2;
  const sx = hudX + Math.cos(sweepAngle) * 160;
  const sy = hudY + Math.sin(sweepAngle) * 160;
  drawLine(hudX, hudY, sx, sy, 56, 189, 248, 0.45);

  // Center HUD crosshairs & telemetry ticks
  for (let k = 0; k < 12; k++) {
    const tickA = (k / 12) * TAU + angle * 0.5;
    const x0 = hudX + Math.cos(tickA) * 135;
    const y0 = hudY + Math.sin(tickA) * 135;
    const x1 = hudX + Math.cos(tickA) * 145;
    const y1 = hudY + Math.sin(tickA) * 145;
    drawLine(x0, y0, x1, y1, 56, 189, 248, 0.6);
  }

  // 6. Floating IT Terminal Monitors (Left & Right)
  // Left Terminal Window Box
  const leftX = 50;
  const leftY = 80;
  // Box frame
  drawLine(leftX, leftY, leftX + 340, leftY, 56, 189, 248, 0.4);
  drawLine(leftX, leftY, leftX, leftY + 220, 56, 189, 248, 0.4);
  drawLine(leftX + 340, leftY, leftX + 340, leftY + 220, 56, 189, 248, 0.4);
  drawLine(leftX, leftY + 220, leftX + 340, leftY + 220, 56, 189, 248, 0.4);
  drawLine(leftX, leftY + 22, leftX + 340, leftY + 22, 56, 189, 248, 0.25);
  // Terminal header dots
  drawCircle(leftX + 12, leftY + 11, 3, 239, 68, 68, 0.8, true);
  drawCircle(leftX + 24, leftY + 11, 3, 245, 158, 11, 0.8, true);
  drawCircle(leftX + 36, leftY + 11, 3, 16, 185, 129, 0.8, true);
  drawText('TERMINAL // BUILD_LOGS', leftX + 50, leftY + 8, 148, 163, 184, 1, 0.65);

  // Terminal Lines
  for (let l = 0; l < TERMINAL_LEFT.length; l++) {
    const lineY = leftY + 34 + l * 18;
    const highlight = (Math.floor(frame / 15) % TERMINAL_LEFT.length) === l;
    if (highlight) {
      drawText(TERMINAL_LEFT[l], leftX + 10, lineY, 255, 255, 255, 1, 0.95);
      drawGlow(leftX + 100, lineY + 3, 20, 56, 189, 248, 0.25);
    } else {
      drawText(TERMINAL_LEFT[l], leftX + 10, lineY, 125, 211, 252, 1, 0.6);
    }
  }

  // Right Telemetry Window Box
  const rightX = 890;
  const rightY = 80;
  drawLine(rightX, rightY, rightX + 340, rightY, 56, 189, 248, 0.4);
  drawLine(rightX, rightY, rightX, rightY + 220, 56, 189, 248, 0.4);
  drawLine(rightX + 340, rightY, rightX + 340, rightY + 220, 56, 189, 248, 0.4);
  drawLine(rightX, rightY + 220, rightX + 340, rightY + 220, 56, 189, 248, 0.4);
  drawLine(rightX, rightY + 22, rightX + 340, rightY + 22, 56, 189, 248, 0.25);
  drawText('SYSTEM TELEMETRY // 24/7', rightX + 16, rightY + 8, 56, 189, 248, 1, 0.7);

  for (let l = 0; l < TERMINAL_RIGHT.length; l++) {
    const lineY = rightY + 34 + l * 18;
    const highlight = l === 7 || l === 9;
    if (highlight) {
      drawText(TERMINAL_RIGHT[l], rightX + 10, lineY, 52, 211, 153, 1, 0.9);
    } else {
      drawText(TERMINAL_RIGHT[l], rightX + 10, lineY, 148, 163, 184, 1, 0.6);
    }
  }

  // 7. Ambient Particle Moters floating up
  for (let p = 0; p < 45; p++) {
    const pSeed = p * 137.5;
    const px = (pSeed * 13) % WIDTH;
    const py = (HEIGHT + 50 - ((frame * (1 + (p % 3)) + pSeed) % (HEIGHT + 100))) % HEIGHT;
    const pAlpha = 0.2 + (Math.sin(angle + p) + 1) * 0.35;
    setPixel(px, py, 255, 255, 255, pAlpha);
    if (p % 3 === 0) {
      drawGlow(px, py, 4, 56, 189, 248, pAlpha * 0.6);
    }
  }

  // Write frame buffer to FFmpeg
  ffmpeg.stdin.write(buf);
}

ffmpeg.stdin.end();

ffmpeg.on('close', (code) => {
  console.log(`\nFFmpeg finished with code ${code}. Saved to ${outMp4}`);
});
