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
            <Link
              to={"/auth/login"}
              className="text-center rounded-lg font-normal bg-greenNormal focus:bg-greenNormal focus:border focus:border-black active:bg-white active:text-grayDarker active:border active:border-greenDarker disabled:bg-greenLight disabled:text-gray-900 focus:text-black text-black hover:bg-greenDarker hover:text-white py-2 px-6 w-full md:w-1/4"
            >
              Empzar
            </Link>
          </div>
        </section>
        <section className="items-center hidden md:grid">
          <img src="/welcome/welcome-img.svg" alt="" />
        </section>
      </>
    );
}