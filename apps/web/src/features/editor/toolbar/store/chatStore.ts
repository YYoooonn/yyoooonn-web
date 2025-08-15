import { create } from "zustand";

export type Message = {
  sender: string;
  message: string;
  timestamp?: number;
};

type ChatState = {
  messages: Message[];
  addMessage: (msg: Message) => void;
  addTempMessage: (msg: Message) => void;
  setMessages: (msgs: Message[]) => void;
};

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (msg) => set((s) => ({ messages: [...s.messages, msg] })),
  addTempMessage: (msg) =>
    set((s) => ({ messages: [...s.messages, { ...msg, timestamp: 0 }] })),
  setMessages: (msgs) => set({ messages: msgs }),
}));
