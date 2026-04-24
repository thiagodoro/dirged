import { motion } from "framer-motion";
import { Lightbulb, Database, FolderOpen, BookOpen, FileText, ExternalLink } from "lucide-react";

const SectionBlock = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={className}
  >
    {children}
  </motion.div>
);

const IniciativasSection = () => (
  <section id="iniciativas" data-testid="iniciativas-section" className="py-24 md:py-32 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <SectionBlock>
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-[#FF007F]/20 flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-[#FF007F]" />
            </div>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Últimas <span className="text-gradient-pink">Iniciativas</span>
          </h2>
        </div>
      </SectionBlock>

      {/* ═══════════════════════════════════════════════ */}
      {/* SUBSECAO: Gestão da Informação                 */}
      {/* ═══════════════════════════════════════════════ */}
      <SectionBlock className="mb-20">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-[#9D00FF]/20 flex items-center justify-center">
            <Database className="w-5 h-5 text-[#9D00FF]" />
          </div>
          <h3 className="font-outfit font-bold text-2xl sm:text-3xl text-white">
            Gestão da <span className="text-[#9D00FF]">Informação</span>
          </h3>
        </div>

        {/* Iniciativa 1: Digitalização dos Diários */}
        <div className="bg-black/40 border border-[#9D00FF]/20 rounded-2xl overflow-hidden">

          {/* Imagem de destaque */}
          <div className="relative overflow-hidden">
            <img
              src="https://customer-assets.emergentagent.com/job_c5aeece1-728e-444c-b1ef-931be8b006b4/artifacts/4tl4k9l2_image.png"
              alt="Acordo de cooperação técnica entre os 3 poderes - TJMG"
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#9D00FF]/30 backdrop-blur-sm border border-[#9D00FF]/30 text-[#9D00FF] text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                Digitalização de todo o acervo dos diários oficiais Minas Gerais
              </span>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="p-6 sm:p-8 md:p-10">

            {/* Título */}
            <h4 className="font-outfit font-bold text-xl sm:text-2xl md:text-3xl text-white mb-4 leading-tight">
              Digitalização de todo o acervo dos diários oficiais Minas Gerais
            </h4>

            {/* Subtítulo */}
            <div className="bg-[#9D00FF]/10 border-l-4 border-[#9D00FF] rounded-r-xl px-5 py-4 mb-6">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                Conduziu acordo de cooperação técnica entre os 3 poderes assinado em 17/2/2025 para a digitalização de 3,5 milhões de páginas do diário.
              </p>
            </div>

            {/* Texto principal detalhado */}
            <div className="space-y-5 text-white/70 text-base sm:text-lg leading-relaxed">
              <p>
                Além disso, conduziu a <strong className="text-white">licitação para prestador de serviço de digitalização</strong> em fase final de homologação após <strong className="text-[#9D00FF]">prova de conceito aprovada</strong> da empresa licitante <strong className="text-white">Iron Mountain</strong> realizada em 15/04/26.
              </p>
              <p>
                <strong className="text-white">Início do trabalho de digitalização previsto para maio de 2026</strong> com conclusão em <strong className="text-white">novembro de 2027</strong>.
              </p>
              <p>
                Serão digitalizados a integralidade dos diários que compreende o período de <strong className="text-[#FFE600]">1943 a 2010</strong> e encaminhados ao Poder Executivo para inclusão na página oficial de consulta textual aos diários oficiais.
              </p>
            </div>

            {/* Timeline / Dados-chave */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {[
                { valor: "3,5 mi", label: "Páginas a digitalizar", color: "#9D00FF" },
                { valor: "1943–2010", label: "Período abrangido", color: "#FFE600" },
                { valor: "Mai/2026", label: "Início previsto", color: "#10B981" },
                { valor: "Nov/2027", label: "Conclusão prevista", color: "#FF007F" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                >
                  <p className="font-outfit font-bold text-lg sm:text-xl" style={{ color: item.color }}>{item.valor}</p>
                  <p className="text-white/40 text-[10px] sm:text-xs mt-1">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Link oficial */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <a
                href="https://www.jornalminasgerais.mg.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#9D00FF] hover:text-[#9D00FF]/80 transition-colors text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                www.jornalminasgerais.mg.gov.br — Página oficial de consulta textual aos diários oficiais
              </a>
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* ═══════════════════════════════════════════════ */}
      {/* SUBSECAO: Gestão Documental                    */}
      {/* ═══════════════════════════════════════════════ */}
      <SectionBlock>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-[#FFE600]/20 flex items-center justify-center">
            <FolderOpen className="w-5 h-5 text-[#FFE600]" />
          </div>
          <h3 className="font-outfit font-bold text-2xl sm:text-3xl text-white">
            Gestão <span className="text-[#FFE600]">Documental</span>
          </h3>
        </div>

        <div className="bg-black/30 border border-white/10 rounded-2xl p-8 text-center">
          <p className="text-white/30 text-base italic">Em breve...</p>
        </div>
      </SectionBlock>

    </div>
  </section>
);

export default IniciativasSection;
