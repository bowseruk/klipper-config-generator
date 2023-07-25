import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><App /></Layout>,
  },
], {basename: "/klipper-config-generator/"});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
