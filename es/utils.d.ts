/// <reference types="react" />
export declare const trackSize = 16;
export declare function isEnableScrollbar(suppressMacOS: boolean): boolean;
export declare function updateRef(innerRef: React.Ref<HTMLElement> | undefined, scrollBoxElement: HTMLElement | null): void;
export declare function handleExtractSize(target: HTMLElement): {
    clientWidth: number;
    scrollWidth: number;
    clientHeight: number;
    scrollHeight: number;
    paddingTop: number;
    paddingLeft: number;
};
export declare function isEnableStyle(disabled?: boolean): "hidden" | "auto";
export declare function classNames(...args: (string | undefined | Record<string, unknown>)[]): string | undefined;
export declare function updateElementStyle(element: HTMLElement, obj: Record<string, number>): void;
export declare function computeRatio(scrollSize: number, clientSize: number, minThumbSize?: number): {
    thumbSize: number;
    ratio: number;
};
export declare function updateScrollPosition(element: HTMLElement | null | undefined, position: number, horizontal?: boolean): void;
export declare function updateScrollElementStyle(containerElement: HTMLElement | null | undefined, horizontalElement: HTMLElement | null | undefined, verticalElement: HTMLElement | null | undefined, minThumbSize?: number): void;
export declare function updateThumbStyle(thumbElement: HTMLDivElement, scrollSize: number, clientSize: number, scrollPosition: number, direction: 'left' | 'top', minThumbSize?: number): void;
