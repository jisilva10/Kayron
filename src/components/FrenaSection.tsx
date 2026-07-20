import React, { useState } from 'react';

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

      <div className="tabs-nav stagger-parent">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn stagger-item ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-panels">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-panel ${activeTab === index ? 'active' : ''}`}
            style={{ display: activeTab === index ? 'grid' : 'none' }}
          >
            <p className="panel-quote">{tab.quote}</p>
            <div className="panel-right">
              <p className="panel-label">Nuestra respuesta</p>
              <p className="panel-response">{tab.response}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrenaSection;
