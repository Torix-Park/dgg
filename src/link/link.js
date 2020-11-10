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
import { Slide } from "react-slideshow-image";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./link.css";

export default class Link extends React.Component {
   render() {
      const properties = {
         duration: 3000,
         autoplay: true,
         transitionDuration: 2000,
         arrows: false,
         infinite: true,
         easing: "ease",
      };
      const slideImages = [
         "https://www.bungie.net/7/ca/destiny/products/beyondlight/media_wallpaper_5.png",
         "https://www.bungie.net/7/ca/destiny/products/beyondlight/media_wallpaper_6.png",
         "https://www.bungie.net/7/ca/destiny/products/beyondlight/media_wallpaper_1.png",
      ];
      return (
         <div className="link">
            <div className="slide-container">
               <Slide ref={this.slideRef} {...properties}>
                  {slideImages.map((each, index) => (
                     <div key={index} className="each-slide">
                        <img className="lazy" src={each} alt="sample" />
                     </div>
                  ))}
               </Slide>
            </div>

            <Router>
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
               <p>Created By : Torix05</p>
            </div>
         </div>
      );
   }
}
