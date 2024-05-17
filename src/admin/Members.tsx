import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface UserData {
  id: number;
  username: string;
  email: string;
}

function Members() {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const reqData = await fetch("http://localhost/test/api/member.php");
      const resData = await reqData.json();
      if (Array.isArray(resData)) {
        setUserData(resData);
      } else {
        console.error("Unexpected data format:", resData);
        setUserData([]);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUserData([]);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await axios.delete(`http://localhost/test/api/member.php/${id}`);
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
            <h5 className="mb-4">Members</h5>
            <p className="text-danger">{message}</p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((uData, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{uData.username}</td>
                    <td>{uData.email}</td>
                    <td>
                      <Link to={"/editmember/" + uData.id} className="btn btn-success mx-2">
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

export default Members;
