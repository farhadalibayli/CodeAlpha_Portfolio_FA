import { motion } from "motion/react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const contactMethods = [
    {
      name: "Email",
      icon: Mail,
      value: "alibaylifarhad@gmail.com",
      link: "mailto:alibaylifarhad@gmail.com",
      color: "from-red-500 to-orange-500",
      hoverColor: "hover:shadow-red-500/50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      value: "linkedin.com/in/farhadalibayli",
      link: "https://linkedin.com/in/farhadalibayli",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:shadow-blue-500/50",
    },
    {
      name: "GitHub",
      icon: Github,
      value: "github.com/farhadalibayli",
      link: "https://github.com/farhadalibayli",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:shadow-gray-700/50",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="p-4 bg-blue-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/20">
              <Send className="w-12 h-12 text-blue-400" />
            </div>
          </motion.div>

          <h2 className="text-white mb-6 text-5xl sm:text-6xl">{t('contact.title')}</h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <div className={`relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl ${method.hoverColor} h-full`}>
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-4 bg-gradient-to-br ${method.color} rounded-xl mb-6 shadow-lg`}
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-white text-2xl mb-3">{method.name}</h3>

                  <p className="text-blue-300 break-all group-hover:text-blue-200 transition-colors">
                    {method.value}
                  </p>

                  {/* Arrow indicator */}
                  <motion.div
                    className="mt-6 flex items-center gap-2 text-gray-400 group-hover:text-blue-400 transition-colors"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm">{t('contact.connect')}</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
