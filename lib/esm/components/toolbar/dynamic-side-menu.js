import { jsx as _jsx } from "react/jsx-runtime";
import dynamic from "next/dynamic";
export var DynamicSideMenu = dynamic(function () { return import("./side-menu"); }, {
    loading: function () { return _jsx("p", { children: "Loading..." }); },
});
//# sourceMappingURL=dynamic-side-menu.js.map