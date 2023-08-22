"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQueryPostFetch = exports.usePostFetch = exports.useGetFetch = void 0;
const react_1 = require("react");
function useFetch(url, params) {
    const [data, setData] = (0, react_1.useState)(undefined);
    const [error, setError] = (0, react_1.useState)("");
    const [loading, setLoading] = (0, react_1.useState)(true);
    const fetchData = async (url, params) => {
        //console.log({ ...params, url })
        try {
            const response = await fetch(url, params);
            const data = await response.json();
            setData(data);
        }
        catch (e) {
            setError(e);
        }
        finally {
            setLoading(false);
        }
    };
    (0, react_1.useEffect)(() => {
        fetchData(url, params);
    }, []); // execute once only
    return { data, error, loading };
}
exports.default = useFetch;
function useGetFetch(url, params) {
    return useFetch(url, { ...params, method: "GET" });
}
exports.useGetFetch = useGetFetch;
function usePostFetch(url, body, headers) {
    return useFetch(url, { body: JSON.stringify(body), headers, method: "POST" });
}
exports.usePostFetch = usePostFetch;
function useQueryPostFetch(url, body, headers) {
    const [rows, setRows] = (0, react_1.useState)([]);
    const [stats, setStats] = (0, react_1.useState)({});
    const { data, loading, error } = usePostFetch(url, body, headers);
    (0, react_1.useEffect)(() => {
        if (data?.length > 0) {
            setStats(data[0].stats);
            setRows(data[0].rows);
        }
    }, [data]);
    return { stats, rows };
}
exports.useQueryPostFetch = useQueryPostFetch;
//# sourceMappingURL=use-fetch.js.map