import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import First from '../pages/First';
import Cosmetique from '../pages/Cosmetique';
import Info from '../pages/Info';

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
    ]
  }
]);

export default router;