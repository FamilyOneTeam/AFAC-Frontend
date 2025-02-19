import { z } from 'zod';
import { StatusOfTheFosterFamily, StatusOfTheMentoring } from '../types';

export const familyFormSchema = z
  .object({
    nombre: z.string(),
    correo: z.string().email(),
    rut: z.string(),
    fecha_nacimiento: z.string(),
    lugar_nacimiento: z.string(),
    telefono: z.string(),
    estado_civil: z.string(),
    pais: z.string(),
    region_provincia: z.string(),
    comuna_ciudad: z.string(),
    direccion: z.string(),
    fecha_ingreso_afac: z.string(),
    fecha_ingreso_fa: z.string(),
    fecha_ultimo_contacto: z.string(),
    duracion_evaluacion: z.string(),
    tiempo_primera_acogida: z.string(),
    fecha_primer_acogimiento: z.string(),
    cantidad_personas_acogidas: z.number(),
    hijos: z.number(),
    estado_de_acogimiento: z.enum([
      StatusOfTheFosterFamily.ACOGIENDO,
      StatusOfTheFosterFamily.SIN_ACOGIMIENTO,
      StatusOfTheFosterFamily.PERMANENTE
    ]),
    estado_de_mentoria: z.enum([
      StatusOfTheMentoring.SOLICITAR_MENTORIA,
      StatusOfTheMentoring.POSTULAR_FAMILIA_MENTORA,
      StatusOfTheMentoring.NINGUNA
    ])
  });
