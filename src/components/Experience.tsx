import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Building2 } from 'lucide-react';
import { BorderRotate } from './ui/animated-gradient-border';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  points: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Assets99 Real Estate Pvt. Ltd",
    role: "Business Development Executive",
    period: "Apr '26 — Dec '26",
    location: "Patna, India",
    type: "Full-time",
    points: [
      "Generated and converted real estate leads through digital marketing, social media campaigns, and direct client outreach, contributing to property sales and revenue growth.",
      "Managed end-to-end client interactions, including lead qualification, property presentations, site visits, follow-ups, and deal closures.",
      "Built and maintained strong client relationships, resulting in increased referrals and repeat business opportunities."
    ],
    skills: [
      "Digital Marketing",
      "Lead Generation & Qualification",
      "Social Media Campaigns",
      "Direct Client Outreach",
      "Property Presentations",
      "Deal Closures",
      "Client Relationship Management"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute -left-20 top-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-display font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">
            My professional journey and track record in driving business development, client acquisition, and digital strategy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <BorderRotate
                className="h-full group"
                animationMode="rotate-on-hover"
                borderWidth={1}
                borderRadius={28}
                backgroundColor="var(--glass-bg)"
                gradientColors={{
                  primary: '#3b82f6', // blue-500
                  secondary: '#8b5cf6', // violet-500
                  accent: '#38bdf8' // sky-400
                }}
              >
                <div className="glass-card p-6 sm:p-8 md:p-10 border-none bg-transparent rounded-[28px] relative overflow-hidden">
                  {/* Subtle top-right accent glow */}
                  <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

                  {/* Header: Role, Company & Meta info */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/10 relative z-10">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 group-hover:border-blue-500/40 transition-all duration-300">
                        <Briefcase size={28} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {exp.role}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
                          <Building2 size={18} className="shrink-0" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/40 text-blue-700 dark:text-blue-300 font-medium">
                        <Calendar size={15} className="shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                        <MapPin size={15} className="shrink-0 text-rose-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Contributions & Achievements */}
                  <div className="py-6 space-y-4 relative z-10">
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                      <TrendingUp size={16} className="text-blue-500" />
                      Key Responsibilities & Impact
                    </div>
                    <ul className="space-y-3.5">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3.5 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                          <div className="mt-1 shrink-0 p-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                            <CheckCircle2 size={16} />
                          </div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills & Competencies Tags */}
                  <div className="pt-6 border-t border-slate-200 dark:border-white/10 relative z-10">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                      Core Competencies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-500/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </BorderRotate>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

