"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const openWhatsApp = () => {
    const phoneNumber = "5541995085105"; // Número do WhatsApp da Growiser
    const message = "Ola boa tarde, vim pelo site e gostaria de saber mais sobre os serviços da Growiser";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f7fbfd]">
      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Abrir WhatsApp"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </button>

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
            <Button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-[#02aeff] to-[#7dd4fc] text-white text-[18px] font-bold px-6 py-2 rounded-[50px] shadow hover:from-[#7dd4fc] hover:to-[#02aeff]"
            >
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
                onClick={() => {
                  setIsMenuOpen(false);
                  openWhatsApp();
                }}
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
            <Button 
              onClick={openWhatsApp}
              className="bg-white text-[#41acd6] text-[16px] md:text-[18px] font-bold px-6 md:px-8 py-3 rounded-[50px] shadow hover:bg-[#009fd6] hover:text-white"
            >
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
              <span className="opacity-0">.</span>
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
            <Button 
              onClick={openWhatsApp}
              className="bg-white text-[#0A8ABC] hover:bg-[#0A8ABC] rounded-[50px] hover:text-white font-bold px-6 md:px-8 py-3 shadow-lg"
            >
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
            <Button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-[#5BB6D9] to-[#02AEFF] hover:from-white hover:to-white hover:text-[#5BB6D9] text-white rounded-[50px] font-bold px-6 md:px-8 py-3 shadow-lg transition-all duration-300"
            >
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
            <Button 
              onClick={openWhatsApp}
              className="bg-white text-[#41acd6] hover:bg-[#41acd6] rounded-[50px] hover:text-white font-bold px-6 md:px-8 py-3 shadow-lg"
            >
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
          {/* Card de planos responsivo */}
          <div className="flex flex-col w-full max-w-3xl mx-auto bg-white shadow-xl rounded-[30px] md:rounded-[50px] p-4 md:p-8 mb-8">
            <div className="flex flex-col md:hidden w-full">
              <div className="grid grid-cols-2 text-center font-bold text-[#0A8ABC] text-lg mb-2">
                <div>Mensal Fixo</div>
                <div>Success Free</div>
              </div>
              <div className="grid grid-cols-2 text-center mb-2">
                <div className="font-semibold text-xs text-[#00384E]">Como Funciona:</div>
                <div className="font-semibold text-xs text-[#00384E]">Como Funciona:</div>
              </div>
              <div className="grid grid-cols-2 text-center mb-4">
                <div className="text-xs text-[#0569A5]">Valor fechado por mês</div>
                <div className="text-xs text-[#0569A5]">Crescemos juntos: só ganhamos se bater meta</div>
              </div>
              <div className="grid grid-cols-2 text-center mb-2">
                <div className="font-semibold text-xs text-[#00384E]">Ideal Para:</div>
                <div className="font-semibold text-xs text-[#00384E]">Ideal Para:</div>
              </div>
              <div className="grid grid-cols-2 text-center">
                <div className="text-xs text-[#0569A5]">Empresas que preferem previsibilidade</div>
                <div className="text-xs text-[#0569A5]">Empresas focadas em performance e escala</div>
              </div>
            </div>
            {/* DESKTOP: Mantém layout antigo */}
            <div className="hidden md:flex flex-row w-full">
              <div className="flex flex-col w-[40%] items-center justify-between pr-6">
                <Image
                  src="/favicon.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 mb-4"
                />
                <div className="flex flex-col gap-8">
                  <div className="font-bold text-[#00384E] text-lg md:text-xl text-center">
                    Como Funciona:
                  </div>
                  <div className="font-bold text-[#00384E] text-lg md:text-xl text-center">
                    Ideal Para:
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-row w-full mb-2">
                  <div className="flex-1 text-center font-bold text-[#0A8ABC] text-xl md:text-2xl">
                    Mensal Fixo
                  </div>
                  <div className="flex-1 text-center font-bold text-[#0A8ABC] text-xl md:text-2xl">
                    Success Free
                  </div>
                </div>
                <div className="flex flex-row border shadow-2xl border-[#41acd6] rounded-[50px] overflow-hidden relative right-[-32px] bottom-[-32px]">
                  {/* Mensal Fixo */}
                  <div className="flex-1 flex flex-col p-4 md:p-6 text-center justify-between border-b md:border-b-0">
                    <div className="font-semibold text-md text-[#0569A5] mb-2">
                      Valor fechado por mês
                    </div>
                    <div className="font-semibold text-md text-[#0569A5]">
                      Empresas que preferem
                      <br /> previsibilidade
                    </div>
                  </div>
                  {/* Success Fee */}
                  <div className="flex-1 p-4 md:p-6 text-center">
                    <div className="font-semibold text-md text-[#0569A5] mb-2">
                      Crescemos juntos: só ganhamos se bater meta
                    </div>
                    <div className="font-semibold text-md text-[#0569A5]">
                      Empresas focadas em performance e escala
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center font-semibold text-gray-700 mb-4 md:mb-5 mt-8 md:mt-10 max-w-4xl mx-auto text-md md:text-3xl">
            Todos incluem:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 max-w-4xl mx-auto">
            <span className="bg-white shadow-xl text-[#045371] border border-[#5BB6D9] px-3 md:px-4 py-3 md:py-2 rounded-[20px] text-xs md:text-sm flex justify-center items-center text-center min-h-[60px] md:min-h-0">
              Gestão completa de mídia
            </span>
            <span className="bg-white shadow-xl text-[#045371] border border-[#5BB6D9] px-3 md:px-4 py-3 md:py-2 rounded-[20px] text-xs md:text-sm flex justify-center items-center text-center min-h-[60px] md:min-h-0">
              Análise e acompanhamento estratégico
            </span>
            <span className="bg-white shadow-xl text-[#045371] border border-[#5BB6D9] px-3 md:px-4 py-3 md:py-2 rounded-[20px] text-xs md:text-sm flex justify-center items-center text-center min-h-[60px] md:min-h-0">
              Apoio ao time interno
            </span>
            <span className="bg-white shadow-xl text-[#045371] border border-[#5BB6D9] px-3 md:px-4 py-3 md:py-2 rounded-[20px] text-xs md:text-sm flex justify-center items-center text-center min-h-[60px] md:min-h-0">
              Acompanhamento semanal com reports
            </span>
          </div>
          <div className="text-center">
            <Button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-[#5BB6D9] to-[#02AEFF] hover:from-white hover:to-white hover:text-[#5BB6D9] text-white rounded-[50px] font-bold px-6 md:px-8 py-3 shadow-lg transition-all duration-300"
            >
              TENHO INTERESSE
            </Button>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL (DEPOIMENTOS) */}
      {/* <section className="py-12 md:py-16 bg-gradient-to-b from-white via-[#ebf1f8] to-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00384E] text-center mb-8 md:mb-4">
            Pronto para escalar sua{" "}
            <span className="bg-gradient-to-r from-[#00384E] via-[#0A8ABC] to-[#0A8ABC] bg-clip-text text-transparent">
              operação com growth de verdade?
            </span>
          </h2>
          <div className="w-[150px] h-[4px] bg-gradient-to-r from-[#308ab4] to-[#41acd6] mb-14 rounded-full" />
          <p className="text-center text-gray-700 mb-8 md:mb-10 font-bold text-lg md:text-2xl">
            Olha quem já fez{" "}
            <span className="text-[#41acd6]">com a gente:</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-[#f7fbfd] rounded-[30px] md:rounded-[50px] border border-[#53B1D6] p-4 md:p-8 shadow-2xl text-left">
              <p className="text-gray-700 mb-4 text-xs md:text-base leading-relaxed">
                &lsquo;A diferença com a Growiser foi nítida já nos primeiros 10
                dias. Antes, nossas campanhas de mídia paga só geravam custo —
                poucos leads e praticamente nenhuma reunião qualificada. A
                equipe organizou tudo com uma estratégia clara e segmentações
                bem definidas, e os resultados começaram a aparecer rapidamente.
                Pela primeira vez, sentimos que nosso investimento está sendo
                bem direcionado, com leads realmente interessados e reuniões com
                potencial real de negócio.&rsquo;
              </p>
              <span className="text-[#00384E] flex italic w-full justify-end font-bold text-xs md:text-base">
                Fulano, CEO da XYZ
              </span>
            </div>
            <div className="bg-gradient-to-b from-[#53B1D6] to-[#0099D4] rounded-[30px] md:rounded-[50px] p-4 md:p-8 shadow-2xl text-left">
              <p className="text-white mb-4 text-xs md:text-base leading-relaxed">
                &lsquo;O que mais gostei no trabalho da Growiser foi como eles
                pensaram em tudo. A gente estava com a casa meio bagunçada —
                anúncios rodando, mas sem um funil claro, CRM desatualizado e o
                time de vendas meio perdido. Eles ajudaram a organizar e
                conectar tudo: mídia, CRM, abordagem comercial... agora as
                coisas fazem sentido. O lead entra, é nutrido e chega mais
                preparado pra conversar. Foi um diferencial importante ter
                alguém olhando o todo e não só os cliques das campanhas. &rsquo;
              </p>
              <span className="text-white flex italic w-full justify-end font-bold text-xs md:text-base">
                Fulana, CEO da XYZ
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-center justify-center text-center mt-8">
            <p className="text-center md:text-start font-bold text-base md:text-2xl text-[#00384E] leading-tight">
              O que falta
              <br />
              para a sua
              <br />
              empresa
              <br />
              <span className="text-[#41acd6]">
                crescer
                <br /> mais?
              </span>
            </p>
            <Button className="bg-white text-[#41acd6] hover:bg-[#41acd6] rounded-[50px] hover:text-white font-bold px-6 md:px-8 py-3 shadow-lg w-full md:w-auto">
              QUERO CRESCER COM A GROWISER
            </Button>
          </div>
        </div>
      </section> */}

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
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                question: "Como funciona Growth as a Service com a Growiser?",
                answer:
                  "Na prática, atuamos na Growiser como uma extensão do seu time, porém estrategicamente. Analisamos funil, mídia, CRM e vendas para identificar oportunidades de crescimento e sugerimos as formas como poderemos atingi-las.",
              },
              {
                question: "Como é a operação no dia a dia com meu time?",
                answer:
                  "Na Growiser, trabalhamos lado a lado com seu time, com rotinas semanais e muita troca. A gente cria as metas junto com você e acompanhamos os resultados de perto. Tudo acontece de forma colaborativa, com organização, transparência e foco total no que traz resultado.",
              },
              {
                question: "Quais são os serviços que estão inclusos?",
                answer:
                  "Na Growiser, atuamos em estratégias de vendas, CRM e conteúdo conforme as prioridades e necessidades de cada cliente. Sabemos que resultados consistentes exigem um todo bem alinhado — e é aí que entra o tráfego pago: otimizamos o que já funciona e ajustamos o que não gera resultado.",
              },
              {
                question: "Por que contratar a Growiser e não outra agência?",
                answer:
                  "Na Growiser, nosso foco não é só dar a ajuda operacional que nosso cliente precisa, mas sim, pensar junto nas estratégias que funcionam. A gente mergulha no seu negócio, trabalha junto com o seu time e foca no que realmente importa — crescimento consistente e resultados mensuráveis.",
              },
              {
                question: "Como funciona o plano success fee?",
                answer:
                  "Na Growiser, nosso plano success fee significa que parte do nosso pagamento depende dos resultados que entregamos para o seu negócio. Definimos metas juntos e, ao atingi-las, ativamos a porcentagem combinada. Assim, alinhamos nosso compromisso diretamente ao seu crescimento.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[100px] border border-[#5BB6D9] pl-[1.5rem] shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl"
                onClick={() => toggleAccordion(index)}
              >
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-center">
                    <div className="flex-1 pr-6">
                      <h4 className="font-bold text-[#5BB6D9] text-md md:text-2xl mb-2 leading-tight text-center md:text-left">
                        {item.question}
                      </h4>
                      <div className="text-[#5BB6D9] text-sm md:text-base leading-relaxed text-center md:text-left">
                        <p
                          className={`transition-all duration-300 ${
                            openAccordion === index
                              ? "opacity-100"
                              : "opacity-70 line-clamp-2"
                          }`}
                        >
                          {openAccordion === index
                            ? item.answer
                            : item.answer.split(".")[0] + "..."}
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-5 h-5 md:w-6 md:h-6 text-[#5BB6D9] transition-transform duration-300 ${
                          openAccordion === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:mt-10">
            <Button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-[#5BB6D9] to-[#02AEFF] hover:from-white hover:to-white hover:text-[#5BB6D9] text-white rounded-[50px] font-bold px-6 md:px-8 py-3 shadow-lg transition-all duration-300"
            >
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
              <div 
                onClick={openModal}
                className="mb-2 text-[#02283F] hover:underline text-base font-bold cursor-pointer"
              >
                Política de Privacidade
              </div>
              <div 
                onClick={openModal}
                className="mb-2 text-[#02283F] hover:underline text-base font-bold cursor-pointer"
              >
                Termos de Uso
              </div>
              {/* <div className="mb-2 text-[#02283F] hover:underline text-base font-bold cursor-pointer">
                Política de Cookies
              </div>
              <div className="mb-2 text-[#02283F] hover:underline text-base font-bold cursor-pointer">
                LGPD
              </div> */}
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm text-[#02283F] font-bold">
                contato@growiser.com.br
              </span>
              <span className="text-sm text-[#02283F] font-bold">
                +55 (41) 99508-5105
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
                <span className="text-white">
                  inteligentes de crescimento digital.
                </span>
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
                <div 
                  onClick={openModal}
                  className="mb-2 text-[#02283F] hover:underline text-sm font-bold cursor-pointer"
                >
                  Política de Privacidade
                </div>
                <div 
                  onClick={openModal}
                  className="mb-2 text-[#02283F] hover:underline text-sm font-bold cursor-pointer"
                >
                  Termos de Uso
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-sm text-[#02283F] font-bold">
                contato@growiser.com.br
              </span>
              <span className="text-sm text-[#02283F] font-bold">
                +55 (41) 99508-5105
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center text-[#02283F] text-sm mt-6 text-center">
          © Growiser 2024. Todos os direitos reservados.
        </div>
      </footer>

      {/* Modal para Termos de Uso e Política de Privacidade */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 md:p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl md:h-[95vh] h-[98vh] flex flex-col">
            {/* Header da Modal */}
            <div className="flex items-center justify-between p-3 md:p-4 border-b">
              <div className="w-6 md:w-10" />
              <h2 className="flex-1 text-center text-sm md:text-xl font-bold text-[#00384E] px-1 truncate">
                Termos de Uso e Política de Privacidade
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-xl md:text-2xl font-bold w-6 md:w-10 flex justify-end"
                aria-label="Fechar modal"
              >
                &times;
              </button>
            </div>
            {/* Conteúdo da Modal */}
            <div className="flex-1 w-full">
              <iframe
                src="/TERMOS_DE_USO_E_POLÍTICA_DE_PRIVACIDADE_-_GROWISER.pdf"
                className="w-full h-full border-0"
                title="Termos de Uso e Política de Privacidade"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
