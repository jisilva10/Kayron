import { AnimatedTabs } from "@/components/ui/animated-tabs"

const AnimatedTabsDemo = () => {
    return (
        <section className="frena border-t border-border pt-24 px-14 pb-14 bg-cream">
            <div className="frena-header mb-16">
                <h2 className="font-cormorant font-medium text-4xl md:text-5xl lg:text-6xl text-dark tracking-tight leading-none mb-3">
                    Lo que frena a tu empresa.
                </h2>
                <p className="font-sans font-light text-[11px] tracking-[0.25em] text-light uppercase">
                    Los desafíos que resolvemos
                </p>
            </div>
            
            <AnimatedTabs tabs={[
                {
                    id: "tab1",
                    label: "OPERACIONES LENTAS",
                    content: (
                        <div className="flex flex-col gap-y-6 pt-8 w-full max-w-4xl">
                            <h2 className="text-3xl md:text-4xl font-cormorant italic text-dark border-l-2 border-gold pl-6">
                                "Perdemos demasiado tiempo en procesos manuales y repetitivos."
                            </h2>
                            <div className="pl-6">
                                <p className="text-[9px] font-sans font-light tracking-[0.35em] text-gold uppercase mb-4">
                                    NUESTRA RESPUESTA
                                </p>
                                <p className="text-base font-sans font-light text-mid leading-relaxed">
                                    Automatizamos flujos de trabajo complejos, conectando tus sistemas existentes para eliminar cuellos de botella y reducir el error humano al mínimo.
                                </p>
                            </div>
                        </div>
                    ),
                },
                {
                    id: "tab2",
                    label: "DATOS AISLADOS",
                    content: (
                        <div className="flex flex-col gap-y-6 pt-8 w-full max-w-4xl">
                            <h2 className="text-3xl md:text-4xl font-cormorant italic text-dark border-l-2 border-gold pl-6">
                                "Tenemos mucha información, pero no sabemos cómo usarla."
                            </h2>
                            <div className="pl-6">
                                <p className="text-[9px] font-sans font-light tracking-[0.35em] text-gold uppercase mb-4">
                                    NUESTRA RESPUESTA
                                </p>
                                <p className="text-base font-sans font-light text-mid leading-relaxed">
                                    Implementamos soluciones de Inteligencia Artificial que estructuran, analizan y extraen valor real de tus datos para que tomes decisiones informadas y estratégicas.
                                </p>
                            </div>
                        </div>
                    ),
                },
                {
                    id: "tab3",
                    label: "ESCALABILIDAD",
                    content: (
                        <div className="flex flex-col gap-y-6 pt-8 w-full max-w-4xl">
                            <h2 className="text-3xl md:text-4xl font-cormorant italic text-dark border-l-2 border-gold pl-6">
                                "Crecer significa aumentar costos operativos de forma insostenible."
                            </h2>
                            <div className="pl-6">
                                <p className="text-[9px] font-sans font-light tracking-[0.35em] text-gold uppercase mb-4">
                                    NUESTRA RESPUESTA
                                </p>
                                <p className="text-base font-sans font-light text-mid leading-relaxed">
                                    Diseñamos infraestructuras tecnológicas escalables que permiten multiplicar tus operaciones sin necesidad de multiplicar proporcionalmente tus recursos ni tu equipo.
                                </p>
                            </div>
                        </div>
                    )
                }
            ]} />
        </section>
    );
}

export { AnimatedTabsDemo }
