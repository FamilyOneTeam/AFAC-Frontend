import { z } from 'zod';
import { updateCredencialsFamiliesSchema } from '../schemas/index';

export type updateCredencialsFamiliesSchemaType = z.infer<typeof updateCredencialsFamiliesSchema>;
