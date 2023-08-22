"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useOutsideListener(show, callback) {
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        function onClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                //console.log("You clicked outside of me!", ref.current)
                document.removeEventListener("mousedown", onClick);
                document.removeEventListener("touchstart", onClick);
                callback();
            }
        }
        // function onKeyDown(event: any) {
        //   if (ref.current ) {
        //     console.log(event)
        //     console.log(ref.current)
        //   }
        // }
        if (show) {
            document.addEventListener("mousedown", onClick);
            document.addEventListener("touchstart", onClick);
            //document.addEventListener("keydown", onKeyDown)
        }
        else {
            document.removeEventListener("mousedown", onClick);
            document.removeEventListener("touchstart", onClick);
        }
        return function () {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", onClick);
            document.removeEventListener("touchstart", onClick);
            //document.removeEventListener("keydown", onKeyDown)
        };
    }, [callback, ref, show]);
    return ref;
}
exports.default = useOutsideListener;
//# sourceMappingURL=use-outside-listener.js.map