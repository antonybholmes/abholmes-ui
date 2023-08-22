"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useResizeObserver(ref, callback) {
    //const ref = useRef<T>(null)
    (0, react_1.useEffect)(function () {
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
exports.default = useResizeObserver;
//# sourceMappingURL=use-resize-observer.js.map