import React from "react";
import "./App.css";
import { NavLink, Outlet } from "react-router-dom";
import { Phonebook } from "./Components/Phonebook/Phonebook";
import { Navigation } from "./Components/Navigation/Navigation";
export default function App() {
  return (
    <div className="App">
      <Navigation />

      <Outlet />
      <Phonebook />
    </div>
  );
}
