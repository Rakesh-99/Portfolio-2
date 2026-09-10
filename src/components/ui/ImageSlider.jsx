import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';

const AUTO_SLIDE_MS = 3500;


const ImageSlider = ({ images = [], alt = 'Project preview', className = '' }) => {
  const slides = images.filter(Boolean);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback(
    (nextIndex, dir) => {
      if (slides.length === 0) return;
      setDirection(dir);
      setIndex((current) => {
        const total = slides.length;
        return (nextIndex + total) % total;
      });
    },
    [slides.length]
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  // basic touch-swipe support for mobile
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsHovering(true);
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev();
    }
    touchStartX.current = null;
    setIsHovering(false);
  };

  // autoplay
  useEffect(() => {
    if (slides.length <= 1 || isHovering) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % slides.length);
    }, AUTO_SLIDE_MS);
    return () => clearInterval(timerRef.current);
  }, [slides.length, isHovering]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div
      className={`group/slider relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-ink/5 dark:bg-paper/5 border border-ink/10 dark:border-paper/10 ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.length === 0 ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-ink/5 to-accent/10 dark:from-paper/5 dark:to-accent/10">
          <ImageOff size={26} className="text-ink/30 dark:text-paper/30" />
          <p className="text-[11px] font-mono text-ink/40 dark:text-paper/40">
             Project images
          </p>
        </div>
      ) : (
        <>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img
              key={index}
              src={slides[index]}
              alt={`${alt} ${index + 1}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
          </AnimatePresence>

          {slides.length > 1 && (
            <>
              {/* Left / right controls */}
              <button
                type="button"
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 grid place-items-center rounded-full bg-ink/50 dark:bg-paper/30 text-white backdrop-blur-sm opacity-70 md:opacity-0 md:group-hover/slider:opacity-100 hover:!opacity-100 transition-opacity focus-visible:opacity-100"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 grid place-items-center rounded-full bg-ink/50 dark:bg-paper/30 text-white backdrop-blur-sm opacity-70 md:opacity-0 md:group-hover/slider:opacity-100 hover:!opacity-100 transition-opacity focus-visible:opacity-100"
              >
                <ChevronRight size={16} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to image ${i + 1}`}
                    onClick={() => goTo(i, i > index ? 1 : -1)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ImageSlider;
