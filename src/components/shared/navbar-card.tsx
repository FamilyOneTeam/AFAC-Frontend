import useAuthStore from "@/store";
import {
  Dialog,
  DialogTrigger,
  DialogFooter,
  DialogClose,
  DialogContent,
  Button,
} from "../ui";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function NavbarCard({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  if (!openMenu) return null;

  return (
    <section className="p-6 flex flex-col gap-6 absolute z-10 right-0 top-16 w-[93vw] md:w-[400px] h-[400px] bg-white rounded-md shadow-sm border-2 border-x-greenNormal border-b-greenNormal">
      <div className="flex justify-end items-start">
        <img
          src="/common/cerrar-dialogo.svg"
          alt="cerrar el dialogo"
          className="hover:cursor-pointer"
          onClick={() => setOpenMenu(false)}
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold">Nombre</h3>
        <p className="font-semibold">Cargo</p>
        <p className="font-semibold">correo@dominio.com</p>
      </div>

      <div>
        <p className="text-bgDarker font-semibold py-6 border-b-2 border-b-bgDarker">
          Editar Perfil
        </p>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <div>
            <p className="text-redNormal font-semibold py-6 border-b-2 border-b-redNormal hover:cursor-pointer">
              Cerrar sesión
            </p>
          </div>
        </DialogTrigger>
        <DialogContent className="md:max-w-[450px] py-8 border-0 rounded-2xl w-[95%] mx-auto bg-white">
          <div className="text-lg text-center font-semibold">
            <p>Estas por cerrar tu sesión</p>
            <p>¿Estas seguro que deseas continuar?</p>
          </div>
          <DialogFooter className="flex w-full gap-2">
            <DialogClose asChild>
              <Button
                type="button"
                variant={"destructive"}
                className="w-full rounded-md"
              >
                Cancelar
              </Button>
            </DialogClose>
            <Button
              type="button"
              variant={"primary"}
              className="w-full rounded-md"
              onClick={() => {
                setOpenMenu(false);
                logout();
                toast.success("Cierre exitoso de la sesión");
                navigate("/");
              }}
            >
              Cerrar Sesión
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
