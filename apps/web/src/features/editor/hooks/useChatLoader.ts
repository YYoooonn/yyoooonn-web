import { ChatLog, useGetChatLogsQuery } from "@repo/graphql/client";
import { useEffect, useMemo } from "react";
import { useChatStore } from "../toolbar/store/chatStore";

type UseChatLoaderResult = {
  data:
    | {
        getChatLogs?: {
          logs?: ChatLog[] | null;
        };
      }
    | undefined
    | null;
  loading: boolean;
  error: unknown;
};

export const useChatLoader = (
  id: string | null | undefined,
): UseChatLoaderResult => {
  const { setMessages } = useChatStore();

  const { data, loading, error } = useGetChatLogsQuery({
    variables: { id: id ?? "" },
    skip: !id || id === "",
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (error) {
      console.warn(error);
      return;
    }

    if (loading || !data?.getChatLogs) return;

    setMessages(
      data.getChatLogs.logs?.map((l: ChatLog) => ({
        sender: l.sender,
        message: l.message,
        timestamp: l.timestamp,
      })) ?? [],
    );
  }, [data, loading, error, setMessages]);

  return useMemo(() => ({ data, loading, error }), [data, loading, error]);
};
