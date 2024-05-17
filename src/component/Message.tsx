import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

interface MessageProps {
  message: {
    senderId: string;
    text: string;
    img?: string;
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser?.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser?.uid
              ? currentUser?.photoURL
              : data?.user?.photoURL
          }
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
