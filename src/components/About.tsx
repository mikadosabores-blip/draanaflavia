import draAnaFlaviaImage from "@/assets/dra-ana-flavia.jpg";

const About = () => {
  const stats = [
    { value: "10+", label: "Anos de experiência" },
    { value: "5000+", label: "Clientes Satisfeitos" },
    { value: "15+", label: "Tratamentos Exclusivos" },
    { value: "100%", label: "Satisfação Garantida" },
  ];

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={draAnaFlaviaImage}
                alt="Dra. Ana Flavia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/30 rounded-3xl -z-10"></div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-elegant">Sobre a Dra. Ana Flavia</h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              A <strong className="text-foreground font-elegant">Dra. Ana Flavia</strong> é uma profissional dedicada e apaixonada por estética e bem-estar. 
              Com mais de 10 anos de experiência, especializa-se em tratamentos estéticos personalizados que realçam 
              a beleza natural de cada cliente e promovem autoestima e confiança.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Sua filosofia de trabalho combina técnicas modernas e avançadas com produtos de alta qualidade premium, 
              oferecendo resultados visíveis e duradouros. A <span className="font-elegant">Dra. Ana Flavia</span> acredita que cada pessoa é única e merece 
              um atendimento personalizado que respeite suas necessidades individuais, sempre focando em tratamentos 
              seguros, eficazes e transformadores.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToAppointment}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl mt-6"
            >
              Conhecer a Clínica
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
