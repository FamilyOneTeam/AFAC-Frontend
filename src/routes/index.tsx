import App from '@/App';
import UpdateCredentialsAdmin from '@/features/auth/admin/page';
import Login from '@/features/auth/login/page';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth/ingresar",
    element: <Login />,
  },
  {
    path: "/auth/admin/personalizar",
    element: <UpdateCredentialsAdmin />,
  },
  {
    path: "*",
    element: <h1>Página no encontrada</h1>,
  },
]);

export default function Router() {
    return <RouterProvider router={router} fallbackElement={<p>Cargando...</p>} />;
}