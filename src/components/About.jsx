import { motion } from "motion/react";
import { Code2, Lightbulb, Target, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: t('about.highlights.cleanCode.title'),
      description: t('about.highlights.cleanCode.desc'),
    },
    {
      icon: Lightbulb,
      title: t('about.highlights.problemSolving.title'),
      description: t('about.highlights.problemSolving.desc'),
    },
    {
      icon: Target,
      title: t('about.highlights.userFocused.title'),
      description: t('about.highlights.userFocused.desc'),
    },
    {
      icon: Sparkles,
      title: t('about.highlights.innovation.title'),
      description: t('about.highlights.innovation.desc'),
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative">
              <motion.div
                className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="https://i.imgur.com/4urDHy1.jpg"
                  alt="My Photo"
                  className="w-full h-full object-cover"
                />


              </motion.div>
              {/* Decorative gradient orb */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.h3
              className="mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t('about.hello')}
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {t('about.p1')}
            </motion.p>
            <motion.p
              className="text-gray-600 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {t('about.p2')}
            </motion.p>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {t('about.p3')}
            </motion.p>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <Card className="p-6 hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-blue-300 h-full">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                </motion.div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
