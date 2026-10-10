import { useTranslation } from 'react-i18next';
import { FiDownload } from 'react-icons/fi';
import { Button } from '../../../components/Button';
import { OWNER } from '../utils/constants';
import { ProfilePhoto } from './ProfilePhoto';
import { Reveal } from './Reveal';
import { RichText } from './RichText';

export const AboutIntro = () => {
  const { t } = useTranslation();

  return (
    <div className="grid items-center gap-16 lg:grid-cols-[5fr_7fr] lg:gap-24">
      <Reveal>
        <ProfilePhoto />
      </Reveal>

      <Reveal delay={150}>
        <p className="font-serif text-3xl leading-snug tracking-tight text-ink sm:text-4xl">
          <RichText i18nKey="about.intro" />
        </p>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
          {t('about.paragraphs', { returnObjects: true }).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Button href={OWNER.cv} target="_blank" rel="noreferrer" size="lg" icon={<FiDownload />} className="mt-10">
          {t('about.downloadCv')}
        </Button>
      </Reveal>
    </div>
  );
};
