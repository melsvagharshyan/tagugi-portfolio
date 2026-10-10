import type { TimelineEntry } from '../utils/types';
import { TimelineItem } from './TimelineItem';

interface TimelineListProps {
  entries: TimelineEntry[];
}

export const TimelineList = ({ entries }: TimelineListProps) => (
  <ol>
    {entries.map((entry, index) => (
      <TimelineItem key={entry.place} entry={entry} index={index} />
    ))}
  </ol>
);
