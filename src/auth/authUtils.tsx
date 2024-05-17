
const users = [
    { email: "member@example.com", password: "password" },
    { email: "admin@example.com", password: "admin123" }
  ];
  
  export const authenticateUser = (email: string, password: string): string | null => {
    
    const user = users.find(user => user.email === email && user.password === password);
    return user ? user.email === "admin@example.com" ? "admin" : "member" : null;
  };
  