import { useEffect, useRef, useState } from "react";
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
export default function useDelayHide(show, delayMs) {
    if (delayMs === void 0) { delayMs = 1000; }
    // on the initial render, the timer will be triggered since show will be
    // false, but to reduce re-renders, set hide to true initially so that the
    // first timeout has no effect.
    var _a = useState(true), hide = _a[0], setHide = _a[1];
    var timeoutRef = useRef(undefined);
    useEffect(function () {
        if (show) {
            setHide(false);
            clearTimeout(timeoutRef.current);
        }
        else {
            timeoutRef.current = setTimeout(function () { return setHide(true); }, delayMs);
        }
        ;
        (function () { return clearTimeout(timeoutRef.current); });
    }, [delayMs, show]);
    return hide;
}
//# sourceMappingURL=use-delay-hide.js.map