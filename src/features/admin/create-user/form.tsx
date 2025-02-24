import { useForm } from "react-hook-form"
import { createUserSchemaType, userTpe } from "./types"
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserSchema } from "./schemas";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import {
  Form,
  Button,
  FormControl,
  FormItem,
  FormField,
  FormLabel,
  Input,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CreateUserForm({
  handleClose,
  setChangeText,
}: {
  handleClose: () => void;
  setChangeText: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isUserCreated, setIsUserCreated] = useState(false);
  const form = useForm<createUserSchemaType>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      nombre: "",
      correo: "",
      contrasena: "",
      tipo_usuario: "Familia de acogida",
    },
  });
  const copyToClipboard = () => {
    const text = `Correo: ${form.getValues(
      "correo"
    )}\nContraseña: ${form.getValues("contrasena")}`;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Se copiaron las credenciales en el portapapeles");
      })
      .catch((err) => {
        toast.error(err)
      });
  };
  const sendEmailWithCrdentials = () => {
    toast.success(
      `Se ha enviado las credenciales al usuario ${form.getValues("correo")}`
    );
  }
  const onSubmit = async (values: createUserSchemaType) => {
    console.log(values);
    setIsUserCreated(true);
    setChangeText(true);
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
          <div className="grid md:grid-cols-2 gap-2">
            <p className="font-semibold">Datos</p>
            <br className="hidden md:block" />
            {!isUserCreated && (
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem className="relative w-full">
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isUserCreated}
                        placeholder="Nombre y Apellido"
                        defaultValue={field.value}
                        className="focus-visible:ring-0 bg-greenLight"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="correo"
              render={({ field }) => (
                <FormItem className="relative w-full">
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isUserCreated}
                      placeholder="correo@dominio.com"
                      defaultValue={field.value}
                      className="focus-visible:ring-0 bg-greenLight"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contrasena"
              render={({ field }) => (
                <FormItem className="pb-10 relative">
                  <IoIosEyeOff
                    onClick={() => setShowPassword(!showPassword)}
                    className={`${
                      !showPassword ? "block" : "hidden"
                    } absolute text-gray right-0 top-[44.6px] mr-2 hover:cursor-pointer`}
                  />
                  <IoIosEye
                    onClick={() => setShowPassword(!showPassword)}
                    className={`${
                      showPassword ? "block" : "hidden"
                    } absolute text-gray right-0 top-[36.6px] mr-2 hover:cursor-pointer`}
                  />
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isUserCreated}
                      placeholder="minimo 8 caracteres"
                      type={showPassword ? "text" : "password"}
                      className={`focus-visible:ring-0 bg-greenLight`}
                      {...field}
                    />
                  </FormControl>
                  <p
                    className={`text-sm ${isUserCreated ? "hidden" : "block"}`}
                  >
                    Mínimo 8 caracteres, con mayúsculas, minúsculas, números y
                    símbolos
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!isUserCreated && (
              <FormField
                control={form.control}
                name="tipo_usuario"
                render={({ field }) => (
                  <FormItem className="relative w-full -mt-10 md:-mt-0">
                    <FormLabel>Tipo de usuario</FormLabel>
                    <Select
                      disabled={isUserCreated}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-greenLight">
                          <SelectValue
                            placeholder={
                              form.formState.defaultValues?.tipo_usuario
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={userTpe.FAMILIA}>
                          Familia de Acogida
                        </SelectItem>
                        <SelectItem value={userTpe.ADMIN}>
                          Administrador
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          <div
            className={`flex  gap-2  ${
              isUserCreated ? "grid md:flex" : "mt-10 md:mt-0"
            }`}
          >
            <Button
              type="button"
              variant={"destructive"}
              onClick={() => handleClose()}
              className={`w-1/2 md:w-40 ${
                isUserCreated ? "hidden" : "flex items-center"
              }`}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant={"primary"}
              className={`w-full md:w-40 ${
                isUserCreated ? "hidden" : "flex items-center"
              }`}
            >
              Crear
            </Button>
            <Button
              type="button"
              variant={"secondary"}
              className={`w-full md:w-48 ${
                isUserCreated ? "flex items-center" : "hidden"
              }`}
              onClick={copyToClipboard}
            >
              Copiar en portapapeles
            </Button>
            <Button
              type="button"
              variant={"primary"}
              className={`w-full md:w-48 ${
                !isUserCreated ? "hidden" : "flex items-center"
              }`}
              onClick={sendEmailWithCrdentials}
            >
              Enviar por correo
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}