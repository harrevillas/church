import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddAnnouncement() {
    const navigate = useNavigate();
    const [formvalue, setFormvalue] = useState({ title: '', description: '' });
    const [message, setMessage]= useState('');
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = { title: formvalue.title, description: formvalue.description };
        try {
            const res = await axios.post("http://localhost/test/api/announcement.php", formData);
            if (res.data.success) {
                setMessage(res.data.success);
                setTimeout(() => {
                    navigate('/announcement'); // Navigate to the '/announcement' route
                    setTimeout(() => {
                        navigate('/about'); // Navigate to the '/about' route after a delay
                    }, 2000);
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
                        <h5 className="mb-4">Add Announcement</h5>
                        <p className="text-success">{message} </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <label className="col-sm-2">Title</label>
                                <div className="col-sm-10">
                                    <input type="text" name="title" value={formvalue.title} className="form-control" id="inputPassword" onChange={handleInput} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2">Description</label>
                                <div className="col-sm-10">
                                    <input type="text" name="description" value={formvalue.description} className="form-control" id="inputPassword" onChange={handleInput} />
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

export default AddAnnouncement;
