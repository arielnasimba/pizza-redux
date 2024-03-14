import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {store}  from './App/Store.js'
import { Provider } from "react-redux"

import Home from './components/Home/Home.jsx';
import Resto from './components/Resto.jsx';
import Detail from './components/Detail/Detail.jsx';

const router = createBrowserRouter([


  {
    path: "/pizza-redux",
    element: <Home /> ,
  },
  // {
  //   element: <Resto />,
  // },
  {
    path: "/pizza-redux/detail/:id",
    element: <Detail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

