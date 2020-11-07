import React from "react";
import Sidebar from "../sidebar/sidebar";
import Main from "../main/main";
import Login from "../login/login";
import "./link.css"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

export default class Link extends React.Component {
   render() {
      return (
         <div className="link">
            <Router>
               <Sidebar></Sidebar>
               <Switch>
                  <Route exact path="/" component={Main}></Route>
                  <Route path="/Login" component={Login}></Route>
               </Switch>
            </Router>

            <footer></footer>
         </div>
      );
   }
}
