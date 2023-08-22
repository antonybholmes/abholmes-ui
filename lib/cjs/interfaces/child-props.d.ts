import { ReactElement } from "react";
import type IClassProps from "./class-props";
export default interface IChildProps extends IClassProps {
    children: ReactElement[];
}
