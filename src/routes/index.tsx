import App from '@/App';
import UpdateCredencials from "@/features/auth/admin/page";
import Login from '@/features/auth/login/page';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/update-credencials",
    element: <UpdateCredencials />,
  },
  {
    path: "*",
    element: <h1>Página no encontrada</h1>,
  },
]);

export default function Router() {
    return <RouterProvider router={router} fallbackElement={<p>Cargando...</p>} />;
}