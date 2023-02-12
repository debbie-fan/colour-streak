import React from 'react';
import ReactDOM from 'react-dom/client';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   }
//   {
//     path: "login",
//     element <Login />
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <RouterProvider router={router} />
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
