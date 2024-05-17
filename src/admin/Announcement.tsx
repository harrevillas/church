import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface UserData {
  id: number;
  title: string;
  description: string;
}

function Announcement() {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost/test/api/announcement.php");
      const responseData = response.data;

      if (Array.isArray(responseData)) {
        setUserData(responseData);
      } else {
        console.error("Received data is not an array:", responseData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await axios.delete(`http://localhost/test/api/announcement.php/${id}`);
      setMessage(res.data.success);
      getUserData();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mt-4">
            <h5 className="mb-4">Announcements</h5>
            <p className="text-danger">{message}</p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((uData, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{uData.title}</td>
                    <td>{uData.description}</td>
                    <td>
                      <Link to={"/editannouncement/" + uData.id} className="btn btn-success mx-2">
                        Edit
                      </Link>
                      <button className="btn btn-danger" onClick={() => handleDelete(uData.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Announcement;
