import { z } from "zod";

export const loginSchema = z.object({
  correo: z.string().email({ message: "Introduce un correo valido" }),
  contrasenaHash: z
    .string()
    .min(8, {
      message:
        "Mínimo 8 caracteres, con mayúsculas, minúsculas, números y símbolos",
    })
    .max(25, {
      message: "Una contraseña no puede tener más que 25 caracteres",
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@#$%^&*]).{8,}$/, {
      message:
        "La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial (-_@#$%^&*)",
    }),
});
