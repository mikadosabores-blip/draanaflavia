import { useState } from "react";
import beforeAfterNose from "@/assets/before-after-nose.jpg";
import beforeAfterFacial from "@/assets/before-after-facial.jpg";
import beforeAfterNose2 from "@/assets/before-after-nose-2.jpg";
import beforeAfterEyesNew from "@/assets/before-after-eyes-real-2.png";
import beforeAfterCheeksNew from "@/assets/before-after-nose-new.png";
import beforeAfterJawlineNew from "@/assets/before-after-jawline-new.png";
import beforeAfterChinNew from "@/assets/before-after-chin-new.png";
import beforeAfterLipsNew from "@/assets/before-after-lips-new.png";

interface TreatmentArea {
  id: string;
  name: string;
  description: string;
  position: { x: number; y: number };
  transformations: {
    title: string;
    image: string;
    result: string;
  }[];
}

const FacialMap = () => {
  const [selectedArea, setSelectedArea] = useState<TreatmentArea | null>(null);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  const treatmentAreas: TreatmentArea[] = [
    {
      id: "forehead",
      name: "Testa",
      description: "Botox e suavização de rugas",
      position: { x: 50, y: 15 },
      transformations: [
        {
          title: "Botox Preventivo",
          image: beforeAfterFacial,
          result: "Rugas suavizadas naturalmente"
        }
      ]
    },
    {
      id: "eyes",
      name: "Olhos",
      description: "Tratamento de olheiras e pés de galinha",
      position: { x: 50, y: 32 },
      transformations: [
        {
          title: "Rejuvenescimento Ocular",
          image: beforeAfterEyesNew,
          result: "Olhar mais jovem e descansado"
        }
      ]
    },
    {
      id: "nose",
      name: "Nariz",
      description: "Rinomodelação sem cirurgia",
      position: { x: 50, y: 48 },
      transformations: [
        {
          title: "Rinomodelação",
          image: beforeAfterNose,
          result: "Perfil harmonioso e elegante"
        },
        {
          title: "Correção de Dorso",
          image: beforeAfterNose2,
          result: "Nariz mais definido"
        }
      ]
    },
    {
      id: "cheeks",
      name: "Maçãs do Rosto",
      description: "Preenchimento e contorno facial",
      position: { x: 25, y: 52 },
      transformations: [
        {
          title: "Preenchimento Malar",
          image: beforeAfterCheeksNew,
          result: "Contorno facial definido"
        }
      ]
    },
    {
      id: "lips",
      name: "Lábios",
      description: "Preenchimento labial com ácido hialurônico",
      position: { x: 50, y: 68 },
      transformations: [
        {
          title: "Preenchimento Labial",
          image: beforeAfterLipsNew,
          result: "Lábios mais volumosos e definidos"
        }
      ]
    },
    {
      id: "chin",
      name: "Queixo",
      description: "Harmonização e definição do queixo",
      position: { x: 50, y: 85 },
      transformations: [
        {
          title: "Transformação de Queixo",
          image: beforeAfterChinNew,
          result: "Perfil mais harmonioso"
        }
      ]
    },
    {
      id: "jawline",
      name: "Mandíbula",
      description: "Definição de contorno mandibular",
      position: { x: 75, y: 65 },
      transformations: [
        {
          title: "Definição de Contorno Mandibular",
          image: beforeAfterJawlineNew,
          result: "Contorno facial esculpido"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transformações Reais
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Clique nas áreas do rosto para explorar os tratamentos e resultados da{" "}
            <span className="font-elegant text-primary text-2xl font-bold">Dra. Ana Flávia Mendes</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Face Map */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            {/* Face Silhouette */}
            <div className="relative aspect-[3/4] w-full">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/20 rounded-[40%_40%_35%_35%] shadow-xl"></div>
              
              {/* Face Outline SVG */}
              <svg 
                viewBox="0 0 100 130" 
                className="absolute inset-0 w-full h-full"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(212, 175, 55, 0.2))' }}
              >
                {/* Face shape */}
                <path
                  d="M50 5 
                     C75 5 85 25 85 45 
                     C85 65 80 85 70 100
                     C63 110 55 115 50 115
                     C45 115 37 110 30 100
                     C20 85 15 65 15 45
                     C15 25 25 5 50 5Z"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                  className="animate-pulse"
                />
                
                {/* Decorative lines */}
                <ellipse cx="50" cy="35" rx="25" ry="8" fill="none" stroke="hsl(var(--primary) / 0.3)" strokeWidth="0.3" />
                <line x1="50" y1="40" x2="50" y2="75" stroke="hsl(var(--primary) / 0.2)" strokeWidth="0.3" strokeDasharray="1,2" />
              </svg>

              {/* Interactive Hotspots */}
              {treatmentAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedArea(area)}
                  onMouseEnter={() => setHoveredArea(area.id)}
                  onMouseLeave={() => setHoveredArea(null)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-10 group`}
                  style={{ 
                    left: `${area.position.x}%`, 
                    top: `${area.position.y}%` 
                  }}
                >
                  {/* Pulse Ring */}
                  <span className={`absolute inset-0 rounded-full bg-primary/30 animate-ping ${hoveredArea === area.id || selectedArea?.id === area.id ? 'opacity-100' : 'opacity-50'}`}></span>
                  
                  {/* Main Dot */}
                  <span className={`relative flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full transition-all duration-300 ${
                    selectedArea?.id === area.id 
                      ? 'bg-primary scale-150 shadow-lg shadow-primary/50' 
                      : hoveredArea === area.id 
                        ? 'bg-primary scale-125' 
                        : 'bg-primary/70 hover:bg-primary'
                  }`}>
                    <span className="absolute w-2 h-2 bg-background rounded-full"></span>
                  </span>

                  {/* Tooltip */}
                  <span className={`absolute left-1/2 -translate-x-1/2 -top-12 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    hoveredArea === area.id || selectedArea?.id === area.id
                      ? 'opacity-100 translate-y-0 bg-primary text-primary-foreground shadow-lg' 
                      : 'opacity-0 translate-y-2 bg-card text-foreground'
                  }`}>
                    {area.name}
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-inherit rotate-45"></span>
                  </span>
                </button>
              ))}
            </div>

            {/* Instructions */}
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                Toque nos pontos para explorar
              </p>
            </div>
          </div>

          {/* Selected Area Details */}
          <div className="flex-1 w-full">
            {selectedArea ? (
              <div className="animate-fade-in">
                {/* Area Header */}
                <div className="mb-8">
                  <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-3 bg-primary/20 text-primary">
                    Área selecionada
                  </span>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {selectedArea.name}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {selectedArea.description}
                  </p>
                </div>

                {/* Transformations Grid */}
                <div className="grid gap-6">
                  {selectedArea.transformations.map((transformation, index) => (
                    <div 
                      key={index}
                      className="bg-card rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="relative md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
                          <img 
                            src={transformation.image} 
                            alt={transformation.title}
                            className="w-full h-full object-contain md:object-cover object-center"
                          />
                          
                          {/* Labels */}
                          <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-xs font-medium text-foreground">Antes</span>
                          </div>
                          <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-xs font-medium text-primary-foreground">Depois</span>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="p-6 md:w-1/2 flex flex-col justify-center">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-primary text-primary-foreground w-fit">
                            {selectedArea.name}
                          </span>
                          <h4 className="text-xl font-bold text-foreground mb-2">
                            {transformation.title}
                          </h4>
                          <p className="text-muted-foreground mb-4">
                            {transformation.result}
                          </p>
                          
                          {/* CTA */}
                          <button 
                            onClick={() => {
                              const element = document.getElementById("appointment-form");
                              element?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group/btn"
                          >
                            Quero esse resultado
                            <i className="ri-arrow-right-line group-hover/btn:translate-x-1 transition-transform"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Empty State */
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-pulse">
                  <i className="ri-cursor-line text-4xl text-primary"></i>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Explore as transformações
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Selecione uma área do rosto ao lado para ver os resultados incríveis dos tratamentos
                </p>
                
                {/* Quick Access Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {treatmentAreas.slice(0, 4).map((area) => (
                    <button
                      key={area.id}
                      onClick={() => setSelectedArea(area)}
                      className="px-4 py-2 rounded-full text-sm border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {area.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => {
              const element = document.getElementById("appointment-form");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:shadow-primary/30"
          >
            Quero Minha Transformação
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FacialMap;
