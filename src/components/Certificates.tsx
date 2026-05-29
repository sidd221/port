import { motion } from 'motion/react';
import { Award } from 'lucide-react';

const certificates = [
  {
    title: "AWS Foundations: Cloud Essentials",
    date: "2026",
    issuer: "Amazon Web Services",
    image: "/aws_certificate.png",
    description: "Earned the AWS Certified Solutions Architect credential, demonstrating proficiency in designing distributed systems."
  },
  {
    title: "Google Data Analytics Professional Certificate",
    date: "2023",
    issuer: "IBM",
    image: "/ibm_cloud.png",
    description: "Equipped with the framework to assess business requirements and strategise effective cloud migration and adoption plans."
  },
  {
    title: "ESG Job Simulation",
    date: "2025",
    issuer: "Tata Forage",
    image: "/tcs.png",
    description: "Completed practical tasks in understanding and analysing client needs, assessing sustainability solutions, and presenting a fitment matrix."
  },
  {
    title: "Machine Learning Internship Programme",
    date: "2024",
    issuer: "SkillDzire",
    image: "/skilldz.png",
    description: "Completed an AICTE-collaborative internship focused on foundational machine learning concepts and practical, data-driven applications."
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-md -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-display font-bold mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card flex flex-col sm:flex-row overflow-hidden group dark:bg-slate-900 dark:border-white/10 hover:border-blue-500/50 transition-colors"
            >
              <div className="w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto sm:h-full relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center relative">
                <div className="absolute top-4 right-4 opacity-50 dark:opacity-20 text-blue-600">
                  <Award size={48} />
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
