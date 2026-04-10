import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ChevronDown } from "lucide-react";

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

export default AtosNormativosSection;
