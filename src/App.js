import "./styles.css";

import Home from "./components/Home";
import Books from "./components/Books";
import Secret from "./components/Secret";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Book Store</h1>
        <div className="navigation">
          <Link to="/" id="home-link">
            Home
          </Link>

          <Link to="/books" id="books-link">
            Books
          </Link>

          <Link to="/secret" id="secret-link">
            Secret Collection
          </Link>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/books">
              <Books />
            </Route>

            <Route path="/secret">
              <Secret />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

//BROWSER ENCLOSING==> LINK + SWITCH==>ROUTE
