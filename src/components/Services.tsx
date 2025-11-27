import serviceProcedure from "@/assets/service-procedure.jpg";
import beforeAfterLips from "@/assets/before-after-lips.jpg";
import beforeAfterFacial from "@/assets/before-after-facial-new.jpg";

const Services = () => {
  const treatmentsList = [
    "Preenchimento Labial",
    "Protocolo de Botox + Vitaminas",
    "Harmonização Facial",
    "Rinomodelação",
    "Fios de PDO para Lifting Facial",
    "Bioestimulador de Colágeno",
    "Remoção de Pequenas Verrugas",
    "Aplicação em Microvasos",
    "Depilação a Laser",
    "Ultrassom Microfocado",
  ];

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
      image: beforeAfterFacial,
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
    <section id="services" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conheça Nossos Tratamentos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>

          {/* Lista de tratamentos */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {treatmentsList.map((treatment, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-primary text-lg"></i>
                  </div>
                  <span className="text-foreground font-medium">{treatment}</span>
                </div>
              ))}
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
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Front Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center mb-4 shadow-lg">
                      <i className={`${service.icon} text-2xl text-primary-foreground`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70 text-sm flex items-center gap-2">
                      <i className="ri-hand-coin-line"></i>
                      Passe o mouse para ver detalhes
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <i className="ri-arrow-right-up-line text-primary text-lg"></i>
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl overflow-hidden bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20 shadow-xl">
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

                  {/* Decorative Elements */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
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
