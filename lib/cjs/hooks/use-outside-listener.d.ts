/// <reference types="react" />
export default function useOutsideListener<T extends HTMLElement>(show: boolean, callback: () => void): import("react").RefObject<T>;
