import type { ProjectMedia } from '../utils/types';

interface MediaItemProps {
  media: ProjectMedia;
  alt: string;
}

export const MediaItem = ({ media, alt }: MediaItemProps) => (
  <figure className="mb-5 break-inside-avoid overflow-hidden rounded-xl bg-sand ring-1 ring-ink/5">
    {media.type === 'image' ? (
      <img src={media.src} alt={alt} loading="lazy" className="w-full" />
    ) : (
      <video src={media.src} poster={media.poster} autoPlay loop muted playsInline className="w-full" />
    )}
  </figure>
);
