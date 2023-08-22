import { jsx as _jsx } from "react/jsx-runtime";
import dynamic from "next/dynamic";
export var DynamicTooltip = dynamic(function () { return import("./tooltip"); }, {
    loading: function () { return _jsx("p", { children: "Loading..." }); },
});
//# sourceMappingURL=dynamic-tooltip.js.map