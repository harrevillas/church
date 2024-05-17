import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, User } from "firebase/auth";

interface AuthContextProps {
  currentUser: User | null;
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
