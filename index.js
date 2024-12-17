import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './contexts/CartContext';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './Components/Home';
import AppAbout from './Components/About';
import AppBlog from './Components/Blog';
import AppServices from './Components/Services';
import AppFeatured from './Components/Featured';
import AppChefs from './Components/Chefs';
import AppContact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Maincomponent/Dashboard';
import DashboardOverview from './Maincomponent/DashboardOverview';
import Products from './Maincomponent/Products';
import Orders from './Maincomponent/Orders';
import Customers from './Maincomponent/Customers';
import AccountSettings from './Maincomponent/AccountSettings';
import ManageUsers from './Maincomponent/ManageUsers';
import ManageOrders from './Maincomponent/ManageOrders';
import Inventory from './Maincomponent/Inventory';
import SalesReports from './Maincomponent/SalesReports';
import Cart from './Maincomponent/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { path: "about", element: <AppAbout /> },
          { path: "blog", element: <AppBlog /> },
          { path: "services", element: <AppServices /> },
          { path: "featured", element: <AppFeatured /> },
          { path: "chefs", element: <AppChefs /> },
          { path: "contact", element: <AppContact /> },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  
  {
    path: "/dashboard",
    element: <Dashboard />,  // Dashboard layout with Sidebar

    children: [
      {
        index: true,  // Default route for /dashboard
        element: <DashboardOverview />,
      },
      {
        path: "products",  // /dashboard/products
        element: <Products />,
      },
      {
        path: "orders", // /dashboard/orders
        element: <Orders />,
      },
      {
        path: "customers", // /dashboard/customers
        element: <Customers />,
      },
      {
        path: "account-settings", // /dashboard/account-settings
        element: <AccountSettings />,
      },
      {
        path: "manage-users", // /dashboard/manage-users
        element: <ManageUsers />,
      },
      {
        path: "manage-orders", // /dashboard/manage-orders
        element: <ManageOrders />,
      },
      {
        path: "inventory", // /dashboard/inventory
        element: <Inventory />,
      },
      {
        path: "sales-reports", // /dashboard/sales-reports
        element: <SalesReports />,
      },
      {
        path: "cart",  // /dashboard/cart
        element: <Cart />,
      },

    ],
  },
  {
    path: "cart",  // /dashboard/cart
    element: <Cart />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);

reportWebVitals();