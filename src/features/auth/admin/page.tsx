import AuthLayout from "@/layouts/auth.layout";
import UpdateCredencialsForm from "./form";

export default function UpdateCredencials() {
  return (
    <AuthLayout>
      <section className="grid items-center">
        <div className="relative flex flex-col gap-12 md:gap-16">
          <img
            src="/common/logo-AFAC.svg"
            alt="AFAC"
            className="max-w-36 -mb-4 md:-mb-6"
          />
          <UpdateCredencialsForm />
        </div>
      </section>
      <section className="items-center hidden md:grid">
        <img src="/auth/reset-admin-img.svg" alt="" />
      </section>
    </AuthLayout>
  );
}