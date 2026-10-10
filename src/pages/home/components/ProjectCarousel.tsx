import { lazy, Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CAROUSEL, PROJECTS } from '../utils/constants';
import { useScrollCarousel } from '../utils/hooks';
import { CarouselInfo } from './CarouselInfo';

const ProjectCarouselScene = lazy(() =>
  import('./three/ProjectCarouselScene').then((module) => ({ default: module.ProjectCarouselScene })),
);

interface ProjectCarouselProps {
  onOpen: (slug: string) => void;
}

export const ProjectCarousel = ({ onOpen }: ProjectCarouselProps) => {
  const { t } = useTranslation();
  const { containerRef, progressRef, activeIndex, scrollToIndex } = useScrollCarousel<HTMLDivElement>(PROJECTS.length);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const activeProject = PROJECTS[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `calc(${(PROJECTS.length - 1) * CAROUSEL.scrollPerCardSvh}svh + 100svh)` }}
    >
      <div
        data-cursor={hoveredSlug ? 'view' : undefined}
        className="sticky top-0 h-svh overflow-hidden bg-gradient-to-b from-ivory via-sand/50 to-ivory"
      >
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <ProjectCarouselScene
              projects={PROJECTS}
              progressRef={progressRef}
              onSelect={onOpen}
              onHoverChange={setHoveredSlug}
            />
          </Suspense>
        </div>

        <p className="pointer-events-none absolute top-24 right-5 text-[0.65rem] sm:text-xs font-semibold tracking-[0.25em] text-muted uppercase sm:right-8">
          {t('projects.scrollHint')}
        </p>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-8 sm:pb-10">
          <CarouselInfo
            project={activeProject}
            index={activeIndex}
            total={PROJECTS.length}
            onOpen={() => onOpen(activeProject.slug)}
            onStep={scrollToIndex}
          />
        </div>
      </div>
    </div>
  );
};
