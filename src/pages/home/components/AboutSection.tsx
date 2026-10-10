import { useTranslation } from 'react-i18next';
import { TbBriefcase, TbFlask, TbLanguage, TbSchool, TbSparkles } from 'react-icons/tb';
import { SKILL_COUNT, SPOKEN_LANGUAGES } from '../utils/constants';
import { getTimelineSpan } from '../utils/helpers';
import { AboutIntro } from './AboutIntro';
import { LanguageCard } from './LanguageCard';
import { ResumeCard } from './ResumeCard';
import { RichText } from './RichText';
import { SectionTitle } from './SectionTitle';
import { SkillBoard } from './SkillBoard';
import { TimelineList } from './TimelineList';

export const AboutSection = () => {
  const { t } = useTranslation();
  const experience = t('about.experience', { returnObjects: true });

  return (
    <section id="about" className="scroll-mt-16 bg-sand px-5 py-20 sm:px-8 sm:py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle index="02" eyebrow={t('about.eyebrow')} title={<RichText i18nKey="about.title" />} />

        <div className="mt-16">
          <AboutIntro />
        </div>

        <div className="mt-24 grid gap-5 lg:grid-cols-12 lg:gap-6">
          <ResumeCard
            icon={TbBriefcase}
            label={t('about.rows.experience')}
            meta={getTimelineSpan(experience)}
            className="lg:col-span-7"
          >
            <TimelineList entries={experience} />
          </ResumeCard>

          <div className="grid content-start gap-5 lg:col-span-5 lg:gap-6">
            <ResumeCard icon={TbSchool} label={t('about.rows.education')} delay={100}>
              <TimelineList entries={t('about.education', { returnObjects: true })} />
            </ResumeCard>
            <ResumeCard icon={TbFlask} label={t('about.rows.practice')} delay={200}>
              <TimelineList entries={t('about.practice', { returnObjects: true })} />
            </ResumeCard>
          </div>

          <ResumeCard
            icon={TbSparkles}
            label={t('about.rows.skills')}
            meta={t('about.tools', { count: SKILL_COUNT })}
            className="lg:col-span-12"
          >
            <SkillBoard />
          </ResumeCard>

          <ResumeCard icon={TbLanguage} label={t('about.rows.languages')} className="lg:col-span-12">
            <ul className="grid gap-2.5 sm:grid-cols-3">
              {SPOKEN_LANGUAGES.map((code) => (
                <LanguageCard key={code} code={code} />
              ))}
            </ul>
          </ResumeCard>
        </div>
      </div>
    </section>
  );
};
