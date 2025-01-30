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
import { updateCredencialsFamilySchemaType } from "./types/index";
import { updateCredencialsFamilySchema } from "./schemas/index";
import { Link } from "react-router-dom";

const UpdateCredencialsFamilyForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const form = useForm<updateCredencialsFamilySchemaType>({
    resolver: zodResolver(updateCredencialsFamilySchema),
    defaultValues: {
      contrasena: "",
      repiteContrasena: "",
      terminos: false,
      contrato: false
    },
  });

  const onSubmit = async (values: updateCredencialsFamilySchemaType) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pt-8">
        <h1 className="pb-8 text-2xl md:text-3xl">
          Por tu seguridad, <br />{" "}
          <span className="text-lg md:text-xl">cambia tu contraseña</span>{" "}
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
                } absolute text-gray right-0 top-[36.6px] mr-2 hover:cursor-pointer`}
              />
              <IoIosEye
                onClick={() => setShowPassword(!showPassword)}
                className={`${
                  showPassword ? "block" : "hidden"
                } absolute text-gray right-0 top-[36.6px] mr-2 hover:cursor-pointer`}
              />
              <FormLabel>Nueva Contraseña</FormLabel>
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
                } absolute text-gray right-0 top-[36.6px] mr-2 hover:cursor-pointer`}
              />
              <IoIosEye
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={`${
                  showConfirmPassword ? "block" : "hidden"
                } absolute text-gray right-0 top-[36.6px] mr-2 hover:cursor-pointer`}
              />
              <FormLabel>Repetir Contraseña</FormLabel>
              <FormControl>
                <Input
                  placeholder="minimo 8 caracteres"
                  type={showConfirmPassword ? "text" : "password"}
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
                <FormLabel className="!mt-0">
                  Aceptar{" "}
                  <Link
                    to={"/auth/family/terms-conditions"}
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
                <FormLabel className="!mt-0">
                  Aceptar{" "}
                  <span className="text-greenDarker underline">
                    acuerdo de confidencialidad AFAC
                  </span>
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

export default UpdateCredencialsFamilyForm;
