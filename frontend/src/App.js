import "@/App.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, FileText, Users, MapPin, Database, 
  Info, Lightbulb, Award, Rocket, ArrowRight, Building2,
  FileSearch, Archive, Shield, BarChart3, Clock, Target, DollarSign,
  Home, Briefcase, FolderOpen, Sparkles, GitBranch, Network
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "competencias", label: "Competências", icon: Briefcase },
  { id: "organograma", label: "Organograma", icon: Network },
  { id: "atos-normativos", label: "Atos Normativos", icon: FileText },
  { id: "capital-humano", label: "Capital Humano", icon: Users },
  { id: "orcamento", label: "Orçamento", icon: DollarSign },
  { id: "mapa", label: "Mapa", icon: MapPin },
  { id: "gestao-documental", label: "Gestão Documental", icon: FolderOpen },
  { id: "gestao-informacao", label: "Gestão da Informação", icon: Database },
  { id: "iniciativas", label: "Iniciativas", icon: Lightbulb },
  { id: "premios", label: "Prêmios", icon: Award },
  { id: "projetos", label: "Projetos Futuros", icon: Sparkles },
];

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/60 backdrop-blur-xl`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center h-20">
          {/* Desktop: Logo + separator + icons centered */}
          <motion.div 
            className="hidden lg:flex items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-outfit font-bold text-xl text-white">DIRGED</span>
            <div className="w-px h-6 bg-white/30 mx-1" />
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                data-testid={`nav-${item.id}-link`}
                onClick={() => scrollToSection(item.id)}
                className={`group relative w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
                  activeSection === item.id 
                    ? "text-[#FF007F] bg-[#FF007F]/10" 
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-black/90 px-2 py-1 rounded text-white pointer-events-none z-50">{item.label}</span>
              </motion.button>
            ))}
            <div className="w-px h-6 bg-white/30 ml-1" />
            <a href="https://ejef.tjmg.jus.br" target="_blank" rel="noopener noreferrer" className="ml-1">
              <img 
                src="https://customer-assets.emergentagent.com/job_dirged-portal/artifacts/x45fyd6l_logo%20ejef.png" 
                alt="EJEF | TJMG" 
                className="h-10 object-contain object-right hover:opacity-80 transition-opacity cursor-pointer"
              />
            </a>
          </motion.div>

          {/* Mobile: Logo left, menu button right */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="font-outfit font-bold text-xl text-white">DIRGED</span>
            </motion.div>
            <button 
              data-testid="mobile-menu-button"
              className="p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  data-testid={`mobile-nav-${item.id}-link`}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id 
                      ? "text-[#FF007F] bg-[#FF007F]/10" 
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section 
      id="home" 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://customer-assets.emergentagent.com/job_4414bca2-0b1b-4096-8a74-e44ca9d41e54/artifacts/4u9ji9jo_video-cortes-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-transparent to-[#0A0A0A]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-outfit font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-6">
            Diretoria Executiva de Gestão da{" "}
            <span className="text-gradient-pink">Informação Documental</span>
          </h1>
          
          <p className="font-satoshi text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10">
            Transformando a gestão documental e a gestão da informação do TJMG através da inovação, eficiência e excelência no serviço público.
          </p>

          <div className="flex justify-center gap-4">
            <Button 
              data-testid="hero-video-button"
              onClick={() => window.open('https://youtu.be/2tKQnre85Xw', '_blank')}
              className="bg-black hover:bg-neutral-800 text-white font-bold px-8 py-6 rounded-full text-lg transition-all hover:scale-105 border border-white/20"
            >
              Vídeo institucional
            </Button>
            <Button 
              data-testid="hero-explore-button"
              onClick={() => document.getElementById('competencias').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#FF007F] hover:bg-[#FF3399] text-white font-bold px-8 py-6 rounded-full text-lg transition-all hover:scale-105"
            >
              Explorar <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Competencias Section
const CompetenciasSection = () => {
  const tagCloudDocumental = [
    "Tabelas Processuais Unificadas", "Fase Corrente", "Fase Intermediária",
    "Fase Permanente", "Organização in loco", "Digitalização de documentos",
    "Documentos Eletrônicos", "Plano de Classificação e Tabela de temporalidade",
    "Eliminação de Documentos", "Gestão de sinistros", "Arquivo (DENGEP)",
  ];
  const tagCloudInformacao = [
    "Gestão do Conhecimento", "Publicações Técnicas", "Boletins de informação jurídica",
    "Pesquisa Jurídica", "Base de Atos Normativos", "Revisão de Textos",
    "Divulgação da Jurisprudência", "Acervo bibliográfico impresso",
    "Acervo bibliográfico digital", "Bases de dados de informação técnica", "Jurisprudência (DIRTEC)",
  ];

  // Shuffle and merge tags
  const allTags = [
    ...tagCloudDocumental.map(t => ({ text: t, type: "documental" })),
    ...tagCloudInformacao.map(t => ({ text: t, type: "informacao" })),
  ].sort(() => Math.random() - 0.5);

  // Duplicate for seamless loop - Row 1: Documental, Row 2: Informação
  const marqueeRow1 = [...tagCloudDocumental, ...tagCloudDocumental];
  const marqueeRow2 = [...tagCloudInformacao, ...tagCloudInformacao];

  return (
    <section id="competencias" data-testid="competencias-section" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-[#9D00FF]/20 flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-[#9D00FF]" />
            </div>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Nossas <span className="text-gradient-purple">Competências</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            O que fazemos? Qual o nosso negócio?
          </p>
        </motion.div>

        {/* Resolution + Boxes Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20" data-testid="resolution-grid">
          {/* Left: Resolution text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex"
          >
            <div className="bg-[#9D00FF] rounded-3xl p-8 md:p-12 w-full flex flex-col justify-center">
              <a href="https://www8.tjmg.jus.br/institucional/at/pdf/re11372026.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <h3 className="font-outfit font-bold text-2xl md:text-3xl text-white mb-8">RESOLUÇÃO N° 1137/2026</h3>
              </a>
              <p className="text-white text-xl md:text-2xl leading-relaxed font-medium">
                <span className="text-white/90">Art. 44.</span> A Diretoria Executiva de Gestão da
                Informação Documental - DIRGED integra a EJEF e tem como objetivo assegurar a
                efetividade na <span className="text-[#FFE600] font-bold">organização</span>,
                <span className="text-[#FFE600] font-bold"> preservação</span> e <span className="text-[#FFE600] font-bold">acessibilidade</span> das informações
                documentais e bibliográficas e na
                <span className="text-[#FFE600] font-bold"> divulgação da jurisprudência</span> e das <span className="text-[#FFE600] font-bold">publicações</span> técnicas e jurídicas.
              </p>
            </div>
          </motion.div>

          {/* Right: 2 Boxes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between h-full"
          >
            {/* Box Gestão Documental */}
            <div className="bg-[#121212] border border-[#3B82F6]/30 rounded-2xl p-6" data-testid="box-gestao-documental">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/20 flex items-center justify-center">
                  <FolderOpen className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <h3 className="font-outfit font-bold text-xl text-[#3B82F6]">Gestão Documental</h3>
              </div>
              <div className="space-y-3 pl-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  <span className="text-white/80 text-sm">Arquivo da 1ª Instância</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  <span className="text-white/80 text-sm">Arquivo da 2ª Instância e Permanente</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  <span className="text-white/80 text-sm">Documentos Eletrônicos</span>
                </div>
              </div>
            </div>

            {/* Box Gestão da Informação */}
            <div className="bg-[#121212] border border-[#10B981]/30 rounded-2xl p-6" data-testid="box-gestao-informacao">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-[#10B981]" />
                </div>
                <h3 className="font-outfit font-bold text-xl text-[#10B981]">Gestão da Informação</h3>
              </div>
              <div className="space-y-3 pl-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="text-white/80 text-sm">Biblioteca</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="text-white/80 text-sm">Jurisprudência</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="text-white/80 text-sm">Publicações Técnicas</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tag Cloud - Rotating Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden"
          data-testid="tag-cloud"
        >
          <h3 className="font-outfit font-bold text-2xl md:text-3xl text-white mb-8 lg:pl-12">NOSSOS ASSUNTOS</h3>
          {/* Row 1 - Gestão Documental */}
          <div className="flex gap-4 mb-4 animate-marquee-left">
            {marqueeRow1.map((tag, i) => (
              <span
                key={`r1-${i}`}
                className="whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium border transition-all hover:scale-105"
                style={{
                  backgroundColor: "rgba(59,130,246,0.12)",
                  borderColor: "rgba(59,130,246,0.3)",
                  color: "#3B82F6",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Row 2 - Gestão da Informação */}
          <div className="flex gap-4 animate-marquee-right">
            {marqueeRow2.map((tag, i) => (
              <span
                key={`r2-${i}`}
                className="whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium border transition-all hover:scale-105"
                style={{
                  backgroundColor: "rgba(16,185,129,0.12)",
                  borderColor: "rgba(16,185,129,0.3)",
                  color: "#10B981",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Organograma Section
const OrganogaramaSection = () => {
  const gerenciasComCoord = [
    { 
      nome: "Gerência de Jurisprudência, Biblioteca e Publicações Técnicas", 
      sigla: "GEJUR", 
      responsavel: "Claudiciano dos Santos Pereira",
      coordenacoes: [
        { nome: "Coordenação de Jurisprudência e Publicações Técnicas", sigla: "COJUR", responsavel: "Mauricio Tobias de Lacerda" },
        { nome: "Coordenação de Biblioteca", sigla: "COBIB", responsavel: "Rafaela Giboschi Carvalho" },
      ]
    },
    { 
      nome: "Gerência de Gestão de Documentos Analógicos", 
      sigla: "GEDAN", 
      responsavel: "Daniela Fernanda da Silva Castro Santos",
      coordenacoes: [
        { nome: "Coordenação de Orientação e Avaliação Documental", sigla: "CORAV", responsavel: "Vantuir de Oliveira Machado Júnior" },
        { nome: "Coordenação do Arquivo Central", sigla: "CORCEN", responsavel: "Marianna Levenhagen Moura Dias" },
        { nome: "Coordenação de Mov. e Expedição de Documentos", sigla: "COMEX", responsavel: "Márcio Charles da Silva" },
      ]
    },
    { 
      nome: "Gerência de Gestão de Documentos da Segunda Instância, Eletrônicos e Permanentes", 
      sigla: "GEDOC", 
      responsavel: "Simone Meireles",
      coordenacoes: [
        { nome: "Coordenação de Arquivo Permanente", sigla: "COARPE", responsavel: "Sônia da Conceição A. dos Santos" },
        { nome: "Coordenação de Arquivo da Segunda Instância", sigla: "COARQ", responsavel: "Giselle Santos Cesário da Costa" },
        { nome: "Coordenação de Gestão de Documentos Eletrônicos", sigla: "COGEDE", responsavel: "Bárbara Maria Wacha de Melo" },
      ]
    }
  ];

  // Dotted line style (small dots)
  const dotStyle = "1,4";

  return (
    <section id="organograma" data-testid="organograma-section" className="py-24 md:py-32 px-6 md:px-12 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-[#FF007F]/20 flex items-center justify-center">
              <Network className="w-8 h-8 text-[#FF007F]" />
            </div>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            <span className="text-gradient-pink">Organograma</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Estrutura organizacional da Diretoria Executiva de Gestão da Informação Documental.
          </p>
        </motion.div>

        {/* DIRGED (centered) with ASGID connected via straight line */}
        <div className="relative mb-0">
          {/* DIRGED - Centered */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative" data-testid="dirged-box">
              <div className="bg-gradient-to-r from-[#FF007F] to-[#9D00FF] p-[2px] rounded-2xl">
                <div className="bg-[#1a1a1a] rounded-2xl px-10 py-6 text-center min-w-[380px]">
                  <p className="text-white font-bold text-base leading-tight mb-3 h-[40px] flex items-center justify-center">
                    Diretoria Executiva de Gestão da Informação Documental
                  </p>
                  <span className="inline-block bg-[#FF007F] rounded-lg px-4 py-1.5 text-white text-sm font-bold mb-2">
                    DIRGED
                  </span>
                  <p className="text-white text-xs h-[16px]">Thiago Doro</p>
                </div>
              </div>
              
              {/* Straight horizontal SVG connector from DIRGED to ASGID */}
              <svg className="absolute overflow-visible" data-testid="dirged-asgid-connector" style={{ left: '100%', top: '0', width: '90px', height: '160px', pointerEvents: 'none' }}>
                <line x1="-2" y1="80" x2="92" y2="80" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="2,3" strokeLinecap="round" />
              </svg>
              
              {/* ASGID Box - aligned vertically with DIRGED center */}
              <motion.div 
                className="absolute"
                style={{ left: 'calc(100% + 90px)', top: '20px' }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                data-testid="asgid-box"
              >
                <div className="bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] p-[2px] rounded-2xl">
                  <div className="bg-[#1a1a1a] rounded-2xl px-5 py-4 text-center w-[240px]">
                    <p className="text-white font-semibold text-xs leading-tight mb-2 h-[32px] flex items-center justify-center">
                      Assessoria Técnica e Jurídica para Gestão da Informação Documental
                    </p>
                    <span className="inline-block bg-[#3B82F6] rounded-lg px-3 py-1 text-white text-[11px] font-bold mb-1">
                      ASGID
                    </span>
                    <p className="text-white text-xs h-[14px]">André Borges Ribeiro</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* SVG lines from DIRGED to Gerências */}
        <div className="flex justify-center">
          <svg width="800" height="90" className="overflow-visible">
            {/* Vertical line extending up to touch DIRGED bottom border */}
            <line x1="400" y1="-6" x2="400" y2="40" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray={dotStyle} strokeLinecap="round" />
            {/* Horizontal line */}
            <line x1="133" y1="40" x2="667" y2="40" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray={dotStyle} strokeLinecap="round" />
            {/* Three vertical lines down to gerências */}
            <line x1="133" y1="40" x2="133" y2="90" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray={dotStyle} strokeLinecap="round" />
            <line x1="400" y1="40" x2="400" y2="90" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray={dotStyle} strokeLinecap="round" />
            <line x1="667" y1="40" x2="667" y2="90" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray={dotStyle} strokeLinecap="round" />
          </svg>
        </div>

        {/* Gerências Row */}
        <div className="grid grid-cols-3 gap-6 mb-0">
          {gerenciasComCoord.map((gerencia, gIndex) => (
            <motion.div 
              key={gIndex}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gIndex * 0.1 }}
            >
              <div className="bg-gradient-to-r from-[#BE185D] to-[#9D174D] p-[2px] rounded-2xl w-full h-[150px]">
                <div className="bg-[#1a1a1a] rounded-2xl p-4 text-center h-full flex flex-col justify-between">
                  <p className="text-white font-semibold text-xs leading-tight h-[48px] flex items-center justify-center text-center">
                    {gerencia.nome}
                  </p>
                  <span className="inline-block bg-[#BE185D] rounded-lg px-3 py-1 text-white text-[11px] font-bold">
                    {gerencia.sigla}
                  </span>
                  <p className="text-white text-xs h-[14px]">{gerencia.responsavel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SVG lines from Gerências to Coordenações */}
        <div className="grid grid-cols-3 gap-6">
          {gerenciasComCoord.map((gerencia, gIndex) => {
            const numCoords = gerencia.coordenacoes.length;
            const width = 280;
            const positions = numCoords === 2 ? [70, 210] : [47, 140, 233];
            
            return (
              <div key={gIndex} className="flex justify-center">
                <svg width={width} height="50" className="overflow-visible">
                  {/* Vertical line from gerência */}
                  <line x1={width/2} y1="0" x2={width/2} y2="20" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray={dotStyle} strokeLinecap="round" />
                  {/* Horizontal line - only between first and last position */}
                  <line x1={positions[0]} y1="20" x2={positions[positions.length-1]} y2="20" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray={dotStyle} strokeLinecap="round" />
                  {/* Vertical lines to coords */}
                  {positions.map((pos, idx) => (
                    <line key={idx} x1={pos} y1="20" x2={pos} y2="50" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray={dotStyle} strokeLinecap="round" />
                  ))}
                </svg>
              </div>
            );
          })}
        </div>

        {/* Coordenações Row */}
        <div className="grid grid-cols-3 gap-6">
          {gerenciasComCoord.map((gerencia, gIndex) => (
            <div 
              key={gIndex} 
              className={`grid gap-2 ${gerencia.coordenacoes.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}
            >
              {gerencia.coordenacoes.map((coord, cIndex) => (
                <motion.div 
                  key={cIndex} 
                  className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] p-[1px] rounded-2xl h-[140px]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (gIndex * 3 + cIndex) * 0.05 }}
                >
                  <div className="bg-[#1a1a1a] rounded-2xl p-3 text-center h-full flex flex-col justify-between">
                    <p className="text-white font-medium text-[10px] leading-tight h-[36px] flex items-center justify-center text-center">
                      {coord.nome}
                    </p>
                    <span className="inline-block bg-[#F59E0B] rounded-lg px-2 py-0.5 text-white text-[9px] font-bold">
                      {coord.sigla}
                    </span>
                    <p className="text-white text-xs h-[24px] flex items-center justify-center">{coord.responsavel}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Atos Normativos Section
const AtosNormativosSection = () => {
  const atos = [
    { tipo: "Resolução", numero: "001/2024", titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", data: "15/03/2024", cor: "#FF007F" },
    { tipo: "Portaria", numero: "045/2024", titulo: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", data: "22/04/2024", cor: "#9D00FF" },
    { tipo: "Instrução Normativa", numero: "012/2024", titulo: "Ut enim ad minim veniam, quis nostrud exercitation ullamco", data: "10/05/2024", cor: "#FFE600" },
    { tipo: "Resolução", numero: "003/2024", titulo: "Duis aute irure dolor in reprehenderit in voluptate velit esse", data: "01/06/2024", cor: "#FF007F" },
    { tipo: "Portaria", numero: "078/2024", titulo: "Excepteur sint occaecat cupidatat non proident sunt in culpa", data: "18/07/2024", cor: "#9D00FF" },
    { tipo: "Instrução Normativa", numero: "025/2024", titulo: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur", data: "05/08/2024", cor: "#FFE600" },
  ];

  return (
    <section id="atos-normativos" data-testid="atos-normativos-section" className="py-24 md:py-32 px-6 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-[#00D4FF]/20 flex items-center justify-center">
              <FileText className="w-8 h-8 text-[#00D4FF]" />
            </div>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Atos <span className="text-[#00D4FF]">Normativos</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Principais atos normativos da DIRGED.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {atos.map((ato, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              data-testid={`ato-normativo-${index}`}
              className="group"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-white/20 transition-all hover:bg-white/[0.07]">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg"
                    style={{ backgroundColor: `${ato.cor}20`, color: ato.cor }}
                  >
                    {ato.tipo}
                  </span>
                  <span className="text-white/40 text-xs font-mono">{ato.numero}</span>
                </div>
                <p className="text-white font-medium text-sm leading-relaxed mb-4">{ato.titulo}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs">{ato.data}</span>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Capital Humano Section
const CapitalHumanoSection = () => {
  const stats = [
    { value: "150+", label: "Colaboradores" },
    { value: "25", label: "Anos de Experiência" },
    { value: "98%", label: "Satisfação" },
    { value: "7", label: "Unidades" },
  ];

  return (
    <section id="capital-humano" data-testid="capital-humano-section" className="py-24 md:py-32 px-6 md:px-12 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBkYXJrfGVufDB8fHx8MTc3NTAwOTQ1M3ww&ixlib=rb-4.1.0&q=85"
              alt="Nossa equipe"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-[#FFE600]/20 flex items-center justify-center">
                <Users className="w-7 h-7 text-[#FFE600]" />
              </div>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Capital <span className="text-gradient-yellow">Humano</span>
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-white/60 mb-10 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="font-outfit font-bold text-3xl text-[#FF007F] mb-1">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Orcamento Section
const OrcamentoSection = () => {
  const orcamentoItems = [
    { label: "Gestão Documental", valor: "R$ 2.500.000", percent: 35, color: "#FF007F" },
    { label: "Tecnologia da Informação", valor: "R$ 1.800.000", percent: 25, color: "#9D00FF" },
    { label: "Capacitação e Treinamento", valor: "R$ 900.000", percent: 12, color: "#FFE600" },
    { label: "Infraestrutura", valor: "R$ 1.200.000", percent: 17, color: "#00D4FF" },
    { label: "Projetos Especiais", valor: "R$ 800.000", percent: 11, color: "#3B82F6" },
  ];

  return (
    <section id="orcamento" data-testid="orcamento-section" className="py-24 md:py-32 px-6 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-[#9D00FF]/20 flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-[#9D00FF]" />
            </div>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            <span className="text-gradient-purple">Orçamento</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Distribuição dos recursos da DIRGED.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Barras de orçamento */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {orcamentoItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-testid={`orcamento-item-${index}`}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium text-sm">{item.label}</span>
                  <span className="text-white/70 text-sm font-mono">{item.valor}</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Card resumo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#9D00FF]/20 to-[#FF007F]/10 border border-white/10 rounded-3xl p-8">
              <h3 className="font-outfit font-bold text-2xl text-white mb-6">Resumo Orçamentário</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/60">Orçamento Total</span>
                  <span className="text-white font-bold text-xl font-mono">R$ 7.200.000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/60">Executado</span>
                  <span className="text-[#00D4FF] font-bold font-mono">R$ 5.400.000</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-white/60">Disponível</span>
                  <span className="text-[#FFE600] font-bold font-mono">R$ 1.800.000</span>
                </div>
              </div>
              <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#9D00FF] to-[#FF007F]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
              <p className="text-white/50 text-sm mt-3 text-center">75% do orçamento executado</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Mapa Section
const MapaSection = () => {
  const locations = {
    bh: [
      { id: 1, name: "São Pedro", color: "#FF007F", units: "DIRGED, ASGID, GEDAN, GEDOC, GEIJR, COJUR, COGEDE" },
      { id: 2, name: "R. Goiás", color: "#FFE600", units: "COBIB, COMEX" },
      { id: 3, name: "CEOP", color: "#9D00FF", units: "COARQ, COMEX" },
      { id: 4, name: "Sede", color: "#00D4FF", units: "COBIB, COMEX" },
    ],
    contagem: [
      { id: 5, name: "CINÇÃO", color: "#FF007F", units: "COARPE, CORCEN, CORAV" },
      { id: 6, name: "AP 1500", color: "#FFE600", units: "COMEX" },
      { id: 7, name: "PMC", color: "#9D00FF", units: "COMEX" },
    ],
  };

  return (
    <section id="mapa" data-testid="mapa-section" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-[#FF007F]/20 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-[#FF007F]" />
            </div>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Onde <span className="text-gradient-pink">Estamos</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A DIRGED está presente em diversas localidades em Belo Horizonte e Contagem, 
            garantindo atendimento eficiente em toda a região metropolitana.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Belo Horizonte */}
          <motion.div
            className="rounded-2xl bg-[#121212] border border-white/10 p-6 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#FF007F]/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#FF007F]" />
              </div>
              <h3 className="font-outfit font-semibold text-xl text-white">Belo Horizonte/MG</h3>
            </div>

            {/* Stylized Map */}
            <div className="relative h-64 rounded-xl bg-[#0A0A0A] mb-6 overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 400 250" fill="none">
                  {/* Grid lines */}
                  {[...Array(10)].map((_, i) => (
                    <line key={`h-${i}`} x1="0" y1={i * 25} x2="400" y2={i * 25} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  ))}
                  {[...Array(16)].map((_, i) => (
                    <line key={`v-${i}`} x1={i * 25} y1="0" x2={i * 25} y2="250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  ))}
                  {/* Roads */}
                  <path d="M0 125 Q 200 125 400 100" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none" />
                  <path d="M200 0 Q 200 125 180 250" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none" />
                </svg>
              </div>
              
              {/* Location markers */}
              <div className="absolute top-[60%] left-[35%]">
                <motion.div 
                  className="relative"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin className="w-8 h-8 text-[#FF007F] drop-shadow-lg" fill="#FF007F" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#0A0A0A] rounded-full flex items-center justify-center text-xs font-bold text-white">1</span>
                </motion.div>
              </div>
              <div className="absolute top-[40%] left-[45%]">
                <motion.div 
                  className="relative"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                  <MapPin className="w-8 h-8 text-[#FFE600] drop-shadow-lg" fill="#FFE600" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#0A0A0A] rounded-full flex items-center justify-center text-xs font-bold text-white">2</span>
                </motion.div>
              </div>
              <div className="absolute top-[20%] left-[55%]">
                <motion.div 
                  className="relative"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                >
                  <MapPin className="w-8 h-8 text-[#9D00FF] drop-shadow-lg" fill="#9D00FF" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#0A0A0A] rounded-full flex items-center justify-center text-xs font-bold text-white">3</span>
                </motion.div>
              </div>
              <div className="absolute top-[70%] left-[60%]">
                <motion.div 
                  className="relative"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                >
                  <MapPin className="w-8 h-8 text-[#00D4FF] drop-shadow-lg" fill="#00D4FF" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#0A0A0A] rounded-full flex items-center justify-center text-xs font-bold text-white">4</span>
                </motion.div>
              </div>
            </div>

            {/* Locations list */}
            <div className="space-y-3">
              {locations.bh.map((loc) => (
                <div key={loc.id} data-testid={`location-bh-${loc.id}`} className="flex items-start gap-3 p-3 rounded-lg bg-[#0A0A0A] hover:bg-white/5 transition-colors">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: loc.color }}>
                    {loc.id}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{loc.name}</div>
                    <div className="text-white/50 text-xs">{loc.units}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contagem */}
          <motion.div
            className="rounded-2xl bg-[#121212] border border-white/10 p-6 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#9D00FF]/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#9D00FF]" />
              </div>
              <h3 className="font-outfit font-semibold text-xl text-white">Contagem/MG</h3>
            </div>

            {/* Stylized Map */}
            <div className="relative h-64 rounded-xl bg-[#0A0A0A] mb-6 overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 400 250" fill="none">
                  {[...Array(10)].map((_, i) => (
                    <line key={`h-${i}`} x1="0" y1={i * 25} x2="400" y2={i * 25} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  ))}
                  {[...Array(16)].map((_, i) => (
                    <line key={`v-${i}`} x1={i * 25} y1="0" x2={i * 25} y2="250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  ))}
                  <path d="M0 150 Q 200 120 400 140" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none" />
                  <path d="M150 0 Q 180 125 160 250" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none" />
                </svg>
              </div>
              
              <div className="absolute top-[50%] left-[40%]">
                <motion.div 
                  className="relative"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin className="w-8 h-8 text-[#FF007F] drop-shadow-lg" fill="#FF007F" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#0A0A0A] rounded-full flex items-center justify-center text-xs font-bold text-white">5</span>
                </motion.div>
              </div>
              <div className="absolute top-[30%] left-[55%]">
                <motion.div 
                  className="relative"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                  <MapPin className="w-8 h-8 text-[#FFE600] drop-shadow-lg" fill="#FFE600" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#0A0A0A] rounded-full flex items-center justify-center text-xs font-bold text-white">6</span>
                </motion.div>
              </div>
              <div className="absolute top-[65%] left-[65%]">
                <motion.div 
                  className="relative"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                >
                  <MapPin className="w-8 h-8 text-[#9D00FF] drop-shadow-lg" fill="#9D00FF" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#0A0A0A] rounded-full flex items-center justify-center text-xs font-bold text-white">7</span>
                </motion.div>
              </div>
            </div>

            {/* Locations list */}
            <div className="space-y-3">
              {locations.contagem.map((loc) => (
                <div key={loc.id} data-testid={`location-contagem-${loc.id}`} className="flex items-start gap-3 p-3 rounded-lg bg-[#0A0A0A] hover:bg-white/5 transition-colors">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: loc.color }}>
                    {loc.id}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{loc.name}</div>
                    <div className="text-white/50 text-xs">{loc.units}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* TJMG Logo reference */}
        <motion.div 
          className="mt-12 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-white/40 text-sm font-outfit">EJEF - Escola Judicial</div>
          <div className="w-px h-6 bg-white/20" />
          <div className="text-white/40 text-sm font-outfit">TJMG - Tribunal de Justiça de Minas Gerais</div>
        </motion.div>
      </div>
    </section>
  );
};

// Gestão Documental Section
const GestaoDocumentalSection = () => {
  const features = [
    { icon: FileText, title: "Digitalização", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod." },
    { icon: Archive, title: "Arquivamento", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
    { icon: Target, title: "Rastreamento", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
    { icon: Shield, title: "Preservação", desc: "Excepteur sint occaecat cupidatat non proident sunt in culpa." },
  ];

  return (
    <section id="gestao-documental" data-testid="gestao-documental-section" className="py-24 md:py-32 px-6 md:px-12 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-[#FFE600]/20 flex items-center justify-center">
              <FolderOpen className="w-8 h-8 text-[#FFE600]" />
            </div>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Gestão <span className="text-gradient-yellow">Documental</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              data-testid={`gestao-doc-card-${index}`}
              className="text-center p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#FFE600]/20 to-[#FF007F]/20 flex items-center justify-center mb-4">
                <item.icon className="w-8 h-8 text-[#FFE600]" />
              </div>
              <h3 className="font-outfit font-semibold text-lg text-white mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gestão da Informação Section
const GestaoInformacaoSection = () => {
  return (
    <section id="gestao-informacao" data-testid="gestao-informacao-section" className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1762279388988-3f8abcc7dca2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBkYXJrfGVufDB8fHx8MTc3NTAwOTQ1M3ww&ixlib=rb-4.1.0&q=85"
          alt="Technology background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-[#9D00FF]/20 flex items-center justify-center">
                <Database className="w-7 h-7 text-[#9D00FF]" />
              </div>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Gestão da <span className="text-gradient-purple">Informação</span>
            </h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-white/60 mb-8 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-[#FF007F]/10 text-[#FF007F] border-[#FF007F]/30 px-4 py-2">Análise de Dados</Badge>
              <Badge className="bg-[#FFE600]/10 text-[#FFE600] border-[#FFE600]/30 px-4 py-2">Segurança</Badge>
              <Badge className="bg-[#9D00FF]/10 text-[#9D00FF] border-[#9D00FF]/30 px-4 py-2">Integração</Badge>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: "99.9%", label: "Disponibilidade" },
              { value: "500K+", label: "Documentos Digitais" },
              { value: "24/7", label: "Monitoramento" },
              { value: "ISO", label: "Certificação" },
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                <div className="font-outfit font-bold text-2xl md:text-3xl text-[#9D00FF] mb-1">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Últimas Iniciativas Section
const IniciativasSection = () => {
  const iniciativas = [
    "Digitalização de Processos Antigos",
    "Sistema de Gestão Eletrônica",
    "Programa de Capacitação",
    "Integração de Sistemas",
    "Automação de Workflows",
    "Portal de Transparência",
  ];

  return (
    <section id="iniciativas" data-testid="iniciativas-section" className="py-24 md:py-32 px-6 md:px-12 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-[#FF007F]/20 flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-[#FF007F]" />
            </div>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Últimas <span className="text-gradient-pink">Iniciativas</span>
          </h2>
        </motion.div>

        {/* Marquee effect */}
        <div className="relative">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...iniciativas, ...iniciativas].map((item, index) => (
              <div
                key={index}
                data-testid={`iniciativa-${index}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0A0A] border border-white/10 text-white/80 hover:border-[#FF007F]/50 hover:text-[#FF007F] transition-all cursor-default"
              >
                <Lightbulb className="w-4 h-4" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Initiative cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { title: "Projeto Alpha", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.", date: "Dez 2024" },
            { title: "Sistema Beta", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.", date: "Nov 2024" },
            { title: "Programa Gamma", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.", date: "Out 2024" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Badge className="mb-4 bg-[#FF007F]/10 text-[#FF007F] border-[#FF007F]/30 text-xs">{item.date}</Badge>
              <h3 className="font-outfit font-semibold text-xl text-white mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

// Prêmios Section
const PremiosSection = () => {
  const premios = [
    { year: "2024", title: "Excelência em Gestão", org: "CNPJ" },
    { year: "2023", title: "Inovação Digital", org: "TJMG" },
    { year: "2022", title: "Melhor Práticas", org: "CNJ" },
    { year: "2021", title: "Transformação Digital", org: "TJMG" },
  ];

  return (
    <section id="premios" data-testid="premios-section" className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/28551568/pexels-photo-28551568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Awards background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-[#FFE600]/20 flex items-center justify-center">
              <Award className="w-8 h-8 text-[#FFE600]" />
            </div>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Nossos <span className="text-gradient-yellow">Prêmios</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {premios.map((premio, index) => (
            <motion.div
              key={index}
              data-testid={`premio-card-${index}`}
              className="group relative p-6 rounded-2xl bg-[#121212]/80 backdrop-blur-sm border border-white/10 text-center overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFE600]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <Award className="w-12 h-12 mx-auto text-[#FFE600] mb-4" />
                <div className="font-outfit font-bold text-3xl text-white mb-2">{premio.year}</div>
                <h3 className="font-semibold text-lg text-white mb-1">{premio.title}</h3>
                <p className="text-white/50 text-sm">{premio.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projetos Futuros Section
const ProjetosFuturosSection = () => {
  const projetos = [
    { icon: Rocket, title: "IA para Análise de Documentos", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", status: "Em Planejamento" },
    { icon: Database, title: "Migração para Cloud", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.", status: "2025" },
    { icon: Shield, title: "Blockchain para Autenticidade", desc: "Duis aute irure dolor in reprehenderit in voluptate velit.", status: "2026" },
  ];

  return (
    <section id="projetos" data-testid="projetos-section" className="py-24 md:py-32 px-6 md:px-12 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-[#9D00FF]/20 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[#9D00FF]" />
            </div>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Projetos <span className="text-gradient-purple">Futuros</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vislumbrando o futuro da gestão documental.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#9D00FF] via-[#FF007F] to-[#FFE600] hidden lg:block" />

          <div className="space-y-12">
            {projetos.map((projeto, index) => (
              <motion.div
                key={index}
                data-testid={`projeto-card-${index}`}
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 w-full">
                  <div className={`p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 card-hover ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#9D00FF]/20 to-[#FF007F]/20 flex items-center justify-center">
                        <projeto.icon className="w-7 h-7 text-[#9D00FF]" />
                      </div>
                      <Badge className="bg-[#9D00FF]/10 text-[#9D00FF] border-[#9D00FF]/30">{projeto.status}</Badge>
                    </div>
                    <h3 className="font-outfit font-semibold text-xl text-white mb-2">{projeto.title}</h3>
                    <p className="text-white/50">{projeto.desc}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-4 h-4 rounded-full bg-[#9D00FF] ring-4 ring-[#9D00FF]/30 hidden lg:block" />

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer data-testid="footer" className="py-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-outfit font-bold text-xl text-white">DIRGED</span>
          
          <p className="text-white/40 text-sm text-center">
            R. Raul Pompéia, 101. 12° andar. São Pedro - Belo Horizonte/MG | dirged@tjmg.jus.br | (31) 3289-8615
          </p>

          <a href="https://ejef.tjmg.jus.br" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://customer-assets.emergentagent.com/job_dirged-portal/artifacts/eduw9sv5_logo%20ejef.png" 
              alt="EJEF | TJMG" 
              className="h-12 object-contain hover:opacity-80 transition-opacity cursor-pointer"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

// Main App
function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main>
        <HeroSection />
        <CompetenciasSection />
        <OrganogaramaSection />
        <AtosNormativosSection />
        <CapitalHumanoSection />
        <OrcamentoSection />
        <MapaSection />
        <GestaoDocumentalSection />
        <GestaoInformacaoSection />
        <IniciativasSection />
        <PremiosSection />
        <ProjetosFuturosSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
