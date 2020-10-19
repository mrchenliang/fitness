import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/home/home.page";
import Landing from "./pages/landing/landing.page";

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter> 
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;









