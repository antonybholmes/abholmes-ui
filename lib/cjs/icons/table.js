"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icon_props_1 = require("../interfaces/icon-props");
const class_names_1 = __importDefault(require("../lib/class-names"));
function TableIcon({ size = "w-4", className }) {
    return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", className: (0, class_names_1.default)(icon_props_1.ICON_CLS, size, className), children: (0, jsx_runtime_1.jsx)("path", { d: "M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" }) }));
}
exports.TableIcon = TableIcon;
//# sourceMappingURL=table.js.map