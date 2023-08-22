"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { fetchPostFormJson } from "..lib/url";
import { BASE_FORM_CLS, CENTER_CONTENT_CLS, FORM_BLOCK_CLS, FORM_CLS, FORM_DIV_CLS, INPUT_CLS, INPUT_LABEL_CLS, } from "@/consts";
import { BaseCol } from "@components/base-col";
import PrimaryButton from "@components/button/primary-button";
import InputDropdown from "@components/input-dropdown";
import BaseLink from "@components/link/base-link";
import Toolbar from "@components/toolbar/toolbar";
import { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ProfilePage(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var session = _a.session, positions = _a.positions;
    var _k = useState((_c = (_b = session.user) === null || _b === void 0 ? void 0 : _b.firstName) !== null && _c !== void 0 ? _c : ""), firstName = _k[0], setFirstName = _k[1];
    var _l = useState((_e = (_d = session.user) === null || _d === void 0 ? void 0 : _d.lastName) !== null && _e !== void 0 ? _e : ""), lastName = _l[0], setLastName = _l[1];
    var _m = useState((_g = (_f = session.user) === null || _f === void 0 ? void 0 : _f.email) !== null && _g !== void 0 ? _g : ""), email = _m[0], setEmail = _m[1];
    var _o = useState((_j = (_h = session.user) === null || _h === void 0 ? void 0 : _h.position) !== null && _j !== void 0 ? _j : ""), position = _o[0], setPosition = _o[1];
    var _p = useState(null), alert = _p[0], setAlert = _p[1];
    function onSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        formData = new FormData();
                        formData.append("firstName", firstName);
                        formData.append("lastName", lastName);
                        formData.append("email", email);
                        formData.append("position", position);
                        formData.append("session", JSON.stringify(session));
                        return [4 /*yield*/, fetchPostFormJson("/api/profile/update", formData)];
                    case 1:
                        status = _a.sent();
                        setAlert(status);
                        return [2 /*return*/];
                }
            });
        });
    }
    function onPositionClick(index, id, label, item) {
        setPosition(item.name);
    }
    return (_jsxs("main", { className: "flex h-screen flex-col", children: [_jsx(Toolbar, { session: session, tab: "Profile", alert: alert }), _jsx("div", { className: CENTER_CONTENT_CLS, children: _jsxs(BaseCol, { className: FORM_CLS, children: [_jsxs("ul", { className: "flex flex-row justify-center gap-x-1 text-sm font-semibold", children: [_jsx("li", { children: _jsx(BaseLink, { "aria-label": "Profile", href: "/profile", className: "border-theme-500 text-theme-500 block border-b-2 px-3 py-2", children: "Profile" }) }), _jsx("li", { children: _jsx(BaseLink, { "aria-label": "Profile", href: "/profile/password", className: "block border-b-2 border-transparent px-3 py-2", children: "Password" }) })] }), _jsxs("form", { method: "post", className: BASE_FORM_CLS, onSubmit: onSubmit, children: [_jsxs("div", { className: FORM_DIV_CLS, children: [_jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "firstName", className: INPUT_LABEL_CLS, children: "First name:" }), _jsx("input", { id: "firstName", name: "firstName", value: firstName, onChange: function (e) { return setFirstName(e.target.value); }, className: INPUT_CLS })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "lastName", className: INPUT_LABEL_CLS, children: "Last name:" }), _jsx("input", { id: "lastName", name: "lastName", value: lastName, onChange: function (e) { return setLastName(e.target.value); }, className: INPUT_CLS })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "email", className: INPUT_LABEL_CLS, children: "Email:" }), _jsx("input", { id: "email", type: "email", name: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, className: INPUT_CLS })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "position", className: INPUT_LABEL_CLS, children: "Position:" }), _jsx(InputDropdown, { id: "position", name: "position", items: positions, value: position, onDropClick: onPositionClick, className: clns(INPUT_CLS, "w-full lg:w-1/2 xl:w-1/3") })] })] }), _jsx("div", { children: _jsx(PrimaryButton, { "aria-label": "Save Changes", children: "Save Changes" }) })] })] }) })] }));
}
//# sourceMappingURL=profile-page.js.map