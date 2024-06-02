import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import AdminLayout from "./AdminLayout.jsx";
import { Login } from "./pages";
import { AdminLogin , Analytics , ProductListing } from "./pages/admin";
import NotFound from "./pages/admin/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<>Logged in</>} />
      </Route>
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="admin/dashboard" element={<AdminLayout />} >
          <Route path="analytics" element={<Analytics />} />
          <Route path="product-listings" element={<ProductListing/>} />
          <Route path="users" element={<>Users</>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);