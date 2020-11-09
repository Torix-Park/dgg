import React from "react";
import Main from "../main/main";
import Clan from "../clan/clan";
import Dungeon from "../dungeon/dungeon";
import Nightfall from "../nightfall/nightfall";
import Osiris from "../osiris/osiris";
import Pvp from "../pvp/pvp";
import Raid from "../raid/raid";
import Storage from "../storage/storage";
import Weapon from "../weapon/weapon";
import Wonder from "../wonder/wonder";
import "./link.css";
import Loading from "../asset/loading.gif";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

export default class Link extends React.Component {
   render() {
      return (
         <div className="link">
            <img src={Loading} />

            <Router>
               {/* <Sidebar></Sidebar> */}
               <Switch>
                  <Route exact path="/" component={Main}></Route>
                  <Route path="/PVP" component={Pvp}></Route>
                  <Route path="/NIGHTFALL" component={Nightfall}></Route>
                  <Route path="/DUNGEON" component={Dungeon}></Route>
                  <Route path="/RAID" component={Raid}></Route>
                  <Route path="/STORAGE" component={Storage}></Route>
                  <Route path="/CLAN" component={Clan}></Route>
                  <Route path="/WEAPON" component={Weapon}></Route>
                  <Route path="/WONDER" component={Wonder}></Route>
                  <Route path="/OSIRIS" component={Osiris}></Route>
               </Switch>
            </Router>
            <div className="footer">
               <p>BY : Torix05</p>
            </div>
         </div>
      );
   }
}
