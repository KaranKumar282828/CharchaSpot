import React from "react";
import User from "./User";
import Message from "./Message";
import { IoIosSend } from "react-icons/io";

const MessageContainer = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="p-3 border-b border-b-black/10">
        <User />
      </div>

      <div className="h-full overflow-y-auto p-3">
        <Message />
        <Message />
        <Message />
      </div>

      <div className="w-full flex gap-2">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
        />
        <button className="btn btn-square btn-outline btn-primary">
          <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;
