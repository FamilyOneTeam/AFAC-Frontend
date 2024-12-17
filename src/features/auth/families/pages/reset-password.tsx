import AuthLayout from "@/common/layouts/auth-layout";
import ResetPasswordForm from "../forms/ResetPasswordForm";

function ResetPassword() {
  return (
    <>
      <AuthLayout
        image={
          <img
            className="h-[95%] rounded w-full object-cover"
            src="/auth/login-image.svg"
            alt="bienvenido/a"
          />
        }
        content={
          <div className="pr-0 md:pr-12">
            <h1 className="text-3xl">Restablecer contraseña</h1>
            <ResetPasswordForm />
          </div>
        }
      ></AuthLayout>
    </>
  );
}

export default ResetPassword;
