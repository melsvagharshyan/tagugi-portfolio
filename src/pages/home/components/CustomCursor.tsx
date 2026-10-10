import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import { useCustomCursor } from '../utils/hooks';
import type { CursorVariant } from '../utils/types';

const RING_STYLES: Record<CursorVariant, string> = {
  default: 'h-9 w-9 border-rose/70 bg-transparent',
  link: 'h-14 w-14 border-rose bg-rose/15',
  view: 'h-24 w-24 border-ink bg-ink',
  hidden: 'h-9 w-9 border-transparent bg-transparent opacity-0',
};

export const CustomCursor = () => {
  const { t } = useTranslation();
  const { dotRef, ringRef, variant, pressed, enabled } = useCustomCursor();

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <div ref={ringRef} className="absolute top-0 left-0 will-change-transform">
        <div
          className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-[width,height,background-color,border-color,opacity,scale] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            RING_STYLES[variant]
          } ${pressed ? 'scale-75' : 'scale-100'}`}
        >
          <span
            className={`flex items-center gap-1 text-xs font-semibold tracking-[0.2em] text-ivory uppercase transition-opacity duration-300 ${
              variant === 'view' ? 'opacity-100 delay-150' : 'opacity-0'
            }`}
          >
            {t('projects.view')}
            <FiArrowUpRight />
          </span>
        </div>
      </div>

      <div ref={dotRef} className="absolute top-0 left-0 will-change-transform">
        <div
          className={`h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose transition-[scale,opacity] duration-300 ${
            variant === 'default' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        />
      </div>
    </div>
  );
};
