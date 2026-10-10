import { PROJECT_GRID_STAGGER, PROJECTS } from '../utils/constants';
import { ProjectTile } from './ProjectTile';

interface ProjectGridProps {
  onOpen: (slug: string) => void;
}

export const ProjectGrid = ({ onOpen }: ProjectGridProps) => (
  <ul
    className={`grid grid-cols-1 gap-x-6 gap-y-14 pt-12 pb-20 sm:grid-cols-2 sm:pb-36 md:pt-16 lg:grid-cols-3 lg:gap-x-8 lg:pb-44 ${PROJECT_GRID_STAGGER}`}
  >
    {PROJECTS.map((project, index) => (
      <ProjectTile key={project.slug} project={project} index={index} onOpen={() => onOpen(project.slug)} />
    ))}
  </ul>
);
