const Services = () => {
  const services = [
    {
      title: "Drenagem Linfática",
      description:
        "Técnica especializada que estimula o sistema linfático, reduzindo inchaços, eliminando toxinas e promovendo bem-estar completo com resultados visíveis.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
    },
    {
      title: "Massagem Relaxante",
      description:
        "Experiência de relaxamento profundo que alivia tensões musculares, reduz o estresse e restaura o equilíbrio entre corpo e mente de forma natural.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
    },
    {
      title: "Tratamentos Faciais",
      description:
        "Protocolos personalizados de cuidados faciais que rejuvenescem, hidratam e revitalizam sua pele, revelando uma aparência radiante e saudável.",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=600&fit=crop",
    },
  ];

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conheça nossos tratamentos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <button
                  onClick={scrollToAppointment}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full hover:opacity-90 transition-all shadow-md hover:shadow-lg"
                >
                  Agendar Tratamento
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
