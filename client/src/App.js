import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Single from './pages/Single'
import Write from './pages/Write'
import Footer from './Components/Footer'
import About from './pages/About';
import Contact from './pages/Contact';
import { createBrowserRouter,RouterProvider,Route,Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  
  
]);

function App() {
  return (
      <div >
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
