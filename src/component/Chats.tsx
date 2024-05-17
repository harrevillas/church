import React, { useContext, useEffect, useState } from "react";
import { onSnapshot, doc, DocumentData } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

interface ChatUser {
  uid: string;
  displayName: string;
  photoURL: string;
}

interface ChatInfo {
  userInfo: ChatUser;
  lastMessage?: {
    text: string;
  };
  date: any; // Adjust the type as per your date format
}

const Chats = () => {
  const [chats, setChats] = useState<{ [key: string]: ChatInfo }>({});

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      if (currentUser && currentUser.uid) {
        const unsub = onSnapshot(
          doc(db, "userChats", currentUser.uid), // Corrected doc() function call
          (doc) => {
            if (doc.exists()) {
              setChats(doc.data() as { [key: string]: ChatInfo });
            } else {
              setChats({});
            }
          }
        );

        return () => {
          unsub();
        };
      }
    };

    getChats();
  }, [currentUser]);

  const handleSelect = (u: ChatUser) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {Object.entries(chats).length === 0 ? (
        <p>No chats available</p>
      ) : (
        Object.entries(chats)
          .sort((a, b) => b[1].date - a[1].date)
          .map((chat) => (
            <div
              className="userChat"
              key={chat[0]}
              onClick={() => handleSelect(chat[1].userInfo)}
            >
              <img src={chat[1].userInfo.photoURL} alt="" />
              <div className="userChatInfo">
                <span>{chat[1].userInfo.displayName}</span>
                <p>{chat[1].lastMessage?.text}</p>
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default Chats;
