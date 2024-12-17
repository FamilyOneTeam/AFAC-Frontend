"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoIosLock, IoIosEyeOff, IoIosEye } from "react-icons/io";
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
import { updateCredencialsFamiliesSchemaType } from "../types";
import { updateCredencialsFamiliesSchema } from "../schemas/index";
import { Link } from "react-router-dom";

const UpdateCredencialsFamiliesForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const form = useForm<updateCredencialsFamiliesSchemaType>({
    resolver: zodResolver(updateCredencialsFamiliesSchema),
    defaultValues: {
      contrasena: "",
      repiteContrasena: "",
      terminos: false,
      confidencialidad: false
    },
  });
  const handleTermsChange = () => {
    const currentValue = form.getValues("terminos");
    form.setValue("terminos", !currentValue);
    if (!currentValue) {
      form.clearErrors("terminos");
    }
  };

  const handleContractChange = () => {
    const currentValue = form.getValues("confidencialidad");
    form.setValue("confidencialidad", !currentValue);
    if (!currentValue) {
      form.clearErrors("confidencialidad");
    }
  };
  const onSubmit = async (values: updateCredencialsFamiliesSchemaType) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pt-8">
        <FormField
          control={form.control}
          name="contrasena"
          render={({ field }) => (
            <FormItem className="pb-8 relative">
              <IoIosLock className="absolute top-[42px] text-gray ml-2 text-lg" />
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
                  className="mt-1 pl-7 focus-visible:ring-0"
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
              <IoIosLock className="absolute top-[42px] text-gray ml-2 text-lg" />
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
                  className="mt-1 pl-7 focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-2 pb-6">
          <div className="items-top flex space-x-2">
            <Checkbox
              id="terms"
              {...form.register("terminos")}
              onClick={handleTermsChange}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Acepto{" "}
                <Link
                  to={"/auth/familias/terminos"}
                  className="underline text-[#00c14d]"
                >
                  términos y condiciones
                </Link>
              </label>
            </div>
          </div>
          <div className="items-top mt-4 flex space-x-2">
            <Checkbox
              id="contract"
              {...form.register("confidencialidad")}
              onClick={handleContractChange}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="contract"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Leí y acepto el{" "}
                <Link
                  to={"/auth/familias/contrato-confidencialidad"}
                  className="underline text-[#00c14d]"
                >
                  contrato de confidencialidad
                </Link>
              </label>
            </div>
          </div>
          {form.formState.errors.terminos && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.terminos.message}
            </p>
          )}
          {form.formState.errors.confidencialidad && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.confidencialidad.message}
            </p>
          )}
        </div>
        <div className="w-full pt-3">
          <Button variant={"primary"} className="w-full hover:bg-purpleHover">
            Continuar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateCredencialsFamiliesForm;
