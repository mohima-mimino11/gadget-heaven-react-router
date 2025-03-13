import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './components/Home/Home.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Laptops from './components/Laptops/Laptops.jsx'
import Phones from './components/Phones/Phones.jsx'
import SmartWatches from './components/Smart-Watches/SmartWatches.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/laptops",
            element: <Home></Home>,
            
          },
          {
            path: "/phones",
            element: <Home></Home>,
          
          },
          {
            path: "/smart-watches",
            element: <Home></Home>
           
          }
        ]
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
