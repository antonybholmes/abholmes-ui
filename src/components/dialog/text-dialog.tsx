import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog"
import { DialogDescription, DialogFooter } from "../ui/dialog"
import { IModalProps } from "./modal-dialog"

export interface ITextModel extends IModalProps {
  title: string
  text: string
}

export default function TextDialog({
  title,
  text,
  visible,
  children,
}: ITextModel) {
  return (
    // <DynamicModal
    //   visible={visible}
    //   onCancel={onCancel}
    //   className={clns("flex flex-col gap-y-2 text-sm", className)}
    // >
    //   <h1 className="text-lg font-bold">{title}</h1>
    //   <p>{text}</p>
    //   {children}
    // </DynamicModal>

    <AlertDialog open={visible}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <DialogDescription>{text}</DialogDescription>
        </AlertDialogHeader>

        <DialogFooter>{children}</DialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
