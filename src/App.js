import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

/**import all component */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Reset from './components/Reset';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Pagenotfound from './components/Pagenotfound';
import Kyb from './components/Kyb';

/**root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Username>Root Route</Username>
    },
    {
        path : '/register',
        element : <Register>Register Route</Register>
    },
    {
        path : '/password',
        element : <Password>Password Route</Password>
    },
    {
        path : '/reset',
        element : <Reset>Reset Route</Reset>
    },
    {
        path : '/Profile',
        element : <Profile>Profile Route</Profile>
    },
    {
        path : 'Recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '*',
        element : <Pagenotfound></Pagenotfound>
    },
    {
        path : 'Kyb',
        element : <Kyb></Kyb>
    }
])

export default function App() {
   return(
    <main>
       <RouterProvider router={router}></RouterProvider>
    
    </main>
   )

}