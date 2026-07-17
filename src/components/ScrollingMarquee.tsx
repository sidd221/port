import { motion } from 'motion/react';

const SKILLS = [
  "SEO Expert",
  "Web Developer",
  "AI Solutions",
  "Technical Support",
  "Customer Support",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Jira",
  "Google Sheet",
  "Excel",
  "Power BI",
  "Automation"
];

// Duplicate the array to ensure seamless infinite scrolling
const MARQUEE_ITEMS = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];

export default function ScrollingMarquee() {
  return (
    <section className="py-8 bg-slate-50 dark:bg-[#020617] border-y border-slate-200 dark:border-white/5 overflow-hidden relative flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-50 dark:from-[#020617] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-50 dark:from-[#020617] to-transparent pointer-events-none"></div>

      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {MARQUEE_ITEMS.map((item, index) => (
          <div
            key={index}
            className="mx-8 text-xl md:text-2xl font-bold text-slate-300 dark:text-slate-800 tracking-wider flex items-center gap-8"
          >
            <span>{item}</span>
            <span className="w-2 h-2 rounded-full bg-blue-500/30"></span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
