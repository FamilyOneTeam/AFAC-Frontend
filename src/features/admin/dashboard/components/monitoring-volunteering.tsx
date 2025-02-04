import { Link } from "react-router-dom";

export default function MonitoringVolunteering() {
  return (
    <div className="px-6 py-4">
      <div className="text-redNormal text-2xl flex items-center gap-3">
        <img
          src="/dashboard/home/seguimiento-voluntariado.svg"
          alt=""
          className="w-9"
        />
        <p>Seguimiento y Voluntariado</p>
      </div>
      <div className=" h-[2px] mt-2 w-full bg-redNormal mb-2"></div>
      <Link to={""} className="flex items-center gap-1 p-2">
        <img src="/dashboard/home/seguimiento.svg" alt="" className="w-8" />
        <span className=" text-lg font-bold">Seguimiento de Familias</span>
      </Link>
      <Link to={""} className="flex items-center gap-1 p-2">
        <img src="/dashboard/home/mentorias.svg" alt="" className="w-8" />
        <span className=" text-lg font-bold">
          Familias que solicitan mentorías
        </span>
      </Link>
      <Link to={""} className="flex items-center gap-1 p-2">
        <img src="/dashboard/home/voluntarios.svg" alt="" className="w-8" />
        <span className=" text-lg font-bold">Gestión de Voluntarios</span>
      </Link>
    </div>
  );
}
