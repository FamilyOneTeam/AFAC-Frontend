"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  Button,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Input,
  FormMessage,
  Popover,
  PopoverTrigger,
  Calendar,
  PopoverContent,
  Textarea,
  SelectTrigger,
  SelectValue,
  Select,
  SelectContent,
  SelectItem,
} from "@/components/ui";
import { useState } from "react";
import { requestFormSchemaType } from "../../types";
import { requestFormSchema } from "../../schemas";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const RequestForm = () => {
  const today = new Date();

  const [date, setDate] = useState<Date | undefined>(today);

  const form = useForm<requestFormSchemaType>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      nombre: "Juan Perez",
      fecha_de_mentoria: format(today, "dd/MM/yyyy"), // Fixed format
      tema_de_mentoria: "Capacitación",
      mensaje: "",
    },
  });

  const onSubmit = async (values: requestFormSchemaType) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:w-[480px] px-2"
      >
        <div className="flex flex-col gap-2 pt-4">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input className="focus-visible:ring-0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fecha_de_mentoria"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Fecha de la Mentoría <br />
                </FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal bg-zinc-50 border-textLightActive",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 " align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(selectedDate) => {
                          setDate(selectedDate);
                          field.onChange(
                            selectedDate
                              ? format(selectedDate, "dd/MM/yyyy")
                              : ""
                          );
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tema_de_mentoria"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tema de la mentoría</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="focus-visible:ring-0">
                      <SelectValue placeholder="Selecciona un tema" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Capacitación">Capacitación</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Textarea className="focus-visible:ring-0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            variant={"primary"}
            className="w-full md:w-40 flex items-center mt-9"
          >
            Enviar solicitud
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RequestForm;
