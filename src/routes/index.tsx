import App from '@/App';
import UpdateCredentialsAdmin from '@/features/auth/admin/page';
import UpdateCredentialsFamilies from '@/features/auth/families/page';
import ForgotPassword from '@/features/auth/families/pages/forgot-password';
import PrivacyContract from '@/features/auth/families/pages/privacy-contract';
import ResetPassword from '@/features/auth/families/pages/reset-password';
import TermsAndConditions from '@/features/auth/families/pages/terms';
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
    path: "/auth/recuperar-contrasena",
    element: <ForgotPassword />,
  },
  {
    path: "/auth/restablecer-contrasena",
    element: <ResetPassword />,
  },
  {
    path: "/auth/admin/personalizar",
    element: <UpdateCredentialsAdmin />,
  },
  {
    path: "/auth/familias/personalizar",
    element: <UpdateCredentialsFamilies />,
  },
  {
    path: "/auth/familias/terminos",
    element: <TermsAndConditions />,
  },
  {
    path: "/auth/familias/contrato-confidencialidad",
    element: <PrivacyContract />,
  },
  {
    path: "*",
    element: <h1>Página no encontrada</h1>,
  },
]);

export default function Router() {
    return <RouterProvider router={router} fallbackElement={<p>Cargando...</p>} />;
}