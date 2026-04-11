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
  const [loadProgress, setLoadProgress] = useState(0);
  const [pageReady, setPageReady] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);
  const inputRef = useRef(null);
  const progressInterval = useRef(null);

  // Simulate + track page loading progress
  useEffect(() => {
    let progress = 0;
    const targetProgress = () => {
      if (document.readyState === "complete") return 100;
      if (document.readyState === "interactive") return 70;
      return 30;
    };

    progressInterval.current = setInterval(() => {
      const target = targetProgress();
      const increment = target > progress ? Math.random() * 3 + 0.5 : 0.1;
      progress = Math.min(progress + increment, target);
      setLoadProgress(Math.round(progress));

      if (progress >= 100) {
        clearInterval(progressInterval.current);
        setPageReady(true);
      }
    }, 80);

    const handleLoad = () => {
      // Fast-forward to 100%
      clearInterval(progressInterval.current);
      let current = progress;
      const finishInterval = setInterval(() => {
        current = Math.min(current + 4, 100);
        setLoadProgress(Math.round(current));
        if (current >= 100) {
          clearInterval(finishInterval);
          setPageReady(true);
        }
      }, 30);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(progressInterval.current);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

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
      {/* Page content always renders behind the modal */}
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
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{
              background: "radial-gradient(ellipse at center, rgba(15,15,15,0.97) 0%, rgba(0,0,0,0.99) 100%)",
            }}
          >
            {/* Subtle animated background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF007F]/5 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#9D00FF]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{
                opacity: exitAnimation ? 0 : 1,
                y: exitAnimation ? -20 : 0,
                scale: exitAnimation ? 1.02 : 1,
                x: shake ? [0, -10, 10, -10, 10, -5, 5, 0] : 0,
              }}
              transition={{
                duration: shake ? 0.5 : 0.5,
                ease: "easeOut",
              }}
              className="relative w-full max-w-md mx-4 overflow-hidden rounded-2xl"
              style={{
                background: "linear-gradient(145deg, rgba(26,26,26,0.95), rgba(10,10,10,0.98))",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(255,0,127,0.05)",
              }}
            >
              {/* Top decorative line */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#FF007F]/50 to-transparent" />

              <div className="px-8 pt-10 pb-4">
                {/* Icon */}
                <motion.div
                  className="flex justify-center mb-6"
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
                  className="text-center mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="font-outfit text-xl font-semibold text-white tracking-wide">
                    DIRGED
                  </h2>
                  <p className="text-white/40 text-sm mt-1 font-satoshi">
                    Área de acesso restrito
                  </p>
                </motion.div>

                {/* Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-4"
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
                      } rounded-xl px-4 py-3.5 pr-12 text-white placeholder-white/30 font-satoshi text-sm outline-none transition-all duration-300 focus:bg-white/[0.07] focus:ring-1 ${
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
                    className="w-full py-3.5 rounded-xl font-satoshi text-sm font-medium text-white transition-all duration-300 relative overflow-hidden group"
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

              {/* Progress bar area */}
              <div className="px-8 pb-6 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-white/25 font-satoshi tracking-wider uppercase">
                    Carregando página
                  </span>
                  <span className="text-[10px] text-white/25 font-satoshi">
                    {loadProgress}%
                  </span>
                </div>
                <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: pageReady
                        ? "linear-gradient(90deg, #22c55e, #16a34a)"
                        : "linear-gradient(90deg, #FF007F, #9D00FF)",
                    }}
                    initial={{ width: "0%" }}
                    animate={{ width: `${loadProgress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
                {pageReady && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[10px] text-green-500/50 font-satoshi mt-1.5 text-center"
                  >
                    Página pronta
                  </motion.p>
                )}
              </div>

              {/* Bottom decorative line */}
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PasswordGate;
