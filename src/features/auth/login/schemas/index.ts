import { z } from 'zod';

export const loginSchema = z.object({
    correo: z.string().email({message: 'Introduce un correo valido'}),
    contrasena:
    z.string()
    .min(8, {message: 'Una contraseña tiene que tener un minimo de 8 caracteres'})
    .max(25, {message: 'Una contraseña no puede tener que tener más que 25 caracteres'})
    .regex(/^[a-zA-Z\d_-]{8,}$/, {
      message: 'Password can only contain letters, digits, _, and -',
    }),
});
