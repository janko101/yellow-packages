import React from "react";

export default function Order({ orderData }) {
  const formattedDeliveryDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(orderData.eta));

  return (
    <div className="order-info">
      <p>Status: {orderData.status}</p>
      <p>Estimated Delivery Time: {formattedDeliveryDate}</p>
      <hr />
    </div>
  );
}
