import { lazy, Suspense } from 'react';
import { useTimeline } from '../utils/hooks';
import type { TimelineEntry } from '../utils/types';
import { TimelineItem } from './TimelineItem';

const PearlThreadScene = lazy(() =>
  import('./three/PearlThreadScene').then((module) => ({ default: module.PearlThreadScene })),
);

interface TimelineListProps {
  entries: TimelineEntry[];
}

export const TimelineList = ({ entries }: TimelineListProps) => {
  const { listRef, progressRef, layout, reachedCount, visible } = useTimeline<HTMLDivElement>();

  return (
    <div ref={listRef} className="relative pl-12 sm:pl-16">
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16">
        <Suspense fallback={null}>
          <PearlThreadScene layout={layout} progressRef={progressRef} active={visible} />
        </Suspense>
      </div>

      <ol>
        {entries.map((entry, index) => (
          <TimelineItem key={entry.place} entry={entry} index={index} reached={index < reachedCount} />
        ))}
      </ol>
    </div>
  );
};
