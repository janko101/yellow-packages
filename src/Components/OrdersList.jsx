import React, { useState, useEffect } from 'react'

export default function Orders() {
  // state
  const [orders, setOrders] = useState([]);

  const activeOrders = orders.map(order => {
    return <p>{JSON.stringify(order)}</p>
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
