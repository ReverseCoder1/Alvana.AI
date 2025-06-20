import { useState,useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import type { Channel as StreamChannel } from "stream-chat";
import {
    useCreateChatClient,
    Chat,
    Channel,
    MessageInput,
    MessageList,
    Thread,
    Window,
} from "stream-chat-react";

import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
import "stream-chat-react/dist/css/v2/index.css";

interface ChatUIProps {
    meetingId: string;
    meetingName: string;
    userID: string;
    userName: string;
    userImage: string | undefined;
}

export const ChatUI = ({
    meetingId,
    meetingName,
    userID,
    userName,
    userImage,
}: ChatUIProps) => {
    const trpc = useTRPC();
    const { mutateAsync: generateChatToken} = useMutation(
        trpc.meetings.generateChatToken.mutationOptions(),
    )

    const [channel, setChannel] = useState<StreamChannel>();

    const client = useCreateChatClient({
        apiKey: process.env.NEXT_PUBLIC_STREAM_CHAT_API_KEY!,
        tokenOrProvider: generateChatToken,
        userData: {
            id: userID,
            name: userName,
            image: userImage,
        }
    });

    useEffect(() => {
        if(!client) return;
        const channel = client.channel("messaging", meetingId, {
            members: [userID],
        });
        setChannel(channel);
    }, [client, meetingId, meetingName, userID]);

    if(!client){
        return (
            <LoadingState 
                title="Loading chat..."
                description="This may take few seconds."
            />
        );
    }

    return(
        <div className="bg-white rounded-lg border overflow-hidden">
            <Chat client={client}>
                <Channel channel={channel}>
                    <Window>
                        <div className="flex-1 overflow-y-auto max-h-[calc(100vh-23rem)] border-b">
                            <MessageList />
                        </div>
                        <MessageInput />
                    </Window>
                    <Thread />
                </Channel>
            </Chat>
        </div>
    )
};