import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, } from "@components/ui/alert-dialog";
export function OKCancelDialog({ title, text, visible, onClick, onCancel, className, }) {
    return (_jsx(AlertDialog, { open: visible, children: _jsxs(AlertDialogContent, { children: [_jsxs(AlertDialogHeader, { children: [_jsx(AlertDialogTitle, { children: title }), _jsx(AlertDialogDescription, { children: text })] }), _jsxs(AlertDialogFooter, { children: [_jsx(AlertDialogAction, { onClick: onClick, children: "OK" }), _jsx(AlertDialogCancel, { onClick: onCancel, children: "Cancel" })] })] }) })
    // <TextDialog
    //   title={title}
    //   text={text}
    //   visible={visible}
    //   onCancel={onCancel}
    //   className={className}
    // >
    //   <VCenterRow className="mt-4 justify-end gap-x-2">
    //     <Button aria-label="OK" onClick={onClick}>
    //       OK
    //     </Button>
    //     <AlertDialogCancel aria-label="Cancel" onClick={onCancel}>
    //       Cancel
    //     </AlertDialogCancel>
    //   </VCenterRow>
    // </TextDialog>
    );
}
//# sourceMappingURL=ok-cancel-dialog.js.map