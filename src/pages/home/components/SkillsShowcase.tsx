import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { SKILLS } from '../utils/constants';
import { useDragSpin } from '../utils/hooks';
import { TagList } from './TagList';

const SkillsGlobeScene = lazy(() =>
  import('./three/SkillsGlobeScene').then((module) => ({ default: module.SkillsGlobeScene })),
);

export const SkillsShowcase = () => {
  const { t } = useTranslation();
  const { stateRef, handlers } = useDragSpin();

  return (
    <div>
      <div
        {...handlers}
        className="relative h-[22rem] cursor-grab touch-pan-y active:cursor-grabbing sm:h-[28rem]"
      >
        <Suspense fallback={<TagList items={SKILLS} />}>
          <SkillsGlobeScene skills={SKILLS} spinRef={stateRef} />
        </Suspense>
      </div>
      <p className="mt-2 text-center text-xs font-semibold tracking-[0.25em] text-muted uppercase">
        {t('about.skillsHint')}
      </p>
    </div>
  );
};
