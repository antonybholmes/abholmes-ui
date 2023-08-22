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
export default function useDelayHide(show, delayMs = 1000) {
    // on the initial render, the timer will be triggered since show will be
    // false, but to reduce re-renders, set hide to true initially so that the
    // first timeout has no effect.
    const [hide, setHide] = useState(true);
    const timeoutRef = useRef(undefined);
    useEffect(() => {
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
//# sourceMappingURL=use-delay-hide.js.map