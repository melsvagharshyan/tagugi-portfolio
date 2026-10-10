import { useTranslation } from 'react-i18next';
import { NAV_LINKS } from '../../utils/constants';
import { useSlidingIndicator } from '../../utils/hooks';
import { RollingText } from './RollingText';

interface NavPillProps {
  activeId: string | null;
  scrolled: boolean;
}

export const NavPill = ({ activeId, scrolled }: NavPillProps) => {
  const { t, i18n } = useTranslation();
  const activeHref = activeId ? `#${activeId}` : null;
  const { register, indicator, currentKey, setHoveredKey } = useSlidingIndicator<HTMLAnchorElement>(
    activeHref,
    i18n.resolvedLanguage,
  );

  return (
    <div
      onMouseLeave={() => setHoveredKey(null)}
      className={`relative hidden items-center rounded-full border p-1.5 transition-colors duration-500 md:flex ${
        scrolled
          ? 'border-blush bg-ivory/95 shadow-[0_10px_40px_-20px_rgba(51,51,51,0.3)]'
          : 'border-ink/5 bg-ivory/80'
      }`}
    >
      <span
        aria-hidden
        className={`absolute top-1.5 bottom-1.5 rounded-full bg-ink transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          indicator.visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ left: indicator.left, width: indicator.width }}
      />
      {NAV_LINKS.map((link) => {
        const highlighted = link.href === currentKey;
        return (
          <a
            key={link.href}
            ref={register(link.href)}
            href={link.href}
            onMouseEnter={() => setHoveredKey(link.href)}
            className={`group relative z-10 rounded-full px-5 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${
              highlighted ? 'text-ivory' : 'text-ink/75'
            }`}
          >
            <RollingText text={t(`nav.${link.id}`)} />
          </a>
        );
      })}
    </div>
  );
};
