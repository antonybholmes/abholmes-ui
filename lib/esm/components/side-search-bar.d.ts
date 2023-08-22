import type { ChangeEvent, MouseEvent } from "react";
interface IProps {
    search: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: MouseEvent) => void;
}
export default function SideSearchBar({ search, onChange, onClick }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
