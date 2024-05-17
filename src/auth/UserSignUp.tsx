import React, { useState, ChangeEvent, FormEvent } from "react";
import "./UserSignUpStyles.css";
import axios from "axios"; 

function UserSignUp(){
    const [formValue, setFormValue] = useState({Name: '', Email:'', Password:''});
    const [error, setError]= useState<string |null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
        setError(''); // Clear error message on input change
    }
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const { Name, Email, Password } = formValue;

        // Check if any field is empty
        if (!Name || !Email || !Password) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            const formData= {Name, Email, Password};
            const res = await axios.post("http://localhost/reacttypescript/signup_api/signup.php", formData);
            console.log(res.data); // Log the response data
            
            if (res.data.success) {
                // If registration is successful, display success message and clear form
                setSuccessMessage("Registration successful. You can now log in.");
                setFormValue({Name: '', Email:'', Password:''});
            } else {
                // If email is already taken, display error message
                setError("Email is already taken. Please choose another one.");
            }
        } catch (error) {
            console.error('Error:', error);
            setError("An error occurred during registration. Please try again.");
        }
    }    
    
    return (
        <div className="container">
            <h1>Join Now!</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name" name="Name" value={formValue.Name} onChange={handleInput} />
                <input placeholder="Email" name="Email" value={formValue.Email} onChange={handleInput} />
                <input type="password" placeholder="Password" name="Password" value={formValue.Password} onChange={handleInput} /> {/* Change input type to "password" */}
                <button type="submit">Register</button>
                {error && <div className="error">{error}</div>}
                {successMessage && <div className="success">{successMessage}</div>}
            </form>
        </div>
    );
}

export default UserSignUp;
