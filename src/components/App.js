import React from "react";
import { Router, Route } from "react-router-dom";

import FormShow from "./pages/FormShow";
import ThankYouPage from "./pages/ThankYouPage";
import Header from "./Header";
import Footer from "./Footer";

import history from "../history";

const App = () => {
  return (
    <div className="ui">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={FormShow} />
        <Route path="/thanks" exact component={ThankYouPage} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
