import { jsx as _jsx } from "react/jsx-runtime";
import dynamic from "next/dynamic";
export var DynamicModal = dynamic(function () { return import("./modal-dialog"); }, {
    loading: function () { return _jsx("p", { children: "Loading..." }); },
});
//# sourceMappingURL=dynamic-dialog.js.map