import React from "react";

export default function Order({ orderData }) {
  const formattedDeliveryDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(orderData.eta));

  const lastUpdatedTime = new Intl.DateTimeFormat("en-GB", {
    timeStyle: "long",
  }).format(new Date(orderData.last_updated));

  return (
    <article className="order-info">
      <p>Package ID: {orderData.parcel_id}</p>
      <p>Status: {orderData.status}</p>
      <p>
        Estimated Delivery Time:{" "}
        {orderData.status === "delivered" ? "delivered" : formattedDeliveryDate}
      </p>
      <p>Sender: {orderData.sender}</p>
      <p>Pickup Location: {orderData.location_name} </p>
      <p>Last Updated: {lastUpdatedTime}</p>
      <hr />
    </article>
  );
}
