import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import { router } from './Routres/Routers';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import { HelmetProvider } from 'react-helmet-async';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
  <div className='max-w-6xl mx-auto'>
   <RouterProvider router={router} />
   </div>
  </HelmetProvider>
  </React.StrictMode>,
)
