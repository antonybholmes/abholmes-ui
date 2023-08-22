"use client";
import { DEFAULT_PAGE_RANGE, } from "..lib/types";
import BaseCol from "@components/base-col";
import OrderStatusAutocompleteSelect from "@components/content/order-status-autocomplete-select";
import OrdersList from "@components/content/order/orders-list";
import PrimaryButtonLink from "@components/link/primary-button-link";
import SearchBar from "@components/search-bar";
import Toolbar from "@components/toolbar/toolbar";
import SideLayout from "@layouts/side-layout";
import { useState } from "react";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ORDER_ITEM_TEXT, ORDER_ROUTE } from "src/consts";
import MemberAutocompleteSelect from "../content/member-autocomplete-select";
import VendorAutocompleteSelect from "../content/vendor-autocomplete-select";
export default function OrdersPage(_a) {
    var session = _a.session, vendors = _a.vendors, members = _a.members, orderStatuses = _a.orderStatuses, urlDates = _a.urlDates, _b = _a.urlPages, urlPages = _b === void 0 ? DEFAULT_PAGE_RANGE : _b, _c = _a.urlStatus, urlStatus = _c === void 0 ? new Set() : _c;
    var _d = useState(new Set()), selectedVendors = _d[0], setSelectedVendors = _d[1];
    var _e = useState(new Set()), requestedBy = _e[0], setRequestedBy = _e[1];
    var _f = useState(urlStatus), status = _f[0], setStatus = _f[1];
    var _g = useState(""), search = _g[0], setSearch = _g[1];
    function _onVendorClick(selected) {
        setSelectedVendors(new Set(selected.map(function (item) { return item.name; })));
    }
    function _onMemberClick(selected) {
        setRequestedBy(new Set(selected.map(function (item) { return item.name; })));
    }
    function _onStatusClick(selected) {
        setStatus(new Set(selected.map(function (item) { return item.name; })));
    }
    function _onSearchChange(e) {
        // only search on at least 2 letters
        setSearch(e.target.value);
    }
    function _onSearchClick(e) {
        setSearch(e.currentTarget.value);
    }
    return (_jsxs(_Fragment, { children: [_jsx(Toolbar, { session: session, tab: "Orders", showAlert: false, middle: _jsx(SearchBar, { id: "orders-search", search: search, onChange: _onSearchChange, onClick: _onSearchClick, onClearClick: function () { return setSearch(""); } }), small: _jsx(SearchBar, { id: "orders-search-small", search: search, onChange: _onSearchChange, onClick: _onSearchClick, onClearClick: function () { return setSearch(""); } }) }), _jsxs(SideLayout, { children: [_jsxs("div", { className: "flex flex-col gap-y-12 text-xs", slot: "side", children: [_jsx(PrimaryButtonLink, { "aria-label": ORDER_ITEM_TEXT, className: "w-full", href: ORDER_ROUTE, children: ORDER_ITEM_TEXT }), _jsxs(BaseCol, { className: "gap-y-2", children: [_jsx(VendorAutocompleteSelect, { vendors: vendors, onClick: _onVendorClick }), _jsx(MemberAutocompleteSelect, { name: "Requested By", members: members, onClick: _onMemberClick }), _jsx(OrderStatusAutocompleteSelect, { items: orderStatuses, onClick: _onStatusClick, selectedMap: status })] })] }), _jsx(OrdersList, { search: search, status: status, session: session, urlDates: urlDates, urlPages: urlPages, selectedVendors: selectedVendors, requestedBy: requestedBy, onStatusClick: _onStatusClick, orderStatuses: orderStatuses, onSearchChange: _onSearchChange, onSearchClick: _onSearchClick })] })] }));
}
//# sourceMappingURL=orders-page.js.map