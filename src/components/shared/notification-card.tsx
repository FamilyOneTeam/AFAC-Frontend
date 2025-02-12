export default function NotificationsCard({
  openNotifications,
  setOpenNotifications,
}: {
  openNotifications: boolean;
  setOpenNotifications: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  if (!openNotifications) return;
  return (
    <section className=" p-6 pb-12 flex flex-col gap-6 absolute z-10 right-0 top-16 w-[93vw] md:w-[400px] h-fit bg-white rounded-md shadow-sm border-2 border-x-greenNormal border-b-greenNormal">
      <div className="flex justify-end items-start">
        <img
          src="/common/cerrar-dialogo.svg"
          alt="cerrar el dialogo"
          className=" hover:cursor-pointer"
          onClick={() => setOpenNotifications(false)}
        />
      </div>
      <div>
        <h3 className="text-greenDarker text-xl font-semibold">
          Notificaciones
        </h3>
        <p className="font-semibold">
          Mantente al tanto de los cambios en la plataforma.
        </p>
      </div>
      <div>
        <div className="text-bgDarker py-4 border-b-2 border-b-bgDarker flex gap-4">
          <div className="p-4 flex items-center">
            <img src="/common/calendario.svg" alt="" />
          </div>
          <div className="grid gap-4 w-full">
            <div className="">
              <p>Nuevo Seguimiento</p>
              <p>Hay un seguimiento pendiente por realizar.</p>
            </div>
            <div className=" self-end">
              <p className="text-sm text-gray-400">Hace 20 minutos</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-bgDarker py-4 border-b-2 border-b-bgDarker flex gap-4">
          <div className="p-4 flex items-center">
            <img src="/common/sms.svg" alt="" />
          </div>
          <div className="grid gap-4 w-full">
            <div className="">
              <p>Nueva Mentoría</p>
              <p>La Familia González está esperando una nueva mentoría.</p>
            </div>
            <div className=" self-end">
              <p className="text-sm text-gray-400">Ayer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
