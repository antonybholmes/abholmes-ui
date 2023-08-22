import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import BaseCol from "@components/base-col";
import { BaseRow } from "@components/base-row";
import { BASE_BUTTON_CLS, CENTERED_BUTTON_CLS, FOCUS_RING_CLS, PILL_BUTTON_CLS, } from "@theme";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/class-names";
import { BaseButton } from "./button/base-button";
export const PILL_CLS = cn(BASE_BUTTON_CLS, FOCUS_RING_CLS, PILL_BUTTON_CLS, CENTERED_BUTTON_CLS, "px-4 py-2 text-xs font-bold");
export const SELECTED_PILL_CLS = "trans-300 absolute bottom-0 left-0 top-0 z-0 block h-full rounded-full bg-theme-100 transition-all dark:bg-gray-600";
export default function PillTabs({ tabs, activeTabIndex = 0, onTabClick, }) {
    const [tabUnderlineProps, setTabUnderlineProps] = useState([0, 0]);
    const tabsRef = useRef([]);
    useEffect(() => {
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
    return (_jsx(_Fragment, { children: _jsxs(BaseCol, { className: "gap-y-1", children: [_jsxs("div", { className: "relative", children: [_jsx(BaseRow, { className: "relative z-10 gap-x-1", children: tabs.map((tab, idx) => {
                                return (_jsx(BaseButton, { ref: (el) => (tabsRef.current[idx] = el), className: cn(PILL_CLS, [
                                        idx === activeTabIndex,
                                        "text-theme-500 dark:text-gray-50",
                                        "hover:bg-accent",
                                    ]), onClick: (e) => _onClick(e, idx), children: tab.tab }, idx));
                            }) }), _jsx("span", { className: SELECTED_PILL_CLS, style: {
                                left: tabUnderlineProps[0],
                                width: tabUnderlineProps[1],
                            } })] }), tabs[activeTabIndex].content && tabs[activeTabIndex].content] }) }));
}
//# sourceMappingURL=pill-tabs.js.map