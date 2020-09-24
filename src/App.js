import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/home.page";
import About from "./pages/about/about.page";
import Landing from "./pages/landing/landing.page";
// import Project from "./pages/project/project.component";

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter> 
          <Switch>
            <Route path="/about" component={Landing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;









