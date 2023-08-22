import BaseCol from "@components/base-col";
import { BaseRow } from "@components/base-row";
import cn from "@lib/class-names";
import { BASE_BUTTON_CLS, CENTERED_BUTTON_CLS, FOCUS_RING_CLS, ROUNDED_BUTTON_CLS, } from "@theme";
import { useEffect, useRef, useState } from "react";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BaseButton from "./button/base-button";
var TAB_CLS = cn(BASE_BUTTON_CLS, FOCUS_RING_CLS, CENTERED_BUTTON_CLS, ROUNDED_BUTTON_CLS, "px-2 py-3.5 text-xs font-semibold");
var LINE_CLS = "trans-300 absolute bottom-0 left-0 z-0 block bg-theme-400 transition-all dark:bg-gray-600";
export default function LineTabs(_a) {
    var tabs = _a.tabs, _b = _a.activeTabIndex, activeTabIndex = _b === void 0 ? 0 : _b, onTabClick = _a.onTabClick, className = _a.className;
    var _c = useState([0, 0]), tabUnderlineProps = _c[0], setTabUnderlineProps = _c[1];
    var tabsRef = useRef([]);
    useEffect(function () {
        function setTabPosition() {
            var _a, _b;
            var currentTab = tabsRef.current[activeTabIndex];
            var pl = 0; //parseFloat(currentTab?.style?.paddingLeft ?? "0")
            var w = (_a = currentTab === null || currentTab === void 0 ? void 0 : currentTab.clientWidth) !== null && _a !== void 0 ? _a : 0; //- 2 * pl
            setTabUnderlineProps([((_b = currentTab === null || currentTab === void 0 ? void 0 : currentTab.offsetLeft) !== null && _b !== void 0 ? _b : 0) + pl, w]);
            //onClick && onClick(activeTabIndex)
        }
        setTabPosition();
        window.addEventListener("resize", setTabPosition);
        return function () { return window.removeEventListener("resize", setTabPosition); };
    }, [activeTabIndex]);
    function _onClick(e, index) {
        onTabClick && onTabClick(e, index);
    }
    return (_jsx(_Fragment, { children: _jsxs(BaseCol, { className: cn("gap-y-1", className), children: [_jsxs("div", { className: "relative", children: [_jsx(BaseRow, { className: "relative z-10 gap-x-1", children: tabs.map(function (tab, idx) {
                                return (_jsx(BaseButton, { ref: function (el) { return (tabsRef.current[idx] = el); }, className: cn(TAB_CLS, [
                                        idx === activeTabIndex,
                                        "text-theme-500 dark:text-gray-50",
                                        "hover:bg-accent",
                                    ]), onClick: function (e) { return _onClick(e, idx); }, children: tab.tab }, idx));
                            }) }), _jsx("span", { className: LINE_CLS, style: {
                                left: tabUnderlineProps[0],
                                width: tabUnderlineProps[1],
                                height: 2,
                            } })] }), tabs[activeTabIndex].content && tabs[activeTabIndex].content] }) }));
}
//# sourceMappingURL=line-tabs.js.map