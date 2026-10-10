import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import type { ContactItem } from '../utils/types';

interface ContactCardProps {
  item: ContactItem;
}

export const ContactCard = ({ item }: ContactCardProps) => {
  const { t } = useTranslation();
  const isExternal = item.href.startsWith('http');

  return (
    <a
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="group flex items-center justify-between gap-4 border-b border-ivory/15 py-4 sm:py-5 transition-colors duration-300 hover:border-champagne"
    >
      <span className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
        <span className="shrink-0 text-[0.65rem] font-semibold tracking-[0.25em] text-ivory/50 uppercase sm:w-24 sm:text-xs">
          {t(`contact.labels.${item.kind}`)}
        </span>
        <span className="min-w-0 truncate font-serif text-lg text-ivory transition-colors duration-300 group-hover:text-champagne sm:text-2xl">
          {item.value}
        </span>
      </span>
      <FiArrowUpRight className="shrink-0 text-xl text-ivory/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-champagne" />
    </a>
  );
};
