import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, FolderOpen, Database } from "lucide-react";

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
    { src: "https://customer-assets.emergentagent.com/job_4414bca2-0b1b-4096-8a74-e44ca9d41e54/artifacts/t1yl3ha4_img10.png", title: "Contingências: Tratamento e Recuperação de Processos" },
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

export default CompetenciasSection;
