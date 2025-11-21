import { motion } from "motion/react";
import { Code2, Lightbulb, Target, Sparkles } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges",
    },
    {
      icon: Target,
      title: "User-Focused",
      description: "Building applications with user experience in mind",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Exploring cutting-edge technologies and best practices",
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
          <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
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
              Hello! I'm Farhad
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              I'm a passionate Full-Stack Developer who enjoys creating elegant and 
              user-friendly web applications. My journey in programming began during
              my engineering studies, where I discovered the perfect balance between 
              creativity and problem-solving.
            </motion.p>
            <motion.p
              className="text-gray-600 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              I strive to build solutions that are both functional and intuitive, with a
              focus on clean, maintainable code. I enjoy tackling challenging 
              problems, learning continuously, and exploring new approaches to 
              improve user experiences.
            </motion.p>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Beyond coding, I’m curious about the latest trends in technology and love 
              experimenting with ideas that make digital interactions smoother and more 
              meaningful. My goal is to create applications that not only work well but 
              also provide real value to users.
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
