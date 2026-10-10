import type { Skill } from '../utils/types';

interface SkillChipProps {
  skill: Skill;
}

export const SkillChip = ({ skill: { name, icon: Icon } }: SkillChipProps) => (
  <li className="group flex items-center gap-3 rounded-2xl border border-ink/8 bg-sand py-2.5 pr-5 pl-2.5 transition-colors duration-300 hover:border-rose hover:bg-blush/60">
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blush text-xl text-wine transition-colors duration-300 group-hover:bg-wine group-hover:text-ivory">
      <Icon />
    </span>
    <span className="text-sm font-medium text-ink">{name}</span>
  </li>
);
