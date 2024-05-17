import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormValues {
  f_name: string;
  username: string;
  password: string;
  usertype: string;
}

const AdminList: React.FC = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState<FormValues>({ f_name: '', username: '', password: '', usertype: 'Member' });
  const [message, setMessage] = useState<string>('');

  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = { ...formValue };
    try {
      const res = await axios.post("http://localhost/test/api/admin.php", formData);
      if (res.data.success) {
        setMessage(res.data.success);
        setTimeout(() => {
          navigate('/admin-list');
        }, 2000);
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4">
            <h5 className="mb-4">Add Admin</h5>
            <p className="text-success">{message}</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-2">Full Name</label>
                <div className="col-sm-10">
                  <input type="text" name="f_name" value={formValue.f_name} className="form-control" onChange={handleInput} />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2">Username</label>
                <div className="col-sm-10">
                  <input type="text" name="username" value={formValue.username} className="form-control" onChange={handleInput} />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2">Password</label>
                <div className="col-sm-10">
                  <input type="password" name="password" value={formValue.password} className="form-control" onChange={handleInput} />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2">Usertype</label>
                <div className="col-sm-10">
                  <select name="usertype" value={formValue.usertype} className="form-control" onChange={handleInput}>
                    <option value="Admin">Admin</option>
                    <option value="Member">Member</option>
                  </select>
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
};

export default AdminList;
