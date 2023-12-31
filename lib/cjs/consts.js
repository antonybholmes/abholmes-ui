"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLOR_THEME = exports.STATUS_FAIL = exports.STATUS_SUCCESS = exports.STATUS_CODE_OK = exports.CHEVRON_CLS = exports.SIDE_DROPDOWN_CLS = exports.TBODY_CLS = exports.ALT_TR_CLS = exports.FILTER_BUTTON_CLS = exports.TH_CLS = exports.TD_CLS = exports.TABLE_CLS = exports.INPUT_CLS = exports.INPUT_LABEL_CLS = exports.FORM_BLOCK_CLS = exports.FORM_DIV_CLS = exports.FORM_CLS = exports.BASE_FORM_CLS = exports.CENTER_CONTENT_CLS = exports.ALT_TEXT_CLS = exports.NO_RESULTS_TEXT = exports.DELETE_TEXT = void 0;
// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
var class_names_1 = __importDefault(require("@lib/class-names"));
var _theme_1 = require("@theme");
exports.DELETE_TEXT = "Delete";
exports.NO_RESULTS_TEXT = "Nothing to see here.";
exports.ALT_TEXT_CLS = "text-gray-400 dark:text-gray-500";
exports.CENTER_CONTENT_CLS = "flex flex-col h-screen pt-8 md:pt-16 items-center gap-y-8";
exports.BASE_FORM_CLS = "flex flex-col gap-y-4 text-sm";
exports.FORM_CLS = (0, class_names_1.default)(exports.BASE_FORM_CLS, "w-11/12 lg:w-1/2");
exports.FORM_DIV_CLS = (0, class_names_1.default)("p-4 lg:p-8 flex flex-col gap-y-4 rounded-lg border", _theme_1.INPUT_DARK_BORDER_CLS);
exports.FORM_BLOCK_CLS = "flex flex-col gap-y-2";
exports.INPUT_LABEL_CLS = "text-xs font-semibold text-gray-400 dark:text-gray-500 tracking-wide";
exports.INPUT_CLS = (0, class_names_1.default)(_theme_1.PRIMARY_FOCUS_RING_CLS, _theme_1.INPUT_BORDER_CLS, _theme_1.INPUT_DARK_BORDER_CLS, "outline-none border-b py-1");
exports.TABLE_CLS = "text-sm";
exports.TD_CLS = "p-2 align-top";
exports.TH_CLS = (0, class_names_1.default)(exports.TD_CLS, "text-left font-bold text-xs text-gray-500 dark:text-gray-200");
exports.FILTER_BUTTON_CLS = "px-2 py-1.5 text-primary-500 border border-primary-300 rounded-full";
exports.ALT_TR_CLS = "bg-gray-100";
exports.TBODY_CLS = "border border-gray-200 bg-white text-sm";
exports.SIDE_DROPDOWN_CLS = (0, class_names_1.default)("border-b border-gray-200", _theme_1.INPUT_DARK_BORDER_CLS);
exports.CHEVRON_CLS = "stroke-gray-600 dark:stroke-white";
exports.STATUS_CODE_OK = 200;
exports.STATUS_SUCCESS = "success";
exports.STATUS_FAIL = "fail";
exports.COLOR_THEME = "color-theme";
//# sourceMappingURL=consts.js.map