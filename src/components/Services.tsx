import serviceProcedure from "@/assets/service-procedure.jpg";
import beforeAfterLips from "@/assets/before-after-lips.jpg";
import beforeAfterFacial from "@/assets/before-after-facial-new.jpg";

const Services = () => {
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
    <section id="services" className="relative py-20 overflow-hidden bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      {/* Subtle gradient overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Excelência em Estética
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Conheça Nossos <span className="text-primary">Tratamentos</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Services - 3D Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group h-[400px] [perspective:1000px]"
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden border border-primary/20">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-primary/30">
                  <div className="h-full flex flex-col p-8 justify-center">
                    <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                    <p className="text-white/80 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <button
                      onClick={scrollToAppointment}
                      className="bg-primary py-3 px-6 rounded-full font-semibold hover:opacity-90 transition-all text-black"
                    >
                      Agendar Tratamento
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={scrollToAppointment}
            className="inline-flex items-center gap-3 bg-primary px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all text-black shadow-lg shadow-primary/30"
          >
            <span>Agende Sua Avaliação Gratuita</span>
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
