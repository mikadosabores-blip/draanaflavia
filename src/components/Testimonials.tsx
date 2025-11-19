import { useState, useRef } from "react";
import clientElderly from "@/assets/client-elderly.jpg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const testimonials = [
    {
      name: "Maria da Conceição",
      text: "A experiência com a Dra. Ana Flávia foi transformadora! Os tratamentos faciais deixaram minha pele radiante e o atendimento foi impecável. Profissional extremamente capacitada e atenciosa.",
      image: clientElderly,
      audio: "/audio/testimonial-1.ogg",
    },
    {
      name: "Mariana Santos",
      text: "Adoro os tratamentos! Sinto uma diferença incrível. A Dra. Ana Flávia é maravilhosa e o ambiente é super acolhedor. Recomendo muito!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      audio: null, // Espaço para áudio
    },
    {
      name: "Juliana Oliveira",
      text: "Os tratamentos são excepcionais! Me sinto renovada após cada sessão. A Dra. Ana Flávia superou todas as minhas expectativas. Equipe nota 10!",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
      audio: null, // Espaço para áudio
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

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
                
                {/* Áudio do depoimento */}
                {testimonials[currentIndex].audio && (
                  <div className="mb-6 bg-muted/30 rounded-xl p-4">
                    <audio 
                      ref={audioRef}
                      src={testimonials[currentIndex].audio}
                      onEnded={handleAudioEnded}
                      className="hidden"
                    />
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={toggleAudio}
                        className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-90 transition-all"
                      >
                        <i className={`${isPlaying ? 'ri-pause-fill' : 'ri-play-fill'} text-xl`}></i>
                      </button>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div className={`h-full bg-primary rounded-full transition-all ${isPlaying ? 'w-full animate-pulse' : 'w-0'}`}></div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        <i className="ri-volume-up-line"></i>
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Ouça o depoimento completo
                    </p>
                  </div>
                )}

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
