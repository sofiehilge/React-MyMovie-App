import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DetailApp, { movieDetailAppData } from "./pages/DetailApp";
import { listViewData } from "./pages/ListView";
import ErrorView from "./pages/ErrorView";
import ListView from "./pages/ListView";
import LoadingView from "./pages/LoadingView";
// import BookmarkApp from "./pages/BookmarkApp";
const LazyBookmarkApp = React.lazy(() => import("./pages/BookmarkApp"));
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    /* Det er denne der muliggøre at skabe struktur for elementerne */
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      {/* Her kan vi få den til at vise en bestemt side, hvis der er en fejl på siden */}
      {/* Entry point, eg. dr.dk uden noge /page1 etc. */}
      <Route index loader={listViewData} element={<ListView />} />
      <Route
        path="/details/:id"
        loader={({ params }) => movieDetailAppData(params.id)}
        element={<DetailApp />}
        /* details, kan man selv opfinde. det skal bare matche det som sendes op i URL'en */
      />
      <Route
        path="/bookmark"
        element={
          <Suspense fallback={<LoadingView />}>
            <LazyBookmarkApp />
          </Suspense>
        }
        /* Suspense venter på at det vi har kaldter loadet, for i det øjeblik den er loadet, så viser fjerner den vores fallback */
      />
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
