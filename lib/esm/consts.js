// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import { clns } from "./lib/class-names";
import { FOCUS_RING_CLS, INPUT_BORDER_CLS, INPUT_DARK_BORDER_CLS } from "./theme";
export const LOGIN_ROUTE = "/login";
export const ORDER_ITEM_TEXT = "Order Item";
export const ORDER_BUTTON_TEXT = "Order";
export const DELETE_TEXT = "Delete";
export const NO_RESULTS_TEXT = "Nothing to see here.";
export const ALT_TEXT_CLS = "text-gray-400 dark:text-gray-500";
export const CENTER_CONTENT_CLS = "flex flex-col h-screen pt-8 md:pt-16 items-center gap-y-8";
export const BASE_FORM_CLS = "flex flex-col gap-y-4 text-sm";
export const FORM_CLS = clns(BASE_FORM_CLS, "w-11/12 lg:w-1/2");
export const FORM_DIV_CLS = clns("p-4 lg:p-8 flex flex-col gap-y-4 rounded-lg border", INPUT_DARK_BORDER_CLS);
export const FORM_BLOCK_CLS = "flex flex-col gap-y-2";
export const INPUT_LABEL_CLS = "text-xs font-semibold text-gray-400 dark:text-gray-500 tracking-wide";
export const INPUT_CLS = clns(FOCUS_RING_CLS, INPUT_BORDER_CLS, INPUT_DARK_BORDER_CLS, "outline-none border-b py-1 text-sm");
export const TABLE_CLS = "text-sm";
export const TD_CLS = "p-2 align-top";
export const TH_CLS = clns(TD_CLS, "text-left font-bold text-xs text-gray-500 dark:text-gray-200");
export const FILTER_BUTTON_CLS = "px-2 py-1.5 text-theme-500 border border-theme-300 rounded-full";
export const ALT_TR_CLS = "bg-gray-100";
export const TBODY_CLS = "border border-gray-200 bg-white text-sm";
export const SIDE_DROPDOWN_CLS = clns("border-b border-gray-200", INPUT_DARK_BORDER_CLS);
export const CHEVRON_CLS = "stroke-gray-600 dark:stroke-white";
export const STATUS_CODE_OK = 200;
export const STATUS_SUCCESS = "success";
export const STATUS_FAIL = "fail";
export const COLOR_THEME = "color-theme";
//# sourceMappingURL=consts.js.map