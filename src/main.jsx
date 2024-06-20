import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignIn from './Buyer/componenets/signIn/SignIn.jsx'
import SignUp from './Buyer/componenets/signUp/SignUp.jsx'
import Dashboard from './Buyer/componenets/dashboard/Dashboard.jsx'
import SellOnAnuda from './Buyer/componenets/sellOnAnuda/SellOnAnuda.jsx'
import { Provider } from 'react-redux'
import { store } from './store/Store.jsx'
import AdminLayout from './Admin/AdminLayout.jsx'
import AdminDashboard from './Admin/pages/AdminDashboard.jsx'
import Customers from './Admin/pages/Customers.jsx'
import Profile from './Admin/pages/Profile.jsx'
import Transactions from './Admin/pages/Transactions.jsx'




  const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path: '',
          element:<Dashboard/>            
        },
        {
          path: 'sign-in',
          element:<SignIn/>
        },
        {
          path:'sign-up',
          element:<SignUp/>
        },
        {
          path:'sell-on-anuda',
          element:<SellOnAnuda/>
        },
        {
          path: 'admin/',
          element:<AdminLayout/>,
          children:[
            {
              path:'dashboard',
              element: <AdminDashboard/>
            },
            {
              path:'customers',
              element: <Customers/>
            },
            {
              path:'profile',
              element: <Profile/>
            },
            {
              path:'transactions',
              element: <Transactions/>
            }
          ]
        }
      ]
    }

  ])












ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>,
)
