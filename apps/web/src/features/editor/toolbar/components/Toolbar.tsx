"use client";

import * as style from "./toolbar.css";
import { PromptLogs } from "./Prompt";
import { useState } from "react";
import { useSceneStore } from "@/features/editor/nodes/store/nodeStore";
import { SAMPLE_MESH_NODE } from "../../nodes/utils/sample";
import { useSceneEditor } from "../../hooks/useSceneEditor";
import { useChatStore } from "../store/chatStore";
import { useSceneArtist } from "../../hooks/useSceneArtist";
import { PromptInput } from "./PromptInput";

const selectable = ["creator", "editor"] as const;
export type SelectableType = (typeof selectable)[number];

export function Toolbar() {
  const { messages, addMessage } = useChatStore();
  const [selected, setSelected] = useState<SelectableType>(selectable[1]);

  const [editScene, editLoading, editError] = useSceneEditor();
  const [createScene, createLoading, createError] = useSceneArtist();

  const handleSubmit = async (txt: string) => {
    addMessage({
      sender: "user",
      message: txt,
    });
    const res =
      selected === "editor" ? await editScene(txt) : await createScene(txt);
    addMessage({
      sender: "gemini",
      message: res ?? "empty response",
    });
  };

  return (
    <div className={style.toolbarStyle}>
      <PromptLogs logs={messages} />
      <HelperButtons
        printInfo={(txt) => addMessage({ sender: "system", message: txt })}
      />
      <PromptInput
        onSubmit={handleSubmit}
        loading={editLoading || createLoading}
        selected={selected}
        toggleSelected={(selector) => setSelected(selector)}
      />
    </div>
  );
}

function HelperButtons({ printInfo }: { printInfo: (txt: string) => void }) {
  const { addNode, nodeMap } = useSceneStore();

  const addTempNode = () => {
    addNode(SAMPLE_MESH_NODE);
  };

  const printNodeMap = () => {
    printInfo(JSON.stringify(nodeMap, null, 2));
  };

  return (
    <div style={{ padding: "8px", width: "100%", display: "flex" }}>
      <button className={style.helperButton} onClick={addTempNode}>
        sample
      </button>
      <button className={style.helperButton} onClick={printNodeMap}>
        print
      </button>
    </div>
  );
}
