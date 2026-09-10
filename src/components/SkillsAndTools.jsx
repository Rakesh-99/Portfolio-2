import { motion } from 'motion/react';
import Reveal from './ui/Reveal';

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};
const badge = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};


const FlatGrid = ({ data }) => (
  <motion.div
    variants={grid}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3"
  >
    {data.map((val, i) => {
      const Icon = val.icon;
      return (
        <motion.div
          key={i}
          variants={badge}
          whileHover={{ y: -4 }}
          className="flex flex-col items-center justify-center gap-2 rounded-xl border border-ink/10 dark:border-paper/10 bg-paper/60 dark:bg-ink-soft/60 py-5 px-2 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all"
        >
          <Icon size={26} />
          <p className="text-xs font-medium text-center text-ink/70 dark:text-paper/70">{val.skillName}</p>
        </motion.div>
      );
    })}
  </motion.div>
);

// Categorized mode (used for "Skills")
const CategorizedGrid = ({ categories }) => (
  <div className="flex flex-col gap-8">
    {categories.map((cat, ci) => (
      <Reveal key={ci} delay={ci * 0.05}>
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">{cat.category}</p>
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3"
        >
          {cat.skills.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                variants={badge}
                whileHover={{ y: -4 }}
                className="flex py-2 items-center justify-center gap-2 rounded-xl border border-ink/10 dark:border-paper/10 bg-paper/60 dark:bg-ink-soft/60  px-2 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all"
              >
                <Icon size={25} />
                <p className="text-xs font-medium text-center text-ink/70 dark:text-paper/70">{val.skillName}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Reveal>
    ))}
  </div>
);

const SkillsAndTools = ({ skillsAndToolsData, categories }) => {
  if (categories) return <CategorizedGrid categories={categories} />;
  return <FlatGrid data={skillsAndToolsData} />;
};

export default SkillsAndTools;
