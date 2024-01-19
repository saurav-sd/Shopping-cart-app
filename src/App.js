import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import SingleItem from "./Components/SingleItem/SingleItem";

function App({current}) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Products} />
          <Route exact path="/cart" Component={Cart} />
          {/* {!current ? 
            <Navigate to="/" />
           : 
            <Route exact path="/product/:id" component={SingleItem}/>
          } */}
          <Route exact path="/product/:id" Component={SingleItem}/>
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
