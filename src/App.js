import React from "react";
import EpisodeList from "./components/EpisodeList";
import Pagination from "./components/Pagination";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <Pagination />
        </Route>
        <Route path="/episodelist">
          <EpisodeList />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
