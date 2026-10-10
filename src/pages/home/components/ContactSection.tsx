import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import { Button } from '../../../components/Button';
import { CONTACT_ITEMS, OWNER } from '../utils/constants';
import { ContactCard } from './ContactCard';
import { Reveal } from './Reveal';
import { RichText } from './RichText';

const SignatureScene = lazy(() =>
  import('./three/SignatureScene').then((module) => ({ default: module.SignatureScene })),
);

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="scroll-mt-16 px-3 py-20 sm:px-8 sm:py-24 md:py-36">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-ink via-[#3d2530] to-wine px-6 py-10 text-ivory sm:rounded-[2rem] sm:p-12 lg:grid-cols-[7fr_5fr] lg:p-16">
        <div className="relative z-10 min-w-0">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-champagne uppercase">
              <span className="font-serif text-sm tracking-normal italic">03</span>
              <span className="h-px w-8 bg-champagne/60" />
              {t('contact.eyebrow')}
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              <RichText i18nKey="contact.title" emClassName="text-blush" />
            </h2>
            <p className="mt-6 max-w-lg text-lg text-ivory/70">{t('contact.subtitle')}</p>
          </Reveal>

          <Reveal delay={150} className="mt-10 border-t border-ivory/15">
            {CONTACT_ITEMS.map((item) => (
              <ContactCard key={item.kind} item={item} />
            ))}
          </Reveal>

          <Reveal delay={250}>
            <Button href={`mailto:${OWNER.email}`} variant="light" size="lg" className="mt-10">
              {t('contact.startProject')}
              <FiArrowUpRight />
            </Button>
          </Reveal>
        </div>

        <div className="relative -mx-6 h-64 min-w-0 sm:mx-0 sm:h-[26rem] lg:h-[34rem]">
          <Suspense fallback={null}>
            <SignatureScene />
          </Suspense>
        </div>
      </div>
    </section>
  );
};
