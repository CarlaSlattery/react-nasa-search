import "../styles/app.css";
import "../styles/search.css";
import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//pages

import Home from "./Home.js";
import Planets from "./Planets.js";

//layouts
import RootLayout from "./Rootlayout.js";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="planets" element={<Planets />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
