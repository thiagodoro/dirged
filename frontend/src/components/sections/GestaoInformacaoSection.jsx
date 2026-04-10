import { motion } from "framer-motion";
import { Database } from "lucide-react";

const GestaoInformacaoSection = () => (
  <section id="gestao-informacao" data-testid="gestao-informacao-section" className="py-24 md:py-32 px-6 md:px-12 bg-[#1A1A1A]">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-[#9D00FF]/20 flex items-center justify-center">
            <Database className="w-8 h-8 text-[#9D00FF]" />
          </div>
        </div>
        <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Gestão da <span className="text-gradient-purple">Informação</span>
        </h2>
        <p className="text-white/40 text-lg italic">Em construção...</p>
      </motion.div>
    </div>
  </section>
);

export default GestaoInformacaoSection;
