import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { OWNER } from '../utils/constants';

const PortraitScene = lazy(() =>
  import('./three/PortraitScene').then((module) => ({ default: module.PortraitScene })),
);

export const ProfilePhoto = () => {
  const { t } = useTranslation();

  return (
    <figure className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border border-wine/40" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-sand">
        <img src={OWNER.photo} alt={t('owner.fullName')} className="h-full w-full object-cover" />
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <PortraitScene url={OWNER.photo} />
          </Suspense>
        </div>
      </div>
      <figcaption className="absolute -bottom-5 left-6 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold tracking-[0.2em] text-ivory uppercase">
        {t('common.location')}
      </figcaption>
    </figure>
  );
};
