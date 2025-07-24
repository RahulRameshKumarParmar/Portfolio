import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Project1 from './components/Projects/Project1';
import Project2 from './components/Projects/Project2';
import Project3 from './components/Projects/Project3';
import NotFound from './components/Not Found/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

const redirect = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },

    {
      path: "/project1",
      element: <Project1 />
    },

    {
      path: "/project2",
      element: <Project2 />
    },

    {
      path: "/project3",
      element: <Project3 />
    },

    {
      path: "*",
      element: <NotFound />
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={redirect} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
