"use client";
import { authClient } from "@/lib/auth-client";
import { LoadingState } from "@/components/loading-state";
import { ChatUI } from "./chat-ui";

interface ChatProviderProps {
    meetingId: string;
    meetingName: string;
}

export const ChatProvider = ({ meetingId, meetingName }: ChatProviderProps) => {
    const {data, isPending} = authClient.useSession();
    if(isPending || !data?.user){
        <LoadingState 
            title="Loading chat..."
            description="Please wait while we load the chat for you."
        />
    }

    return (
        <ChatUI
            meetingId={meetingId}
            meetingName={meetingName}
            userID={data?.user.id || ""}
            userName={data?.user.name || "Anonymous"}
            userImage={data?.user.image || ""}
        />
    );
}