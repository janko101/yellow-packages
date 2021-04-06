//Packages
import React, { useState, useEffect } from "react";
import axios from "axios";

//Project
import Order from "./Order";
import Loader from "./Loader";
import Error from "./Error";

export default function Orders({ match }) {
  // State
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("loading");
  const [showOrders, setShowOrders] = useState("notDelivered");

  //Constants
  const apiUrl = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  const allOrders = orders.map((order) => {
    return <Order key={order.id} orderData={order} />;
  });

  const filterNotDeliveredOrders = orders.filter(
    (order) => order.status !== "delivered"
  );
  const notDeliveredOrders = filterNotDeliveredOrders.map((order) => {
    return <Order key={order.id} orderData={order} />;
  });

  const filterOrdersReadyForPickup = orders.filter(
    (order) => order.status === "ready-for-pickup"
  );
  const ordersReadyForPickup = filterOrdersReadyForPickup.map((order) => {
    return <Order key={order.id} orderData={order} />;
  });

  const filterOrdersOnTheWay = orders.filter(
    (order) =>
      order.status === "on-the-way" || order.status === "order-info-received"
  );
  const ordersOnTheWay = filterOrdersOnTheWay.map((order) => {
    return <Order key={order.id} orderData={order} />;
  });

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
      <section className="select-menu">
        <select onChange={(e) => setShowOrders(e.target.value)} id="select-orders">
          <option value="notDelivered">Active Orders</option>
          <option value="allOrders">All Orders</option>
          <option value="readyForPickup">Ready For Pickup</option>
          <option value="onTheWay">On The Way</option>
        </select>
      </section>
      {status === "loading" && <Loader />}

      {status === "success" &&
        showOrders === "notDelivered" &&
        notDeliveredOrders}

      {status === "success" && showOrders === "allOrders" && allOrders}

      {status === "success" &&
        showOrders === "readyForPickup" &&
        ordersReadyForPickup}

      {status === "success" && showOrders === "onTheWay" && ordersOnTheWay}

      {status === "error" && <Error />}
    </div>
  );
}
