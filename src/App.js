import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

import {Link, Route} from "wouter"

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Personajes de "Rick y Morty"🌌🧪</h1>
        <Link to='/gif/Rick Sanchez'>Rick Sanchez</Link>
        <Link to='/gif/Morty Smith'>Morty Smith</Link>
        <Link to='/gif/Summer Smith'>Summer Smith</Link>
        <Link to='/gif/Jerry Smith'>Jerry Smith</Link>
        <Link to='/gif/Beth Smith'>Beth Smith</Link>
        <Link to='/gif/Mr. Poopy Butthole'>Mr. Poopy Butthole</Link>
        <Link to='/gif/Meeseeks'>Meeseeks</Link>
        <Route 
        component={ListOfGifs}
        path="/gif/:keyword" />
      </section>
    </div>
  );
}
