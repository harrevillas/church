import React, { ChangeEvent, useContext, useState } from "react";
import Img from "../img/addAvatar.png";
import Attach from "../img/attach.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable, UploadTask } from "firebase/storage";

const Input: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [img, setImg] = useState<File | null>(null);

  const { currentUser } = useContext(AuthContext);
  const chatContext = useContext(ChatContext);

  // Ensure that chatContext is defined before accessing its properties
  if (!chatContext) {
    throw new Error("ChatContext is not provided.");
  }

  const { data } = chatContext;

  const handleSend = async () => {
    if (!data) {
      throw new Error("Chat data is not available.");
    }

    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask: UploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          // TODO: Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL: string) => {
            // Handle the case where data.chatId is null
            if (!data.chatId) {
              throw new Error("Chat ID is not available.");
            }

            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser?.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      // Handle the case where data.chatId is null
      if (!data.chatId) {
        throw new Error("Chat ID is not available.");
      }

      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser?.uid,
          date: Timestamp.now(),
        }),
      });
    }

    // Ensure currentUser?.uid is not undefined before calling updateDoc
    if (currentUser?.uid) {
      // Handle the case where data.chatId is null
      if (!data.chatId) {
        throw new Error("Chat ID is not available.");
      }

      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
    }

    if (data.chatId) {
      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
    }

    setText("");
    setImg(null);
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleTextChange}
        value={text}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={handleImgChange}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
