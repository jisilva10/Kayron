import { AnimatedTabsDemo } from "@/components/demo";

export default function App() {
  return (
    <>



<nav id="navbar">
  <a className="nav-logo" href="#">
    KAYR
    <svg width="16" height="12" viewBox="0 0 22 16" fill="none">
      <rect x="5" y="2" width="12" height="12" rx="1.5" stroke="#B89A0A" strokeWidth="1.2" fill="none"/>
      <line x1="5" y1="5.5" x2="2" y2="5.5" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="5" y1="10.5" x2="2" y2="10.5" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="17" y1="5.5" x2="20" y2="5.5" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="17" y1="10.5" x2="20" y2="10.5" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="8" y1="2" x2="8" y2="0" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="11" y1="2" x2="11" y2="0" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="14" y1="2" x2="14" y2="0" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="8" y1="14" x2="8" y2="16" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="11" y1="14" x2="11" y2="16" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="14" y1="14" x2="14" y2="16" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="11" cy="8" r="2" fill="#B89A0A"/>
    </svg>
    ON
  </a>
  <div className="menu-toggle" id="menuToggle">
    <span></span><span></span>
  </div>
  <div className="nav-links" id="navLinks">
    <a href="#nosotros">Quiénes somos</a>
    <a href="#servicios">Servicios</a>
    <a href="#contacto" className="cta">Contacto</a>
  </div>
</nav>


<section className="hero" id="inicio">

  <div className="hero-left">
    <div className="hero-wordmark">
      KAYR
      <svg className="chip-bounce" width="0.75em" height="0.55em" viewBox="0 0 22 16" fill="none">
        <rect x="5" y="2" width="12" height="12" rx="1.5" stroke="#B89A0A" strokeWidth="1.2" fill="none"/>
        <line x1="5" y1="5.5" x2="2" y2="5.5" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
        <line x1="5" y1="10.5" x2="2" y2="10.5" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
        <line x1="17" y1="5.5" x2="20" y2="5.5" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
        <line x1="17" y1="10.5" x2="20" y2="10.5" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
        <line x1="8" y1="2" x2="8" y2="0" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
        <line x1="11" y1="2" x2="11" y2="0" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
        <line x1="14" y1="2" x2="14" y2="0" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
        <line x1="8" y1="14" x2="8" y2="16" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
        <line x1="11" y1="14" x2="11" y2="16" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
        <line x1="14" y1="14" x2="14" y2="16" stroke="#B89A0A" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="11" cy="8" r="2" fill="#B89A0A"/>
      </svg>
      ON
    </div>
    <div className="hero-rule"></div>
    <div className="hero-sub">Consulting &amp; Engineering</div>
    <p className="hero-definition">
      kayr·on &nbsp;|&nbsp; del griego. (kairós) el momento exacto &nbsp;/&nbsp; (-on) fuerza que activa
    </p>
  </div>

  <div className="hero-right">
    <div className="hero-copy">
      <h2>
        Activamos tu<br />
        <em>momento.</em>
      </h2>
      <p>
        Optimizamos tus procesos con inteligencia artificial y automatización. Resultados reales, sistemas que funcionan, equipos que los adoptan.
      </p>
    </div>
    <a className="hero-cta" href="#contacto">
      Agenda una llamada <span className="arrow">→</span>
    </a>
    <div className="grid-wrap">
      <canvas id="gridCanvas" />
    </div>
  </div>

</section>


      <AnimatedTabsDemo />


<section className="about" id="nosotros">

  <div className="block-header">
    <div className="section-index parallax" data-speed="0.15">02</div>
    <div className="header-content fade-up-scroll">
      <div>
        <div className="header-label">Quiénes somos</div>
        <h2 className="header-title reveal-text">
          <span>Un nombre con<br />
          <em>2.500 años</em><br />
          de historia detrás.</span>
        </h2>
      </div>
      <div>
        <p className="header-pull">
          Kairós era la comprensión griega del tiempo que importa. No el que se mide en relojes, sino el instante preciso en que actuar marca la diferencia entre avanzar o quedarse.
        </p>
        <p className="header-body">
          Le sumamos <strong>-on</strong>, el sufijo de las partículas que mueven el universo. El electrón. El fotón. No solo el momento. La fuerza que lo activa.
        </p>
      </div>
    </div>
  </div>

  <div className="block-founder">
    <div className="founder-photo-col creative-reveal">
      <div className="founder-photo-frame">
        <img src="founder.jpg" alt="José Ignacio Silva" />
        <div className="photo-name-tag">
          <h3>José Ignacio Silva</h3>
          <p>Fundador &amp; Consultor Principal</p>
        </div>
      </div>
    </div>

    <div className="founder-text-col fade-up-scroll">
      <div>
        <p className="ft-label">El fundador</p>
        <h3 className="ft-intro reveal-text">
          <span>Estrategia, talento humano<br />
          e <em>inteligencia artificial</em><br />
          en una sola conversación.</span>
        </h3>
        <p className="ft-body">
          Trabajo con empresas que saben que algo en su operación puede funcionar mejor, pero no saben exactamente qué ni cómo. Mi enfoque combina análisis organizacional con implementación real: no diagnósticos que quedan en un cajón, sino sistemas que tu equipo adopta y que generan resultados desde el primer mes.
        </p>
        <div className="ft-tags">
          <span className="ft-tag gold">Inteligencia Artificial</span>
          <span className="ft-tag">Automatización</span>
          <span className="ft-tag">Estrategia Empresarial</span>
          <span className="ft-tag">Gestión del Talento</span>
          <span className="ft-tag gold">N8n · LLMs</span>
          <span className="ft-tag">Consultoría de Procesos</span>
        </div>
      </div>
      <div className="ft-quote">
        <blockquote>"Tu momento de transformación ya existe dentro de tu empresa. Nosotros somos la fuerza que lo activa."</blockquote>
        <cite>José Ignacio Silva, Fundador de Kayron</cite>
      </div>
    </div>
  </div>

  <div className="block-manifesto">
    <div className="manifesto-deco fade-up-scroll"><div className="line"></div><div className="dot"></div><div className="line"></div></div>
    <div className="manifesto-center fade-up-scroll">
      <p className="manifesto-eyebrow">Lo que creemos</p>
      <p className="manifesto-text reveal-text">
        <span>Las empresas latinoamericanas merecen acceso<br />
        a las mismas herramientas que usan<br />
        <strong>las grandes corporaciones del mundo.</strong><br />
        <em>Esa brecha es nuestra razón de existir.</em></span>
      </p>
      <p className="manifesto-sub">Sin tecnología por moda. Sin diagnósticos guardados en carpetas. Cosas que funcionan, que tu equipo adopta, y que se miden desde el día uno.</p>
    </div>
    <div className="manifesto-deco"><div className="line"></div><div className="dot"></div><div className="line"></div></div>
  </div>

  <div className="block-values">
    <div className="values-header"><span>Cómo pensamos</span></div>
    <div className="values-grid stagger-parent">
      <div className="value-card stagger-item">
        <div className="value-n">01</div>
        <div className="value-title">Criterio antes que tecnología</div>
        <div className="value-rule"></div>
        <p className="value-desc">Cada herramienta tiene que justificarse con un resultado concreto. Nunca implementamos por moda o por tendencia.</p>
      </div>
      <div className="value-card stagger-item">
        <div className="value-n">02</div>
        <div className="value-title">Sistemas que viven y crecen</div>
        <div className="value-rule"></div>
        <p className="value-desc">Lo que construimos no termina en la entrega. Es un sistema que se actualiza, se mide y evoluciona con tu empresa.</p>
      </div>
      <div className="value-card stagger-item">
        <div className="value-n">03</div>
        <div className="value-title">Resultados desde el día uno</div>
        <div className="value-rule"></div>
        <p className="value-desc">Si no se puede medir, no cuenta. Cada implementación arranca con métricas claras y un punto de comparación real.</p>
      </div>
    </div>
  </div>

</section>


<section className="process" id="proceso">
  <div className="process-header">
    <h2>Cómo trabajamos</h2>
    <p>Eliminamos la fricción. Un camino claro desde el primer contacto hasta el resultado final.</p>
  </div>

  <div className="track" id="track">
    <div className="track-line-bg"></div>
    <div className="track-line-gold" id="goldLine"></div>

    <div className="step" id="step1">
      <div className="step-node"></div>
      <span className="step-index">/ 01</span>
      <h3 className="step-title">Conversación</h3>
      <p className="step-body">Hablamos 30 minutos, entendemos tu situación sin compromiso.</p>
    </div>
    <div className="step" id="step2">
      <div className="step-node"></div>
      <span className="step-index">/ 02</span>
      <h3 className="step-title">Diagnóstico</h3>
      <p className="step-body">Mapeamos tus procesos y te presentamos un plan concreto.</p>
    </div>
    <div className="step" id="step3">
      <div className="step-node"></div>
      <span className="step-index">/ 03</span>
      <h3 className="step-title">Ejecución</h3>
      <p className="step-body">Implementamos, medimos y ajustamos contigo.</p>
    </div>
  </div>
</section>


<section className="footer-cta fade-up-scroll" id="contacto">
  <h2 className="reveal-text"><span>Tu momento<br />es <em>ahora.</em></span></h2>
  <p>30 minutos. Sin compromiso. Con claridad sobre qué está frenando tu empresa y cómo resolverlo.</p>
  <a className="btn-primary" href="mailto:hola@kayron.consulting">Agenda una llamada →</a>
</section>

<footer>
  <p>© 2025 Kayron Consulting &amp; Engineering</p>
  <p>Ecuador</p>
</footer>





    </>
  );
}
