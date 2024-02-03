import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.ts";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Counter from "./components/Counter.tsx";

const route = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Counter />}></Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={route}/>  
        <App />
  </Provider>
);
