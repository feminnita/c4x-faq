import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    category: "Gestão Operacional",
    question: "Como funciona o módulo de Gestão Operacional?",
    answer:
      "O módulo de Gestão Operacional da C4X Soluções oferece ferramentas completas para otimizar seus processos internos. Com dashboards intuitivos, automação de fluxos de trabalho e relatórios em tempo real, você consegue monitorar todas as operações da sua empresa em um único lugar. Integre com seus sistemas existentes e melhore a eficiência operacional.",
  },
  {
    id: "2",
    category: "Gestão Operacional",
    question: "Posso usar apenas o módulo de Gestão Operacional?",
    answer:
      "Sim! A C4X Soluções foi desenvolvida com modularidade em mente. Você pode contratar apenas o módulo de Gestão Operacional ou combiná-lo com outros módulos conforme suas necessidades. Cada módulo funciona de forma independente, mas também se integra perfeitamente com os outros.",
  },
  {
    id: "3",
    category: "Gestão Financeira",
    question: "O que o módulo de Gestão Financeira oferece?",
    answer:
      "O módulo de Gestão Financeira da C4X Soluções permite controle total das suas finanças. Gerencie contas a pagar e receber, crie orçamentos, acompanhe fluxo de caixa, gere relatórios financeiros detalhados e tome decisões baseadas em dados. Com inteligência artificial integrada, você recebe insights automáticos sobre a saúde financeira da sua empresa.",
  },
  {
    id: "4",
    category: "Gestão Financeira",
    question: "Como o módulo de Gestão Financeira se integra com a contabilidade?",
    answer:
      "O módulo de Gestão Financeira da C4X Soluções foi desenvolvido para trabalhar em harmonia com seus processos contábeis. Exporta dados em formatos compatíveis com sistemas contábeis, mantém auditoria completa de todas as transações e oferece relatórios que facilitam a conciliação com sua contabilidade.",
  },
  {
    id: "5",
    category: "Marketing",
    question: "Quais ferramentas de marketing estão disponíveis?",
    answer:
      "O módulo de Marketing da C4X Soluções oferece uma suite completa de ferramentas para sua estratégia de marketing digital. Crie campanhas de email, gerencie redes sociais, acompanhe métricas de performance, segmente seu público-alvo e automatize fluxos de marketing. Tudo integrado em uma plataforma intuitiva.",
  },
  {
    id: "6",
    category: "Marketing",
    question: "Como faço para rastrear o ROI das minhas campanhas?",
    answer:
      "Com o módulo de Marketing da C4X Soluções, você tem acesso a dashboards detalhados que mostram o desempenho de cada campanha em tempo real. Acompanhe conversões, custos por aquisição, taxa de engajamento e muito mais. Todos os dados são visualizados de forma clara e acionável.",
  },
  {
    id: "7",
    category: "Gestão de Estoque",
    question: "Como o módulo de Estoque funciona?",
    answer:
      "O módulo de Gestão de Estoque da C4X Soluções oferece controle total do seu inventário. Monitore níveis de estoque em tempo real, receba alertas de reposição automática, gerencie múltiplos depósitos, rastreie movimentações e gere relatórios de estoque. Com inteligência artificial, preveja demanda e otimize seus níveis de inventário.",
  },
  {
    id: "8",
    category: "Gestão de Estoque",
    question: "Posso integrar o módulo de Estoque com minha loja online?",
    answer:
      "Sim! O módulo de Gestão de Estoque da C4X Soluções foi desenvolvido para se integrar facilmente com plataformas de e-commerce. Sincronize automaticamente seus níveis de estoque, evite overselling e mantenha seus clientes informados sobre disponibilidade de produtos.",
  },
  {
    id: "9",
    category: "Implementação",
    question: "Quanto tempo leva para implementar a C4X Soluções?",
    answer:
      "O tempo de implementação varia conforme os módulos contratados e a complexidade do seu negócio. Em média, uma implementação completa leva entre 2 a 4 semanas. Nossa equipe de especialistas trabalha com você para garantir uma transição suave e minimizar o impacto nas suas operações.",
  },
  {
    id: "10",
    category: "Suporte",
    question: "Qual tipo de suporte vocês oferecem?",
    answer:
      "A C4X Soluções oferece suporte técnico 24/7 via chat, email e telefone. Você também tem acesso a uma base de conhecimento completa, vídeos tutoriais e webinars regulares. Todos os clientes recebem um gerente de conta dedicado para garantir o máximo de valor da plataforma.",
  },
  {
    id: "11",
    category: "Preços",
    question: "Como funciona o modelo de preços?",
    answer:
      "A C4X Soluções oferece modelos de preços flexíveis. Você pode contratar módulos individuais ou pacotes completos. Os preços são baseados no tamanho da sua empresa e volume de dados. Oferecemos avaliação gratuita de 30 dias para você experimentar a plataforma sem compromisso.",
  },
  {
    id: "12",
    category: "Segurança",
    question: "Como vocês garantem a segurança dos meus dados?",
    answer:
      "A segurança é nossa prioridade máxima. Todos os dados são criptografados em trânsito e em repouso. Realizamos auditorias de segurança regulares, mantemos conformidade com LGPD e outras regulamentações, e fazemos backups automáticos. Você tem controle total sobre permissões de acesso.",
  },
];

