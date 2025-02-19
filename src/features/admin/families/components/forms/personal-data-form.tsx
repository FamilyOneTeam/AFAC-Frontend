import { UseFormReturn } from "react-hook-form";
import {
  Input,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui";
import { familyFormSchemaType } from "../../types";

interface PersonalDataFormProps {
  form: UseFormReturn<familyFormSchemaType>;
  isEditing: boolean;
}


export default function PersonalDataForm({ form, isEditing }: PersonalDataFormProps) {
    console.log(isEditing)
    return (
    <>
      <h1 className="font-semibold text-sm pb-2">
        Datos personales del Representante
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 md:gap-x-4 gap-y-2">
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Nombre y Apellido</FormLabel>
              <FormControl>
                <Input
                  disabled={!isEditing}
                  defaultValue={field.value}
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
          name="correo"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input
                  disabled={!isEditing}
                  defaultValue={field.value}
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
          name="rut"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>RUT</FormLabel>
              <FormControl>
                <Input
                  disabled={!isEditing}
                  defaultValue={field.value}
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
          name="fecha_nacimiento"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Fecha de Nacimiento</FormLabel>
              <FormControl>
                <Input
                  disabled={!isEditing}
                  defaultValue={field.value}
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
          name="lugar_nacimiento"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Lugar de Nacimiento</FormLabel>
              <FormControl>
                <Input
                  disabled={!isEditing}
                  defaultValue={field.value}
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
          name="telefono"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input
                  disabled={!isEditing}
                  defaultValue={field.value}
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
          name="estado_civil"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Estado Civil</FormLabel>
              <FormControl>
                <Input
                  disabled={!isEditing}
                  defaultValue={field.value}
                  className="focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br className="" />

        <FormField
          control={form.control}
          name="pais"
          render={({ field }) => (
            <FormItem className="relative md:pt-3">
              <FormLabel>País</FormLabel>
              <FormControl>
                <Input
                  disabled={!isEditing}
                  defaultValue={field.value}
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
          name="region_provincia"
          render={({ field }) => (
            <FormItem className="relative md:pt-3">
              <FormLabel>Región/Provincia</FormLabel>
              <FormControl>
                <Input
                  disabled={!isEditing}
                  defaultValue={field.value}
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
          name="comuna_ciudad"
          render={({ field }) => (
            <FormItem className="relative md:pt-3">
              <FormLabel>Comuna/Ciudad</FormLabel>
              <FormControl>
                <Input
                  disabled={!isEditing}
                  defaultValue={field.value}
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
          name="direccion"
          render={({ field }) => (
            <FormItem className="relative pt-3">
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <Input
                  disabled={!isEditing}
                  defaultValue={field.value}
                  className="focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
