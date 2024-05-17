import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Product {
  id: number;
  ptitle: string;
  pprice: string;
  pimage: string; 
}

function Event() {
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

  const handleDelete = async (id: number) => {
    try {
      const res = await axios.delete(`http://localhost/test/api/event.php/${id}`);
      setProduct(prevProducts => prevProducts.filter(product => product.id !== id)); // Filter out the deleted product from the state
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  console.log("Product state:", product); // Log the product state for debugging

  return (
    <React.Fragment>
      <div className="container container_overflow">
        <div className="row">
          <div className="col-md-10 mt-4">
            <h5 className="mb-4">Events</h5>
            <p className="text-danger"> </p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Image</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {product.map((pdata, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{pdata.ptitle}</td>
                    <td>{pdata.pprice}</td>
                    <td><img src={`http://localhost/test/images/${pdata.pimage}`} height={200} width={240} /></td>
                    <td>
                      <Link to={"/editevent/" + pdata.id} className="btn btn-success mx-2">
                        Edit
                      </Link>
                      <button className="btn btn-danger" onClick={() => handleDelete(pdata.id)}>
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

export default Event;
