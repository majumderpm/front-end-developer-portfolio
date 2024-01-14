import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/main/Main'
import Home from '../pages/home/Home'
import WorkSec from '../pages/worksec/WorkSec';
import About from '../pages/about/About';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
          {
              path: '/',
              element: <Home />
          },
          {
              path: '/work',
              element: <WorkSec />
          },
          {
            path: '/about',
            element: <About />
        },
         
        ]
      }
    ]);

export default router