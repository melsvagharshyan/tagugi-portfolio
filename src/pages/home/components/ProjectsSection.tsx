import { useTranslation } from 'react-i18next';
import { ProjectCarousel } from './ProjectCarousel';
import { RichText } from './RichText';
import { SectionTitle } from './SectionTitle';

interface ProjectsSectionProps {
  onOpen: (slug: string) => void;
}

export const ProjectsSection = ({ onOpen }: ProjectsSectionProps) => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="scroll-mt-16 pt-20 sm:pt-24 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          index="01"
          eyebrow={t('projects.eyebrow')}
          title={<RichText i18nKey="projects.title" />}
          aside={t('hero.hint')}
        />
      </div>

      <ProjectCarousel onOpen={onOpen} />
    </section>
  );
};
