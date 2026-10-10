import { useTranslation } from 'react-i18next';
import { FaBehance, FaLinkedinIn } from 'react-icons/fa';
import { Button } from '../../../../components/Button';
import { NAV_LINKS, OWNER } from '../../utils/constants';
import { formatIndex } from '../../utils/helpers';
import { useBodyScrollLock, useEscapeKey } from '../../utils/hooks';
import { LanguageSwitcher } from './LanguageSwitcher';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  const { t } = useTranslation();
  useBodyScrollLock(open);
  useEscapeKey(onClose, open);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-30 flex flex-col bg-ivory px-6 pt-28 pb-10 transition-[clip-path] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
        open ? '[clip-path:circle(150%_at_100%_0)]' : 'pointer-events-none [clip-path:circle(0%_at_100%_0)]'
      }`}
    >
      <nav className="flex flex-1 flex-col justify-center gap-2">
        {NAV_LINKS.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            style={{ transitionDelay: open ? `${200 + index * 90}ms` : '0ms' }}
            className={`flex items-baseline gap-4 border-b border-ink/10 py-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <span className="font-serif text-sm text-wine italic">{formatIndex(index)}</span>
            <span className="font-serif text-[2.6rem] leading-tight tracking-tight sm:text-5xl text-ink">{t(`nav.${link.id}`)}</span>
          </a>
        ))}
      </nav>

      <div className="flex items-end justify-between gap-4">
        <div className="space-y-4">
          <LanguageSwitcher tabIndex={open ? 0 : -1} />
          <a href={`mailto:${OWNER.email}`} tabIndex={open ? 0 : -1} className="block text-sm text-ink">
            {OWNER.email}
          </a>
        </div>
        <div className="flex gap-2">
          <Button href={OWNER.behance} target="_blank" rel="noreferrer" variant="outline" size="icon" aria-label="Behance" tabIndex={open ? 0 : -1}>
            <FaBehance />
          </Button>
          <Button href={OWNER.linkedin} target="_blank" rel="noreferrer" variant="outline" size="icon" aria-label="LinkedIn" tabIndex={open ? 0 : -1}>
            <FaLinkedinIn />
          </Button>
        </div>
      </div>
    </div>
  );
};
