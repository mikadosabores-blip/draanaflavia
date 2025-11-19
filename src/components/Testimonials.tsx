import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ana Carolina Silva",
      text: "A experiência na BelleVie foi transformadora! Os tratamentos faciais deixaram minha pele radiante e o atendimento foi impecável. Profissionais extremamente capacitados e atenciosos.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Mariana Santos",
      text: "Adoro a drenagem linfática! Sinto uma diferença incrível no meu corpo. A equipe é maravilhosa e o ambiente é super acolhedor. Recomendo muito!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Juliana Oliveira",
      text: "Os tratamentos são excepcionais! Me sinto renovada após cada sessão. A BelleVie superou todas as minhas expectativas. Equipe nota 10!",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-secondary"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                  ))}
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <p className="text-card-foreground font-bold text-xl">
                  {testimonials[currentIndex].name}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-card rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-primary hover:bg-secondary transition-all"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-card rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-primary hover:bg-secondary transition-all"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8 h-3" : "bg-muted w-3 h-3"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
