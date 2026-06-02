import { motion } from 'motion/react';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';

const projects = [
  {
    title: "Jameenwale (Real Estate)",
    description: "Designed and developed a website from scratch and performed all the SEO & GEO best practices and delivered it to my client with all the requirements.",
    image: "/Jameenwale.png",
    technologies: ["Google Analytics", "Ahrefs", "Next.js", "Schema Markup", "Google AI studio", "Ubersuggest", "HTML", "CSS3", "React", "Typescript", "Javascript", "W3 forms"],
    demoUrl: "https://jameenwale.vercel.app/",
    githubUrl: "#"
  },
  {
    title: "Cafe website (Freelance)",
    description: "Engineered a modern, responsive web presence for Bliss Cafe, blending an inviting visual aesthetic with seamless user navigation.",
    image: "/Cafe.png",
    technologies: ["React", "Tailwind 4", "Framer Motion", "Vite", "HTML", "CSS3", "Javascript", "SEO", "GEO", "AI-Intigration"],
    demoUrl: "https://sidd221.github.io/Cafe/",
    githubUrl: "#"
  },
  {
    title: "Tourism Website (NHCE)",
    description: "Engineered a responsive, visually compelling tourism website featuring dynamic event showcases, destination galleries, and seamless user navigation.",
    image: "/adv.png",
    technologies: ["HTML", "CSS3", "Bootstrap", "AI-Studio(Google)", "React", "Typescript", "W3 forms"],
    demoUrl: "https://sidd221.github.io/TourismWeb/",
    githubUrl: "#"
  },
  {
    title: "Retail Sales & Performance Dashboard",
    description: "Developed an interactive business intelligence dashboard that transforms complex sales, customer, and product data into actionable insights.",
    image: "/sale.png",
    technologies: ["SQL", "Excel", "Power BI", "Data Cleaning", "Data Mining"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-display font-bold mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">
            A curated selection of my latest client work, SaaS products, and technical accomplishments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card overflow-hidden group border border-slate-200/60 dark:border-white/5 dark:bg-slate-900/30"
            >
              <div className="relative h-[300px] overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 dark:bg-black/20 z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Action Buttons */}
                {project.demoUrl && project.demoUrl !== "#" && (
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-6">
                     <a title="Live Demo" href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="p-4 bg-white text-slate-900 rounded-full hover:scale-110 hover:shadow-xl hover:shadow-white/20 transition-all">
                       <ExternalLink size={24} />
                     </a>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 text-[10px] bg-slate-100 dark:bg-white/5 rounded border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
           <a href="https://github.com/sidd221" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-full glass font-bold hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors w-full md:w-auto justify-center">
            View All Projects <FolderOpen size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
