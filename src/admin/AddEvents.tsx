import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddEvents() {
  const navigate = useNavigate();
  const [ptitle, setPtitle] = useState('');
  const [pprice, setPprice] = useState('');
  const [pfile, setPfile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const uploadProduct = async () => {
    const formData = new FormData();
    formData.append('ptitle', ptitle);
    formData.append('pprice', pprice);
    if (pfile) {
      formData.append('pfile', pfile);
    }
    try {
      const response = await axios.post("http://localhost/test/api/event.php", formData, {
        headers: { 'Content-Type': "multipart/form-data" },
      });
      if (response.data.success) {
        setMessage(response.data.success);
        setTimeout(() => {
          navigate('/event'); // Navigate to the '/event' route
          setTimeout(() => {
              navigate('/events'); // Navigate to the '/events' route after a delay
          }, 2000);
      }, 2000);
  } else {
      // Handle error or unsuccessful response here
  }
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await uploadProduct();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPfile(e.target.files[0]);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-4">
            <h5 className="mb-4">Add Events</h5>
            <p className="text-warning">{message}</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3">Title</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" onChange={(e) => setPtitle(e.target.value)} />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Description</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" onChange={(e) => setPprice(e.target.value)} />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Event Image</label>
                <div className="col-sm-9">
                  <input type="file" className="form-control" onChange={handleFileChange} />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3"></label>
                <div className="col-sm-9">
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

export default AddEvents;
