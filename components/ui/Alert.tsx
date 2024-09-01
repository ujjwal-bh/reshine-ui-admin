import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";

interface IProps
  extends React.PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  confirmClick?: () => void;
  cancelClick?: () => void;
}

export default function Alert({children, confirmClick, cancelClick, ...props}: IProps) {
  return (
    <AlertDialog>
        <AlertDialogTrigger
         {...props}
        >
            {children}
          </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            {/* <AlertDialogDescription>
            This action cannot be undone. This will permanently remove the
              data from our servers.
            </AlertDialogDescription> */}
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-row items-center gap-4">
            <AlertDialogCancel onClick={cancelClick}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmClick}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  )
}
