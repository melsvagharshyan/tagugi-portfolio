import { useTranslation } from 'react-i18next';
import { PiAsteriskLight } from 'react-icons/pi';

export const Marquee = () => {
  const { t } = useTranslation();
  const words = t('marquee', { returnObjects: true });
  const loop = [...words, ...words];

  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ink py-6">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {loop.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="flex items-center gap-10 font-serif text-3xl text-ivory italic sm:text-4xl"
          >
            {word}
            <PiAsteriskLight className="text-2xl text-champagne not-italic" />
          </span>
        ))}
      </div>
    </div>
  );
};
