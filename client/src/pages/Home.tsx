import { useState } from "react";
import { ChevronDown, Check, ArrowRight, Zap, Shield, Rocket, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
      category: "Implementa",
      question: "Quanto tempo leva para implementar?",
      answer: "A implementação típica leva de 2 a 4 semanas, dependendo da complexidade do seu negócio. Oferecemos suporte dedicado durante todo o processo para garantir uma transição suave.",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automação Inteligente",
      description: "Automatize processos complexos de ponta a ponta, desde entrada de dados até geração de relatórios.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Crescimento Exponencial",
      description: "Aumente receita, eficiência e produtividade com insights baseados em IA e dados em tempo real.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Garantida",
      description: "Dados criptografados, conformidade fiscal e backups automáticos para proteger seu negócio.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Escalabilidade",
      description: "Cresce com seu negócio. Suporta desde pequenas empresas até grandes corporações.",
    },
  ];

  const modules = [
    {
      number: "01",
      title: "Gestão Operacional",
      description: "Otimize processos, aumente produtividade e dirija excelência operacional.",
      color: "from-[#8B2635] to-[#6b1d2a]",
    },
    {
      number: "02",
      title: "Gestão Financeira",
      description: "Ganhe controle financeiro, melhore planejamento e tome decisões baseadas em dados.",
      color: "from-[#0F172A] to-[#1a2847]",
    },
    {
      number: "03",
      title: "Gestão de Estoque",
      description: "Monitore estoque em tempo real, reduza custos e garanta produtos certos no lugar certo.",
      color: "from-[#8B2635] to-[#6b1d2a]",
    },
    {
      number: "04",
      title: "Gestão de Marketing",
      description: "Entenda sua audiência, fortaleça marca e impulsione crescimento com campanhas inteligentes.",
      color: "from-[#0F172A] to-[#1a2847]",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/manus-storage/WhatsAppImage2026-04-26at10.29.51_2869d1f2.jpeg"
              alt="C4X IA Soluções"
              className="h-8 object-contain"
            />
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#solucao" className="text-sm font-medium text-gray-700 hover:text-[#8B2635]">
              Solução
            </a>
            <a href="#modulos" className="text-sm font-medium text-gray-700 hover:text-[#8B2635]">
              Módulos
            </a>
            <a href="#beneficios" className="text-sm font-medium text-gray-700 hover:text-[#8B2635]">
              Benefícios
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-[#8B2635]">
              FAQ
            </a>
          </nav>
          <Button className="bg-[#8B2635] hover:bg-[#6b1d2a] text-white">
            Começar Agora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#0F172A] leading-tight">
                Inteligência Virtual para sua Empresa
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Automatize processos complexos, ganhe controle total e impulsione crescimento exponencial com IA integrada.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#8B2635] hover:bg-[#6b1d2a] text-white">
                Solicitar Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#0F172A] text-[#0F172A]">
                Saiba Mais
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-[#E8C99A]">300%</p>
                <p className="text-sm text-gray-600">Aumento de Receita</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#E8C99A]">260%</p>
                <p className="text-sm text-gray-600">Ganho Operacional</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#E8C99A]">400%</p>
                <p className="text-sm text-gray-600">ROI Médio</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030153148/gajF8zWd6y9RygyUMUpMsZ/c4x-hero-background-6gpYBjAtpAQaFyDagL4TT7.webp"
              alt="Hero Background"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section id="solucao" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              A Solução Completa
            </h2>
            <p className="text-xl text-gray-300">
              Hub centralizado que integra todos os aspectos da gestão empresarial
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${module.color} rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-5xl font-bold mb-4 text-[#E8C99A]">{module.number}</div>
                <h3 className="text-2xl font-serif font-bold mb-3">{module.title}</h3>
                <p className="text-gray-100">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automação Visual */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F172A] mb-4">
              Automação Ponta a Ponta
            </h2>
            <p className="text-xl text-gray-600">
              Do XML da nota fiscal à gestão de múltiplos marketplaces
            </p>
          </div>

          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030153148/gajF8zWd6y9RygyUMUpMsZ/c4x-automation-flow-PM7gEG7rxHLAeCXmFuR9qR.webp"
            alt="Automation Flow"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Módulos Integrados */}
      <section id="modulos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F172A] mb-4">
              Módulos Integrados
            </h2>
            <p className="text-xl text-gray-600">
              Todos os módulos trabalham em perfeita harmonia
            </p>
          </div>

          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030153148/gajF8zWd6y9RygyUMUpMsZ/c4x-modules-illustration-NPYYnBGfpa3ZEZ2WB9fKDs.webp"
            alt="Modules"
            className="w-full rounded-2xl shadow-xl mb-12"
          />
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F172A] mb-4">
              Por que C4X?
            </h2>
            <p className="text-xl text-gray-600">
              Diferenciais que transformam seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#8B2635] transition-colors">
                <div className="text-[#E8C99A] mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-[#0F172A] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crescimento Visual */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030153148/gajF8zWd6y9RygyUMUpMsZ/c4x-growth-visual-jbhevAbeaihMJyNCH8aAoF.webp"
            alt="Growth"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F172A] mb-4">
              Dashboard Inteligente
            </h2>
            <p className="text-xl text-gray-600">
              Visualize todos os dados da sua empresa em um único lugar
            </p>
          </div>

          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030153148/gajF8zWd6y9RygyUMUpMsZ/c4x-dashboard-preview-7DAQZHriRKezPkCG2w6hUM.webp"
            alt="Dashboard"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F172A] mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Encontre respostas para suas dúvidas sobre a C4X
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-[#8B2635] transition-colors">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="text-left">
                    <p className="text-sm font-semibold text-[#8B2635] mb-1">{faq.category}</p>
                    <p className="text-lg font-semibold text-[#0F172A]">{faq.question}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8B2635] transition-transform duration-300 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#8B2635] to-[#6b1d2a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Transforme sua Empresa Hoje
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Junte-se a centenas de empresas que já estão crescendo exponencialmente com C4X
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#8B2635] hover:bg-gray-100">
              Solicitar Demo Gratuita
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Falar com Especialista
            </Button>
          </div>

          <p className="text-gray-200 mt-8 text-sm">
            ✓ Sem cartão de crédito necessário • ✓ Acesso completo • ✓ Suporte dedicado
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="/manus-storage/WhatsAppImage2026-04-26at10.29.51_2869d1f2.jpeg"
                alt="C4X"
                className="h-8 object-contain mb-4"
              />
              <p className="text-gray-400 text-sm">Inteligência Virtual para sua Empresa</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition">Preços</a></li>
                <li><a href="#" className="hover:text-white transition">Segurança</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
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
