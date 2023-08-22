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
import { BASE_FORM_CLS, CENTER_CONTENT_CLS, FORM_BLOCK_CLS, FORM_CLS, FORM_DIV_CLS, INPUT_CLS, INPUT_LABEL_CLS, JOIN_URL, STATUS_FAIL, STATUS_SUCCESS, } from "@/consts";
import BaseCol from "@components/base-col";
import PrimaryButton from "@components/button/primary-button";
import Toolbar from "@components/toolbar/toolbar";
import { makeBaseAuthBearerHeader } from "@lib/auth";
import { fetchPostJsonQueryStatus } from "@lib/url";
import { useState } from "react";
export default function JoinPage(_a) {
    var token = _a.token, email = _a.email;
    var _b = useState(""), firstName = _b[0], setFirstName = _b[1];
    var _c = useState(""), lastName = _c[0], setLastName = _c[1];
    var _d = useState(""), password = _d[0], setPassword = _d[1];
    var _e = useState(""), retypePassword = _e[0], setRetypePassword = _e[1];
    var _f = useState(null), alert = _f[0], setAlert = _f[1];
    function onSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var config, body, status_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        if (!(password === retypePassword)) return [3 /*break*/, 2];
                        config = makeBaseAuthBearerHeader(token);
                        body = { token: token, firstName: firstName, lastName: lastName, email: email, password: password };
                        return [4 /*yield*/, fetchPostJsonQueryStatus(JOIN_URL, body, config)];
                    case 1:
                        status_1 = _a.sent();
                        if (status_1.status === STATUS_SUCCESS) {
                            setAlert({
                                message: "Account created successfully. You can now login.",
                                status: STATUS_SUCCESS,
                            });
                            //return Astro.redirect(LOGIN_ROUTE)
                        }
                        else {
                            setAlert({
                                message: "There was an error creating your account. Please contact your group admin.",
                                status: STATUS_FAIL,
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        setAlert({ message: "Your passwords do not match.", status: STATUS_FAIL });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return (_jsxs("main", { className: "flex h-screen flex-col", children: [_jsx(Toolbar, { tab: "Join", alert: alert }), _jsx("div", { className: CENTER_CONTENT_CLS, children: _jsx(BaseCol, { className: FORM_CLS, children: _jsxs("form", { method: "post", className: BASE_FORM_CLS, onSubmit: onSubmit, children: [_jsxs("div", { className: FORM_DIV_CLS, children: [_jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "firstName", className: INPUT_LABEL_CLS, children: "First name:" }), _jsx("input", { id: "firstName", name: "firstName", value: firstName, onChange: function (e) { return setFirstName(e.target.value); }, className: INPUT_CLS })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "lastName", className: INPUT_LABEL_CLS, children: "Last name:" }), _jsx("input", { id: "lastName", name: "lastName", value: lastName, onChange: function (e) { return setLastName(e.target.value); }, className: INPUT_CLS })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "email", className: INPUT_LABEL_CLS, children: "Email:" }), _jsx("input", { id: "email", type: "email", name: "email", value: email, readOnly: true, className: INPUT_CLS })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "newPassword", className: INPUT_LABEL_CLS, children: "New Password:" }), _jsx("input", { id: "newPassword", name: "newPassword", type: "password", minLength: 4, value: password, onChange: function (e) { return setPassword(e.target.value); }, className: INPUT_CLS })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "retypePassword", className: INPUT_LABEL_CLS, children: "Retype New Password:" }), _jsx("input", { id: "retypePassword", type: "password", name: "retypePassword", value: retypePassword, onChange: function (e) { return setRetypePassword(e.target.value); }, className: INPUT_CLS })] })] }), _jsx("div", { children: _jsx(PrimaryButton, { "aria-label": "Save Changes", children: "Save Changes" }) })] }) }) })] }));
}
//# sourceMappingURL=join-page.js.map