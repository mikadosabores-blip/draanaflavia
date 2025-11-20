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
              className="text-3xl font-bold text-primary mb-4 font-elegant"
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
            <h4 className="text-lg font-bold text-foreground mb-4">Nossos Tratamentos</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Preenchimento Labial</li>
              <li className="text-muted-foreground">Harmonização Facial</li>
              <li className="text-muted-foreground">Rinomodelação</li>
              <li className="text-muted-foreground">Fios de PDO</li>
              <li className="text-muted-foreground">Depilação a Laser</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-primary text-xl flex-shrink-0 mt-1"></i>
                <span className="text-muted-foreground">
                  Rua Carlinhos José Ribeiro, Nº 187<br />
                  Vila Jaiara - Anápolis, GO
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-line text-primary text-xl"></i>
                <a href="https://wa.me/5562991408248" className="text-muted-foreground hover:text-primary transition-colors">
                  (62) 99140-8248
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-line text-primary text-xl"></i>
                <a href="mailto:anaflaviamendesferreira16@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  anaflaviamendesferreira16@gmail.com
                </a>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8076649828434!2d-48.95632492491!3d-16.32866193827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a0ba5e8b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sR.%20Carlinhos%20Jos%C3%A9%20Ribeiro%2C%20187%20-%20Vila%20Jaiara%2C%20An%C3%A1polis%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Dra. Ana Flávia - Vila Jaiara, Anápolis"
            className="border-0"
          ></iframe>
        </div>

        <div className="border-t border-border pt-8 text-center">
        <p className="text-muted-foreground">
          © 2024 <span className="font-elegant">Dra. Ana Flavia</span>. Todos os direitos reservados.
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
