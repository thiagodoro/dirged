import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users } from "lucide-react";

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
        "6 Arquivistas",
        "1 Assistente Especializado",
        "126 Assistentes de Apoio Administrativo",
        "3 Assistentes de Direção Superior",
        "3 Assistentes Executivos",
        "4 Colaboradores de Acesso (Externo)",
        "2 Conservadores / Restauradores",
        "1 Designer Gráfico",
        "10 Encarregados de Serviço",
        "1 Historiador",
        "16 Mensageiros",
        "9 Supervisores",
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

export default CapitalHumanoSection;
