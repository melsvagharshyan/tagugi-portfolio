import { useTranslation } from 'react-i18next';
import type { LanguageCode } from '../../../i18n/languages';
import { getNativeLanguageName } from '../utils/helpers';

interface LanguageCardProps {
  code: LanguageCode;
}

export const LanguageCard = ({ code }: LanguageCardProps) => {
  const { t } = useTranslation();
  const native = getNativeLanguageName(code);
  const translated = t(`about.languages.${code}`);

  return (
    <li className="group flex items-center gap-4 rounded-2xl border border-ink/8 bg-sand p-3 pr-5 transition-colors duration-300 hover:border-rose hover:bg-blush/60">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blush text-xs font-semibold tracking-[0.15em] text-wine uppercase transition-colors duration-300 group-hover:bg-wine group-hover:text-ivory">
        {code}
      </span>
      <div className="min-w-0">
        <p className="font-serif text-xl leading-tight text-ink">{native}</p>
        {translated !== native && <p className="mt-0.5 text-sm text-muted">{translated}</p>}
      </div>
    </li>
  );
};
