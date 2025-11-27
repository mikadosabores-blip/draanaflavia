import { useEffect, useRef } from "react";
import serviceProcedure from "@/assets/service-procedure.jpg";
import beforeAfterLips from "@/assets/before-after-lips.jpg";
import beforeAfterFacial from "@/assets/before-after-facial-new.jpg";

const Services = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  // Animated particles background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative py-20 bg-black overflow-hidden">
      {/* Animated Particle Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

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

        {/* Hexagonal Grid */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {treatmentsList.map((treatment, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative w-[180px] h-[160px] flex items-center justify-center cursor-pointer transition-all duration-500 group-hover:scale-110">
                  {/* Hexagon shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 clip-hexagon border-2 border-primary/20 group-hover:border-primary transition-all duration-500">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/20 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center px-4">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <i className={`${treatment.icon} text-primary group-hover:text-black text-lg transition-colors duration-300`}></i>
                    </div>
                    <span className="text-white/90 text-sm font-medium leading-tight block group-hover:text-white transition-colors">
                      {treatment.name}
                    </span>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 clip-hexagon overflow-hidden">
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shine" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Services - 3D Cards */}
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

      <style>{`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
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
