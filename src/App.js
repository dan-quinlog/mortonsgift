import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/main.scss";
import Navbar from "./navbar/navbar";
import ShopView from "./shopview/shopview";
import ProjectView from './project/projectview';
import Footer from "./footer/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ShopView} />
          <Route path="/project/:slug" component={ProjectView} />
          <Route render={() => (<div>hi there</div>)} />
        </Switch>
        <div className="footer__spacer"></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
