import { Link } from "react-router-dom";

export default function GeneralDatabase() {
  return (
    <div className="px-6 py-4">
      <div className="text-yellowNormal text-2xl flex items-center gap-3">
        <img src="/dashboard/home/base-de-datos.svg" alt="" className="w-9" />
        <p>Base de Datos General</p>
      </div>
      <div className=" h-[2px] mt-2 w-full bg-yellowNormal mb-2"></div>
      <Link to={""} className="flex items-center gap-1 p-2">
        <img src="/dashboard/home/listado.svg" alt="" className="w-8" />
        <span className=" text-lg font-bold">Listado de Familias</span>
      </Link>
      <Link to={""} className="flex items-center gap-1 p-2">
        <img src="/dashboard/home/crear.svg" alt="" className="w-8" />
        <span className=" text-lg font-bold">Crear nuevo usuario</span>
      </Link>
    </div>
  );
}
