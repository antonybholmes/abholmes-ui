import type IFieldMap from "@interfaces/field-map";
import type INumberMap from "@interfaces/number-map";
export default function useFetch(url: string, params: IFieldMap): {
    data: any;
    error: any;
    loading: boolean;
};
export declare function useGetFetch(url: string, params: IFieldMap): {
    data: any;
    error: any;
    loading: boolean;
};
export declare function usePostFetch(url: string, body: IFieldMap, headers: IFieldMap): {
    data: any;
    error: any;
    loading: boolean;
};
export declare function useQueryPostFetch(url: string, body: IFieldMap, headers: IFieldMap): {
    stats: INumberMap;
    rows: any[];
};
