/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import fetch from 'isomorphic-unfetch';

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";
import SignIn from "./components/SignIn/SignIn";
import Add from "./components/Add/Add"

const hist = createBrowserHistory();

localStorage.clear();
localStorage.userID = 1;
const data = (endpoint) => fetch("http://deca8556.ngrok.io" + endpoint)
                            .then( r => r.json() )
                            .catch(e => console.log(e));
data("/medications/users/" + localStorage.userID).then(r => localStorage.medications = JSON.stringify(r));
data("/users/" + localStorage.userID).then(r => {
  localStorage.id = r[0]._id;
  localStorage.birth_date = r[0].birth_date;
  localStorage.care_taker_name = r[0].care_taker_name;
  localStorage.care_taker_phone_number = r[0].care_taker_phone_number;
  localStorage.civil_id = r[0].civil_id;
  localStorage.name = r[0].name;
  localStorage.sns_id  = r[0].sns_id;
});
data("/records/users/" + localStorage.userID).then(r => localStorage.records = JSON.stringify(r));
localStorage.history = [
{
    "answer": "Sim",
    "date_a": "2019-11-03T15:38:01.000Z",
    "date_q": "1900-01-01T09:00:00.000Z",
    "question": "Já mediu a pressão arterial hoje?"
}
];

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/add" component={Add} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
