/// <reference types="lodash" />
import type { MutableRefObject } from 'react';
export interface UseScrollbarParams {
    scrollBox: MutableRefObject<HTMLElement | null> | Window;
    minThumbSize?: number;
}
export default function useScrollbar({ scrollBox, minThumbSize }: UseScrollbarParams): {
    updateLayerThrottle: import("lodash").DebouncedFunc<() => void>;
    updateLayerNow: import("lodash").DebouncedFunc<() => void>;
    horizontalBar: false | import("react/jsx-runtime").JSX.Element;
    verticalBar: false | import("react/jsx-runtime").JSX.Element;
    updateBarVisible: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
