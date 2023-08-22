import { jsx as _jsx } from "react/jsx-runtime";
import useMouseUpListener from "../../hooks/use-mouseup-listener";
export default function AnchorButton({ href = "#", onClick, onMouseUp, children, ...props }) {
    useMouseUpListener(onMouseUp);
    function _onClick(e) {
        // prevent jumping to top of page
        e.preventDefault();
        onClick && onClick(e);
    }
    return (_jsx("a", { href: href, role: "button", onClick: _onClick, ...props, children: children }));
}
//# sourceMappingURL=anchor-button.js.map