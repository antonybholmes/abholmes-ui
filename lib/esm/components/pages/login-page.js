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
import { BASE_FORM_CLS, CENTER_CONTENT_CLS, FORM_BLOCK_CLS, FORM_CLS, FORM_DIV_CLS, INPUT_CLS, INPUT_LABEL_CLS, ORDERS_ROUTE, SEND_PASSWORD_RESET_ROUTE, STATUS_SUCCESS, } from "@/consts";
import BaseCol from "@components/base-col";
import PrimaryButton from "@components/button/primary-button";
import BlueLink from "@components/link/blue-link";
import Toolbar from "@components/toolbar/toolbar";
import VCenterRow from "@components/v-center-row";
import { redirect } from "next/navigation";
import { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function LoginPage(_a) {
    var session = _a.session;
    var _b = useState(""), email = _b[0], setEmail = _b[1];
    var _c = useState(""), password = _c[0], setPassword = _c[1];
    var _d = useState(null), alert = _d[0], setAlert = _d[1];
    function onSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        formData = new FormData();
                        formData.append("email", email);
                        formData.append("password", password);
                        return [4 /*yield*/, fetchPostFormJson("/api/login", formData)];
                    case 1:
                        status = _a.sent();
                        setAlert(status);
                        return [2 /*return*/];
                }
            });
        });
    }
    if (alert && (alert === null || alert === void 0 ? void 0 : alert.status) === STATUS_SUCCESS) {
        redirect(ORDERS_ROUTE);
    }
    return (_jsxs("main", { className: "flex grow flex-col", children: [_jsx(Toolbar, { tab: "Join", alert: alert, session: session }), _jsx("div", { className: CENTER_CONTENT_CLS, children: _jsx(BaseCol, { className: FORM_CLS, children: _jsxs("form", { className: BASE_FORM_CLS, onSubmit: onSubmit, children: [_jsxs("div", { className: FORM_DIV_CLS, children: [_jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "email", className: INPUT_LABEL_CLS, children: "Email:" }), _jsx("input", { id: "email", name: "email", type: "email", placeholder: "Email", className: INPUT_CLS, value: email, onChange: function (e) { return setEmail(e.target.value); }, required: true })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "password", className: INPUT_LABEL_CLS, children: "Password:" }), _jsx("input", { id: "password", name: "password", type: "password", placeholder: "Password", className: INPUT_CLS, value: password, onChange: function (e) { return setPassword(e.target.value); }, required: true, minLength: 4 })] })] }), _jsxs(VCenterRow, { className: "justify-between", children: [_jsx(PrimaryButton, { type: "submit", "aria-label": "Login", children: "Login" }), _jsx(BlueLink, { href: SEND_PASSWORD_RESET_ROUTE, "aria-label": "Login", className: "text-sm font-bold", children: "Forgot Password?" })] })] }) }) })] }));
}
//# sourceMappingURL=login-page.js.map