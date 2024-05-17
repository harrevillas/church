import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios'; // Import Axios here
import { useNavigate } from "react-router-dom";

function AddMember() {
    const navigate = useNavigate();
    const [formvalue, setFormvalue] = useState({ username: '', email: '' });
    const [message, setMessage]= useState('');
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //console.log(formvalue);
        const formData = { username: formvalue.username, email: formvalue.email };
        try {
            const res = await axios.post("http://localhost/test/api/member.php", formData);
            if (res.data.success) {
                setMessage(res.data.success);
                setTimeout( () =>{
                    navigate('/members');
                }, 2000);
            } else {
                // Handle error or unsuccessful response here
            }
        } catch (error) {
            // Handle error if request fails
            console.error(error);
        }
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <h5 className="mb-4">Add Members</h5>
                        <p className="text-success">{message} </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <label className="col-sm-2">Username</label>
                                <div className="col-sm-10">
                                    <input type="text" name="username" value={formvalue.username} className="form-control" id="inputPassword" onChange={handleInput} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" name="email" value={formvalue.email} className="form-control" id="inputPassword" onChange={handleInput} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2"></label>
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AddMember;
