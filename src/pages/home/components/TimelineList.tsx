import type { TimelineEntry } from '../utils/types';

interface TimelineListProps {
  entries: TimelineEntry[];
}

export const TimelineList = ({ entries }: TimelineListProps) => (
  <ol className="divide-y divide-ink/10">
    {entries.map((entry) => (
      <li key={entry.place} className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 py-4 first:pt-0 last:pb-0 sm:gap-x-6">
        <div className="min-w-0">
          <h4 className="text-lg font-semibold text-ink">{entry.place}</h4>
          <p className="mt-0.5 text-sm tracking-wide text-muted">{entry.roles.join(' · ')}</p>
        </div>
        <span className="font-serif text-sm whitespace-nowrap text-wine italic sm:text-base">{entry.period}</span>
      </li>
    ))}
  </ol>
);
