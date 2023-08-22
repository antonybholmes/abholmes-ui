"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDropDown = exports.DROPDOWN_CLS = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var popover_1 = require("./ui/popover");
exports.DROPDOWN_CLS = "left-0";
function BaseDropDown(_a) {
    // const ref = useOutsideListener<HTMLDivElement>(
    //   dropDownVisible,
    //   () => onClose && onClose(),
    // )
    // const hide = useDelayHide(dropDownVisible)
    var _b = _a.dropDownVisible, dropDownVisible = _b === void 0 ? false : _b, onClose = _a.onClose, onOpenAutoFocus = _a.onOpenAutoFocus, menuClassName = _a.menuClassName, className = _a.className, children = _a.children;
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
    return ((0, jsx_runtime_1.jsxs)(popover_1.Popover, { open: dropDownVisible, children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, children: children[0] }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { onInteractOutside: function () { return _onClose(); }, onEscapeKeyDown: function () { return _onClose(); }, onOpenAutoFocus: onOpenAutoFocus, className: menuClassName, children: children[1] })] }));
    {
        /* return (
        <div ref={ref} className={cn("relative", className)} onKeyDown={onKeyDown}>
          {children[0]}
    
          {(dropDownVisible || !hide) && (
            <BaseCol
              className={cn(
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
exports.BaseDropDown = BaseDropDown;
//# sourceMappingURL=base-dropdown.js.map