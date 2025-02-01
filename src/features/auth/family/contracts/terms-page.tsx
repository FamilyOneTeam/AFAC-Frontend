import AuthLayout from "@/layouts/auth.layout";
import TermsContract from "./terms";
import { Button } from "@/components/ui";
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
  return (
    <AuthLayout>
      <section className="grid items-center">
        <div className="relative flex flex-col">
          <img
            src="/common/logo-AFAC.svg"
            alt="AFAC"
            className="max-w-24 mb-10"
          />
          <TermsContract />
          <Button variant={"primary"} className="mt-6 w-36">
            <Link to={"/auth/family/update-credencials"} className="w-full">Volver</Link>
          </Button>
        </div>
      </section>
      <section className="items-center hidden md:grid">
        <img src="/auth/reset-admin-img.svg" alt="" />
      </section>
    </AuthLayout>
  );
}
