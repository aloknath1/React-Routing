import React from 'react';
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import {Header} from './Header/Header';
import {Menu} from './Menu/Menu';
import {About} from './About/About';
import {Contact} from './Contact/Contact';
import {Product} from './Product/Product';
import {Footer} from './Footer/Footer';
import './App.css';

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header />
        <div className="app-body">
          <Menu />
          <div className="content">
            <Switch>
              <Route path="/about/" component={About} />
              <Route path="/contact/" component={Contact} />
              <Route path="/product/" component={Product} />
            </Switch>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}