const Footer = () => {
  return (
    <footer data-testid="footer" className="py-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-outfit font-bold text-xl text-white">DIRGED</span>
          
          <p className="text-white/40 text-sm text-center">
            R. Raul Pompéia, 101. 12° andar. São Pedro - Belo Horizonte/MG | dirged@tjmg.jus.br | (31) 3289-8615
          </p>

          <a href="https://ejef.tjmg.jus.br" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://customer-assets.emergentagent.com/job_dirged-portal/artifacts/eduw9sv5_logo%20ejef.png" 
              alt="EJEF | TJMG" 
              className="h-12 object-contain hover:opacity-80 transition-opacity cursor-pointer"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
