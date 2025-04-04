import { z } from 'zod';

export const updateCredencialsFamilySchema = z
  .object({
    contrasena: z
      .string()
      .min(8, {
        message: 'Mínimo 8 caracteres, con mayúsculas, minúsculas, números y símbolos',
      })
      .max(25, {
        message: 'Una contraseña no puede tener más que 25 caracteres',
      })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@#$%^&*]).{8,}$/, {
        message:
          'La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial (-_@#$%^&*)',
      }),
    repiteContrasena: z.string(),
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
  })
  .superRefine((val, ctx) => {
    if (val.contrasena !== val.repiteContrasena) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'La contraseña y la repetición deben ser las mismas',
        path: ['repiteContrasena'],
      });
    }
  });
