import React, { useState, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/messenger");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">CCC Messenger</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
