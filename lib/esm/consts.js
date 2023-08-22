// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import cn from "@lib/class-names";
import { INPUT_BORDER_CLS, INPUT_DARK_BORDER_CLS, PRIMARY_FOCUS_RING_CLS, } from "@theme";
export var DELETE_TEXT = "Delete";
export var NO_RESULTS_TEXT = "Nothing to see here.";
export var ALT_TEXT_CLS = "text-gray-400 dark:text-gray-500";
export var CENTER_CONTENT_CLS = "flex flex-col h-screen pt-8 md:pt-16 items-center gap-y-8";
export var BASE_FORM_CLS = "flex flex-col gap-y-4 text-sm";
export var FORM_CLS = cn(BASE_FORM_CLS, "w-11/12 lg:w-1/2");
export var FORM_DIV_CLS = cn("p-4 lg:p-8 flex flex-col gap-y-4 rounded-lg border", INPUT_DARK_BORDER_CLS);
export var FORM_BLOCK_CLS = "flex flex-col gap-y-2";
export var INPUT_LABEL_CLS = "text-xs font-semibold text-gray-400 dark:text-gray-500 tracking-wide";
export var INPUT_CLS = cn(PRIMARY_FOCUS_RING_CLS, INPUT_BORDER_CLS, INPUT_DARK_BORDER_CLS, "outline-none border-b py-1");
export var TABLE_CLS = "text-sm";
export var TD_CLS = "p-2 align-top";
export var TH_CLS = cn(TD_CLS, "text-left font-bold text-xs text-gray-500 dark:text-gray-200");
export var FILTER_BUTTON_CLS = "px-2 py-1.5 text-primary-500 border border-primary-300 rounded-full";
export var ALT_TR_CLS = "bg-gray-100";
export var TBODY_CLS = "border border-gray-200 bg-white text-sm";
export var SIDE_DROPDOWN_CLS = cn("border-b border-gray-200", INPUT_DARK_BORDER_CLS);
export var CHEVRON_CLS = "stroke-gray-600 dark:stroke-white";
export var STATUS_CODE_OK = 200;
export var STATUS_SUCCESS = "success";
export var STATUS_FAIL = "fail";
export var COLOR_THEME = "color-theme";
//# sourceMappingURL=consts.js.map