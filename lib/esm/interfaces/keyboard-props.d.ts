import type { KeyboardEvent } from "react";
export default interface IKeyboardProps {
    onKeyDown?: (e: KeyboardEvent) => void;
}
