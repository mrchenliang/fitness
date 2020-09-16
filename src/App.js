import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/home.page";
import About from "./pages/about/about.page";
// import Project from "./pages/project/project.component";

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter> 
          <Switch>
            <Route exact path="/resume" render={() => {window.location.href="/LisaChen_Resume.pdf"}} />
            <Route exact path="/resume/" render={() => {window.location.href="/LisaChen_Resume.pdf"}} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;









