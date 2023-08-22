interface RadioButtonGroupProps {
    items: string[];
    selected?: string;
    onRadioClick: (index: number) => void;
    prefix?: string;
    className?: string;
}
export default function RadioButtonGroup({ items, selected, onRadioClick, prefix, className, }: RadioButtonGroupProps): import("react/jsx-runtime").JSX.Element;
export {};
