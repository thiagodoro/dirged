import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, EyeOff, ShieldCheck, Loader2 } from "lucide-react";

const PASSWORD = "transicao2026";

const VIDEO_URLS = [
  "https://customer-assets.emergentagent.com/job_fa3179c1-aa4a-4ec6-967a-a49df4dfc88b/artifacts/r3yyp8p7_video-geral-4.mp4",
  "https://customer-assets.emergentagent.com/job_fa3179c1-aa4a-4ec6-967a-a49df4dfc88b/artifacts/otaotlen_video-gd.mp4",
];

const PasswordGate = ({ children }) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [pageReady, setPageReady] = useState(false);
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);
  const inputRef = useRef(null);
  const preloadVideosRef = useRef([]);
  const progressRef = useRef(0);
  const intervalRef = useRef(null);
  const domReadyRef = useRef(false);
  const videosLoadedRef = useRef(0);

  // Unified loading: DOM (weight 20%) + Videos (weight 80%)
  useEffect(() => {
    const totalVideos = VIDEO_URLS.length;

    // Track DOM ready
    const checkDom = () => {
      if (document.readyState === "complete") {
        domReadyRef.current = true;
      }
    };
    checkDom();
    if (!domReadyRef.current) {
      window.addEventListener("load", () => { domReadyRef.current = true; });
    }

    // Preload videos
    VIDEO_URLS.forEach((url) => {
      const video = document.createElement("video");
      video.preload = "auto";
      video.muted = true;
      video.playsInline = true;
      video.style.cssText = "position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;";
      video.src = url;
      document.body.appendChild(video);
      preloadVideosRef.current.push(video);
      video.load();

      video.addEventListener("canplaythrough", () => {
        videosLoadedRef.current = Math.min(videosLoadedRef.current + 1, totalVideos);
      }, { once: true });
    });

    // Fallback: after 20s force all videos as loaded
    const fallbackTimer = setTimeout(() => {
      videosLoadedRef.current = totalVideos;
    }, 20000);

    // Single continuous progress interval
    intervalRef.current = setInterval(() => {
      const domTarget = domReadyRef.current ? 20 : (document.readyState === "interactive" ? 12 : 5);
      const videoTarget = totalVideos > 0 ? (videosLoadedRef.current / totalVideos) * 80 : 80;
      const realTarget = Math.min(domTarget + videoTarget, 100);

      // Smooth increment toward real target
      const current = progressRef.current;
      if (current < realTarget) {
        const gap = realTarget - current;
        const step = Math.max(0.3, gap * 0.06);
        progressRef.current = Math.min(current + step, realTarget);
      }

      const rounded = Math.round(progressRef.current);
      setLoadProgress(rounded);

      if (rounded >= 100) {
        clearInterval(intervalRef.current);
        setPageReady(true);
      }
    }, 60);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(fallbackTimer);
      preloadVideosRef.current.forEach((v) => {
        v.pause();
        v.removeAttribute("src");
        v.load();
        if (v.parentNode) v.parentNode.removeChild(v);
      });
      preloadVideosRef.current = [];
    };
  }, []);

  // When both password correct AND page ready → reveal
  useEffect(() => {
    if (passwordCorrect && pageReady && !isAuthenticated) {
      setExitAnimation(true);
      setTimeout(() => {
        setIsAuthenticated(true);
      }, 700);
    }
  }, [passwordCorrect, pageReady, isAuthenticated]);

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
        setPasswordCorrect(true);
        // Page will only be revealed when pageReady is also true
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
      {/* Page content always renders behind */}
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
            className="fixed inset-0 z-[9999] flex items-center justify-end pr-8 md:pr-16 lg:pr-24"
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
              className="relative w-full max-w-xs overflow-hidden rounded-2xl z-10"
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

              <div className="px-6 pt-7 pb-3">
                {/* Icon */}
                <motion.div
                  className="flex justify-center mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF007F]/20 to-[#9D00FF]/20 flex items-center justify-center border border-white/10">
                      <Lock className="w-5 h-5 text-white/80" />
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
                  <h2 className="font-outfit text-lg font-semibold text-white tracking-wide">
                    DIRGED/EJEF
                  </h2>
                  <p className="text-white/40 text-xs mt-0.5 font-satoshi">
                    Área de acesso restrito
                  </p>
                </motion.div>

                {/* Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  className="mt-5 space-y-3"
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
                      disabled={passwordCorrect}
                      className={`w-full bg-white/5 border ${
                        error
                          ? "border-red-500/60 focus:border-red-500"
                          : passwordCorrect
                          ? "border-green-500/40"
                          : "border-white/10 focus:border-[#FF007F]/50"
                      } rounded-lg px-3 py-2.5 pr-10 text-white placeholder-white/30 font-satoshi text-xs outline-none transition-all duration-300 focus:bg-white/[0.07] focus:ring-1 ${
                        error ? "focus:ring-red-500/30" : "focus:ring-[#FF007F]/20"
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                      autoComplete="off"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                      disabled={passwordCorrect}
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

                  {/* Submit button or waiting state */}
                  {passwordCorrect && !pageReady ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center gap-2 py-2.5 text-white/60"
                    >
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="font-satoshi text-xs">Aguardando carregamento...</span>
                    </motion.div>
                  ) : !passwordCorrect ? (
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-lg font-satoshi text-xs font-medium text-white transition-all duration-300 relative overflow-hidden group"
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
                  ) : null}
                </motion.form>
              </div>

              {/* Progress bar area */}
              <div className="px-6 pb-4 pt-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-white/25 font-satoshi tracking-wider uppercase">
                    Carregando conteúdo
                  </span>
                  <span className={`text-[10px] font-satoshi font-medium ${pageReady ? "text-green-400/60" : "text-white/30"}`}>
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
