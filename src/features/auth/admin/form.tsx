"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import {
  Input,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Button,
  Checkbox,
} from "@/components/ui";
import { updateCredencialsSchemaType } from "./types/index";
import { updateCredencialsSchema } from "./schemas/index";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const UpdateCredencialsForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const form = useForm<updateCredencialsSchemaType>({
    resolver: zodResolver(updateCredencialsSchema),
    defaultValues: {
      contrasena: "",
      repiteContrasena: "",
      terminos: false,
      contrato: false,
    },
  });

  const onSubmit = async (values: updateCredencialsSchemaType) => {
    console.log(values);
    navigate("/home");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:max-w-sm"
      >
        <h1 className="pb-8 text-3xl md:text-3xl lg:text-4xl">
          Ingresa tus credenciales{" "}
        </h1>
        <FormField
          control={form.control}
          name="contrasena"
          render={({ field }) => (
            <FormItem className="pb-8 relative">
              <IoIosEyeOff
                onClick={() => setShowPassword(!showPassword)}
                className={`${
                  !showPassword ? "block" : "hidden"
                } absolute text-gray right-0 top-[43.6px] mr-2 hover:cursor-pointer`}
              />
              <IoIosEye
                onClick={() => setShowPassword(!showPassword)}
                className={`${
                  showPassword ? "block" : "hidden"
                } absolute text-gray right-0 top-[35.4px] mr-2 hover:cursor-pointer`}
              />
              <FormLabel className="text-black">Nueva Contraseña</FormLabel>
              <FormControl>
                <Input
                  placeholder="minimo 8 caracteres"
                  type={showPassword ? "text" : "password"}
                  className="focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repiteContrasena"
          render={({ field }) => (
            <FormItem className="pb-8 relative">
              <IoIosEyeOff
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={`${
                  !showConfirmPassword ? "block" : "hidden"
                } absolute text-gray right-0 top-[43.6px] mr-2 hover:cursor-pointer`}
              />
              <IoIosEye
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={`${
                  showConfirmPassword ? "block" : "hidden"
                } absolute text-gray right-0 top-[35.4px] mr-2 hover:cursor-pointer`}
              />
              <FormLabel className="text-black">Repetir Contraseña</FormLabel>
              <FormControl>
                <Input
                  placeholder="minimo 8 caracteres"
                  type={showConfirmPassword ? "text" : "password"}
                  className={`focus-visible:ring-0 ${form.formState.errors.repiteContrasena ? 'border-redNormal bg-white' : ''}`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terminos"
          render={({ field }) => (
            <FormItem className="pb-8">
              <div className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0 text-black">
                  Aceptar{" "}
                  <Link
                    to={"/auth/terms-conditions"}
                    className="text-greenDarker underline"
                  >
                    términos y condiciones
                  </Link>
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contrato"
          render={({ field }) => (
            <FormItem className="pb-8">
              <div className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0 text-black">
                  Aceptar{" "}
                  <Link
                    to={"/auth/family/privacy-conditions"}
                    className="text-greenDarker underline"
                  >
                    acuerdo de confidencialidad AFAC
                  </Link>
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full pt-3">
          <Button variant={"primary"} className="w-full md:w-52">
            Actualizar contraseña
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateCredencialsForm;
