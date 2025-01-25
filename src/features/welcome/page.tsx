import { Button } from "@/components/ui";

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
            <Button variant={"primary"} className=" py-0 px-6 w-full md:w-1/4">
              Empzar
            </Button>
          </div>
        </section>
        <section className="items-center hidden md:grid">
          <img src="/welcome/welcome-img.svg" alt="" />
        </section>
      </>
    );
}