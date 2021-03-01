import { useRef, useEffect } from "react";

/**
 * useIntersection hook for Intersection Observer API
 * @param {object} params
 * @param {React.RefObject} params.target target Element to monitor
 * @param {object} params.options options config object for Intersection Observer API
 * @param {function} params.callback Callback function to be fired when intersection occurs
 * @returns {boolean} Returns the boolan isIntersecting from Intersection Observer entries object for the given target
 */

export default function useIntersectionObserver({ target, options, callback }) {
  const { once, enabled, ...opts } = options;
  const optsRef = useRef(opts);
  const intersectedRef = useRef(false);

  useEffect(() => {
    if (!Object.is(optsRef.current, opts)) {
      optsRef.current = opts;
    }
  });

  useEffect(() => {
    if (!enabled) {
      return;
    }

    if (target == null) {
      return;
    }

    const element = target instanceof Element ? target : target.current;
    if (element == null) {
      return;
    }

    if (once && intersectedRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        if (entry.isIntersecting && callback !== null) {
          intersectedRef.current = true;
          callback(entry);
        }

        if (once && entry.isIntersecting && element != null) {
          observer.unobserve(element);
        }
      },
      {
        ...optsRef.current,
        root:
          optsRef.current.root != null ? optsRef.current.root.current : null,
      }
    );

    observer.observe(element);

    // eslint-disable-next-line consistent-return
    return () => {
      if (once && intersectedRef.current) {
        return;
      }

      if (element != null) {
        observer.unobserve(element);
      }
    };
  }, [target, callback, once, enabled]);
}
