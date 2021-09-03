import React, { Component } from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import './App.css';


const Home = () =>{
  return (
    <h1>Home page</h1>
  );
}

const About = () =>{
  return (
    <h1>About page</h1>
  );
}

const Contact = () =>{
  return (
    <h1>Contact page</h1>
  );
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav>
              <ul>
                <li><NavLink to ="/" exact>Home</NavLink></li>
                <li><NavLink to ="/about" activeClassName="about_selected">About</NavLink></li>
                <li><NavLink to ="/contact">Contact</NavLink></li>
              </ul>
            </nav>
          </header>
          <section>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </section>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
