import { useTranslation } from 'react-i18next';
import { Button } from '../../../../components/Button';
import { useLanguage } from '../../utils/hooks';

interface LanguageSwitcherProps {
  tabIndex?: number;
}

export const LanguageSwitcher = ({ tabIndex }: LanguageSwitcherProps) => {
  const { t } = useTranslation();
  const { current, change, languages } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t('common.language')}
      className="flex w-fit shrink-0 flex-nowrap items-center gap-0.5 whitespace-nowrap rounded-full border border-ink/10 bg-ivory/95 p-1"
    >
      {languages.map((language) => {
        const active = language.code === current;
        return (
          <Button
            key={language.code}
            variant={active ? 'primary' : 'ghost'}
            size="xs"
            lang={language.code}
            title={language.name}
            aria-label={language.name}
            aria-pressed={active}
            tabIndex={tabIndex}
            onClick={() => change(language.code)}
          >
            {language.short}
          </Button>
        );
      })}
    </div>
  );
};
