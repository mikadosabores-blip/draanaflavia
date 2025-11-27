import { useState, useRef, useEffect } from "react";
import clientElderly from "@/assets/client-elderly-elegant.jpg";

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Maria da Conceição",
      text: "A experiência com a Dra. Ana Flávia foi transformadora! Os tratamentos faciais deixaram minha pele radiante e o atendimento foi impecável. Profissional extremamente capacitada e atenciosa.",
      image: clientElderly,
      audio: "/audio/testimonial-1.ogg",
      treatment: "Tratamento Facial",
    },
    {
      name: "Mariana Santos",
      text: "Adoro os tratamentos! Sinto uma diferença incrível. A Dra. Ana Flávia é maravilhosa e o ambiente é super acolhedor. Recomendo muito!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      audio: null,
      treatment: "Harmonização Facial",
    },
    {
      name: "Juliana Oliveira",
      text: "Os tratamentos são excepcionais! Me sinto renovada após cada sessão. A Dra. Ana Flávia superou todas as minhas expectativas. Equipe nota 10!",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
      audio: null,
      treatment: "Bioestimulador de Colágeno",
    },
    {
      name: "Patrícia Lima",
      text: "Resultados incríveis com o preenchimento labial! Ficou super natural e elegante. A Dra. Ana Flávia tem mãos de artista!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      audio: null,
      treatment: "Preenchimento Labial",
    },
    {
      name: "Fernanda Costa",
      text: "Fiz rinomodelação e estou apaixonada! Sem cirurgia e com resultado perfeito. Profissionalismo e cuidado em cada detalhe.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      audio: null,
      treatment: "Rinomodelação",
    },
  ];

  // Duplicar para criar loop infinito
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const openTestimonial = (index: number) => {
    setSelectedTestimonial(index % testimonials.length);
    setIsPaused(true);
  };

  const closeTestimonial = () => {
    setSelectedTestimonial(null);
    setIsPlaying(false);
    setIsPaused(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Histórias reais de transformação e satisfação
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div 
          ref={scrollRef}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => !selectedTestimonial && setIsPaused(false)}
        >
          <div 
            className={`flex gap-6 ${isPaused ? '' : 'animate-scroll'}`}
            style={{
              width: 'fit-content',
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                onClick={() => openTestimonial(index)}
                className="flex-shrink-0 w-80 bg-gradient-to-br from-card via-card to-primary/5 rounded-2xl shadow-xl p-6 cursor-pointer group hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-primary/20 hover:border-primary/50"
              >
                {/* Avatar e Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/40 rounded-full blur-md group-hover:blur-lg transition-all"></div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative w-16 h-16 rounded-full object-cover border-3 border-primary group-hover:border-primary transition-all duration-300 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
                      <i className="ri-double-quotes-r text-xs text-primary-foreground"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors text-lg">
                      {testimonial.name}
                    </h4>
                    <span className="text-sm text-primary font-semibold">
                      {testimonial.treatment}
                    </span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-lg drop-shadow-sm"></i>
                  ))}
                </div>

                {/* Text Preview */}
                <p className="text-foreground/80 text-sm leading-relaxed line-clamp-3 mb-4">
                  "{testimonial.text}"
                </p>

                {/* Click indicator */}
                <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:translate-x-2 transition-transform">
                  <span>Ver depoimento completo</span>
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de Depoimento Expandido */}
      {selectedTestimonial !== null && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeTestimonial}
        >
          <div 
            className="bg-card rounded-3xl shadow-2xl max-w-2xl w-full p-8 lg:p-12 relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeTestimonial}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-all hover:rotate-90 duration-300"
            >
              <i className="ri-close-line text-xl text-foreground"></i>
            </button>

            {/* Content */}
            <div className="flex flex-col items-center text-center">
              {/* Avatar with glow */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
                <img
                  src={testimonials[selectedTestimonial].image}
                  alt={testimonials[selectedTestimonial].name}
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-primary shadow-xl"
                />
              </div>

              {/* Name and Treatment */}
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {testimonials[selectedTestimonial].name}
              </h3>
              <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-6 bg-primary/20 text-primary">
                {testimonials[selectedTestimonial].treatment}
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-2xl"></i>
                ))}
              </div>

              {/* Full Text */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 italic">
                "{testimonials[selectedTestimonial].text}"
              </p>

              {/* Audio Player */}
              {testimonials[selectedTestimonial].audio && (
                <div className="w-full bg-muted/30 rounded-xl p-6">
                  <audio 
                    ref={audioRef}
                    src={testimonials[selectedTestimonial].audio}
                    onEnded={handleAudioEnded}
                    className="hidden"
                  />
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={toggleAudio}
                      className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-all shadow-lg shadow-primary/30"
                    >
                      <i className={`${isPlaying ? 'ri-pause-fill' : 'ri-play-fill'} text-2xl`}></i>
                    </button>
                    <div className="flex-1">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ${isPlaying ? 'w-full' : 'w-0'}`}></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {isPlaying ? 'Reproduzindo depoimento...' : 'Ouça o depoimento completo'}
                      </p>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isPlaying ? 'bg-primary/20' : 'bg-muted'}`}>
                      <i className={`ri-volume-up-line ${isPlaying ? 'text-primary animate-pulse' : 'text-muted-foreground'}`}></i>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-320px * ${testimonials.length} - 24px * ${testimonials.length}));
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .border-3 {
          border-width: 3px;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
