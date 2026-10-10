import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionTitleProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
}

export const SectionTitle = ({ index, eyebrow, title, aside }: SectionTitleProps) => (
  <Reveal className="flex flex-col gap-6 border-b border-ink/10 pb-8 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-wine uppercase">
        <span className="font-serif text-sm tracking-normal italic">{index}</span>
        <span className="h-px w-8 bg-wine/60" />
        {eyebrow}
      </p>
      <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">{title}</h2>
    </div>
    {aside && <div className="max-w-sm text-muted">{aside}</div>}
  </Reveal>
);
