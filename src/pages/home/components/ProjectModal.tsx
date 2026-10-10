import { useTranslation } from 'react-i18next';
import { FiX } from 'react-icons/fi';
import { Button } from '../../../components/Button';
import { getMediaKind } from '../utils/helpers';
import { useBodyScrollLock, useEscapeKey } from '../utils/hooks';
import type { Project } from '../utils/types';
import { MediaItem } from './MediaItem';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { t } = useTranslation();
  const isOpen = project !== null;
  useBodyScrollLock(isOpen);
  useEscapeKey(onClose, isOpen);

  if (!project) return null;

  const title = t(`projects.titles.${project.titleKey}`);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="flex max-h-[94svh] w-full max-w-6xl animate-fade-up flex-col overflow-hidden rounded-t-3xl bg-ivory shadow-2xl sm:rounded-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <span aria-hidden className="mx-auto mt-3 h-1 w-10 shrink-0 rounded-full bg-ink/15 sm:hidden" />
        <header className="flex items-center justify-between gap-4 border-b border-ink/10 px-5 pt-3 pb-4 sm:px-10 sm:py-5">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-wine uppercase">
              {t(`projects.categories.${project.category}`)} · {t(`projects.media.${getMediaKind(project)}`, { count: project.media.length })}
            </p>
            <h3 className="mt-1 font-serif text-2xl tracking-tight text-ink sm:text-4xl">{title}</h3>
          </div>
          <Button variant="outline" size="icon" onClick={onClose} aria-label={t('projects.close')}>
            <FiX />
          </Button>
        </header>

        <div className="overscroll-contain overflow-y-auto p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-10">
          <div className={project.media.length > 1 ? 'columns-1 gap-5 sm:columns-2' : 'mx-auto max-w-3xl'}>
            {project.media.map((media, index) => (
              <MediaItem key={media.src} media={media} alt={`${title} — ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
