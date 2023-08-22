import { useEffect, useState } from "react";
export default function useFetch(url, params) {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
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
    useEffect(() => {
        fetchData(url, params);
    }, []); // execute once only
    return { data, error, loading };
}
export function useGetFetch(url, params) {
    return useFetch(url, { ...params, method: "GET" });
}
export function usePostFetch(url, body, headers) {
    return useFetch(url, { body: JSON.stringify(body), headers, method: "POST" });
}
export function useQueryPostFetch(url, body, headers) {
    const [rows, setRows] = useState([]);
    const [stats, setStats] = useState({});
    const { data, loading, error } = usePostFetch(url, body, headers);
    useEffect(() => {
        if (data?.length > 0) {
            setStats(data[0].stats);
            setRows(data[0].rows);
        }
    }, [data]);
    return { stats, rows };
}
//# sourceMappingURL=use-fetch.js.map