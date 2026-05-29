import { motion } from 'motion/react';
import { Layout, Search, BarChart3, Bot, MonitorSmartphone, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Website Development",
    description: "Custom, responsive, and blazing-fast web applications built with modern tools like React, Next.js, and Tailwind CSS.",
    icon: Layout,
    color: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50 text-blue-600" // Light mode icon background
  },
  {
    title: "Technical SEO Optimization",
    description: "Deep technical audits, schema implementation, and architecture optimizations to dominate Google search results.",
    icon: Search,
    color: "from-violet-500 to-fuchsia-500",
    bgLight: "bg-violet-50 text-violet-600"
  },
  {
    title: "AI Automation",
    description: "Integration of smart LLMs and automated workflows to reduce manual tasks, elevate support, and streamline operations.",
    icon: Bot,
    color: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Analytics & Tracking",
    description: "Comprehensive tracking implementation to monitor user behavior, conversion funnels, and core business metrics.",
    icon: BarChart3,
    color: "from-orange-500 to-rose-500",
    bgLight: "bg-orange-50 text-orange-600"
  },
  {
    title: "Landing Page Design",
    description: "High-converting, visually stunning product landing pages crafted meticulously to capture leads and drive sales.",
    icon: MonitorSmartphone,
    color: "from-pink-500 to-rose-500",
    bgLight: "bg-pink-50 text-pink-600"
  },
  {
    title: "Growth Strategy",
    description: "Holistic digital marketing blueprints leveraging SEO, CRO, and AI tools to exponentially scale your digital footprint.",
    icon: Sparkles,
    color: "from-indigo-500 to-blue-500",
    bgLight: "bg-indigo-50 text-indigo-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-slate-100/50 dark:bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-display font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive solutions designed to elevate your brand presence and streamline your business operations through intelligent design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-8 hover:-translate-y-2 transition-all duration-300 group cursor-default relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className={`w-10 h-10 rounded-lg ${service.bgLight} dark:bg-white/5 dark:border dark:border-white/5 dark:text-indigo-400 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all duration-300 relative z-10`}>
                <service.icon size={26} className="dark:opacity-80" />
                {/* Dark mode vibrant icon glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 dark:group-hover:opacity-100 mix-blend-overlay rounded-xl transition-opacity`}></div>
              </div>
              <h3 className="text-xl font-bold mb-3 font-display relative z-10">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
