import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@components/ui/alert-dialog"
import { MouseEvent } from "react"
import { ITextModel } from "./text-dialog"

export interface IOKCancelModel extends ITextModel {
  title: string
  text: string
  onClick?: (e: MouseEvent) => void
}

export default function OKCancelDialog({
  title,
  text,
  visible,
  onClick,
  onCancel,
  className,
}: IOKCancelModel) {
  return (
    <AlertDialog open={visible}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{text}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogAction onClick={onClick}>OK</AlertDialogAction>
          <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

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
  )
}
