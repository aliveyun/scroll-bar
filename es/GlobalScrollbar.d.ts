import type { GlobalScrollbarBase } from './types';
import './style/Scrollbar.less';
export interface GlobalScrollbarProps extends GlobalScrollbarBase {
    /**
     * When set to true, macOS browsers will use native scrollbar.
     */
    suppressMacOS?: boolean;
}
declare function GlobalScrollbar({ suppressMacOS, ...props }: GlobalScrollbarProps): import("react/jsx-runtime").JSX.Element | null;
export default GlobalScrollbar;
