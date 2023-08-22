"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLS_RED_ALERT = exports.CLS_GREEN_ALERT = exports.CLS_ALERT = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = __importDefault(require("..lib/class-names"));
const consts_1 = require("@/consts");
const h_center_row_1 = __importDefault(require("@components/h-center-row"));
exports.CLS_ALERT = "h-10 shrink-0 text-sm font-semibold items-center";
exports.CLS_GREEN_ALERT = "bg-green-200 text-green-600 dark:bg-green-200/10";
exports.CLS_RED_ALERT = "bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-700";
function Alert({ alert, className }) {
    return ((0, jsx_runtime_1.jsx)(h_center_row_1.default, { className: (0, class_names_1.default)(exports.CLS_ALERT, [
            alert !== null && alert !== undefined,
            [alert?.status === consts_1.STATUS_SUCCESS, exports.CLS_GREEN_ALERT, exports.CLS_RED_ALERT],
        ], className), children: alert && alert.message }));
}
exports.default = Alert;
//# sourceMappingURL=alert.js.map