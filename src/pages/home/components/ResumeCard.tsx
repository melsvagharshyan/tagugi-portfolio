import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { Reveal } from './Reveal';

interface ResumeCardProps {
  icon: IconType;
  label: string;
  meta?: string;
  delay?: number;
  className?: string;
  children: ReactNode;
}

export const ResumeCard = ({ icon: Icon, label, meta, delay, className = '', children }: ResumeCardProps) => (
  <Reveal
    delay={delay}
    className={`rounded-[2rem] bg-ivory p-6 shadow-[0_30px_70px_-50px_rgba(207,106,121,0.6)] ring-1 ring-ink/5 sm:p-8 lg:p-10 ${className}`}
  >
    <header className="mb-8 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush text-2xl text-wine">
          <Icon />
        </span>
        <h3 className="font-serif text-3xl tracking-tight text-ink italic">{label}</h3>
      </div>
      {meta && <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">{meta}</span>}
    </header>
    {children}
  </Reveal>
);
