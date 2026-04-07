import "@/App.css";
import "leaflet/dist/leaflet.css";
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
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

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
              Vídeo institucional (2024)
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

// Carousel Resolução Component
const CarouselResolucao = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselSlides = [
    { src: "https://customer-assets.emergentagent.com/job_4414bca2-0b1b-4096-8a74-e44ca9d41e54/artifacts/z2bcaxm2_img1.png", title: "Gestão de Arquivos: 51 Comarcas" },
    { src: "https://customer-assets.emergentagent.com/job_4414bca2-0b1b-4096-8a74-e44ca9d41e54/artifacts/3222aoma_img2.jpg", title: "Revista EJEF e outros periódicos" },
    { src: "https://customer-assets.emergentagent.com/job_4414bca2-0b1b-4096-8a74-e44ca9d41e54/artifacts/0rl67exw_img3.png", title: "Rede de Bibliotecas Físicas" },
    { src: "https://customer-assets.emergentagent.com/job_4414bca2-0b1b-4096-8a74-e44ca9d41e54/artifacts/nxij0h58_img4.png", title: "Avaliação e Descarte de Processos" },
    { src: "https://customer-assets.emergentagent.com/job_4414bca2-0b1b-4096-8a74-e44ca9d41e54/artifacts/jmmr927l_img5.png", title: "Digitalização e Disponibilização do Arquivo Permanente" },
    { src: "https://customer-assets.emergentagent.com/job_4414bca2-0b1b-4096-8a74-e44ca9d41e54/artifacts/6m2gdhku_img6.png", title: "Biblioteca Digital e Bases de Dados aos setores do TJMG" },
    { src: "https://customer-assets.emergentagent.com/job_4414bca2-0b1b-4096-8a74-e44ca9d41e54/artifacts/z734d7rb_img7.png", title: "Editora EJEF: produção de livros técnicos" },
    { src: "https://customer-assets.emergentagent.com/job_4414bca2-0b1b-4096-8a74-e44ca9d41e54/artifacts/ejkirkmh_img8.png", title: "Recolhimento de Acervo do Corte Cronológico do CNJ" },
    { src: "https://customer-assets.emergentagent.com/job_4414bca2-0b1b-4096-8a74-e44ca9d41e54/artifacts/t1yl3ha4_img10.png", title: "Contingências: Restauração de Processos" },
    { src: "https://customer-assets.emergentagent.com/job_fa3179c1-aa4a-4ec6-967a-a49df4dfc88b/artifacts/s2ostm4p_card10.png", title: "Correios: Expedição de Documentos do TJMG" },
  ];

  const totalSlides = carouselSlides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <div className="w-full rounded-3xl overflow-hidden relative" style={{ minHeight: '380px' }} data-testid="carousel-resolucao">
      <AnimatePresence mode="wait">
        <motion.div
          key={`img-${activeSlide}`}
          className="absolute inset-0 rounded-3xl overflow-hidden bg-black flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={carouselSlides[activeSlide].src}
            alt={carouselSlides[activeSlide].title}
            className="w-full h-full object-cover rounded-3xl"
          />
          {/* Bottom gradient overlay for title */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-3xl" />
          {/* Title */}
          <div className="absolute bottom-10 left-5 z-10 max-w-[80%]">
            <span className="text-white font-outfit font-semibold text-base md:text-lg leading-tight drop-shadow-lg px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm">
              {carouselSlides[activeSlide].title}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className="w-2 h-2 rounded-full transition-all"
            style={{
              backgroundColor: activeSlide === i ? '#fff' : 'rgba(255,255,255,0.4)',
              transform: activeSlide === i ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
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
          {/* Left: Resolution carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex"
          >
            <CarouselResolucao />
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
  const [showDirectorModal, setShowDirectorModal] = useState(false);
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
        { nome: "Coordenação de Orientação e Avaliação Documental", sigla: "CORAV", responsavel: "Vantuir de O. Machado Júnior" },
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
    <section id="organograma" data-testid="organograma-section" className="py-24 md:py-32 px-6 md:px-12 bg-[#1A1A1A]">
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
            A estrutura organizacional da DIRGED e o time de gestores.
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
                  <br />
                  <p
                    className="text-white text-xs inline-block cursor-pointer rounded px-2 mx-auto transition-all hover:ring-2 hover:ring-[#FFE600] hover:text-[#FFE600]"
                    onClick={() => setShowDirectorModal(true)}
                    data-testid="thiago-doro-link"
                  >Thiago Doro</p>
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
                    <br />
                    <span className="text-white text-xs inline-block cursor-pointer rounded px-2 transition-all hover:ring-2 hover:ring-[#FFE600] hover:text-[#FFE600]">André Borges Ribeiro</span>
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
                  <br />
                  <div className="text-center">
                    <span className="text-white text-xs inline cursor-pointer rounded px-2 py-0.5 transition-all hover:ring-2 hover:ring-[#FFE600] hover:text-[#FFE600]">{gerencia.responsavel}</span>
                  </div>
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
                    <span className="text-white text-xs inline-block cursor-pointer rounded px-2 transition-all hover:ring-2 hover:ring-[#FFE600] hover:text-[#FFE600]">{coord.responsavel}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Modal Thiago Doro */}
      <AnimatePresence>
        {showDirectorModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDirectorModal(false)}
            data-testid="director-modal-overlay"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="director-modal"
            >
              {/* Close button */}
              <button
                onClick={() => setShowDirectorModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="director-modal-close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Photo */}
              <div className="md:w-2/5 flex items-end justify-center bg-black p-0 overflow-hidden">
                <motion.img
                  src="https://customer-assets.emergentagent.com/job_4414bca2-0b1b-4096-8a74-e44ca9d41e54/artifacts/g5y30fas_5e3a2da1-ea68-4c8f-813c-f88fd727d683-removebg-preview.png"
                  alt="Thiago Doro"
                  className="w-full h-full object-cover object-top"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                />
              </div>

              {/* Info */}
              <motion.div
                className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-outfit font-bold text-3xl text-white mb-1">Thiago Doro</h3>
                <p className="text-[#9D00FF] font-semibold text-lg mb-6">Diretor Executivo</p>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Formação</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#9D00FF] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Graduação em Biblioteconomia (UFMG)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#9D00FF] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Pós-Graduação em Biblioteconomia com enfoque em Bibliotecas Digitais (Signorelli)</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Cargo de Carreira</p>
                    <p className="text-white/90 text-sm">Analista Judiciário - Bibliotecário (Desde 7/11/2012)</p>
                  </div>
                </div>

                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Carreira</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#3B82F6] mt-1.5 shrink-0" />
                      <div>
                        <p className="text-white/90 text-sm font-medium">Coordenador de Área - COBIB</p>
                        <p className="text-white/50 text-xs">24/02/2014 a 30/10/2017</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#9D00FF] mt-1.5 shrink-0" />
                      <div>
                        <p className="text-white/90 text-sm font-medium">Gerente - GEJUR</p>
                        <p className="text-white/50 text-xs">31/10/2017 a 02/06/2024</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#FF007F] mt-1.5 shrink-0" />
                      <div>
                        <p className="text-white/90 text-sm font-medium">Diretor Executivo - DIRGED</p>
                        <p className="text-white/50 text-xs">03/06/2024 - atual</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Atos Normativos Section
const AtosNormativosSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const categorias = [
    {
      titulo: "Normas Fundamentais",
      cor: "#FF007F",
      atos: [
        { tipo: "Resolução", id: "nº 1137/2026", desc: "Dispõe sobre a estrutura organizacional e o funcionamento das Diretorias Executivas que compõem a Escola Judicial Desembargador Edésio Fernandes – EJEF.", link: "https://ejef.tjmg.jus.br/wp-content/uploads/2026/01/Resolucao-1137-2026-estruturacao-ejef.pdf" },
        { tipo: "Resolução", id: "nº 1080/2024", desc: "Institui o Regulamento da Escola Judicial Desembargador Edésio Fernandes – EJEF.", link: "https://www8.tjmg.jus.br/institucional/at/pdf/re10802024.pdf" },
      ],
    },
    {
      titulo: "Gestão da Informação",
      cor: "#10B981",
      atos: [
        { tipo: "Portaria Conjunta", id: "nº 888/PR/2019", desc: "Dispõe sobre normas gerais de administração das obras que compõem o acervo bibliográfico do Tribunal de Justiça do Estado de Minas Gerais.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/pc08882019.pdf" },
        { tipo: "Portaria", id: "nº 6629/PR/2024", desc: "Designa os integrantes da Comissão de Divulgação da Jurisprudência de que trata a alínea \"c\" do inciso IX do art. 9º do Regimento Interno do TJMG.", link: "https://www8.tjmg.jus.br/institucional/at/pdf/po66292024.pdf" },
        { tipo: "Portaria", id: "nº 171/2VP/2023", desc: "Dispõe sobre a editoração de produção intelectual técnico-jurídica que guarde identidade com o interesse institucional do TJMG.", link: "http://www8.tjmg.gov.br/institucional/at/pdf/pp01712023.pdf" },
        { tipo: "Portaria", id: "nº 164/2VP/2022", desc: "Regulamenta a editoração da Revista EJEF.", link: "https://www8.tjmg.jus.br/institucional/at/pdf/pp01642022.pdf" },
        { tipo: "Portaria", id: "nº 64/2012 (2ª VP)", desc: "Estabelece normas para desenvolvimento e avaliação dos acervos das bibliotecas do TJMG.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/pp00642012.PDF" },
        { tipo: "Portaria", id: "nº 108/2VP/2018", desc: "Institui o Regulamento da Biblioteca do Tribunal de Justiça do Estado de Minas Gerais.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/pp01082018.pdf" },
      ],
    },
    {
      titulo: "Gestão Documental",
      cor: "#3B82F6",
      atos: [
        { tipo: "Resolução", id: "nº 749/2013", desc: "Dispõe sobre o Programa de Gestão Documental do Tribunal de Justiça do Estado de Minas Gerais.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/re07492013.pdf" },
        { tipo: "Resolução", id: "nº 731/2013", desc: "Regulamenta o acesso à informação e a aplicação da Lei nº 12.527/2011, no âmbito do TJMG.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/re07312013.pdf" },
        { tipo: "Portaria Conjunta", id: "nº 728/PR/2018", desc: "Institui a Política de Manutenção de Documentos Eletrônicos no TJMG.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/pc07282018.pdf" },
        { tipo: "Portaria Conjunta", id: "nº 616/PR/2017", desc: "Dispõe sobre a locação de imóvel para armazenamento de documentos de arquivo ou guarda de bens apreendidos no TJMG.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/pc06162017.pdf" },
        { tipo: "Portaria Conjunta", id: "nº 131/2008", desc: "Institui o Manual de Gestão dos Documentos Administrativos da Secretaria do TJMG.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/pc01312008.pdf" },
        { tipo: "Portaria", id: "nº 162/2VP/2022", desc: "Institui o Manual de Gestão Documental do Tribunal de Justiça do Estado de Minas Gerais.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/pp01622022.pdf" },
        { tipo: "Portaria", id: "nº 6915/PR/2024", desc: "Dispõe sobre a Comissão Técnica de Avaliação Documental do TJMG.", link: "https://www8.tjmg.jus.br/institucional/at/pdf/po69152024.pdf" },
        { tipo: "Recomendação Conjunta", id: "nº 1/2ªVP/CGJ/2015", desc: "Dispõe sobre a destinação dos Títulos de Crédito acautelados em cofre nas Secretarias de Juízo.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/rs00012015.pdf" },
      ],
    },
    {
      titulo: "Arquivos Corrente e Intermediário",
      cor: "#9D00FF",
      atos: [
        { tipo: "Portaria Conjunta", id: "nº 1448/PR/2023", desc: "Regulamenta o acesso, por terceiros interessados, aos processos judiciais findos tramitados no TJMG.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/pc14482023.pdf" },
        { tipo: "Portaria Conjunta", id: "nº 27/CGJ/2019", desc: "Disciplina o destino dos autos dos agravos de instrumento no âmbito das Turmas Recursais do Estado de Minas Gerais.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/cpj00272019.pdf" },
        { tipo: "Portaria Conjunta", id: "nº 796/PR/2018", desc: "Disciplina a transferência de processos judiciais para o Arquivo Central do TJMG.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/pc07962018.pdf" },
        { tipo: "Portaria Conjunta", id: "nº 417/PR/2015", desc: "Institui Plano de Classificação e Tabela de Temporalidade – PCTT dos documentos administrativos da justiça de 1º e 2º graus de MG.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/pc04172015.pdf" },
        { tipo: "Portaria Conjunta", id: "nº 330/2014", desc: "Institui Plano de Classificação e Tabela de Temporalidade (PCTT) dos processos judiciais da justiça de 1º e 2º graus de MG.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/pc03302014.pdf" },
        { tipo: "Aviso Conjunto", id: "nº 2/CGJ/2019", desc: "Avisa sobre os procedimentos afetos à separação e ao envio de processos judiciais para avaliação documental.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/cac00022019.pdf" },
      ],
    },
    {
      titulo: "Arquivo Permanente",
      cor: "#FFE600",
      atos: [
        { tipo: "Portaria Conjunta", id: "nº 6/2VP/2022", desc: "Atualiza a regulamentação do marcador \"Tema Relevante\" para documentos e processos indicados à guarda permanente.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/pw00062022.pdf" },
        { tipo: "Portaria", id: "nº 154/2VP/2022", desc: "Regulamenta o funcionamento da Coordenação de Arquivo Permanente do TJMG.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/pp01542022.pdf" },
        { tipo: "Aviso Conjunto", id: "nº 01/2VP/CGJ/2018", desc: "Aviso aos Juízes Diretores de Foro sobre a transferência e cessão de documentos administrativos e/ou judiciais para instituições de ensino e pesquisa.", link: "http://www8.tjmg.jus.br/institucional/at/pdf/av00012018.pdf" },
      ],
    },
    {
      titulo: "Normas Externas Gerais",
      cor: "#00D4FF",
      atos: [
        { tipo: "Lei", id: "nº 12.527/2011", desc: "Regula o acesso a informações.", link: "http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm" },
        { tipo: "Lei", id: "nº 8.159/1991", desc: "Dispõe sobre a política nacional de arquivos públicos e privados e dá outras providências.", link: "http://www.planalto.gov.br/ccivil_03/leis/L8159.htm" },
        { tipo: "Decreto", id: "nº 4.073/2002", desc: "Regulamenta a Lei nº 8.159/1991, que dispõe sobre a política nacional de arquivos públicos e privados.", link: "http://www.planalto.gov.br/ccivil_03/decreto/2002/d4073.htm" },
        { tipo: "CNJ – Resolução", id: "nº 324/2020", desc: "Institui diretrizes e normas de Gestão de Memória e de Gestão Documental e dispõe sobre o Proname.", link: "https://atos.cnj.jus.br/atos/detalhar/3376" },
        { tipo: "CNJ – Resolução", id: "nº 215/2015", desc: "Dispõe, no âmbito do Poder Judiciário, sobre o acesso à informação e a aplicação da Lei 12.527/2011.", link: "https://atos.cnj.jus.br/atos/detalhar/2236" },
        { tipo: "CNJ – Portaria", id: "nº 295/2020", desc: "Institui o Manual de Gestão Documental do Poder Judiciário e o Manual de Gestão de Memória do Poder Judiciário.", link: "https://atos.cnj.jus.br/atos/detalhar/3646" },
        { tipo: "CNJ – Recomendação", id: "nº 37/2011", desc: "Recomenda aos Tribunais a observância das normas de funcionamento do Proname e de seus instrumentos.", link: "https://atos.cnj.jus.br/atos/detalhar/846" },
      ],
    },
  ];

  const totalPages = categorias.length;
  const categoria = categorias[currentPage];

  return (
    <section id="atos-normativos" data-testid="atos-normativos-section" className="py-24 md:py-32 px-6 md:px-12">
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
            Principais atos normativos que orientam a gestão documental e da informação no TJMG.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categorias.map((cat, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              data-testid={`atos-tab-${i}`}
              className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
              style={{
                backgroundColor: currentPage === i ? cat.cor : 'transparent',
                color: currentPage === i ? (cat.cor === '#FFE600' ? '#000' : '#fff') : 'rgba(255,255,255,0.5)',
                border: currentPage === i ? 'none' : '1px solid rgba(255,255,255,0.15)',
              }}
            >
              {cat.titulo}
            </button>
          ))}
        </div>

        {/* Category content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-outfit font-bold text-2xl text-white mb-6" style={{ color: categoria.cor }}>
              {categoria.titulo}
            </h3>
            <div className="space-y-3">
              {categoria.atos.map((ato, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  data-testid={`ato-normativo-${currentPage}-${index}`}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all hover:bg-white/[0.07] group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <a href={ato.link} target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-sm mb-1 hover:underline block" style={{ color: categoria.cor }}>
                        {ato.tipo} {ato.id}
                      </a>
                      <p className="text-white/60 text-sm leading-relaxed">{ato.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Page navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            data-testid="atos-prev"
          >
            <ChevronDown className="w-5 h-5 text-white rotate-90" />
          </button>
          <div className="flex gap-2">
            {categorias.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className="w-2.5 h-2.5 rounded-full transition-all"
                style={{ backgroundColor: currentPage === i ? categorias[currentPage].cor : 'rgba(255,255,255,0.2)' }}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            data-testid="atos-next"
          >
            <ChevronDown className="w-5 h-5 text-white -rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Capital Humano Section
const CapitalHumanoSection = () => {
  const categorias = [
    {
      titulo: "Gestores",
      total: 13,
      color: "#FFE600",
      itens: [
        "1 Diretor Executivo",
        "1 Assessor Técnico",
        "3 Gerentes",
        "8 Coordenadores de Área",
      ],
    },
    {
      titulo: "Servidores",
      total: 31,
      color: "#3B82F6",
      itens: [
        "5 Analistas Judiciários – Bibliotecários",
        "8 Analistas Judiciários – Analista Judiciários",
        "3 Analistas Judiciários – Revisores Judiciários",
        "12 Oficiais Judiciários",
        "3 Agentes Judiciários",
      ],
    },
    {
      titulo: "Terceirizados",
      total: 182,
      color: "#9D00FF",
      itens: [
        "1 Assistente Especializado",
        "126 Assistentes de Apoio Administrativo",
        "16 Mensageiros",
        "6 Arquivistas",
        "3 Assistentes de Direção Superior",
        "3 Assistentes Executivos",
        "2 Conservadores / Restauradores",
        "1 Designer Gráfico",
        "10 Encarregados de Serviço",
        "1 Historiador",
        "9 Supervisores",
        "4 Colaboradores de Acesso (Externo)",
      ],
    },
    {
      titulo: "Estagiários",
      total: 14,
      color: "#10B981",
      itens: [
        "1 Pós-Graduação em Letras",
        "1 Pós-Graduação em Direito",
        "1 Graduação em Direito",
        "3 Graduação em Letras",
        "2 Graduação em Biblioteconomia",
        "1 Graduação em Conservação/Restauro",
        "5 Graduação em Arquivologia",
      ],
    },
    {
      titulo: "Menores Aprendizes",
      total: 5,
      color: "#FF007F",
      itens: [],
    },
  ];

  const [expandido, setExpandido] = useState(null);

  return (
    <section id="capital-humano" data-testid="capital-humano-section" className="py-24 md:py-32 px-6 md:px-12 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-[#FFE600]/20 flex items-center justify-center">
              <Users className="w-8 h-8 text-[#FFE600]" />
            </div>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Capital <span className="text-gradient-yellow">Humano</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Nosso time é composto por profissionais de diversas especialidades
          </p>
        </motion.div>

        {/* Foto da equipe */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-14 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="https://customer-assets.emergentagent.com/job_fa3179c1-aa4a-4ec6-967a-a49df4dfc88b/artifacts/zor913of_54293936614_4429e80f69_o.jpg"
            alt="Equipe DIRGED"
            className="w-full h-[400px] object-cover object-bottom"
            data-testid="capital-humano-foto"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-transparent" />
        </motion.div>

        {/* Total destaque */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-baseline gap-3 bg-white/5 border border-white/10 rounded-2xl px-8 py-5">
            <span className="font-outfit font-bold text-5xl md:text-6xl text-[#FFE600]">245</span>
            <span className="text-white/70 text-lg font-medium">colaboradores</span>
          </div>
        </motion.div>

        {/* Cards por categoria */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {categorias.map((cat, idx) => (
            <motion.div
              key={cat.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-black/40 border border-white/10 rounded-2xl p-5 cursor-pointer hover:border-white/20 transition-all"
              style={{ borderTopColor: cat.color, borderTopWidth: '3px' }}
              data-testid={`capital-card-${idx}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-outfit font-bold text-3xl" style={{ color: cat.color }}>{cat.total}</span>
              </div>
              <h3 className="font-outfit font-semibold text-white text-sm">{cat.titulo}</h3>

              {cat.itens.length > 0 && (
                <button
                  className="flex items-center gap-1 mt-2 text-xs text-white/40 hover:text-white/70 transition-colors"
                  onClick={(e) => { e.stopPropagation(); setExpandido(expandido === idx ? null : idx); }}
                >
                  <span>{expandido === idx ? '[-] Ocultar' : '[+] Ver especificação'}</span>
                </button>
              )}

              <AnimatePresence>
                {expandido === idx && cat.itens.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 border-t border-white/10 space-y-1.5">
                      {cat.itens.map((item, i) => (
                        <p key={i} className="text-white/50 text-xs leading-relaxed">{item}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Orcamento Section
const OrcamentoSection = () => {
  const [openBox, setOpenBox] = useState(null);

  const rubricasConsumo = [
    { nome: "Diárias - Civil (3.14.01)", valor: "5.000" },
    { nome: "Material Gráfico e Impressos (3.30.04)", valor: "100.000" },
    { nome: "Materiais para Escritório (3.30.05)", valor: "49.000" },
    { nome: "Materiais de Laboratório e Produtos Químicos em Geral (3.30.13)", valor: "4.000" },
    { nome: "Livros Técnicos (3.30.31)", valor: "21.200" },
    { nome: "Locação de Serviços de Apoio Administrativo (3.37.02)", valor: "196.482" },
    { nome: "Assinatura de Jornais, Revistas e Periódicos (3.39.11)", valor: "979.018" },
    { nome: "Serviço Postal-Telegráfico (3.39.15)", valor: "45.000.000" },
    { nome: "Locação de Máquinas e Equipamentos (3.39.19)", valor: "131.240" },
    { nome: "Serviço de Digitalização e Indexação (3.39.99)", valor: "343" },
    { nome: "Serviços de Tecnologia da Informação (3.40.02)", valor: "58.508" },
  ];

  const rubricasInvestimento = [
    { nome: "Coleção e Material Bibliográfico (4.52.18)", valor: "169.600" },
  ];

  return (
    <section id="orcamento" data-testid="orcamento-section" className="py-24 md:py-32 px-6 md:px-12">
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
            Orçamento <span className="text-gradient-purple">Resumido (2026)</span>
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            O orçamento da DIRGED é utilizado para custear serviços de correio a todo o TJMG, aquisição de bases de dados de informação técnica a todos os setores do Tribunal, acervo bibliográfico, insumos de conservação e restauro, locação de empilhadeiras e plataformas elevatórias, entre outros. Atualmente, a DIRGED gerencia <strong className="text-[#9D00FF]">36 contratos</strong> com fornecedores.
          </p>
        </motion.div>

        {/* Valor global */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-baseline gap-3 bg-white/5 border border-white/10 rounded-2xl px-8 py-5">
            <span className="text-white/50 text-lg">R$</span>
            <span className="font-outfit font-bold text-6xl md:text-7xl text-white">46.714.391</span>
          </div>
          <p className="text-white/40 text-sm mt-3">Quarenta e seis milhões, setecentos e quatorze mil, trezentos e noventa e um reais</p>
          <p className="text-white/30 text-xs mt-1 uppercase tracking-wider">Orçamento total (Consumo + Investimento)</p>
        </motion.div>

        {/* Cards Consumo e Investimento */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Consumo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 border border-[#10B981]/30 rounded-2xl overflow-hidden"
            data-testid="orcamento-consumo"
          >
            <div className="p-8 text-center">
              <p className="text-white/60 text-sm mb-2 uppercase tracking-wider">Consumo autorizado em 2026</p>
              <p className="font-outfit font-bold text-3xl md:text-4xl text-[#10B981]">R$ 46.544.791,00</p>
            </div>
            <div className="px-8 pb-4">
              <button
                onClick={() => setOpenBox(openBox === 'consumo' ? null : 'consumo')}
                className="flex items-center gap-1 mx-auto text-xs text-white/40 hover:text-white/70 transition-colors"
                data-testid="toggle-consumo"
              >
                <span>{openBox === 'consumo' ? '[-] Ocultar' : '[+] Ver especificação'}</span>
              </button>
            </div>
            <AnimatePresence>
              {openBox === 'consumo' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[#10B981]/20">
                    {rubricasConsumo.map((r, i) => (
                      <div key={i} className="flex justify-between px-6 py-2.5 text-xs border-b border-white/5">
                        <span className="text-white/60">{r.nome}</span>
                        <span className="font-mono text-white/50 ml-2 shrink-0">{r.valor}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Investimento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-black/40 border border-[#FFE600]/30 rounded-2xl overflow-hidden"
            data-testid="orcamento-investimento"
          >
            <div className="p-8 text-center">
              <p className="text-white/60 text-sm mb-2 uppercase tracking-wider">Investimento autorizado em 2026</p>
              <p className="font-outfit font-bold text-3xl md:text-4xl text-[#FFE600]">R$ 169.600,00</p>
            </div>
            <div className="px-8 pb-4">
              <button
                onClick={() => setOpenBox(openBox === 'investimento' ? null : 'investimento')}
                className="flex items-center gap-1 mx-auto text-xs text-white/40 hover:text-white/70 transition-colors"
                data-testid="toggle-investimento"
              >
                <span>{openBox === 'investimento' ? '[-] Ocultar' : '[+] Ver especificação'}</span>
              </button>
            </div>
            <AnimatePresence>
              {openBox === 'investimento' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[#FFE600]/20">
                    {rubricasInvestimento.map((r, i) => (
                      <div key={i} className="flex justify-between px-6 py-2.5 text-xs border-b border-white/5">
                        <span className="text-white/60">{r.nome}</span>
                        <span className="font-mono text-white/50 ml-2 shrink-0">{r.valor}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Mapa Section
const MapaSection = () => {
  const [mapReady, setMapReady] = useState(false);

  const locations = [
    { id: 1, lat: -19.9409, lng: -43.9369, color: "#FF007F", units: "DIRGED, ASGID, GEJUR, GEDAN, GEDOC, COJUR, COGEDE", address: "R. Raul Pompeia, 101 - São Pedro" },
    { id: 2, lat: -19.9259192, lng: -43.9354585, color: "#FFE600", units: "COBIB, COMEX", address: "R. Goiás, 229 - Centro" },
    { id: 3, lat: -19.9140383, lng: -43.9365185, color: "#9D00FF", units: "COARQ, COMEX", address: "Av. do Contorno, 629 - Centro" },
    { id: 4, lat: -19.9445719, lng: -43.9222717, color: "#00D4FF", units: "COBIB, COMEX", address: "Av. Afonso Pena, 4001 - Serra" },
    { id: 5, lat: -19.9117456, lng: -44.0462546, color: "#FF6B35", units: "CORCEN, CORAV, COARPE", address: "Av. Ápio Cardoso, 577 - Cincão - Contagem" },
    { id: 6, lat: -19.9256585, lng: -43.9349312, color: "#10B981", units: "COMEX", address: "Av. Afonso Pena, 1500 - Centro" },
    { id: 7, lat: -19.9397822, lng: -43.9267442, color: "#3B82F6", units: "COMEX", address: "Praça Milton Campos, 16 - Cruzeiro" },
  ];

  useEffect(() => {
    setMapReady(true);
  }, []);

  return (
    <section id="mapa" data-testid="mapa-section" className="py-24 md:py-32 px-6 md:px-12 bg-[#1A1A1A]">
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
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            A DIRGED ocupa <strong className="text-white">7 endereços</strong> em Belo Horizonte e Região Metropolitana.
          </p>
        </motion.div>

        {/* Leaflet Map */}
        <motion.div
          className="rounded-2xl overflow-hidden border border-white/10 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ height: '480px' }}
          data-testid="mapa-leaflet"
        >
          {mapReady && (
            <MapContainer center={[-19.928, -43.980]} zoom={12} style={{ height: '100%', width: '100%' }} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
              />
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png"
              />
              {locations.map((loc) => (
                <Marker
                  key={loc.id}
                  position={[loc.lat, loc.lng]}
                  icon={L.divIcon({
                    className: '',
                    html: `<div style="background:${loc.color};width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:13px;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.4);">${loc.id}</div>`,
                    iconSize: [28, 28],
                    iconAnchor: [14, 14],
                  })}
                >
                  <Popup>
                    <div style={{ minWidth: '180px' }}>
                      <strong style={{ fontSize: '13px' }}>{loc.units}</strong>
                      <br />
                      <span style={{ fontSize: '11px', color: '#666' }}>{loc.address}</span>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </motion.div>

        {/* Legenda */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {locations.map((loc) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: loc.id * 0.05 }}
              className="flex items-start gap-3 p-3 rounded-xl bg-black/30 border border-white/5"
              data-testid={`location-${loc.id}`}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ backgroundColor: loc.color }}>
                {loc.id}
              </div>
              <div>
                <p className="text-white text-xs font-semibold leading-tight">{loc.units}</p>
                <p className="text-white/40 text-xs mt-1">{loc.address}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gestão Documental Section
const GestaoDocumentalSection = () => {

  const comarcas = [
    "Açucena", "Almenara", "Barão de Cocais", "Belo Horizonte", "Betim", "Boa Esperança",
    "Bocaiúva", "Buenópolis", "Caeté", "Camanducaia", "Campina Verde", "Carangola",
    "Cássia", "Cataguases", "Contagem", "Coração de Jesus", "Coronel Fabriciano",
    "Elói Mendes", "Governador Valadares", "Grão Mogol", "Guanhães", "Ibirité",
    "Inhapim", "Ipanema", "Ipatinga", "Itambacuri", "Itapecerica", "Itaúna",
    "Juiz de Fora", "Lagoa Santa", "Lavras", "Machado", "Mariana", "Minas Novas",
    "Nova Lima", "Novo Cruzeiro", "Ouro Preto", "Palma", "Pará de Minas", "Paraopeba",
    "Passos", "Pedro Leopoldo", "Ribeirão das Neves", "Rio Pardo de Minas", "Sabará",
    "Santa Luzia", "São Domingos do Prata", "São João del-Rei", "Teófilo Otoni",
    "Uberaba", "Vespasiano"
  ];

  return (
    <section id="gestao-documental" data-testid="gestao-documental-section" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
          <p className="text-white/60 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Orientação às 298 comarcas do estado, organização de acervos, mudanças em parceria com DENGEP e DIRCONT, coleta de processos para eliminação e recolhimento de processos históricos.
          </p>
        </motion.div>

        {/* Stats destaque */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { value: "9,2 mi", label: "Processos no Arquivo Central", color: "#FFE600" },
            { value: "51", label: "Comarcas atendidas", color: "#FF007F" },
            { value: "320 mi", label: "Documentos eletrônicos", color: "#9D00FF" },
            { value: "84%", label: "Ocupação dos galpões", color: "#10B981" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
              data-testid={`gestao-stat-${i}`}
            >
              <p className="font-outfit font-bold text-2xl md:text-3xl" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-white/50 text-xs mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Cards principais */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Arquivo Central */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 border border-[#FFE600]/20 rounded-2xl p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#FFE600]/20 flex items-center justify-center">
                <Archive className="w-5 h-5 text-[#FFE600]" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-white">Arquivo Central (Contagem)</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFE600] mt-2 shrink-0" />
                <p className="text-white/60 text-sm">Aprox. <strong className="text-white">9.200.000 processos</strong> armazenados</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFE600] mt-2 shrink-0" />
                <p className="text-white/60 text-sm"><strong className="text-white">5 galpões</strong> (Cincão: G1, G6, G7, G8 + Barreiro)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFE600] mt-2 shrink-0" />
                <p className="text-white/60 text-sm"><strong className="text-white">264.252 caixas-arquivo</strong> (20kg cada)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFE600] mt-2 shrink-0" />
                <p className="text-white/60 text-sm">Documentos históricos: aprox. <strong className="text-white">550 mil processos</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFE600] mt-2 shrink-0" />
                <p className="text-white/60 text-sm">70% dos processos eliminados são oriundos do interior</p>
              </div>
            </div>
          </motion.div>

          {/* Documentos Eletrônicos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-black/40 border border-[#9D00FF]/20 rounded-2xl p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#9D00FF]/20 flex items-center justify-center">
                <Database className="w-5 h-5 text-[#9D00FF]" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-white">Gestão de Documentos Eletrônicos</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9D00FF] mt-2 shrink-0" />
                <p className="text-white/60 text-sm"><strong className="text-white">320 milhões</strong> de documentos administrativos digitais pelo sistema SEI!</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9D00FF] mt-2 shrink-0" />
                <p className="text-white/60 text-sm"><strong className="text-white">7,6 milhões</strong> de documentos no PJe/eProc</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9D00FF] mt-2 shrink-0" />
                <p className="text-white/60 text-sm"><strong className="text-white">3 TB</strong> de documentos do Diário do Judiciário Eletrônico (PJe)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9D00FF] mt-2 shrink-0" />
                <p className="text-white/60 text-sm">Projudi: <strong className="text-white">1 milhão de processos</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9D00FF] mt-2 shrink-0" />
                <p className="text-white/60 text-sm">Pioneirismo na preservação e eliminação de documentos eletrônicos (Projudi): Edital nº 1/2024</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9D00FF] mt-2 shrink-0" />
                <p className="text-white/60 text-sm">Contratação do <strong className="text-white">IBICT</strong> - Instituto Brasileiro de Ciência e Tecnologia (Contrato nº 57/2022) para desenvolver o projeto de preservação do acervo arquivístico do TJMG utilizando o modelo Hipátia</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Eliminação e Sustentabilidade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/40 border border-[#10B981]/20 rounded-2xl p-7 mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 flex items-center justify-center">
              <Target className="w-5 h-5 text-[#10B981]" />
            </div>
            <h3 className="font-outfit font-bold text-lg text-white">Eliminação e Sustentabilidade</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { value: "449.509", label: "Processos eliminados em 2025", color: "#10B981" },
              { value: "163 t", label: "Papel doado à ASMARE em 2025", color: "#10B981" },
              { value: "11,3 mi", label: "Processos eliminados desde 2014", color: "#FFE600" },
              { value: "2.928 t", label: "Papel doado desde 2014", color: "#FFE600" },
            ].map((item, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-white/5">
                <p className="font-outfit font-bold text-xl" style={{ color: item.color }}>{item.value}</p>
                <p className="text-white/50 text-xs mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Comarcas atendidas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/30 border border-white/10 rounded-2xl p-6"
        >
          <h3 className="font-outfit font-semibold text-white text-sm mb-4 text-center">51 comarcas atendidas pelo Arquivo Central</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {comarcas.map((c, i) => (
              <span key={i} className="text-white/60 text-sm py-2 px-3 rounded-lg bg-white/5">{c}</span>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-4 text-center">Critério: sinistro ou risco de sua ocorrência (Portaria 796/PR/2018)</p>
        </motion.div>

        {/* Vídeo Gestão Documental */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ height: '480px' }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://customer-assets.emergentagent.com/job_fa3179c1-aa4a-4ec6-967a-a49df4dfc88b/artifacts/otaotlen_video-gd.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </motion.div>
      </div>
    </section>
  );
};

// Gestão da Informação Section
const GestaoInformacaoSection = () => (
  <section id="gestao-informacao" data-testid="gestao-informacao-section" className="py-24 md:py-32 px-6 md:px-12 bg-[#1A1A1A]">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-[#9D00FF]/20 flex items-center justify-center">
            <Database className="w-8 h-8 text-[#9D00FF]" />
          </div>
        </div>
        <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Gestão da <span className="text-gradient-purple">Informação</span>
        </h2>
        <p className="text-white/40 text-lg italic">Em construção...</p>
      </motion.div>
    </div>
  </section>
);

// Últimas Iniciativas Section
const IniciativasSection = () => (
  <section id="iniciativas" data-testid="iniciativas-section" className="py-24 md:py-32 px-6 md:px-12">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-[#FF007F]/20 flex items-center justify-center">
            <Lightbulb className="w-8 h-8 text-[#FF007F]" />
          </div>
        </div>
        <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Últimas <span className="text-gradient-pink">Iniciativas</span>
        </h2>
        <p className="text-white/40 text-lg italic">Em construção...</p>
      </motion.div>
    </div>
  </section>
);

// Prêmios Section
const PremiosSection = () => (
  <section id="premios" data-testid="premios-section" className="py-24 md:py-32 px-6 md:px-12 bg-[#1A1A1A]">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-[#FFE600]/20 flex items-center justify-center">
            <Award className="w-8 h-8 text-[#FFE600]" />
          </div>
        </div>
        <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Nossos <span className="text-gradient-yellow">Prêmios</span>
        </h2>
        <p className="text-white/40 text-lg italic">Em construção...</p>
      </motion.div>
    </div>
  </section>
);

// Projetos Futuros Section
const ProjetosFuturosSection = () => (
  <section id="projetos" data-testid="projetos-section" className="py-24 md:py-32 px-6 md:px-12">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-[#9D00FF]/20 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-[#9D00FF]" />
          </div>
        </div>
        <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Projetos <span className="text-gradient-purple">Futuros</span>
        </h2>
        <p className="text-white/40 text-lg italic">Em construção...</p>
      </motion.div>
    </div>
  </section>
);

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
