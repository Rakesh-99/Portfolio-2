import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/ui/SectionHeading';

const Projects = () => {
  return (
    <div className="container">
    <SectionHeading
        eyebrow="Portfolio"
        title="Projects that I have recently worked on"
        subtitle="A few projects that show how I approach building products end-to-end — from data modeling to polished UI."
      />
      <ProjectCard />
    </div>
  );
};

export default Projects;
