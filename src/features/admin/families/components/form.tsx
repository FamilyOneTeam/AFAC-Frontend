"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  Button,
} from "@/components/ui";
import { familyFormSchemaType, StatusOfTheFosterFamily, StatusOfTheMentoring } from "../types";
import { familyFormSchema } from "../schemas";
import PersonalDataForm from "./forms/personal-data-form";
import { useState } from "react";
import FamilyDataForm from "./forms/family-data-form";
import FosterDataForm from "./forms/foster-data-form";


const FamilyForm = ({ showForm }: {showForm: string}) => {
  const [isEditingForm, setIsEditingForm] = useState(false);
  const form = useForm<familyFormSchemaType>({
    resolver: zodResolver(familyFormSchema),
    defaultValues: {
      nombre: "Juan Perez",
      correo: "correo@dominio.com",
      rut: "30.686.957-8",
      fecha_nacimiento: "20/12/1990",
      lugar_nacimiento: "Parinacota",
      telefono: "+56 9 5896-1254",
      estado_civil: "Casado",
      pais: "Chile",
      region_provincia: "Región de Magallanes",
      comuna_ciudad: "Linares",
      direccion: "Avenida Costanera Sur 2730",
      fecha_ingreso_afac: "12/05/2020",
      fecha_ingreso_fa: "12/05/2020",
      fecha_ultimo_contacto: "12/05/2024",
      duracion_evaluacion: "4 semanas",
      tiempo_primera_acogida: "2 días",
      fecha_primer_acogimiento: "12/05/2020",
      cantidad_personas_acogidas: 20,
      hijos: 5,
      estado_de_acogimiento: StatusOfTheFosterFamily.SIN_ACOGIMIENTO,
      estado_de_mentoria: StatusOfTheMentoring.NINGUNA
    },
  });

  const onSubmit = async (values: familyFormSchemaType) => {
    console.log(values);
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full px-2 ">
          {showForm === "personal" && (
            <PersonalDataForm form={form} isEditing={isEditingForm} />
          )}
          {showForm === "familia" && (
            <FamilyDataForm form={form} isEditing={isEditingForm} />
          )}
          {showForm === "estado" && <FosterDataForm form={form} isEditing={isEditingForm} />}
          <div className="flex flex-col md:flex-row gap-2 pt-8">
            <Button
              type="button"
              disabled={!isEditingForm}
              onClick={() => setIsEditingForm(false)}
              variant={"destructive"}
              className="w-full md:w-40"
            >
              Cancelar
            </Button>
            <Button
              type="button"
              variant={"primary"}
              className={`w-full md:w-40 ${
                isEditingForm ? "hidden" : "flex items-center"
              }`}
              onClick={() => setIsEditingForm(true)}
            >
              Editar datos
            </Button>
            <Button
              type="submit"
              variant={"primary"}
              className={`w-full md:w-40 ${
                isEditingForm ? "flex items-center" : "hidden"
              }`}
            >
              Guardar cambios
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default FamilyForm;
