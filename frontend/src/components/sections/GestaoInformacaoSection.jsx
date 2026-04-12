import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database, Search, FolderOpen, BookOpen, Eye, EyeOff,
  Calendar, Library, Globe, Monitor, Smartphone,
  Scale, FileText, Award, ChevronDown, ChevronUp,
  BookMarked, Newspaper, GraduationCap, Gavel
} from "lucide-react";

const objetivos = [
  { icon: Search, label: "Pesquisar", color: "#9D00FF" },
  { icon: FolderOpen, label: "Organizar", color: "#3B82F6" },
  { icon: BookOpen, label: "Publicar", color: "#FF007F" },
  { icon: Database, label: "Fornecer", color: "#10B981" },
];

const trabVisivel = [
  "Publicações de livros",
  "Publicações de boletins",
  "Pesquisas Jurídicas",
  "Biblioteca Digital e bases contratadas",
  "Acesso aos atos normativos do Tribunal",
  "Empréstimos de livros e acesso aos periódicos",
];

const trabInvisivel = [
  "Pesquisa de doutrina, jurisprudência e legislação",
  "Revisão de textos para publicação",
  "Gestão e fiscalização de ~20 contratos",
  "Manutenção de espaços da biblioteca",
  "Controle de logística de malotes",
  "Cobranças de fornecedores e usuários em atraso",
  "Controle patrimonial (inventário anual)",
  "Organização dos acervos impresso e digital",
  "Conservação de ~5.000 obras raras",
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
  { nome: "NAT-JUS", valor: "1.323", desc: "Notas Técnicas em Saúde na Biblioteca Digital" },
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

        {/* ── 4 Objetivos ── */}
        <p className="text-center text-white/40 text-sm uppercase tracking-widest font-satoshi mb-5">Principais competências</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {objetivos.map((obj, i) => (
            <motion.div
              key={obj.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center group hover:border-white/20 transition-all"
              style={{ borderTopColor: obj.color, borderTopWidth: "3px" }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center" style={{ background: `${obj.color}20` }}>
                <obj.icon className="w-6 h-6" style={{ color: obj.color }} />
              </div>
              <span className="font-outfit font-semibold text-white text-sm">{obj.label}</span>
            </motion.div>
          ))}
        </div>

        {/* ── Pilares: Pesquisa, Organização, Publicação ── */}
        <SectionBlock className="mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Pesquisa */}
            <div className="bg-black/30 border border-white/10 rounded-2xl p-6 hover:border-[#9D00FF]/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#9D00FF]/20 flex items-center justify-center">
                  <Search className="w-5 h-5 text-[#9D00FF]" />
                </div>
                <h3 className="font-outfit font-bold text-white text-lg">Pesquisa</h3>
              </div>
              <ul className="space-y-2">
                <li className="text-white/50 text-sm flex items-start gap-2"><span className="text-[#9D00FF] mt-1">•</span>Pesquisa por demanda</li>
                <li className="text-white/50 text-sm flex items-start gap-2"><span className="text-[#9D00FF] mt-1">•</span>Pesquisa de ofício para boletins</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-white/30 text-xs uppercase tracking-wider mb-2">Fontes</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Livros", "Periódicos", "Bases de dados", "E-books"].map(f => (
                    <span key={f} className="text-[10px] px-2 py-1 rounded-full bg-[#9D00FF]/10 text-[#9D00FF]/80 border border-[#9D00FF]/20">{f}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* Organização */}
            <div className="bg-black/30 border border-white/10 rounded-2xl p-6 hover:border-[#3B82F6]/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center">
                  <FolderOpen className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <h3 className="font-outfit font-bold text-white text-lg">Organização</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Catalogação", desc: "Registro bibliográfico padronizado" },
                  { label: "Classificação", desc: "Organização por área temática" },
                  { label: "Indexação", desc: "Descritores para recuperação" },
                ].map(item => (
                  <div key={item.label} className="bg-white/5 rounded-lg p-3">
                    <p className="text-white font-medium text-sm">{item.label}</p>
                    <p className="text-white/40 text-xs mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Publicação */}
            <div className="bg-black/30 border border-white/10 rounded-2xl p-6 hover:border-[#FF007F]/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF007F]/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[#FF007F]" />
                </div>
                <h3 className="font-outfit font-bold text-white text-lg">Publicação</h3>
              </div>
              <ul className="space-y-2">
                <li className="text-white/50 text-sm flex items-start gap-2"><span className="text-[#FF007F] mt-1">•</span>Editoração de livros técnicos da EJEF</li>
                <li className="text-white/50 text-sm flex items-start gap-2"><span className="text-[#FF007F] mt-1">•</span>Revisão de textos e apresentações</li>
                <li className="text-white/50 text-sm flex items-start gap-2"><span className="text-[#FF007F] mt-1">•</span>Adequação às normas da ABNT</li>
                <li className="text-white/50 text-sm flex items-start gap-2"><span className="text-[#FF007F] mt-1">•</span>Confecção de fichas catalográficas</li>
              </ul>
            </div>
          </div>
        </SectionBlock>

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
                {trabInvisivel.slice(0, showInvisivel ? trabInvisivel.length : 4).map((item, i) => (
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
              {trabInvisivel.length > 4 && (
                <button
                  onClick={() => setShowInvisivel(!showInvisivel)}
                  className="mt-3 flex items-center gap-1 text-xs text-white/30 hover:text-white/60 transition-colors mx-auto"
                >
                  {showInvisivel ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  {showInvisivel ? "Ocultar" : `Ver mais ${trabInvisivel.length - 4} itens`}
                </button>
              )}
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
            <div className="mt-5 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <p className="text-white/30 text-xs">
                <strong className="text-white/50">Conteúdo:</strong> Pautas de Tribunais Superiores, Notícias, Jurisprudência/IRDRs e Legislação
              </p>
              <a href="https://www.ejef.tjmg.jus.br" target="_blank" rel="noopener noreferrer" className="text-xs text-[#FFE600]/70 hover:text-[#FFE600] transition-colors shrink-0">
                ejef.tjmg.jus.br →
              </a>
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
