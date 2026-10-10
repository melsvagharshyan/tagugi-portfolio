import { AnimatePresence, m } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { WELCOME } from '../utils/constants';
import { useWelcomeIntro } from '../utils/hooks';

export const WelcomeIntro = () => {
  const { t } = useTranslation();
  const visible = useWelcomeIntro();
  const title = t('welcome.title');
  const letters = Array.from(title);

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          key="welcome"
          role="status"
          aria-label={title}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: WELCOME.ease }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-sand px-6"
        >
          <p aria-hidden className="flex flex-wrap justify-center font-serif text-6xl tracking-tight text-ink italic sm:text-7xl md:text-8xl">
            {letters.map((letter, index) => (
              <m.span
                key={index}
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.2 + index * WELCOME.letterStagger, ease: [0.22, 1, 0.36, 1] }}
                className={index === 0 ? 'text-wine' : undefined}
              >
                {letter === ' ' ? '\u00a0' : letter}
              </m.span>
            ))}
          </p>

          <m.span
            aria-hidden
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: WELCOME.ease }}
            className="h-px w-40 origin-left bg-gradient-to-r from-transparent via-wine to-transparent"
          />

          <m.p
            aria-hidden
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xs font-semibold tracking-[0.3em] text-muted uppercase"
          >
            {t('welcome.subtitle')}
          </m.p>
        </m.div>
      )}
    </AnimatePresence>
  );
};
