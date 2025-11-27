import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import beforeAfterLips from "@/assets/before-after-lips.jpg";
import beforeAfterLips2 from "@/assets/before-after-lips-2.jpg";
import beforeAfterNose from "@/assets/before-after-nose.jpg";
import beforeAfterFacial from "@/assets/before-after-facial.jpg";
import beforeAfterNose2 from "@/assets/before-after-nose-2.jpg";
import clinicPhoto from "@/assets/clinic-photo.jpg";
import draAnaProfessional from "@/assets/dra-ana-flavia-professional-2.jpg";
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
  const treatments: Treatment[] = [{
    id: 1,
    title: "Preenchimento Labial",
    category: "Facial",
    beforeImage: beforeAfterLips,
    afterImage: beforeAfterLips,
    description: "Resultado natural e harmonioso"
  }, {
    id: 2,
    title: "Preenchimento Labial",
    category: "Facial",
    beforeImage: beforeAfterLips2,
    afterImage: beforeAfterLips2,
    description: "Lábios mais volumosos e definidos"
  }, {
    id: 3,
    title: "Rinomodelação",
    category: "Facial",
    beforeImage: beforeAfterNose,
    afterImage: beforeAfterNose,
    description: "Harmonização nasal sem cirurgia"
  }, {
    id: 4,
    title: "Tratamento Anti-idade",
    category: "Facial",
    beforeImage: beforeAfterFacial,
    afterImage: beforeAfterFacial,
    description: "Rejuvenescimento facial completo"
  }, {
    id: 5,
    title: "Harmonização Nasal",
    category: "Facial",
    beforeImage: beforeAfterNose2,
    afterImage: beforeAfterNose2,
    description: "Resultado natural e elegante"
  }];
  const currentTreatment = treatments[selectedTreatment];
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(x / rect.width * 100, 100));
    setSliderPosition(percent);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(x / rect.width * 100, 100));
    setSliderPosition(percent);
  };
  const nextTreatment = () => {
    setSelectedTreatment(prev => (prev + 1) % treatments.length);
    setSliderPosition(50);
  };
  const prevTreatment = () => {
    setSelectedTreatment(prev => (prev - 1 + treatments.length) % treatments.length);
    setSliderPosition(50);
  };
  return <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transformações Reais
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja os resultados incríveis alcançados pelos nossos clientes com os tratamentos
            personalizados da <span className="font-elegant text-[#d4af37] text-3xl bg-slate-50 font-bold">Dra. Ana Flavia</span>
          </p>
        </div>

        {/* Carrossel de Cards */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex gap-6 transition-transform duration-300 ease-in-out px-4">
              {treatments.map((treatment, index) => <div key={treatment.id} className={`flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-300 ${selectedTreatment === index ? "scale-105" : "scale-100"}`} onClick={() => setSelectedTreatment(index)}>
                  <div className="bg-card rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all">
                    {/* Comparison Container */}
                    <div className="relative aspect-square select-none" onMouseMove={selectedTreatment === index ? handleMouseMove : undefined} onMouseDown={selectedTreatment === index ? handleMouseDown : undefined} onMouseUp={selectedTreatment === index ? handleMouseUp : undefined} onMouseLeave={selectedTreatment === index ? handleMouseUp : undefined} onTouchMove={selectedTreatment === index ? handleTouchMove : undefined} onTouchStart={selectedTreatment === index ? handleMouseDown : undefined} onTouchEnd={selectedTreatment === index ? handleMouseUp : undefined}>
                      {/* After Image */}
                      <img src={treatment.afterImage} alt="Depois" className="absolute inset-0 w-full h-full object-cover" draggable={false} />

                      {/* Before Image with Clip */}
                      <div className="absolute inset-0 overflow-hidden" style={{
                    clipPath: selectedTreatment === index ? `inset(0 ${100 - sliderPosition}% 0 0)` : `inset(0 50% 0 0)`
                  }}>
                        <img src={treatment.beforeImage} alt="Antes" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
                      </div>

                      {/* Slider Line - invisible but functional */}
                      {selectedTreatment === index && <div className="absolute top-0 bottom-0 w-0.5 bg-transparent cursor-ew-resize" style={{
                    left: `${sliderPosition}%`
                  }} />}

                      {/* Labels */}
                      <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs font-medium text-foreground">Antes</span>
                      </div>
                      <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs font-medium text-primary-foreground">Depois</span>
                      </div>
                    </div>

                    {/* Card Info */}
                    <div className="p-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 bg-[#d4af37] text-black-elegant">
                        {treatment.category}
                      </span>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {treatment.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{treatment.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button onClick={prevTreatment} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-background/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all z-10" aria-label="Tratamento anterior">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextTreatment} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-background/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all z-10" aria-label="Próximo tratamento">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {treatments.map((_, index) => <button key={index} onClick={() => {
            setSelectedTreatment(index);
            setSliderPosition(50);
          }} className={`h-2 rounded-full transition-all ${selectedTreatment === index ? "bg-primary w-8" : "bg-muted w-2"}`} aria-label={`Ver tratamento ${index + 1}`} />)}
          </div>
        </div>

        {/* Fotos em Leque */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative flex justify-center items-center h-[500px] md:h-[600px]">
            {/* Imagem Esquerda - Rotacionada */}
            <div className="absolute left-1/2 -translate-x-[85%] md:-translate-x-[110%] transform -rotate-6 hover:-rotate-3 transition-all duration-500 z-10 hover:z-30 group">
              <div className="w-56 md:w-72 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-background group-hover:shadow-primary/30 group-hover:scale-105 transition-all duration-500">
                <img 
                  src={clinicPhoto} 
                  alt="Dra. Ana Flávia realizando tratamento" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Imagem Central - Principal */}
            <div className="relative z-20 transform hover:scale-105 transition-all duration-500 group">
              <div className="w-64 md:w-80 lg:w-96 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/50 group-hover:border-primary group-hover:shadow-primary/40 transition-all duration-500">
                <img 
                  src={draAnaProfessional} 
                  alt="Dra. Ana Flávia - Profissional especializada em estética" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Etiqueta elegante */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full shadow-lg">
                <span className="font-elegant text-sm md:text-base font-semibold whitespace-nowrap">Dra. Ana Flávia</span>
              </div>
            </div>

            {/* Imagem Direita - Rotacionada */}
            <div className="absolute left-1/2 translate-x-[5%] md:translate-x-[30%] transform rotate-6 hover:rotate-3 transition-all duration-500 z-10 hover:z-30 group">
              <div className="w-56 md:w-72 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-background group-hover:shadow-primary/30 group-hover:scale-105 transition-all duration-500">
                <img 
                  src={clinicPhoto} 
                  alt="Dra. Ana Flávia em atendimento" 
                  className="w-full h-full object-cover object-left"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button onClick={() => {
          const element = document.getElementById("appointment-form");
          element?.scrollIntoView({
            behavior: "smooth"
          });
        }} className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
            Quero Minha Transformação
          </button>
        </div>
      </div>
    </section>;
};
export default BeforeAfter;