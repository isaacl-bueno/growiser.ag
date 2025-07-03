"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#f7fbfd]">
      {/* HERO SECTION */}
      <section
        className="relative bg-[#00384E] text-white pb-20"
        style={{
          backgroundImage: "url(/backgroundimage.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <header className="max-w-7xl mx-auto flex justify-between items-center p-6 relative z-10">
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
              aria-label="Abrir menu"
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-white font-medium items-center w-full justify-center">
            <a href="#paraquem" className="hover:underline">
              Para quem é
            </a>
            <a href="#entregamos" className="hover:underline">
              O que entregamos
            </a>
            <a href="#funciona" className="hover:underline">
              Como funciona
            </a>
            <a href="#planos" className="hover:underline">
              Planos
            </a>
            <a href="#faq" className="hover:underline">
              FAQ
            </a>
            <Button className="bg-gradient-to-r from-[#02aeff] to-[#7dd4fc] text-white text-[18px] font-bold px-6 py-2 rounded-[50px] shadow hover:from-[#7dd4fc] hover:to-[#02aeff]">
              Começar Agora
            </Button>
          </nav>
          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-[#00384E] bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 text-white text-2xl">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl"
                aria-label="Fechar menu"
              >
                &times;
              </button>
              <a href="#paraquem" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                Para quem é
              </a>
              <a href="#entregamos" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                O que entregamos
              </a>
              <a href="#funciona" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                Como funciona
              </a>
              <a href="#planos" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                Planos
              </a>
              <a href="#faq" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </a>
              <Button className="bg-gradient-to-r from-[#02aeff] to-[#7dd4fc] text-white text-[18px] font-bold px-8 py-3 rounded-[50px] shadow hover:from-[#7dd4fc] hover:to-[#02aeff]" onClick={() => setIsMenuOpen(false)}>
                Começar Agora
              </Button>
            </div>
          )}
        </header>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-8 flex flex-col items-start">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Pare de gastar com mídia <br/>que{" "}
              <span className="text-[#02aeff] italic">não vende</span>
            </h1>
            <p className="text-md md:text-xl mb-8 opacity-90">
              Na <span className="font-bold text-[#02aeff]">Growiser</span>, atuamos como o cérebro growth que sua empresa 
              <br/>precisa — otimizando sua operação de midia paga e destravando <br/>as alavancas que realmente geram 
              <span className="font-bold text-[#02aeff]"> vendas e escala</span>.
            </p>
            <Button className="bg-white text-[#41acd6] text-[18px] font-bold px-8 py-3 rounded-[50px] shadow hover:bg-[#009fd6] hover:text-white">
              QUERO ESCALAR COM ESTRATÉGIA
            </Button>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section id="paraquem" className="py-16 bg-gradient-to-b from-white via-[#ebf1f8] to-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#00384E] text-center mb-10">
            Para quem é a <span className="text-[#41acd6]">growiser?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow text-left flex flex-col items-center md:items-start">
              <Image
                src="/icon_p_quem_é/20250623_1337_3D Business Growth Chart_remix_01jyetced7fsqvnz7pg29p6vsr-Photoroom 1.png"
                alt="Para empresas que querem crescer mais"
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-[#00384E]">
                Para empresas que querem crescer mais, mas travaram
              </h3>
              <p className="text-gray-700">
                Se você sente que investe em mídia, mas não vê retorno real, ou
                já tentou de tudo e não escala, a Growiser é para você.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow text-left flex flex-col items-center md:items-start">
              <Image
                src="/icon_p_quem_é/20250623_1351_Digital Marketing Funnel_remix_01jyev4p99f06azwhby2rkmf57-Photoroom 1.png"
                alt="Para marcas que querem extrair mais"
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-[#00384E]">
                Para marcas que querem extrair mais dos seus canais
              </h3>
              <p className="text-gray-700">
                Se você já tem operação digital, mas sente que pode extrair mais
                dos seus canais, vamos mostrar como escalar de verdade.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-white text-[#41acd6] hover:bg-[#41acd6] rounded-[50px] hover:text-white font-bold px-8 py-3 shadow">
              A GROWISER É PARA MIM
            </Button>
          </div>
        </div>
      </section>

      {/* O QUE ENTREGAMOS */}
      <section id="entregamos" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#00384E] text-center mb-10">
            O que entregamos de{" "}
            <span className="text-[#41acd6]">diferente?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
              <Image
                src="/icon_oq_entregamos/Captura de tela 2025-06-23 131433 1.png"
                alt="Da aquisição à retenção"
                width={48}
                height={48}
                className="mb-3"
              />
              <h4 className="font-bold text-[#00384E] mb-2">
                Da aquisição à retenção
              </h4>
              <p className="text-gray-700 text-center">
                Estratégias integradas do topo ao fundo do funil, para atrair,
                converter e reter clientes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
              <Image
                src="/icon_oq_entregamos/Captura de tela 2025-06-23 131449 1.png"
                alt="Foco em resultados reais"
                width={48}
                height={48}
                className="mb-3"
              />
              <h4 className="font-bold text-[#00384E] mb-2">
                Foco em resultados reais
              </h4>
              <p className="text-gray-700 text-center">
                Métricas que importam, metas agressivas e acompanhamento
                constante para garantir crescimento.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
              <Image
                src="/icon_oq_entregamos/Captura de tela 2025-06-23 131501 1.png"
                alt="Time estratégico dedicado"
                width={48}
                height={48}
                className="mb-3"
              />
              <h4 className="font-bold text-[#00384E] mb-2">
                Time estratégico dedicado
              </h4>
              <p className="text-gray-700 text-center">
                Especialistas focados no seu segmento, atuando como extensão do
                seu time.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
              <Image
                src="/icon_oq_entregamos/Captura de tela 2025-06-23 131516 1.png"
                alt="Dados que geram insights"
                width={48}
                height={48}
                className="mb-3"
              />
              <h4 className="font-bold text-[#00384E] mb-2">
                Dados que geram insights
              </h4>
              <p className="text-gray-700 text-center">
                Análise profunda de dados para decisões inteligentes e
                crescimento sustentável.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
              <Image
                src="/icon_oq_entregamos/Captura de tela 2025-06-23 131532 1.png"
                alt="Agilidade e transparência"
                width={48}
                height={48}
                className="mb-3"
              />
              <h4 className="font-bold text-[#00384E] mb-2">
                Agilidade e transparência
              </h4>
              <p className="text-gray-700 text-center">
                Respostas rápidas, relatórios claros e comunicação constante.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-white text-[#41acd6] hover:bg-[#41acd6] rounded-[50px] hover:text-white font-bold px-8 py-3 shadow">
              QUERO CRESCER COM A GROWISER
            </Button>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA NA PRÁTICA */}
      <section id="funciona" className="py-16 bg-gradient-to-b from-white via-[#ebf1f8] to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#00384E] text-center mb-10">
            Como funciona na <span className="text-[#41acd6]">prática?</span>
          </h2>
          <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
            Muito além da mídia. Estratégia com propósito. Descubra como
            transformamos dados em decisões que realmente movem seu negócio.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f7fbfd] rounded-xl p-8 shadow flex flex-col items-center">
              <Image
                src="/icon_cm_funciona/20250624_1507_Minimalist Line Graph_simple_compose_01jyhhymqtfbv86c540tv53sfr 1.png"
                alt="O que analisamos"
                width={48}
                height={48}
                className="mb-3"
              />
              <h4 className="font-bold text-[#00384E] mb-2">
                O que analisamos:
              </h4>
              <ul className="text-gray-700 text-left list-disc pl-5">
                <li>Retorno dos canais</li>
                <li>Custo de aquisição</li>
                <li>Segmentação e público</li>
                <li>Jornada do cliente</li>
              </ul>
            </div>
            <div className="bg-[#f7fbfd] rounded-xl p-8 shadow flex flex-col items-center">
              <Image
                src="/icon_cm_funciona/20250624_1649_3D Dual Arrows Icon_simple_compose_01jyhqrskbejcs3f085aexv2n7 1.png"
                alt="O que entregamos"
                width={48}
                height={48}
                className="mb-3"
              />
              <h4 className="font-bold text-[#00384E] mb-2">
                O que entregamos:
              </h4>
              <ul className="text-gray-700 text-left list-disc pl-5">
                <li>Estratégia completa de mídia</li>
                <li>Gestão e otimização contínua</li>
                <li>Relatórios e insights mensais</li>
                <li>Time dedicado ao seu negócio</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-white text-[#41acd6] hover:bg-[#41acd6] rounded-[50px] hover:text-white font-bold px-8 py-3 shadow">
              SAIBA MAIS
            </Button>
          </div>
        </div>
      </section>

      {/* PLANOS E PREÇOS */}
      <section id="planos" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#00384E] text-center mb-10">
            Planos <span className="text-[#41acd6]">e preços</span>
          </h2>
          <p className="text-center text-gray-700 mb-10">
            Tudo incluso. Sem letra miúda. Alinhamos objetivos e entregamos
            crescimento.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center">
              <h4 className="font-bold text-[#00384E] mb-2">Mensal Fixo</h4>
              <p className="text-gray-700 mb-2">Valor fechado por mês</p>
              <p className="text-gray-500 text-sm mb-4">
                Empresas que preferem previsibilidade e acompanhamento contínuo.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center">
              <h4 className="font-bold text-[#00384E] mb-2">Success Fee</h4>
              <p className="text-gray-700 mb-2">Pagamento por resultado</p>
              <p className="text-gray-500 text-sm mb-4">
                Ideal para quem quer alinhar o sucesso do negócio ao nosso
                trabalho.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-[#e6f7ff] text-[#00384E] px-4 py-2 rounded-full text-sm font-medium">
              Gestão completa de mídia
            </span>
            <span className="bg-[#e6f7ff] text-[#00384E] px-4 py-2 rounded-full text-sm font-medium">
              Análise e acompanhamento estratégico
            </span>
            <span className="bg-[#e6f7ff] text-[#00384E] px-4 py-2 rounded-full text-sm font-medium">
              Apoio ao time interno
            </span>
            <span className="bg-[#e6f7ff] text-[#00384E] px-4 py-2 rounded-full text-sm font-medium">
              Acompanhamento semanal com reports
            </span>
          </div>
          <div className="text-center">
            <Button className="bg-white text-[#41acd6] hover:bg-[#41acd6] rounded-[50px] hover:text-white font-bold px-8 py-3 shadow">
              TENHO INTERESSE
            </Button>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL (DEPOIMENTOS) */}
      <section className="py-16 bg-gradient-to-b from-white via-[#ebf1f8] to-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#00384E] text-center mb-10">
            Pronto para escalar sua operação com growth de verdade?
          </h2>
          <p className="text-center text-gray-700 mb-10">
            Olha quem já fez com a gente:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f7fbfd] rounded-xl p-8 shadow text-left">
              <p className="text-gray-700 mb-4">
                &lsquo;A diferença com a Growiser foi imediata. Em poucos meses, nosso ROI dobrou e finalmente entendemos onde investir para crescer de verdade.&rsquo;
              </p>
              <span className="text-[#00384E] font-bold">
                Fulano, CEO da XYZ
              </span>
            </div>
            <div className="bg-[#f7fbfd] rounded-xl p-8 shadow text-left">
              <p className="text-gray-700 mb-4">
                &lsquo;O que mais impressiona é a transparência e o acompanhamento. O time Growiser realmente veste a camisa do cliente.&rsquo;
              </p>
              <span className="text-[#00384E] font-bold">
                Fulana, CEO da XYZ
              </span>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button className="bg-white text-[#41acd6] hover:bg-[#41acd6] rounded-[50px] hover:text-white font-bold px-8 py-3 shadow">
              QUERO CRESCER COM A GROWISER
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#00384E] text-center mb-10">
            Dúvidas <span className="text-[#41acd6]">frequentes</span>
          </h2>
          <div className="space-y-4">
            {/* Troque por um componente de accordion real depois */}
            <div className="bg-white rounded-xl p-6 shadow cursor-pointer">
              <h4 className="font-bold text-[#00384E] mb-2">
                Como funciona Growth as a Service com a Growiser?
              </h4>
              <p className="text-gray-700 text-sm">
                Você contrata a Growiser como uma extensão do seu time, focada
                em resultados reais e crescimento contínuo.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow cursor-pointer">
              <h4 className="font-bold text-[#00384E] mb-2">
                Como é a operação no dia a dia com meu time?
              </h4>
              <p className="text-gray-700 text-sm">
                Nosso time atua junto ao seu, com reuniões semanais, reports e
                acompanhamento constante.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow cursor-pointer">
              <h4 className="font-bold text-[#00384E] mb-2">
                Quais são os serviços que estão inclusos?
              </h4>
              <p className="text-gray-700 text-sm">
                Gestão de mídia, análise de dados, estratégia, execução e
                acompanhamento. Tudo incluso.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow cursor-pointer">
              <h4 className="font-bold text-[#00384E] mb-2">
                Por que contratar a Growiser e não outra agência?
              </h4>
              <p className="text-gray-700 text-sm">
                Foco total em resultado, transparência e acompanhamento próximo.
                Não somos só uma agência, somos parceiros de crescimento.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow cursor-pointer">
              <h4 className="font-bold text-[#00384E] mb-2">
                Como funciona o plano success fee?
              </h4>
              <p className="text-gray-700 text-sm">
                Você só paga uma porcentagem sobre o resultado gerado.
                Alinhamento total de interesses.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button className="bg-white text-[#41acd6] hover:bg-[#41acd6] rounded-[50px] hover:text-white font-bold px-8 py-3 shadow">
              QUERO CRESCER COM A GROWISER
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-white to-[#5AB4D7] text-white py-10 h-[30vh]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <Image
              src="/logo.png"
              alt="Growiser Logo"
              width={120}
              height={40}
            />
            <span className="text-xs opacity-70">
              Resultados reais com estratégias inteligentes de crescimento
              digital.
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 items-center">
            <a href="#about" className="mb-2 md:mb-0 hover:underline">
              Sobre nós
            </a>
            <a href="#planos" className="mb-2 md:mb-0 hover:underline">
              Serviços
            </a>
            <a href="#cases" className="mb-2 md:mb-0 hover:underline">
              Cases
            </a>
            <a href="#faq" className="mb-2 md:mb-0 hover:underline">
              Contato
            </a>
          </div>
          <div className="flex flex-col items-center md:items-end mt-6 md:mt-0">
            <span className="text-xs">contato@growiser.com</span>
            <span className="text-xs">+55 (xx) xxxxx-xxxx</span>
            <span className="text-xs mt-2 opacity-60">
              © Growiser 2024. Todos os direitos reservados.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
