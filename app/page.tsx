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
        <div className="absolute inset-0 w-full h-full bg-[#00384E] bg-opacity-30" />
        <header className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6 relative z-30">
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
              aria-label="Abrir menu"
            >
              <svg
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
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
              <a
                href="#paraquem"
                className="hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Para quem é
              </a>
              <a
                href="#entregamos"
                className="hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                O que entregamos
              </a>
              <a
                href="#funciona"
                className="hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Como funciona
              </a>
              <a
                href="#planos"
                className="hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </a>
              <a
                href="#faq"
                className="hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <Button
                className="bg-gradient-to-r from-[#02aeff] to-[#7dd4fc] text-white text-[18px] font-bold px-8 py-3 rounded-[50px] shadow hover:from-[#7dd4fc] hover:to-[#02aeff]"
                onClick={() => setIsMenuOpen(false)}
              >
                Começar Agora
              </Button>
            </div>
          )}
        </header>

        <div className="absolute inset-0 flex items-center z-20">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Pare de gastar com mídia
              <br /> que{" "}
              <span className="text-[#02aeff] italic">não vende</span>
            </h1>
            <p className="text-sm sm:text-md md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl">
              Na <span className="font-bold text-[#02aeff]">Growiser</span>,
              atuamos como o cérebro growth que sua empresa precisa — otimizando
              sua operação de midia paga e destravando as alavancas que
              realmente geram
              <span className="font-bold text-[#02aeff]"> vendas e escala</span>
              .
            </p>
            <Button className="bg-white text-[#41acd6] text-[16px] md:text-[18px] font-bold px-6 md:px-8 py-3 rounded-[50px] shadow hover:bg-[#009fd6] hover:text-white">
              QUERO ESCALAR COM ESTRATÉGIA
            </Button>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section
        id="paraquem"
        className="py-12 md:py-16 bg-gradient-to-b from-white via-[#ebf1f8] to-white"
      >
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#00384E] text-center mb-4">
            Para quem é a{" "}
            <span className="bg-gradient-to-r from-[#00384E] via-[#0A8ABC] to-[#0A8ABC] bg-clip-text text-transparent italic">
              growiser?
            </span>
          </h2>
          <div className="w-[150px] h-[4px] bg-gradient-to-r from-[#308ab4] to-[#41acd6] mb-14 rounded-full" />
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-[50px] p-6 md:p-8 pt-24 shadow-lg text-left flex flex-col items-center md:items-start relative">
              <div className="absolute -top-[2rem] md:-top-[5rem] left-4">
                <Image
                  src="/icon_p_quem_é/20250623_1337_3D Business Growth Chart_remix_01jyetced7fsqvnz7pg29p6vsr-Photoroom 1.png"
                  alt="Para empresas que querem crescer mais"
                  width={120}
                  height={120}
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-4 bg-gradient-to-b from-[#00384E] to-[#308ab4] bg-clip-text text-transparent text-center md:text-left">
                Para empresas que querem
                <br /> crescer mais, mas travaram:
              </h3>
              <p className="text-[#045371] text-center md:text-left mb-2 text-lg">
                Tem mídia rodando, mais não conseguem escalar;
              </p>
              <p className="text-[#045371] text-center md:text-left mb-2 text-lg">
                O time de marketing está no limite e precisa de apoio
                estratégico;
              </p>
              <p className="text-[#045371] text-center md:text-left text-lg">
                A gestão de tráfego atual é operacional e não entrega visão de
                crescimento;
              </p>
            </div>
            <div className="bg-white rounded-[50px] p-6 md:p-8 pt-24 shadow-lg text-left flex flex-col items-center md:items-start relative">
              <div className="absolute -top-[2rem] md:-top-[6rem] right-4">
                <Image
                  src="/icon_p_quem_é/20250623_1351_Digital Marketing Funnel_remix_01jyev4p99f06azwhby2rkmf57-Photoroom 1.png"
                  alt="Para marcas que querem extrair mais"
                  width={120}
                  height={120}
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-4 bg-gradient-to-b from-[#00384E] to-[#308ab4] bg-clip-text text-transparent text-center md:text-left">
                Para marcas que querem
                <br /> extrair mais dos seus canais:
              </h3>
              <p className="text-[#045371] text-center md:text-left mb-2 text-lg">
                Já investem em anúncios, mas não entendem o impacto real nas
                vendas;
              </p>
              <p className="text-[#045371] text-center md:text-left mb-2 text-lg">
                Sentem que estão deixando dinheiro na mesa por falta de
                estrutura;
              </p>
              <p className="text-[#045371] text-center md:text-left text-lg">
                Precisam de alguem que pense o negócio com visão estratégica;
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-white text-[#0A8ABC] hover:bg-[#0A8ABC] rounded-[50px] hover:text-white font-bold px-6 md:px-8 py-3 shadow-lg">
              A GROWISER É PARA MIM
            </Button>
          </div>
        </div>
      </section>

      {/* O QUE ENTREGAMOS */}
      <section id="entregamos" className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#00384E] text-center mb-4">
            O que entregamos{" "}
            <span className="bg-gradient-to-r from-[#00384E] via-[#0A8ABC] to-[#0A8ABC] bg-clip-text text-transparent">
              de diferente?
            </span>
          </h2>
          <div className="w-[150px] h-[4px] bg-gradient-to-r from-[#308ab4] to-[#41acd6] mb-14 rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            <div className="bg-white border border-[#41acd6] rounded-[50px] p-6 shadow-lg flex flex-col items-center justify-center min-h-[250px]">
              <Image
                src="/icon_oq_entregamos/Captura de tela 2025-06-23 131433 1.png"
                alt="Da aquisição à retenção"
                width={80}
                height={80}
                className="mb-3"
              />
              <h4 className="font-bold text-[#00384E] mb-2 text-lg text-center">
                Da aquisição à <span className="text-[#0A8ABC]">retenção</span>
              </h4>
              <p className="text-[#045371] text-center text-sm md:text-lg">
                Entregamos estratégias em toda a jornada de crescimento, não só
                midia.
              </p>
            </div>
            <div className="bg-white border border-[#41acd6] rounded-[50px] p-6 shadow-lg flex flex-col items-center justify-center min-h-[250px]">
              <Image
                src="/icon_oq_entregamos/Captura de tela 2025-06-23 131449 1.png"
                alt="Foco em resultados reais"
                width={80}
                height={80}
                className="mb-3"
              />
              <h4 className="font-bold text-[#00384E] mb-2 text-lg text-center">
                Foco em resultados <span className="text-[#0A8ABC]">reais</span>
              </h4>
              <p className="text-[#045371] text-center text-sm md:text-lg">
                Não medimos apenas cliques e impressões. Acompanhamos vendas,
                ROI e crescimento sustentavél do seu negócio.
              </p>
            </div>
            <div className="bg-white border border-[#41acd6] rounded-[50px] p-6 shadow-lg flex flex-col items-center justify-center min-h-[250px]">
              <Image
                src="/icon_oq_entregamos/Captura de tela 2025-06-23 131501 1.png"
                alt="Time estratégico dedicado"
                width={80}
                height={80}
                className="mb-3"
              />
              <h4 className="font-bold text-[#00384E] mb-2 text-lg text-center">
                Time estratégico{" "}
                <span className="text-[#0A8ABC]">dedicado</span>
              </h4>
              <p className="text-[#045371] text-center text-sm md:text-lg">
                Profissionais especializados que conhecem seu negócio e
                trabalham como extensão de sua equipe interna.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl w-full">
              <div className="bg-white border border-[#41acd6] rounded-[50px] p-6 shadow-lg flex flex-col items-center justify-center min-h-[250px]">
                <Image
                  src="/icon_oq_entregamos/Captura de tela 2025-06-23 131516 1.png"
                  alt="Dados que geram insights"
                  width={80}
                  height={80}
                  className="mb-3"
                />
                <h4 className="font-bold text-[#00384E] mb-2 text-lg text-center">
                  Dados que geram{" "}
                  <span className="text-[#0A8ABC]">insights</span>
                </h4>
                <p className="text-[#045371] text-center text-sm md:text-lg">
                  Analytics avançado que transforma números em decisões
                  estratégicas para acelerar seu crescimento.
                </p>
              </div>
              <div className="bg-white border border-[#41acd6] rounded-[50px] p-6 shadow-lg flex flex-col items-center justify-center min-h-[250px]">
                <Image
                  src="/icon_oq_entregamos/Captura de tela 2025-06-23 131532 1.png"
                  alt="Agilidade e transparência"
                  width={80}
                  height={80}
                  className="mb-3"
                />
                <h4 className="font-bold text-[#00384E] mb-2 text-lg text-center">
                  Agilidade e{" "}
                  <span className="text-[#0A8ABC]">transparência</span>
                </h4>
                <p className="text-[#045371] text-center text-sm md:text-lg">
                  Implementação rápida, relatórios semanais e total
                  transparência nos processos e investimentos em mídia.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-gradient-to-r from-[#5BB6D9] to-[#02AEFF] hover:from-white hover:to-white hover:text-[#5BB6D9] text-white rounded-[50px] font-bold px-6 md:px-8 py-3 shadow-lg transition-all duration-300">
              QUERO CRESCER COM A GROWISER
            </Button>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA NA PRÁTICA */}
      <section
        id="funciona"
        className="py-12 md:py-16 bg-gradient-to-b from-white via-[#ebf1f8] to-white"
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#00384E] text-center mb-4">
            Como funciona{" "}
            <span className="bg-gradient-to-r from-[#00384E] via-[#0A8ABC] to-[#0A8ABC] bg-clip-text text-transparent">
              na prática?
            </span>
          </h2>
          <div className="w-[150px] h-[4px] bg-gradient-to-r from-[#308ab4] to-[#41acd6] mb-14 rounded-full" />
          <p className="text-center font-[500] text-gray-700 mb-8 md:mb-10 max-w-4xl mx-auto text-md md:text-2xl">
            Muito além da mídia. Estratégia com propósito. Descubra como
            transformamos dados em decisões que realmente movem seu negócio.
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8">
            <div className="bg-white rounded-[50px] w-full lg:w-[390px] min-h-[300px] p-6 md:p-8 shadow-lg flex flex-col items-center justify-center">
              <h4 className="font-bold text-lg md:text-2xl text-[#00384E] mb-4 text-center">
                O que <span className="text-[#0A8ABC]">analisamos:</span>
              </h4>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center h-[60px] gap-3 rounded-[15px] border border-[#5BB6D9] p-3 text-[#045371] font-medium">
                  <Image
                    src="/icon_cm_funciona/performance.png"
                    alt="Performance"
                    width={40}
                    height={40}
                  />
                  <span className="text-center">Performance das campanhas</span>
                </div>
                <div className="flex items-center h-[60px] gap-3 rounded-[15px] border border-[#5BB6D9] p-3 text-[#045371] font-medium">
                  <Image
                    src="/icon_cm_funciona/canais.png"
                    alt="Canais"
                    width={40}
                    height={40}
                  />
                  <span className="text-center">Canais de aquisição</span>
                </div>
                <div className="flex items-center h-[60px] gap-3 rounded-[15px] border border-[#5BB6D9] p-3 text-[#045371] font-medium">
                  <Image
                    src="/icon_cm_funciona/retencao.png"
                    alt="Retenção"
                    width={40}
                    height={40}
                  />
                  <span className="text-center">
                    Retenção de recompra (LTV)
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center w-[100px] h-[100px]">
              <Image
                src="/icon_cm_funciona/dualArrow.png"
                alt="O que entregamos"
                width={120}
                height={120}
              />
            </div>
            <div className="bg-white rounded-[50px] w-full lg:w-[390px] min-h-[300px] p-6 md:p-8 shadow-lg flex flex-col items-center justify-center">
              <h4 className="font-bold text-lg md:text-2xl text-[#00384E] mb-4 text-center">
                O que <span className="text-[#0A8ABC]">entregamos:</span>
              </h4>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center h-[60px] gap-3 rounded-[15px] border border-[#5BB6D9] p-3 text-[#045371] font-medium">
                  <Image
                    src="/icon_cm_funciona/planejamento.png"
                    alt="Planejamento"
                    width={40}
                    height={40}
                  />
                  <span className="text-center">
                    Planejamento estratégico e metas
                  </span>
                </div>
                <div className="flex items-center h-[60px] gap-3 rounded-[15px] border border-[#5BB6D9] p-3 text-[#045371] font-medium">
                  <Image
                    src="/icon_cm_funciona/setup.png"
                    alt="Setup"
                    width={40}
                    height={40}
                  />
                  <span className="text-center">
                    Setup de campanhas e migração
                  </span>
                </div>
                <div className="flex items-center h-[60px] gap-3 rounded-[15px] border border-[#5BB6D9] p-3 text-[#045371] font-medium">
                  <Image
                    src="/icon_cm_funciona/gestão.png"
                    alt="Gestão"
                    width={40}
                    height={40}
                  />
                  <span className="text-center">
                    Gestão de mídia e relatórios com insights semanais
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center text-center mt-8">
            <p className="text-center md:text-start font-bold text-lg md:text-2xl text-[#00384E]">
              Não é sobre
              <br />
              gastar mais.
              <br />
              <span className="text-[#41acd6]">
                É sobre crescer
                <br /> com inteligência.
              </span>
            </p>
            <Button className="bg-white text-[#41acd6] hover:bg-[#41acd6] rounded-[50px] hover:text-white font-bold px-6 md:px-8 py-3 shadow-lg">
              SAIBA MAIS
            </Button>
          </div>
        </div>
      </section>

      {/* PLANOS E PREÇOS */}
      <section id="planos" className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00384E] text-center mb-8 md:mb-4">
            Planos{" "}
            <span className="bg-gradient-to-r from-[#00384E] via-[#0A8ABC] to-[#0A8ABC] bg-clip-text text-transparent">
              e preços
            </span>
          </h2>
          <div className="w-[150px] h-[4px] bg-gradient-to-r from-[#308ab4] to-[#41acd6] mb-14 rounded-full" />
          <p className="text-center text-gray-700 mb-8 md:mb-10 font-bold text-lg md:text-2xl">
            Tudo <span className="text-[#41acd6]">incluso</span>. Sem letra
            miúda. Alinhamos objetivos e{" "}
            <span className="text-[#41acd6]">entregamos crescimento.</span>
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow flex flex-col items-center">
              <h4 className="font-bold text-[#00384E] mb-2 text-center">
                Mensal Fixo
              </h4>
              <p className="text-gray-700 mb-2 text-center">
                Valor fechado por mês
              </p>
              <p className="text-gray-500 text-sm mb-4 text-center">
                Empresas que preferem previsibilidade e acompanhamento contínuo.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow flex flex-col items-center">
              <h4 className="font-bold text-[#00384E] mb-2 text-center">
                Success Fee
              </h4>
              <p className="text-gray-700 mb-2 text-center">
                Pagamento por resultado
              </p>
              <p className="text-gray-500 text-sm mb-4 text-center">
                Ideal para quem quer alinhar o sucesso do negócio ao nosso
                trabalho.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            <span className="bg-[#e6f7ff] text-[#00384E] px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
              Gestão completa de mídia
            </span>
            <span className="bg-[#e6f7ff] text-[#00384E] px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
              Análise e acompanhamento estratégico
            </span>
            <span className="bg-[#e6f7ff] text-[#00384E] px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
              Apoio ao time interno
            </span>
            <span className="bg-[#e6f7ff] text-[#00384E] px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
              Acompanhamento semanal com reports
            </span>
          </div>
          <div className="text-center">
            <Button className="bg-[#41acd6] text-white hover:bg-white rounded-[50px] hover:text-[#41acd6] font-bold px-6 md:px-8 py-3 shadow">
              TENHO INTERESSE
            </Button>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL (DEPOIMENTOS) */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white via-[#ebf1f8] to-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00384E] text-center mb-8 md:mb-4">
            Pronto para escalar sua{" "}
            <span className="bg-gradient-to-r from-[#00384E] via-[#0A8ABC] to-[#0A8ABC] bg-clip-text text-transparent">
              operação com growth de verdade?
            </span>
          </h2>
          <div className="w-[150px] h-[4px] bg-gradient-to-r from-[#308ab4] to-[#41acd6] mb-14 rounded-full" />
          <p className="text-center text-gray-700 mb-8 md:mb-10 text-sm md:text-base">
            Olha quem já fez com a gente:
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#f7fbfd] rounded-xl p-6 md:p-8 shadow text-left">
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                &lsquo;A diferença com a Growiser foi imediata. Em poucos meses,
                nosso ROI dobrou e finalmente entendemos onde investir para
                crescer de verdade.&rsquo;
              </p>
              <span className="text-[#00384E] font-bold text-sm md:text-base">
                Fulano, CEO da XYZ
              </span>
            </div>
            <div className="bg-[#f7fbfd] rounded-xl p-6 md:p-8 shadow text-left">
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                &lsquo;O que mais impressiona é a transparência e o
                acompanhamento. O time Growiser realmente veste a camisa do
                cliente.&rsquo;
              </p>
              <span className="text-[#00384E] font-bold text-sm md:text-base">
                Fulana, CEO da XYZ
              </span>
            </div>
          </div>
          <div className="text-center mt-8 md:mt-10">
            <Button className="bg-white text-[#41acd6] hover:bg-[#41acd6] rounded-[50px] hover:text-white font-bold px-6 md:px-8 py-3 shadow">
              QUERO CRESCER COM A GROWISER
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00384E] text-center mb-8 md:mb-4">
            Dúvidas{" "}
            <span className="bg-gradient-to-r from-[#00384E] via-[#0A8ABC] to-[#0A8ABC] bg-clip-text text-transparent">
              frequentes
            </span>
          </h2>
          <div className="w-[150px] h-[4px] bg-gradient-to-r from-[#308ab4] to-[#41acd6] mb-14 rounded-full" />
          <div className="space-y-4">
            {/* Troque por um componente de accordion real depois */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow cursor-pointer">
              <h4 className="font-bold text-[#00384E] mb-2 text-sm md:text-base">
                Como funciona Growth as a Service com a Growiser?
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                Você contrata a Growiser como uma extensão do seu time, focada
                em resultados reais e crescimento contínuo.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow cursor-pointer">
              <h4 className="font-bold text-[#00384E] mb-2 text-sm md:text-base">
                Como é a operação no dia a dia com meu time?
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                Nosso time atua junto ao seu, com reuniões semanais, reports e
                acompanhamento constante.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow cursor-pointer">
              <h4 className="font-bold text-[#00384E] mb-2 text-sm md:text-base">
                Quais são os serviços que estão inclusos?
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                Gestão de mídia, análise de dados, estratégia, execução e
                acompanhamento. Tudo incluso.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow cursor-pointer">
              <h4 className="font-bold text-[#00384E] mb-2 text-sm md:text-base">
                Por que contratar a Growiser e não outra agência?
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                Foco total em resultado, transparência e acompanhamento próximo.
                Não somos só uma agência, somos parceiros de crescimento.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow cursor-pointer">
              <h4 className="font-bold text-[#00384E] mb-2 text-sm md:text-base">
                Como funciona o plano success fee?
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                Você só paga uma porcentagem sobre o resultado gerado.
                Alinhamento total de interesses.
              </p>
            </div>
          </div>
          <div className="text-center mt-8 md:mt-10">
            <Button className="bg-white text-[#41acd6] hover:bg-[#41acd6] rounded-[50px] hover:text-white font-bold px-6 md:px-8 py-3 shadow">
              QUERO CRESCER COM A GROWISER
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-white to-[#5AB4D7] text-white py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-row justify-between items-start">
            <div className="flex flex-col items-start">
              <Image
                src="/logo.png"
                alt="Growiser Logo"
                width={240}
                height={80}
              />
              <span className="text-xl text-[#02283F] font-bold mt-2">
                Resultados reais
                <br /> com estratégias
                <br />{" "}
                <span className="text-white">
                  inteligentes de
                  <br /> crescimento
                  <br />
                  digital.
                </span>
              </span>
            </div>
            <div className="flex flex-col items-start">
              <a
                href="#about"
                className="mb-2 text-[#02283F] hover:underline text-base font-bold"
              >
                Sobre nós
              </a>
              <a
                href="#planos"
                className="mb-2 text-[#02283F] hover:underline text-base font-bold"
              >
                Serviços
              </a>
              <a
                href="#cases"
                className="mb-2 text-[#02283F] hover:underline text-base font-bold"
              >
                Cases
              </a>
              <a
                href="#faq"
                className="mb-2 text-[#02283F] hover:underline text-base font-bold"
              >
                Contato
              </a>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-2 text-[#02283F] hover:underline text-base font-bold cursor-pointer">
                Política de Privacidade
              </div>
              <div className="mb-2 text-[#02283F] hover:underline text-base font-bold cursor-pointer">
                Termos de Uso
              </div>
              <div className="mb-2 text-[#02283F] hover:underline text-base font-bold cursor-pointer">
                Política de Cookies
              </div>
              <div className="mb-2 text-[#02283F] hover:underline text-base font-bold cursor-pointer">
                LGPD
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm text-[#02283F] font-bold">
                contato@growiser.com
              </span>
              <span className="text-sm text-[#02283F] font-bold">
                +55 (xx) xxxxx-xxxx
              </span>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center">
              <Image
                src="/logo.png"
                alt="Growiser Logo"
                width={180}
                height={60}
              />
              <span className="text-lg text-[#02283F] font-bold mt-2 text-center">
                Resultados reais com estratégias{" "}
                <span className="text-white">inteligentes de crescimento digital.</span>
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="flex flex-col items-center">
                <a
                  href="#about"
                  className="mb-2 text-[#02283F] hover:underline text-sm font-bold"
                >
                  Sobre nós
                </a>
                <a
                  href="#planos"
                  className="mb-2 text-[#02283F] hover:underline text-sm font-bold"
                >
                  Serviços
                </a>
                <a
                  href="#cases"
                  className="mb-2 text-[#02283F] hover:underline text-sm font-bold"
                >
                  Cases
                </a>
                <a
                  href="#faq"
                  className="mb-2 text-[#02283F] hover:underline text-sm font-bold"
                >
                  Contato
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 text-[#02283F] hover:underline text-sm font-bold cursor-pointer">
                  Política de Privacidade
                </div>
                <div className="mb-2 text-[#02283F] hover:underline text-sm font-bold cursor-pointer">
                  Termos de Uso
                </div>
                <div className="mb-2 text-[#02283F] hover:underline text-sm font-bold cursor-pointer">
                  Política de Cookies
                </div>
                <div className="mb-2 text-[#02283F] hover:underline text-sm font-bold cursor-pointer">
                  LGPD
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-sm text-[#02283F] font-bold">
                contato@growiser.com
              </span>
              <span className="text-sm text-[#02283F] font-bold">
                +55 (xx) xxxxx-xxxx
              </span>
            </div>
          </div>
        </div>
        
        <div className="w-full flex justify-center text-[#02283F] text-sm mt-6 text-center">
          © Growiser 2024. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
