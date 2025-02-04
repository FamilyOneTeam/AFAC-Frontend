import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function Help() {
    return (
        <>
        <div className="flex items-center w-1/2 md:w-fit gap-6 p-2 px-4 rounded-md text-center border-2 border-gray-300">
                <div>
                  <p className="font-semibold">¿Necesitas ayuda?</p>
                  <p>Contactar soporte.</p>
                </div>
                <AiOutlineExclamationCircle className="text-xl"/>
              </div>
        </>
    )
}