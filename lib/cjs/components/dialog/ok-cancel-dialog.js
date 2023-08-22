"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OKCancelDialog = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const alert_dialog_1 = require("@components/ui/alert-dialog");
function OKCancelDialog({ title, text, visible, onClick, onCancel, className, }) {
    return ((0, jsx_runtime_1.jsx)(alert_dialog_1.AlertDialog, { open: visible, children: (0, jsx_runtime_1.jsxs)(alert_dialog_1.AlertDialogContent, { children: [(0, jsx_runtime_1.jsxs)(alert_dialog_1.AlertDialogHeader, { children: [(0, jsx_runtime_1.jsx)(alert_dialog_1.AlertDialogTitle, { children: title }), (0, jsx_runtime_1.jsx)(alert_dialog_1.AlertDialogDescription, { children: text })] }), (0, jsx_runtime_1.jsxs)(alert_dialog_1.AlertDialogFooter, { children: [(0, jsx_runtime_1.jsx)(alert_dialog_1.AlertDialogAction, { onClick: onClick, children: "OK" }), (0, jsx_runtime_1.jsx)(alert_dialog_1.AlertDialogCancel, { onClick: onCancel, children: "Cancel" })] })] }) })
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
exports.OKCancelDialog = OKCancelDialog;
//# sourceMappingURL=ok-cancel-dialog.js.map