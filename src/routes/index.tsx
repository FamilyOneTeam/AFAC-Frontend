import App from '@/App';
import UpdateCredencials from "@/features/auth/admin/page";
import UpdateCredencialsFamily from '@/features/auth/family/page';
import Login from '@/features/auth/login/page';
import ForgotPassword from '@/features/auth/forgot-password/page';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import PrivacyContractPage from '@/features/auth/family/contracts/privacy-page';
import Dashboard from '@/features/admin/dashboard/page';
import FollowUp from '@/features/admin/follow-up/page';
import Volunteers from '@/features/admin/volunteers/page';
import MentorshipRequests from '@/features/admin/mentorships/page';
import FamiliesList from '@/features/admin/families/page';
import TermsAndConditionsFamily from '@/features/auth/family/contracts/terms-page';
import TermsAndConditions from '@/features/auth/admin/contracts/terms-page';
import DashboardFamily from '@/features/family/dashboard/page';

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
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/auth/update-credencials",
    element: <UpdateCredencials />,
  },
  {
    path: "/auth/family/update-credencials",
    element: <UpdateCredencialsFamily />,
  },
  {
    path: "/auth/family/terms-conditions",
    element: <TermsAndConditionsFamily />,
  },
  {
    path: "/auth/terms-conditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/auth/family/terms-conditions",
    element: <TermsAndConditionsFamily />,
  },
  {
    path: "/auth/terms-conditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/auth/family/privacy-conditions",
    element: <PrivacyContractPage />,
  },
  {
    path: "/home",
    element: <Dashboard />,
  },
  {
    path: "afac/home",
    element: <DashboardFamily />,
  },
  {
    path: "/follow-up",
    element: <FollowUp />,
  },
  {
    path: "/volunteers",
    element: <Volunteers />,
  },
  {
    path: "/mentorship-requests",
    element: <MentorshipRequests />,
  },
  {
    path: "/families-list",
    element: <FamiliesList />,
  },
  {
    path: "*",
    element: <h1>Página no encontrada</h1>,
  },
]);

export default function Router() {
    return <RouterProvider router={router} fallbackElement={<p>Cargando...</p>} />;
}