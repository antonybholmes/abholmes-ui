import { RefObject } from "react";
export default function useResizeObserver<T extends HTMLElement>(ref: RefObject<T>, callback: (target: T) => void): void;
