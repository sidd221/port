import { motion } from 'motion/react';
import { Code2, CheckCircle2, GraduationCap, Calendar, MapPin } from 'lucide-react';

const skills = [
  { name: 'HTML & CSS (Tailwind)', level: 95 },
  { name: 'JavaScript (React & TS)', level: 90 },
  { name: 'AI-Driven Digital Marketing', level: 85 },
  { name: 'Technical SEO', level: 92 },
  { name: 'GEO', level: 98 },
  { name: 'Generative AI Tools', level: 88 },
  { name: 'Technical Support', level: 90 },
  { name: 'Customer Support', level: 95 }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-md -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-8 text-center sm:text-left">
              <div className="relative w-32 sm:w-36 h-32 sm:h-36 shrink-0 rounded-full p-2 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/5 shadow-xl">
                <img 
                  src="/my-photo.jpeg" 
                  alt="Siddhant Sinha" 
                  className="w-full h-full object-cover object-[center_15%] rounded-full"
                />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold font-display">Crafting Digital Experiences with <br className="hidden lg:block"/><span className="text-gradient">Code & AI</span></h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-base sm:text-lg">
              Entering the digital landscape, I connect technical engineering with modern marketing. My goal is to build SEO-driven solutions that are visually compelling, engineered for discovery, and automated for scale.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-base sm:text-lg">
              My unique blend of Web Development, Technical SEO, and AI integration allows me to deliver holistic solutions that drive real business growth and operational efficiency.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex gap-3 items-center glass p-3 rounded-lg">
                <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                <span className="font-semibold text-sm">Clean Architecture</span>
              </div>
              <div className="flex gap-3 items-center glass p-3 rounded-lg">
                <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                <span className="font-semibold text-sm">Data-Driven SEO</span>
              </div>
              <div className="flex gap-3 items-center glass p-3 rounded-lg">
                <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                <span className="font-semibold text-sm">Responsive Design</span>
              </div>
              <div className="flex gap-3 items-center glass p-3 rounded-lg">
                <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                <span className="font-semibold text-sm">AI Workflows</span>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true, margin: "-100px" }}
             className="glass-card p-8 md:p-10 relative"
          >
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 font-display relative z-10">
               <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                 <Code2 size={24} />
               </div>
               Technical Proficiencies
            </h3>
            <div className="space-y-6 relative z-10">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-indigo-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold mb-4">Education Journey</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-blue-500/30 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 hover:z-10 transition-all duration-300 ease-out group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              <h4 className="text-xl font-bold font-display mb-2 text-slate-800 dark:text-white">Btech (Information Science and Engineering)</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">New Horizon College of Engineering</p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="shrink-0" />
                  <span>2020 - 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="shrink-0" />
                  <span>Bengaluru, Karnataka</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-violet-500/30 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 hover:z-10 transition-all duration-300 ease-out group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-colors"></div>
              <div className="w-12 h-12 bg-violet-50 dark:bg-violet-900/30 rounded-xl flex items-center justify-center text-violet-600 dark:text-violet-400 mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              <h4 className="text-xl font-bold font-display mb-2 text-slate-800 dark:text-white">HSC (PCM)</h4>
              <p className="text-violet-600 dark:text-violet-400 font-medium mb-4">Kendriya Vidyalaya</p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="shrink-0" />
                  <span>2018 - 2019</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="shrink-0" />
                  <span>Patna, Bihar</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 hover:z-10 transition-all duration-300 ease-out group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors"></div>
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              <h4 className="text-xl font-bold font-display mb-2 text-slate-800 dark:text-white">SSC</h4>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">Ramshree Public School</p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="shrink-0" />
                  <span>2015-2016</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="shrink-0" />
                  <span>Orai, Uttar Pradesh</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
