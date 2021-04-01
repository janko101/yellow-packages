// Packages
import React from 'react'

// Project
import OrdersList from './Components/OrdersList'
import "./styles/style.css"
import Header from './Components/Header'

export default function App() {
  return (
    <div className="App">
      <Header />
      <OrdersList />
    </div>
  )
}
