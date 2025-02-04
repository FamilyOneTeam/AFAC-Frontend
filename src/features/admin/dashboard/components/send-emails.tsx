import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function SendEmails() {
  return (
    <section className="md:p-6 pb-6 flex flex-col md:flex-row gap-4 md:gap-0 md:items-center md:justify-between">
      <div className="flex items-center gap-1">
        <img src="/dashboard/home/enviar.svg" alt="enviar" className="w-6" />
        <p className="text-sm font-bold">Enviar comunicado</p>
      </div>
      <div className="flex items-center w-1/2 md:w-fit gap-6 p-2 px-4 rounded-md text-center border-2 border-gray-300">
        <div>
          <p className="font-semibold">¿Necesitas ayuda?</p>
          <p>Contactar soporte.</p>
        </div>
        <AiOutlineExclamationCircle className="text-xl"/>
      </div>
    </section>
  );
}
