/// <reference types="react" />
import type { ScrollbarBase } from './types';
export interface MacScrollbarProps extends ScrollbarBase {
    /**
     * When set to true, macOS browsers will use native scrollbar.
     */
    suppressMacOS?: boolean;
    /**
     * Custom element type.
     * @defaultValue 'div'
     */
    as?: keyof JSX.IntrinsicElements | string;
}
declare const MacScrollbar: import("react").ForwardRefExoticComponent<MacScrollbarProps & import("react").RefAttributes<HTMLElement>>;
export default MacScrollbar;
