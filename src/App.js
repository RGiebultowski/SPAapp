import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
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
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/about">About</Link></li>
                <li><Link to ="/contact">Contact</Link></li>
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
