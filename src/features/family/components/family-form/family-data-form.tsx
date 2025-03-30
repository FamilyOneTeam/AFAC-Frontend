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

export default function FamilyDataForm({
  form,
  isEditing,
}: PersonalDataFormProps) {
  console.log(isEditing);
  return (
    <>
      <h1 className="font-semibold text-sm pb-2">
        Datos de la Familia de Acogimiento
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 md:gap-x-4 gap-y-4">
        <FormField
          control={form.control}
          name="fecha_ingreso_afac"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Fecha de Ingreso AFAC</FormLabel>
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
          name="fecha_ingreso_fa"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Fecha de ingreso como FA</FormLabel>
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
          name="fecha_ultimo_contacto"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Fecha último contacto</FormLabel>
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
        <br className="hidden md:block"/>
        <FormField
          control={form.control}
          name="duracion_evaluacion"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Duración periódo de Evaluación</FormLabel>
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
          name="tiempo_primera_acogida"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Tiempo transcurrido para la primera acogida</FormLabel>
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
          name="fecha_primer_acogimiento"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Fecha de primer Acogimiento</FormLabel>
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
          name="cantidad_personas_acogidas"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Cantidad de personas Acogidas hasta hoy</FormLabel>
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

        <div className="pt-6">
          <p className="font-bold">Hijos Biológicos</p>

          <FormField
            control={form.control}
            name="hijos"
            render={({ field }) => (
              <FormItem className="relative md:pt-3">
                <FormLabel>Número</FormLabel>
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
      </div>
    </>
  );
}
