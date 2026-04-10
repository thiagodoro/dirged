import { motion } from "framer-motion";
import { FolderOpen, Archive, Database, Target } from "lucide-react";

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
              <h3 className="font-outfit font-bold text-lg text-white">Gestão de Acervos Processuais</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFE600] mt-2 shrink-0" />
                <p className="text-white/60 text-sm">Aprox. <strong className="text-white">9.200.000 processos</strong> armazenados</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFE600] mt-2 shrink-0" />
                <p className="text-white/60 text-sm"><strong className="text-white">6 galpões</strong> (Cincão: G1, G6, G7, G8 + Barreiro + CEOPE)</p>
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

export default GestaoDocumentalSection;
