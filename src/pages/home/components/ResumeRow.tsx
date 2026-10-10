import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface ResumeRowProps {
  label: string;
  children: ReactNode;
}

export const ResumeRow = ({ label, children }: ResumeRowProps) => (
  <Reveal className="grid gap-4 border-t border-ink/10 py-8 sm:gap-6 sm:py-10 md:grid-cols-[260px_1fr] md:gap-12">
    <h3 className="font-serif text-2xl tracking-tight text-ink italic">{label}</h3>
    <div>{children}</div>
  </Reveal>
);
