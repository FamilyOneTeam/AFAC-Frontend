import { z } from 'zod';
 import { updateCredencialsSchema } from '../schemas/index';

 export type updateCredencialsSchemaType = z.infer<typeof updateCredencialsSchema>;
 