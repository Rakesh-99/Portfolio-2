import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ThemeProvider = ({ children }) => {
  const { theme } = useSelector((state) => state.themeToggle);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-paper dark:bg-[#1d1d1f] text-ink dark:text-paper transition-colors duration-500 selection:bg-accent selection:text-white">
      {children}
    </div>
  );
};

export default ThemeProvider;
