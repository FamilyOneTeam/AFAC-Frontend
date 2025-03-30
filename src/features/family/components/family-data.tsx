import { useState } from "react";
import UpdateFamily from "./family-form/update-family";


export default function FamilyData() {
    const [updateFamilyForm, setUpdateFamilyForm] = useState(false);
    return (
      <>
        <div className="px-6 py-4">
          <div className="text-yellowNormal text-2xl flex items-center gap-3">
            <img
              src="/dashboard/home/base-de-datos.svg"
              alt=""
              className="w-9"
            />
            <p>Base de Datos General</p>
          </div>
          <div className="h-[2px] mt-2 w-full bg-yellowNormal mb-2"></div>
          <div onClick={() => setUpdateFamilyForm(true)} className="flex items-center gap-1 p-2">
            <img src="/dashboard/home/listado.svg" alt="" className="w-8" />
            <span className="text-lg font-bold hover:cursor-pointer">Datos de la familia</span>
            {updateFamilyForm && <UpdateFamily setEditFamily={setUpdateFamilyForm} />}
          </div>
        </div>
      </>
    );
}