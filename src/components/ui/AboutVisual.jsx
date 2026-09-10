import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTypescript } from 'react-icons/si';

const FloatingChip = ({ Icon, color, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.6 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.3 + delay }}
    className={`absolute h-11 w-11 md:h-12 md:w-12 rounded-2xl bg-paper dark:bg-ink-soft border border-ink/10 dark:border-paper/15 shadow-lg grid place-items-center ${className}`}
  >
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <Icon size={20} color={color} />
    </motion.div>
  </motion.div>
);

const AboutVisual = () => {
  return (
    <div className="relative h-40 w-40 md:h-48 md:w-48 mx-auto md:mx-0">
   
      <div className="absolute inset-0 rounded-[2rem] bg-accent/30 blur-3xl scale-90" />

  
      <div className="absolute -inset-6 rounded-full border border-dashed border-ink/15 dark:border-paper/15" />


      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full w-full rounded-[2rem] bg-gradient-to-br from-accent to-accent-light shadow-2xl shadow-accent/30 overflow-hidden grid place-items-center"
      >

        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:18px_18px]" />

        <Code2 size={56} className="relative text-white drop-shadow-sm" strokeWidth={1.75} />

        <span className="absolute bottom-3 right-3 text-[11px] font-mono font-semibold tracking-wide text-white/80">
          RP
        </span>
      </motion.div>

    
      <FloatingChip Icon={FaReact} color="#61DAFB" className="-top-3 -left-4" delay={0} />
      <FloatingChip Icon={FaNodeJs} color="#68A063" className="-top-3 -right-4" delay={0.5} />
      <FloatingChip Icon={SiMongodb} color="#4DB33D" className="-bottom-3 -left-4" delay={1} />
      <FloatingChip Icon={SiTypescript} color="#3178C6" className="-bottom-3 -right-4" delay={1.5} />
    </div>
  );
};

export default AboutVisual;
