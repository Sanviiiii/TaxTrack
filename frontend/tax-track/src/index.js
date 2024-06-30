import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
},
{
  path: '/login',
  element: <LoginPage/>,
},
{
  path: '/',
  element: <LoginPage/>,
}, 
{
  path: '/register',
  element: <RegisterPage/>,
},
{
  path: '/home',
  element: <HomePage/>,
},
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);