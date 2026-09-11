import { projects } from '../data/data';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Reveal from './ui/Reveal';
import ImageSlider from './ui/ImageSlider';

const ProjectCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((val, i) => (
        <Reveal key={val._id} delay={i * 0.08} className="group h-full">
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="card-glow relative h-full flex flex-col rounded-2xl border border-ink/10 dark:border-paper/10 bg-paper/60 dark:bg-ink-soft/60 p-7 overflow-hidden"
          >
            {/* gradient corner accent */}
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-colors" />

            {/* auto sliding thumbnail  */}
            <ImageSlider images={val.projectImages} alt={val.projectTitle} className="relative mb-5" />

            <div className="relative flex items-start justify-between gap-4 mb-3">
              <h3 className="text-xl md:text-2xl font-bold font-display">{val.projectTitle}</h3>
              <ArrowUpRight
                size={20}
                className="shrink-0 text-ink/30 dark:text-paper/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>

            <p className="relative text-xs leading-relaxed text-ink/65 dark:text-paper/65 mb-6">
              {val.projectDescription}
            </p>

            <div className="relative mt-auto flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {val.techIcons?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full bg-ink/5 dark:bg-paper/10"
                    title={tech.iconName}
                  >
                    <tech.icon size={13} style={{ color: tech.color || 'inherit' }} />
                    {tech.iconName}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-1">
                {val.liveLink && (
                  <Link
                    target="_blank"
                    to={val.liveLink}
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink dark:bg-paper text-paper dark:text-ink text-xs font-semibold px-4 py-2 hover:-translate-y-0.5 transition-transform"
                  >
                    Live demo <ArrowUpRight size={13} />
                  </Link>
                )}
                <Link
                  target="_blank"
                  to={val.source}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 dark:border-paper/20 text-xs font-semibold px-4 py-2 hover:bg-ink/5 dark:hover:bg-paper/10 transition-colors"
                >
                  <FaGithub size={13} /> Source
                </Link>
              </div>
            </div>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
};

export default ProjectCard;
