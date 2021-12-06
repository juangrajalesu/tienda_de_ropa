import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ClothesList from "./components/Clothes/ClothesList";
import ClothesForm from "./components/Clothes/ClothesForm";
import Navbar from "./components/Navbar/Navbar";

import "./index.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={ClothesList} />
          <Route path="/new-clothes" component={ClothesForm} />
          <Route path="/update/:id" component={ClothesForm} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
