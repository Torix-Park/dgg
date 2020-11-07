import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {
   render() {
      return (
         <div className="sidebar">
            <header class="main-head">
               <nav class="head-nav">
                  <ul class="menu">
                     <li>
                        <Link to="/Login">
                           <span>About</span>
                        </Link>
                     </li>
                     <li>
                        <Link>
                           <span>Work</span>
                        </Link>
                     </li>
                     <li>
                        <Link>
                           <span>Blog</span>
                        </Link>
                     </li>
                     <li>
                        <Link>
                           <span>Contact</span>
                        </Link>
                     </li>
                  </ul>
               </nav>
            </header>
         </div>
      );
   }
}
