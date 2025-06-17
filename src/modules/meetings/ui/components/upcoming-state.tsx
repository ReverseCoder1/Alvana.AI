import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { VideoIcon, BanIcon } from "lucide-react";  

interface Props {
    meetingId: string;
    onCancleMeeting: () => void;
    isCancelling: boolean;
}
export const UpcomingState = ({
    meetingId,
    onCancleMeeting,
    isCancelling,
} : Props) => {
    return (
        <div className="bg-white rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center justify-center">
            <EmptyState 
                image="/upcoming.svg"
                title="Not started yet"
                description="Your meeting will appear here once it starts."
            />
            <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-2 w-full">
                <Button variant="secondary" className="w-full lg:w-auto" onClick={onCancleMeeting} disabled={isCancelling}>
                    <BanIcon />
                    Cancle Meeting
                </Button>
                <Button asChild disabled={isCancelling} className="w-full lg:w-auto">
                    <Link href={`/call/${meetingId}`}>
                        <VideoIcon />
                        Start Meeting
                    </Link>
                </Button>
            </div>
        </div>
    );
}