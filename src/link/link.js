import React from "react";
import Main from "../main/main";
import Clan from "../clan/clan";
import Dungeon from "../dungeon/dungeon";
import Nightfall from "../nightfall/nightfall";
import Pvp from "../pvp/pvp";
import Raid from "../raid/raid";
import Storage from "../storage/storage";
import Gambit from "../gambit/gambit";
import Wonder from "../wonder/wonder";
import Season from "../season/season";
import Sidebar from "../sidebar/sidebar";
// import Slidebar from "../slide/slide";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./link.css";

export default class Link extends React.Component {
  render() {
    return (
      <div className="link">
        {/* <Slidebar></Slidebar> */}
        <Router>
          <Sidebar></Sidebar>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/PVP" component={Pvp}></Route>
            <Route path="/NIGHTFALL" component={Nightfall}></Route>
            <Route path="/GAMBIT" component={Gambit}></Route>
            <Route path="/DUNGEON" component={Dungeon}></Route>
            <Route path="/STORAGE" component={Storage}></Route>
            <Route path="/WONDER" component={Wonder}></Route>
            <Route path="/RAID" component={Raid}></Route>
            <Route path="/CLAN" component={Clan}></Route>
            <Route path="/SEASON" component={Season}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
