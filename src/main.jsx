import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Message from './message';
import Tester from './router';
import SignIn from './signin';
import Details from './MacDetails';
import Cart from './cart';
import Hola from './login';
import Caart from './emptycart';
const router=createBrowserRouter([
  {
    path:'/',
    element: <Message />,
    errorElement:<div>404 Not Found</div>
  },
  {
    path:'/test',
    element:<Tester />,
  },
  {
    path:'/register',
    element:<SignIn />,
  },
  {
    path:'/MacDetails',
    element:<Details />,
  },
  {
    path:'/YourCart',
    element:<Cart />,
  },
  {
    path:'/userVishwa',
    element:<Hola />,
  },
  {
    path:'/Cart',
    element:<Caart />,
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
