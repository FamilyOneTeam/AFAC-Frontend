import { z } from 'zod';
import { updateCredencialsFamilySchema } from '../schemas/index';

export type updateCredencialsFamilySchemaType = z.infer<typeof updateCredencialsFamilySchema>;
