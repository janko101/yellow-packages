//Packages
import React, { useState, useEffect } from "react";
import axios from "axios";

//Project
import Order from "./Order";
import Loader from "./Loader";
import Error from "./Error";

export default function Orders() {
  // State
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("loading");

  //Constants
  const allOrders = orders.map((order) => {
    return <Order key={order.id} orderData={order} />;
  });
  const apiUrl = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // Methods
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(apiUrl);

        setOrders(result.data);
        setStatus("success");
      } catch (error) {
        console.log(error);
        setStatus("error");
      }
    };
    fetchData();
  }, [setOrders, setStatus]);

  return (
    <div className="orders-container">
      <h1>Orders: </h1>
      {status === "loading" && <Loader />}
      {status === "success" && allOrders}
      {status === "error" && <Error />}
    </div>
  );
}
