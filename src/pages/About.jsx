import GithubCalender from '../components/GithubCalender';
import SkillsAndTools from '../components/SkillsAndTools';
import { skillCategories, toolsIUse } from '../data/data';
import TimelineEducation from '../components/TimelineEducation';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import AboutVisual from '../components/ui/AboutVisual';
import { MapPin, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="container flex flex-col gap-28">
      {/* Intro */}
      <div className="grid md:grid-cols-[auto_1fr] gap-20 items-center">
        <Reveal direction="right" className="mx-auto md:mx-0">
          <AboutVisual />
        </Reveal>
        <Reveal direction="left" className="flex flex-col gap-3 text-center md:text-left">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent mx-auto md:mx-0">
            <Sparkles size={12} /> About me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Rakesh Kumar Parida</h2>
          <p className="text-ink/60 dark:text-paper/60 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Full Stack Developer with 1.6+ years of experience building web apps.
            I have worked on event-driven services, transaction processing systems, real-time analytics pipelines, and scalable REST APIs, with a strong focus on data consistency, performance tuning, and reliability.

            Comfortable working across the full SDLC from design and development to testing, deployment, and production monitoring. Passionate about backend engineering, system internals, and writing maintainable, production-ready code.Working with various databases, including PostgreSQL, MySQL, and MongoDB.
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm text-ink/50 dark:text-paper/50 mx-auto md:mx-0">
            <MapPin size={14} color='red'/> Based in Bhubaneswar,India
          </span>
        </Reveal>
      </div>

      {/* Experience */}
      <div>
        <SectionHeading eyebrow="Career" title="Experience" align="left" />
        <ExperienceTimeline />
      </div>

      {/* Education */}
      <div>
        <SectionHeading eyebrow="Background" title="Education" align="left" />
        <TimelineEducation />
      </div>

      {/* Skills */}
      <div>
        <SectionHeading
          eyebrow="Technologies"
          title="Skills"
          subtitle="Technologies I use to design, build, and ship full-stack products."
          align="left"
        />
        <SkillsAndTools categories={skillCategories} />
      </div>

      {/* Tools */}
      <div>
        <SectionHeading eyebrow="Workflow" title="Tools I use" align="left" />
        <SkillsAndTools skillsAndToolsData={toolsIUse} />
      </div>

      {/* GitHub activity */}
      <div>
        <SectionHeading eyebrow="Activity" title="Days I code" align="left" />
        <GithubCalender />
      </div>
    </div>
  );
};

export default About;
