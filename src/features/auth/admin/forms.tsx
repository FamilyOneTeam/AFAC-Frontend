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
} from "@/components/ui";
import { updateCredencialsSchemaType } from "./types";
import { updateCredencialsSchema } from "./schemas/index";

const UpdateCredencialsForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const form = useForm<updateCredencialsSchemaType>({
    resolver: zodResolver(updateCredencialsSchema),
    defaultValues: {
      contrasena: "",
      repiteContrasena: ""
    },
  });

  const onSubmit = async (values: updateCredencialsSchemaType) => {
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

        <div className="w-full pt-3">
          <Button variant={"primary"} className="w-full hover:bg-purpleHover">
            Continuar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateCredencialsForm;
