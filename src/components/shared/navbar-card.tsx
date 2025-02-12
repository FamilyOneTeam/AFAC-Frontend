
export default function NavbarCard({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    if (!openMenu) return;
  return (
    <section className=" p-6 flex flex-col gap-6 absolute z-10 right-0 top-16 w-[93vw] md:w-[400px] h-[400px] bg-white rounded-md shadow-sm border-2 border-x-greenNormal border-b-greenNormal">
      <div className="flex justify-end items-start">
        <img
          src="/common/cerrar-dialogo.svg"
          alt="cerrar el dialogo"
          className=" hover:cursor-pointer"
          onClick={() => setOpenMenu(false)}
        />
      </div>
      <div>
        <h3 className=" text-xl font-semibold">Nombre</h3>
        <p className="font-semibold">Cargo</p>
        <p className="font-semibold">correo@dominio.com</p>
      </div>
      <div>
        <p className="text-bgDarker font-semibold py-6 border-b-2 border-b-bgDarker">
          Editar Perfil
        </p>
      </div>
      <div>
        <p className="text-redNormal font-semibold py-6 border-b-2 border-b-redNormal">
          Cerrar sesión
        </p>
      </div>
    </section>
  );
}