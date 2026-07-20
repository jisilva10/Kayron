import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FrenaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Procesos',
      quote: '"Tu equipo hace en 4 horas lo que podría hacerse en 20 minutos."',
      response: 'Mapeamos dónde se pierde el tiempo y construimos los flujos que lo resuelven. Tu equipo deja de operar en modo supervivencia.'
    },
    {
      title: 'Datos',
      quote: '"Tienes datos pero nadie los lee ni los entiende."',
      response: 'Convertimos esa información en dashboards claros y reportes automáticos. Las decisiones se toman con certeza, no con el estómago.'
    },
    {
      title: 'Inteligencia Artificial',
      quote: '"Escuchaste hablar de IA pero no sabes por dónde empezar."',
      response: 'Identificamos dónde la IA genera impacto real en tu operación y la implementamos sin fricción. Sin curvas de aprendizaje eternas.'
    },
    {
      title: 'Competencia',
      quote: '"Tu competencia ya está automatizando. Tú todavía no."',
      response: 'Diagnóstico en menos de una semana. Primeros sistemas funcionando en menos de un mes. Sin compromisos innecesarios.'
    }
  ];

  return (
    <section className="frena" id="servicios">
      <div className="frena-header fade-up-scroll">
        <h2 className="reveal-text"><span>Lo que frena a tu empresa.</span></h2>
        <p>Lo identificamos. Lo resolvemos. Lo medimos.</p>
      </div>

      <div className="stagger-parent relative mb-12 flex gap-8 border-b border-border/50 overflow-x-auto no-scrollbar">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn relative px-8 py-4 text-[13px] font-sans tracking-[0.18em] uppercase transition-all whitespace-nowrap outline-none bg-transparent border-none cursor-pointer stagger-item rounded-t-xl ${
              activeTab === index 
                ? 'text-dark font-bold bg-dark/[0.03]' 
                : 'text-light opacity-70 hover:opacity-100 hover:text-dark hover:bg-dark/[0.01]'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
            {activeTab === index && (
              <motion.div
                layoutId="frena-tab-indicator"
                className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-gold"
                transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="tab-panels relative min-h-[280px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="tab-panel active"
            style={{ display: 'grid' }}
          >
            <p className="panel-quote text-[28px] font-cormorant leading-tight text-dark">{tabs[activeTab].quote}</p>
            <div className="panel-right">
              <p className="panel-label text-gold text-xs tracking-widest uppercase mb-4">Nuestra respuesta</p>
              <p className="panel-response text-mid text-base leading-relaxed">{tabs[activeTab].response}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FrenaSection;
