import { z } from 'zod';
import { loginSchema } from '../schemas/index';

export type loginSchemaType = z.infer<typeof loginSchema>;
