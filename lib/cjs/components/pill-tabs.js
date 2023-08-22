"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECTED_PILL_CLS = exports.PILL_CLS = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const base_col_1 = __importDefault(require("@components/base-col"));
const base_row_1 = require("@components/base-row");
const class_names_1 = __importDefault(require("..lib/class-names"));
const _theme_1 = require("@theme");
const react_1 = require("react");
const base_button_1 = require("./button/base-button");
exports.PILL_CLS = (0, class_names_1.default)(_theme_1.BASE_BUTTON_CLS, _theme_1.FOCUS_RING_CLS, _theme_1.PILL_BUTTON_CLS, _theme_1.CENTERED_BUTTON_CLS, "px-4 py-2 text-xs font-bold");
exports.SELECTED_PILL_CLS = "trans-300 absolute bottom-0 left-0 top-0 z-0 block h-full rounded-full bg-theme-100 transition-all dark:bg-gray-600";
function PillTabs({ tabs, activeTabIndex = 0, onTabClick, }) {
    const [tabUnderlineProps, setTabUnderlineProps] = (0, react_1.useState)([0, 0]);
    const tabsRef = (0, react_1.useRef)([]);
    (0, react_1.useEffect)(() => {
        function setTabPosition() {
            const currentTab = tabsRef.current[activeTabIndex];
            const pl = 0; //parseFloat(currentTab?.style?.paddingLeft ?? "0")
            const w = currentTab?.clientWidth ?? 0; //- 2 * pl
            setTabUnderlineProps([(currentTab?.offsetLeft ?? 0) + pl, w]);
            //onClick && onClick(activeTabIndex)
        }
        setTabPosition();
        window.addEventListener("resize", setTabPosition);
        return () => window.removeEventListener("resize", setTabPosition);
    }, [activeTabIndex]);
    function _onClick(e, index) {
        onTabClick && onTabClick(e, index);
    }
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(base_col_1.default, { className: "gap-y-1", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)(base_row_1.BaseRow, { className: "relative z-10 gap-x-1", children: tabs.map((tab, idx) => {
                                return ((0, jsx_runtime_1.jsx)(base_button_1.BaseButton, { ref: (el) => (tabsRef.current[idx] = el), className: (0, class_names_1.default)(exports.PILL_CLS, [
                                        idx === activeTabIndex,
                                        "text-theme-500 dark:text-gray-50",
                                        "hover:bg-accent",
                                    ]), onClick: (e) => _onClick(e, idx), children: tab.tab }, idx));
                            }) }), (0, jsx_runtime_1.jsx)("span", { className: exports.SELECTED_PILL_CLS, style: {
                                left: tabUnderlineProps[0],
                                width: tabUnderlineProps[1],
                            } })] }), tabs[activeTabIndex].content && tabs[activeTabIndex].content] }) }));
}
exports.default = PillTabs;
//# sourceMappingURL=pill-tabs.js.map