import { m } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import { PROJECT_TILE_REVEAL } from '../utils/constants';
import { formatIndex, getMediaKind, isActivationKey } from '../utils/helpers';
import type { Project } from '../utils/types';

interface ProjectTileProps {
  project: Project;
  index: number;
  onOpen: () => void;
}

export const ProjectTile = ({ project, index, onOpen }: ProjectTileProps) => {
  const { t } = useTranslation();
  const title = t(`projects.titles.${project.titleKey}`);

  return (
    <m.li
      initial={PROJECT_TILE_REVEAL.hidden}
      whileInView={PROJECT_TILE_REVEAL.shown}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...PROJECT_TILE_REVEAL.transition, delay: (index % 3) * PROJECT_TILE_REVEAL.stagger }}
    >
      <div
        role="button"
        tabIndex={0}
        aria-label={`${t('projects.open')}: ${title}`}
        onClick={onOpen}
        onKeyDown={(event) => {
          if (!isActivationKey(event.key)) return;
          event.preventDefault();
          onOpen();
        }}
        className="group cursor-pointer rounded-[2rem] outline-none"
      >
        <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-blush/40 shadow-[0_24px_60px_-34px_rgba(207,106,121,0.55)] ring-1 ring-ink/8 transition-[border-radius,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rounded-[3.5rem] group-hover:shadow-[0_44px_80px_-40px_rgba(207,106,121,0.75)] group-focus-visible:ring-2 group-focus-visible:ring-wine">
          <img
            src={project.cover}
            alt=""
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
          <span className="absolute top-4 left-4 rounded-full bg-ivory/90 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.2em] text-ink uppercase">
            {t(`projects.media.${getMediaKind(project)}`, { count: project.media.length })}
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4 px-1">
          <div className="min-w-0">
            <p className="font-serif text-sm text-wine italic">{formatIndex(index)}</p>
            <h3 className="mt-1 font-serif text-2xl text-balance text-ink transition-colors duration-500 group-hover:text-wine md:text-3xl">
              {title}
            </h3>
            <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted uppercase">
              {t(`projects.categories.${project.category}`)}
            </p>
          </div>
          <span
            aria-hidden
            className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45 group-hover:border-wine group-hover:bg-wine group-hover:text-ivory"
          >
            <FiArrowUpRight />
          </span>
        </div>
      </div>
    </m.li>
  );
};
