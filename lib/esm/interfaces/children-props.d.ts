import { ReactNode } from "react";
import type IClassProps from "./class-props";
export default interface IChildrenProps extends IClassProps {
    children?: ReactNode | undefined;
}
