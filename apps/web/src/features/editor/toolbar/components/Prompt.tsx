import { useEffect, useRef } from "react";
import * as style from "./prompt.css";
import { Message } from "../store/chatStore";

export function PromptLogs({ logs }: { logs: Message[] }) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);
  return (
    <div className={style.logContainer}>
      {logs.map((log, idx) => (
        <PromptLog
          key={idx}
          msg={log.message}
          isRequest={log.sender === "user"}
        />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}

export interface PromptLogProps {
  msg: string;
  isRequest?: boolean;
}

export function PromptLog({ msg, isRequest = true }: PromptLogProps) {
  return (
    <div style={{ width: "100%", display: "inline-block" }}>
      <div className={isRequest ? style.logLeft : style.logRight}>{msg}</div>
    </div>
  );
}
