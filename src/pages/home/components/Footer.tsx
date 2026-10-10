import { useTranslation } from 'react-i18next';
import { FaBehance, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import { Button } from '../../../components/Button';
import { OWNER } from '../utils/constants';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="px-5 pb-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-ink/10 pt-8 text-center md:flex-row md:text-left">
        <p className="text-sm text-muted">
          {t('owner.fullName')} © 2026 — {t('common.city')} —{' '}
          <a href={`mailto:${OWNER.email}`} className="text-ink underline-offset-4 hover:text-wine hover:underline">
            {OWNER.email}
          </a>
        </p>
        <div className="flex items-center gap-2">
          <Button
            href={OWNER.behance}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            size="icon"
            aria-label="Behance"
          >
            <FaBehance />
          </Button>
          <Button
            href={OWNER.linkedin}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            size="icon"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </Button>
          <Button href="#top" size="icon" aria-label={t('common.backToTop')}>
            <FiArrowUp />
          </Button>
        </div>
      </div>
    </footer>
  );
};
