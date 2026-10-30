import * as THREE from "three";

const TAU = Math.PI * 2;

function roundRect(
  x: CanvasRenderingContext2D,
  a: number,
  b: number,
  w: number,
  h: number,
  r: number,
) {
  x.beginPath();
  x.moveTo(a + r, b);
  x.arcTo(a + w, b, a + w, b + h, r);
  x.arcTo(a + w, b + h, a, b + h, r);
  x.arcTo(a, b + h, a, b, r);
  x.arcTo(a, b, a + w, b, r);
  x.closePath();
  x.fill();
}

interface Options {
  accent: string;
  light: boolean;
}

/**
 * Floating developer-workstation scene, ported from the legacy hero-scene.js.
 * Mounts a WebGL canvas into `host` and returns a dispose function.
 */
export function createHeroScene(host: HTMLElement, { accent, light }: Options): () => void {
  const glow = "#F4874B";
  const paper = "rgba(245,244,240,";
  const mouse = { x: 0, y: 0 };
  let scrollProgress = 0;
  let running = true;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.domElement.style.cssText =
    "position:absolute;inset:0;width:100%;height:100%;display:block;";
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  cam.position.set(0, 0.9, 8);
  scene.add(new THREE.AmbientLight(0xf5f4f0, 0.55));
  const key = new THREE.DirectionalLight(0xfff1e0, 1.2);
  key.position.set(4, 7, 5);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xbcc4cc, 0.45);
  rim.position.set(-6, 3, -4);
  scene.add(rim);
  const spot = new THREE.PointLight(new THREE.Color(glow), 2.6, 9, 1.6);
  spot.position.set(0, 1.3, 1.6);
  scene.add(spot);

  const tex = (
    w: number,
    h: number,
    draw: (x: CanvasRenderingContext2D, w: number, h: number) => void,
  ) => {
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const x = c.getContext("2d");
    if (x) draw(x, w, h);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    return t;
  };
  const R = (a: number, b: number) => a + Math.random() * (b - a);

  const codeTex = tex(768, 480, (x, w, h) => {
    x.fillStyle = "#0e0d0b";
    x.fillRect(0, 0, w, h);
    x.fillStyle = `${paper}.06)`;
    x.fillRect(0, 0, w, 40);
    [accent, "#b8b6ad", "#55534b"].forEach((c, i) => {
      x.fillStyle = c;
      x.beginPath();
      x.arc(24 + i * 22, 20, 6, 0, TAU);
      x.fill();
    });
    x.fillStyle = `${paper}.4)`;
    x.font = "600 15px monospace";
    x.fillText("~/portfolio — main ✓", w - 210, 26);
    let y = 78;
    for (let i = 0; i < 13; i++) {
      let cx = 34 + (i % 4 === 1 ? 34 : 0);
      const seg = 2 + Math.floor(Math.random() * 3);
      for (let s = 0; s < seg; s++) {
        const ww = R(36, 140);
        x.fillStyle =
          Math.random() < 0.18
            ? accent
            : Math.random() < 0.6
              ? `${paper}.72)`
              : "rgba(140,137,127,.8)";
        roundRect(x, cx, y, ww, 12, 6);
        cx += ww + 16;
      }
      y += 30;
    }
    x.strokeStyle = glow;
    x.lineWidth = 3.5;
    x.beginPath();
    for (const [i, p] of [
      [540, 442],
      [576, 424],
      [612, 430],
      [648, 404],
      [684, 412],
      [726, 380],
    ].entries()) {
      if (i) x.lineTo(p[0], p[1]);
      else x.moveTo(p[0], p[1]);
    }
    x.stroke();
  });
  const kbTex = tex(768, 500, (x, w, h) => {
    x.fillStyle = "#191816";
    x.fillRect(0, 0, w, h);
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 14; col++) {
        x.fillStyle = "rgba(245,244,240,.07)";
        roundRect(x, 26 + col * 52, 30 + row * 54, 44, 44, 7);
      }
    }
    x.fillStyle = "rgba(201,58,26,.85)";
    roundRect(x, 26 + 13 * 52, 30, 44, 44, 7);
    x.fillStyle = "rgba(245,244,240,.09)";
    roundRect(x, 234, 322, 300, 150, 12);
  });
  const panelBg = (x: CanvasRenderingContext2D, w: number, h: number, title: string) => {
    x.fillStyle = "rgba(14,13,11,.94)";
    roundRect(x, 0, 0, w, h, 18);
    x.strokeStyle = `${paper}.18)`;
    x.lineWidth = 2;
    x.strokeRect(1, 1, w - 2, h - 2);
    x.fillStyle = `${paper}.45)`;
    x.font = "600 16px monospace";
    x.fillText(title, 24, 36);
    x.fillStyle = glow;
    x.beginPath();
    x.arc(w - 28, 30, 5, 0, TAU);
    x.fill();
  };
  const termTex = tex(520, 340, (x, w, h) => {
    panelBg(x, w, h, "TERMINAL — zsh");
    x.font = "500 19px monospace";
    const lines = [
      ["$ hv deploy --prod", ".8"],
      ["✓ build 412ms · 0 errors", ".55"],
      ["✓ edge · 14 regions live", ".55"],
      ["$ psi --watch models/*", ".8"],
      ["drift 0.08 · stable", "A"],
    ];
    let y = 82;
    for (const l of lines) {
      x.fillStyle = l[1] === "A" ? glow : `${paper}${l[1]})`;
      x.fillText(l[0], 26, y);
      y += 42;
    }
    x.fillStyle = glow;
    x.fillRect(26, y - 18, 12, 22);
  });
  const chartTex = tex(500, 330, (x, w, h) => {
    panelBg(x, w, h, "QUERIES / DAY");
    const hs = [58, 92, 74, 120, 96, 150, 128, 176];
    hs.forEach((v, i) => {
      x.fillStyle = i === 7 ? accent : `${paper}.22)`;
      roundRect(x, 30 + i * 56, h - 40 - v, 38, v, 5);
    });
    x.strokeStyle = glow;
    x.lineWidth = 3.5;
    x.beginPath();
    hs.forEach((v, i) => {
      const px = 49 + i * 56;
      const py = h - 58 - v;
      if (i) x.lineTo(px, py);
      else x.moveTo(px, py);
    });
    x.stroke();
  });
  const statTex = tex(420, 190, (x, w, h) => {
    panelBg(x, w, h, "SUPPORT RESOLUTION");
    x.fillStyle = glow;
    x.font = "700 64px Georgia";
    x.fillText("−62%", 26, 118);
    x.fillStyle = `${paper}.5)`;
    x.font = "500 17px monospace";
    x.fillText("8 min → 3 min · SimplHome", 26, 156);
  });

  const root = new THREE.Group();
  scene.add(root);
  root.position.y = -0.38;
  const lap = new THREE.Group();
  root.add(lap);
  const alu = new THREE.MeshStandardMaterial({ color: 0x23221f, metalness: 0.55, roughness: 0.42 });
  lap.add(new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.14, 2.1), alu));
  const kb = new THREE.Mesh(
    new THREE.PlaneGeometry(3.02, 1.96),
    new THREE.MeshBasicMaterial({ map: kbTex }),
  );
  kb.rotation.x = -Math.PI / 2;
  kb.position.y = 0.075;
  lap.add(kb);
  const hinge = new THREE.Group();
  hinge.position.set(0, 0.07, -1.02);
  lap.add(hinge);
  const lid = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.06, 0.1), alu);
  lid.position.y = 1.03;
  hinge.add(lid);
  const face = new THREE.Mesh(
    new THREE.PlaneGeometry(3.04, 1.9),
    new THREE.MeshBasicMaterial({ map: codeTex }),
  );
  face.position.set(0, 1.03, 0.057);
  hinge.add(face);
  hinge.rotation.x = -0.28;

  const mkPanel = (
    w: number,
    h: number,
    t: THREE.Texture,
    pos: [number, number, number],
    ry: number,
  ) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ map: t, transparent: true }),
    );
    m.position.set(pos[0], pos[1], pos[2]);
    m.rotation.y = ry;
    root.add(m);
    return { mesh: m, baseY: pos[1] };
  };
  const term = mkPanel(2.15, 1.4, termTex, [-2.85, 1.55, -0.35], 0.45);
  const chart = mkPanel(2.05, 1.35, chartTex, [2.95, 1.95, -0.6], -0.46);
  const stat = mkPanel(1.7, 0.77, statTex, [2.45, -0.1, 1.05], -0.24);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(3.3, 0.006, 6, 160),
    new THREE.MeshBasicMaterial({ color: light ? 0xbfbfb8 : 0x4a4840 }),
  );
  ring.rotation.x = (Math.PI / 2) * 1.04;
  ring.position.y = -0.55;
  root.add(ring);
  const ico = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.34, 0),
    new THREE.MeshBasicMaterial({
      color: new THREE.Color(accent),
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    }),
  );
  ico.position.set(-3.2, 2.6, -1.2);
  root.add(ico);
  const tet = new THREE.Mesh(
    new THREE.TetrahedronGeometry(0.22, 0),
    new THREE.MeshBasicMaterial({ color: 0x8a877c, wireframe: true }),
  );
  tet.position.set(-2.2, -0.5, 1.3);
  root.add(tet);

  const mkPts = (
    n: number,
    spread: number[],
    size: number,
    color: THREE.ColorRepresentation,
    op: number,
  ) => {
    const g = new THREE.BufferGeometry();
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n * 3; i++) arr[i] = (Math.random() - 0.5) * spread[i % 3];
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    const p = new THREE.Points(
      g,
      new THREE.PointsMaterial({ color, size, transparent: true, opacity: op, depthWrite: false }),
    );
    scene.add(p);
    return p;
  };
  const dust = mkPts(220, [16, 9, 8], 0.028, light ? 0x2a2822 : 0xf5f4f0, light ? 0.18 : 0.4);
  const sparks = mkPts(70, [14, 8, 7], 0.05, new THREE.Color(glow), 0.75);

  const onMove = (e: PointerEvent) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  };
  const onScroll = () => {
    scrollProgress = Math.min(1, Math.max(0, window.scrollY / window.innerHeight));
  };
  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });

  const resize = () => {
    const w = host.clientWidth || 1;
    const h = host.clientHeight || 1;
    renderer.setSize(w, h, false);
    cam.aspect = w / h;
    cam.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();
  const io = new IntersectionObserver(
    (en) => {
      running = en[0].isIntersecting;
    },
    { threshold: 0.02 },
  );
  io.observe(host);

  const clock = new THREE.Clock();
  let raf = 0;
  const loop = () => {
    raf = requestAnimationFrame(loop);
    if (!running || document.hidden) return;
    const t = clock.getElapsedTime();
    lap.position.y = Math.sin(t * 0.85) * 0.1;
    lap.rotation.y = Math.sin(t * 0.24) * 0.055 + mouse.x * 0.13;
    lap.rotation.x = mouse.y * 0.04;
    term.mesh.position.y = term.baseY + Math.sin(t * 0.7 + 1.2) * 0.1;
    term.mesh.rotation.z = Math.sin(t * 0.5) * 0.02;
    chart.mesh.position.y = chart.baseY + Math.sin(t * 0.62 + 2.6) * 0.12;
    chart.mesh.rotation.z = Math.sin(t * 0.44 + 1) * 0.02;
    stat.mesh.position.y = stat.baseY + Math.sin(t * 0.78 + 4.2) * 0.08;
    ring.rotation.z = t * 0.05;
    ico.rotation.x = t * 0.4;
    ico.rotation.y = t * 0.3;
    ico.position.y = 2.6 + Math.sin(t * 0.9) * 0.14;
    tet.rotation.y = t * 0.5;
    tet.position.y = -0.5 + Math.sin(t * 0.7 + 2) * 0.1;
    dust.rotation.y = t * 0.016;
    sparks.rotation.y = -t * 0.02;
    root.rotation.x = scrollProgress * 0.12;
    root.position.y = -0.38 + scrollProgress * 0.9;
    cam.position.x += (mouse.x * 0.55 - cam.position.x) * 0.05;
    cam.position.y += (0.9 - mouse.y * 0.35 - cam.position.y) * 0.05;
    cam.position.z = 8 + scrollProgress * 1.4;
    cam.lookAt(0, 0.5, 0);
    spot.intensity = 2.6 + Math.sin(t * 2.2) * 0.25;
    renderer.render(scene, cam);
  };
  loop();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("scroll", onScroll);
    ro.disconnect();
    io.disconnect();
    scene.traverse((o) => {
      const m = o as THREE.Mesh;
      m.geometry?.dispose();
      const mat = m.material as THREE.Material | THREE.Material[] | undefined;
      for (const x of Array.isArray(mat) ? mat : mat ? [mat] : []) {
        (x as THREE.MeshBasicMaterial).map?.dispose();
        x.dispose();
      }
    });
    renderer.forceContextLoss();
    renderer.dispose();
    renderer.domElement.remove();
  };
}
