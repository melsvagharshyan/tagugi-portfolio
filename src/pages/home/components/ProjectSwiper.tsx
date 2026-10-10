import { m } from 'motion/react';
import { PROJECTS, SWIPER } from '../utils/constants';
import { useSwipeCarousel } from '../utils/hooks';
import { CarouselInfo } from './CarouselInfo';
import { SwiperCard } from './SwiperCard';

interface ProjectSwiperProps {
  onOpen: (slug: string) => void;
}

export const ProjectSwiper = ({ onOpen }: ProjectSwiperProps) => {
  const { viewportRef, x, index, cardWidth, goTo, handleDragEnd, minX } = useSwipeCarousel<HTMLDivElement>(
    PROJECTS.length,
  );
  const activeProject = PROJECTS[index];

  return (
    <div data-cursor="view" className="overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24">
      <div ref={viewportRef} className="mx-5 sm:mx-8 lg:mx-auto lg:max-w-7xl lg:px-8">
        <m.div
          drag="x"
          dragConstraints={{ left: minX, right: 0 }}
          dragElastic={0.15}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          className="flex cursor-grab touch-pan-y active:cursor-grabbing"
          style={{ x, gap: SWIPER.gap }}
        >
          {PROJECTS.map((project, item) => (
            <SwiperCard
              key={project.slug}
              project={project}
              active={item === index}
              width={cardWidth}
              onOpen={() => (item === index ? onOpen(project.slug) : goTo(item))}
            />
          ))}
        </m.div>
      </div>

      <div className="mt-8 px-5 sm:px-8 md:mt-12">
        <CarouselInfo
          project={activeProject}
          index={index}
          total={PROJECTS.length}
          onOpen={() => onOpen(activeProject.slug)}
          onStep={goTo}
        />
      </div>
    </div>
  );
};
