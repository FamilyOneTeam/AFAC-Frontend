import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
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
} from "@/components/ui";
import { loginSchemaType } from "./types";
import { loginSchema } from "./schemas/index";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      correo: "",
      contrasena: "",
    },
    mode: "onChange",
  });
  const { isSubmitted, errors } = useFormState({
    control: form.control,
  });
  const onSubmit = async (values: loginSchemaType) => {
    console.log(values);
    navigate("/auth/update-credencials");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:max-w-sm">
        <h1 className="font-normal text-2xl md:text-4xl pb-8 md:pb-10">
          Ingresa tus credenciales{" "}
        </h1>
        <FormField
          control={form.control}
          name="correo"
          render={({ field }) => (
            <FormItem className="pb-10">
              <FormLabel>Correo</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g john@gmail.com"
                  className={`focus-visible:ring-0 ${
                    isSubmitted || errors.correo
                      ? "border-red-500 bg-white"
                      : ""
                  }`}
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
                  placeholder="minimo 8 caracteres"
                  type={showPassword ? "text" : "password"}
                  className={`focus-visible:ring-0 ${
                    isSubmitted || errors.contrasena
                      ? "border-red-500 bg-white"
                      : ""
                  }`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <Link
                to={"/auth/forgot-password"}
                className=" text-sm text-textNormal hover:text-greenNormal text-opacity-70 absolute right-0 underline"
              >
                ¿Necesitas recuperar la contraseña?
              </Link>
            </FormItem>
          )}
        />

        <div className="w-full pt-3">
          <Button variant={"primary"} className="w-full md:w-52">
            Inciar sesión
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
