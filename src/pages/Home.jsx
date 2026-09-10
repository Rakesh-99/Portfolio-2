import { motion } from 'motion/react';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiTailwindcss } from 'react-icons/si';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import EngineerCodeCard from '../components/ui/EngineerCodeCard';

const orbitIcons = [
  { Icon: FaReact, color: '#61DAFB', radius: 150, angle: 0, duration: 22 },
  { Icon: FaNodeJs, color: '#68A063', radius: 150, angle: 60, duration: 22 },
  { Icon: SiMongodb, color: '#4DB33D', radius: 150, angle: 120, duration: 22 },
  { Icon: SiExpress, color: '#A0A0A0', radius: 150, angle: 180, duration: 22 },
  { Icon: SiTypescript, color: '#3178C6', radius: 150, angle: 240, duration: 22 },
  { Icon: SiTailwindcss, color: '#38BDF8', radius: 150, angle: 300, duration: 22 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Home = () => {
  return (
    <>
     
      <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="container grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center py-16">
          {/* Left content */}
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">
            <motion.div
              variants={item}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/10 dark:border-paper/15 px-4 py-1.5 text-xs font-mono"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to new opportunities
            </motion.div>

            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08]">
              Building clean, <span className="text-gradient">scalable</span> web
              experiences.
            </motion.h1>

            <motion.p variants={item} className="text-base md:text-lg text-ink/65 dark:text-paper/65 max-w-xl leading-relaxed">
              I&apos;m <span className="font-semibold text-ink dark:text-paper">Rakesh Kumar Parida</span>, a Full
              Stack Developer with 1.6+ years of experience crafting fast, reliable applications with the{' '}
              <span className="font-semibold text-accent">Next.js</span>, Mern Stack, TypeScript, and modern cloud
              tooling with a focus on clean architecture and production-ready REST APIs..
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
              {['Next.js','React.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1.5 rounded-full bg-ink/5 dark:bg-paper/10 text-ink/70 dark:text-paper/70"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-4">
              <ScrollLink
                to="projects"
                smooth
                duration={500}
                offset={-80}
                className="group inline-flex items-center gap-2 rounded-full bg-ink dark:bg-paper text-paper dark:text-ink px-6 py-3 text-sm font-semibold cursor-pointer transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </ScrollLink>

              <ScrollLink
                to="contact"
                smooth
                duration={500}
                offset={-80}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 dark:border-paper/20 px-6 py-3 text-sm font-semibold cursor-pointer hover:bg-ink/5 dark:hover:bg-paper/10 transition-colors"
              >
                Let&apos;s talk
              </ScrollLink>
            </motion.div>
          </motion.div>


          <div className="hidden lg:block relative h-[460px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="absolute inset-0 z-0 flex items-center justify-center"
            >
              <div className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-ink/15 dark:border-paper/15" />
              <div className="absolute h-[420px] w-[420px] rounded-full border border-ink/10 dark:border-paper/10" />

              <div className="relative h-32 w-32 rounded-full bg-gradient-to-br from-accent to-accent-light grid place-items-center text-white font-display font-bold text-3xl shadow-2xl shadow-accent/30">
                RP
              </div>

              {orbitIcons.map(({ Icon, color, radius, angle, duration }, i) => (
                <motion.div
                  key={i}
                  className="absolute h-full w-full"
                  style={{ top: 0, left: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration, repeat: Infinity, ease: 'linear' }}
                  initial={{ rotate: angle }}
                >
                  <div
                    className="absolute h-11 w-11 rounded-2xl bg-paper dark:bg-ink-soft border border-ink/10 dark:border-paper/15 shadow-lg grid place-items-center"
                    style={{
                      top: `calc(50% - ${radius}px - 22px)`,
                      left: 'calc(50% - 22px)',
                    }}
                  >
                    <motion.span
                      animate={{ rotate: -360 }}
                      transition={{ duration, repeat: Infinity, ease: 'linear' }}
                    >
                      <Icon size={20} color={color} />
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <EngineerCodeCard className="absolute -bottom-20 right-0 z-10 w-[340px]" />
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-ink/40 dark:text-paper/40"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </section>

      <section id="about" className="py-24 md:py-32">
        <About />
      </section>

      <section id="projects" className="py-24 md:py-32">
        <Projects />
      </section>

      <section id="contact" className="py-24 md:py-32">
        <Contact />
      </section>
    </>
  );
};

export default Home;
