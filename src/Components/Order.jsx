import React from "react";

export default function Order({ orderData }) {
  const formattedDeliveryDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(orderData.eta));

  const lastUpdatedTime = new Intl.DateTimeFormat("en-GB", {
    timeStyle: "short",
  }).format(new Date(orderData.last_updated));

  return (
    <article className="order-info">
      <p>{`Package ID: ${orderData.parcel_id}`}</p>
      <p>{`Sender: ${orderData.sender}`}</p>
      <p>{`Status: ${orderData.status}`}</p>

      {orderData.status !== "ready-for-pickup" &&
        orderData.status !== "delivered" && (
          <p>{`ETA: ${formattedDeliveryDate}h`}</p>
        )}

      <p>{`Pickup Location: ${orderData.location_name}`}</p>
      <p>{`Last Updated: ${lastUpdatedTime}h`}</p>
    </article>
  );
}
