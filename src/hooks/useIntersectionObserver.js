import { useRef, useState, useEffect } from "react";

/**
 * useIntersection hook for Intersection Observer API
 * @param {object} params
 * @param {React.RefObject} params.target target Element to monitor
 * @param {object} params.options options config object for Intersection Observer API
 * @param {function} params.callback Callback function to be fired when intersection occurs
 * @returns {boolean} Returns the boolan isIntersecting from Intersection Observer entries object for the given target
 */

export const useIntersection = ({ target, options, callback }) => {
  const { defaultIntersecting, once, ...opts } = options;
  const optsRef = useRef(opts);
  const [intersecting, setIntersecting] = useState(
    defaultIntersecting === true
  );
  const intersectedRef = useRef(false);

  useEffect(() => {
    if (!Object.is(optsRef.current, opts)) {
      optsRef.current = opts;
    }
  });

  useEffect(() => {
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
        setIntersecting(entry.isIntersecting);

        if (callback != null) {
          callback(entry);
        }

        if (entry.isIntersecting) {
          intersectedRef.current = true;
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
  }, [target, callback, once]);

  return intersecting;
};
