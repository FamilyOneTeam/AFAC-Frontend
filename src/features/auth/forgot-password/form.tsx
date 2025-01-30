import { useForm, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { forgotPasswordSchemaType } from "./types";
import { forgotPasswordSchema } from "./schemas/index";
import { Link } from "react-router-dom";


const ForgotPasswordForm = () => {
  const form = useForm<forgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      correo: "",
    },
    mode: "onChange",
  });
  const { isSubmitted, errors } = useFormState({
    control: form.control,
  });
  const onSubmit = async (values: forgotPasswordSchemaType) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pt-8">
        <h1 className="pb-2 text-2xl md:text-3xl">Recuperar contraseña</h1>
        <p className="pb-10 text-base">
          Introduce los datos a continuación y te enviaremos un correo
          electrónico con instrucciones para recuperar tu contraseña
        </p>
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

        <div className="w-full flex gap-2 pt-3">
          <Button type="button" variant={"secondary"} className="w-2/4">
            <Link className="w-full" to={"/auth/login"}>Cancelar</Link>
          </Button>
          <Button variant={"primary"} className="w-full">
            Recuperar Contraseña
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
