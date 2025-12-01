import serviceProcedure from "@/assets/service-procedure.jpg";
import beforeAfterLips from "@/assets/before-after-lips.jpg";
import harmonizacaoImage from "@/assets/before-after-harmonizacao-2.jpg";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const treatmentsList = [
    { name: "Preenchimento Labial", icon: "ri-heart-pulse-line" },
    { name: "Protocolo de Botox + Vitaminas", icon: "ri-sparkling-line" },
    { name: "Harmonização Facial", icon: "ri-magic-line" },
    { name: "Rinomodelação", icon: "ri-focus-3-line" },
    { name: "Fios de PDO para Lifting Facial", icon: "ri-arrow-up-double-line" },
    { name: "Bioestimulador de Colágeno", icon: "ri-bubble-chart-line" },
    { name: "Remoção de Pequenas Verrugas", icon: "ri-scissors-cut-line" },
    { name: "Aplicação em Microvasos", icon: "ri-drop-line" },
    { name: "Depilação a Laser", icon: "ri-flashlight-line" },
    { name: "Ultrassom Microfocado", icon: "ri-sound-module-line" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          treatmentsList.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Preenchimento Labial",
      description: "Técnica avançada que proporciona volume e definição aos lábios de forma natural e harmoniosa, realçando a beleza do seu sorriso com resultados duradouros.",
      image: beforeAfterLips,
      icon: "ri-heart-pulse-line",
      duration: "30-45 min",
      recovery: "Imediata",
    },
    {
      title: "Protocolo de Botox + Vitaminas",
      description: "Combinação exclusiva que suaviza linhas de expressão e rejuvenesce a pele, unindo os benefícios da toxina botulínica com a nutrição vitamínica profunda.",
      image: serviceProcedure,
      icon: "ri-sparkling-line",
      duration: "45-60 min",
      recovery: "24-48h",
    },
    {
      title: "Harmonização Facial",
      description: "Tratamento completo que equilibra as proporções faciais, realçando seus traços naturais e promovendo uma aparência harmoniosa e rejuvenescida.",
      image: harmonizacaoImage,
      icon: "ri-magic-line",
      duration: "60-90 min",
      recovery: "3-5 dias",
    },
  ];

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conheça Nossos Tratamentos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-12"></div>

          {/* Timeline Elegante */}
          <div ref={timelineRef} className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              {/* Linha central luminosa - esquerda no mobile, centro no desktop */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20 rounded-full shadow-[0_0_15px_hsl(var(--primary)/0.5)]" />
              
              {treatmentsList.map((treatment, index) => {
                const isLeft = index % 2 === 0;
                const isVisible = visibleItems.includes(index);
                
                return (
                  <div
                    key={index}
                    className={`relative flex items-center mb-6 md:${isLeft ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Conector luminoso */}
                    <div 
                      className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.8)] z-10 transition-all duration-500 ${
                        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`}
                    >
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                    </div>
                    
                    {/* Card do tratamento */}
                    <div
                      className={`w-full pl-12 md:pl-0 md:w-[45%] transition-all duration-700 ${
                        isVisible 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-10'
                      } ${!isLeft ? 'md:ml-auto' : ''}`}
                    >
                      <div className={`bg-card p-4 md:p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30 group ${
                        isLeft ? 'md:mr-8' : 'md:ml-8'
                      }`}>
                        <div className={`flex items-center gap-3 md:gap-4 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <i className={`${treatment.icon} text-primary text-lg md:text-xl`}></i>
                          </div>
                          <span className={`text-foreground font-medium text-base md:text-lg text-left ${isLeft ? '' : 'md:text-right'}`}>
                            {treatment.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3D Flip Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group h-[450px] [perspective:1000px]"
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full ${service.title === "Harmonização Facial" ? "object-contain md:object-cover" : "object-cover"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Front Content - Only at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-bold text-primary drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">{service.title}</h3>
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl overflow-hidden bg-card border border-primary/20 shadow-xl">
                  <div className="h-full flex flex-col p-8">
                    {/* Back Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <i className={`${service.icon} text-xl text-primary-foreground`}></i>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary/10 rounded-xl p-4 text-center">
                        <i className="ri-time-line text-primary text-xl mb-1"></i>
                        <p className="text-xs text-foreground/60 mb-1">Duração</p>
                        <p className="text-sm font-semibold text-foreground">{service.duration}</p>
                      </div>
                      <div className="bg-primary/10 rounded-xl p-4 text-center">
                        <i className="ri-heart-pulse-line text-primary text-xl mb-1"></i>
                        <p className="text-xs text-foreground/60 mb-1">Recuperação</p>
                        <p className="text-sm font-semibold text-foreground">{service.recovery}</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={scrollToAppointment}
                      className="w-full bg-primary py-4 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg text-primary-foreground flex items-center justify-center gap-2"
                    >
                      <span>Agendar Tratamento</span>
                      <i className="ri-calendar-check-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile hint */}
        <p className="text-center text-foreground/50 text-sm mt-8 md:hidden">
          <i className="ri-tap-line mr-2"></i>
          Toque nos cards para ver detalhes
        </p>
      </div>
    </section>
  );
};

export default Services;
