import { formatIndex } from '../utils/helpers';
import type { TimelineEntry } from '../utils/types';

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
}

export const TimelineItem = ({ entry, index }: TimelineItemProps) => (
  <li className="group relative border-b border-ink/10 py-6 first:pt-0 last:border-b-0 last:pb-0">
    <span className="font-serif text-xs text-champagne italic">{formatIndex(index)}</span>

    <div className="mt-1 flex items-baseline justify-between gap-4 sm:gap-8">
      <h4
        className="min-w-0 font-serif text-2xl leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-wine sm:text-[1.75rem]"
      >
        {entry.place}
      </h4>
      <span className="font-serif text-base whitespace-nowrap text-wine italic sm:text-xl">{entry.period}</span>
    </div>

    <ul className="mt-3 flex flex-wrap gap-1.5">
      {entry.roles.map((role) => (
        <li
          key={role}
          className="rounded-full border border-ink/10 bg-ivory/70 px-3 py-1 text-xs font-medium tracking-wide text-muted transition-colors duration-300 group-hover:border-wine/30 group-hover:text-wine"
        >
          {role}
        </li>
      ))}
    </ul>

    <span className="pointer-events-none absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-gradient-to-r from-wine via-rose to-transparent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
  </li>
);
