import { jsx as _jsx } from "react/jsx-runtime";
import dynamic from "next/dynamic";
export var DynamicUserMenu = dynamic(function () { return import("./user-menu"); }, {
    loading: function () { return _jsx("p", { children: "Loading..." }); },
});
//# sourceMappingURL=dynamic-user-menu.js.map