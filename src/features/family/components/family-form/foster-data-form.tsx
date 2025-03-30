import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  RadioGroupItem,
  RadioGroup,
} from "@/components/ui";
import { familyFormSchemaType, StatusOfTheFosterFamily, StatusOfTheMentoring } from "../../types";


interface PersonalDataFormProps {
  form: UseFormReturn<familyFormSchemaType>;
  isEditing: boolean;
}

export default function FosterDataForm({
  form,
  isEditing,
}: PersonalDataFormProps) {
  console.log(isEditing);
  return (
    <>
      <div className="grid gap-y-6">
        <FormField
          control={form.control}
          name="estado_de_acogimiento"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Estado de la Familia de Acogimiento</FormLabel>
              <FormControl>
                <RadioGroup
                  disabled={!isEditing}
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={StatusOfTheFosterFamily.ACOGIENDO}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">Acogiendo</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={StatusOfTheFosterFamily.SIN_ACOGIMIENTO}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Sin Acogimiento
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={StatusOfTheFosterFamily.PERMANENTE}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Acogida Permanente
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="estado_de_mentoria"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>
                Según la experiencia como familia de acogimiento, considerarías:
              </FormLabel>
              <FormControl>
                <RadioGroup
                  disabled={!isEditing}
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={StatusOfTheMentoring.SOLICITAR_MENTORIA}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Solicitar mentoría
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={StatusOfTheMentoring.POSTULAR_FAMILIA_MENTORA}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Postular como familia mentora
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={StatusOfTheMentoring.NINGUNA} />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Por el momento ninguna de las anteriores.
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
