"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useResizeObserver(ref, callback) {
    //const ref = useRef<T>(null)
    (0, react_1.useEffect)(() => {
        const element = ref?.current;
        if (!element) {
            return;
        }
        const observer = new ResizeObserver(() => {
            callback(element);
        });
        observer.observe(element);
        // cleanup by deactivating
        return () => {
            observer.disconnect();
        };
    }, [callback, ref]);
    //return ref
}
exports.default = useResizeObserver;
//# sourceMappingURL=use-resize-observer.js.map