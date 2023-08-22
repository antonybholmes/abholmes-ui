import cn from "..lib/class-names";
import { APP_NAME } from "@/consts";
import BaseLink from "@components/link/base-link";
import BioIcon from "@icons/bio";
import { CENTERED_BUTTON_CLS } from "@theme";
import { jsx as _jsx } from "react/jsx-runtime";
export default function LogoIcon(_a) {
    var className = _a.className, _b = _a.size, size = _b === void 0 ? "w-7" : _b;
    return (_jsx(BaseLink, { "aria-label": APP_NAME, href: "/", className: cn(CENTERED_BUTTON_CLS, "fill-sky-500 dark:fill-gray-100", className), children: _jsx(BioIcon, { size: size }) }));
}
//# sourceMappingURL=logo-icon.js.map