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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BaseCol from "@components/base-col";
import PrimaryButton from "@components/button/primary-button";
import Toolbar from "@components/toolbar/toolbar";
import { makeAuthBearerHeader } from "@lib/auth";
import { fetchPostJsonArray } from "@lib/url";
import { useState } from "react";
import { BASE_FORM_CLS, CENTER_CONTENT_CLS, FORM_CLS, FORM_DIV_CLS, INPUT_CLS, INPUT_LABEL_CLS, INVITE_USER_URL, } from "src/consts";
export default function InvitePage(_a) {
    var session = _a.session;
    var _b = useState(""), email = _b[0], setEmail = _b[1];
    var _c = useState(null), alert = _c[0], setAlert = _c[1];
    function onSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var config, alert, emails, _i, emails_1, e_1, body, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        config = makeAuthBearerHeader(session);
                        alert = {
                            message: "There was an issue sending invites.",
                            success: false,
                        };
                        emails = email.split(",").map(function (e) { return e.trim(); });
                        _i = 0, emails_1 = emails;
                        _a.label = 1;
                    case 1:
                        if (!(_i < emails_1.length)) return [3 /*break*/, 4];
                        e_1 = emails_1[_i];
                        body = { email: e_1 };
                        return [4 /*yield*/, fetchPostJsonArray(INVITE_USER_URL, body, config)];
                    case 2:
                        data = _a.sent();
                        if (data.length > 0 && data[0].success) {
                            alert = {
                                message: "The invitations were sent.",
                                success: true,
                            };
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return (_jsxs("main", { className: "flex h-screen flex-col", children: [_jsx(Toolbar, { tab: "Password Reset", session: session, alert: alert }), _jsx("div", { className: CENTER_CONTENT_CLS, children: _jsxs(BaseCol, { className: FORM_CLS, children: [_jsxs("div", { children: [_jsx("h1", { className: "text-lg font-bold", children: "Invite members" }), _jsx("p", { children: "Enter a comma separated list of people you want to invite to the group." })] }), _jsxs("form", { method: "post", className: BASE_FORM_CLS, onSubmit: onSubmit, children: [_jsx("div", { className: FORM_DIV_CLS, children: _jsxs("div", { className: "flex flex-col gap-y-2", children: [_jsx("label", { htmlFor: "email", className: INPUT_LABEL_CLS, children: "Email:" }), _jsx("input", { id: "email", type: "email", name: "email", "aria-label": "Email", value: email, className: INPUT_CLS, onChange: function (e) { return setEmail(e.target.value); } })] }) }), _jsx("div", { children: _jsx(PrimaryButton, { "aria-label": "Invite", children: "Invite" }) })] })] }) })] }));
}
//# sourceMappingURL=invite-page.js.map