import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DEFAULT_LANGUAGE, LANGUAGES, type LanguageCode } from '../../../i18n/languages';
import {
  CURSOR_INTERACTIVE_SELECTOR,
  CURSOR_TRAIL_EASE,
  HEADER_HIDE_AFTER,
  HEADER_SCROLL_OFFSET,
  PROJECTS,
  WELCOME,
} from './constants';
import type { CursorVariant, Project } from './types';

const getCursorVariant = (target: EventTarget | null): CursorVariant => {
  if (!(target instanceof Element)) return 'default';
  const interactive = target.closest(CURSOR_INTERACTIVE_SELECTOR);
  if (!interactive) return 'default';
  return interactive.getAttribute('data-cursor') === 'view' ? 'view' : 'link';
};

export const useCustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<CursorVariant>('hidden');
  const [pressed, setPressed] = useState(false);
  const [enabled] = useState(() => window.matchMedia('(pointer: fine)').matches);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add('has-custom-cursor');

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const trail = { ...target };
    let frame = 0;

    const tick = () => {
      trail.x += (target.x - trail.x) * CURSOR_TRAIL_EASE;
      trail.y += (target.y - trail.y) * CURSOR_TRAIL_EASE;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0)`;
      }
      const settled = Math.abs(target.x - trail.x) < 0.1 && Math.abs(target.y - trail.y) < 0.1;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }
      if (!frame) frame = requestAnimationFrame(tick);
      setVariant(getCursorVariant(event.target));
    };

    const onLeave = () => setVariant('hidden');
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    root.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      root.removeEventListener('pointerleave', onLeave);
    };
  }, [enabled]);

  return { dotRef, ringRef, variant, pressed, enabled };
};

export const useProjectViewer = () => {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const activeProject = useMemo<Project | null>(
    () => PROJECTS.find((project) => project.slug === activeSlug) ?? null,
    [activeSlug],
  );

  const open = useCallback((slug: string) => setActiveSlug(slug), []);
  const close = useCallback(() => setActiveSlug(null), []);

  return { activeProject, open, close };
};

export const useBodyScrollLock = (locked: boolean) => {
  useEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
};

const hasSeenWelcome = (): boolean => {
  try {
    return sessionStorage.getItem(WELCOME.storageKey) === 'true';
  } catch {
    return true;
  }
};

export const useWelcomeIntro = () => {
  const [visible, setVisible] = useState(() => !hasSeenWelcome());

  useBodyScrollLock(visible);

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(WELCOME.storageKey, 'true');
      } catch {
        // Storage can be unavailable (private mode); the intro will simply show again next time.
      }
      setVisible(false);
    }, WELCOME.duration);
    return () => window.clearTimeout(timer);
  }, [visible]);

  return visible;
};

export const useEscapeKey = (onEscape: () => void, enabled = true) => {
  useEffect(() => {
    if (!enabled) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onEscape();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onEscape, enabled]);
};

export const useInView = <T extends Element>(threshold = 0.15, rootMargin = '0px') => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
};

export const useHeaderScroll = (locked: boolean) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }
      setScrolled(y > HEADER_SCROLL_OFFSET);
      if (Math.abs(y - lastY) > 6) {
        setHidden(!locked && y > HEADER_HIDE_AFTER && y > lastY);
        lastY = y;
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [locked]);

  return { progressRef, scrolled, hidden: hidden && !locked };
};

export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0));
        const [best] = [...visible.entries()].sort((a, b) => b[1] - a[1]);
        setActive(best && best[1] > 0 ? best[0] : null);
      },
      { threshold: [0, 0.15, 0.3, 0.5, 0.75], rootMargin: '-20% 0px -40% 0px' },
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
};

export const useSlidingIndicator = <T extends HTMLElement>(activeKey: string | null, layoutKey?: string) => {
  const itemRefs = useRef(new Map<string, T>());
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });

  const register = useCallback(
    (key: string) => (node: T | null) => {
      if (node) itemRefs.current.set(key, node);
      else itemRefs.current.delete(key);
    },
    [],
  );

  const currentKey = hoveredKey ?? activeKey;

  useEffect(() => {
    const node = currentKey ? itemRefs.current.get(currentKey) : undefined;
    setIndicator(
      node
        ? { left: node.offsetLeft, width: node.offsetWidth, visible: true }
        : (previous) => ({ ...previous, visible: false }),
    );
  }, [currentKey, layoutKey]);

  return { register, indicator, currentKey, setHoveredKey };
};

export const useToggle = (initial = false) => {
  const [on, setOn] = useState(initial);
  const toggle = useCallback(() => setOn((value) => !value), []);
  const close = useCallback(() => setOn(false), []);
  return { on, toggle, close };
};

const isLanguageCode = (value: string): value is LanguageCode =>
  LANGUAGES.some((language) => language.code === value);

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const resolved = i18n.resolvedLanguage ?? DEFAULT_LANGUAGE;
  const current: LanguageCode = isLanguageCode(resolved) ? resolved : DEFAULT_LANGUAGE;

  const change = useCallback((code: LanguageCode) => void i18n.changeLanguage(code), [i18n]);

  return { current, change, languages: LANGUAGES };
};
