import { useEffect, useRef } from 'react';
import { updateRef } from "./utils";
export function useInitial(callback) {
  var _useRef = useRef({
      initial: false,
      storeValue: undefined
    }),
    current = _useRef.current;
  if (!current.initial) {
    current.initial = true;
    current.storeValue = callback();
  }
  return current.storeValue;
}
export function useResizeObserver(scrollBoxRef, callback) {
  useEffect(function () {
    var resizeObserver = new ResizeObserver(function () {
      callback();
    });
    if (scrollBoxRef.current) {
      if (scrollBoxRef.current === document.documentElement) {
        resizeObserver.observe(document.body);
      } else {
        resizeObserver.observe(scrollBoxRef.current);
        Array.from(scrollBoxRef.current.children).forEach(function (child) {
          resizeObserver.observe(child);
        });
      }
    }
    return function () {
      resizeObserver.disconnect();
    };
  }, [scrollBoxRef]);
}
export function useSyncRef(innerRef, scrollBoxRef) {
  useEffect(function () {
    updateRef(innerRef, scrollBoxRef.current);
    return function () {
      updateRef(innerRef, null);
    };
  }, [innerRef, scrollBoxRef]);
}