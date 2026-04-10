import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign } from "lucide-react";

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

export default OrcamentoSection;
