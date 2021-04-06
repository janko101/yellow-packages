import React from "react";

export default function Order({ orderData }) {
  //Constants
  const formattedDeliveryDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(orderData.eta));

  const lastUpdatedTime = new Intl.DateTimeFormat("en-GB", {
    timeStyle: "short",
  }).format(new Date(orderData.last_updated));

  // Methods
  function formattedStatus(status) {
    switch (status) {
      case "delivered":
        return "Delivered";
      case "on-the-way":
        return "On The Way";
      case "order-info-received":
        return "Order Info Received";
      case "ready-for-pickup":
        return "Ready For Pickup";
      default:
        return status;
    }
  }

  return (
    <article className="order-info">
      <div id="first-order-info">
        <span
          id="package-id"
          className="left-order-info"
        >{`Package ID: ${orderData.parcel_id}`}</span>
        <span id="status-info" className="right-order-info">
          {formattedStatus(orderData.status)}
        </span>
      </div>

      <div id="second-order-info">
        <p className="left-order-info">{`Sender: ${orderData.sender}`}</p>

        {orderData.status !== "ready-for-pickup" &&
          orderData.status !== "delivered" && (
            <p className="left-order-info">{`ETA: ${formattedDeliveryDate}h`}</p>
          )}

        <p className="left-order-info">{`Pickup Location: ${orderData.location_name}`}</p>
      </div>

      <div id="third-order-info">
        {" "}
        <span
          id="last-updated"
          className="right-order-info"
        >{`Last Updated: ${lastUpdatedTime}h`}</span>
      </div>
    </article>
  );
}
