import { LogInIcon } from "lucide-react";

import {
    DefaultVideoPlaceholder,
    StreamVideoParticipant,
    ToggleAudioPreviewButton,
    ToggleVideoPreviewButton,
    useCallStateHooks,
    VideoPreview,
} from '@stream-io/video-react-sdk';

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { generateAvatarUri } from "@/lib/avatar";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import Link from "next/link";

interface Props {
    onJoin: () => void;
};

const disabledVideoPreview = () => {
    const { data } = authClient.useSession();
    return (
        <DefaultVideoPlaceholder 
            participant={
                {
                    name: data?.user.name || "",
                    image: data?.user.image ?? generateAvatarUri({
                        seed: data?.user.name || "",
                        variant: "initials",
                    }),
                } as StreamVideoParticipant
            }
        />
    );
}

const AllowBrowserPermissions = () => {
    return (
        <p className="text-sm">
            Please allow camera and microphone permissions in your browser settings to join the call.
        </p>
    );
}


export const CallLobby = ({ onJoin }: Props) => {
    const{ useCameraState, useMicrophoneState } = useCallStateHooks();
    const { hasBrowserPermission: hasCameraPermission } = useCameraState();
    const { hasBrowserPermission: hasMicrophonePermission } = useMicrophoneState();

    const hasMediaPermissions = hasCameraPermission && hasMicrophonePermission;

    return (
        <div className="flex flex-col items-center justify-center h-full bg-radial from-sidebar-accent to-sidebar">
            <div className="py-4 px-8 flex flex-1 items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-y-6 bg-background rounded-lg p-10 shadow-sm">
                    <div className="flex flex-col gap-y-2 text-center">
                        <h6 className="text-lg font-medium">Ready to join?</h6>
                        <p className="text-sm">Set up your call before joining</p>
                    </div>
                    <VideoPreview 
                        DisabledVideoPreview={
                            hasMediaPermissions ? disabledVideoPreview : AllowBrowserPermissions
                        }
                    />
                    <div className="flex gap-x-2">
                        <ToggleAudioPreviewButton />
                        <ToggleVideoPreviewButton  />
                    </div>
                    <div className="flex gap-x-2 justify-between w-full">
                        <Button variant="ghost" asChild>
                            <Link href="/meetings">
                                Cancel
                            </Link>
                        </Button>
                        <Button onClick={onJoin}>
                            <LogInIcon />
                            Join Call
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
