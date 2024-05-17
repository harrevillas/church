import "./UserSignUpStyles.css";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios"; 

function UserSignUp(){
    const [formValue, setFormValue] = useState({Name: '', Email:'', Password:''});

    const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
      }
    
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const formData= {Name: formValue.Name, Email: formValue.Email, Password: formValue.Password};
          const res = await axios.post("http://localhost/reacttypescript/signup_api/signup.php", formData);
          console.log(res.data);
        } catch (error) {
          console.error('Error:', error);
        }
        
      }
    
      return (
        <div className="container">
          <h1>Join Now!</h1>
          <form onSubmit={handleSubmit}>
            <input placeholder="Name" name="Name" value={formValue.Name} onChange={handleInput} />
            <input placeholder="Email" name="Email" value={formValue.Email} onChange={handleInput} />
            <input placeholder="Password" name="Password" value={formValue.Password} onChange={handleInput} />
            <button type="submit">Register</button>
          </form>
        </div>
      );
    }
    
    export default UserSignUp;
    