const categories = [
  "Todos",
  "Gestão Operacional",
  "Gestão Financeira",
  "Marketing",
  "Gestão de Estoque",
  "Implementação",
  "Suporte",
  "Preços",
  "Segurança",
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFAQ = faqData.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todos" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#0F172A] text-white py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Login */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-serif font-bold text-[#E8C99A]">
                C4X
              </div>
              <div className="w-1 h-8 bg-[#8B2635]"></div>
              <div className="text-xl font-serif text-[#E8C99A]">
                Soluções
              </div>
            </div>
            <Link href="/login">
              <Button className="bg-[#8B2635] hover:bg-[#6B1F28] text-white font-semibold">
                Entrar
              </Button>
            </Link>
          </div>

          {/* Title and Description */}
          <h1 className="text-4xl font-serif font-bold mb-2">
            Como podemos ajudar?
          </h1>
          <p className="text-[#E8C99A] mb-6">
            Encontre respostas para suas dúvidas sobre a C4X Soluções
          </p>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Digite sua pergunta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 rounded-full bg-white text-[#0F172A] border-0 focus:ring-2 focus:ring-[#8B2635]"
            />
          </div>
        </div>
      </header>

      {/* Category Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[#8B2635] text-white"
                    : "bg-gray-100 text-[#0F172A] hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <main className="container max-w-4xl mx-auto px-4 py-12">
        {filteredFAQ.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhuma pergunta encontrada. Tente outro termo de busca.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFAQ.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#8B2635] transition-colors"
              >
                <button
                  onClick={() =>
                    setExpandedId(expandedId === item.id ? null : item.id)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="text-left flex-1">
                    <p className="text-xs font-semibold text-[#8B2635] mb-1">
                      {item.category}
                    </p>
                    <p className="text-lg font-serif font-semibold text-[#0F172A]">
                      {item.question}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8B2635] flex-shrink-0 ml-4 transition-transform ${
                      expandedId === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedId === item.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#0F172A] to-[#1A2F5F] rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-serif font-bold mb-4">
            Não encontrou sua resposta?
          </h2>
          <p className="mb-6 text-gray-300">
            Nossa equipe de suporte está pronta para ajudar. Entre em contato
            conosco.
          </p>
          <Button className="bg-[#E8C99A] text-[#0F172A] hover:bg-[#D4B380] font-semibold">
            Fale com nosso suporte
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-8 mt-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#E8C99A] mb-2">C4X Soluções</p>
          <p className="text-gray-400 text-sm">
            © 2026 C4X Soluções. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
