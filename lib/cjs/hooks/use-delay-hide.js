"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * When show = false is passed, triggers the hide state to be changed with
 * a delay. This is useful for animated components where an animation should
 * run on exit, but there is a delay so that the animation can finish before
 * the item is removed from the DOM.
 *
 * @param show
 * @param delayMs
 * @returns
 */
function useDelayHide(show, delayMs = 1000) {
    // on the initial render, the timer will be triggered since show will be
    // false, but to reduce re-renders, set hide to true initially so that the
    // first timeout has no effect.
    const [hide, setHide] = (0, react_1.useState)(true);
    const timeoutRef = (0, react_1.useRef)(undefined);
    (0, react_1.useEffect)(() => {
        if (show) {
            setHide(false);
            clearTimeout(timeoutRef.current);
        }
        else {
            timeoutRef.current = setTimeout(() => setHide(true), delayMs);
        }
        ;
        () => clearTimeout(timeoutRef.current);
    }, [delayMs, show]);
    return hide;
}
exports.default = useDelayHide;
//# sourceMappingURL=use-delay-hide.js.map