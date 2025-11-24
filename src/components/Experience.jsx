import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Briefcase, GraduationCap, Download, Heart } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Frontend Developer Internship",
      company: "CodeAlpha",
      location: "Online, Remote",
      period: "Nov 2025 - Present",
      description: [
        "Developed responsive web interfaces using JavaScript, HTML, and CSS",
        "Implemented interactive features and UI components across real project tasks",
        "Enhanced code quality and frontend performance through continuous practice",
      ],
    },
    {
      type: "work",
      title: "Back End Developer Internship",
      company: "DOST Digital Innovations Center",
      location: "Baku, Azerbaijan, Remote",
      period: "Aug 2025 - Present",
      description: [
        "Designed and implemented server-side logic for backend projects",
        "Built APIs and created efficient algorithms to solve problems",
        "Worked on real-world applications to improve functionality and performance",
      ],
    },
    {
      type: "work",
      title: "Data Analyst Internship",
      company: "State Agency for Preschool and General Education",
      location: "Baku, Azerbaijan",
      period: "Jun 2025 - Jul 2025",
      description: [
        "Assisted in analyzing educational data to support strategic decisions",
        "Created reports and insights using Excel",
        "Contributed to policy improvements for early childhood education",
      ],
    },
    {
      type: "work",
      title: "Full-stack Developer Internship",
      company: "State Agency for Public Service and Social Innovations under the President of Azerbaijan",
      location: "Baku, Azerbaijan",
      period: "Jun 2025 - Jul 2025",
      description: [
        "Worked on frontend and backend development of digital platforms",
        "Collaborated with teams, writing clean and efficient code",
        "Contributed to government tech projects improving public services",
      ],      
    },
    {
      type: "work",
      title: "Back End Developer Internship",
      company: "Innovation and Digital Development Agency",
      location: "Baku, Azerbaijan",
      period: "Jun 2023 - Aug 2023",
      description: [
        "Learning and applying Java and Spring Boot for backend development",
        "Developed and maintained server-side applications",
        "Gained practical experience in building efficient backend solutions",
      ],      
    },
    {
      type: "work",
      title: "Sap Advanced Business Application Programming Developer Internship",
      company: "Saphire",
      location: "Baku, Azerbaijan",
      period: "Dec 2022 - Mar 2023",
      description: [
        "Developed and maintained ABAP reports, interfaces, and enhancements",
        "Created and updated forms for business processes",
        "Ensured efficient and reliable system functionality",
      ],      
    },
  ];

  
  
  
  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "ADA University",
      location: "Baku, Azerbaijan",
      period: "2022 - 2026",
      details: [
        "Relevant Coursework: Data Structures, Algorithms, Programming Principles 2, Digital Logic Design",
      ],
    },
  ];

  
  
  
  
  const volunteering = [  
    {
      title: "Volunteer",
      company: "Formula 1",
      location: "Baku, Azerbaijan",
      period: "sep 2025",
      details: [
        "Volunteered in the grandstand at Formula One, assisting spectators and ensuring smooth operations",
      ],
    },
    {
      title: "President",
      company: "ADA Watchmen",
      location: "Baku, Azerbaijan",
      period: "oct 2022 - aug 2025",
      details: [
        "Volunteered at ADA University, supporting events and promoting a safe, inclusive environment",
      ],
    },
    {
      title: "Volunteer",
      company: "Formula 1",
      location: "Baku, Azerbaijan",
      period: "sep 2024",
      details: [
        "Volunteered in spectator services, assisting attendees and ensuring smooth event operations",
      ],
    },
    {
      title: "Volunteer",
      company: "ICRC Azerbaijan",
      location: "Baku, Azerbaijan",
      period: "aug 2023",
      details: [
        "Volunteered at the International Committee of the Red Cross (ICRC) Azerbaijan",
      ],
    },
    {
      title: "Volunteer",
      company: "ESN Azerbaijan",
      location: "Baku, Azerbaijan",
      period: "mar 2023",
      details: [
        "Volunteered at Erasmus Student Network Azerbaijan, supporting student activities and community events",
      ],
    },
    {
      title: "Volunteer",
      company: "Mars Academy",
      location: "Baku, Azerbaijan",
      period: "Dec 2022",
      details: [
        "Volunteered with Mars Academy at ADA University, supporting robotics competitions and student activities",
      ],
    },
    {
      title: "Delegate",
      company: "EYP Azerbaijan",
      location: "Baku, Azerbaijan",
      period: "May 2022",
      details: [
        "Served as a delegate at European Youth Parliament (EYP) Azerbaijan, participating in debate sessions and discussions",
      ],
    },
  ];

  const handleDownloadResume = () => {
    try {
      // Using the public URL directly since we're in a create-react-app
      const resumeUrl = '/resume/Farhad_Alibayli_Resume.pdf';
      
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Farhad_Alibayli_Resume.pdf';
      
      // Append to body, trigger download, and clean up
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      }, 100);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: Open in new tab if download fails
      window.open('/resume/Farhad_Alibayli_Resume.pdf', '_blank');
    }
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            My professional journey and academic background
          </p>
          
          <div className="flex justify-center mb-12">
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Full Resume
            </Button>
          </div>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-3 bg-blue-100 rounded-lg">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <h3>Work Experience</h3>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="mb-1">{exp.title}</h4>
                      <p className="text-gray-700">{exp.company}</p>
                      <p className="text-gray-500">{exp.location}</p>
                    </div>
                    <span className="text-blue-600 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-3 bg-green-100 rounded-lg">
              <GraduationCap className="w-6 h-6 text-green-600" />
            </div>
            <h3>Education</h3>
          </motion.div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="mb-1">{edu.degree}</h4>
                    <p className="text-gray-700">{edu.institution}</p>
                    <p className="text-gray-500">{edu.location}</p>
                    {edu.honors && (
                      <p className="text-green-600 mt-1">{edu.honors}</p>
                    )}
                  </div>
                  <span className="text-blue-600 mt-2 md:mt-0">{edu.period}</span>
                </div>
                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Volunteering */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-3 bg-purple-100 rounded-lg">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <h3>Volunteering</h3>
          </motion.div>

          <div className="space-y-6">
            {volunteering.map((volunteer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{volunteer.title}</h4>
                      <span className="text-gray-500">•</span>
                      <p className="text-gray-700">{volunteer.company}</p>
                      <span className="text-gray-500">•</span>
                      <p className="text-gray-500">{volunteer.location}</p>
                    </div>
                    <span className="text-purple-600">{volunteer.period}</span>
                  </div>
                  <div className="mt-2 text-gray-600">
                    {volunteer.details.join(' • ')}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
