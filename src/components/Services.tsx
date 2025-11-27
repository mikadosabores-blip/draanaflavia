import serviceProcedure from "@/assets/service-procedure.jpg";
import beforeAfterLips from "@/assets/before-after-lips.jpg";
import beforeAfterFacial from "@/assets/before-after-facial-new.jpg";

const Services = () => {
  const treatmentsList = [
    { name: "Preenchimento Labial", icon: "ri-heart-pulse-line" },
    { name: "Protocolo de Botox + Vitaminas", icon: "ri-sparkling-line" },
    { name: "Harmonização Facial", icon: "ri-magic-line" },
    { name: "Rinomodelação", icon: "ri-focus-3-line" },
    { name: "Fios de PDO para Lifting Facial", icon: "ri-scissors-cut-line" },
    { name: "Bioestimulador de Colágeno", icon: "ri-drop-line" },
    { name: "Remoção de Pequenas Verrugas", icon: "ri-eraser-line" },
    { name: "Aplicação em Microvasos", icon: "ri-pulse-line" },
    { name: "Depilação a Laser", icon: "ri-flashlight-line" },
    { name: "Ultrassom Microfocado", icon: "ri-radio-button-line" },
  ];

  const services = [
    {
      title: "Preenchimento Labial",
      description: "Técnica avançada que proporciona volume e definição aos lábios de forma natural e harmoniosa.",
      image: beforeAfterLips,
    },
    {
      title: "Protocolo de Botox + Vitaminas",
      description: "Combinação exclusiva que suaviza linhas de expressão e rejuvenesce a pele.",
      image: serviceProcedure,
    },
    {
      title: "Harmonização Facial",
      description: "Tratamento completo que equilibra as proporções faciais, realçando seus traços naturais.",
      image: beforeAfterFacial,
    },
  ];

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-animated" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float-slower" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Excelência em Estética
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Conheça Nossos <span className="text-primary">Tratamentos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
        </div>

        {/* Glassmorphism Floating Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {treatmentsList.map((treatment, index) => (
            <div
              key={index}
              className="group animate-float"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: `${3 + (index % 3)}s`,
              }}
            >
              <div className="relative h-full p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-500 cursor-pointer group-hover:shadow-lg group-hover:shadow-primary/20">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <i className={`${treatment.icon} text-primary group-hover:text-black text-xl transition-colors duration-300`}></i>
                  </div>
                  <span className="text-white/80 text-sm font-medium leading-tight block group-hover:text-white transition-colors">
                    {treatment.name}
                  </span>
                </div>

                {/* Shine sweep */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-shine" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Services - Glassmorphism Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group animate-float"
              style={{
                animationDelay: `${index * 0.3}s`,
                animationDuration: `${4 + index}s`,
              }}
            >
              <div className="relative h-[450px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Glass card overlay */}
                  <div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.description}
                    </p>
                    <button
                      onClick={scrollToAppointment}
                      className="w-full bg-primary/90 backdrop-blur-sm py-3 rounded-xl font-semibold hover:bg-primary transition-all text-black flex items-center justify-center gap-2"
                    >
                      <span>Agendar</span>
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={scrollToAppointment}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold bg-white/5 backdrop-blur-md border border-white/20 hover:border-primary/50 hover:bg-white/10 transition-all text-white shadow-lg hover:shadow-primary/20"
          >
            <span>Agende Sua Avaliação Gratuita</span>
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>

      <style>{`
        .bg-gradient-animated {
          background: linear-gradient(-45deg, #000000, #1a1a1a, #0d0d0d, #000000);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        
        @keyframes floatSlower {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(20px) translateX(-30px); }
        }
        
        .animate-float-slower {
          animation: floatSlower 12s ease-in-out infinite;
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.2; transform: translate(-50%, -50%) scale(1.1); }
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .group-hover\\:animate-shine {
          animation: shine 1s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Services;
