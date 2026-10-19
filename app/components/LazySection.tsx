import {
  Suspense,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type LazySectionProps = {
  children: ReactNode;
  /** Placeholder height before the section mounts / while Suspense is pending */
  minHeight?: string;
  /** IntersectionObserver rootMargin — load a bit before the section enters view */
  rootMargin?: string;
};

/**
 * Client-only mount gate: on SSR and before intersection, renders a min-height
 * placeholder so layout stays stable. Once near the viewport, mounts children
 * (typically a React.lazy component) inside Suspense.
 */
export default function LazySection({
  children,
  minHeight = "28rem",
  rootMargin = "200px",
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref}>
      {shouldLoad ? (
        <Suspense
          fallback={
            <div
              className="w-full animate-pulse rounded-lg bg-text-secondary/10"
              style={{ minHeight }}
              aria-hidden
            />
          }
        >
          {children}
        </Suspense>
      ) : (
        <div
          className="w-full rounded-lg bg-text-secondary/5"
          style={{ minHeight }}
          aria-hidden
        />
      )}
    </div>
  );
}
