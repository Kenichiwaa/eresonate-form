import React from "react";
import { Router, Route } from "react-router-dom";

import FormShow from "./pages/FormShow";
import FormList from "./pages/FormList";
// import Header from "./Header";

import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        {/* <Header /> */}
        <Route path="/" exact component={FormShow} />
        <Route path="/forms/list" exact component={FormList} />
      </Router>
    </div>
  );
};

export default App;
