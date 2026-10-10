import { useTranslation } from 'react-i18next';
import { MONOGRAM_INITIALS } from '../../utils/constants';

const RING_RADIUS = 38;
const RING_PATH = `M 50,50 m -${RING_RADIUS},0 a ${RING_RADIUS},${RING_RADIUS} 0 1,1 ${RING_RADIUS * 2},0 a ${RING_RADIUS},${RING_RADIUS} 0 1,1 -${RING_RADIUS * 2},0`;
const RING_LENGTH = Math.floor(2 * Math.PI * RING_RADIUS) - 2;

export const Monogram = () => {
  const { t } = useTranslation();

  return (
    <a
      href="#top"
      aria-label={t('common.backToTop')}
      className="group relative flex h-14 w-14 shrink-0 items-center justify-center"
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full animate-spin-slow group-hover:[animation-duration:6s]"
      >
        <defs>
          <path id="monogram-ring" d={RING_PATH} />
        </defs>
        <text className="fill-ink/70 font-sans text-[8.5px] font-semibold uppercase">
          <textPath href="#monogram-ring" textLength={RING_LENGTH} lengthAdjust="spacing">
            {t('header.ringText')}
          </textPath>
        </text>
      </svg>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-serif text-xs text-ivory italic transition-colors duration-500 group-hover:bg-wine">
        {MONOGRAM_INITIALS}
      </span>
    </a>
  );
};
