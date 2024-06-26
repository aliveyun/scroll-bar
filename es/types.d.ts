/// <reference types="react" />
export interface BoxSize {
    clientWidth: number;
    scrollWidth: number;
    clientHeight: number;
    scrollHeight: number;
    paddingTop: number;
    paddingLeft: number;
}
export interface ActionPosition {
    isPressX?: boolean;
    isPressY?: boolean;
    lastScrollTop: number;
    lastScrollLeft: number;
    pressStartX: number;
    pressStartY: number;
}
export interface GlobalScrollbarBase {
    /**
     * Adapt to the background color of the container.
     * @defaultValue 'white'
     */
    theme?: 'white' | 'dark';
    /**
     * Minimum thumb bar size.
     * @defaultValue 20
     */
    minThumbSize?: number;
    /**
     * background color of the scrollbar.
     */
    ghost?: boolean;
}
export interface ScrollbarBase extends GlobalScrollbarBase, React.HtmlHTMLAttributes<HTMLElement> {
    /**
     * When set to true, the scrollbar in X-axis will not be available, regardless of the content width.
     */
    suppressScrollX?: boolean;
    /**
     * When set to true, the scroll bar in Y-axis will not be available, regardless of the content height.
     */
    suppressScrollY?: boolean;
    /**
     * children
     */
    children: React.ReactNode;
}
