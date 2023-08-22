"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// Hook
var useWindowResize = function (resizeEvent) {
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            // Set window width/height to state
            resizeEvent({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        // Handler to call on window resize
        //const dbResize = debounce(handleResize, 500)
        // Add event listener
        //window.addEventListener('resize', dbResize)
        // Call handler right away so state gets updated with initial window size
        //handleResize()
        // Remove event listener on cleanup
        //return () => window.removeEventListener('resize', dbResize)
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []); // Empty array ensures that effect is only run on mount
};
exports.default = useWindowResize;
//# sourceMappingURL=use-window-resize.js.map