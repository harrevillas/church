import React, { useState, ChangeEvent, FormEvent } from "react";
import "./UserLogInStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  Email: string;
  Password: string;
}

interface LogInProps {
  onLogin: () => void;
}

const LogIn: React.FC<LogInProps> = ({ onLogin }) => {
  const [formValue, setFormValue] = useState<LoginForm>({ Email: '', Password: '' });
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    setError(''); // Clear error message on input change
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const { Email, Password } = formValue;

    // Check if email or password is empty
    if (!Email || !Password) {
      setError('Please fill in all fields.');
      return;
    }

    // Check if email format is correct
    if (!validateEmail(Email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      // Check if the entered credentials match the predefined admin credentials
      if (Email === 'admin@gmail.com' && Password === 'admin123') {
        // If the credentials match, navigate to the admin panel
        console.log("Admin Login successful. Navigating to admin panel.");
        navigate('/admin'); // Navigate to admin panel
        onLogin();
        return; // Exit function to prevent further processing
      }

      // If the credentials do not match the predefined admin credentials, attempt member login
      const memberRes = await axios.post("http://localhost/reacttypescript/signup_api/signup.php", formValue); // Endpoint for member login
      
      console.log("Member Response:", memberRes.data);

      if (memberRes.data.success) {
        // If the credentials match any user in the member database, navigate to the member area
        console.log("Member Login successful. Navigating to messenger.");
        navigate('/login'); // Navigate to member area
        onLogin();
        setSuccessMessage('Login successful.');
        return; // Exit function to prevent further processing
      }

      // If neither admin nor member login is successful, display an error message
      console.log("Login failed. Incorrect Email or Password.");
      setError("Incorrect Email or Password");

    } catch (error) {
      // Handle error if request fails
      console.error("Error:", error);
      setError("An error occurred while logging in. Please try again later.");
    }
  };

  // Function to validate email format
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="container">
      <h1>Welcome!</h1>
      {error && <div className="error">{error}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" name="Email" value={formValue.Email} onChange={handleInput} />
        <input placeholder="Password" name="Password" type="password" value={formValue.Password} onChange={handleInput} />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;
