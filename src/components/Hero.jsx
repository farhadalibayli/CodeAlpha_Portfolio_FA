import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowDown, Code2, Terminal } from "lucide-react";

export function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Floating code symbols
  const codeSymbols = [
    { symbol: "</>", x: 10, y: 20, delay: 0 },
    { symbol: "{}", x: 85, y: 15, delay: 0.5 },
    { symbol: "[]", x: 15, y: 70, delay: 1 },
    { symbol: "()", x: 80, y: 75, delay: 1.5 },
    { symbol: "{ }", x: 50, y: 10, delay: 0.3 },
    { symbol: "=>", x: 90, y: 50, delay: 0.8 },
    { symbol: "< >", x: 20, y: 45, delay: 1.2 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating code symbols */}
      {codeSymbols.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-400/30 font-mono text-2xl"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5 + index,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.symbol}
        </motion.div>
      ))}

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon badges */}
          <motion.div
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="p-3 bg-blue-500/10 backdrop-blur-sm rounded-xl border border-blue-500/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Code2 className="w-6 h-6 text-blue-400" />
            </motion.div>
            <motion.div
              className="p-3 bg-purple-500/10 backdrop-blur-sm rounded-xl border border-purple-500/20"
              whileHover={{ scale: 1.1, rotate: -5 }}
              animate={{ rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <Terminal className="w-6 h-6 text-purple-400" />
            </motion.div>
          </motion.div>

          <motion.p
            className="text-blue-400 mb-6 tracking-wider uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Full-Stack Developer
          </motion.p>

          <motion.h1
            className="text-white mb-8 text-6xl sm:text-7xl md:text-8xl"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              Farhad Alibayli
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-xl sm:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Leadeship. Innovation. Vision.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 relative overflow-hidden group text-lg px-8 py-6 h-auto"
                onClick={() => scrollToSection("projects")}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative">Projects</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 relative overflow-hidden group text-lg px-8 py-6 h-auto"
                onClick={() => scrollToSection("contact")}
              >
                <motion.span
                  className="absolute inset-0 bg-blue-400"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative">Contact</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          aria-label="Scroll down"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm tracking-wider">Scroll Down</span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
