import { createContext, useContext, useReducer, ReactNode } from "react";
import { AuthContext } from "./AuthContext";

interface ChatState {
  chatId: string;
  user: Record<string, any>;
}

interface Action {
  type: string;
  payload: {
    uid: string;
  };
}

export const ChatContext = createContext<any>(null);

export const ChatContextProvider = ({ children }: { children: ReactNode }) => {
  const { currentUser } = useContext(AuthContext);
  const INITIAL_STATE: ChatState = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state: ChatState, action: Action) => {
    switch (action.type) {
      case "CHANGE_USER":
        const chatId = currentUser && currentUser.uid > action.payload.uid
          ? currentUser.uid + action.payload.uid
          : action.payload.uid + (currentUser ? currentUser.uid : "");
        return {
          user: action.payload,
          chatId: chatId,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
