import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import useDelayHide from "@hooks/use-delay-hide";
import cn from "@lib/class-names";
import { useCallback, useEffect, useRef } from "react";
import ModalBgScreen from "./modal-bg-screen";
export default function ModalDialog(_a) {
    var _b = _a.visible, visible = _b === void 0 ? false : _b, onCancel = _a.onCancel, className = _a.className, children = _a.children;
    var ref = useRef(null);
    var hide = useDelayHide(visible);
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
    var onKeyDown = useCallback(function (e) {
        if (e.key === "Escape") {
            onCancel && onCancel(e);
        }
    }, []);
    useEffect(function () {
        if (visible) {
            window.addEventListener("keydown", onKeyDown);
        }
        else {
            window.removeEventListener("keydown", onKeyDown);
        }
    }, [visible]);
    useEffect(function () {
        var _a;
        // force focus onto modal
        if (visible) {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [visible, ref]);
    if (visible || !hide) {
        return (_jsx(ModalBgScreen, { visible: visible, onClick: function (e) { return onCancel && onCancel(e); }, className: "flex flex-row items-center justify-center", children: _jsx("div", { className: cn("flex flex-col rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700", className), onClick: function (e) {
                    // if user clicks inside dialog, prevent it triggering exit and closing
                    return e.stopPropagation();
                }, tabIndex: 0, ref: ref, children: children }) }));
    }
    else {
        return _jsx(_Fragment, {});
    }
}
//# sourceMappingURL=modal-dialog.js.map