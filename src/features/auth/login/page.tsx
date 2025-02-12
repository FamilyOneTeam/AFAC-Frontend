import AuthLayout from "@/layouts/auth.layout";
import LoginForm from "./form";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <AuthLayout>
      <section className="grid items-center">
        <div className="relative flex flex-col gap-12 md:gap-16">
          <Link to={"/"}>
            <img
              src="/common/logo-AFAC.svg"
              alt="AFAC"
              className="max-w-36 -mb-7"
            />
          </Link>
          <LoginForm />
        </div>
      </section>
      <section className="items-center hidden md:grid">
        <img src="/welcome/welcome-img.svg" alt="" />
      </section>
    </AuthLayout>
  );
}
