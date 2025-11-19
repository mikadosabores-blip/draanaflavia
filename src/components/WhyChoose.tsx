const WhyChoose = () => {
  const features = [
    {
      icon: "ri-star-line",
      title: "Excelência e Profissionalismo",
      description:
        "Nossos tratamentos seguem os mais altos padrões de qualidade, utilizando técnicas modernas e produtos premium para garantir resultados exclusivos.",
    },
    {
      icon: "ri-team-line",
      title: "Equipe Altamente Capacitada",
      description:
        "Profissionais certificados e experientes, em constante atualização, prontos para oferecer o melhor atendimento e cuidado personalizado.",
    },
    {
      icon: "ri-heart-pulse-line",
      title: "Atendimento que Gera Resultados",
      description:
        "Cada tratamento é personalizado para suas necessidades específicas, garantindo resultados visíveis e duradouros que transformam sua autoestima.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por que escolher a Dra. Ana Flávia
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          
          {/* Vídeo de apresentação */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-black rounded-3xl shadow-2xl overflow-hidden">
              <video 
                controls 
                className="w-full aspect-video object-cover"
              >
                <source src="/video/why-choose.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <i className={`${feature.icon} text-primary-foreground text-3xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
