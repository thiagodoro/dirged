import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";

const PASSWORD = "transicao2026";

const PasswordGate = ({ children }) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);
  const inputRef = useRef(null);

  // Auto-focus input
  useEffect(() => {
    if (!isAuthenticated && inputRef.current) {
      const timer = setTimeout(() => inputRef.current?.focus(), 400);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password === PASSWORD) {
        setError(false);
        setExitAnimation(true);
        setTimeout(() => {
          setIsAuthenticated(true);
        }, 700);
      } else {
        setError(true);
        setShake(true);
        setTimeout(() => setShake(false), 600);
        setTimeout(() => setError(false), 3000);
      }
    },
    [password]
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      {/* Page content always renders and loads naturally behind */}
      <div
        style={{
          filter: isAuthenticated ? "none" : "blur(8px)",
          transition: "filter 0.7s ease",
          pointerEvents: isAuthenticated ? "auto" : "none",
        }}
      >
        {children}
      </div>

      {/* Password Modal Overlay */}
      <AnimatePresence>
        {!isAuthenticated && (
          <motion.div
            key="password-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: exitAnimation ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-start pt-8 justify-start sm:flex-row sm:items-center sm:pt-0 sm:justify-end sm:pr-8 md:pr-16 lg:pr-24"
          >
            {/* Background image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("https://customer-assets.emergentagent.com/job_github-import-65/artifacts/czp6f2w0_dji_export_20230819_143336_1692466416441_sphere_screenshot%20%281%29.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* Title - top left on desktop, top center on mobile */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: exitAnimation ? 0 : 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-8 left-8 right-8 sm:top-12 sm:left-12 sm:right-12 md:left-16 md:right-16 z-10 hidden sm:flex items-center"
            >
              <h1 className="font-outfit font-bold text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg leading-none shrink-0">
                DIRGED
              </h1>
              <div className="h-10 md:h-12 w-px bg-white/30 mx-4 md:mx-6 shrink-0" />
              <p className="font-outfit font-light text-xs md:text-sm lg:text-base text-white/70 leading-none drop-shadow-md whitespace-nowrap">
                Diretoria Executiva de Gestão da Informação Documental
              </p>
              <div className="flex-1" />
            </motion.div>

            {/* Footer credit */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: exitAnimation ? 0 : 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-4 left-6 sm:bottom-6 sm:left-12 md:left-16 z-10 text-white/40 text-[10px] sm:text-xs font-satoshi drop-shadow-md bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm"
            >
              Foto: Thiago Doro
            </motion.p>

            {/* Modal column: logo + card */}
            <div className="z-10 flex flex-col items-center gap-4 mx-4 sm:mx-0">
              {/* EJEF Logo centered with modal */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: exitAnimation ? 0 : 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="hidden sm:block"
              >
                <a href="https://ejef.tjmg.jus.br" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://customer-assets.emergentagent.com/job_dirged-portal/artifacts/x45fyd6l_logo%20ejef.png"
                    alt="EJEF | TJMG"
                    className="h-12 md:h-14 object-contain hover:opacity-80 transition-opacity cursor-pointer drop-shadow-lg"
                  />
                </a>
              </motion.div>

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{
                opacity: exitAnimation ? 0 : 1,
                x: exitAnimation ? 40 : 0,
                scale: exitAnimation ? 0.98 : 1,
                ...(shake ? { x: [0, -8, 8, -8, 8, -4, 4, 0] } : {}),
              }}
              transition={{
                duration: shake ? 0.5 : 0.5,
                ease: "easeOut",
              }}
              className="relative w-full max-w-[340px] sm:max-w-xs overflow-hidden rounded-2xl z-10 mx-4 sm:mx-0"
              style={{
                background: "linear-gradient(145deg, rgba(10,10,10,0.88), rgba(0,0,0,0.92))",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 80px rgba(0,0,0,0.3)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              {/* Top decorative line */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#FF007F]/50 to-transparent" />

              <div className="px-8 pt-9 pb-7">
                {/* Icon */}
                <motion.div
                  className="flex justify-center mb-5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF007F]/20 to-[#9D00FF]/20 flex items-center justify-center border border-white/10">
                      <Lock className="w-7 h-7 text-white/80" />
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-[#FF007F]/10 blur-lg -z-10" />
                  </div>
                </motion.div>

                {/* Title */}
                <motion.div
                  className="text-center mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="font-outfit text-xl font-semibold text-white tracking-wide">
                    DIRGED/EJEF
                  </h2>
                  <p className="text-white/40 text-sm mt-1 font-satoshi">
                    Área de acesso restrito
                  </p>
                </motion.div>

                {/* Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="relative">
                    <input
                      ref={inputRef}
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError(false);
                      }}
                      onKeyDown={handleKeyDown}
                      placeholder="Digite a senha de acesso"
                      className={`w-full bg-white/5 border ${
                        error
                          ? "border-red-500/60 focus:border-red-500"
                          : "border-white/10 focus:border-[#FF007F]/50"
                      } rounded-lg px-4 py-3 pr-10 text-white placeholder-white/30 font-satoshi text-sm outline-none transition-all duration-300 focus:bg-white/[0.07] focus:ring-1 ${
                        error ? "focus:ring-red-500/30" : "focus:ring-[#FF007F]/20"
                      }`}
                      autoComplete="off"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Error message */}
                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-red-400/80 text-xs font-satoshi text-center"
                      >
                        Senha incorreta. Tente novamente.
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-satoshi text-sm font-medium text-white transition-all duration-300 relative overflow-hidden group"
                    style={{
                      background: "linear-gradient(135deg, #FF007F, #9D00FF)",
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      Acessar
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </motion.form>
              </div>

              {/* Bottom decorative line */}
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PasswordGate;
