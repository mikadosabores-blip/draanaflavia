const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-muted/40 to-muted/60 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <h3
              className="text-3xl font-bold text-primary mb-4"
              style={{ fontFamily: "Pacifico, serif" }}
            >
              Dra. Ana Flavia
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Transformando vidas através da beleza e bem-estar com tratamentos exclusivos e
              personalizados. Profissional dedicada com mais de 10 anos de experiência.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-md"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-md"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-md"
              >
                <i className="ri-whatsapp-line text-lg"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-md"
              >
                <i className="ri-youtube-fill text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Drenagem Linfática</li>
              <li className="text-muted-foreground">Massagem Relaxante</li>
              <li className="text-muted-foreground">Tratamentos Faciais</li>
              <li className="text-muted-foreground">Limpeza de Pele</li>
              <li className="text-muted-foreground">Peeling Químico</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-primary text-xl flex-shrink-0 mt-1"></i>
                <span className="text-muted-foreground">
                  Rua das Flores, 123<br />
                  Centro, São Paulo - SP<br />
                  CEP: 01234-567
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-line text-primary text-xl"></i>
                <span className="text-muted-foreground">(11) 98765-4321</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-line text-primary text-xl"></i>
                <span className="text-muted-foreground">contato@bellevie.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-time-line text-primary text-xl"></i>
                <span className="text-muted-foreground">Seg - Sex: 9h às 19h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12 rounded-3xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976545725937!2d-46.65844268502207!3d-23.561414984682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Dra. Ana Flavia"
            className="border-0"
          ></iframe>
        </div>

        <div className="border-t border-border pt-8 text-center">
        <p className="text-muted-foreground">
          © 2024 Dra. Ana Flavia. Todos os direitos reservados.
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
