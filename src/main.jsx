import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import store from './app/store';
import { Provider } from 'react-redux';
import Root from './routes/root';
import ErrorPage from './error-page';
import Home,{loader as homeloader}from './routes/home';
import Book,{loader as bookloader} from './routes/books';
import Authors,{loader as authorloader} from './routes/authors';
import Landin from './routes/Landin';
import Login from './routes/login';
import Signup from './routes/signup';
import About  from './routes/about';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:< Landin />,
        //loader :homeloader

      },
      {
        path:"/home",
        element:<Home />,
        loader:homeloader
      },
      {
        path:"/books/:bookId",
        element:< Book/>,
        loader : bookloader
      },
      {
        path:"/authors/:authorId",
        element : < Authors/>,
        loader : authorloader
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Signup />
      },{
        path:"/about",
        element:<About />
      }

    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
