import { ResponsiveDialog } from "@/components/responsive-dialog";
import { MeetingForm } from "./meeting-form";
import { MeetingGetOne } from "../../types";
import { useState } from "react";
interface UpdateMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues : MeetingGetOne;
}

export const UpdateMeetingDialog = ({
  open,
  onOpenChange,
  initialValues,
}: UpdateMeetingDialogProps) => {
  return (
    <ResponsiveDialog
      title="Edit Meeting"
      description="Edit meeting details"
      open={open}
      onOpenChange={onOpenChange}
    >
    <MeetingForm 
        onSuccess={(id) => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
    />
    </ResponsiveDialog>
  );
};
