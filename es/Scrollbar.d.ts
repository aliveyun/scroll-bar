import type { HTMLFactory, Ref } from 'react';
import type { ScrollbarBase } from './types';
import './style/Scrollbar.less';
export interface ScrollbarProps extends ScrollbarBase {
    innerRef?: Ref<HTMLElement>;
    Wrapper: HTMLFactory<HTMLElement>;
}
export default function ScrollBar({ className, onScroll, onMouseEnter, onMouseLeave, innerRef, children, minThumbSize, ghost, suppressScrollX, suppressScrollY, theme, Wrapper, ...props }: ScrollbarProps): import("react/jsx-runtime").JSX.Element;
