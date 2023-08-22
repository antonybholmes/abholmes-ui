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
import { makeAuthBearerHeader } from "..lib/auth";
import { cn } from "..lib/class-names";
import { fetchPostJsonQueryStatus } from "..lib/url";
import PrimaryButton from "@components/button/primary-button";
import CatalogAutocomplete from "@components/content/catalog-autocomplete";
import VendorAutocomplete from "@components/content/vendor-autocomplete";
import InputDropdown from "@components/input-dropdown";
import Toolbar from "@components/toolbar/toolbar";
import VCenterRow from "@components/v-center-row";
import { redirect } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ADD_ORDER_URL, CENTER_CONTENT_CLS, FORM_BLOCK_CLS, FORM_CLS, FORM_DIV_CLS, INPUT_CLS, INPUT_LABEL_CLS, ORDERS_ROUTE, ORDER_ITEM_TEXT, STATUS_SUCCESS, } from "src/consts";
export default function OrderPage(_a) {
    var session = _a.session, inventoryTypes = _a.inventoryTypes, vendors = _a.vendors, items = _a.items, className = _a.className;
    var _b = useState(""), name = _b[0], setName = _b[1];
    var _c = useState(""), url = _c[0], setURL = _c[1];
    var _d = useState(""), catalog = _d[0], setCatalog = _d[1];
    var _e = useState(""), unit = _e[0], setUnit = _e[1];
    var _f = useState(""), vendor = _f[0], setVendor = _f[1];
    var _g = useState(1), quantity = _g[0], setQuantity = _g[1];
    var _h = useState(0), price = _h[0], setPrice = _h[1];
    var _j = useState(""), type = _j[0], setType = _j[1];
    var _k = useState(null), alert = _k[0], setAlert = _k[1];
    var nameRef = useRef(null);
    useEffect(function () {
        if (items.length > 0) {
            setName(items[0].name);
            setVendor(items[0].vendor);
            setCatalog(items[0].catalog);
            setURL(items[0].url);
            setPrice(items[0].price);
            setType(items[0].type);
        }
    }, [items]);
    var total = useMemo(function () { return quantity * price; }, [quantity, price]);
    function onVendorChange(text) {
        setVendor(text);
    }
    function onTypeClick(index, id, label, item) {
        setType(label);
    }
    function onCatalogClick(index, id, label, item) {
        //const product = item as IProductDBItem
        setName(item.name);
        setURL(item.url);
    }
    function onSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var config, body, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        config = makeAuthBearerHeader(session);
                        body = { vendor: vendor, name: name, catalog: catalog, url: url, unit: unit, quantity: quantity, price: price, type: type };
                        return [4 /*yield*/, fetchPostJsonQueryStatus(ADD_ORDER_URL, body, config)];
                    case 1:
                        status = _a.sent();
                        setAlert(status);
                        return [2 /*return*/];
                }
            });
        });
    }
    if ((alert === null || alert === void 0 ? void 0 : alert.status) === STATUS_SUCCESS) {
        redirect(ORDERS_ROUTE);
    }
    return (_jsxs(_Fragment, { children: [_jsx(Toolbar, { session: session, tab: "Order", alert: alert }), _jsx("main", { className: CENTER_CONTENT_CLS, children: _jsxs("form", { method: "post", className: cn(FORM_CLS, className), onSubmit: onSubmit, children: [_jsx("h1", { className: "text-lg font-bold", children: "Add your order" }), _jsxs("div", { className: FORM_DIV_CLS, children: [_jsxs("div", { className: "grid w-full grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2", children: [_jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "vendor", className: INPUT_LABEL_CLS, children: "Vendor:" }), _jsx(VendorAutocomplete, { vendors: vendors, onChange: onVendorChange, className: INPUT_CLS, value: vendor })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "catalog", className: INPUT_LABEL_CLS, children: "Catalog:" }), _jsx(CatalogAutocomplete, { session: session, value: catalog, className: INPUT_CLS, onDropClick: onCatalogClick })] })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "name", className: INPUT_LABEL_CLS, children: "Name:" }), _jsx("input", { ref: nameRef, id: "name", type: "text", name: "name", value: name, className: INPUT_CLS, onChange: function (e) { return setName(e.target.value); } })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "url", className: INPUT_LABEL_CLS, children: "URL:" }), _jsx("input", { id: "url", type: "text", name: "url", value: url, className: INPUT_CLS, onChange: function (e) { return setURL(e.target.value); } })] }), _jsxs("div", { className: "grid w-full grid-cols-1 items-center gap-x-8 gap-y-4 md:grid-cols-4", children: [_jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "unit", className: INPUT_LABEL_CLS, children: "Unit:" }), _jsx("input", { id: "unit", type: "text", name: "unit", value: unit, onChange: function (e) { return setUnit(e.target.value); }, className: INPUT_CLS })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "quantity", className: INPUT_LABEL_CLS, children: "Quantity:" }), _jsx("input", { id: "quantity", type: "text", name: "quantity", value: quantity, className: INPUT_CLS, onChange: function (e) { return setQuantity(parseFloat(e.target.value)); } })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "price", className: INPUT_LABEL_CLS, children: "Price:" }), _jsx("input", { id: "price", type: "text", name: "price", value: price, className: INPUT_CLS, onChange: function (e) { return setPrice(parseFloat(e.target.value)); } })] }), _jsx("div", { className: FORM_BLOCK_CLS, children: _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("p", { className: INPUT_LABEL_CLS, children: "Total:" }), _jsx("p", { children: _jsxs("strong", { children: ["$", total] }) })] }) })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "type", className: INPUT_LABEL_CLS, children: "Type:" }), _jsx(VCenterRow, { children: _jsx(InputDropdown, { id: "type", name: "type", value: type, items: inventoryTypes, className: cn(INPUT_CLS, "w-44"), menuClassName: "w-44", onDropClick: onTypeClick }) })] })] }), _jsx("div", { children: _jsx(PrimaryButton, { "aria-label": ORDER_ITEM_TEXT, children: ORDER_ITEM_TEXT }) })] }) })] }));
}
//# sourceMappingURL=order-page.js.map