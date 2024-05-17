import "./EventsStyles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EventsData from "./EventsData";

interface Product {
  id: number;
  ptitle: string;
  pprice: string;
  pimage: string; 
}

function Mass() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const reqData = await fetch("http://localhost/test/api/event.php");
      const resData = await reqData.json();
      console.log("Response data:", resData); // Log the response data
      if (Array.isArray(resData)) {
        setProduct(resData);
      } else {
        setProduct([]); // Set product to an empty array if response data is not an array
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="events">
      <h1>Recent Events</h1>
      <p>You can discover different mass or events.</p>
      <div className="eventscard">
        {product.map((pdata, index) => (
          <EventsData
            key={index}
            image={`http://localhost/test/images/${pdata.pimage}`}
            heading={pdata.ptitle}
            text={`${pdata.pprice}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Mass;
