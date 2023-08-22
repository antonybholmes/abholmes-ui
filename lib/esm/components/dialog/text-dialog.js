import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, } from "@components/ui/alert-dialog";
import { DialogDescription, DialogFooter } from "@components/ui/dialog";
export default function TextDialog({ title, text, visible, onCancel, className, children, }) {
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
    _jsx(AlertDialog, { open: visible, children: _jsxs(AlertDialogContent, { children: [_jsxs(AlertDialogHeader, { children: [_jsx(AlertDialogTitle, { children: title }), _jsx(DialogDescription, { children: text })] }), _jsx(DialogFooter, { children: children })] }) }));
}
//# sourceMappingURL=text-dialog.js.map