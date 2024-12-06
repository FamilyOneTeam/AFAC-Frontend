import AuthLayout from "@/common/layouts/auth-layout";
import UpdateCredencialsFamiliesForm from "./form";

function UpdateCredentialsFamilies() {
  return (
    <>
      <AuthLayout
        image={
          <img
            className="h-[95%] rounded w-full object-cover"
            src="/auth/admin-auth.svg"
            alt="bienvenido/a"
          />
        }
        content={
          <div className="pr-0 md:pr-12">
            <h1 className="text-3xl">
              Ahora, personaliza tus <br /> credenciales
            </h1>
            <UpdateCredencialsFamiliesForm />
          </div>
        }
      ></AuthLayout>
    </>
  );
}

export default UpdateCredentialsFamilies;
