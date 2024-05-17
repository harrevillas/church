import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface UserData {
  id:number;
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
}

function PrayerRequestList() {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const reqData = await fetch("http://localhost/reacttypescript/api/user.php");
      const resData = await reqData.json();
      console.log("Response data:", resData); // Log the response data
      setUserData(resData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  

  const handleDelete = async (id: number) => {
    try {
      const res = await axios.delete(`http://localhost/reacttypescript/api/user.php/${id}`);
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
            <h5 className="mb-4">Prayer Request List</h5>
            <p className="text-danger">{message}</p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((uData, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{uData.Name}</td>
                    <td>{uData.Email}</td>
                    <td>{uData.Subject}</td>
                    <td>{uData.Message}</td>
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

export default PrayerRequestList;
