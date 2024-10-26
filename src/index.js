import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home'
import Watch from './components/Watch';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './redux/store'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    //basically the avlue of children gets fit into the outlet that we have made in app.js
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/watch",
        element:<Watch/>
      },
    ]
  },
 ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <RouterProvider router={appRouter}/>
  </Provider>

);

