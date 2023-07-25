import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.jsx';
import App from './App.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout><App /></Layout>,
//   },
// ], {basename: "/klipper-config-generator/"});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <RouterProvider router={router} /> */}
     <Layout><App /></Layout>
  </React.StrictMode>,
)
