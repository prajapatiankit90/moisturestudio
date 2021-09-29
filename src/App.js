import React from "react";
import "./App.css";
import "./css/Util.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./container/Home";
import Process from "./container/Process";
import About from "./container/About";
import Work from "./container/Work";
import Contact from "./container/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Invoice from "./container/Invoice";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{ height: "100%" }}>
          <Header />
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/work" component={Work} />
            <Route path="/process" component={Process} />
            <Route path="/about" component={About} />
            <Route path="/invoice" component={Invoice} />
            <Route path="/" component={Home} exact={true} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
