"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const use_delay_hide_1 = __importDefault(require("@hooks/use-delay-hide"));
const react_1 = require("react");
const class_names_1 = require("../../lib/class-names");
const modal_bg_screen_1 = __importDefault(require("./modal-bg-screen"));
function ModalDialog({ visible = false, onCancel, className, children, }) {
    const ref = (0, react_1.useRef)(null);
    const hide = (0, use_delay_hide_1.default)(visible);
    // useEffect(() => {
    //   if (visible) {
    //     gsap
    //       .timeline()
    //       .to(bgRef.current, { display: "block" }, 0)
    //       .to(
    //         bgRef.current,
    //         { opacity: 1, duration: DURATION, ease: EASE },
    //         DURATION,
    //       )
    //       .to(ref.current, { display: "flex" }, 0)
    //       .to(
    //         ref.current,
    //         { opacity: 1, duration: DURATION, ease: EASE },
    //         DURATION,
    //       )
    //       .to(
    //         ref.current,
    //         {
    //           transform: "translate(-50%, -50%)",
    //           duration: DURATION,
    //           ease: EASE,
    //         },
    //         DURATION,
    //       )
    //   } else {
    //     gsap
    //       .timeline()
    //       .to(bgRef.current, { opacity: 0, duration: DURATION, ease: EASE }, 0)
    //       .to(bgRef.current, { display: "none" }, DURATION)
    //       .to(ref.current, { opacity: 0, duration: DURATION, ease: EASE }, 0)
    //       .to(
    //         ref.current,
    //         {
    //           transform: "translate(-50%, -60%)",
    //           duration: DURATION,
    //           ease: EASE,
    //         },
    //         0,
    //       )
    //       .to(ref.current, { display: "none" }, DURATION)
    //   }
    // }, [visible])
    const onKeyDown = (0, react_1.useCallback)((e) => {
        if (e.key === "Escape") {
            onCancel && onCancel(e);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        if (visible) {
            window.addEventListener("keydown", onKeyDown);
        }
        else {
            window.removeEventListener("keydown", onKeyDown);
        }
    }, [visible]);
    (0, react_1.useEffect)(() => {
        // force focus onto modal
        if (visible) {
            ref.current?.focus();
        }
    }, [visible, ref]);
    if (visible || !hide) {
        return ((0, jsx_runtime_1.jsx)(modal_bg_screen_1.default, { visible: visible, onClick: (e) => onCancel && onCancel(e), className: "flex flex-row items-center justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: (0, class_names_1.cn)("flex flex-col rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700", className), onClick: e => 
                // if user clicks inside dialog, prevent it triggering exit and closing
                e.stopPropagation(), tabIndex: 0, ref: ref, children: children }) }));
    }
    else {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
}
exports.default = ModalDialog;
//# sourceMappingURL=modal-dialog.js.map