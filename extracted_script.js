<script>

// ── NAV scroll border ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// ── TABS ──
let tabInterval;
function startTabAutoSwitch() {
  clearInterval(tabInterval);
  tabInterval = setInterval(() => {
    const btns = document.querySelectorAll('.tab-btn');
    let activeIdx = 0;
    btns.forEach((b, idx) => { if (b.classList.contains('active')) activeIdx = idx; });
    const nextIdx = (activeIdx + 1) % btns.length;
    showTab(nextIdx, btns[nextIdx], true);
  }, 10000); // 10 seconds to give time to read
}

function showTab(i, btn, isAuto = false) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel')[i].classList.add('active');
  btn.classList.add('active');
  
  if (!isAuto) startTabAutoSwitch(); // Reset timer if manually clicked
}
// Initialize auto switch
startTabAutoSwitch();

// ── GRID CANVAS ──
(function() {
  const canvas = document.getElementById('gridCanvas');
  const ctx    = canvas.getContext('2d');
  let W, H, dots = [];
  let cols, rows;
  const SPACING   = 38; // Increased spacing for wider movement
  const CONNECT_R = 90; // Increased connection radius so they swap more
  const MAX_LINKS = 4;  // Allow more connections

  function resize() {
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);
    buildDots();
  }

  function buildDots() {
    dots = [];
    cols = Math.ceil(W / SPACING) + 2;
    rows = Math.ceil(H / SPACING) + 2;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dots.push({
          ox: c * SPACING - SPACING * 0.5,
          oy: r * SPACING - SPACING * 0.5,
          amp: 12 + Math.random() * 20, // Much higher amplitude for more movement
          goldVal: 0 // Track gold intensity individually
        });
      }
    }
  }

  function noise(x, y, t) {
    return (
      Math.sin(x * 0.013 + t * 0.6) *
      Math.cos(y * 0.013 + t * 0.45) +
      Math.sin(x * 0.022 + y * 0.016 + t * 0.35) * 0.5
    ) * 0.5;
  }

  let t = 0;
  let isVisible = true;
  const initTime = Date.now();
  
  // Performance optimization: pause animation when hero is not visible
  const observer = new IntersectionObserver(entries => {
    isVisible = entries[0].isIntersecting;
  });
  const heroSection = document.getElementById('inicio');
  if (heroSection) observer.observe(heroSection);

  // We maintain 4 active "pulses" of energy that wander the grid
  let pulses = Array.from({length: 4}, () => ({ idx: -1, pause: 0 }));

  function draw() {
    requestAnimationFrame(draw);
    if (!isVisible) return; // Skip calculation and rendering if not in viewport

    const elapsed = Date.now() - initTime;
    
    // Dots fade in along with hero text from 500ms to 2300ms
    let alphaProgress = 0;
    if (elapsed > 500) {
      alphaProgress = Math.min(1, (elapsed - 500) / 1800);
    }

    // Lines sweep from left to right from 3500ms to 8000ms (4.5 seconds)
    const sweepProgress = Math.max(0, Math.min(1, (elapsed - 3500) / 4500));
    const sweepX = (W + CONNECT_R) * sweepProgress;

    // Start wave movement ONLY after 8000ms (when sweep completes)
    if (elapsed > 8000) {
      t += 0.015;
    }
    
    ctx.clearRect(0, 0, W, H);
    
    // Manage 4 wandering pulses
    pulses.forEach(p => {
      if (p.pause > 0) {
        p.pause--;
        return;
      }
      
      // Spawn new pulse or randomly teleport (0.5% chance) to keep it spread
      if (p.idx === -1 || Math.random() < 0.005) { 
        p.idx = Math.floor(Math.random() * dots.length);
        p.pause = 30 + Math.random() * 60;
      } else {
        // Jump to a neighbor
        const c = p.idx % cols;
        const r = Math.floor(p.idx / cols);
        let neighbors = [];
        
        // Orthogonal
        if (c > 0) neighbors.push(p.idx - 1);
        if (c < cols - 1) neighbors.push(p.idx + 1);
        if (r > 0) neighbors.push(p.idx - cols);
        if (r < rows - 1) neighbors.push(p.idx + cols);
        
        // Diagonal (optional, makes it more organic)
        if (c > 0 && r > 0) neighbors.push(p.idx - 1 - cols);
        if (c < cols - 1 && r < rows - 1) neighbors.push(p.idx + 1 + cols);
        if (c > 0 && r < rows - 1) neighbors.push(p.idx - 1 + cols);
        if (c < cols - 1 && r > 0) neighbors.push(p.idx + 1 - cols);
        
        if (neighbors.length > 0) {
           p.idx = neighbors[Math.floor(Math.random() * neighbors.length)];
           p.pause = 15 + Math.random() * 30; // wait at new dot
        }
      }
    });

    // Calculate new positions and dynamic gold intensity
    const pos = dots.map((d, i) => {
      const nx = noise(d.ox, d.oy, t);
      const ny = noise(d.oy, d.ox, t + 100);
      
      const isTarget = pulses.some(p => p.idx === i);
      if (isTarget) {
         d.goldVal = Math.min(1, d.goldVal + 0.15); // Fast fade in
      } else {
         d.goldVal = Math.max(0, d.goldVal - 0.015); // Slow fade out (leaves a trail)
      }

      const x = d.ox + nx * d.amp;
      const y = d.oy + ny * d.amp;

      // Force gold to 0 if the scanner hasn't reached it yet
      const activeGold = (sweepX > x) ? d.goldVal : 0;

      return { 
        x, 
        y,
        dist: Math.sqrt(nx*nx + ny*ny), 
        gold: activeGold
      };
    });

    // Draw connections based on sweep
    for (let i = 0; i < pos.length; i++) {
      const a = pos[i]; let links = 0;
      for (let j = i+1; j < pos.length && links < MAX_LINKS; j++) {
        const b = pos[j];
        const dx = a.x-b.x, dy = a.y-b.y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < CONNECT_R) {
          
          let leftNode = a.x < b.x ? a : b;
          let rightNode = a.x < b.x ? b : a;
          if (a.x === b.x) {
             leftNode = a.y < b.y ? a : b;
             rightNode = a.y < b.y ? b : a;
          }

          let drawLine = false;
          let endX, endY;

          if (sweepX >= rightNode.x) {
             drawLine = true;
             endX = rightNode.x;
             endY = rightNode.y;
          } else if (sweepX > leftNode.x) {
             drawLine = true;
             const diffX = rightNode.x - leftNode.x;
             if (diffX > 0) {
               const ratio = (sweepX - leftNode.x) / diffX;
               endX = sweepX;
               endY = leftNode.y + (rightNode.y - leftNode.y) * ratio;
             } else {
               endX = rightNode.x;
               endY = rightNode.y;
             }
          }

          if (drawLine) {
             const s = 1 - d/CONNECT_R;
             const maxGold = Math.max(a.gold, b.gold);
             ctx.beginPath(); 
             ctx.moveTo(leftNode.x, leftNode.y); 
             ctx.lineTo(endX, endY);
             
             if (maxGold > 0.05) {
               ctx.strokeStyle = `rgba(184,154,10,${s * (0.2 + maxGold * 0.4)})`;
               ctx.lineWidth = 0.5 + maxGold * 1.2;
             } else {
               ctx.strokeStyle = `rgba(26,26,24,${s * 0.2})`;
               ctx.lineWidth = 0.5;
             }
             ctx.stroke(); 
             links++;
          }
        }
      }
    }

    // Draw dots
    pos.forEach(p => {
      if (alphaProgress === 0) return;
      
      const baseAlpha = 0.20 + p.dist * 0.5;
      const alpha = baseAlpha * alphaProgress;
      
      // Glow effect for gold dots
      if (p.gold > 0.05) {
        const glowRadius = 4 + p.gold * 14;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        g.addColorStop(0, `rgba(184,154,10,${p.gold * 0.4})`);
        g.addColorStop(1, 'rgba(184,154,10,0)');
        ctx.beginPath(); 
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI*2); 
        ctx.fillStyle = g; 
        ctx.fill();
      }
      
      ctx.beginPath(); 
      const radius = 1.3 + p.gold * 2;
      ctx.arc(p.x, p.y, radius, 0, Math.PI*2);
      
      if (p.gold > 0.05) {
        ctx.fillStyle = `rgba(184,154,10,${Math.min(alpha + p.gold, 1) * alphaProgress})`;
      } else {
        ctx.fillStyle = `rgba(26,26,24,${alpha})`;
      }
      ctx.fill();
    });
  }
  
  window.addEventListener('resize', resize);
  resize(); 
  draw();
})();

