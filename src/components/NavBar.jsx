import { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { changeTheme } from '../redux/slice/ThemeSlice';

const navItems = [
  { navText: 'Home', to: 'home', isScroll: true },
  { navText: 'About', to: 'about', isScroll: true },
  { navText: 'Projects', to: 'projects', isScroll: true },
  { navText: 'Blog', to: 'https://blog-draftcode.vercel.app/', isScroll: false },
  { navText: 'Contact', to: 'contact', isScroll: true },
];

const NavBar = () => {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useSelector((state) => state.themeToggle);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-paper/70 dark:bg-ink/70 border-b border-ink/10 dark:border-paper/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-18 py-4">
        <span
          onClick={() => scroll.scrollToTop()}
          className="font-display font-bold text-lg cursor-pointer tracking-tight"
        >
          Rakesh<span className="text-accent">.</span>
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) =>
            item.isScroll ? (
              <ScrollLink
                key={i}
                to={item.to}
                smooth
                duration={500}
                offset={-80}
                spy
                className="relative text-sm font-medium cursor-pointer text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper transition-colors"
                activeClass="!text-accent"
              >
                {item.navText}
              </ScrollLink>
            ) : (
              <a
                key={i}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper transition-colors"
              >
                {item.navText}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(changeTheme())}
            aria-label="Toggle theme"
            className="relative h-9 w-9 grid place-items-center rounded-full border border-ink/10 dark:border-paper/15 hover:bg-ink/5 dark:hover:bg-paper/10 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid place-items-center"
              >
                {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-ink/10 dark:border-paper/15"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-ink/10 dark:border-paper/10 bg-paper/95 dark:bg-ink/95 backdrop-blur-xl"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navItems.map((item, i) =>
                item.isScroll ? (
                  <ScrollLink
                    key={i}
                    to={item.to}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium cursor-pointer"
                  >
                    {item.navText}
                  </ScrollLink>
                ) : (
                  <a
                    key={i}
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium"
                  >
                    {item.navText}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
