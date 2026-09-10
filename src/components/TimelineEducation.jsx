import { GraduationCap } from 'lucide-react';
import Reveal from './ui/Reveal';

const education = [
  {
    year: '2021 — 2024',
    degree: 'B.TECH - Computer Science & Engineering',
    institution: 'Biju Patnaik University of Technology ( Nalanda Institute Of Technology, Bhubaneswar ) ',
    secured : "CGPA 7.28/10 "
  },
  {
    year: '2018 — 2021',
    degree: 'Diploma - Information Technology',
    institution: 'State Council for Technical Education & Vocational Training (Govt. Polytechnic,Bhubaneswar)',
    secured : "67.48%"
  },
];

const TimelineEducation = () => {
  return (
    <div className="relative">
      <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-ink/10 dark:via-paper/10 to-transparent" />

      <div className="flex flex-col gap-6">
        {education.map((edu, index) => (
          <Reveal key={index} delay={index * 0.1} className="relative pl-12 md:pl-16">
            <span className="absolute left-0 top-1 h-8 w-8 md:h-10 md:w-10 rounded-full bg-paper dark:bg-ink border-2 border-accent grid place-items-center text-accent">
              <GraduationCap size={16} />
            </span>

            <div className="rounded-2xl border border-ink/10 dark:border-paper/10 bg-paper/60 dark:bg-ink-soft/60 p-6 hover:border-accent/40 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-base md:text-lg font-bold font-display">{edu.degree}</h3>
                <span className="text-xs md:text-sm font-mono flex flex-col gap-1 text-ink/50 dark:text-paper/50 whitespace-nowrap">
                  <span>{edu.year}</span>
                  <span>{edu.secured}</span>
                </span>
              </div>
              <p className="text-sm text-ink/60 dark:text-paper/60 mt-1">{edu.institution}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default TimelineEducation;
