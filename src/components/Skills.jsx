import { motion } from "motion/react";
import { Card } from "./ui/card";
import { useLanguage } from "../context/LanguageContext";

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.categories.frontend'),
      image: "https://i.imgur.com/in7Xcq6.png",
      color: "blue",
      skills: [
        { name: "React", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 75 },
      ],
    },
    {
      title: t('skills.categories.backend'),
      image: "https://i.imgur.com/3RJUfWP.png",
      color: "green",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Java", level: 85 },
        { name: "API Development", level: 90 },
        { name: "Express.js", level: 75 },
      ],
    },
    {
      title: t('skills.categories.databases'),
      image: "https://i.imgur.com/3RJUfWP.png",
      color: "purple",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "Prisma", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      title: t('skills.categories.tools'),
      image: "https://i.imgur.com/rMI6VGX.png",
      color: "orange",
      skills: [
        { name: "Git", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Docker", level: 85 },
        { name: "RESTful APIs", level: 75 },
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-600",
        text: "text-blue-600",
        gradient: "from-blue-600 to-blue-400",
        shadow: "shadow-blue-300",
      },
      green: {
        bg: "bg-green-600",
        text: "text-green-600",
        gradient: "from-green-600 to-green-400",
        shadow: "shadow-green-300",
      },
      purple: {
        bg: "bg-purple-600",
        text: "text-purple-600",
        gradient: "from-purple-600 to-purple-400",
        shadow: "shadow-purple-300",
      },
      orange: {
        bg: "bg-orange-600",
        text: "text-orange-600",
        gradient: "from-orange-600 to-orange-400",
        shadow: "shadow-orange-300",
      },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">{t('skills.title')}</h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <Card className={`p-6 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-2 border-transparent hover:border-opacity-50 hover:${colorClasses.shadow}`}>
                  <motion.div
                    className="flex items-center gap-3 mb-6"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.15 + 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden relative group shadow-lg shrink-0">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3>{category.title}</h3>
                  </motion.div>

                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <motion.span
                            className="text-gray-700"
                            whileHover={{ x: 5, color: colorClasses.text }}
                            transition={{ duration: 0.2 }}
                          >
                            {skill.name}
                          </motion.span>
                          <motion.span
                            className="text-gray-500"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.1 + 0.5 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${colorClasses.gradient} rounded-full relative overflow-hidden`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: categoryIndex * 0.15 + skillIndex * 0.15, ease: "easeOut" }}
                            whileHover={{ opacity: 0.8 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                              animate={{ x: ["-100%", "200%"] }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
