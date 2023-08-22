import type IFieldMap from "@interfaces/field-map";
import type INumberMap from "@interfaces/number-map";
export default function useAxios(url: string, params: IFieldMap): {
    data: any;
    error: any;
    loading: boolean;
};
export declare function useGetAxios(url: string, params: IFieldMap): {
    data: any;
    error: any;
    loading: boolean;
};
export declare function usePostAxios(url: string, params: IFieldMap): {
    data: any;
    error: any;
    loading: boolean;
};
export declare function useQueryPostAxios(url: string, params: IFieldMap): {
    rows: any[];
    stats: INumberMap;
};
