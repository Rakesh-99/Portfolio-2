import Githubcalender from 'react-github-calendar';
import { useSelector } from 'react-redux';
import { GitCommitHorizontal } from 'lucide-react';
import Reveal from './ui/Reveal';

const GithubCalender = () => {
  const { theme } = useSelector((state) => state.themeToggle);

  return (
    <Reveal className="rounded-2xl border border-ink/10 dark:border-paper/10 bg-paper/60 dark:bg-ink-soft/60 p-6 md:p-8 overflow-x-auto">
      <div className="flex items-center gap-2 mb-6">
        <GitCommitHorizontal size={18} className="text-accent" />
        <h3 className="font-display font-bold text-lg">Contribution activity</h3>
      </div>
      <div className="min-w-[600px]">
        <Githubcalender
          username="Rakesh-99"
          colorScheme={theme === 'dark' ? 'dark' : 'light'}
          blockSize={12}
          blockMargin={4}
          fontSize={12}
        />
      </div>
    </Reveal>
  );
};

export default GithubCalender;
