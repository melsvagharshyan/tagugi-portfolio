import { m } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { SWIPER } from '../utils/constants';
import type { Project } from '../utils/types';

interface SwiperCardProps {
  project: Project;
  active: boolean;
  width: number;
  onOpen: () => void;
}

export const SwiperCard = ({ project, active, width, onOpen }: SwiperCardProps) => {
  const { t } = useTranslation();

  return (
    <m.div
      role="button"
      tabIndex={0}
      aria-label={t(`projects.titles.${project.titleKey}`)}
      onTap={onOpen}
      onKeyDown={(event) => event.key === 'Enter' && onOpen()}
      animate={{ scale: active ? 1 : 0.9, opacity: active ? 1 : 0.55 }}
      transition={SWIPER.spring}
      className="aspect-[4/5] shrink-0 overflow-hidden rounded-3xl bg-ivory shadow-[0_20px_50px_-25px_rgba(207,106,121,0.45)]"
      style={{ width }}
    >
      <img
        src={project.cover}
        alt=""
        draggable={false}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </m.div>
  );
};
