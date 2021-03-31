import React, { useState, useEffect } from 'react'
import Order from './Order';

export default function Orders() {
  // state
  const [orders, setOrders] = useState([]);

  const activeOrders = orders.map(order => {
    return <Order key={order.id} orderData={order}/>
  })

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/orders.json?key=e49e6840")
    .then(response => response.json())
    .then(data => setOrders(data))
  }, [])

  return (
    <div>
      <h1>Orders: </h1>
      {activeOrders}
    </div>
  )
}
