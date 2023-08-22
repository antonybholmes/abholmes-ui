import { jsx as _jsx } from "react/jsx-runtime";
import cn from "../lib/class-names";
import BaseCol from "./base-col";
const VCenterCol = ({ className = "", children, ...props }) => {
    return (_jsx(BaseCol, { className: cn("justify-center", className), ...props, children: children }));
};
export default VCenterCol;
//# sourceMappingURL=v-center-col.js.map