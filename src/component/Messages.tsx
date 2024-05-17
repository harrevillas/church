import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

interface MessageData {
  id: string;
  senderId: string;
  text: string;
  img?: string;
  // Add other properties if needed
}

const Messages = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const { data } = useContext(ChatContext) || {}; // Provide a default value for data

  useEffect(() => {
    if (data && data.chatId) {
      const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        if (doc.exists()) {
          setMessages(doc.data().messages);
        }
      });

      return () => {
        unSub();
      };
    }
  }, [data]);

  return (
    <div className="messages">
      {messages.length > 0 ? (
        messages.map((m) => (
          <Message message={m} key={m.id} />
        ))
      ) : (
        <p>No messages yet</p>
      )}
    </div>
  );
};

export default Messages;
