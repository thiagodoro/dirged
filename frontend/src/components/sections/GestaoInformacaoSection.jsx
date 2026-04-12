import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database, Search, FolderOpen, BookOpen, Eye, EyeOff,
  Calendar, Library, Globe, Monitor, Smartphone,
  Scale, FileText, Award, ChevronDown, ChevronUp, ChevronRight, ChevronLeft,
  BookMarked, Newspaper, GraduationCap, Gavel, Send
} from "lucide-react";

const competenciasData = [
  {
    icon: Search,
    label: "Pesquisar",
    color: "#9D00FF",
    desc: "Pesquisa técnico-científica e jurídica por demanda e de ofício",
    items: [
      "Pesquisa por demanda de doutrina, legislação e jurisprudência para gabinetes e setores do TJMG",
      "Pesquisa de ofício para elaboração de boletins periódicos",
      "Pesquisa para informação em ADI's e Incidentes de Inconstitucionalidade",
      "Pesquisa para projetos editoriais, curadoria de exposições, preservação de memória e homenagens",
    ],
    tags: [],
    tagsLabel: "",
  },
  {
    icon: FolderOpen,
    label: "Organizar",
    color: "#3B82F6",
    desc: "Tratamento técnico da informação para recuperação eficiente",
    items: [
      "Catalogação: Elaboração de representação descritiva para materiais bibliográficos (físicos e digitais) e documentação normativa.",
      "Classificação: Estruturação sistemática do acervo por áreas do conhecimento.",
      "Indexação: Aplicação de vocabulário controlado e descritores específicos para garantir agilidade na busca e recuperação de dados.",
    ],
    tags: [],
    tagsLabel: "",
  },
  {
    icon: BookOpen,
    label: "Publicar",
    color: "#FF007F",
    desc: "Editoração e apoio a publicações técnicas e jurídicas",
    items: [
      "Editoração de livros técnicos da EJEF",
      "Elaboração de boletins técnicos periódicos",
      "Revisão de documentos de setores e adequação às normas da ABNT",
      "Confecção de fichas catalográficas",
      "Avaliação de artigos submetidos para a Revista EJEF, Coleção de Artigos (Biblioteca Digital) e Concursos de Artigos da EJEF",
    ],
    tags: [],
    tagsLabel: "",
  },
  {
    icon: Send,
    label: "Fornecer",
    color: "#10B981",
    desc: "Disponibilização de informação e acesso a bases de dados",
    items: [
      "Biblioteca Digital com acervo público",
      "Bases contratadas: Minha Biblioteca, Revista dos Tribunais, Fórum, Del Rey",
      "Empréstimos de livros e periódicos técnicos do acervo impresso",
      "Gestão da base de atos normativos do Tribunal",
    ],
    tags: [],
    tagsLabel: "",
  },
];

const CompetenciasCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = competenciasData.length;
  const comp = competenciasData[current];

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <div className="mb-20">
      <p className="text-center text-[#FFE600] font-outfit font-bold text-lg mb-5">Principais competências</p>

      {/* Indicator dots */}
      <div className="flex justify-center gap-2 mb-5">
        {competenciasData.map((c, i) => (
          <button
            key={c.label}
            onClick={() => setCurrent(i)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              i === current
                ? "bg-white/10 border border-white/20 text-white"
                : "text-white/30 hover:text-white/60"
            }`}
          >
            <c.icon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{c.label}</span>
          </button>
        ))}
      </div>

      {/* Card */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-black/30 border rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            style={{ borderColor: `${comp.color}30` }}
          >
            {/* Color accent line */}
            <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: `linear-gradient(90deg, ${comp.color}, transparent)` }} />

            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Left: icon + title */}
              <div className="flex items-center gap-4 sm:w-64 shrink-0">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: `${comp.color}20` }}>
                  <comp.icon className="w-7 h-7" style={{ color: comp.color }} />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-white text-xl">{comp.label}</h3>
                  <p className="text-white/40 text-xs mt-0.5">{comp.desc}</p>
                </div>
              </div>

              {/* Right: details */}
              <div className="flex-1 w-full">
                <ul className="space-y-2">
                  {comp.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 bg-white/[0.03] rounded-lg px-4 py-2.5">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: comp.color }} />
                      <span className="text-white/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                {comp.tags.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <p className="text-white/25 text-[10px] uppercase tracking-wider mb-2">{comp.tagsLabel}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {comp.tags.map(t => (
                        <span key={t} className="text-[10px] px-2.5 py-1 rounded-full border" style={{ background: `${comp.color}10`, color: `${comp.color}cc`, borderColor: `${comp.color}30` }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Arrow right */}
              <button
                onClick={next}
                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all self-center shrink-0"
              >
                <ChevronRight className="w-5 h-5 text-white/60" />
              </button>
            </div>

            {/* Mobile navigation */}
            <div className="flex sm:hidden justify-between mt-5 pt-4 border-t border-white/5">
              <button onClick={prev} className="flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition-colors">
                <ChevronLeft className="w-4 h-4" /> Anterior
              </button>
              <span className="text-white/20 text-xs">{current + 1} / {total}</span>
              <button onClick={next} className="flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition-colors">
                Próximo <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const trabVisivel = [
  "Publicações de livros",
  "Publicações de boletins",
  "Pesquisas Jurídicas",
  "Biblioteca Digital e bases contratadas",
  "Acesso aos atos normativos do Tribunal",
  "Empréstimos de livros e acesso aos periódicos",
];

const trabInvisivel = [
  "Pesquisa de doutrina, jurisprudência e legislação para magistrados e servidores",
  "Revisão de textos para publicação de setores do TJMG",
  "Gestão e fiscalização de 20 contratos",
  "Manutenção de espaços de biblioteca",
  "Controle de logística de malotes",
  "Cobranças de fornecedores e usuários em atraso",
  "Controle patrimonial (inventário bibliográfico anual)",
  "Organização dos acervos impresso e digital",
  "Conservação e restauração de acervo de 5.000 obras raras",
];

const plantaoEjef = [
  { dia: "Segunda", tema: "Direito Penal e Processual Penal", color: "#FF007F" },
  { dia: "Terça", tema: "Direitos Fundamentais/Sociais", color: "#FFE600" },
  { dia: "Quarta", tema: "Direito Civil", color: "#9D00FF" },
  { dia: "Quinta", tema: "Direito Tributário", color: "#10B981" },
  { dia: "Sexta", tema: "Direito Processual Civil", color: "#3B82F6" },
];

const biblioDigitalStats = [
  { valor: "13.258", desc: "Itens disponíveis para acesso público no acervo" },
  { valor: "7.620", desc: "E-books de editoras do consórcio Minha Biblioteca, RT, Fórum e Del Rey" },
  { valor: "282.725", desc: "Acessos a itens de bases contratadas (biênio 22-24)" },
  { valor: "R$ 1,3 mi", desc: "Investido em bases de dados para a Biblioteca Digital (22-24)" },
  { valor: "99", desc: "Periódicos jurídicos da RT e Fórum disponíveis internamente" },
];

const acervoStats = [
  { valor: "28.186", label: "Exemplares", desc: "no acervo impresso" },
  { valor: "R$ 1,07 mi", label: "Patrimônio", desc: "valor patrimonial do acervo" },
  { valor: "6.428", label: "Empréstimos", desc: "livros emprestados (22-24)" },
  { valor: "1.657", label: "Catalogados", desc: "livros catalogados e indexados (22-24)" },
];

const atosNormativos = [
  { valor: "13.372", desc: "Atos normativos formatados, catalogados e indexados" },
  { valor: "15.857", desc: "Atos normativos avaliados e incluídos" },
];

const servicosProdutos = [
  { nome: "NAT-JUS", valor: "1.323", desc: "Catalogação e Indexação de Notas Técnicas em Saúde na Biblioteca Digital" },
  { nome: "Gotas da Língua Portuguesa", valor: "47", desc: "Edições publicadas" },
  { nome: "Boletim de Jurisprudência", valor: "47", desc: "Edições publicadas" },
  { nome: "Pesquisas Atendidas", valor: "1.634", desc: "Pesquisas jurídicas realizadas" },
  { nome: "RJM e Livros", valor: "4/3", desc: "RJM publicadas / Livros publicados" },
];

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

const GestaoInformacaoSection = () => {
  const [showInvisivel, setShowInvisivel] = useState(false);
  const [expandedPeriodico, setExpandedPeriodico] = useState(null);

  return (
    <section id="gestao-informacao" data-testid="gestao-informacao-section" className="py-24 md:py-32 px-6 md:px-12 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <SectionBlock>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-2xl bg-[#9D00FF]/20 flex items-center justify-center">
                <Database className="w-8 h-8 text-[#9D00FF]" />
              </div>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Gestão da <span className="text-gradient-purple">Informação</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Pesquisar, organizar, publicar e fornecer informação técnico-científica e jurídica ao TJMG
            </p>
          </div>
        </SectionBlock>

        {/* ── Competências Carousel ── */}
        <CompetenciasCarousel />

        {/* ── Trabalho Visível vs Invisível ── */}
        <SectionBlock className="mb-20">
          <div className="text-center mb-8">
            <h3 className="font-outfit font-bold text-2xl sm:text-3xl text-white">
              Trabalho <span className="text-[#10B981]">Visível</span> × <span className="text-white/40">Invisível</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Visível */}
            <div className="bg-black/30 border border-[#10B981]/20 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#10B981] to-transparent" />
              <div className="flex items-center gap-3 mb-5">
                <Eye className="w-5 h-5 text-[#10B981]" />
                <h4 className="font-outfit font-bold text-[#10B981] text-lg">Trabalho Visível</h4>
              </div>
              <div className="space-y-2.5">
                {trabVisivel.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2.5 bg-[#10B981]/5 rounded-lg px-3 py-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Invisível */}
            <div className="bg-black/30 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/30 to-transparent" />
              <div className="flex items-center gap-3 mb-5">
                <EyeOff className="w-5 h-5 text-white/40" />
                <h4 className="font-outfit font-bold text-white/50 text-lg">Trabalho Invisível</h4>
              </div>
              <div className="space-y-2.5">
                {trabInvisivel.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2.5 bg-white/[0.03] rounded-lg px-3 py-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
                    <span className="text-white/50 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SectionBlock>

        {/* ── Serviços e Produtos (22/24) ── */}
        <SectionBlock className="mb-20">
          <div className="text-center mb-8">
            <h3 className="font-outfit font-bold text-2xl sm:text-3xl text-white">
              Serviços e Produtos <span className="text-[#9D00FF]">(2022–2024)</span>
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {servicosProdutos.map((s, i) => (
              <motion.div
                key={s.nome}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-black/40 border border-white/10 rounded-xl p-5 text-center"
              >
                <span className="font-outfit font-bold text-3xl text-[#9D00FF]">{s.valor}</span>
                <p className="text-white font-medium text-xs mt-2">{s.nome}</p>
                <p className="text-white/30 text-[10px] mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionBlock>

        {/* ── Boletim Diário Plantão EJEF ── */}
        <SectionBlock className="mb-20">
          <div className="bg-black/30 border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#FFE600]/20 flex items-center justify-center">
                <Newspaper className="w-5 h-5 text-[#FFE600]" />
              </div>
              <div>
                <h3 className="font-outfit font-bold text-white text-lg">Boletim Diário: Plantão EJEF</h3>
                <p className="text-white/30 text-xs">Assuntos escolhidos pelo usuário</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {plantaoEjef.map((p, i) => (
                <motion.div
                  key={p.dia}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl p-4 text-center border border-white/5"
                  style={{ background: `${p.color}10` }}
                >
                  <span className="text-[10px] uppercase tracking-wider font-bold" style={{ color: p.color }}>{p.dia}</span>
                  <p className="text-white/70 text-xs mt-2 leading-relaxed">{p.tema}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-white/50 text-sm sm:text-base">
                <strong className="text-white/70">Conteúdo:</strong> Pautas de Tribunais Superiores, Notícias, Jurisprudência/IRDRs e Legislação
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-white/40 text-sm">Formas de Recebimento:</span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center" title="WhatsApp">
                    <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#0088cc]/20 flex items-center justify-center" title="Telegram">
                    <svg className="w-4 h-4 text-[#0088cc]" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionBlock>

        {/* ── Números da Biblioteca Digital ── */}
        <SectionBlock className="mb-20">
          <div className="text-center mb-8">
            <h3 className="font-outfit font-bold text-2xl sm:text-3xl text-white">
              Biblioteca <span className="text-[#3B82F6]">Digital</span>
            </h3>
            <p className="text-white/30 text-sm mt-1">bd.tjmg.jus.br</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {biblioDigitalStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`bg-black/40 border border-white/10 rounded-2xl p-6 ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <span className="font-outfit font-bold text-3xl sm:text-4xl text-[#3B82F6]">{s.valor}</span>
                <p className="text-white/60 text-sm mt-3 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          {/* Espaços de Biblioteca */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Library, label: "Bibl. Des. Amílcar de Castro", sub: "Subsolo – Anexo I" },
              { icon: BookMarked, label: "CLI", sub: "Edifício Sede – 14º Andar" },
              { icon: Globe, label: "Biblioteca Digital", sub: "bd.tjmg.jus.br" },
              { icon: Smartphone, label: "Minha Biblioteca", sub: "Dispositivos móveis" },
            ].map((esp, i) => (
              <motion.div
                key={esp.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white/[0.03] border border-white/5 rounded-xl p-4 text-center"
              >
                <esp.icon className="w-5 h-5 text-[#3B82F6]/70 mx-auto mb-2" />
                <p className="text-white/70 text-xs font-medium">{esp.label}</p>
                <p className="text-white/30 text-[10px] mt-0.5">{esp.sub}</p>
              </motion.div>
            ))}
          </div>
        </SectionBlock>

        {/* ── Números do Acervo Impresso ── */}
        <SectionBlock className="mb-20">
          <div className="text-center mb-8">
            <h3 className="font-outfit font-bold text-2xl sm:text-3xl text-white">
              Acervo <span className="text-[#FFE600]">Impresso</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {acervoStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center"
              >
                <span className="font-outfit font-bold text-2xl sm:text-3xl text-[#FFE600]">{s.valor}</span>
                <p className="text-white font-medium text-sm mt-2">{s.label}</p>
                <p className="text-white/30 text-xs mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionBlock>

        {/* ── Base de Atos Normativos ── */}
        <SectionBlock className="mb-20">
          <div className="bg-black/30 border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#FF007F]/20 flex items-center justify-center">
                <Gavel className="w-5 h-5 text-[#FF007F]" />
              </div>
              <h3 className="font-outfit font-bold text-white text-lg">Base de Atos Normativos do TJMG</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {["1ª Instância", "2ª Instância", "Juizados Especiais"].map((inst, i) => (
                <div key={inst} className="bg-[#FF007F]/5 border border-[#FF007F]/10 rounded-xl px-4 py-3 text-center">
                  <Scale className="w-4 h-4 text-[#FF007F]/60 mx-auto mb-1" />
                  <span className="text-white/70 text-sm">{inst}</span>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {atosNormativos.map((a, i) => (
                <div key={i} className="bg-white/[0.03] rounded-xl p-5 text-center">
                  <span className="font-outfit font-bold text-3xl text-[#FF007F]">{a.valor}</span>
                  <p className="text-white/50 text-sm mt-2">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionBlock>

        {/* ── Concursos de Artigos Jurídicos ── */}
        <SectionBlock>
          <div className="text-center mb-8">
            <h3 className="font-outfit font-bold text-2xl sm:text-3xl text-white">
              Concursos de <span className="text-[#10B981]">Artigos Jurídicos</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/30 border border-[#10B981]/20 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#10B981]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#10B981]" />
                <span className="text-[#10B981] font-bold text-xs uppercase tracking-wider">1º Concurso</span>
              </div>
              <h4 className="font-outfit font-bold text-white text-lg mb-2">10 anos do CPC</h4>
              <p className="text-white/50 text-sm leading-relaxed">
                Cerimônia de premiação dos 10 primeiros colocados realizada em 20/08/2025.
              </p>
            </div>
            <div className="bg-black/30 border border-[#10B981]/20 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#10B981]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#10B981]" />
                <span className="text-[#10B981] font-bold text-xs uppercase tracking-wider">2º Concurso</span>
              </div>
              <h4 className="font-outfit font-bold text-white text-lg mb-2">10 anos do EPD</h4>
              <p className="text-white/50 text-sm leading-relaxed">
                Edital publicado em 08/07/25. Recebimento de artigos até 15/10/25. Premiação prevista para 05/02/26.
              </p>
            </div>
          </div>
        </SectionBlock>

      </div>
    </section>
  );
};

export default GestaoInformacaoSection;
