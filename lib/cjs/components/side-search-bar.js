"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const search_bar_1 = __importDefault(require("./search-bar"));
function SideSearchBar({ search, onChange, onClick }) {
    return ((0, jsx_runtime_1.jsx)(search_bar_1.default, { id: "side-search", search: search, onChange: onChange, onClick: onClick }));
}
exports.default = SideSearchBar;
//# sourceMappingURL=side-search-bar.js.map