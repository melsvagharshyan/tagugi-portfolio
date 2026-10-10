import { useTranslation } from 'react-i18next';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { Button } from '../../../components/Button';
import { PearlOrb } from './PearlOrb';
import { RichText } from './RichText';

export const Hero = () => {
  const { t } = useTranslation();
  const disciplines = t('hero.disciplines', { returnObjects: true });

  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden bg-sand">
      <div className="absolute inset-x-0 bottom-[3svh] flex justify-center landscape:hidden xl:landscape:inset-y-0 xl:landscape:right-[5%] xl:landscape:left-auto xl:landscape:flex xl:landscape:items-center">
        <PearlOrb className="w-[min(72vw,22rem)] xl:w-[min(36vw,32rem)]" />
      </div>

      <div className="pointer-events-none relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pt-28 pb-[36svh] sm:px-8 sm:pt-32 sm:pb-[38svh] landscape:justify-center landscape:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.2em] text-wine uppercase sm:text-xs sm:tracking-[0.3em]">
            <span className="h-px w-6 shrink-0 bg-wine sm:w-10" />
            {t('hero.eyebrow')}
          </p>

          <h1 className="mt-6 font-serif text-[2.15rem] leading-[1.1] sm:mt-7 sm:text-5xl sm:leading-[1.08] tracking-tight text-ink lg:text-7xl">
            <RichText i18nKey="hero.title" />
          </h1>

          <ul className="mt-6 flex flex-wrap gap-2 text-sm font-medium text-muted sm:mt-8 sm:gap-x-5 sm:gap-y-2">
            {disciplines.map((item, index) => (
              <li
                key={item}
                className="flex items-center gap-5 rounded-full border border-ink/10 bg-ivory/60 px-3 py-1 sm:border-0 sm:bg-transparent sm:p-0"
              >
                {item}
                {index < disciplines.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-rose sm:block" />}
              </li>
            ))}
          </ul>

          <div className="pointer-events-auto mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <Button href="#projects" size="lg" icon={<FiArrowDownRight />} className="w-full sm:w-auto">
              {t('hero.viewWork')}
            </Button>
            <Button href="#about" variant="glass" size="lg" className="w-full sm:w-auto">
              {t('hero.aboutMe')}
              <FiArrowUpRight />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto hidden w-full max-w-7xl items-end justify-between px-8 pb-8 text-xs font-semibold tracking-[0.2em] text-muted uppercase md:flex">
        <span>{t('common.location')}</span>
        <a href="#projects" className="flex flex-col items-center gap-3 hover:text-wine">
          {t('hero.hint')}
          <span className="flex h-9 w-5 justify-center rounded-full border border-ink/30 pt-1.5">
            <span className="h-1.5 w-1 animate-scroll-dot rounded-full bg-wine" />
          </span>
        </a>
        <span>© 2026</span>
      </div>
    </section>
  );
};
