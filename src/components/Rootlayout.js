import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

const Rootlayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <img className="nasa-logo" src={logo} alt="nasaLogo" />
          <h1>Nasa Image Application</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="planets">Planets</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Rootlayout;
