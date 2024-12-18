import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PrivacyContract() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/auth/familias/personalizar");
  };

  return (
    <div className="grid p-2 md:p-4 min-h-screen">
      <Link to={"/"} className="px-6 top-4 left-4 w-full">
        <img src="/common/afac-logo.svg" alt="AFAC" className="w-36" />
      </Link>
      <div className="max-w-[450px] z-30 w-full space-y-2 md:bg-white md:h-fit md:shadow-lg mx-auto md:w-full md:p-12 md:pb-12 md:rounded-xl">
        <section className="flex flex-col items-center max-w-md w-full space-y-4">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Contrato de confidencialidad
          </h1>
          <div className="overflow-y-auto h-[350px] mb-6 pr-4">
            <p className="text-gray-700 mb-4 text-left">
              Por medio de la presente declaración, me comprometo a:
            </p>
            <p className="text-gray-700 mb-4 text-left">
              * Mantener la más estricta reserva y no compartir información
              compartida dentro del chat de whatsapp de AFAC.
            </p>
            <p className="text-gray-700 mb-4 text-left">
              * Entiendo que el chat es un espacio protegido donde las familias
              comparten con confianza sus experiencias positivas y negativas y
              también celebran a los niños y niñas en su cuidado, lo cual a
              veces incluye el compartir fotos. Desde el directorio de AFAC
              valoramos la posibilidad de compartir de esta manera dado que
              muestra lo bueno que es el acogimiento y es muy motivante ver los
              rostros de las familias (ustedes) con sus niños y niñas en
              acogimiento.
            </p>
            <p className="text-gray-700 mb-4 text-left">
              * Comprendo que AFAC nunca usará ninguna foto de mi hijo o hija en
              acogimiento y que estas fotos solo se comparten entre el grupo
              como parte del proceso de acompañarse el uno con el otro. En las
              circunstancias que AFAC pide fotos para redes sociales en estos no
              aparecen los niños y niñas en acogimiento y solamente con mi
              consentimiento se publican (me comprometo a enviar un audio con el
              consentimiento de la publicación).
            </p>
            <p className="text-gray-700 mb-4 text-left">
              * Reconozco que las opiniones, mensajes o consejos que envió en el
              chat son de mi responsabilidad y no necesariamente representa
              AFAC.
            </p>
          </div>
          <Button
            onClick={handleBack}
            variant="primary"
            className="w-full mt-4 py-6 font-bold text-base"
          >
            {"Volver"}
          </Button>
        </section>
      </div>
    </div>
  );
}
