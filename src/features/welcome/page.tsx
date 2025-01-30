import { Button } from "@/components/ui";
import { Link } from "react-router-dom";

export default function WelcomeScreen() {
    return (
      <>
        <section className="grid items-center">
          <div className="relative flex flex-col gap-12 md:gap-16">
            <img
              src="/common/logo-AFAC.svg"
              alt="AFAC"
              className="max-w-36 -mb-4 md:-mb-6"
            />
            <h1 className=" font-normal text-2xl md:text-4xl">
              Bienvenido al Sistema <br /> de Gestión de Datos <br />
              de AFAC
            </h1>
            <Button variant={"primary"} className="w-full md:w-52">
              <Link to={"/auth/login"} className="text-center w-full">
                Empzar
              </Link>
            </Button>
          </div>
        </section>
        <section className="items-center hidden md:grid">
          <img src="/welcome/welcome-img.svg" alt="" />
        </section>
      </>
    );
}