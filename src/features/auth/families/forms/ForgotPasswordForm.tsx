"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PiEnvelopeSimpleFill } from "react-icons/pi";
// import { IoIosLock, IoIosEyeOff, IoIosEye } from "react-icons/io";
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
import { Link } from "react-router-dom";
import { forgotPasswordSchemaType } from "../types";
import { forgotPasswordSchema } from "../schemas";

const ForgotPasswordForm = () => {
  const form = useForm<forgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      correo: ""
    },
  });

  const onSubmit = async (values: forgotPasswordSchemaType) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pt-8">
        <FormField
          control={form.control}
          name="correo"
          render={({ field }) => (
            <FormItem className="pb-10 relative">
              <FormLabel>Correo</FormLabel>
              <PiEnvelopeSimpleFill className="absolute top-[36px] text-gray ml-2 text-lg" />
              <FormControl>
                <Input
                  placeholder="e.g john@gmail.com"
                  className="mt-1 pl-7 focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full pt-4 grid gap-2">
          <Button
            variant={"primary"}
            className="bg-greenPressed text-white w-full hover:bg-purpleHover"
          >
            Enviar
          </Button>

            <Link to={"/auth/ingresar"} className="bg-green p-3 rounded text-white text-center">Volver</Link>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
