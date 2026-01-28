import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Projects() {
  const [visibleCount, setVisibleCount] = useState(6);
  const { t } = useLanguage();

  const projectStruct = [
    {
      image: "https://i.imgur.com/gdMZklD.png",
      github: "https://github.com/farhadalibayli/Skillmatch.git",
      technologies: ["TypeScript", "n8n", "PostgreSQL", "Next.js"],
    },
    {
      image: "https://i.imgur.com/IBwh0le.png",
      github: "https://github.com/farhadalibayli/idea-finder.git",
      technologies: ["TypeScript", "Llama3", "Ollama", "Cheerio"],
    },
    {
      image: "https://i.imgur.com/M5rjvnG.png",
      github: "https://github.com/farhadalibayli/InternLink.git",
      technologies: ["Javascript", "Vite", "HTML", "CSS"],
    },
    {
      image: "https://i.imgur.com/wty396F.png",
      github: "https://github.com/farhadalibayli/CodeAlpha_Music-Player",
      technologies: ["React", "Vite", "TypeScript", "CSS"],
    },
    {
      image: "https://i.imgur.com/Ui2Gt3W.png",
      github: "https://github.com/farhadalibayli/CodeAlpha_Calculator",
      technologies: ["React", "Vite", "TypeScript", "CSS"],
    },
    {
      image: "https://i.imgur.com/jBzlCnJ.png",
      github: "https://github.com/farhadalibayli/RealCavab-Public-Showcase",
      technologies: ["TypeScript", "Node.js", "CSS", "MySQL"],
    },
    {
      image: "https://i.imgur.com/CErvqxj.png",
      github: "https://github.com/farhadalibayli/Projectify",
      technologies: ["TypeScript", "JavaScript", "CSS", "HTML"],
    },
    {
      image: "https://i.imgur.com/cjETiZ1.png",
      github: "https://github.com/farhadalibayli/weather-news-dashboard",
      technologies: ["CSS", "TypeScript", "Java", "OpenWeather API"],
    },
    {
      image: "https://i.imgur.com/R8tzoc6.png",
      github: "https://github.com/farhadalibayli/Currency-Convertor",
      technologies: ["Java", "TypeScript", "CSS", "React"],
    },
    {
      image: "https://i.imgur.com/rPYLTGB.png",
      github: "https://github.com/farhadalibayli/PlanMeal",
      technologies: ["TypeScript", "Java", "Spring Boot", "Edamam API"],
    },
  ];

  const translatedItems = t('projects.items') || [];
  const projects = projectStruct.map((p, i) => ({
    ...p,
    title: translatedItems[i]?.title || "",
    description: translatedItems[i]?.description || ""
  }));

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -15, rotateY: 5, transition: { duration: 0.3 } }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col group bg-white/80 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <motion.h4 className="mb-2" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    {project.title}
                  </motion.h4>
                  <p className="text-gray-600 mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * techIndex }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Badge variant="secondary">{tech}</Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.website && (
                      <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                        <a href={project.website} target="_blank" rel="noopener noreferrer">
                          <ArrowRight className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                          {t('projects.viewWebsite')}
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          {t('projects.viewCode')}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button size="lg" onClick={() => setVisibleCount((prev) => Math.min(prev + 6, projects.length))} className="bg-blue-600 hover:bg-blue-700 group">
              {t('projects.showMore')}
              <motion.div className="ml-2" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
