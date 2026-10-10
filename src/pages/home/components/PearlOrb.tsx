import { m } from 'motion/react';
import { ORB_PEARLS } from '../utils/constants';

const PEARL_GRADIENT = 'radial-gradient(circle at 35% 30%, #ffffff 0%, #fff1f4 30%, #f2b8c3 70%, #cf6a79 100%)';

const float = (delay: number, distance: number) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration: 6, delay, repeat: Infinity, ease: 'easeInOut' as const },
});

interface PearlOrbProps {
  className?: string;
  ringClassName?: string;
}

/** Lightweight CSS stand-in for the 3D liquid orb, used where WebGL scenes are skipped. */
export const PearlOrb = ({ className = '', ringClassName = 'border-wine/45' }: PearlOrbProps) => (
  <div aria-hidden className={`pointer-events-none relative aspect-square ${className}`}>
    <m.div className="absolute inset-0" {...float(0, 12)}>
      {[-24, 32].map((tilt, ring) => (
        <m.div
          key={tilt}
          className="absolute inset-[4%]"
          initial={{ rotate: tilt }}
          animate={{ rotate: tilt + (ring ? -360 : 360) }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          <div className={`h-full w-full scale-y-[0.32] rounded-full border ${ringClassName}`} />
        </m.div>
      ))}
      <div
        className="absolute inset-[20%] rounded-full shadow-[0_30px_60px_-20px_rgba(207,106,121,0.55)]"
        style={{ background: PEARL_GRADIENT }}
      />
    </m.div>

    {ORB_PEARLS.map(({ top, left, size, delay }) => (
      <m.span
        key={`${top}-${left}`}
        className="absolute aspect-square rounded-full shadow-[0_8px_16px_-8px_rgba(207,106,121,0.6)]"
        style={{ top, left, width: size, background: PEARL_GRADIENT }}
        {...float(delay, 8)}
      />
    ))}
  </div>
);
