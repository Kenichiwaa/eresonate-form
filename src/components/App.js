import React from "react";
import { Router, Route } from "react-router-dom";

import FormShow from "./pages/FormShow";
import FormList from "./pages/FormList";
import Header from "./Header";
import Footer from "./Footer";

import history from "../history";

const App = () => {
  return (
    <div className="ui">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={FormShow} />
        <Route path="/form/list" exact component={FormList} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
