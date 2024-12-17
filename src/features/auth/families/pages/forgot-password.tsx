import AuthLayout from "@/common/layouts/auth-layout";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";

function ForgotPassword() {
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
            <h1 className="text-3xl mb-5">Recuperar contraseña</h1>
            <p className="font-bold text-sm max-w-[40ch]">
              Introduce los datos a continuación y te enviaremos un correo
              electrónico con instrucciones para recuperar tu contraseña
            </p>
            <ForgotPasswordForm />
          </div>
        }
      ></AuthLayout>
    </>
  );
}

export default ForgotPassword;
