import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Briefcase, GraduationCap, Download, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Experience() {
  const { t } = useLanguage();

  const experiencesStruct = [
    { type: "work", period: "Aug 2025 - Dec 2025" },
    { type: "work", period: "Nov 2025 - Dec 2025" },
    { type: "work", period: "Jun 2025 - Jul 2025" },
    { type: "work", period: "Jun 2025 - Jul 2025" },
    { type: "work", period: "Jun 2023 - Aug 2023" },
    { type: "work", period: "Dec 2022 - Mar 2023" },
  ];

  const educationStruct = [
    { period: "2022 - 2026", honors: "" },
  ];

  const volunteeringStruct = [
    { period: "Sep 2025" },
    { period: "Oct 2022 - Aug 2025" },
    { period: "Sep 2024" },
    { period: "Aug 2023" },
    { period: "Mar 2023" },
    { period: "Dec 2022" },
    { period: "May 2022" },
  ];

  const translatedJobs = t('experience.jobs') || [];
  const experiences = experiencesStruct.map((e, i) => ({
    ...e,
    ...(translatedJobs[i] || {})
  }));

  const translatedEdu = t('experience.edu') || [];
  const education = educationStruct.map((e, i) => ({
    ...e,
    ...(translatedEdu[i] || {})
  }));

  const translatedVol = t('experience.vol') || [];
  const volunteering = volunteeringStruct.map((v, i) => ({
    ...v,
    ...(translatedVol[i] || {})
  }));

  const handleDownloadResume = () => {
    try {
      // Use import.meta.env.BASE_URL to get the base path for GitHub Pages
      const baseUrl = import.meta.env.BASE_URL;
      const resumeUrl = `${baseUrl}resume/Farhad_Alibayli_Resume.pdf`;

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
      const baseUrl = import.meta.env.BASE_URL;
      window.open(`${baseUrl}resume/Farhad_Alibayli_Resume.pdf`, '_blank');
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
          <h2 className="text-center mb-4">{t('experience.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            {t('experience.subtitle')}
          </p>

          <div className="flex justify-center mb-12">
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              {t('experience.downloadResume')}
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
            <h3>{t('experience.workExperience')}</h3>
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
            <h3>{t('experience.education')}</h3>
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
            <h3>{t('experience.volunteering')}</h3>
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
