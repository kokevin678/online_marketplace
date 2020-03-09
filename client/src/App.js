import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Nav/index";
import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Checkout" component={Checkout} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
