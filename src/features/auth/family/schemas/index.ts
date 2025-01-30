import { z } from 'zod';

 export const updateCredencialsFamilySchema =
 z.object({
   contrasena: z
     .string()
     .min(8, {
       message: 'Una contraseña tiene que tener un minimo de 8 caracteres',
     })
     .max(25, {
       message: 'Una contraseña no puede tener que tener más que 25 caracteres',
     })
     .regex(/^[a-zA-Z\d_-]{8,}$/, {
       message: 'Password can only contain letters, digits, _, and -',
     }),
     repiteContrasena: z.string()
     .min(8, {
       message: 'Una contraseña tiene que tener un minimo de 8 caracteres',
     })
     .max(25, {
       message: 'Una contraseña no puede tener que tener más que 25 caracteres',
     })
     .regex(/^[a-zA-Z\d_-]{8,}$/, {
       message: 'Password can only contain letters, digits, _, and -',
     }),
    terminos: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Debes aceptar los términos y condiciones',
    }),
  contrato: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Debes aceptar el acuerdo de confidencialidad',
    }),
 }).superRefine((val, ctx) => {
   if (val.contrasena !== val.repiteContrasena) {
       ctx.addIssue({
         code: z.ZodIssueCode.custom,
         message: 'La contraseña y la confirmación deben ser las mismas',
         path: ['repiteContrasena'],
       })
     }
 });