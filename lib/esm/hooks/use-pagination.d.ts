import type { IPageRange } from "@/lib/types";
export interface IPaginationProps {
    totalCount: number;
    page: IPageRange;
    siblingCount?: number;
}
export declare const DOTS = "...";
export declare function usePagination({ totalCount, page, siblingCount, }: IPaginationProps): (string | number)[] | undefined;
