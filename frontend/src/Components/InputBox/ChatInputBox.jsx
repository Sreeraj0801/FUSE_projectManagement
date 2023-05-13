/* eslint-disable react/prop-types */
import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import { BsSendFill } from "react-icons/bs";
import { Vortex } from "react-loader-spinner";

export default function ChatInputBox({ props }) {
  const { handleChatSubmit } = props;
  const [text, setText] = useState("");
  const [loader, setLoader] = useState(false);
  async function handleOnEnter(text) {
    if (text.trim()) {
      setLoader(true);
      await handleChatSubmit(text);
      setLoader(false);
    }
  }

  async function handleOnSubmit(text) {
    if (text.trim()) {
      setText("");
      setLoader(true);
      await handleChatSubmit(text);
      setLoader(false);
    }
  }
  return (
    <div className="flex items-center justify-between  px-3 dark:bg-slate-300 bg-slate-200 rounded  h-16 ">
      <InputEmoji
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={handleOnEnter}
        placeholder="Type a message"
        className="border-none outline-none w-full p-2"
      />
      <button
        className="cursor-pointer text-3xl text-slate-500 -mt-1 ml-3"
        onClick={() => {
          handleOnSubmit(text);
        }}
      >
        {loader ? <Vortex height={50} /> : <BsSendFill />}
      </button>
    </div>
  );
}
