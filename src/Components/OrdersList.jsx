//Packages
import React, { useState, useEffect } from "react";

//Project
import Order from "./Order";
import Loader from "./Loader";

export default function Orders() {
  // State
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("loading");

  const ordersArray = orders.map((order) => {
    return <Order key={order.id} orderData={order} />;
  });

  // Methods
  useEffect(() => {
    fetch("https://my.api.mockaroo.com/orders.json?key=e49e6840")
      .then((response) => response.json())
      .then(onFetchSuccess)
      .catch(onFetchFail);
  }, [setOrders, setStatus]);

  function onFetchSuccess(data) {
    setOrders(data);
    setStatus("success");
  }

  function onFetchFail(error) {
    console.log("O-O. Something is wrong!", error)
    setStatus("error");
  }

  return (
    <div className="orders-container">
      <h1>Orders: </h1>
      {status === 'loading' && <Loader />}
      {status === 'success' && ordersArray}
    </div>
  );
}
