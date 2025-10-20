import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import First from '../pages/First';
import Cosmetique from '../pages/Cosmetique';
import Info from '../pages/Info';
import InstallBT from '../pages/InstallBT';
import Start from '../pages/Start';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<First/>
      },
      {
        path:'/Cosmetique',
        element:<Cosmetique/>
      },

      {
        path:'/Info',
        element:<Info />
      },

       {
        path:'/InstallBT',
        element:<InstallBT />
      },

      {
        path:'/Start',
        element:<Start />
      },

     
    ]
  }
]);

export default router;