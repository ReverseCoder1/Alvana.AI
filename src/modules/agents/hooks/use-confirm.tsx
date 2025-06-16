import { JSX, useState} from 'react';
import { Button } from '@/components/ui/button';
import { ResponsiveDialog } from '@/components/responsive-dialog';
import { title } from 'process';
import { set } from 'date-fns';

export const useConfirm = (
    title: string,
    description: string,
) : [() => JSX.Element, () => Promise<unknown>] => {
    const [promise,setpromise] = useState<{
        resolve: (value: boolean) => void;
    } | null>(null);

    const confirm = () => {
        return new Promise<boolean>((resolve) => {
            setpromise({ resolve });
        });
    };

    const handleClose = () => {
        setpromise(null);
    }
    const handleConfirm = () => {
        promise?.resolve(true);
        handleClose();
    };
    const handleCancel = () => {
        promise?.resolve(false);
        handleClose();
    };

    const ConfirmationDialog = () => {
        return (
            <ResponsiveDialog
                open={promise !== null}
                onOpenChange={handleClose}
                title={title}
                description={description}
            >
                <div className='pt-4 w-full flex flex-col-reverse gap-y-2 lg:flex-row gap-x-2 items-center justify-end'>
                    <Button variant="outline" onClick={handleCancel} className='w-full lg:w-auto'>
                        Cancel
                    </Button>
                    <Button variant="default" onClick={handleConfirm} className='w-full lg:w-auto'>
                        Confirm
                    </Button>
                </div>
            </ResponsiveDialog>
        );
    }
    return [ConfirmationDialog, confirm];
};