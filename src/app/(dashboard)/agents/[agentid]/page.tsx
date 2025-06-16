import { AgentIdView, AgentIdLoading, AgentIdError } from "@/modules/agents/ui/views/agent-id-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface AgentPageProps {
    params: Promise<{
        agentid: string;
    }>;
}

const Page = async ({ params }: AgentPageProps) => {
    const { agentid } = await params;

    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.agents.getOne.queryOptions({ id: agentid }));
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<AgentIdLoading />}>
                <ErrorBoundary fallback={<AgentIdError />}>
                    <AgentIdView agentid={agentid} />
                </ErrorBoundary>
            </Suspense>
        </HydrationBoundary>
    );
}

export default Page;