interface RollingTextProps {
  text: string;
}

export const RollingText = ({ text }: RollingTextProps) => (
  <span className="relative block overflow-hidden">
    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
      {text}
    </span>
    <span
      aria-hidden
      className="absolute inset-0 block translate-y-full font-serif italic transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
    >
      {text}
    </span>
  </span>
);
