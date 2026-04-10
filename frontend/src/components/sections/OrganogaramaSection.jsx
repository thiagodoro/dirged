import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Network, X } from "lucide-react";

const OrganogaramaSection = () => {
  const [showDirectorModal, setShowDirectorModal] = useState(false);
  const [showSimoneModal, setShowSimoneModal] = useState(false);
  const [showAndreModal, setShowAndreModal] = useState(false);
  const [showDanielaModal, setShowDanielaModal] = useState(false);
  const [showMariannaModal, setShowMariannaModal] = useState(false);
  const [showGiselleModal, setShowGiselleModal] = useState(false);
  const [showRafaelaModal, setShowRafaelaModal] = useState(false);
  const [showBarbaraModal, setShowBarbaraModal] = useState(false);
  const [showMauricioModal, setShowMauricioModal] = useState(false);
  const [showMarcioModal, setShowMarcioModal] = useState(false);
  const [showSoniaModal, setShowSoniaModal] = useState(false);
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
                    <span className="text-white text-xs inline-block cursor-pointer rounded px-2 transition-all hover:ring-2 hover:ring-[#FFE600] hover:text-[#FFE600]" onClick={() => setShowAndreModal(true)}>André Borges Ribeiro</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* SVG lines from DIRGED to Gerências */}
        <div className="flex justify-center">
          <svg width="800" height="90" className="overflow-visible">
            <line x1="400" y1="-6" x2="400" y2="40" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray={dotStyle} strokeLinecap="round" />
            <line x1="133" y1="40" x2="667" y2="40" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray={dotStyle} strokeLinecap="round" />
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
                    <span
                      className="text-white text-xs inline cursor-pointer rounded px-2 py-0.5 transition-all hover:ring-2 hover:ring-[#FFE600] hover:text-[#FFE600]"
                      onClick={() => {
                        if (gerencia.sigla === 'GEDOC') setShowSimoneModal(true);
                        if (gerencia.sigla === 'GEDAN') setShowDanielaModal(true);
                      }}
                    >{gerencia.responsavel}</span>
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
                  <line x1={width/2} y1="0" x2={width/2} y2="20" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray={dotStyle} strokeLinecap="round" />
                  <line x1={positions[0]} y1="20" x2={positions[positions.length-1]} y2="20" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray={dotStyle} strokeLinecap="round" />
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
                    <span
                      className="text-white text-xs inline-block cursor-pointer rounded px-2 transition-all hover:ring-2 hover:ring-[#FFE600] hover:text-[#FFE600]"
                      onClick={() => {
                        if (coord.sigla === 'CORCEN') setShowMariannaModal(true);
                        if (coord.sigla === 'COARQ') setShowGiselleModal(true);
                        if (coord.sigla === 'COBIB') setShowRafaelaModal(true);
                        if (coord.sigla === 'COGEDE') setShowBarbaraModal(true);
                        if (coord.sigla === 'COJUR') setShowMauricioModal(true);
                        if (coord.sigla === 'COMEX') setShowMarcioModal(true);
                        if (coord.sigla === 'COARPE') setShowSoniaModal(true);
                      }}
                    >{coord.responsavel}</span>
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
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="director-modal"
            >
              <button
                onClick={() => setShowDirectorModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="director-modal-close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="md:w-2/5 flex items-end justify-center bg-black p-0 overflow-hidden">
                <motion.img
                  src="https://customer-assets.emergentagent.com/job_8387f5d5-f13d-43a6-9c9c-da5c8be98deb/artifacts/ays2xooz_WhatsApp%20Image%202026-04-09%20at%2023.46.01.jpeg"
                  alt="Thiago Doro"
                  className="w-full h-full object-cover object-top"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                />
              </div>

              <motion.div
                className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-outfit font-bold text-3xl text-white mb-1">Thiago Doro</h3>
                <p className="text-[#9D00FF] font-semibold text-lg mb-6">Diretor - DIRGED</p>

                <div className="space-y-5">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Cargo de Carreira</p>
                    <p className="text-white/90 text-sm">Analista Judiciário - Bibliotecário (Desde 7/11/2012)</p>
                  </div>

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
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Simone Meireles */}
      <AnimatePresence>
        {showSimoneModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSimoneModal(false)}
            data-testid="simone-modal-overlay"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="simone-modal"
            >
              <button
                onClick={() => setShowSimoneModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="simone-modal-close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="md:w-2/5 flex items-end justify-center bg-black p-0 overflow-hidden">
                <motion.img
                  src="https://customer-assets.emergentagent.com/job_fa3179c1-aa4a-4ec6-967a-a49df4dfc88b/artifacts/9omrbmjn_simone-removebg-preview.png"
                  alt="Simone Meireles"
                  className="w-full h-full object-cover object-top"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                />
              </div>

              <motion.div
                className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                    <h3 className="font-outfit font-bold text-3xl text-white mb-1">Simone Meireles</h3>
                    <p className="text-[#FFE600] font-semibold text-lg mb-6">Gerente - GEDOC</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Cargo de Carreira</p>
                    <p className="text-white/90 text-sm">Oficial Judiciário B (Desde 11/02/2008)</p>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Formação</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFE600] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Graduação em Pedagogia pela UFMG</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFE600] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Graduação em Arquivologia pela UNIASSELVI</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFE600] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Pós-graduação em Gestão de Documentos e Informações e em Gestão Eletrônica de Documentos: Organizações Públicas pela UNYLEYA</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Carreira</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#3B82F6] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Coordenadora da COARQ</p>
                          <p className="text-white/50 text-xs">02/08/2012 - 13/02/2019</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FF007F] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Gerente da GEDOC</p>
                          <p className="text-white/50 text-xs">14/02/2019 - atual</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal André Borges Ribeiro */}
      <AnimatePresence>
        {showAndreModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAndreModal(false)}
            data-testid="andre-modal-overlay"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="andre-modal"
            >
              <button
                onClick={() => setShowAndreModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="andre-modal-close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="md:w-2/5 flex items-end justify-center bg-black p-0 overflow-hidden">
                <motion.img
                  src="https://customer-assets.emergentagent.com/job_fa3179c1-aa4a-4ec6-967a-a49df4dfc88b/artifacts/dn4gsuqq_Andre-removebg-preview.png"
                  alt="André Borges Ribeiro"
                  className="w-full h-full object-cover object-top"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                />
              </div>

              <motion.div
                className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                    <h3 className="font-outfit font-bold text-3xl text-white mb-1">André Borges Ribeiro</h3>
                    <p className="text-[#10B981] font-semibold text-lg mb-6">Assessor Técnico - ASGID</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Cargo de Carreira</p>
                    <p className="text-white/90 text-sm">Analista Judiciário (Desde 15/09/2006)</p>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Formação</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Direito (Centro Universitário de Patos de Minas)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm italic">Pós-graduação: a informar</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Carreira</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#3B82F6] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Assessor Técnico - ASGID</p>
                          <p className="text-white/50 text-xs">2007 - 2012</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9D00FF] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Diretor Executivo - DIRGED</p>
                          <p className="text-white/50 text-xs">2012 - 2015</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FFE600] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Diretor Executivo - DIRDEP</p>
                          <p className="text-white/50 text-xs">2015 - 2016</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9D00FF] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Diretor Executivo - DIRGED</p>
                          <p className="text-white/50 text-xs">2016 - 2018</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FF007F] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Assessor Técnico - ASGID</p>
                          <p className="text-white/50 text-xs">2018 - atual</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Daniela Fernanda Santos */}
      <AnimatePresence>
        {showDanielaModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDanielaModal(false)}
            data-testid="daniela-modal-overlay"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="daniela-modal"
            >
              <button
                onClick={() => setShowDanielaModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="daniela-modal-close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="md:w-2/5 flex items-end justify-center bg-black p-0 overflow-hidden">
                <motion.img
                  src="https://customer-assets.emergentagent.com/job_fa3179c1-aa4a-4ec6-967a-a49df4dfc88b/artifacts/tty2qt7i_daniela-removebg-preview.png"
                  alt="Daniela Fernanda Santos"
                  className="w-full h-full object-cover object-top"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                />
              </div>

              <motion.div
                className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                    <h3 className="font-outfit font-bold text-3xl text-white mb-1">Daniela Santos</h3>
                    <p className="text-[#FF007F] font-semibold text-lg mb-6">Gerente - GEDAN</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Cargo de Carreira</p>
                    <p className="text-white/90 text-sm">Analista Judiciária (Desde 24/06/2010)</p>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Formação</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF007F] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Direito (PUC Minas)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF007F] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Direito Público (Anhanguera - Uniderp)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF007F] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Gestão Judiciária (Universidade de Brasília - UNB)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF007F] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Gestão de Documentos (Faculdade Unyleya)</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Carreira</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#3B82F6] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Estagiária do TJMG</p>
                          <p className="text-white/50 text-xs">2003</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#10B981] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Escrevente - TJMG 1ª Instância</p>
                          <p className="text-white/50 text-xs">2004 - 2006</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9D00FF] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Assessoria - TJMG 1ª Instância</p>
                          <p className="text-white/50 text-xs">2007 - 2012</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FF007F] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Gerente - GEDAN</p>
                          <p className="text-white/50 text-xs">04/12/2014 - atual</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Marianna Levenhagen */}
      <AnimatePresence>
        {showMariannaModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMariannaModal(false)}
            data-testid="marianna-modal-overlay"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="marianna-modal"
            >
              <button
                onClick={() => setShowMariannaModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="marianna-modal-close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="md:w-2/5 flex items-end justify-center bg-black p-0 overflow-hidden">
                <motion.img
                  src="https://customer-assets.emergentagent.com/job_fa3179c1-aa4a-4ec6-967a-a49df4dfc88b/artifacts/jz6u7gtw_Mariana-removebg-preview.png"
                  alt="Marianna Levenhagen"
                  className="w-full h-full object-cover object-top"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                />
              </div>

              <motion.div
                className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                    <h3 className="font-outfit font-bold text-3xl text-white mb-1">Marianna Levenhagen</h3>
                    <p className="text-[#FF6B35] font-semibold text-lg mb-6">Coordenadora - CORCEN</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Cargo de Carreira</p>
                    <p className="text-white/90 text-sm">Coordenador de Área (RA)</p>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Formação</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Graduação em Direito (PUC Minas)</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Carreira</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#3B82F6] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Estagiária TJMG - 19ª Câmara Cível</p>
                          <p className="text-white/50 text-xs">Fevereiro/2019 - Outubro/2020</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FF007F] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Coordenadora de Área - CORCEN</p>
                          <p className="text-white/50 text-xs">06/05/2025 - atual</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Giselle Cesário da Costa */}
      <AnimatePresence>
        {showGiselleModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowGiselleModal(false)}
            data-testid="giselle-modal-overlay"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="giselle-modal"
            >
              <button
                onClick={() => setShowGiselleModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="md:w-2/5 flex items-end justify-center bg-black p-0 overflow-hidden">
                <motion.img
                  src="https://customer-assets.emergentagent.com/job_fa3179c1-aa4a-4ec6-967a-a49df4dfc88b/artifacts/roavrudl_Giselle-removebg-preview.png"
                  alt="Giselle Cesário da Costa"
                  className="w-full h-full object-cover object-top"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                />
              </div>

              <motion.div
                className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                    <h3 className="font-outfit font-bold text-3xl text-white mb-1">Giselle Cesário</h3>
                    <p className="text-[#00D4FF] font-semibold text-lg mb-6">Coordenadora - COARQ</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Cargo de Carreira</p>
                    <p className="text-white/90 text-sm">Oficial Judiciário (Desde 29/01/2014)</p>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Formação</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Graduação em Arquivologia (UFMG)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Graduação em Geografia (UFMG)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Pós-graduação em Direito das Mulheres, de Família, Administrativo e Processual Civil</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Carreira</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FF007F] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Coordenadora de Área - COARQ</p>
                          <p className="text-white/50 text-xs">14/02/2019 - atual</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Rafaela Carvalho */}
      <AnimatePresence>
        {showRafaelaModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowRafaelaModal(false)}
            data-testid="rafaela-modal-overlay"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="rafaela-modal"
            >
              <button
                onClick={() => setShowRafaelaModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="rafaela-modal-close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="md:w-2/5 flex items-end justify-center bg-black p-0 overflow-hidden">
                <motion.img
                  src="https://customer-assets.emergentagent.com/job_8387f5d5-f13d-43a6-9c9c-da5c8be98deb/artifacts/gp216j5b_rafaela-removebg-preview.png"
                  alt="Rafaela Carvalho"
                  className="w-full h-full object-cover object-top"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                />
              </div>

              <motion.div
                className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                    <h3 className="font-outfit font-bold text-3xl text-white mb-1">Rafaela Giboschi</h3>
                    <p className="text-[#F59E0B] font-semibold text-lg mb-6">Coordenadora - COBIB</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Cargo de Carreira</p>
                    <p className="text-white/90 text-sm">Analista Judiciário - Bibliotecária (Desde 7/11/2012)</p>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Formação</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Técnico em Administração (Escola Internacional de Formação Gerencial - Fundação Torino)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Graduação em Biblioteconomia (UFMG)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Pós-graduação em Gestão de Bibliotecas Públicas (Unyleya)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Pós-graduação em Gestão de Documentos e Informações (Unyleya) - em curso</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Carreira</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FF007F] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Coordenadora - COBIB</p>
                          <p className="text-white/50 text-xs">31/10/2017 - atual</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Bárbara Wacha */}
      <AnimatePresence>
        {showBarbaraModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBarbaraModal(false)}
            data-testid="barbara-modal-overlay"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="barbara-modal"
            >
              <button
                onClick={() => setShowBarbaraModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="barbara-modal-close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="md:w-2/5 flex items-end justify-center bg-black p-0 overflow-hidden">
                <motion.img
                  src="https://customer-assets.emergentagent.com/job_8387f5d5-f13d-43a6-9c9c-da5c8be98deb/artifacts/85gm43of_barbara-removebg-preview.png"
                  alt="Bárbara Wacha"
                  className="w-full h-full object-cover object-top"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                />
              </div>

              <motion.div
                className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                    <h3 className="font-outfit font-bold text-3xl text-white mb-1">Bárbara Wacha</h3>
                    <p className="text-[#A78BFA] font-semibold text-lg mb-6">Coordenadora - COGEDE</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Cargo de Carreira</p>
                    <p className="text-white/90 text-sm">Coordenador de Área (RA)</p>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Formação</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Graduação em Arquivologia (UFMG)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Pós-Graduação em Gestão Eletrônica de Documentos: organizações privadas (Unyleya)</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Carreira</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#3B82F6] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Arquivista - GEDOC</p>
                          <p className="text-white/50 text-xs">2019 - 2022</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9D00FF] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Coordenadora de Serviço</p>
                          <p className="text-white/50 text-xs">08/07/2022 - 07/06/2024</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FF007F] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Coordenadora de Área - COGEDE</p>
                          <p className="text-white/50 text-xs">08/06/2024 - atual</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Maurício Lacerda */}      <AnimatePresence>
        {showMauricioModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMauricioModal(false)}
            data-testid="mauricio-modal-overlay"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="mauricio-modal"
            >
              <button
                onClick={() => setShowMauricioModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="mauricio-modal-close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="md:w-2/5 flex items-end justify-center bg-black p-0 overflow-hidden">
                <motion.img
                  src="https://customer-assets.emergentagent.com/job_8387f5d5-f13d-43a6-9c9c-da5c8be98deb/artifacts/vgkgoruv_mauricio-removebg-preview.png"
                  alt="Maurício Lacerda"
                  className="w-full h-full object-cover object-top"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                />
              </div>

              <motion.div
                className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                    <h3 className="font-outfit font-bold text-3xl text-white mb-1">Mauricio Lacerda</h3>
                    <p className="text-[#38BDF8] font-semibold text-lg mb-6">Coordenador - COJUR</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Cargo de Carreira</p>
                    <p className="text-white/90 text-sm">Analista Judiciário - Analista Judiciário (Desde 09/08/2010)</p>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Formação</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Graduação em Direito (UFMG)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Pós-Graduação em Direito Público (Faculdade Arnaldo)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Pós-Graduação em Direito Privado (Faculdade Arnaldo)</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Carreira</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#3B82F6] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Assistente Judiciário - 3ª Câmara Criminal</p>
                          <p className="text-white/50 text-xs">21/10/2010 - 20/02/2011</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FF007F] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Coordenador de Área - COJUR</p>
                          <p className="text-white/50 text-xs">01/09/2025 - atual</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Márcio Charles */}
      <AnimatePresence>
        {showMarcioModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMarcioModal(false)}
            data-testid="marcio-modal-overlay"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="marcio-modal"
            >
              <button
                onClick={() => setShowMarcioModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="marcio-modal-close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="md:w-2/5 flex items-end justify-center bg-black p-0 overflow-hidden">
                <motion.img
                  src="https://customer-assets.emergentagent.com/job_8387f5d5-f13d-43a6-9c9c-da5c8be98deb/artifacts/jn2kumcu_Marcio-removebg-preview.png"
                  alt="Márcio Charles da Silva"
                  className="w-full h-full object-cover object-top"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                />
              </div>

              <motion.div
                className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                    <h3 className="font-outfit font-bold text-3xl text-white mb-1">Márcio Silva</h3>
                    <p className="text-[#F472B6] font-semibold text-lg mb-6">Coordenador - COMEX</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Cargo de Carreira</p>
                    <p className="text-white/90 text-sm">Oficial Judiciário (Desde 26/11/2007)</p>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Formação</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F472B6] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Graduação em Análise e Desenvolvimento de Sistemas (UNA)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F472B6] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Pós-graduação em Direito Constitucional (PROMINAS)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F472B6] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Pós-graduação em Direito de Família e Sucessões (PROMINAS)</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Carreira</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FF007F] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Coordenador de Área - COMEX</p>
                          <p className="text-white/50 text-xs">30/07/2015 - atual</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Sônia Santos */}
      <AnimatePresence>
        {showSoniaModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSoniaModal(false)}
            data-testid="sonia-modal-overlay"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="sonia-modal"
            >
              <button
                onClick={() => setShowSoniaModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="sonia-modal-close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="md:w-2/5 flex items-end justify-center bg-black p-0 overflow-hidden">
                <motion.img
                  src="https://customer-assets.emergentagent.com/job_8387f5d5-f13d-43a6-9c9c-da5c8be98deb/artifacts/z3xslbvu_sonia.png"
                  alt="Sônia Santos"
                  className="w-full h-full object-cover object-top"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                />
              </div>

              <motion.div
                className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center overflow-y-auto"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                    <h3 className="font-outfit font-bold text-3xl text-white mb-1">Sônia Santos</h3>
                    <p className="text-[#14B8A6] font-semibold text-lg mb-6">Coordenadora - COARPE</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Cargo de Carreira</p>
                    <p className="text-white/90 text-sm">Oficial Judiciário (Desde 11/02/2008)</p>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Formação</p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Licenciatura plena em História (Centro Universitário UNI-BH)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Bacharelado em Direito (UFMG)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Pós-Graduação em Direito Constitucional (Faculdade Única)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Pós-Graduação em Direito Administrativo (Faculdade Única)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-1.5 shrink-0" />
                        <p className="text-white/90 text-sm">Pós-Graduação em Direito do Consumidor (Faculdade Única)</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Carreira</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#3B82F6] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Oficial de Apoio Judicial - 6ª Vara de Família (BH)</p>
                          <p className="text-white/50 text-xs">2006 - 10/02/2008</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9D00FF] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Gabinete de Apoio - 3ª Câmara Criminal</p>
                          <p className="text-white/50 text-xs">2008 - 2013</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#F59E0B] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Coord. de Processamento de Pagamento - COPASE</p>
                          <p className="text-white/50 text-xs">2013 - 2015</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FF007F] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-white/90 text-sm font-medium">Coordenadora de Área - COARPE</p>
                          <p className="text-white/50 text-xs">2016 - atual</p>
                        </div>
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

export default OrganogaramaSection;;
