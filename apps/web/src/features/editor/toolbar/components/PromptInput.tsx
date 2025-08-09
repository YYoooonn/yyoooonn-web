import { useState } from "react";
import { SelectableType } from "./Toolbar";
import * as style from "./toolbar.css";
import { useSaveScene } from "../../hooks/useSaveScene";
import { useChatStore } from "../store/chatStore";

interface PromptInputProps {
  onSubmit: (txt: string) => void;
  loading: boolean;
  selected: SelectableType;
  toggleSelected: (txt: SelectableType) => void;
}

export function PromptInput({
  onSubmit,
  loading = false,
  selected,
  toggleSelected,
}: PromptInputProps) {
  const [text, setText] = useState("");
  const { addMessage } = useChatStore();
  const { save, loading: saveLoading } = useSaveScene();

  const handleSave = async (e: React.MouseEvent) => {
    e.preventDefault();
    const success = await save();
    const message = success
      ? "successfully saved for 30 min"
      : "failed to save scene";
    addMessage({ sender: "system", message });
  };

  const onKeyDownSubmit = (e: React.KeyboardEvent) => {
    // 엔터 두번 발생시
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e: React.UIEvent) => {
    e.preventDefault();
    if (!text.trim() || loading) return;

    onSubmit(text);
    setText("");
  };

  return (
    <div className={style.inputContainer}>
      <button
        className={
          selected !== "creator"
            ? style.toggleButtonSelected
            : style.buttonStyle
        }
        onClick={() => toggleSelected("editor")}
      >
        editor
      </button>
      <button
        className={
          selected === "creator"
            ? style.toggleButtonSelected
            : style.buttonStyle
        }
        onClick={() => toggleSelected("creator")}
      >
        artist
      </button>
      <input
        className={style.inputStyle}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKeyDownSubmit}
        placeholder={
          selected === "editor"
            ? "create orange box with 1,1,1 scale"
            : "express the warmth of a spring day"
        }
      />
      <button
        className={style.buttonStyle}
        onClick={handleSubmit}
        disabled={loading}
      >
        submit
      </button>
      <button
        className={style.buttonStyle}
        //   style= {{width: "64px"}}
        onClick={handleSave}
        disabled={saveLoading}
      >
        {saveLoading ? "saving..." : "save"}
      </button>
    </div>
  );
}
