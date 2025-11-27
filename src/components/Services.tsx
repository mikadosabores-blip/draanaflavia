import { useState } from "react";
import serviceProcedure from "@/assets/service-procedure.jpg";
import beforeAfterLips from "@/assets/before-after-lips.jpg";
import beforeAfterFacial from "@/assets/before-after-facial-new.jpg";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const treatmentsList = [
    { name: "Preenchimento Labial", category: "facial" },
    { name: "Protocolo de Botox + Vitaminas", category: "facial" },
    { name: "Harmonização Facial", category: "facial" },
    { name: "Rinomodelação", category: "facial" },
    { name: "Fios de PDO para Lifting Facial", category: "facial" },
    { name: "Bioestimulador de Colágeno", category: "corporal" },
    { name: "Remoção de Pequenas Verrugas", category: "corporal" },
    { name: "Aplicação em Microvasos", category: "corporal" },
    { name: "Depilação a Laser", category: "corporal" },
    { name: "Ultrassom Microfocado", category: "facial" },
  ];

  const featuredServices = [
    {
      title: "Preenchimento Labial",
      description: "Técnica avançada que proporciona volume e definição aos lábios de forma natural e harmoniosa.",
      image: beforeAfterLips,
      category: "facial",
      highlight: "Mais Procurado",
    },
    {
      title: "Protocolo de Botox + Vitaminas",
      description: "Combinação exclusiva que suaviza linhas de expressão e rejuvenesce a pele.",
      image: serviceProcedure,
      category: "facial",
      highlight: "Exclusivo",
    },
    {
      title: "Harmonização Facial",
      description: "Tratamento completo que equilibra as proporções faciais, realçando seus traços naturais.",
      image: beforeAfterFacial,
      category: "facial",
      highlight: "Premium",
    },
  ];

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "facial", label: "Facial" },
    { id: "corporal", label: "Corporal" },
  ];

  const filteredTreatments = activeCategory === "todos" 
    ? treatmentsList 
    : treatmentsList.filter(t => t.category === activeCategory);

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Excelência em Estética
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Nossos <span className="text-primary">Tratamentos</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground/70 hover:bg-primary/10 border border-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Magazine Grid Layout */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          {/* Featured Large Card */}
          <div className="col-span-12 lg:col-span-7 group relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <img
                src={featuredServices[0].image}
                alt={featuredServices[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  {featuredServices[0].highlight}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                  {featuredServices[0].title}
                </h3>
                <p className="text-white/80 text-lg mb-6 max-w-md">
                  {featuredServices[0].description}
                </p>
                <button
                  onClick={scrollToAppointment}
                  className="bg-primary px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg text-primary-foreground"
                >
                  Agendar Consulta
                </button>
              </div>
            </div>
          </div>

          {/* Stacked Cards */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            {featuredServices.slice(1).map((service, index) => (
              <div
                key={index}
                className="group relative flex-1 rounded-3xl overflow-hidden min-h-[235px]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                    {service.highlight}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={scrollToAppointment}
                    className="bg-primary px-6 py-2 rounded-full font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-primary-foreground"
                  >
                    Agendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Treatments List - Editorial Style */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-xl border border-border/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Todos os Tratamentos
              </h3>
              <p className="text-foreground/60">
                Conheça nossa linha completa de procedimentos estéticos
              </p>
            </div>
            <div className="mt-4 lg:mt-0 text-primary font-semibold">
              {filteredTreatments.length} tratamentos disponíveis
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTreatments.map((treatment, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20"
                onClick={scrollToAppointment}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                    {treatment.name}
                  </h4>
                  <span className="text-xs text-foreground/50 uppercase tracking-wider">
                    {treatment.category}
                  </span>
                </div>
                <i className="ri-arrow-right-line text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all"></i>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl">
              <div className="text-left">
                <p className="text-foreground font-semibold">Não encontrou o que procura?</p>
                <p className="text-foreground/60 text-sm">Entre em contato para uma avaliação personalizada</p>
              </div>
              <button
                onClick={scrollToAppointment}
                className="bg-primary px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-md whitespace-nowrap text-primary-foreground"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
