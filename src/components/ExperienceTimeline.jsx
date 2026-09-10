import { Briefcase, MapPin } from 'lucide-react';
import { internshipTechUsed, vgInfotecExp } from '../data/data';
import Reveal from './ui/Reveal';

const experiences = [
  {
    title: 'ThinkerSky Technologies',
    fullTime: true,
    period: 'Feb 2025 — July 2026',
    role: 'Full-Stack Developer',
    location: 'Rajkot, Gujarat (On-site)',
    techStack: vgInfotecExp,
    achievements: [
      'Integrated external trading APIs (Charles Schwab, E*TRADE) to fetch real-time stock and options data.',
      'Implemented dynamic UI components using TradingView lightweight-charts to visualize options metrics (strike price, premium, volume, open interest).',
      'Optimized ERP workflows by enhancing document handling (invoices, packing lists, contracts), reducing manual processing effort.',
      'Improved system reliability by refining API responses and synchronizing frontend-backend communication.',
    ],
  },
  {
    title: 'Website Vikreta',
    fullTime: false,
    period: 'Sep 2024 — Dec 2024',
    role: 'MERN Stack Developer',
    location: 'Maharashtra, India',
    techStack: internshipTechUsed,
    achievements: [
      'Designed a threaded comment system supporting nested replies, improving user engagement across posts.',
      'Developed a custom URL redirection system in Next.js, enabling Bitly link transformation into branded domain links with dynamic routing.',
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="relative">
      <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-ink/10 dark:via-paper/10 to-transparent" />

      <div className="flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <Reveal key={index} delay={index * 0.1} className="relative pl-12 md:pl-16">
            <span className="absolute left-0 top-1 h-8 w-8 md:h-10 md:w-10 rounded-full bg-paper dark:bg-ink border-2 border-accent grid place-items-center text-accent">
              <Briefcase size={16} />
            </span>

            <div className="rounded-2xl border border-ink/10 dark:border-paper/10 bg-paper/60 dark:bg-ink-soft/60 p-6 hover:border-accent/40 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="text-lg md:text-xl font-bold font-display">{exp.title}</h3>
                <span className="text-xs md:text-sm font-mono text-ink/50 dark:text-paper/50 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm text-ink/60 dark:text-paper/60">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} /> {exp.location}
                </span>
                <span className="italic">{exp.role}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                  {exp.fullTime ? 'Full-time' : 'Internship'}
                </span>
              </div>

              <ul className="flex flex-col gap-2 mb-5">
                {exp.achievements.map((a, i) => (
                  <li key={i} className="text-sm leading-relaxed text-ink/75 dark:text-paper/75 flex gap-2">
                    <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full bg-ink/5 dark:bg-paper/10"
                  >
                    <tech.icon size={13} style={{ color: tech.color || 'inherit' }} />
                    {tech.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
