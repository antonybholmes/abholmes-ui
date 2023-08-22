import IButtonProps from "../../interfaces/button-props";
interface IRadioButtonProps extends IButtonProps {
    index: number;
    selected: boolean;
    onRadioClick: (index: number) => void;
}
export default function RadioButton({ index, selected, onRadioClick, children, ...props }: IRadioButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
