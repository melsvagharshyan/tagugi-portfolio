import { useTranslation } from 'react-i18next';
import { SKILL_GROUPS } from '../utils/constants';
import { formatIndex } from '../utils/helpers';
import { SkillChip } from './SkillChip';

export const SkillBoard = () => {
  const { t } = useTranslation();

  return (
    <div className="divide-y divide-ink/10">
      {SKILL_GROUPS.map((group, index) => (
        <section
          key={group.id}
          className="grid gap-4 py-6 first:pt-0 last:pb-0 md:grid-cols-[240px_1fr] md:gap-8"
        >
          <h4 className="flex items-baseline gap-3 pt-2">
            <span className="font-serif text-sm text-wine italic">{formatIndex(index)}</span>
            <span className="font-serif text-xl text-ink">{t(`about.skillGroups.${group.id}`)}</span>
          </h4>
          <ul className="flex flex-wrap gap-2.5">
            {group.skills.map((skill) => (
              <SkillChip key={skill.name} skill={skill} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};
