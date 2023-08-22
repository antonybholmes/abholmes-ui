import { useEffect } from "react";
export default function useWindowListener(event, handler) {
    useEffect(function () {
        window.addEventListener(event, handler);
        return function () { return window.removeEventListener(event, handler); };
    }, []);
}
//# sourceMappingURL=use-window-listener.js.map