import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios'; // Import Axios here
import { useNavigate, useParams } from "react-router-dom";

function EditAdmin() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formvalue, setFormvalue] = useState({ username: '', password:'', usertype:'' });
    const [message, setMessage] = useState('');

    const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    }

    const userRowdata = async () => {
        try {
            const getUserdata = await fetch(`http://localhost/test/api/admin.php/${id}`);
            const resuserdata = await getUserdata.json();
            setFormvalue(resuserdata);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        userRowdata();
    }, [id]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = { id: id, username: formvalue.username, password: formvalue.password, usertype: formvalue.usertype };
        try {
            const res = await axios.put("http://localhost/test/api/admin.php", formData);
            console.log('PUT Request Response:', res.data); // Debug point to check response
            if (res.data.success) {
                setMessage(res.data.success);
                setTimeout(() => {
                    navigate('/admin-list');
                }, 2000);
            } else {
                // Handle error or unsuccessful response here
            }
        } catch (error) {
            // Handle error if request fails
            console.error('PUT Request Error:', error); // Debug point to log error
        }
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <h5 className="mb-4">Edit Admin</h5>
                        <p className="text-success">{message}</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <label className="col-sm-2">Username</label>
                                <div className="col-sm-10">
                                    <input type="text" name="username" value={formvalue.username} className="form-control" onChange={handleInput} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" name="password" value={formvalue.password} className="form-control" onChange={handleInput} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2">Usertype</label>
                                <div className="col-sm-10">
                                    <select name="usertype" value={formvalue.usertype} className="form-control" onChange={handleInput}>
                                        <option value="Admin">Admin</option>
                                        <option value="Member">Member</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2"></label>
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-success">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default EditAdmin;
