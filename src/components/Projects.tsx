import { motion } from 'motion/react';
import { ExternalLink, FolderOpen } from 'lucide-react';
import { BorderRotate } from './ui/animated-gradient-border';

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
  },
  {
    title: "Lead Scraper",
    description: "Developed a web scraping tool to extract business leads directly from Google My Business listings. Automated data collection to streamline prospecting and enhance lead generation efficiency.",
    image: "/lead_scraper.png",
    technologies: ["Python", "Flask", "Google Maps", "API"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "IT-HelpDesk-Ticketing-System",
    description: "Built a service helpdesk project using Jira to manage support tickets and streamline issue resolution. Implemented workflows for tracking, prioritising, and escalating requests to improve service efficiency.",
    image: "/support_proj.png",
    technologies: ["Google Sheet", "Jira", "ticketing system tools", "Excel", "Power BI"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Homoeopathic Clinic",
    description: "A modern web app for managing and booking homoeopathic clinic services.",
    image: "/maahomoeo.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://maahomoeoclinic.vercel.app/",
    githubUrl: "#"
  },
  {
    title: "GrothSpace Digital (A Digital Marketing Company)",
    description: "Empowering brands with cutting‑edge digital marketing solutions built for growth.",
    image: "/grothspace.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Google AI Studio", "SEO", "GEO", "AI-Intigration", "HTML", "CSS3", "Javascript"],
    demoUrl: "https://grothspace-digital.vercel.app/",
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
              className="h-full"
            >
              <BorderRotate
                className="h-full group"
                animationMode="auto-rotate"
                borderWidth={1}
                borderRadius={24}
                backgroundColor="var(--glass-bg)"
                gradientColors={{
                  primary: '#3b82f6', // blue-500
                  secondary: '#a855f7', // purple-500
                  accent: '#38bdf8' // sky-400
                }}
              >
                <div className="glass-card overflow-hidden group border-none h-full bg-transparent flex flex-col rounded-[24px]">
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
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3 font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-2 py-1 text-[10px] bg-slate-100 dark:bg-white/5 rounded border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 relative z-10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </BorderRotate>
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
