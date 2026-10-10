import type { TimelineEntry } from '../utils/types';

interface TimelineItemProps {
  entry: TimelineEntry;
}

export const TimelineItem = ({ entry }: TimelineItemProps) => (
  <li className="group relative pb-8 pl-9 last:pb-0">
    <span
      aria-hidden
      className="absolute top-3 bottom-0 left-[7px] w-px bg-gradient-to-b from-rose to-rose/10 group-last:hidden"
    />
    <span
      aria-hidden
      className="absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffffff,#ffb6c1_55%,#cf6a79)] ring-4 ring-blush transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-125"
    />

    <span className="inline-block rounded-full bg-blush px-3 py-1 text-[0.7rem] font-semibold tracking-[0.18em] text-wine uppercase">
      {entry.period}
    </span>
    <h4 className="mt-3 font-serif text-2xl leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-wine sm:text-[1.75rem]">
      {entry.place}
    </h4>
    <p className="mt-1.5 text-sm text-muted">{entry.roles.join(' · ')}</p>
  </li>
);
