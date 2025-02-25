import { Link } from "react-router-dom";

export default function WelcomeScreen() {
    return (
      <>
        <section className="grid items-center">
          <div className="relative flex flex-col gap-14 md:gap-16">
            <Link to={"/"}>
              <img
                src="/common/logo-AFAC.svg"
                alt="AFAC"
                className="max-w-36 -mb-10"
              />
            </Link>
            <h1 className="font-normal text-2xl md:text-4xl">
              Bienvenido al Sistema <br /> de Gestión de Datos <br />
              de AFAC
            </h1>
            <Link
              to={"/auth/login"}
              className="text-center w-full md:w-52 rounded-lg  px-4 py-3 font-normal bg-greenNormal focus:bg-greenNormal focus:border focus:border-black active:bg-white active:text-grayDarker active:border active:border-greenDarker disabled:bg-greenLight disabled:text-gray-900 focus:text-black text-black hover:bg-greenDarker hover:text-white"
            >
              Empezar
            </Link>
          </div>
        </section>
        <section className="items-center hidden md:grid">
          <img src="/welcome/welcome-img.svg" alt="" />
        </section>
      </>
    );
}