import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiMiniBars2, HiMiniXMark } from 'react-icons/hi2';
import { Button } from '../../../../components/Button';
import { OWNER, SECTION_IDS } from '../../utils/constants';
import { useActiveSection, useHeaderScroll, useToggle } from '../../utils/hooks';
import { RichText } from '../RichText';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { Monogram } from './Monogram';
import { NavPill } from './NavPill';

export const Header = () => {
  const { t } = useTranslation();
  const menu = useToggle();
  const activeId = useActiveSection(SECTION_IDS);
  const { progressRef, scrolled, hidden } = useHeaderScroll(menu.on);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-0.5">
        <div ref={progressRef} className="h-full origin-left scale-x-0 bg-gradient-to-r from-wine via-rose to-champagne" />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ivory via-ivory/85 to-transparent transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="relative mx-auto grid h-22 max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-5 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center gap-3">
            <Monogram />
            <div className="hidden leading-tight sm:block">
              <p className="font-serif text-lg text-ink">
                <RichText i18nKey="owner.headerName" />
              </p>
              <p className="text-[0.65rem] font-semibold tracking-[0.25em] text-muted uppercase">{t('header.portfolio')}</p>
            </div>
          </div>

          <NavPill activeId={activeId} scrolled={scrolled} />

          <div className="flex items-center justify-end gap-5">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <div className="hidden lg:block">
              <Button href={`mailto:${OWNER.email}`} size="sm">
                {t('header.letsTalk')}
                <FiArrowUpRight className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
              </Button>
            </div>
            <div className="md:hidden">
              <Button
                variant={menu.on ? 'primary' : 'glass'}
                size="icon"
                onClick={menu.toggle}
                aria-label={menu.on ? t('header.closeMenu') : t('header.openMenu')}
                aria-expanded={menu.on}
                className="text-xl"
              >
                {menu.on ? <HiMiniXMark /> : <HiMiniBars2 />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={menu.on} onClose={menu.close} />
    </>
  );
};
