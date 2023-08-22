import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
export const DROPDOWN_CLS = "left-0";
export function BaseDropDown({ dropDownVisible = false, onClose, onOpenAutoFocus, menuClassName, className, children, }) {
    // const ref = useOutsideListener<HTMLDivElement>(
    //   dropDownVisible,
    //   () => onClose && onClose(),
    // )
    // const hide = useDelayHide(dropDownVisible)
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
    function _onClose() {
        if (onClose) {
            onClose();
        }
    }
    const c = Children.toArray(children);
    return (_jsxs(Popover, { open: dropDownVisible, children: [_jsx(PopoverTrigger, { asChild: true, children: c[0] }), _jsx(PopoverContent, { onInteractOutside: () => _onClose(), onEscapeKeyDown: () => _onClose(), onOpenAutoFocus: onOpenAutoFocus, className: menuClassName, children: c[1] })] }));
    {
        /* return (
        <div ref={ref} className={clns("relative", className)} onKeyDown={onKeyDown}>
          {children[0]}
    
          {(dropDownVisible || !hide) && (
            <BaseCol
              className={clns(
                BASE_DROPDOWN_CLS,
                "duration-300 ease-in-out fill-mode-forwards",
                [
                  dropDownVisible,
                  "animate-in fade-in slide-in-from-top-1",
                  "animate-out fade-out slide-out-to-top-1",
                ],
                menuClassName,
              )}
            >
              {children[1]}
            </BaseCol>
          )}
        </div>
      ) */
    }
}
//# sourceMappingURL=base-dropdown.js.map