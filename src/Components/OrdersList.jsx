import React, { useState, useEffect } from 'react'
import Order from './Order';

export default function Orders() {
  // state
  const [orders, setOrders] = useState([]);

  const ordersArray = orders.map(order => {
    return <Order key={order.id} orderData={order}/>
  })

  async function fetchData() {
    const response = await fetch("https://my.api.mockaroo.com/orders.json?key=e49e6840")
    const data = await response.json()
    setOrders(data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="orders-container">
      <h1>Orders: </h1>
      {ordersArray}
    </div>
  )
}
