import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import beforeFacial1 from "@/assets/before-facial-1.jpg";
import afterFacial1 from "@/assets/after-facial-1.jpg";
import beforeBody1 from "@/assets/before-body-1.jpg";
import afterBody1 from "@/assets/after-body-1.jpg";
import beforeFacial2 from "@/assets/before-facial-2.jpg";
import afterFacial2 from "@/assets/after-facial-2.jpg";

interface Treatment {
  id: number;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

const BeforeAfter = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const treatments: Treatment[] = [
    {
      id: 1,
      title: "Tratamento Facial Rejuvenescedor",
      category: "Facial",
      beforeImage: beforeFacial1,
      afterImage: afterFacial1,
      description: "Resultado após 3 sessões de tratamento facial personalizado",
    },
    {
      id: 2,
      title: "Drenagem Linfática Corporal",
      category: "Corporal",
      beforeImage: beforeBody1,
      afterImage: afterBody1,
      description: "Transformação após 8 sessões de drenagem linfática",
    },
    {
      id: 3,
      title: "Tratamento Anti-idade",
      category: "Facial",
      beforeImage: beforeFacial2,
      afterImage: afterFacial2,
      description: "Revitalização completa após protocolo anti-idade",
    },
  ];

  const currentTreatment = treatments[selectedTreatment];

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const nextTreatment = () => {
    setSelectedTreatment((prev) => (prev + 1) % treatments.length);
    setSliderPosition(50);
  };

  const prevTreatment = () => {
    setSelectedTreatment((prev) => (prev - 1 + treatments.length) % treatments.length);
    setSliderPosition(50);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transformações Reais
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja os resultados incríveis alcançados pelos nossos clientes com os tratamentos
            personalizados da Dra. Ana Flavia
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Comparison Slider */}
          <div className="relative bg-card rounded-3xl shadow-2xl overflow-hidden mb-8">
            <div
              className="relative aspect-square md:aspect-video select-none"
              onMouseMove={handleMouseMove}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
            >
              {/* After Image (Background) */}
              <img
                src={currentTreatment.afterImage}
                alt="Depois"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />

              {/* Before Image (Overlay with clip) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={currentTreatment.beforeImage}
                  alt="Antes"
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />
              </div>

              {/* Slider Line and Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center">
                  <div className="flex gap-1">
                    <ChevronLeft className="w-4 h-4 text-primary-foreground" />
                    <ChevronRight className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-foreground">Antes</span>
              </div>
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-primary-foreground">Depois</span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTreatment}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Tratamento anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTreatment}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Próximo tratamento"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Treatment Info */}
          <div className="text-center mb-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-accent/50 rounded-full text-sm font-medium text-accent-foreground mb-3">
              {currentTreatment.category}
            </span>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {currentTreatment.title}
            </h3>
            <p className="text-muted-foreground">{currentTreatment.description}</p>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-4">
            {treatments.map((treatment, index) => (
              <button
                key={treatment.id}
                onClick={() => {
                  setSelectedTreatment(index);
                  setSliderPosition(50);
                }}
                className={`relative w-24 h-24 rounded-2xl overflow-hidden transition-all ${
                  selectedTreatment === index
                    ? "ring-4 ring-primary shadow-lg scale-110"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={treatment.afterImage}
                  alt={treatment.title}
                  className="w-full h-full object-cover"
                />
                {selectedTreatment === index && (
                  <div className="absolute inset-0 bg-primary/20"></div>
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => {
                const element = document.getElementById("appointment-form");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Quero Minha Transformação
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
