import { BaseCol } from "@components/base-col";
import useDelayHide from "@hooks/use-delay-hide";
import useOutsideListener from "@hooks/use-outside-listener";
import { DROPDOWN_BG_CLS, ROUNDED_CLS } from "@theme";
import { Children } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export var BASE_DROPDOWN_CLS = clns("absolute mt-2 shadow-lg border border-slate-200/80 z-overlay text-sm gap-y-4 dark:border-none min-w-full", DROPDOWN_BG_CLS, ROUNDED_CLS);
export function BaseDropDown(_a) {
    var _b = _a.dropDownVisible, dropDownVisible = _b === void 0 ? false : _b, onClose = _a.onClose, menuClassName = _a.menuClassName, className = _a.className, children = _a.children;
    var ref = useOutsideListener(dropDownVisible, function () { return onClose && onClose(); });
    var hide = useDelayHide(dropDownVisible);
    // useWindowClickListener((e: { target: any }) => {
    //   if (ref.current && !ref.current.contains(e.target)) {
    //     onClose && onClose()
    //   }
    // })
    // const transitions = useTransition(dropDownVisible, {
    //   from: { opacity: 0, top: "90%" },
    //   enter: { opacity: 1, top: "100%" },
    //   leave: { opacity: 0, top: "90%" },
    // })
    function onKeyDown(e) {
        if (e.key === "Escape" && onClose) {
            onClose();
        }
    }
    var c = Children.toArray(children);
    return (_jsxs("div", { ref: ref, className: clns("relative", className), onKeyDown: onKeyDown, children: [c[0], (dropDownVisible || !hide) && (_jsx(BaseCol, { className: clns(BASE_DROPDOWN_CLS, "duration-300 ease-in-out fill-mode-forwards", [
                    dropDownVisible,
                    "animate-in fade-in slide-in-from-top-1",
                    "animate-out fade-out slide-out-to-top-1",
                ], menuClassName), children: c[1] }))] }));
}
//# sourceMappingURL=base-dropdown.js.map