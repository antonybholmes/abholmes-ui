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
import { fetchPostJsonQueryStatus } from "..lib/url";
import PrimaryButton from "@components/button/primary-button";
import CatalogAutocomplete from "@components/content/catalog-autocomplete";
import VendorAutocomplete from "@components/content/vendor-autocomplete";
import Toolbar from "@components/toolbar/toolbar";
import { redirect } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ADD_PRODUCT_URL, CENTER_CONTENT_CLS, FORM_BLOCK_CLS, FORM_CLS, FORM_DIV_CLS, INPUT_CLS, INPUT_LABEL_CLS, INVENTORY_ROUTE, STATUS_SUCCESS, } from "src/consts";
export default function AddProductPage(_a) {
    var session = _a.session, items = _a.items, inventoryTypes = _a.inventoryTypes, vendors = _a.vendors, className = _a.className;
    var _b = useState(""), name = _b[0], setName = _b[1];
    var _c = useState(""), catalog = _c[0], setCatalog = _c[1];
    var _d = useState(""), vendor = _d[0], setVendor = _d[1];
    var _e = useState(""), unit = _e[0], setUnit = _e[1];
    //const [quantity, setQuantity] = useState(1)
    var _f = useState(0), price = _f[0], setPrice = _f[1];
    var _g = useState(""), url = _g[0], setURL = _g[1];
    var _h = useState(null), alert = _h[0], setAlert = _h[1];
    var nameRef = useRef(null);
    useEffect(function () {
        if (items.length > 0) {
            setName(items[0].name);
            setVendor(items[0].vendor);
            setCatalog(items[0].catalog);
            setUnit(items[0].unit);
            setURL(items[0].url);
            setPrice(items[0].price);
        }
    }, [items]);
    function onChange(text) {
        setVendor(text);
    }
    function onNameChange(e) {
        setName(e.target.value);
    }
    function onURLChange(e) {
        setURL(e.target.value);
    }
    // function onQuantityChange(e: ChangeEvent<HTMLInputElement>) {
    //   try {
    //     setQuantity(parseInt((e.target as HTMLInputElement).value))
    //   } catch (error) {
    //     setQuantity(1)
    //   }
    // }
    function onPriceChange(e) {
        try {
            setPrice(parseFloat(e.target.value));
        }
        catch (error) {
            setPrice(0);
        }
    }
    function onCatalogClick(index, id, label, item) {
        setName(item.name);
        setURL(item.url);
    }
    function onSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var config, body, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        config = makeAuthBearerHeader(session);
                        body = { vendor: vendor, name: name, catalog: catalog, unit: unit, price: price, url: url };
                        return [4 /*yield*/, fetchPostJsonQueryStatus(ADD_PRODUCT_URL, body, config)];
                    case 1:
                        alert = _a.sent();
                        setAlert(alert);
                        return [2 /*return*/];
                }
            });
        });
    }
    if (alert && alert.status === STATUS_SUCCESS) {
        redirect(INVENTORY_ROUTE);
    }
    return (_jsxs(_Fragment, { children: [_jsx(Toolbar, { session: session, tab: "Add Product", alert: alert }), _jsx("div", { className: CENTER_CONTENT_CLS, children: _jsxs("form", { method: "post", className: clns(FORM_CLS, className), onSubmit: onSubmit, children: [_jsx("h1", { className: "text-lg font-bold", children: "Add Product" }), _jsxs("div", { className: FORM_DIV_CLS, children: [_jsxs("div", { className: "grid w-full grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2", children: [_jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "vendor", className: INPUT_LABEL_CLS, children: "Vendor:" }), _jsx(VendorAutocomplete, { vendors: vendors, onChange: onChange, className: INPUT_CLS, value: vendor })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "catalog", className: INPUT_LABEL_CLS, children: "Catalog:" }), _jsx(CatalogAutocomplete, { session: session, value: catalog, className: INPUT_CLS, onDropClick: onCatalogClick })] })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "name", className: INPUT_LABEL_CLS, children: "Name:" }), _jsx("input", { ref: nameRef, id: "name", type: "text", name: "name", value: name, className: INPUT_CLS, onChange: onNameChange })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "url", className: INPUT_LABEL_CLS, children: "URL:" }), _jsx("input", { id: "url", type: "text", name: "url", value: url, className: INPUT_CLS, onChange: onURLChange })] }), _jsxs("div", { className: "grid w-full grid-cols-1 items-center gap-x-8 gap-y-4 md:grid-cols-4", children: [_jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "unit", className: INPUT_LABEL_CLS, children: "Unit:" }), _jsx("input", { id: "unit", type: "text", name: "unit", value: unit, className: INPUT_CLS, onChange: function (e) { return setUnit(e.target.value); } })] }), _jsxs("div", { className: FORM_BLOCK_CLS, children: [_jsx("label", { htmlFor: "price", className: INPUT_LABEL_CLS, children: "Price:" }), _jsx("input", { id: "price", type: "text", name: "price", value: price, className: INPUT_CLS, onChange: onPriceChange })] })] })] }), _jsx("div", { children: _jsx(PrimaryButton, { type: "submit", "aria-label": "Add Item", children: "Add Item" }) })] }) })] }));
}
//# sourceMappingURL=add-product-page.js.map