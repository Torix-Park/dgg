import React from "react";
// import Clock from "../clock/clock";
import "./sidebar.css";
import PVP from "../asset/pvp.png";
import RAIDS from "../asset/raids.png";
import DISCORD from "../asset/discord.png";
import { Link } from "react-router-dom";
export default class Main extends React.Component {
  // constructor(props) {
  //    super(props);
  // }

  render() {
    return (
      <div className="side">
        <nav class="side-menu">
          <ul>
            <li>
              <Link to="/PVP">
                <i class="fa fa-2x">
                  <img src={PVP} alt="PVP" />
                </i>
                <span class="nav-text">시련의장</span>
              </Link>
            </li>
            <li class="has-subnav">
              <Link to="/NIGHTFALL">
                <i class="fa fa-2x"></i>
                <span class="nav-text">황혼전</span>
              </Link>
            </li>
            <li class="has-subnav">
              <Link to="/GAMBIT">
                <i class="fa fa-2x"></i>
                <span class="nav-text">갬빗</span>
              </Link>
            </li>
            <li class="has-subnav">
              <Link to="/DUNGEON">
                <i class="fa fa-2x"></i>
                <span class="nav-text">던전</span>
              </Link>
            </li>
            <li class="has-subnav">
              <Link to="/STORAGE">
                <i class="fa  fa-2x"></i>
                <span class="nav-text">창고</span>
              </Link>
            </li>
            <li>
              <Link to="/WONDER">
                <i class="fa  fa-2x"></i>
                <span class="nav-text">경이</span>
              </Link>
            </li>
            <li>
              <Link to="/RAID">
                <i class="fa fa-2x">
                  <img src={RAIDS} alt="RAIDS" />
                </i>
                <span class="nav-text">레이드</span>
              </Link>
            </li>
            <li>
              <Link to="/CLAN">
                <i class="fa  fa-2x"></i>
                <span class="nav-text">클랜</span>
              </Link>
            </li>
            <li>
              <Link to="/SEASON">
                <i class="fa  fa-2x"></i>
                <span class="nav-text">시즌</span>
              </Link>
            </li>
          </ul>

          <ul class="logout">
            <li>
              <i class="fa fa-2x">
                <img src={DISCORD} alt="discrod" />
              </i>
              <span class="nav-text">Torix05#6796</span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
