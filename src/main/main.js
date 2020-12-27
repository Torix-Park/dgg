import React from "react";
// import Clock from "../clock/clock";
import "./main.css";
import { Link } from "react-router-dom";
export default class Main extends React.Component {
   // constructor(props) {
   //    super(props);
   // }

   render() {
      return (
         <div className="main">
            <h1>Destiny-Guardians-Guidebook</h1>
            <div className="main-container">
               <div className="grid">
                  <Link to="/PVP" className="main-button">
                     <p className="content">시련의장</p>
                  </Link>
                  <Link to="/DUNGEON"className="main-button">
                     <p className="content">행성던전</p>
                  </Link>
                  <Link to="/NIGHTFALL" className="main-button">
                     <p className="content">황혼전</p>
                  </Link>
                  <Link to="/OSIRIS" className="main-button">
                     <p className="content">오시리스</p>
                  </Link>
                  <Link to="/STORAGE" className="main-button">
                     <p className="content">창고</p>
                  </Link>
                  <Link to="/WONDER" className="main-button">
                     <p className="content">경이</p>
                  </Link>
                  <Link to="/RAID" className="main-button">
                     <p className="content">레이드</p>
                  </Link>
                  <Link to="/WEAPON" className="main-button">
                     <p className="content">무기</p>
                  </Link>
                  <Link to="/CLAN" className="main-button">
                     <p className="content">클랜</p>
                  </Link>
               </div>
            </div>
         </div>
      );
   }
}
