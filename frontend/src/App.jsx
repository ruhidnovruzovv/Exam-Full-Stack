import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Basket from './pages/Basket/Basket';
import Shops from './pages/Shops/Shops';
import Contact from './pages/Contact/Contact';

const App = () => {

  const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/admin',
        element: <Admin />
      },
      {
        path: '/basket',
        element: <Basket />
      },
      {
        path: '/shop',
        element: <Shops />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }])

  return (
    <RouterProvider router={router} />
  )
}

export default App