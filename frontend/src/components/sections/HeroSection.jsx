import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://customer-assets.emergentagent.com/job_fa3179c1-aa4a-4ec6-967a-a49df4dfc88b/artifacts/r3yyp8p7_video-geral-4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-transparent to-[#0A0A0A]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="font-outfit font-bold text-6xl sm:text-7xl lg:text-9xl text-white leading-none tracking-tight">
              DIRGED
            </h1>
            <p className="font-outfit font-light text-base sm:text-lg lg:text-xl text-white/50 mt-3 tracking-widest uppercase">
              Diretoria Executiva de Gestão da Informação Documental
            </p>
          </div>
          
          <p className="font-satoshi text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10">
            Transformando a gestão documental e a gestão da informação do TJMG através da inovação, eficiência e excelência no serviço público.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              data-testid="hero-video-button"
              onClick={() => window.open('https://youtu.be/2tKQnre85Xw', '_blank')}
              className="bg-black hover:bg-neutral-800 text-white font-bold px-8 py-6 rounded-full text-lg transition-all hover:scale-105 border border-white/20"
            >
              Vídeo institucional (2024)
            </Button>
            <Button 
              data-testid="hero-explore-button"
              onClick={() => document.getElementById('competencias').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#FF007F] hover:bg-[#FF3399] text-white font-bold px-8 py-6 rounded-full text-lg transition-all hover:scale-105"
            >
              Explorar <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
