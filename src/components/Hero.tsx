import { useState } from "react";
import { toast } from "sonner";
import heroBackground from "@/assets/clinic-hero-bg.jpg";
const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      toast.error("Por favor, preencha todos os campos!");
      return;
    }

    // Formatar a mensagem para WhatsApp
    const message = `*Novo Agendamento - Dra. Ana Flávia Mendes*%0A%0A*Nome:* ${formData.name}%0A*Email:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A*Data:* ${formData.date}%0A*Horário:* ${formData.time}`;

    // Abrir WhatsApp
    const whatsappUrl = `https://wa.me/5562991408248?text=${message}`;
    window.open(whatsappUrl, '_blank');
    toast.success("Agendamento enviado! Você será redirecionado para o WhatsApp.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: ""
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center pt-20 bg-cover bg-center" style={{
    backgroundImage: `url('${heroBackground}')`
  }}>
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="lg:text-6xl font-bold leading-tight bg-[#d9d9d9]/0 font-serif text-[#d4af37] px-0 my-[38px] mx-0 py-0 text-4xl">





Transforme Sua Beleza com Tratamentos Exclusivos</h2>
              <p className="text-lg leading-relaxed font-medium text-black-elegant py-0">Descubra o poder da estética profissional com tratamentos personalizados que realçam sua beleza natural e promovem bem-estar completo.</p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <i className="ri-award-line text-primary text-xl"></i>
                </div>
                <span className="text-foreground font-medium">+10 anos de experiência</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <i className="ri-shield-check-line text-primary text-xl"></i>
                </div>
                <span className="text-foreground font-medium">100% seguro</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <i className="ri-user-heart-line text-primary text-xl"></i>
                </div>
                <span className="text-foreground font-medium">Atendimento personalizado</span>
              </div>
            </div>

            <button onClick={() => {
            const element = document.getElementById("appointment-form");
            element?.scrollIntoView({
              behavior: "smooth"
            });
          }} className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
              Agendar Agora
            </button>
          </div>

          <div id="appointment-form" className="bg-card backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-10 border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Agende Sua Consulta</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Nome Completo
                </label>
                <input required type="text" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Seu nome" />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">E-mail</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="seu@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Telefone</label>
                <input required type="tel" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="(00) 00000-0000" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Data</label>
                  <input required type="date" value={formData.date} onChange={e => setFormData({
                  ...formData,
                  date: e.target.value
                })} className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Horário</label>
                  <input required type="time" value={formData.time} onChange={e => setFormData({
                  ...formData,
                  time: e.target.value
                })} className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
              </div>

              <button type="submit" className="w-full bg-primary py-4 rounded-xl font-medium hover:opacity-90 transition-all shadow-md hover:shadow-lg text-primary-foreground">
                Quero Agendar meu horário   
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;