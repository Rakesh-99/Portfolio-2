import Reveal from './Reveal';

const SectionHeading = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <Reveal className={`flex flex-col gap-3 mb-14 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-sm md:text-base text-ink/60 dark:text-paper/60 leading-relaxed">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
