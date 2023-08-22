import { jsx as _jsx } from "react/jsx-runtime";
import dynamic from "next/dynamic";
export var DynamicThemeMenu = dynamic(function () { return import("./theme-menu"); }, {
    loading: function () { return _jsx("p", { children: "Loading..." }); },
});
//# sourceMappingURL=dynamic-theme-menu.js.map