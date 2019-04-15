import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import CompanyLayout from "layouts/CompanyLayout.jsx";
import RetailerLayout from "layouts/RetailerLayout.jsx";
import LogisticLayout from "layouts/LogisticLayout.jsx";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
import Login from "./views/examples/Login";
import Register from "./views/examples/Register";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path="/admin" render={props => <AdminLayout {...props} />} />
    <Route path="/company" render={props => <CompanyLayout {...props} />} />
    <Route path="/Retailer" render={props => <RetailerLayout {...props} />} />
    <Route path="/logistic" render={props => <LogisticLayout {...props} />} />

      <Route path="/Login" render={props => <AuthLayout {...Login} />} />
      <Route path="/Auth" render={props => <AuthLayout {...props}  />} />
      <Route path="/register" component={<AuthLayout {...Register}  />} />

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
