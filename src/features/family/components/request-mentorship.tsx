import { useState } from "react";
import RequestFormWrapper from "./family-form/request-form-wrapper";

export default function MonitoringVolunteering() {
  const [showForm, setShowForm] = useState(false);
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
      <div onClick={() => setShowForm(true)} className="flex items-center gap-1 p-2">
        <img src="/dashboard/home/mentorias.svg" alt="" className="w-8" />
        <span className=" text-lg font-bold hover:cursor-pointer">Solicitar mentoría</span>
      </div>
      {showForm && <RequestFormWrapper setRequestForm={setShowForm} />}
    </div>
  );
}
