import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost' | 'light';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'icon';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-ink text-ivory hover:bg-wine',
  outline: 'border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-ivory',
  ghost: 'text-ink/80 hover:text-wine',
  light: 'bg-ivory/80 text-ink border border-ink/10 backdrop-blur hover:bg-ivory hover:border-ink/30',
};

const SIZES: Record<Size, string> = {
  xs: 'h-7 min-w-9 px-2.5 text-[0.7rem] gap-1',
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-6 text-sm gap-2',
  lg: 'h-13 px-7 text-[0.95rem] gap-2.5',
  icon: 'h-10 w-10 text-base',
};

const BASE =
  'group/button inline-flex shrink-0 items-center whitespace-nowrap justify-center rounded-full font-sans font-semibold tracking-wide cursor-pointer select-none transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-50';

type LinkRest = Omit<ButtonAsLink, keyof BaseProps>;
type NativeRest = Omit<ButtonAsButton, keyof BaseProps>;

const isLink = (rest: LinkRest | NativeRest): rest is LinkRest => rest.href !== undefined;

export const Button = ({
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  children,
  ...rest
}: ButtonProps) => {
  const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (isLink(rest)) {
    return (
      <a className={classes} {...rest}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {icon}
      {children}
    </button>
  );
};
