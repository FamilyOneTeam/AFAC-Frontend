import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function Overview() {
  return (
    <section className="bg-white border-4 w-full md:w-3/5 rounded-lg p-4">
      <p className="pb-4">Visión General</p>
      <div className="w-full mb-2 flex flex-col md:flex-row gap-2 justify-between">
        <div className="w-full text-xl p-4 flex border-greenNormal rounded text-greenNormal justify-between items-center border">
          <p>1</p>
          <p>Nuevo Seguimiento</p>
          <MdOutlineRemoveRedEye />
        </div>
        <div className="w-full text-xl p-4 flex border-yellowDark rounded text-yellowDark justify-between items-center border">
          <p>2</p>
          <p>Nuevas Mentorías</p>
          <MdOutlineRemoveRedEye />
        </div>
      </div>
    </section>
  );
}
