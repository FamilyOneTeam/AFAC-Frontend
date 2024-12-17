import { z } from 'zod';

export const updateCredencialsFamiliesSchema =
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
    terminos: z.boolean(),
    confidencialidad: z.boolean(),
}).superRefine((val, ctx) => {
  if (val.contrasena !== val.repiteContrasena) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'La contraseña y la confirmación deben ser las mismas',
        path: ['repiteContrasena'],
      })
    }
    if (!val.confidencialidad) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Debe aceptar el contrato de confidencialidad',
        path: ['terminos'],
      });
    }

    if (!val.terminos) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Debe aceptar los términos y condiciones',
        path: ['terminos'],
      });
    }
});

export const forgotPasswordSchema = z.object({
  correo: z.string().email({message: 'Introduce un correo valido'}),
});

export const resetPasswordSchema = z.object({
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
}).superRefine((val, ctx) => {
  if (val.contrasena !== val.repiteContrasena) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'La contraseña y la confirmación deben ser las mismas',
        path: ['repiteContrasena'],
      })
    }
});