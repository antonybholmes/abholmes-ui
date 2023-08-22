"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const alert_dialog_1 = require("@components/ui/alert-dialog");
const dialog_1 = require("@components/ui/dialog");
function TextDialog({ title, text, visible, onCancel, className, children, }) {
    return (
    // <DynamicModal
    //   visible={visible}
    //   onCancel={onCancel}
    //   className={cn("flex flex-col gap-y-2 text-sm", className)}
    // >
    //   <h1 className="text-lg font-bold">{title}</h1>
    //   <p>{text}</p>
    //   {children}
    // </DynamicModal>
    (0, jsx_runtime_1.jsx)(alert_dialog_1.AlertDialog, { open: visible, children: (0, jsx_runtime_1.jsxs)(alert_dialog_1.AlertDialogContent, { children: [(0, jsx_runtime_1.jsxs)(alert_dialog_1.AlertDialogHeader, { children: [(0, jsx_runtime_1.jsx)(alert_dialog_1.AlertDialogTitle, { children: title }), (0, jsx_runtime_1.jsx)(dialog_1.DialogDescription, { children: text })] }), (0, jsx_runtime_1.jsx)(dialog_1.DialogFooter, { children: children })] }) }));
}
exports.default = TextDialog;
//# sourceMappingURL=text-dialog.js.map