import { z } from 'zod';
import { familyFormSchema } from '../schemas';

export type familyFormSchemaType = z.infer<typeof familyFormSchema>;

export const StatusOfTheFosterFamily = {
    ACOGIENDO: "Acogiendo",
    SIN_ACOGIMIENTO: "Sin Acogimiento",
    PERMANENTE: "Acogida Permanente"
};

export type StatusType = typeof StatusOfTheFosterFamily[keyof typeof StatusOfTheFosterFamily];

export const StatusOfTheMentoring = {
    SOLICITAR_MENTORIA: "Solicitar mentoría",
    POSTULAR_FAMILIA_MENTORA: "Postular como familia mentora",
    NINGUNA: "Por el momento ninguna de las anteriores."
};

export type MentoringStatus = typeof StatusOfTheMentoring[keyof typeof StatusOfTheMentoring];