// ── MOBILE MENU ──
(function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if(menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
})();

// ── SCROLL ANIMATIONS (Fade, Stagger, Reveal) ──
(function() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0, rootMargin: "0px 0px -25% 0px" });

  document.querySelectorAll('.reveal-text, .fade-up-scroll, .stagger-parent, .creative-reveal').forEach(el => observer.observe(el));
})();

// ── PARALLAX ──
(function() {
  const parallaxElements = document.querySelectorAll('.parallax');
  if (parallaxElements.length === 0) return;
  
  window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
      parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed') || 0.15;
        const rect = el.getBoundingClientRect();
        const yPos = (rect.top + rect.height / 2) - (window.innerHeight / 2);
        el.style.transform = `translateY(${yPos * speed}px)`;
      });
    });
  }, { passive: true });
})();

// ── PROCESS LINE ──
(function() {
  const goldLine = document.getElementById('goldLine');
  const steps = [
    document.getElementById('step1'),
    document.getElementById('step2'),
    document.getElementById('step3'),
  ];
  const lineWidths = ['0%', '50%', '100%'];
  let triggered = false;

  function activateStep(i) {
    steps[i].classList.add('is-active');
    document.getElementById('track').style.setProperty('--progress', lineWidths[i]);
  }

  function runSequence() {
    if (triggered) return;
    triggered = true;
    setTimeout(() => activateStep(0), 300);
    setTimeout(() => activateStep(1), 1100);
    setTimeout(() => activateStep(2), 1900);
  }

  new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) runSequence(); });
  }, { threshold: 0.3 }).observe(document.getElementById('track'));
})();

</script>