import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContext } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';
import { auth } from './firebase';
import { UserType } from './types';
import { onAuthStateChanged, User } from 'firebase/auth'; // Import onAuthStateChanged and User

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found");
}

function AuthProviderWrapper() {
  const [currentUser, setCurrentUser] = useState<User | null>(null); // Adjust the type to User | null

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => { // Pass auth as the first argument
      setCurrentUser(user); // Set the current user directly
    });
  
    return () => unsubscribe();
  }, []);
  
  return (
    <AuthContext.Provider value={{ currentUser }}>
      <ChatContextProvider>
        <App />
      </ChatContextProvider>
    </AuthContext.Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviderWrapper />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
