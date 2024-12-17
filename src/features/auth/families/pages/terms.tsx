import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function TermsAndConditions() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/auth/familias/personalizar");
  };
  return (
    <div className="grid p-2 md:p-4 min-h-screen">
      <Link to={"/"} className="px-6 top-4 left-4 w-full">
        <img src="/common/afac-logo.svg" alt="AFAC" className="w-36" />
      </Link>
      <div className="max-w-[450px] mx-auto z-30 w-full space-y-2 md:bg-white md:h-fit md:shadow-lg md:p-12 md:pb-12 md:pt-12 md:rounded-xl">
        <section className="flex flex-col items-center max-w-md w-full space-y-4">
          <div className="overflow-y-auto h-[400px] mb-6 pr-4">
            <h1 className="text-2xl font-bold text-center mb-2">
              Términos y Condiciones de FamilyOne
            </h1>

            <p className="text-gray-700 mb-6 text-sm text-center ">
              {" "}
              Última actualización: 10/10/2024
            </p>

            <p className="text-gray-700 mb-4 text-left">
              <span className="font-bold">1. Aceptación de los Términos</span>{" "}
              <br />
              Al acceder y utilizar FamilyOne, aceptas cumplir con estos
              Términos y Condiciones. Si no estás de acuerdo, te pedimos que no
              utilices la aplicación
            </p>
            <p className="text-gray-700 mb-4 text-left">
              <span className="font-bold">2. Descripción del Servicio</span>{" "}
              <br />
              FamilyOne es una plataforma diseñada para gestionar datos
              sensibles y confidenciales de familias asociadas. Nuestro objetivo
              es proporcionar un entorno seguro y eficiente para la gestión de
              información.
            </p>
            <p className="text-gray-700 mb-4 text-left">
              <span className="font-bold">3. Uso de Datos Sensibles</span>{" "}
              <br />
              Al utilizar nuestra aplicación, reconoces que proporcionarás datos
              sensibles y confidenciales. Nos comprometemos a proteger tu
              información y a utilizarla únicamente para los fines establecidos,
              sin ninguna mala intención.
            </p>
            <p className="text-gray-700 mb-4 text-left">
              <span className="font-bold">4. Seguridad de la Información</span>{" "}
              <br />
              Implementamos medidas de seguridad adecuadas para proteger la
              información que gestionamos. Sin embargo, no podemos garantizar la
              seguridad absoluta de tus datos.
            </p>
            <p className="text-gray-700 mb-4 text-left">
              <span className="font-bold">
                5. Derechos de Propiedad Intelectual
              </span>{" "}
              <br />
              Todos los derechos de propiedad intelectual sobre la aplicación y
              su contenido son propiedad de FamilyOne. Queda prohibida cualquier
              reproducción o distribución sin autorización previa.
            </p>
            <p className="text-gray-700 mb-4 text-left">
              <span className="font-bold">6. Responsabilidad</span> <br />
              No seremos responsables de daños directos, indirectos,
              incidentales o consecuentes que puedan surgir del uso de la
              aplicación.
            </p>
            <p className="text-gray-700 mb-4 text-left">
              <span className="font-bold">6. Cambios en los Términos</span>{" "}
              <br />
              Nos reservamos el derecho a modificar estos Términos y Condiciones
              en cualquier momento. Te notificaremos sobre los cambios mediante
              un aviso en la aplicación.{" "}
            </p>
          </div>
          <Button
            onClick={handleBack}
            variant={"primary"}
            className="w-full mt-4 py-6 font-bold text-base"
          >
            {"Volver"}
          </Button>
        </section>
      </div>
    </div>
  );
}
