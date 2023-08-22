interface IBreakpoint {
    name: string;
    px: number;
}
export declare const BREAKPOINT_XL: IBreakpoint;
export declare const BREAKPOINTS: {
    [key: string]: IBreakpoint;
};
export default function useBreakPoint(): IBreakpoint;
export {};
