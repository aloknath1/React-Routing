import React, {Component} from 'react';
import { NavLink} from "react-router-dom";
import './Menu.css';
export class Menu extends Component {
  render(){
    return (   
       <nav>
            <ul>
              <li><NavLink to="/about/">About</NavLink> </li>
            <li><NavLink to="/contact/">Contact</NavLink>  </li>
            <li><NavLink to="/product/">Product</NavLink>  </li>
            </ul>
          </nav> 
    );
  }
}