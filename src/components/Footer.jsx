import { footerLinks } from '../data/data';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <footer className="border-t border-ink/10 dark:border-paper/10 mt-24">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-ink/60 dark:text-paper/60 text-center md:text-left">
          Designed &amp; built by{' '}
          <Link
            to="https://github.com/Rakesh-99"
            target="_blank"
            className="font-medium text-ink dark:text-paper hover:text-accent transition-colors"
          >
            Rakesh Kumar Parida
          </Link>
        </p>

        <div className="flex items-center gap-3">
          {footerLinks.map((val, i) => {
            const { link, icon: Icon } = val;
            return (
              <motion.a
                whileHover={{ y: -3 }}
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 grid place-items-center rounded-full border border-ink/10 dark:border-paper/15 text-ink/70 dark:text-paper/70 hover:text-accent hover:border-accent/50 transition-colors"
              >
                <Icon size={16} />
              </motion.a>
            );
          })}
        </div>

        <p className="text-xs text-ink/40 dark:text-paper/40 font-mono">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
