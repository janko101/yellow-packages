// NPM Packages
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Project
import OrdersList from './Components/OrdersList'
import "./styles/style.css"
import Header from './Components/Header'

export default function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Header />
         <Switch>
          <Route component={OrdersList} path="/" exact />
        </Switch>
         </BrowserRouter>
    </div>
  )
}
