import { useEffect } from "react";
export default function useResizeObserver(ref, callback) {
    //const ref = useRef<T>(null)
    useEffect(function () {
        var element = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!element) {
            return;
        }
        var observer = new ResizeObserver(function () {
            callback(element);
        });
        observer.observe(element);
        // cleanup by deactivating
        return function () {
            observer.disconnect();
        };
    }, [callback, ref]);
    //return ref
}
//# sourceMappingURL=use-resize-observer.js.map