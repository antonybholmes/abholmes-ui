import { jsx as _jsx } from "react/jsx-runtime";
import { STATUS_SUCCESS } from "@/consts";
import HCenterRow from "@components/h-center-row";
import cn from "@lib/class-names";
export var CLS_ALERT = "h-10 shrink-0 text-sm font-semibold items-center";
export var CLS_GREEN_ALERT = "bg-green-200 text-green-600 dark:bg-green-200/10";
export var CLS_RED_ALERT = "bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-700";
export default function Alert(_a) {
    var alert = _a.alert, className = _a.className;
    return (_jsx(HCenterRow, { className: cn(CLS_ALERT, [
            alert !== null && alert !== undefined,
            [(alert === null || alert === void 0 ? void 0 : alert.status) === STATUS_SUCCESS, CLS_GREEN_ALERT, CLS_RED_ALERT],
        ], className), children: alert && alert.message }));
}
//# sourceMappingURL=alert.js.map