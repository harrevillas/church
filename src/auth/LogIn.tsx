import React, { useState, ChangeEvent, FormEvent } from "react";
import { authenticateUser } from "./authUtils"; 
import "./UserLogInStyles.css";

interface LoginForm {
  Email: string;
  Password: string;
}

interface LogInProps {
  onLogin: () => void;
}

const LogIn: React.FC<LogInProps> = ({ onLogin }) => {
  const [formValue, setFormValue] = useState<LoginForm>({ Email: '', Password: '' });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { Email, Password } = formValue;

    const userType = await authenticateUser(Email, Password);
  
    if (userType) {
      if (userType === "admin") {
       
        console.log("Redirecting to /admin...");
        onLogin();
      } else if (userType === "member") {
        
        console.log("Member login successful!");
        onLogin();
      } else {
     
        console.error("Invalid email or password");
      }
    } else {
  
      console.error("Invalid email or password");
    }
  }
  
  return (
    <div className="container">
      <h1>Welcome!</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" name="Email" value={formValue.Email} onChange={handleInput} />
        <input placeholder="Password" name="Password" type="password" value={formValue.Password} onChange={handleInput} />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;
