import { useEffect, useState, useRef } from "react";

/**
 * @param {object} params - Parameters for useDebounce hook
 * @param {string} params.value - The value to be debouced
 * @param {number} params.delay - The delay for the debounce function, default is 300ms
 * @returns {any} Returns the debounced value
 */

export default function useDebounce({ value, delay = 300 }) {
  const [term, setTerm] = useState("");
  const timeout = useRef(null);
  useEffect(() => {
    timeout.current = setTimeout(() => {
      setTerm(value);
    }, delay);

    return () => {
      clearInterval(timeout.current);
    };
  }, [value, delay]);

  return term;
}
