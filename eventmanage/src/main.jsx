import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './route/Routerd.jsx'
import Authprovider from './Authprovid/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
       <RouterProvider router={routes}/>
    </Authprovider>
  </React.StrictMode>,
)
