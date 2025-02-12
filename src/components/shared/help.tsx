import { useState } from "react";

export default function Help() {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <div className="fixed flex items-center w-fit gap-6 p-2 px-4 text-center right-1 md:right-0 lg:right-12 xl:right-28 2xl:right-[18%] bottom-4 md:bottom-10">
        <div
          onClick={() => setShowText(true)}
          className={`${
            !showText ? "block" : "hidden"
          } hover:cursor-pointer text-3xl text-greenDark bg-greenLight flex items-center justify-center rounded-md border border-BgDark w-16 h-16`}
        >
          <img
            src="/common/auyda.svg"
            alt="necesitas auyda?"
            className="w-8 h-8"
          />
        </div>
        <div
          className={`${
            showText ? "flex" : "hidden"
          } fixed bg-gray-300 rounded-md items-center w-fit gap-6 p-2 px-5 text-center right-4 md:right-0 lg:right-12 xl:right-28 2xl:right-[18%] bottom-5 md:bottom-12`}
        >
          <img
            src="/common/cerrar-dialogo-rojo.svg"
            alt="cerrar el dialogo"
            className="absolute text-redNormal hover:cursor-pointer w-6 h-6 right-2"
            onClick={() => setShowText(false)}
          />
          <img
            src="/common/auyda.svg"
            alt="cerrar el dialogo"
            className="absolute text-redNormal hover:cursor-pointer w-7 h-7 left-2 bottom-5"
          />
          <div className="px-6 py-1 ml-1">
            <p className="font-semibold">¿Necesitas ayuda?</p>
            <p>Contactar soporte.</p>
          </div>
        </div>
      </div>
    </>
  );
}
