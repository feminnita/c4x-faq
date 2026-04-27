import { useState, useEffect } from "react";
import { ChevronDown, Play, Zap, TrendingUp, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      category: "Gestão Operacional",
      question: "Como funciona o módulo de Gestão Operacional?",
      answer: "O módulo de Gestão Operacional oferece controle centralizado de processos, fluxos de trabalho e operações diárias. Automatiza tarefas repetitivas, melhora a produtividade e oferece visibilidade total das operações em tempo real.",
    },
    {
      category: "Gestão Operacional",
      question: "Posso usar apenas o módulo de Gestão Operacional?",
      answer: "Sim! A C4X é modular e você pode contratar apenas os módulos que precisa. Você pode começar com Gestão Operacional e adicionar outros módulos conforme sua empresa cresce.",
    },
    {
      category: "Gestão Financeira",
      question: "Como a IA ajuda na análise financeira?",
      answer: "Nossa IA analisa padrões de gastos, prevê tendências financeiras, identifica oportunidades de economia e oferece recomendações automáticas para otimizar a rentabilidade do seu negócio.",
    },
    {
      category: "Gestão de Estoque",
      question: "A plataforma se integra com meus sistemas atuais?",
      answer: "Sim! A C4X se integra perfeitamente com sistemas existentes via APIs e conectores. Também oferece importação de dados e sincronização automática com múltiplos canais de vendas.",
    },
    {
      category: "Marketing",
      question: "Quantos marketplaces posso gerenciar?",
      answer: "Você pode gerenciar múltiplos marketplaces simultaneamente: Mercado Livre, Shopee, Magalu, Americanas, Amazon e muitos outros. A plataforma sincroniza preços, estoque e pedidos automaticamente.",
    },
    {
      category: "Implementação",
      question: "Quanto tempo leva para implementar?",
      answer: "A implementação típica leva de 2 a 4 semanas, dependendo da complexidade do seu negócio. Oferecemos suporte dedicado durante todo o processo para garantir uma transição suave.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#8B2635] to-[#E8C99A] z-50"
        style={{ width: `${scrollProgress}%`, transition: "width 0.3s ease" }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0F172A] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">C4X</span>
            </div>
            <span className="text-sm font-semibold text-[#0F172A]">Soluções IA</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#transformacao" className="text-sm text-gray-600 hover:text-[#8B2635] transition">Transformação</a>
            <a href="#modulos" className="text-sm text-gray-600 hover:text-[#8B2635] transition">Módulos</a>
            <a href="#faq" className="text-sm text-gray-600 hover:text-[#8B2635] transition">FAQ</a>
          </nav>
          <a href="/faq/contact?type=demo">
            <Button size="sm" className="bg-[#8B2635] hover:bg-[#6b1d2a] text-white">
              Começar Agora
            </Button>
          </a>
        </div>
      </header>

      {/* SEÇÃO 1: CAOS (Antes) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 to-orange-50">
        {/* Efeito de caos visual */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
              ⚠️ O Problema
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0F172A] mb-6 leading-tight">
            Seu negócio está <span className="text-red-600">caótico</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Planilhas desorganizadas. Processos manuais. Erros custosos. Falta de visibilidade. Seu time está exausto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white/80 backdrop-blur rounded-xl border border-red-200">
              <div className="text-3xl mb-2">📊</div>
              <p className="text-gray-700 font-semibold">Dados espalhados</p>
              <p className="text-sm text-gray-600 mt-2">Em 10 sistemas diferentes</p>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur rounded-xl border border-red-200">
              <div className="text-3xl mb-2">⏰</div>
              <p className="text-gray-700 font-semibold">Tempo perdido</p>
              <p className="text-sm text-gray-600 mt-2">40% do dia em tarefas manuais</p>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur rounded-xl border border-red-200">
              <div className="text-3xl mb-2">💸</div>
              <p className="text-gray-700 font-semibold">Dinheiro indo embora</p>
              <p className="text-sm text-gray-600 mt-2">Erros custam caro</p>
            </div>
          </div>

          <button className="inline-flex items-center gap-2 text-[#8B2635] font-semibold hover:gap-3 transition">
            <span>Desça para ver a solução</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* SEÇÃO 2: TRANSIÇÃO (Descoberta) */}
      <section id="transformacao" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradiente de transição */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-blue-50 to-[#0F172A]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              ✨ A Transformação
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#0F172A] mb-6">
            E se tudo mudasse?
          </h2>

          <p className="text-xl text-gray-700 mb-12">
            Imagine um sistema que entende seu negócio, automatiza tudo e te dá controle total.
          </p>

          {/* Animação de fluxo */}
          <div className="relative h-64 mb-12 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-between px-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔴</span>
                </div>
                <p className="text-sm font-semibold text-gray-700">Caos</p>
              </div>

              <div className="flex-1 h-1 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 mx-4 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Sparkles className="w-6 h-6 text-yellow-500 animate-spin" />
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🟢</span>
                </div>
                <p className="text-sm font-semibold text-gray-700">Ordem</p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-lg mb-12">
            Isso é C4X. Inteligência Artificial para sua Empresa.
          </p>
        </div>
      </section>

      {/* SEÇÃO 3: ORDEM (Depois) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1a2847]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#E8C99A] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B2635] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-[#8B2635] text-[#E8C99A] rounded-full text-sm font-semibold">
              🚀 A Realidade
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Seu negócio <span className="text-[#E8C99A]">decolando</span>
          </h2>

          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Automação total. Dados centralizados. Decisões baseadas em IA. Crescimento exponencial.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white/10 backdrop-blur rounded-xl border border-[#E8C99A]/30">
              <div className="text-3xl mb-2">📈</div>
              <p className="text-[#E8C99A] font-semibold">300% Crescimento</p>
              <p className="text-sm text-gray-300 mt-2">Em receita anual</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-xl border border-[#E8C99A]/30">
              <div className="text-3xl mb-2">⚡</div>
              <p className="text-[#E8C99A] font-semibold">80% Mais Rápido</p>
              <p className="text-sm text-gray-300 mt-2">Processos automatizados</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-xl border border-[#E8C99A]/30">
              <div className="text-3xl mb-2">🎯</div>
              <p className="text-[#E8C99A] font-semibold">100% Visibilidade</p>
              <p className="text-sm text-gray-300 mt-2">Controle total do negócio</p>
            </div>
          </div>

          <a href="/faq/contact?type=demo">
            <Button size="lg" className="bg-[#E8C99A] hover:bg-[#d4b87a] text-[#0F172A] font-semibold">
              Comece sua transformação
            </Button>
          </a>
        </div>
      </section>

      {/* SEÇÃO 4: MÓDULOS */}
      <section id="modulos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F172A] mb-4">
              4 Módulos Poderosos
            </h2>
            <p className="text-xl text-gray-600">
              Escolha os que sua empresa precisa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Gestão Operacional", icon: "⚙️", color: "#8B2635" },
              { title: "Gestão Financeira", icon: "💰", color: "#E8C99A" },
              { title: "Gestão de Estoque", icon: "📦", color: "#8B2635" },
              { title: "Gestão de Marketing", icon: "📢", color: "#E8C99A" },
            ].map((module, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border-2 hover:shadow-xl transition"
                style={{ borderColor: module.color }}
              >
                <div className="text-4xl mb-4">{module.icon}</div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{module.title}</h3>
                <p className="text-gray-600 mb-6">
                  Automação inteligente e controle total do seu {module.title.toLowerCase()}
                </p>
                <Button variant="outline" className="w-full">
                  Saber mais
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F172A] mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <div className="text-left">
                    <p className="text-sm text-[#8B2635] font-semibold mb-2">{faq.category}</p>
                    <p className="text-lg font-semibold text-[#0F172A]">{faq.question}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8B2635] transition ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: CTA FINAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0F172A] to-[#1a2847]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-gray-200 mb-12">
            Comece com uma demo gratuita. Sem cartão de crédito necessário.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/faq/contact?type=demo">
              <Button size="lg" className="bg-[#E8C99A] hover:bg-[#d4b87a] text-[#0F172A] font-semibold">
                Solicitar Demo
              </Button>
            </a>
            <a href="/faq/contact?type=specialist">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Falar com Especialista
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-[#0F172A] font-bold text-xs">C4X</span>
            </div>
            <span className="text-sm font-semibold">Soluções IA</span>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Transformando negócios com Inteligência Artificial
          </p>
          <p className="text-gray-500 text-xs">
            © 2026 C4X Soluções IA. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
