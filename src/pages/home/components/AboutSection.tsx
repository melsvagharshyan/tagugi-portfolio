import { useTranslation } from 'react-i18next';
import { SKILLS } from '../utils/constants';
import { AboutIntro } from './AboutIntro';
import { ResumeRow } from './ResumeRow';
import { RichText } from './RichText';
import { SectionTitle } from './SectionTitle';
import { TagList } from './TagList';
import { TimelineList } from './TimelineList';

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="scroll-mt-16 bg-sand px-5 py-20 sm:px-8 sm:py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle index="02" eyebrow={t('about.eyebrow')} title={<RichText i18nKey="about.title" />} />

        <div className="mt-16">
          <AboutIntro />
        </div>

        <div className="mt-24">
          <ResumeRow label={t('about.rows.experience')}>
            <TimelineList entries={t('about.experience', { returnObjects: true })} />
          </ResumeRow>
          <ResumeRow label={t('about.rows.education')}>
            <TimelineList entries={t('about.education', { returnObjects: true })} />
          </ResumeRow>
          <ResumeRow label={t('about.rows.practice')}>
            <TimelineList entries={t('about.practice', { returnObjects: true })} />
          </ResumeRow>
          <ResumeRow label={t('about.rows.skills')}>
            <TagList items={SKILLS} />
          </ResumeRow>
          <ResumeRow label={t('about.rows.languages')}>
            <TagList items={t('about.languages', { returnObjects: true })} />
          </ResumeRow>
        </div>
      </div>
    </section>
  );
};
