import AuthLayout from "@/common/layouts/auth-layout";
import LoginForm from "./form";

function Login() {
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
            <h1 className="text-3xl">Ingresa tus credenciales</h1>
            <LoginForm />
          </div>
        }
      ></AuthLayout>
    </>
  );
}

export default Login;
