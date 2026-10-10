import { useTranslation } from 'react-i18next';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { Button } from '../../../components/Button';
import { formatIndex, getMediaKind } from '../utils/helpers';
import type { Project } from '../utils/types';

interface CarouselInfoProps {
  project: Project;
  index: number;
  total: number;
  onOpen: () => void;
  onStep: (index: number) => void;
}

export const CarouselInfo = ({ project, index, total, onOpen, onStep }: CarouselInfoProps) => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div key={project.slug} className="animate-fade-up">
          <p className="font-serif text-sm text-wine italic">
            {formatIndex(index)} <span className="text-muted">/ {formatIndex(total - 1)}</span>
          </p>
          <h3 className="mt-1 font-serif text-3xl tracking-tight text-ink sm:mt-2 sm:text-5xl">
            {t(`projects.titles.${project.titleKey}`)}
          </h3>
          <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted uppercase">
            {t(`projects.categories.${project.category}`)} ·{' '}
            {t(`projects.media.${getMediaKind(project)}`, { count: project.media.length })}
          </p>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            aria-label={t('projects.previous')}
            disabled={index === 0}
            onClick={() => onStep(index - 1)}
          >
            <FiArrowLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label={t('projects.next')}
            disabled={index === total - 1}
            onClick={() => onStep(index + 1)}
          >
            <FiArrowRight />
          </Button>
          <Button size="md" onClick={onOpen} className="ml-1 flex-1 sm:flex-none">
            {t('projects.open')}
            <FiArrowUpRight />
          </Button>
        </div>
      </div>

      <div className="mt-6 flex gap-1.5 sm:mt-8">
        {Array.from({ length: total }, (_, item) => (
          <span
            key={item}
            className={`h-0.5 flex-1 rounded-full transition-colors duration-500 ${
              item <= index ? 'bg-wine' : 'bg-ink/10'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
