import serviceProcedure from "@/assets/service-procedure.jpg";
import beforeAfterLips from "@/assets/before-after-lips.jpg";
import beforeAfterFacial from "@/assets/before-after-facial-new.jpg";
const Services = () => {
  const treatmentsList = ["Preenchimento Labial", "Protocolo de Botox + Vitaminas", "Harmonização Facial", "Rinomodelação", "Fios de PDO para Lifting Facial", "Bioestimulador de Colágeno", "Remoção de Pequenas Verrugas", "Aplicação em Microvasos", "Depilação a Laser", "Ultrassom Microfocado"];
  const services = [{
    title: "Preenchimento Labial",
    description: "Técnica avançada que proporciona volume e definição aos lábios de forma natural e harmoniosa, realçando a beleza do seu sorriso com resultados duradouros.",
    image: beforeAfterLips
  }, {
    title: "Protocolo de Botox + Vitaminas",
    description: "Combinação exclusiva que suaviza linhas de expressão e rejuvenesce a pele, unindo os benefícios da toxina botulínica com a nutrição vitamínica profunda.",
    image: serviceProcedure
  }, {
    title: "Harmonização Facial",
    description: "Tratamento completo que equilibra as proporções faciais, realçando seus traços naturais e promovendo uma aparência harmoniosa e rejuvenescida.",
    image: beforeAfterFacial
  }];
  const scrollToAppointment = () => {
    const element = document.getElementById("appointment-form");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="services" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conheça Nossos Tratamentos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          
          {/* Lista de tratamentos */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {treatmentsList.map((treatment, index) => <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-primary text-lg"></i>
                  </div>
                  <span className="text-foreground font-medium">{treatment}</span>
                </div>)}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden bg-card">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" style={{
              imageRendering: 'crisp-edges'
            }} />
              </div>

              <div className="p-8">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 rounded-full mb-3 text-black-elegant">Facial</span>
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">{service.description}</p>
                <button onClick={scrollToAppointment} className="bg-primary px-6 py-3 rounded-full hover:opacity-90 transition-all shadow-md hover:shadow-lg text-black-elegant">
                  Agendar Tratamento
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;