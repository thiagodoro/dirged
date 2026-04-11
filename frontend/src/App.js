import "@/App.css";
import "leaflet/dist/leaflet.css";

import PasswordGate from "@/components/sections/PasswordGate";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import CompetenciasSection from "@/components/sections/CompetenciasSection";
import OrganogaramaSection from "@/components/sections/OrganogaramaSection";
import AtosNormativosSection from "@/components/sections/AtosNormativosSection";
import CapitalHumanoSection from "@/components/sections/CapitalHumanoSection";
import OrcamentoSection from "@/components/sections/OrcamentoSection";
import MapaSection from "@/components/sections/MapaSection";
import GestaoDocumentalSection from "@/components/sections/GestaoDocumentalSection";
import GestaoInformacaoSection from "@/components/sections/GestaoInformacaoSection";
import IniciativasSection from "@/components/sections/IniciativasSection";
import PremiosSection from "@/components/sections/PremiosSection";
import ProjetosFuturosSection from "@/components/sections/ProjetosFuturosSection";
import Footer from "@/components/sections/Footer";

function App() {
  return (
    <PasswordGate>
      <div className="min-h-screen bg-[#0A0A0A]">
        <Navbar />
        <main>
          <HeroSection />
          <CompetenciasSection />
          <OrganogaramaSection />
          <AtosNormativosSection />
          <CapitalHumanoSection />
          <OrcamentoSection />
          <MapaSection />
          <GestaoDocumentalSection />
          <GestaoInformacaoSection />
          <IniciativasSection />
          <PremiosSection />
          <ProjetosFuturosSection />
        </main>
        <Footer />
      </div>
    </PasswordGate>
  );
}

export default App;
