import type { Ref, RefObject } from 'react';
export declare function useInitial<T extends (...args: never[]) => ReturnType<T>>(callback: T): ReturnType<T>;
export declare function useResizeObserver(scrollBoxRef: RefObject<HTMLElement | null>, callback: () => void): void;
export declare function useSyncRef(innerRef: Ref<HTMLElement> | undefined, scrollBoxRef: RefObject<HTMLElement>): void;
