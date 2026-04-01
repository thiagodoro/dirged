import "@/App.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, FileText, Users, MapPin, Database, 
  Info, Lightbulb, Award, Rocket, ArrowRight, Building2,
  FileSearch, Archive, Shield, BarChart3, Clock, Target,
  Home, Briefcase, FolderOpen, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "competencias", label: "Competências", icon: Briefcase },
  { id: "capital-humano", label: "Capital Humano", icon: Users },
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
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1764258560286-b3aa856c8ff0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMG5lb24lMjBwdXJwbGUlMjBwaW5rJTIweWVsbG93JTIwZGFyayUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzc1MDA5NDUxfDA&ixlib=rb-4.1.0&q=85"
          alt="Abstract background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a href="https://ejef.tjmg.jus.br" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://customer-assets.emergentagent.com/job_dirged-portal/artifacts/eduw9sv5_logo%20ejef.png" 
              alt="EJEF | TJMG" 
              className="h-12 md:h-16 mx-auto mb-6 object-contain hover:opacity-80 transition-opacity cursor-pointer"
            />
          </a>
          
          <h1 className="font-outfit font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-6">
            Diretoria Executiva de{" "}
            <span className="text-gradient-pink">Gestão da Informação</span>{" "}
            Documental
          </h1>
          
          <p className="font-satoshi text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10">
            Transformando a gestão documental através da inovação, eficiência e excelência no serviço público. 
            Comprometidos com a modernização e preservação da informação judicial.
          </p>

          <div className="flex justify-center">
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
  const competencias = [
    { icon: FileSearch, title: "Gestão Documental", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
    { icon: Database, title: "Preservação Digital", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." },
    { icon: Archive, title: "Arquivamento", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla." },
    { icon: Shield, title: "Segurança da Informação", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim." },
    { icon: BarChart3, title: "Análise de Dados", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt." },
    { icon: Clock, title: "Eficiência Processual", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo." },
  ];

  return (
    <section id="competencias" data-testid="competencias-section" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
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
          <Badge className="mb-4 bg-[#9D00FF]/10 text-[#9D00FF] border-[#9D00FF]/30 uppercase tracking-[0.2em] text-xs px-4 py-2">
            O que fazemos
          </Badge>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Nossas <span className="text-gradient-purple">Competências</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencias.map((item, index) => (
            <motion.div
              key={index}
              data-testid={`competencia-card-${index}`}
              className="group p-6 rounded-2xl bg-[#121212] border border-white/10 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF007F]/20 to-[#9D00FF]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-[#FF007F]" />
              </div>
              <h3 className="font-outfit font-semibold text-xl text-white mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
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
              <Badge className="bg-[#FFE600]/10 text-[#FFE600] border-[#FFE600]/30 uppercase tracking-[0.2em] text-xs px-4 py-2">
                Nossa Equipe
              </Badge>
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
          <Badge className="mb-4 bg-[#FF007F]/10 text-[#FF007F] border-[#FF007F]/30 uppercase tracking-[0.2em] text-xs px-4 py-2">
            Localização
          </Badge>
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
          <Badge className="mb-4 bg-[#FFE600]/10 text-[#FFE600] border-[#FFE600]/30 uppercase tracking-[0.2em] text-xs px-4 py-2">
            Documentos
          </Badge>
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
              <Badge className="bg-[#9D00FF]/10 text-[#9D00FF] border-[#9D00FF]/30 uppercase tracking-[0.2em] text-xs px-4 py-2">
                Informação
              </Badge>
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
          <Badge className="mb-4 bg-[#FF007F]/10 text-[#FF007F] border-[#FF007F]/30 uppercase tracking-[0.2em] text-xs px-4 py-2">
            Novidades
          </Badge>
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
          <Badge className="mb-4 bg-[#FFE600]/10 text-[#FFE600] border-[#FFE600]/30 uppercase tracking-[0.2em] text-xs px-4 py-2">
            Reconhecimento
          </Badge>
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
          <Badge className="mb-4 bg-[#9D00FF]/10 text-[#9D00FF] border-[#9D00FF]/30 uppercase tracking-[0.2em] text-xs px-4 py-2">
            Futuro
          </Badge>
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
        <CapitalHumanoSection />
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
