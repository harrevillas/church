import "./AboutUsStyles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface UserData {
  title: string;
  description: string;
}

function AboutUs() {
  const [userData, setUserData] = useState<UserData[]>([]);

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
        console.error("Data received from the server is not an array:", responseData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="about-container">
      {userData.map((uData, index) => (
        <div key={index}>
          <h1>{uData.title}</h1>
          <p>{uData.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutUs;
