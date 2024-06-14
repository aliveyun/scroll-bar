import React from 'react';
import type { ActionPosition, BoxSize } from './types';
import './style/ThumbBar.less';
export interface ThumbBarProps {
    visible: boolean;
    isWindow: boolean;
    minThumbSize?: number;
    /**
     * @default vertical
     */
    horizontal?: boolean;
    isPress: boolean | undefined;
    grooveRef: React.RefObject<HTMLDivElement>;
    boxSize: BoxSize;
    updateAction: React.Dispatch<React.SetStateAction<ActionPosition>>;
}
declare function ThumbBar({ visible, isWindow, minThumbSize, horizontal, isPress, grooveRef, boxSize, updateAction, }: ThumbBarProps): import("react/jsx-runtime").JSX.Element;
declare const _default: React.MemoExoticComponent<typeof ThumbBar>;
export default _default;
