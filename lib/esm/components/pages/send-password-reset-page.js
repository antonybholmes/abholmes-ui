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
import { fetchPostJsonQueryStatus } from "..lib/url";
import { BaseCol } from "@components/base-col";
import PrimaryButton from "@components/button/primary-button";
import Toolbar from "@components/toolbar/toolbar";
import { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { APP_NAME, BASE_FORM_CLS, CENTER_CONTENT_CLS, FORM_BLOCK_CLS, FORM_CLS, FORM_DIV_CLS, INPUT_CLS, INPUT_LABEL_CLS, SEND_RESET_PASSWORD_URL, } from "src/consts";
export default function SendPasswordResetPage() {
    var _a = useState(""), email = _a[0], setEmail = _a[1];
    var _b = useState(null), alert = _b[0], setAlert = _b[1];
    function onSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var body, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        body = { email: email };
                        return [4 /*yield*/, fetchPostJsonQueryStatus(SEND_RESET_PASSWORD_URL, body, {})];
                    case 1:
                        status = _a.sent();
                        setAlert(status);
                        return [2 /*return*/];
                }
            });
        });
    }
    return (_jsxs("main", { className: "flex h-screen flex-col", children: [_jsx(Toolbar, { tab: "Password Reset", alert: alert }), _jsx("div", { className: CENTER_CONTENT_CLS, children: _jsxs(BaseCol, { className: FORM_CLS, children: [_jsxs("div", { children: [_jsx("h1", { className: "text-lg font-bold", children: "Forgot your password?" }), _jsx("p", { children: "Enter the email address you used to create your ".concat(APP_NAME, " account. We'll send you an email with instructions to reset your password.") })] }), _jsxs("form", { method: "post", className: BASE_FORM_CLS, onSubmit: onSubmit, children: [_jsx("div", { className: FORM_DIV_CLS, children: _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "email", className: INPUT_LABEL_CLS, children: "Email:" }), _jsx("input", { id: "email", type: "email", name: "email", className: INPUT_CLS, value: email, onChange: function (e) { return setEmail(e.target.value); } })] }) }), _jsx("div", { children: _jsx(PrimaryButton, { "aria-label": "Invite", children: "Send Password Reset" }) })] })] }) })] }));
}
//# sourceMappingURL=send-password-reset-page.js.map