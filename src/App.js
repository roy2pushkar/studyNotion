import "./App.css";
import "./index.css";
import React from "react";
import Navbar from "./components/NavbarItems";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";
import CourseTopic from "./components/CourseTopic";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      <Home />
      <About />
      <CourseTopic />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
