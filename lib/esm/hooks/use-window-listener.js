import { useEffect } from "react";
export default function useWindowListener(event, handler) {
    useEffect(() => {
        window.addEventListener(event, handler);
        return () => window.removeEventListener(event, handler);
    }, []);
}
//# sourceMappingURL=use-window-listener.js.map