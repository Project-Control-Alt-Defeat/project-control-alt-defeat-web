import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Product from './Products/Products'
import Home from './Home/Home'

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
    <Router>
      <div className = "grid-container">
      <body>
          <div>
              <header className="header">
                  <div className = "brand">
                      <button onClick ={openMenu}>&#9776;</button>
                      <a href="index.html">Control Alt Defeat</a>
                  </div>
                  <div className="header-links">
                      <Link to="/">Home</Link>
                      <Link to="/catalog">Catalog</Link>
                  </div>
              </header>
              <aside className ="sidebar">
                <h3>Shopping Categories</h3>
                <button className= "sidebar-close-button" onClick ={openMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Pants</a>
                    </li>
                    <li>
                      <a href="index.html">Shirts</a>
                  </li>
                </ul>
              </aside>
              <main className ="main">
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/catalog">
                    <Product />
                  </Route>
                </Switch>
              </main>
                <footer>
                    &copy; 2021 Control Alt Defeat
                </footer>
            </div>
        </body>
        </div>
      </Router>
  );
}

export default App;
