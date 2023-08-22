import { STATUS_SUCCESS } from "@/consts";
import HCenterRow from "@components/h-center-row";
import { jsx as _jsx } from "react/jsx-runtime";
export const CLS_ALERT = "h-10 shrink-0 text-sm font-semibold items-center";
export const CLS_GREEN_ALERT = "bg-green-200 text-green-600 dark:bg-green-200/10";
export const CLS_RED_ALERT = "bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-700";
export default function Alert({ alert, className }) {
    return (_jsx(HCenterRow, { className: clns(CLS_ALERT, [
            alert !== null && alert !== undefined,
            [alert?.status === STATUS_SUCCESS, CLS_GREEN_ALERT, CLS_RED_ALERT],
        ], className), children: alert && alert.message }));
}
//# sourceMappingURL=alert.js.map