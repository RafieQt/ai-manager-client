import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Components/Home/Home.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';
import AllModels from './Components/AllModels/AllModels.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './context/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index: true,
        
        element: <Home></Home>
      },
      {
        path:'/all-models',
        loader:()=> fetch('http://localhost:5000/models'),
        element:<AllModels></AllModels>
      },
      {
        path:'/signin',
        element: <SignIn></SignIn>
      },
      {
        path:'/register',
        element: <Register></Register>
      },

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
