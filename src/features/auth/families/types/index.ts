import { z } from 'zod';
import { forgotPasswordSchema, resetPasswordSchema, updateCredencialsFamiliesSchema } from '../schemas/index';

export type updateCredencialsFamiliesSchemaType = z.infer<typeof updateCredencialsFamiliesSchema>;
export type forgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;
export type resetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;
