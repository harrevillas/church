import "./ContactFormStyles.css";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios"; 
function ContactForm() {
  const [formValue, setFormValue] = useState({ Name: '', Email: '', Subject: '', Message: '' });

  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData= {Name: formValue.Name, Email: formValue.Email, Subject: formValue.Subject, Message: formValue.Message};
      const res = await axios.post("http://localhost/reacttypescript/api/user.php", formData);
      console.log(res.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="from-container">
      <h1>You can Contact us here!</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" name="Name" value={formValue.Name} onChange={handleInput} />
        <input placeholder="Email" name="Email" value={formValue.Email} onChange={handleInput} />
        <input placeholder="Subject" name="Subject" value={formValue.Subject} onChange={handleInput} />
        <textarea placeholder="Message" name="Message" value={formValue.Message} onChange={handleInput} rows={4}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
