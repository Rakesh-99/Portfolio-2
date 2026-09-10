import { motion } from 'motion/react';


const EngineerCodeCard = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`${className}`}
    >

      <div className="rounded-2xl bg-[#0d0d12]/70 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/40 overflow-hidden">
        {/* title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-2 text-white/40 text-xs font-mono"></span>
        </div>

        {/* code lines */}
        <div className="px-5 py-4 font-mono text-[12.5px] leading-relaxed">
          <p>
            <span className="text-white/30">01</span>{'  '}
            <span className="text-[#c792ea]">const</span>{' '}
            <span className="text-white/80">engineer</span>{' '}
            <span className="text-white/50">=</span> <span className="text-white/50">{'{'}</span>
          </p>
          <p>
            <span className="text-white/30">02</span>{'  '}
            <span className="text-white/80">&nbsp;&nbsp;focus:</span>{' '}
            <span className="text-[#89ddff]">"scalable web apps"</span>
            <span className="text-white/50">,</span>
          </p>
          <p>
            <span className="text-white/30">03</span>{'  '}
            <span className="text-white/80">&nbsp;&nbsp;frontend:</span>{' '}
            <span className="text-white/50">[</span>
            <span className="text-[#89ddff]">"React"</span>
            <span className="text-white/50">, </span>
            <span className="text-[#89ddff]">"Next.js"</span>
            <span className="text-white/50">, </span>
            <span className="text-[#89ddff]">"TypeScript"</span>
            <span className="text-white/50">],</span>
          </p>
          <p>
            <span className="text-white/30">04</span>{'  '}
            <span className="text-white/80">&nbsp;&nbsp;backend:</span>{' '}
            <span className="text-white/50">[</span>
            <span className="text-[#89ddff]">"Node.js"</span>
            <span className="text-white/50">, </span>
            <span className="text-[#89ddff]">"Express"</span>
            <span className="text-white/50">, </span>
            <span className="text-[#89ddff]">"PostgreSQL"</span>
            <span className="text-white/50">],</span>
          </p>
          <p>
            <span className="text-white/30">05</span>{'  '}
            <span className="text-white/80">&nbsp;&nbsp;cloud:</span>{' '}
            <span className="text-white/50">[</span>
            <span className="text-[#89ddff]">"AWS"</span>
            <span className="text-white/50">, </span>
            <span className="text-[#89ddff]">"CI/CD"</span>
            <span className="text-white/50">],</span>
          </p>
          <p>
            <span className="text-white/30">06</span>{'  '}
            <span className="text-white/80">&nbsp;&nbsp;ownership:</span>{' '}
            <span className="text-[#89ddff]">"end-to-end"</span>
            <span className="text-white/50">,</span>
          </p>
          <p>
            <span className="text-white/30">07</span>{'  '}
            <span className="text-white/50">{'}'};</span>
          </p>
          <p className="h-2" />
          <p>
            <span className="text-white/30">08</span>{'  '}
            <span className="text-white/80">engineer.</span>
            <span className="text-[#82aaff]">ship</span>
            <span className="text-white/50">();</span>
          </p>
        </div>
      </div>


      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="absolute -top-4 -right-4 rounded-xl bg-paper dark:bg-ink-soft border border-ink/10 dark:border-paper/15 shadow-lg px-4 py-2 text-center"
      >
        <p className="text-lg font-bold font-display text-ink dark:text-paper leading-none">1.6+</p>
        <p className="text-[10px] text-ink/50 dark:text-paper/50 whitespace-nowrap">Years experience</p>
      </motion.div>

   
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="absolute -bottom-4 -left-4 rounded-xl bg-paper dark:bg-ink-soft border border-ink/10 dark:border-paper/15 shadow-lg px-4 py-2 text-center"
      >
        <p className="text-sm font-bold font-display text-ink dark:text-paper leading-none whitespace-nowrap">Full-Stack</p>
        <p className="text-[10px] text-ink/50 dark:text-paper/50 whitespace-nowrap">End-to-end ownership</p>
      </motion.div>
    </motion.div>
  );
};

export default EngineerCodeCard;
