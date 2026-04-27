import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [location] = useLocation();
  const queryParams = new URLSearchParams(location.split("?")[1]);
  const typeFromUrl = (queryParams.get("type") as "demo" | "specialist") || "demo";
  
  const [formType, setFormType] = useState<"demo" | "specialist">(typeFromUrl);
  
  useEffect(() => {
    setFormType(typeFromUrl);
  }, [typeFromUrl]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    module: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular envio do formulário
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        module: "",
      });

      // Resetar após 3 segundos
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/manus-storage/logofinal_1d222280.png"
              alt="C4X IA Soluções"
              className="h-10 object-contain"
            />
          </a>
          <Button className="bg-[#8B2635] hover:bg-[#6b1d2a] text-white">
            Voltar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F172A] to-[#1a2847]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-300">
            Escolha como prefere se conectar com nosso time
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Demo */}
            <div
              onClick={() => {
                setFormType("demo");
                setSubmitted(false);
              }}
              className={`p-8 rounded-2xl border-2 cursor-pointer transition-all ${
                formType === "demo"
                  ? "border-[#8B2635] bg-red-50"
                  : "border-gray-200 bg-white hover:border-[#8B2635]"
              }`}
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-serif font-bold text-[#0F172A] mb-2">
                Solicitar Demo
              </h3>
              <p className="text-gray-600">
                Veja a C4X em ação com uma demonstração personalizada
              </p>
            </div>

            {/* Specialist */}
            <div
              onClick={() => {
                setFormType("specialist");
                setSubmitted(false);
              }}
              className={`p-8 rounded-2xl border-2 cursor-pointer transition-all ${
                formType === "specialist"
                  ? "border-[#8B2635] bg-red-50"
                  : "border-gray-200 bg-white hover:border-[#8B2635]"
              }`}
            >
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-2xl font-serif font-bold text-[#0F172A] mb-2">
                Falar com Especialista
              </h3>
              <p className="text-gray-600">
                Converse com nossos especialistas sobre suas necessidades
              </p>
            </div>

            {/* Info */}
            <div className="p-8 rounded-2xl border-2 border-gray-200 bg-gray-50">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-serif font-bold text-[#0F172A] mb-4">
                Outras Formas
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-5 h-5 text-[#8B2635]" />
                  <span>contato@c4x.com</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-5 h-5 text-[#8B2635]" />
                  <span>(11) 3000-0000</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-[#8B2635]" />
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-serif font-bold text-[#0F172A] mb-2">
                  Mensagem Enviada com Sucesso!
                </h2>
                <p className="text-gray-600 mb-4">
                  Obrigado por entrar em contato. Nosso time responderá em breve.
                </p>
                <p className="text-sm text-gray-500">
                  Você será redirecionado em alguns segundos...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-8">
                  {formType === "demo" ? "Solicitar Demonstração" : "Falar com Especialista"}
                </h2>

                {/* Name */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B2635] focus:outline-none transition"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B2635] focus:outline-none transition"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Company */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B2635] focus:outline-none transition"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B2635] focus:outline-none transition"
                    placeholder="(11) 9999-9999"
                  />
                </div>

                {/* Module Selection */}
                {formType === "demo" && (
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Módulo de Interesse *
                    </label>
                    <select
                      name="module"
                      value={formData.module}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B2635] focus:outline-none transition"
                    >
                      <option value="">Selecione um módulo</option>
                      <option value="operacional">Gestão Operacional</option>
                      <option value="financeira">Gestão Financeira</option>
                      <option value="estoque">Gestão de Estoque</option>
                      <option value="marketing">Gestão de Marketing</option>
                      <option value="todos">Todos os módulos</option>
                    </select>
                  </div>
                )}

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Mensagem {formType === "specialist" ? "*" : ""}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required={formType === "specialist"}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8B2635] focus:outline-none transition resize-none"
                    placeholder="Conte-nos mais sobre suas necessidades..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#8B2635] hover:bg-[#6b1d2a] text-white py-3 text-lg font-semibold flex items-center justify-center gap-2"
                >
                  {loading ? "Enviando..." : <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>}
                </Button>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  Seus dados estão seguros e não serão compartilhados com terceiros.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="/manus-storage/logofinal_1d222280.png"
                alt="C4X"
                className="h-8 object-contain mb-4"
              />
              <p className="text-gray-400 text-sm">Inteligência Virtual para sua Empresa</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition">Recursos</a></li>
                <li><a href="/" className="hover:text-white transition">Preços</a></li>
                <li><a href="/" className="hover:text-white transition">Segurança</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition">Sobre</a></li>
                <li><a href="/" className="hover:text-white transition">Blog</a></li>
                <li><a href="/" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="/" className="hover:text-white transition">Termos</a></li>
                <li><a href="/" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 C4X Soluções IA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
