import React from "react";
import ReactDOM from "react-dom/client";
import DetailApp from "./pages/DetailApp";
import ListView from "./pages/ListView";
import ErrorView from "./pages/ErrorView";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import App from "./App";


const router = createBrowserRouter(
  createRoutesFromElements(
    /* Det er denne der muliggøre at skabe struktur for elementerne */
    <Route path="/" element={<App />} errorElement={<ErrorView/>}>{/* Her kan vi få den til at vise en bestemt side, hvis der er en fejl på siden */}
      {" "}
      {/* Entry point, eg. dr.dk uden noge /page1 etc. */}
      <Route index element={<ListView />} />
      <Route path="/details/:id" element={<DetailApp />} />{" "}
      {/* details, kan man selv opfinde. det skal bare matche det som sendes op i URL'en */}
    </Route>
  )
); /* NU har vi oprettet vores router */
/* :id fortæller broseren at det er et dynamisk id. */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// her står der at app er det element der rendere hele siden.

// main er den der bliver renderet i index.html og tager fat i det der vises i app.jsx
