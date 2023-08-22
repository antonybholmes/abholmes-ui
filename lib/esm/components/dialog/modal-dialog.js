import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import useDelayHide from "@hooks/use-delay-hide";
import { useCallback, useEffect, useRef } from "react";
import { cn } from "../../lib/class-names";
import ModalBgScreen from "./modal-bg-screen";
export default function ModalDialog({ visible = false, onCancel, className, children, }) {
    const ref = useRef(null);
    const hide = useDelayHide(visible);
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
    const onKeyDown = useCallback((e) => {
        if (e.key === "Escape") {
            onCancel && onCancel(e);
        }
    }, []);
    useEffect(() => {
        if (visible) {
            window.addEventListener("keydown", onKeyDown);
        }
        else {
            window.removeEventListener("keydown", onKeyDown);
        }
    }, [visible]);
    useEffect(() => {
        // force focus onto modal
        if (visible) {
            ref.current?.focus();
        }
    }, [visible, ref]);
    if (visible || !hide) {
        return (_jsx(ModalBgScreen, { visible: visible, onClick: (e) => onCancel && onCancel(e), className: "flex flex-row items-center justify-center", children: _jsx("div", { className: cn("flex flex-col rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700", className), onClick: e => 
                // if user clicks inside dialog, prevent it triggering exit and closing
                e.stopPropagation(), tabIndex: 0, ref: ref, children: children }) }));
    }
    else {
        return _jsx(_Fragment, {});
    }
}
//# sourceMappingURL=modal-dialog.js.map