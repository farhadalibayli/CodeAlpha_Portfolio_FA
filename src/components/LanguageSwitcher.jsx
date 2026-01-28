import { motion, AnimatePresence } from "motion/react";
import { Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function LanguageSwitcher({ isScrolled }) {
    const { language, setLanguage } = useLanguage();

    // Cycle order: EN -> AZ -> RU -> EN
    const cycleOrder = ["en", "az", "ru"];

    const handleCycle = () => {
        const currentIndex = cycleOrder.indexOf(language);
        const nextIndex = (currentIndex + 1) % cycleOrder.length;
        setLanguage(cycleOrder[nextIndex]);
    };

    return (
        <motion.button
            onClick={handleCycle}
            className={`flex items-center gap-2.5 text-sm font-medium transition-all duration-300 outline-none px-4 py-2 rounded-full group border border-transparent ${isScrolled
                    ? "text-gray-900 bg-gray-100/80 hover:bg-gray-200 hover:border-gray-200"
                    : "text-white bg-white/10 hover:bg-white/20 hover:border-white/10 backdrop-blur-md shadow-sm"
                }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Switch Language"
        >
            <Languages
                className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-12 ${isScrolled ? "text-blue-600" : "text-blue-300"
                    }`}
                strokeWidth={1.5}
            />
            {/* Divider */}
            <div className={`w-px h-3 ${isScrolled ? "bg-gray-300" : "bg-white/20"}`} />

            <span className="relative w-5 h-5 flex items-center justify-center">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={language}
                        className="absolute inset-0 flex items-center justify-center uppercase tracking-wider text-xs font-semibold"
                        initial={{ y: 5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -5, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        {language}
                    </motion.span>
                </AnimatePresence>
            </span>
        </motion.button>
    );
}
