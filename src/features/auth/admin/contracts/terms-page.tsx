import AuthLayout from "@/layouts/auth.layout";
import TermsContract from "./terms";
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
          <Link
            to={"/auth/update-credencials"}
            className="text-center mt-6 w-full md:w-36  rounded-lg  px-4 py-3 font-normal bg-greenNormal focus:bg-greenNormal focus:border focus:border-black active:bg-white active:text-grayDarker active:border active:border-greenDarker disabled:bg-greenLight disabled:text-gray-900 focus:text-black text-black hover:bg-greenDarker hover:text-white"
          >
            Volver
          </Link>
        </div>
      </section>
      <section className="items-center hidden md:grid">
        <img src="/auth/reset-family-img.svg" alt="" />
      </section>
    </AuthLayout>
  );
}
